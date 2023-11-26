---
layout: page
title: "MS Windows 3.0 SDK Tools"
permalink: /documents/books/mspl13/win/w3sdktl/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  Windows  Software Development Kit - Tools








────────────────────────────────────────────────────────────────────────────
        Microsoft (R) Windows (tm) Software Development Kit - Tools

     development tools for building Microsoft (R) Windows applications
                                VERSION 3.0
────────────────────────────────────────────────────────────────────────────


for the MS-DOS (R) and PC-DOS Operating Systems







Microsoft Corporation

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
U.S. Government Restricted Rights


The SOFTWARE and documentation are provided with RESTRICTED RIGHTS. Use,
duplication, or disclosure by the Government is subject to restrictions as
set forth in subparagraph (c) (1) (ii) of the Rights in Technical Data and
Computer Software clause at  DFARS 252.227-7013 or subparagraphs (c) (1) and
(2) of the Commercial Computer Software
─ Restricted Rights at 48 CFR 52.227-19, as applicable.
Contractor/manufacturer is Microsoft Corporation/One Microsoft Way/Redmond,
WA 98052-6399.


(C) Copyright Microsoft Corporation, 1990. All rights reserved.

Simultaneously published in the U.S. and Canada.


Printed and bound in the United States of America.


Microsoft, MS, MS-DOS, GW-BASIC, QuickC, CodeView, and
XENIX are registered trademarks and Windows is a trademark of Microsoft
Corporation.

AT&T is a registered trademark of American Telephone
and Telegraph Company.

Aldus is a registered trademark of Aldus Corporation.

COMPAQ is a registered trademark of Compaq Computer Corporation.

IBM is a registered trademark of International Business
Machines Corporation.

Intel is a registered trademark of Intel Corporation.

Lotus and 1-2-3 are registered trademarks of Lotus Development
Corporation.

Mac and Macintosh are registered trademarks of Apple Computer,
Inc.

Olivetti is a registered trademark of Ing. C. Olivetti.

Paintbrush is a registered trademark of Zsoft Corporation.

The Symbol fonts provided with Windows 3.0 are based on the CG Times font,
a product of AGFA Compugraphic Division of Agfa Corporation.

Tandy is a registered trademark of Tandy Corporation.

Document No. SY0314b-300-R00-1089






Table of Contents
────────────────────────────────────────────────────────────────────────────



Introduction
     Organization of This Manual
     Building a Windows Application
     Document Conventions
     Summary


PART I  Compilers and Linkers
────────────────────────────────────────────────────────────────────────────


Chapter 1  Compiling Applications: The C Compiler

     1.1   Compiling C-Language Windows Applications
     1.2   Compiler Options
            1.2.1    Memory-Model Options
            1.2.2    Application Development Options
            1.2.3    Dynamic-Link Library Options
     1.3   Summary

Chapter 2  Linking Applications: The Linker

     2.1   Creating Module-Definition Files
            2.1.1    Creating Module Definitions for Applications
            2.1.2    Creating Module Definitions for Libraries
     2.2   Importing Dynamic-Link Libraries
     2.3   Linking an Application
            2.3.1    Using the LINK Command
            2.3.2    Specifying LINK Command Options
            2.3.3    Specifying Libraries on the LINK Command Line
     2.4   Examining Executable File Headers
     2.5   Summary

Chapter 3  Compiling Resources: The Resource Compiler

     3.1   Including Resources in an Application
     3.2   Creating a Resource Script File
     3.3   Using the Resource Compiler
            3.3.1    Compiling Resources Separately
            3.3.2    Defining Names for the Preprocessor
            3.3.3    Renaming the Compiled Resource File
            3.3.4    Controlling the Directories that RC Searches
            3.3.5    Displaying Progress Messages
     3.4   Summary


PART II  Resource Editors
────────────────────────────────────────────────────────────────────────────


Chapter 4  Designing Images: SDKPaint

     4.1   How SDKPaint Works with Files
            4.1.1    File Types
            4.1.2    Icon and Cursor Data: The SDKPAINT.DAT File
     4.2   The SDKPaint Window
     4.3   Opening Files and Images
            4.3.1    Converting Files to 3.0 Format
            4.3.2    Opening Bitmaps
            4.3.3    Opening Icons and Cursors
     4.4   Drawing with SDKPaint Tools
     4.5   Using the SDKPaint Palette
            4.5.1    Working with Opaque, Screen, and Inverse Colors
     4.6   Customizing the Palette
            4.6.1    Editing Colors
            4.6.2    Saving a Palette
            4.6.3    Loading a Customized Palette
     4.7   Defining the Cursor Hotspot
     4.8   Using the Clipboard
     4.9   Using ZoomIn to Examine Images
     4.10  Summary

Chapter 5  Designing Dialog Boxes: The Dialog Editor

     5.1   How the Dialog Editor Works with Files
            5.1.1    The Dialog Script
            5.1.2    The Resource File
            5.1.3    The Include File
     5.2   Installing and Removing Custom Controls
            5.2.1    Installing a Custom Control
            5.2.2    Removing a Custom Control
     5.3   Viewing a Dialog Box: The Dialog Editor Window
            5.3.1    The Mode Display
            5.3.2    The Toolbox
            5.3.3    The Selected Item Status Window
     5.4   Opening Files and Dialog Boxes
            5.4.1    Opening a Resource File
            5.4.2    Opening an Include File
            5.4.3    Opening a Dialog Box
     5.5   Editing Dialog Box Controls
            5.5.1    Adding Controls
            5.5.2    Working with Individual Controls
     5.6   Working with Groups of Controls
            5.6.1    Moving Groups of Controls
            5.6.2    Defining Input Focus Sequence
     5.7   Working with a Dialog Box
            5.7.1    Resizing a Dialog Box
            5.7.2    Renaming a Dialog Box
            5.7.3    Defining Styles
            5.7.4    Setting Memory Flags
            5.7.5    Canceling Edits
     5.8   Moving a Dialog Box Between Resources
     5.9   Working with Include Files
            5.9.1    Creating New Include Files
            5.9.2    Loading Existing Include Files
            5.9.3    Editing Include Files
            5.9.4    Saving Include Files
     5.10  Summary

Chapter 6  Designing Fonts: The Font Editor

     6.1   Opening a Font
     6.2   Editing Characters
            6.2.1    Turning Pixels On or Off
            6.2.2    Changing Rows and Columns of Pixels
            6.2.3    Modifying Blocks of Pixels
            6.2.4    Changing Character Width
            6.2.5    Storing Changes to a Character
            6.2.6    Canceling Changes to a Character
     6.3   Editing a Font
     6.4   Changing Font File Header Information
     6.5   Summary


PART III  Debugging and Optimization Tools
────────────────────────────────────────────────────────────────────────────


Chapter 7  Debugging in Protected Mode: CodeView for Windows

     7.1   Requirements for Use
     7.2   Comparing CVW with Other Microsoft Debuggers
            7.2.1    Differences between CVW and SYMDEB
            7.2.2    Differences between CVW and CodeView for DOS
     7.3   Preparing to Run CVW
            7.3.1    Setting Up a Secondary Monitor
            7.3.2    Setting Up the Debugging Version of Windows
            7.3.3    Preparing Windows Applications for Debugging
     7.4   Starting a Debugging Session
            7.4.1    Starting a Debugging Session for a Single Application
            7.4.2    Starting a Debugging Session for Multiple Instances
                        of an Application
            7.4.3    Starting a Debugging Session for Multiple Applications
            7.4.4    Starting a Debugging Session for DLLs
            7.4.5    Using CVW File Run Options
     7.5   Saving Session Information
     7.6   Working with the CVW Screen
            7.6.1    Using CVW Display Windows
            7.6.2    Using the CVW Menu Bar
     7.7   Getting On-line Help in CVW
     7.8   Displaying Program Data
            7.8.1    Displaying Variables
            7.8.2    Displaying Expressions
            7.8.3    Displaying Arrays and Structures
            7.8.4    Using the Quick Watch Command
            7.8.5    Tracing Windows Messages
            7.8.6    Displaying Memory
            7.8.7    Displaying the Contents of Registers
            7.8.8    Displaying Windows Modules
     7.9   Modifying Program Data
     7.10  Controlling Program Execution
            7.10.1   Continuous Execution
            7.10.2   Single-Step Execution
            7.10.3   Jumping to a Particular Location
            7.10.4   Interrupting Your Program
     7.11  Handling Abnormal Termination of the Application
            7.11.1   Handling a Fatal Exit
            7.11.2   Handling a GP Fault
     7.12  Ending a CVW Session
     7.13  Restarting a CVW Debugging Session
     7.14  Advanced CVW Techniques
            7.14.1   Using Multiple Source Windows
            7.14.2   Calling Functions
            7.14.3   Checking for Undefined Pointers
            7.14.4   Handling Register Variables
            7.14.5   Redirecting CVW Input and Output
     7.15  Customizing CVW with the TOOLS.INI File
     7.16  A Sample Session in CVW
     7.17  Summary

Chapter 8  Debugging in Real Mode: Symbolic Debugger

     8.1   Preparing Symbol Files
            8.1.1    MAPSYM Program
            8.1.2    The Incremental Linker
            8.1.3    Symbols with C-Language Applications
            8.1.4    Symbols with Assembly-Language Applications
     8.2   Setting Up the Debugging Terminal
            8.2.1    Setting Up a Remote Terminal
            8.2.2    Setting Up a Secondary Monitor
     8.3   Starting SYMDEB with Windows
            8.3.1    Specifying SYMDEB Options
            8.3.2    Specifying Symbol Files
            8.3.3    Passing the Application to Windows
            8.3.4    Using SYMDEB Keys
     8.4   Working with Symbol Maps
            8.4.1    Listing the Symbol Maps
            8.4.2    Opening a Symbol Map
            8.4.3    Displaying Symbols
     8.5   Starting the Application
     8.6   Displaying Allocation Messages
            8.6.1    Setting Breakpoints with Symbols
            8.6.2    Displaying Variables
            8.6.3    Displaying Application Source Statements
     8.7   Quitting SYMDEB
     8.8   SYMDEB Command Overview and Tables
            8.8.1    Command Arguments
            8.8.2    Address Arguments
            8.8.3    Expressions
     8.9   SYMDEB Commands
            a ─ Assemble
            ba ─ Breakpoint Address
            bc ─ Breakpoint Clear
            bd ─ Breakpoint Disable
            be ─ Breakpoint Enable
            bl ─ Breakpoint List
            bp ─ Breakpoint Set
            c ─ Compare
            d ─ Dump
            da ─ Dump ASCII
            db ─ Dump Bytes
            dd ─ Dump Doublewords
            df ─ Display Global Free List
            dg ─ Display Global Heap
            dh ─ Display Local Heap
            dl ─ Dump Long Reals
            dm ─ Display Global Module List
            dq ─ Dump Task Queue
            ds ─ Dump Short Reals
            dt ─ Dump Ten-Byte Reals
            du ─ Display Global LRU List
            dw ─ Dump Words
            e ─ Enter
            ea ─ Enter Address
            eb ─ Enter Bytes
            ed ─ Enter Doublewords
            el ─ Enter Long Reals
            es ─ Enter Short Reals
            et ─ Enter Ten-Byte Reals
            ew ─ Enter Words
            f ─ Fill
            g ─ Go
            h ─ Hex
            i ─ Input
            k ─ Backtrace Stack
            kt ─ Backtrace Task Stack
            kv ─ Verbose Backtrace Stack
            l ─ Load
            m ─ Move
            mid─ Macro
            n ─ Name
            o ─ Output
            p ─ Program Step
            q ─ Quit
            r ─ Register
            s ─ Search
            Set Source Mode
            t ─ Trace
            u ─ Unassemble
            v ─ View
            w ─ Write
            x ─ Examine Symbol Map
            xo ─ Open Symbol Map
            z ─ Set Symbol Value
            ? ─ Display Help
            ? ─ Display Expression
            . ─ Source-Line Display
            Redirect Input
            Redirect Output
            Redirect Input and Output
            ! ─ Shell Escape
            * ─ Comment

Chapter 9  Advanced Debugging in Protected Mode: 80386 Debugger

     9.1   Preparing Symbol Files for the 80386 Debugger
     9.2   Starting the Debugger
     9.3   When an Application Fails
     9.4   Debugger Command Format
            9.4.1    Command Keys
            9.4.2    Command Parameters
            9.4.3    Binary and Unary Operators
     9.5   Common Command Directory
            ? ─ Display Expression
            ? ─ Display Help Menu
            .? ─ Display External Commands
            .b ─ Set COM Port Baud Rate
            .df ─ Display Global Free List
            .dg ─ Display Global Heap
            .dh ─ Display Local Heap
            .dm ─ Display Global Module List
            .dq ─ Dump Task Queue
            .du ─ Display Global LRU List
            .reboot ─ Reboot Target System
            bc ─ Clear Breakpoints
            bd ─ Disable Breakpoints
            be ─ Enable Breakpoints
            bl ─ List Breakpoints
            bp ─ Set Breakpoints
            c ─ Compare Memory
            d ─ Display Memory
            db ─ Display Bytes
            dd ─ Display Doublewords
            dg ─ Display GDT
            di ─ Display IDT
            dl ─ Display LDT
            dt ─ Display TSS
            dw ─ Display Words
            e ─ Enter Byte
            f ─ Fill Memory
            g ─ Go
            h ─ Hexadecimal Arithmetic
            i ─ Input Byte
            j ─ Conditional Execute
            k ─ Backtrace Stack
            ka ─ Set Backtrace Arguments
            kt ─ Backtrace Task Stack
            kv ─ Verbose Backtrace Stack
            la ─ List Absolute Symbols
            lg ─ List Groups
            lm ─ List Map
            ln ─ List Near
            ls ─ List Symbols
            m ─ Move Memory
            o ─ Output to Port
            p ─ Program Trace
            r ─ Display Registers
            s ─ Search Bytes
            t ─ Trace Instructions
            u ─ Unassemble Bytes
            v ─ Set Interrupt Vector Trapping
            vl ─ Display Interrupt Trapping Information
            w ─ Change Map
            y ─ Debugger Option Command
            z ─ Zap Embedded INT 1 and INT 3 Instructions
            zd ─ Execute Default Command String
            zl ─ Display Default Command String
            zs ─ Change Default Command String
     9.6 386 Enhanced Windows Environment Commands
     9.7 Summary

Chapter 10  Monitoring Messages: Spy

     10.1  Displaying Messages
     10.2  Choosing Options
            10.2.1    Choosing Messages
            10.2.2    Choosing the Output Device
            10.2.3    Choosing Frequency of Output
     10.3  Choosing a Window: The Window Menu
     10.4  Turning Spy On and Off: The Spy Menu
     10.5  Summary

Chapter 11  Viewing the Heap: Heap Walker

     11.1  How Heap Walker Views Memory
            11.1.1    Viewing the Heap in Protected Mode
            11.1.2    Viewing the Heap in Real Mode
     11.2  The Heap Walker Window
     11.3  Using Heap Walker Commands
            11.3.1    Performing File Operations: The File Menu
            11.3.2    Walking the Heap: The Walk and EmsWalk Menus
            11.3.3    Sorting Memory Objects: The Sort Menu
            11.3.4    Displaying Memory Objects: The Object Menu
            11.3.5    Allocating Memory: The Alloc Menu
            11.3.6    Determining Memory Size: The Add! Menu
     11.4  Suggestions for Using Heap Walker
     11.5  Summary

Chapter 12  Moving Memory: Shaker

     12.1  Using Shaker
     12.2  Summary

Chapter 13  Analyzing CPU Time: Profiler

     13.1  Overview of Profiler
     13.2  Preparing to Run Profiler
     13.3  Using Profiler Functions
            13.3.1    Starting and Stopping Sampling: The ProfStart and
                         ProfStop Functions
            13.3.2    Checking if Profiler Is Installed: The ProfInsChk
                         Function
            13.3.3    Setting the Sampling Rate: The ProfSampRate Function
            13.3.4    Managing Output: The ProfClear, ProfFlush,
                         and ProfSetup Functions
            13.3.5    Stopping Profiler: The ProfFinish Function
     13.4  Sampling Code
            13.4.1    Sampling Applications in Windows Real Mode
            13.4.2    Sampling Applications in Windows 386 Enhanced Mode
     13.5  Displaying Samples: SHOWHITS.EXE
     13.6  Summary

Chapter 14  Analyzing Swaps: Swap

     14.1  Preparing to Run Swap
            14.1.1    Files You Need to Run Swap
            14.1.2    Using the SwapRecording Function
     14.2  Running Swap
            14.2.1    Specifying a Symbol-File Path
            14.2.2    Specifying a Pathname for the Data Collection File
            14.2.3    Specifying a Module and Segment
     14.3  Displaying Output
     14.4  Summary


PART IV  Help Tools
────────────────────────────────────────────────────────────────────────────


Chapter 15  Providing Help: The Help System

     15.1  Creating a Help System: The Development Cycle
     15.2  How Help Appears to the User
     15.3  How Help Appears to the Help Writer
     15.4  How Help Appears to the Help Programmer
     15.5  Summary

Chapter 16  Planning the Help System

     16.1  Developing a Plan
            16.1.1    Defining the Audience
            16.1.2    Planning the Content of the Help System
            16.1.3    Planning the Structure of Help Topics
            16.1.4    Displaying Context-Sensitive Help Topics
     16.2  Determining the Topic File Structure
            16.2.1    Choosing a File Structure for Your Application
     16.3  Designing the Appearance of Help Topics
            16.3.1    Layout of the Help Text
            16.3.2    Type Fonts and Sizes
            16.3.3    Graphic Images
     16.4  Summary

Chapter 17  Creating the Help Topic Files

     17.1  Choosing an Authoring Tool
     17.2  Structuring Help Topic Files
     17.3  Coding Help Topic Files
            17.3.1    Assigning Build Tags
            17.3.2    Assigning Context Strings
            17.3.3    Assigning Titles
            17.3.4    Assigning Key Words
            17.3.5    Assigning Browse Sequence Numbers
            17.3.6    Creating Cross-References Between Topics
            17.3.7    Defining Terms
     17.4  Inserting Graphic Images
            17.4.1    Creating and Capturing Bitmaps
            17.4.2    Placing Bitmaps Using a Graphical Word Processor
            17.4.3    Placing Bitmaps by Reference
     17.5  Managing Topic Files
            17.5.1    Keeping Track of Files and Topics
            17.5.2    Creating a Help Tracker
     17.6  Summary

Chapter 18  Building the Help File

     18.1  Creating the Help Project File
     18.2  Specifying Topic Files: The Files Section
     18.3  Specifying Build Tags: The BuildTags Section
     18.4  Specifying Options: The Options Section
            18.4.1    Specifying Error Reporting: The Warning Option
            18.4.2    Specifying Build Topics: The Build Option
            18.4.3    Specifying the Root Directory: The Root Option
            18.4.4    Specifying the Index: The Index Option
            18.4.5    Assigning a Title to the Help System: The Title
                         Option
            18.4.6    Converting Fonts: The Forcefont Option
            18.4.7    Changing Font Sizes : The Mapfontsize Option
            18.4.8    Multiple Key-Word Tables: The Multikey Option
            18.4.9    Compressing the File: The Compress Option
     18.5  Specifying Alternate Context Strings: The Alias Section
     18.6  Mapping Context-Sensitive Topics: The Map Section
     18.7  Including Bitmaps by Reference: The Bitmaps Section
     18.8  Compiling Help Files
            18.8.1    Using the Help Compiler
     18.9  Programming the Application to Access Help
            18.9.1    Calling WinHelp from an Application
            18.9.2    Getting Context-Sensitive Help
            18.9.3    Getting Help on an Item Listed on the Help Menu
            18.9.4    Accessing Additional Key-Word Tables
            18.9.5    Canceling Help
     18.10 Summary

Chapter 19  Help Examples and Compiler Error Messages

     19.1  Help Topic Examples
     19.2  Help Compiler Error Messages
            19.2.1    Errors During Processing of Project File
            19.2.2    Errors During Processing of RTF Topic Files

Index




Introduction
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) Windows(tm) Software Development Kit Tools manual explains
how to use the programming tools that come with the Microsoft Windows
Software Development Kit (SDK). This manual also explains how to use some
additional tools, such as the C Compiler and linker, that don't come with
the SDK but which you will need in order to create Windows applications.

This introductory chapter describes the following topics:


  ■   The general organization of Tools

  ■   An overview of the steps involved in creating a Windows application

  ■   The notational conventions used throughout the manual

  ■   Related documentation




Organization of This Manual

This manual is divided into four parts, each of which contains several
chapters.

Part 1, "Compilers and Linkers," explains how to compile and link your
source files. Part 1 consists of the following chapters.


  ■   Chapter 1, "Compiling Applications: The C Compiler," explains how to
      use the C Compiler (CL) to compile C-language source files for Windows
      applications.

  ■   Chapter 2, "Linking Applications: The Linker," explains how to use the
      linker (LINK) to link compiled source files into an executable Windows
      application.

  ■   Chapter 3, "Compiling Resources: The Resource Compiler," explains how
      to use the Resource Compiler (RC) to compile application resources and
      add them to an executable Windows application.


Part 2, "Resource Editors," explains how to create and maintain Windows
program resources, such as icons and bitmaps, using the tools that come with
the SDK. Part 2 consists of the following chapters:


  ■   Chapter 4, "Designing Images: SDKPaint," explains how to use SDKPaint
      (SDKPAINT) to create and edit icons, cursors, and bitmaps for Windows
      applications.

  ■   Chapter 5, "Designing Dialog Boxes: The Dialog Editor," explains how
      to use the Dialog Editor (DIALOG) to create and edit dialogs for
      Windows applications.

  ■   Chapter 6, "Designing Fonts: The Font Editor," explains how to use the
      Font Editor (FONTEDIT) to create and edit font files for Windows
      applications.


Part 3, "Debugging and Optimization Tools," explains how to use the
debugging and testing tools that come with the SDK. Part 3 consists of the
following chapters:


  ■   Chapter 7, "Debugging in Protected Mode: CodeView for Windows,"
      explains how to use CodeView(R) for Windows (CVW) to debug Windows
      applications that run in protected mode.

  ■   Chapter 8, "Debugging in Real Mode: Symbolic Debugger," explains how
      to use the Symbolic Debugger (SYMDEB) to debug Windows applications
      that run in real mode.

  ■   Chapter 9, "Advanced Debugging in Protected Mode: 80386 Debugger,"
      explains how to use the 80386 Debugger (WDEB386) to debug Windows
      applications that run in protected mode.

  ■   Chapter 10, "Monitoring Messages: Spy," explains how to use Spy (SPY)
      to monitor a window receiving system messages.

  ■   Chapter 11, "Viewing the Heap: Heap Walker," explains how to use Heap
      Walker (HEAPWALK) to open and examine the global heap.

  ■   Chapter 12, "Moving Memory: Shaker," explains how to use Shaker
      (SHAKER) to see the effect of memory movement on applications.

  ■   Chapter 13, "Analyzing CPU Time: Profiler," explains how to use
      Profiler (PROFILER) to analyze and optimize the performance of
      moveable code.

  ■   Chapter 14, "Analyzing Swaps: Swap," explains how to use Swap (SWAP)
      to analyze and optimize your application's swapping behavior.


Part 4, "Help Tools," explains how to plan, write, and compile a Windows
Help system. Part 4 consists of the following chapters:


  ■   Chapter 15, "Providing Help: The Help System," gives an overview of
      the Help system from the point of view of the user, the Help writer,
      and the Help programmer.

  ■   Chapter 16, "Planning the Help System," explains what considerations
      the Help writer should keep in mind when planning a Help system.

  ■   Chapter 17, "Creating the Help Topic Files," explains how to write and
      code Help text files.

  ■   Chapter 18, "Building the Help File," explains how to build a Help
      resource file.

  ■   Chapter 19, "Help Examples and Compiler Error Messages," shows example
      topic files in several word processors, together with their
      corresponding Help display. The chapter also includes a listing of
      Help compiler error messages.



Building a Windows Application

You can build a Windows application using any ASCII text editor and the
tools described in this manual. This section briefly explains the process
involved in creating a Windows application, and highlights the role that the
development tools play in this process.

To build a Windows application, do the following:


  1.  Using a text editor, create C-language or assembly-language source
      files that contain the WinMain function, window functions, and other
      application code.

  2.  Create any cursor, icon, bitmap, dialog, and font resources the
      application will need with the resource editors (SDKPAINT, DIALOG, and
      FONTEDIT).

  3.  Produce a resource script (.RC) file that defines all of the
      application's resources. The script file, which you create with a text
      editor, lists and names the resources you created in the preceding
      step. It also defines menus, dialog boxes, and other resources, such
      as string tables and application-defined resources.

  4.  Use the Resource Compiler with the -r switch to compile the resource
      script (.RC) file into a binary resource (.RES) file.

  5.  Use a text editor to create the module-definition (.DEF) file.

  6.  Compile all C-language sources with the C Compiler. Use the Microsoft
      Macro Assembler (MASM) to assemble all assembly-language sources.

  7.  Using LINK, link the compiled and/or assembled source files with your
      Windows and C run-time libraries. This produces a file with the .EXE
      extension; however, you cannot execute such a file, because it does
      not yet include the compiled resources.

  8.  Use RC without the -r switch to add the binary resource (.RES) file to
      the .EXE file. This produces an executable Windows application.

  9.  Track down program errors and other problems with the Windows
      debuggers: CodeView for Windows and the Symbolic Debugger. The Spy
      program is useful for monitoring the Windows messages your program
      receives. The Shaker program lets you simulate memory movements that
      occur in the Windows multitasking environment.

  10. Fine-tune your program with Windows optimization tools, Profiler and
      Swap, so that it runs faster and uses memory more efficiently.

  11. Build your program's help system with the Windows Help tools. This
      step can take place during, rather than after, the
      application-development process.


The following figure shows the steps required to build a Windows
application.

(This figure may be found in the printed book).

The figure "Building a Windows Application" does not include the debugging,
optimization, or Help tools.


Document Conventions

Throughout this manual, the term "DOS" refers to both MS-DOS(R) and PC-DOS,
except when noting features that are unique to one or the other.

The following document conventions are used throughout this manual:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Convention                        Description of Convention
────────────────────────────────────────────────────────────────────────────
Bold text                         Bold text indicates a specific term or
                                  punctuation mark intended to be used
                                  literally: language key words or
                                  functions (such as EXETYPE or
                                  CreateWindow), DOS commands, and
                                  command-line options (such as /Zi). You
                                  must type these terms and punctuation
                                  marks exactly as shown. However, the use
                                  of uppercase or lowercase letters is not
                                  always significant. For instance, you
Convention                        Description of Convention
────────────────────────────────────────────────────────────────────────────
                                  always significant. For instance, you
                                  can invoke the linker by typing either
                                  LINK, link, or Link at the DOS prompt.

( )                               In syntax statements, parentheses
                                  enclose one or more parameters that you
                                  pass to a function.

Italic text                       Italic text indicates a placeholder; you
                                  are expected to provide the actual value.
                                  For example, the following syntax for
                                  the Set-
                                  CursorPos function indicates that you
                                  must substitute values for the X and Y
                                  coordinates, separated by a comma:
                                  SetCursorPos(X, Y)

Monospaced type                   Code examples are displayed in a
                                  nonproportional typeface.
Convention                        Description of Convention
────────────────────────────────────────────────────────────────────────────
                                  nonproportional typeface.

BEGIN . . .END                    A vertical ellipsis in a program example
                                  indicates that a portion of the program
                                  is omitted.

. . .                             An ellipsis following an item indicates
                                  that more items having the same form may
                                  appear. In the following example, the
                                  horizontal ellipsis indicates that you
                                  can specify more than one breakaddress
                                  value for the g command:

                                   g «=startaddress» «breakaddress»...

« »                               Double brackets enclose optional fields
                                  or parameters in command lines and
                                  syntax statements. In the following
                                  example, option and executable-file are
Convention                        Description of Convention
────────────────────────────────────────────────────────────────────────────
                                  example, option and executable-file are
                                  optional parameters of the RC command:


                                  RC «option» filename «executable-file»

|                                 A vertical bar indicates that you may
                                  enter one of the entries shown on either
                                  side of the bar. The following
                                  command-line syntax illustrates the use
                                  of a vertical bar:

                                  DB «address | range»

                                  The bar indicates that following the
                                  Dump Bytes command (DB), you can specify
                                  either an address or a range.

" "                               Quotation marks set off terms defined in
Convention                        Description of Convention
────────────────────────────────────────────────────────────────────────────
" "                               Quotation marks set off terms defined in
                                  the text.

{ }                               Curly braces indicate that you must
                                  specify one of the enclosed items.

SMALL CAPITAL LETTERS             Small capital letters indicate the names
                                  of keys and key sequences, such as: ALT
                                  + SPACEBAR




Microsoft Windows Software Development Kit Documentation Set

Throughout this documentation set "SDK" refers specifically to the Microsoft
Windows Software Development Kit and its contents. The SDK includes the
following manuals:

Title                             Contents
────────────────────────────────────────────────────────────────────────────
Installation and                  Provides an orientation to the SDK,
Update Guide                      explains how to install the SDK software,
                                  and highlights the changes for version
                                  3.0.

Guide to Programming              Explains how to write Windows
                                  applications, and provides sample
                                  applications that you can use as
                                  templates for writing your own programs.
                                  The Guide to Programming also addresses
                                  some advanced Windows programming
                                  topics.

Tools                             Explains how to use the
                                  software-development tools you'll need
                                  to build Windows applications, such as
                                  debuggers and specialized SDK editors.

Reference                         Is a comprehensive guide to all the
                                  details of the Microsoft Windows
                                  application program interface (API). The
                                  Reference lists in alphabetical order
                                  all the current functions, messages, and
                                  data structures of the API, and provides
                                  extensive overviews on how to use the
                                  API.

System Application Architecture,  Provides guidelines and recommendations
Common User Access: Advanced      for writing programs that appear and act
Interface Design Guide            consistently like other Microsoft
                                  Windows applications.


Summary

This introductory chapter explained the organization of Tools, and briefly
described the tools and processes you use to build Windows applications.

For more information about building Windows applications, see Guide to
Programming.






PART I  Compilers and Linkers
────────────────────────────────────────────────────────────────────────────

Part 1 describes how to use the C Compiler to compile your C-language source
code modules, the linker to link your compiled or assembled source files
with your Microsoft Windows and C run-time libraries, and the Resource
Compiler to produce an executable Windows application.






Chapter 1  Compiling Applications: The C Compiler
────────────────────────────────────────────────────────────────────────────

Many Microsoft Windows applications are written in the C programming
language and are compiled using the Microsoft C Compiler (CL). This chapter
describes the following topics:


  ■   A brief overview of how to write C-language Windows applications

  ■   How to use the Microsoft C Compiler to compile C-language Windows
      applications


This chapter deals only with the special compilation requirements of
C-language Windows applications. For complete information on using the C
Compiler, see the Microsoft C documentation. For information on writing
Windows applications using the C language, see the Guide to Programming.


1.1  Compiling C-Language Windows Applications

To compile a C-language Windows application, use the Microsoft C Compiler.
The compiler comes with Microsoft C; it is not included in the Microsoft
Windows Software Development Kit (SDK). Microsoft Windows requires version
5.1 or later of Microsoft C, or version 2.0 or later of Microsoft QuickC
(R). To start the Microsoft C Compiler, use the CL command. Table 1.1, "C
Compiler Options for Windows Applications," lists and describes the options
commonly used for compiling Windows applications.

Table 1.1  C Compiler Options for Windows Applications

╓┌───────┌─────────────────────────────────┌─────────────────────────────────╖
Option  What It Does                      When to Use It
────────────────────────────────────────────────────────────────────────────
-AC     Compiles the application for the  Used when an application has one
        compact memory model.             code segment but multiple data
                                          segments.

-AL     Compiles the application for the  Used when an application has
        large memory model.               multiple segments for both code
                                          and data.



Table 1.1  C Compiler Options for Windows Applications (continued)

╓┌───────┌─────────────────────────────────┌─────────────────────────────────╖
Option  What It Does                      When to Use It
────────────────────────────────────────────────────────────────────────────
-AM     Compiles the application for the  Used when an application has
        medium memory model.              multiple code segments but one
                                          data segment. Can also be used
                                          to create applications using the
                                          mixed memory model. See Guide to
                                          Programming for a description of
                                          the mixed memory model.

-AS     Compiles the application for the  Used when an application has
        small memory model.               only one code and one data
                                          segment. Can also be used to
                                          create applications using the
                                          mixed memory model.

-Aw     Ensures that pointers receive     Used when compiling a
Option  What It Does                      When to Use It
────────────────────────────────────────────────────────────────────────────
-Aw     Ensures that pointers receive     Used when compiling a
        their proper segment addresses    dynamic-link library (DLL).
        when cast to 32-bit addresses.

-c      Compiles only.                    Required if you have more than
                                          one C source module and you want
                                          to separate linking from
                                          compiling.

-Gs     Removes stack probes, thereby     Recommended for all Windows
        improving performance.            applications after the
                                          development process is complete.

-Gw     Adds the Windows prolog and       Required for all Windows source
        epilog to all functions.          code modules. (May be used for
                                          source code modules that do not
                                          contain exported (callback)
                                          functions; but -GW is
                                          recommended in this case.)
Option  What It Does                      When to Use It
────────────────────────────────────────────────────────────────────────────
                                          recommended in this case.)

-GW     Substitutes a reduced Windows     Recommended for Windows source
        prolog and epilog to functions    code modules that do not contain
        that are far calls within the     exported or callback functions.
        application. (Available only
        with C version 6.0 and later.)

-Os     Optimizes for code size instead   Recommended for all Windows
        of speed.                         source code modules.

-Ow     Relaxes alias checking within     Recommended instead of
        certain constraints imposed by    non-Windows -Oa relax-alias-
        the Windows environment.          checking option.
        (Available only with C version
        6.0 and later.)

-Zd     Creates an object file for use    Required for debugging the
        with the Symbolic Debugger (      source-code module using SYMDEB
Option  What It Does                      When to Use It
────────────────────────────────────────────────────────────────────────────
        with the Symbolic Debugger (      source-code module using SYMDEB
        SYMDEB) or the 80386 Debugger (   or WDEB386.
        WDEB386).

-Zi     Creates an object file for use    Required for debugging the
        with CodeView for Windows (CVW).  source-code module using CVW.

-Zp     Packs structures on single-byte   Required for all Windows source
        boundaries.                       code modules that use structures.


────────────────────────────────────────────────────────────────────────────



In addition to the options in Table 1.1, "C Compiler Options for Windows
Applications," which most Windows applications use, you can supply other
compiler options as necessary. Section 1.2, "Compiler Options," describes
more fully many of the options you may want to use.

In the following example, the source file TEST.C is compiled using the
recommended CL options for a small-model Windows application source file
during application development.

  CL -c -Os -Gw -AS -Zdp TEST.C

With these options, the compiler suppresses linking (-c), optimizes for size
(-Os), adds the Windows prolog and epilog to exported functions (-Gw), uses
the small memory model (-AS), provides line-number information (-Zd), and
packs structures (-Zp).


1.2  Compiler Options

This section describes some compiler options you may want to use when
compiling a Windows application. For a complete description of the C
Compiler options, see the Microsoft C Optimizing Compiler User's Guide.

This section describes the following types of compiler options:


  ■   Memory-model options, which let you compile medium, compact, and
      large-model applications. (By default, the compiler uses the small
      memory model.)

  ■   Options you may want to set during application development.

  ■   Options for compiling dynamic-link libraries.




1.2.1  Memory-Model Options

Windows applications can use the small, medium, compact, or large memory
model. (Windows does not support the huge memory model.)

You specify a programming model by supplying the appropriate compiler option
on the CL command line when you compile the application source files. You
base your choice on the application's need for data and code. The
memory-model compiler options are:

Memory Model                      Compiler Option
────────────────────────────────────────────────────────────────────────────
Small                             -AS

Medium                            -AM

Compact                           -AC

Large                             -AL

The compact and large memory models are not recommended for Windows
applications, unless you're creating a Windows application by porting an
existing compact or large-model application from the DOS environment. This
is because Windows requires that all data segments of compact and
large-model applications be fixed, and Windows can run only one instance of
an application with far data segments. The following statement must be in
the module-definition (.DEF) file of any compact or large-model application:


  DATA FIXED

When compiling medium, compact, and large-model source files for Windows
applications, you can specify the names of the code and data segments to
which each source belongs. Use the -NT option to specify code segments; use
the -ND option for data segments. If you do not use these options, the C
Compiler assumes that the source belongs to the standard code and data
segments, _TEXT and _DATA.

For more information on memory models, see Guide to Programming and the
appropriate Microsoft C documentation.


1.2.2  Application Development Options

To make application development and debugging easier, the C Compiler
includes options for the following:


  ■   Provides line-number information so you can display program lines

  ■   Lets you turn off optimization to make debugging easier

  ■   Lets you disable stack probes




Preparing for Debugging

Windows applications written in C are easier to debug if the compiler adds
debugging information to the object file. You can then use the Symbolic
Debugger (SYMDEB) utility or CodeView for Windows (CVW) to help you debug
your application.

To add debugging information used by SYMDEB, compile your application  with
the -Zd option. This option produces an object file containing line-number
records corresponding to the line numbers of the source file, as well as
global-symbol information which SYMDEB uses. For more information on SYMDEB,
see Chapter 8, "Debugging in Real Mode: Symbolic Debugger."

To add debugging information used by CVW, use the -Zi option when you
compile. The resulting object file contains full symbolic-debugging
information, including local function-variable information, full
symbol-table information, and line numbers. For more information on CVW, see
Chapter 7, "Debugging in Protected Mode: CodeView for Windows."


Turning Off Optimization

While an application is in development, you may want to turn off optimizing
to make debugging easier. (By default, the C Compiler optimizes for speed.)
To turn off program optimization, use the -Od option.


Using Stack Probes

By default, the compiler provides stack probes. Stack probes can be useful
during application development, but they can cause a slight performance
degradation. When the application-development process is complete, it's a
good idea to turn off the stack probes by using the -Gs option.


1.2.3  Dynamic-Link Library Options

When compiling DLLs, you should specify the following compiler options:


  ■   The -Gw option, to ensure that exported functions receive the Windows
      prolog and epilog. (For modules that do not contain exported
      functions, you can use the -GW option instead to reduce the size of
      the prolog and epilog.)

  ■   The -Aw option, to ensure that pointers receive their proper segment
      addresses when cast to 32-bit addresses. The -Aw option must follow or
      be combined with the -AC, -AL, -AM, or -AS option, as appropriate.


Dynamic-link libraries written in C have slightly different requirements
than do Windows applications written in C. Unlike Windows applications,
dynamic-link libraries are not executable programs; although a library is
loaded, it does not execute directly. Instead, the code in a library is made
available to all applications that need to use it, and an application can
execute a portion of the library by calling one of the exported functions in
the library.

Like exported (callback) functions in Windows applications, exported
functions in libraries must have the Windows prolog and epilog. This means
that, for dynamic-link libraries, the -Gw option is required. Exported
functions should be listed in the library's module-definition file. See
Chapter 2, "Linking Applications: The Linker," for information about
module-definition files.

You should compile dynamic-link libraries with the -Aw option; this ensures
that pointers receive their proper segment addresses when cast to 32-bit
addresses. Libraries always use the stack of the calling application for
parameters and local variables. This means that the values of the DS and SS
registers are not equal when the library is executed. Because the C Compiler
generates code that assumes that the DS and SS registers are equal,
dynamic-link libraries may fail unless compiled with the -Aw option. This
option directs the compiler to generate code that does not assume that the
registers are equal.

The following example shows the recommended options for compiling libraries:


  CL -c -AMw -Gsw -Os TESTLIB.C


1.3  Summary

The Microsoft C Compiler compiles C-language Windows applications. For more
information about using the compiler, see the Microsoft C documentation.






Chapter 2  Linking Applications: The Linker
────────────────────────────────────────────────────────────────────────────

You create executable Microsoft Windows applications and libraries by
linking your compiled source files using the linker (LINK). LINK takes your
compiled sources, a list of libraries, and a module-definition file, and
creates a file that you can load and run with Windows.

LINK comes with Microsoft C; it is not included in the Microsoft Windows
Software Development Kit (SDK). Windows requires version 5.1 or later of
Microsoft C, or version 2.0 or later of Microsoft QuickC.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

Microsoft C version 5.1 and Microsoft QuickC versions 2.0 and later include
two linkers. If you are developing your application with one of these
versions, use the segmented-executable linker.
────────────────────────────────────────────────────────────────────────────

Microsoft C version 6.0 includes ILINK, the incremental linker. This linker
does not relink files that have already been linked and that have not
changed. ILINK also directly creates .SYM files for use by the Symbolic
Debugger (SYMDEB). ILINK also uses the .SYM files it creates to avoid
unnecessary relinking. For more information on ILINK, see the Microsoft C
6.0 documentation.

This chapter describes the following topics:


  ■   Module-definition files

  ■   The difference between applications' and libraries' module-definition
      files

  ■   How to use LINK to link Windows applications



2.1  Creating Module-Definition Files

Every Windows application and library must have a "module-definition file."
A module-definition file is an ordinary text file that defines the
application's contents and system requirements. When you link a Windows
application, the linker uses the information in the application's
module-definition file to determine how to set up the application (for
example, how large to make the application's default stack, or whether to
mark a particular code segment as moveable in memory).

You create a module-definition file using an ordinary ASCII text editor. The
file can have any filename you want, but must have the filename extension
.DEF.

Every module-definition (.DEF) file contains one or more statements. Each
statement defines a specific attribute of the application or library, such
as its module name, the number and type of program segments, or the number
and names of exported and imported functions.

Windows module-definition files can contain the following statements:

Statement                         Usage
────────────────────────────────────────────────────────────────────────────
CODE                              Defines code-segment attributes, such as
                                  whether or not a segment is moveable in
                                  memory.

DATA                              Defines data-segment attributes, such as
                                  whether there are single or multiple
                                  data segments, and whether a segment is
                                  moveable in memory.

DESCRIPTION                       Briefly describes the module.

EXETYPE                           Tells LINK what type of .EXE header to
                                  use (Windows or OS/2).

EXPORTS                           Lists functions in this module that will
                                  be called by Windows or other
                                  applications. For example, an
                                  application's .DEF file always lists the
                                  application's window functions, since
                                  Windows must call these functions in
                                  order for the application to work
                                  properly.

HEAPSIZE                          Specifies the default size of the local
                                  heap in bytes. The recommended size is
                                  5K.

IMPORTS                           Lists other applications' functions that
                                  this module calls. For example, if you
                                  wrote a library of utility functions, an
                                  application would have to import those
                                  functions before it could use them. (You
                                  can also import library functions using
                                  the IMPLIB utility. See Section 2.2,
                                  "Importing Dynamic-Link Libraries," for
                                  more information.)

LIBRARY                           Specifies the module name of a
                                  dynamic-link
                                  library.

NAME                              Specifies the module name of an
                                  application.

SEGMENTS                          Specifies the attributes of additional
                                  code or data segments.

STACKSIZE                         Determines the default size of the local
                                  stack in bytes. The recommended size is
                                  5K.

Statement                         Usage
────────────────────────────────────────────────────────────────────────────
STUB                              Specifies the application's old-style
                                  (DOS
                                  environment) executable file.

For details on the module-definition statements, see the Reference, Volume
2.

Because Windows applications and libraries have different needs, the
statements you include in a .DEF file will differ slightly, depending on
whether you are creating the .DEF file for an application or for a library.
The rest of this section describes the specific module-definition needs of
applications and libraries.


2.1.1  Creating Module Definitions for Applications

A module-definition file for an application must include the following
statements:


  ■   A NAME statement that defines the application's module name. Windows
      uses the module name to identify the application. The module name must
      match the application's base filename.

  ■   An EXPORTS statement that lists functions in the module that Windows
      or other applications will call, such as window and callback
      functions.

  ■   An EXETYPE WINDOWS statement, which enables the application to run in
      the Windows environment. This statement tells LINK to use a Windows
      executable-file header instead of an OS/2 header (the default).


Although these are the only required statements in the .DEF file, most .DEF
files contain additional statements, such as the DATA and CODE statements,
to define other aspects of the application.

The following example shows a typical .DEF file for a Windows application:

  ; Sample Module Definition File
   "NAME Sample
   DESCRIPTION 'Sample Window Application'

   EXETYPE WINDOWS

   DATA MULTIPLE MOVEABLE
   CODE MOVEABLE DISCARDABLE

   HEAPSIZE 5120
   STACKSIZE 5120

   EXPORTS
    MainWndProc @1      SampleDlgProc @2

This is an example of a module-definition file for an application named
"Sample".

"

The NAME statement defines the application's module name as "Sample".



The required statement EXETYPE WINDOWS ensures that LINK gives the
application a Windows-format header.



The DATA MULTIPLE statement tells LINK that this module has multiple data
segments (one for each instance of the application). For most Windows
applications, the data segment should be defined as MULTIPLE, since most
Windows applications can be invoked more than once.



The CODE MOVEABLE DISCARDABLE and previous DATA MULTIPLE MOVEABLE statements
tell LINK that both the data and code segments are moveable and that the
code segment is discardable. It's a good idea to use moveable and
discardable code segments and moveable data segments, since they allow
Windows to take best advantage of memory.



The heap and stack sizes are the recommended 5120 bytes. Heap space is
required if the application uses its local heap. It's a good idea for
applications to have at least 5120 bytes of stack space.



The EXPORTS statement lists the callback functions in the application: the
main window function, named "MainWndProc", and a dialog function,
"SampleDlgProc".


2.1.2  Creating Module Definitions for Libraries

A module-definition file for a dynamic-link library must contain the
following statements:


  ■   A LIBRARY statement that defines the library's module name. Windows
      uses the module name to identify the library.

  ■   An EXPORTS statement that lists the functions to be exported by the
      library; the functions should be exported by ordinals rather than by
      name, since using ordinals conserves space. Functions in the library
      are accessible to other applications only if they are listed in the
      EXPORTS statement.

  ■   An EXETYPE WINDOWS statement, which enables the library to run in the
      Windows environment. This statement tells LINK to use a Windows
      executable-file header instead of an OS/2 header (the default).


In addition to these required statements, .DEF files for libraries can
include other statements.

The following example shows a typical .DEF file for a library:

  ; Example Module Definition File
   "LIBRARY MyUtilities
   DESCRIPTION 'My Utility Functions'

   EXETYPE WINDOWS

   DATA SINGLE MOVEABLE
   CODE MOVEABLE DISCARDABLE

   HEAPSIZE 4096

   EXPORTS
    UtilityInit @1
    UtilityStart @2
    UtilityEnd @3
    UtilityLoad @4
    UtilitySave @5

This is a sample module-definition file for a Windows dynamic-link library.

"

The LIBRARY statement defines the library's module name as MyUtilities.



The required statement EXETYPE WINDOWS ensures that LINK gives the library a
Windows-format header.



The statement DATA SINGLE MOVEABLE tells LINK that this library module has a
single data segment. Unlike an application, of which several copies can be
running at a time, Windows allows only one instance of a library at a time.



The heap size is 4096 bytes. Because libraries never have stacks, the
library's .DEF file contains no STACK statement; libraries use the stack of
the calling application.



The required statement EXPORTS lists the library's exported functions by
name and ordinal number. An application can then call these functions if the
functions' names or ordinals are listed in the IMPORTS statement of the
application's .DEF file.


2.2  Importing Dynamic-Link Libraries

When you link an application that makes function calls to a dynamic-link
library (DLL), you must identify the imported functions using one of the
following methods:


  ■   Use the IMPORTS statement in the application's module-definition file.
      Section 2.1.2, "Creating Module Definitions for Libraries," describes
      this method.

  ■   Use the IMPLIB utility to create a library of imported functions and
      specify the library in the LINK command line, as described in this
      section.


You can create import libraries by using the IMPLIB utility. IMPLIB reads
the exports for a library, as listed in its definition file, and creates an
import library. You can link the library into an application.

────────────────────────────────────────────────────────────────────────────
NOTE

IMPLIB does not come on the SDK disks. It is shipped with the Microsoft C
Compiler. If you did not request IMPLIB to be copied when you installed the
C Compiler, you may want to copy it from the C Compiler disks.
────────────────────────────────────────────────────────────────────────────

You start IMPLIB by using the IMPLIB command.


Syntax

  IMPLIB imp-lib-name mod-def-file

The imp-lib-name parameter specifies the name you want the new import
library to have.

The mod-def-file parameter specifies the name of the module-definition
(.DEF) file for the dynamic-link library. For IMPLIB version 1.1 and later,
distributed with Microsoft C version 6.0 and later, you can provide IMPLIB
the name of the DLL itself instead of the DLL's module-definition file.

The following command creates the import library named MYLIB.LIB from the
module-definition file MYLIB.DEF:

  IMPLIB MYLIB.LIB MYLIB.DEF

To link the library, specify it in the LINK command line, as in the
following example:

  LINK SAMPLE, SAMPLE.EXE, , /NOD SLIBCEW LIBW MYLIB, SAMPLE.DEF

The example links the import library MYLIB.LIB.

For more information on specifying libraries, see Section 2.3.3, "Specifying
Libraries on the LINK Command Line."


2.3  Linking an Application

You can link object (.OBJ) files from compiled application source files,
libraries, and module-definition files into an executable file using the
linker. The LINK program comes with Microsoft C version 5.1; it is not
included in the SDK.

LINK combines the code and data of all application files with the
appropriate code for any Windows functions that the application calls, and
creates a new executable file or DLL.


2.3.1  Using the LINK Command

To start the linker, you use the LINK command. You can type this command on
the DOS command line, or you can enter it in a batch file or a make file.


Syntax

  LINK «options» object-files,«exe-file»,«map-file», «lib-files»,def-file

The options parameter specifies one or more key words (described in Section
2.3.2, "Specifying LINK Command Options") that tell LINK to carry out
special operations.

The object-files parameter specifies the filenames of one or more compiled
application source files. If your application has more than one compiled
source file, you must name all of them on the LINK command line. Separate
the filenames of object files by spaces or the plus sign (+).

The exe-file parameter specifies the name you want LINK to give to the
resulting executable file or dynamic-link library.

The map-file parameter specifies the name you want the map file to have. (A
map file is used for symbolic debugging with SYMDEB or WDEB386.)

The lib-files parameter specifies the names of Windows or standard-language
libraries.

The def-file parameter specifies the filename of the module-definition
(.DEF) file. Each application can have only one .DEF file.

Use commas to separate parameters in the command line.

The following example command line links the application object file
SAMPLE.OBJ with the standard Windows library LIBW.LIB:

  LINK SAMPLE.OBJ/al:16, SAMPLE.EXE, SAMPLE.MAP/map/li, /NOD SLIBCEW.LIB
LIBW.LIB, SAMPLE.DEF

The command line creates the file SAMPLE.EXE, which has the module name,
segments, and exported functions defined by the module-definition file
SAMPLE.DEF. It also creates the map file SAMPLE.MAP, used for symbolic
debugging. The command searches the library file LIBW.LIB to resolve any
external function calls made in the application files. It also searches for
the Windows version of the small model emulated math C run-time library.

The LINK program uses default filename extensions if you do not provide
extensions. For example, the preceding example would have the same results
if typed as follows:

  LINK SAMPLE/al:16, SAMPLE, SAMPLE/map/li, /NOD SLIBCEW LIBW, SAMPLE


2.3.2  Specifying LINK Command Options

You can use the LINK options parameter to tell the linker to perform special
operations. The LINK options are:

Option                            Usage
────────────────────────────────────────────────────────────────────────────
/alignment:size                   Tells the linker to align segment data
                                  in the executable file along the
                                  boundaries specified by size.

                                  The size parameter specifies a boundary
                                  size in bytes; for example, the
                                  following indicates an alignment
                                  boundary of 16 bytes:

                                  /alignment:16

                                  The size parameter must be a power of 2;
                                  therefore, 2, 4, 8, 16, and so on are
                                  appropriate values. The default is 512
                                  bytes.

                                  It is strongly recommended that you link
                                  your application with the alignment set
                                  to 16 or less (or 32 if the application
                                  is larger than 1 megabyte). The default
                                  512-byte alignment wastes a large amount
                                  of disk space, especially for larger
                                  applications using many segments and
                                  resources.

                                  The minimum abbreviation for this option
                                  is /al.

/codeview                         Tells the linker to prepare for
                                  debugging using CodeView for Windows (
                                  CVW).

                                  The minimum abbreviation for this option
                                  is /co.

Option                            Usage
────────────────────────────────────────────────────────────────────────────
/help                             Tells the linker to display a list of
                                  available options.

                                  The minimum abbreviation for this option
                                  is /h.

/linenumbers                      Tells the linker to copy line-number
                                  information from the object file to the
                                  map file. Use this option to prepare for
                                  source line debugging with the Symbolic
                                  Debugger (SYMDEB).

                                  The minimum abbreviation for this option
                                  is /li.

/map                              Tells the linker to create a .MAP file,
                                  which the MAPSYM utility uses to create
                                  a .SYM file. The .SYM file is then used
                                  by the Symbolic Debugger.

/nodefaultlibrarysearch           Prevents the linker from using the
                                  default C run-time libraries. This
                                  option is recommended if you use the
                                  ?LIBC?W.LIB naming of the C runtime
                                  libraries instead of ?LIBC?.LIB.

                                  The minimum abbreviation for this option
                                  is  /nod.

/noextendeddictionarysearch       Prevents the linker from searching a
                                  library's extended dictionary, which is
                                  a list of symbols stored in the library.
                                  The linker normally consults this list
                                  to speed up library searches. Normally
                                  this option is not needed. The linker
                                  issues an error message if you need to
                                  use this switch.

                                  The minimum abbreviation for this option
                                  is /noe.

Option                            Usage
────────────────────────────────────────────────────────────────────────────
/nofarcalltrans                   This option prevents the translation of
                                  far calls within the current segment.
                                  Without this option, far calls are
                                  translated into the assembler
                                  statements:

                                  .
                                  .
                                  .
                                  NOP
                                  PUSH CS
                                  NEAR CALL
                                  .
                                  .
                                  .

                                  The minimum abbreviation for this option
                                  is /nof.

/noignorecase                     Tells the linker to preserve lowercase
                                  letters when matching symbols during
                                  linking.

                                  The minimum abbreviation for this option
                                  is /noi.

/pause                            Tells the linker to pause before copying
                                  the executable file to disk.

                                  The minimum abbreviation for this option
                                  is /pau.

/segments:number                  Sets the maximum number of segments the
                                  linker will process to number. For
                                  example, the following would tell the
                                  linker to process no more than 200
                                  segments:

                                  /segments:200

                                  The default is 128 segments. Windows
                                  limits an application to 254 segments.

                                  The minimum abbreviation for this option
                                  is /se.

Option                            Usage
────────────────────────────────────────────────────────────────────────────
/warnfixup                        Causes the linker to display an error
                                  message when an offset fixup occurs
                                  (relative to a logical segment) outside
                                  the physical segment.

                                  The minimum abbreviation for this option
                                  is /w.

The following LINK options are not allowed when linking Windows
applications:

 /dsallocate  /exepack  /high  /overlayinterrupt

The following LINK options are not recommended when linking Windows
applications:

 /nogroupassociation  /packcode  /stack

Instead of using the LINK option /stack, set the stack size in the
application's .DEF file.

For more information on LINK command-line options, see the Microsoft C
Optimizing Compiler User's Guide.


2.3.3  Specifying Libraries on the LINK Command Line

When you link an application's object files, you must specify the
appropriate C-language libraries for Windows and C run-time libraries. The
C-language  libraries for Windows contain code for the Windows application
start-up routines and references for the Windows functions.

There are corresponding C-language libraries you will use when linking
dynamic-link libraries. Table 2.1 shows which Windows library to use,
depending on the memory model and whether you are linking an application or
a library.

Table 2.1  Linking with a Windows C-Language Library

╓┌────────────────────────┌───────────────────┌──────────────────────────────╖
Memory Model             For an Application  For a DLL
────────────────────────────────────────────────────────────────────────────
Emulated Math Package
────────────────────────────────────────────────────────────────────────────
Small                    SLIBCEW.LIB         SDLLCEW.LIB
Medium                   MLIBCEW.LIB         MDLLCEW.LIB
Compact                  CLIBCEW.LIB         CDLLCEW.LIB
Large                    LLIBCEW.LIB         LDLLCEW.LIB
────────────────────────────────────────────────────────────────────────────
Alternate Math Package
────────────────────────────────────────────────────────────────────────────
Small                    SLIBCAW.LIB         SDLLCAW.LIB
Medium                   MLIBCAW.LIB         MDLLCAW.LIB
Compact                  CLIBCAW.LIB         CDLLCAW.LIB
Memory Model             For an Application  For a DLL
────────────────────────────────────────────────────────────────────────────
Compact                  CLIBCAW.LIB         CDLLCAW.LIB
Large                    LLIBCAW.LIB         LDLLCAW.LIB
────────────────────────────────────────────────────────────────────────────


Which C-language libraries you link with depends on your application's
programming model and whether or not the model uses floating-point support.

In addition to these libraries, you must also link with the
model-independent Windows import library, LIBW.LIB.

Use the /nod option to ensure that the linker will not try to find objects
in your non-Windows versions of the C run-time libraries.

For example, a small-model application using the emulator math package must
be linked with the small-model library SLIBCEW.LIB and LIBW.LIB, as shown in
the following example:

  LINK SAMPLE,,/NOD SLIBCEW LIBW, SAMPLE.DEF

────────────────────────────────────────────────────────────────────────────
NOTE

You should link your program with the SLIBCEW.LIB or MLIBCEW.LIB library if
you chose the coprocessor/emulator option by specifying -FPi on the compiler
command line. For your Windows application to use the math
coprocessor/emulator, you must include WIN87EM.LIB on your LINK command
line. This library contains import information for the WIN87EM.DLL library
supplied with the retail version of Windows.

You should link your program with the SLIBCAW.LIB or MLIBCAW.LIB library if
you chose the alternative math option by specifying -FPa on the compiler
command line. Ensure that these libraries are available.
────────────────────────────────────────────────────────────────────────────


2.4  Examining Executable File Headers

You can use the EXEHDR utility to determine whether an executable file is a
Windows application or a library. The command also lets you find out which
functions are exported or imported by a module, determine the amount of
space allocated for a module's heap or stack, and determine the size and
number of the segments a module contains.


Syntax

  EXEHDR exe-filename

The exe-filename parameter specifies the name of any file with an .EXE
extension.

The following example displays the header for the executable file HELLO.EXE:


  EXEHDR HELLO.EXE

The format of this header is closely related to the statements contained in
the application's module-definition file.

For more information about EXEHDR, see the Microsoft C Optimizing  Compiler
documentation.


2.5  Summary

LINK is a tool that takes compiled sources, a list of libraries, and a
moduledefinition file, and creates a file that you can load and run with
Windows. For additional information see the following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Windows versions of C run-time    Guide to Programming: Chapter 14, "C
libraries                         and
                                  Assembly Language"

Module-definition statements      Reference, Volume 2: Chapter 10,
                                  "ModuleDefinition Statements"






Chapter 3  Compiling Resources: The Resource Compiler
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Resource Compiler (RC) is a tool that lets you compile
resources, such as icons, cursors, menus, and dialog boxes, that your
application uses. You add the resulting binary resource file to your
application's binary file to produce an executable Windows application.

This chapter describes how to do the following:


  ■   Include resources in your application

  ■   Create a resource script file, which describes the resources your
      application will use

  ■   Use the Resource Compiler to compile your application's resources and
      add them to the application's executable file



3.1  Including Resources in an Application

To include resources in your Windows application, follow these steps:


  1.  Create individual resource files for cursors, icons, bitmaps, dialogs,
      and fonts, using the appropriate resource editors.

      Part 2 of this manual, "Resource Editors," explains how to use these
      editors.

  2.  Create a resource script (.RC) file that defines each application
      resource by specifying its name and description.

      If the resource is in a separate file, this description includes the
      resource's filename.

      For example, the .RC file might define a cursor resource by naming it
      "SampleCursor," describing it as a resource of type "Cursor," and
      defining it as the cursor contained in the file SAMPLE.CUR.

  3.  Compile the resource script file using the Resource Compiler.

      The result will be a compiled resource file with the filename
      extension .RES.

  4.  Add the compiled resources to the application's compiled executable
      (.EXE) file using the Resource Compiler.

      If you want, you can perform this step and the preceding step with a
      single RC command.



3.2  Creating a Resource Script File

After creating individual resource files for your application's icon,
cursor, bitmap, font, and dialog resources, you create a resource script
file. The resource script file always has the .RC extension, and is often
referred to simply as the .RC file.

The .RC file lists every resource in your application, and describes some
types of resources in great detail:


  ■   For resources that exist in a separate file, such as icons and
      cursors, the .RC file simply names the resource and the file that
      contains it.

  ■   For some types of resources, such as menus, the entire definition of
      the resource exists within the .RC file.


You create a resource script file using an ordinary ASCII text editor. The
file can contain resource statements and directives.

Resource statements name and describe each resource.

Directives are a special type of statement that defines an action you want
the Resource Compiler to perform on the resource script file before actually
compiling it. You can use directives to assign values to names, include the
contents of files, and control compilation of the script file. The
directives you use in a resource script file are identical to the C-language
directives.

A line in an .RC file cannot exceed 256 characters.

Table 3.1 lists and briefly describes the statements and directives you can
use in a resource script file. (See the Reference, Volume 2, for detailed
descriptions and syntax.)

Table 3.1  Resource Statements

╓┌───────────────────────┌──────────┌────────────────────────────────────────╖
Type of Statement       Statement  Description
────────────────────────────────────────────────────────────────────────────
Single-line statements  BITMAP     Defines a bitmap by naming it and
                                   specifying the file that contains it.
                                   (To use a particular bitmap, the
                                   application requests it by name.)



Table 3.1  Resource Statements (continued)

╓┌─────────────────────────────┌──────────────┌──────────────────────────────╖
Type of Statement             Statement      Description
────────────────────────────────────────────────────────────────────────────
                              CURSOR         Defines a cursor by naming it
                                             and specifying the file that
                                             contains it. (To use a
                                             particular cursor, the
                                             application requests it by
                                             name.)

                              FONT           Specifies a file that
                                             contains a font.

                              ICON           Defines an icon by naming it
                                             and specifying the file that
                                             contains it. (To use a
                                             particular icon, the
                                             application requests it by
Type of Statement             Statement      Description
────────────────────────────────────────────────────────────────────────────
                                             application requests it by
                                             name.)

Multiple-line statements      ACCELERATORS   Defines menu accelerator
                                             keys.

                              DIALOG         Defines a template that an
                                             application can use to create
                                             dialog boxes.

                              MENU           Defines the appearance and
                                             function of an application
                                             menu.

                              RCDATA         Defines raw data resources.
                                             Raw data resources let you
                                             include binary data directly
                                             into the executable file.

Type of Statement             Statement      Description
────────────────────────────────────────────────────────────────────────────

                              STRINGTABLE    Defines string resources.
                                             String resources are null-
                                             terminated ASCII strings that
                                             can be loaded from the
                                             executable file.

Directives                    #define        Defines a specified name by
                                             assigning it a given value.

                              #elif          Marks an optional clause of a
                                             conditional compilation
                                             block.

                              #else          Marks an optional clause of a
                                             conditional compilation
                                             block.

                              #endif         Marks the end of a
Type of Statement             Statement      Description
────────────────────────────────────────────────────────────────────────────
                              #endif         Marks the end of a
                                             conditional compilation
                                             block.

                              #if            Carries out conditional
                                             compilation if a specified
                                             expression is true.

                              #ifdef         Carries out conditional
                                             compilation if a specified
                                             name has been defined.

                              #ifndef        Carries out conditional
                                             compilation if a specified
                                             name is not defined.

                              #include       Copies the contents of a file
                                             into the resource script
                                             before the Resource Compiler
Type of Statement             Statement      Description
────────────────────────────────────────────────────────────────────────────
                                             before the Resource Compiler
                                             processes the script.

                              #undef         Removes the current
                                             definition of the specified
                                             name.

User-defined resources        User-supplied  Any data that needs to be
                                             added to the executable file.

────────────────────────────────────────────────────────────────────────────



For a detailed description of the statements in a resource script file, see
the Reference, Volume 2.

For example, the following script file defines the resources for an
application called "Shapes":

  "#include "SHAPES.H"
  ShapesCursor  CURSOR  SHAPES.CUR
  ShapesIcon  ICON  SHAPES.ICO
  ShapesMenu  MENU
  BEGIN
      POPUP "&Shape"
          BEGIN
              MENUITEM "&Clear", ID_CLEAR
              MENUITEM "&Rectangle", ID_RECT
              MENUITEM "&Triangle", ID_TRIANGLE
              MENUITEM "&Star", ID_STAR
              MENUITEM "&Ellipse", ID_ELLIPSE
          END
  END

"

The file uses the #include directive to include the contents of the header
file SHAPES.H.



The CURSOR statement names the application's cursor resource "ShapesCursor"
and specifies the cursor file SHAPES.CUR, which contains the image for that
cursor.



It does the same for the application's icon resource, "ShapesIcon", using
the ICON statement.



The script file uses the MENU statement to define an application menu named
"ShapesMenu", a pop-up menu with five menu items.



The menu definition, enclosed in the BEGIN and END key words, specifies each
menu item and the menu ID code that is returned when the user selects that
item. For example, the first item on the menu, "Clear", returns the menu ID
code "ID_CLEAR" when the user selects it. The ID values are defined in the
application header file, SHAPES.H.

For more information on the resource script file, the syntax of the resource
statements, and how to create user-defined resources, see the Reference,
Volume 2.


3.3  Using the Resource Compiler

The Resource Compiler serves the following functions:


  ■   It compiles the resource script file and the resource files (such as
      icon and cursor files) into a binary resource (.RES) file.

  ■   It combines the compiled .RES file with the executable (.EXE) file
      created by the linker; the result is an executable Windows
      application.

  ■   It marks all Windows applications (even if they have no resources)
      with a Windows version stamp.
────────────────────────────────────────────────────────────────────────────
NOTE

All Windows applications and libraries must bear a Windows version stamp.
For this reason, use RC on every Windows application and library you build,
whether or not it uses any resources.
────────────────────────────────────────────────────────────────────────────




To start the Resource Compiler, use the RC command. What you specify on the
command line will depend on whether you are compiling resources, adding
compiled resources to an executable file, or both.


Syntax

RC «options» resource-file «executable-file»

There are several ways you can use the RC command:


  ■   To compile resources separately, use the RC command in the following
      form:

      RC -R «options» script-file

      When you use this form, the Resource Compiler ignores the executable
      file if you specify one.

  ■   To compile an .RC file and add the resulting .RES file to the
      executable file, use the RC command in the following form:

      RC «options» script-file «executable-file»

  ■   To compile a 3.0 version of a dynamic-link library (DLL) that does not
      have a .RES file, use the RC command in the following form:

      RC «options» dll-file

      When you use this form, the DLL filename must explicitly have an .EXE,
      .DRV, or .DLL extension.

  ■   To simply add a compiled resource (.RES) file to an executable file,
      use the RC command in the following form:

      RC «options» res-file.RES «executable-file»


The rest of this section explains how to specify each of the RC command's
parameters.


Options Parameter

The RC command's options parameter can include one or more of the following:

Option                            Description
────────────────────────────────────────────────────────────────────────────
-R                                Creates an .RES file from an .RC file.
                                  Use this option when you do not want to
                                  add the compiled .RES file to the .EXE
                                  file.

-D                                Defines a symbol for the preprocessor
                                  that you can test with the #ifdef
                                  directive.

-FO                               Renames the .RES file.

-FE                               Renames the .EXE file.

-I                                Searches the specified directory before
                                  searching the directories specified by
                                  the INCLUDE environment variable.

-V                                Displays messages that report on the
                                  progress of the compiler.

-X                                Prevents the Resource Compiler from
                                  checking the INCLUDE environment
                                  variable when searching for include
                                  files or resource files.

-L or -LIM32                      Tells Windows that the application uses
                                  expanded memory directly, according to
                                  the Lotus(R) Intel(R) Microsoft Expanded
                                  Memory Specification (EMS), version 3.2.


Option                            Description
────────────────────────────────────────────────────────────────────────────
-M or -MULTINST                   When Windows is running with the EMS 4.0
                                  memory configuration, this switch
                                  assigns each instance of the application
                                  task to a distinct EMS bank. (By default,
                                  all instances of a task share the same
                                  EMS bank.)

-E                                For a dynamic-link library, changes the
                                  default location of global memory from
                                  below the EMS bank line to above the EMS
                                  bank line.

-P                                Creates a private dynamic-link library
                                  (DLL) that is called by only one
                                  application. This allows Windows to use
                                  memory better, since only one
                                  application (or multiple instances of
                                  the same application) will be calling
                                  into the DLL. For example, in the
                                  large-frame EMS memory model, the DLL is
                                  loaded above the EMS bank line, freeing
                                  memory below the bank line.

-K                                Disables the load-optimization feature
                                  of the Resource Compiler. If this option
                                  is not specified, the compiler arranges
                                  segments and resources in the executable
                                  file so that all preloaded information
                                  is contiguous. This feature allows
                                  Windows to load the application much
                                  more quickly.

                                  If you do not specify the -K option, all
                                  data segments, nondiscardable code
                                  segments, and the entry-point code
                                  segment will be preloaded, unless any
                                  segment and its relocation information
                                  exceed 64K. If the PRELOAD attribute is
                                  not assigned to these segments in the
                                  module-definition (.DEF) file when you
                                  link your application, the compiler will
                                  add the preload attribute and display a
                                  warning. Resources and segments will
                                  have the same segment alignment. This
                                  alignment should be as small as possible
                                  to prevent the final executable file
                                  from growing unnecessarily large. You
                                  can set the alignment using the LINK
                                  /alignment option. See Chapter 2,
                                  "Linking Applications: The Linker," for
                                  more information.

Option                            Description
────────────────────────────────────────────────────────────────────────────
-T                                Creates an application that runs only
                                  with Windows in protected (standard or
                                  386 enhanced) mode. If the user attempts
                                  to run the application in real mode,
                                  Windows will display a message box
                                  telling the user that the application
                                  cannot run in real mode.

-? or -H                          Displays a list of the RC command line
                                  options.

Options are not case-sensitive; for example, -r and -R are equivalent. You
can combine single-letter options if they do not require any additional
parameters. For example, the command:

  RC -R -E -V SAMPLE.RC

is equivalent to the command:

  RC -REV SAMPLE.RC


Resource-file Parameter

The RC command's resource-file parameter specifies the name of the script
file that contains the names, types, filenames, and descriptions of the
resources you want to add to the .EXE file. It can also specify the name of
a compiled .RES file, in which case the Resource Compiler adds the compiled
resources to the executable file.


Executable-file Parameter

The RC command's executable-file parameter specifies the name of the
executable file that the resources should be added to. If you do not specify
an executable file, the Resource Compiler uses the executable file with the
same name as the script file.


3.3.1  Compiling Resources Separately

By default, the Resource Compiler adds the compiled resources to the
specified executable file. Sometimes you might want to first compile the
resources and then add them to the executable file in separate steps. This
can be useful because resource files don't tend to change much after initial
development. You can save time by compiling your application's resources
separately, then adding the compiled .RES file to your executable file each
time you recompile the .EXE file.

You can use the -R option to compile the resources separately, without
adding them to the executable file. When you use this option, the Resource
Compiler compiles the .RC file and creates a compiled resource .RES file.

For example, the following command reads the resource script file SAMPLE.RC
and creates the compiled resource file SAMPLE.RES.

  RC -R SAMPLE.RC

The command does not add SAMPLE.RES to the executable file.


3.3.2  Defining Names for the Preprocessor

You can specify conditional branching in a resource script file, based on
whether or not a term is defined on the RC command line using the -D option.

For example, suppose your application has a pop-up menu, the Debug menu,
which you want to appear only during debugging. When you compile the
application for normal use, the Debug menu is not included. The resource
script file contains the following statements to define the Debug menu:

  MainMenu MENU
  BEGIN
    .
    .
    .
  #ifdef DEBUG
   POPUP "&Debug"
   BEGIN
    MENUITEM "&Memory usage", ID_MEMORY
    MENUITEM "&Walk data heap", ID_WALK_HEAP
   END
  #endif
  END

When compiling resources for a debugging version of the application, you
could include the Debug menu by using the following RC command:

  RC -R -D DEBUG MYAPP.RC

To compile resources for a normal version of the application─one that does
not include the Debug menu─you could use the following RC command:

  RC -R MYAPP.RC


3.3.3  Renaming the Compiled Resource File

Normally, when compiling resources, the Resource Compiler names the compiled
resource file after the .RC file and places it in the same directory as the
script file. For example, when compiling MYAPP.RC, you would normally type:


  RC -R MYAPP.RC

The compiler would then create a compiled resource file named MYAPP.RES in
the same directory as MYAPP.RC.

The -FO option lets you give the resulting .RES file a name that differs
from the corresponding .RC script file. For example, to name the resulting
.RES file NEWFILE.RES, you could type:

  RC -R -FO NEWFILE.RES MYAPP.RC

The -FO option can also place the .RES file in a different directory. For
example, typing the following command places the compiled resource file
MYAPP.RES in the directory C:\RESOURCE:

  RC -R -FO C:\SOURCE\RESOURCE\MYAPP.RES MYAPP.RC


3.3.4  Controlling the Directories that RC Searches

Normally, the Resource Compiler searches for include files and resource
files (such as icon and cursor files) first in the current directory, and
then in the directories specified by the INCLUDE environment variable. (The
PATH environment variable has no effect on the directories that the Resource
Compiler searches.)


Adding a Directory to Search

You can use the -I option to add a directory to the list of directories that
the Resource Compiler searches. The compiler then searches the directories
in the following order:


  1.  The current directory.

  2.  The directory or directories you specify by using the -I option, in
      the order in which they appear on the command line.

  3.  The list of directories specified by the INCLUDE environment variable,
      in the order in which the variable lists them, unless you specify the
      -X option.


The following example compiles the resource script file MYAPP.RC and adds
the compiled resources to MYAPP.EXE:

  RC -I C:\SOURCE\STUFF -I D:\RESOURCES MYAPP.RC MYAPP.EXE

When compiling the script file, the Resource Compiler searches for include
files and resource files first in the current directory, then in
C:\SOURCE\STUFF and D:\RESOURCES, and lastly in the directories specified by
the INCLUDE  environment variable.


Suppressing the INCLUDE Environment Variable

You can prevent the Resource Compiler from using the INCLUDE environment
variable when determining the directories to search. To do so, use the -X
option. The compiler then searches for files only in the current directory,
and in any directories you specify using the -I option.

The following example compiles the resource script file MYAPP.RC and adds
the compiled resources to MYAPP.EXE:

  RC -X -I C:\SOURCE\STUFF MYAPP.RC MYAPP.EXE

When compiling the script file, the Resource Compiler searches for include
files and resource files first in the current directory and then in
C:\SOURCE\STUFF.


3.3.5  Displaying Progress Messages

Normally, the Resource Compiler does not display messages that report on its
progress as it compiles. You can, however, tell the compiler to display
these messages. To do so, use the -V option.

The following example causes the compiler to report on its progress as it
compiles the script file SAMPLE.RC, creates the compiled resource file
SAMPLE.RES, and adds the .RES file to the executable file SAMPLE.EXE:

  RC -V SAMPLE.RC


3.4  Summary

The Resource Compiler is a tool that lets you compile resources such as
icons, dialog boxes, and fonts into a binary file. You add the binary
resource file to the binary source files to produce an executable Windows
application.

For information related to the Resource Compiler, see the following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Creating icons, cursors, and      Tools: Chapter 4, "Designing Images:
bitmaps                           SDKPaint"

Creating and editing dialog       Tools: Chapter 5, "Designing Dialog
boxes                             Boxes: The Dialog Editor"

Creating fonts                    Tools: Chapter 6, "Designing Fonts: The
                                  Font Editor"

Introduction to application       Guide to Programming: Chapter 7, "Menus"
menus

Introduction to controls, such    Guide to Programming: Chapter 8,
as                                "Controls"
buttons and check boxes

Introduction to dialog boxes;     Guide to Programming: Chapter 9, "Dialog
also                              Boxes"
explains how to use controls in
dialog boxes

Syntax and descriptions of each   Reference, Volume 2: Chapter 8,
resource statement and directive  "Resource Script Statements"






PART II  Resource Editors
────────────────────────────────────────────────────────────────────────────

Part 2 describes how to use the Microsoft Windows resource editors:
SDKPaint, the Dialog Editor, and the Font Editor. SDKPaint lets you create
bitmaps, icons, and cursors for your application. The Dialog Editor lets you
create and test dialog boxes on the screen instead of defining dialog
statements in a resource script. The Font Editor lets you create fonts and
update information in the font file header.






Chapter 4  Designing Images: SDKPaint
────────────────────────────────────────────────────────────────────────────

Microsoft Windows SDKPaint (SDKPAINT) lets you create bitmaps, icons, and
cursors for your applications. Using SDKPaint, you can draw bitmaps, icons,
and cursors and examine their appearance on screens of various colors. The
editor also simulates how images appear on different display devices.

This chapter describes the following:


  ■   How SDKPaint works with bitmap, icon, and cursor files

  ■   The SDKPaint window, including its menu items and commands

  ■   Opening files and images within the files

  ■   Drawing with SDKPaint tools

  ■   Using the SDKPaint palette, including working with different color
      types

  ■   Customizing the palette, including editing colors, saving changes to
      the palette, and loading customized palettes

  ■   Defining a cursor hotspot

  ■   Using the clipboard to transfer images between editors, to move images
      from one resource to another, and to create multiple images




4.1  How SDKPaint Works with Files

SDKPaint creates or modifies bitmap (.BMP), icon (.ICO), and cursor (.CUR)
files.

You can include these files in the resource script that you use to compile
the resource (.RES) file. The .RES file is a component of the build that
produces an executable file for your application.

Figure 4.1 illustrates the process of incorporating bitmap, icon, and cursor
files into an executable application. For detailed information on this
process, see Chapter 3, "Compiling Resources: The Resource Compiler."

(This figure may be found in the printed book).


4.1.1  File Types

The bitmap (.BMP) files that SDKPaint produces define device-independent
monochrome or color bitmaps. Each .BMP file defines one bitmap. Bitmaps that
you create and save using SDKPaint can range in size from 1-by-1 to 72-by-72
pixels.

Unlike bitmap files, icon (.ICO) and cursor (.CUR) files define a family of
images. Each image in an icon or cursor file is designed for display on a
different kind of device. SDKPaint distinguishes the different kinds of
images by pixel dimensions and color capabilities. For example, when the
application wants to use an icon, it requests the icon by name. Windows then
selects the appropriate icon image in the specified file according to the
pixel dimensions and color capabilities required by the device driver.


4.1.2  Icon and Cursor Data: The SDKPAINT.DAT File

SDKPaint uses the SDKPAINT.DAT file to store display-device information for
individual icon or cursor images within a file. The SDKPAINT.DAT file you
install initially contains information about common display devices, such as
EGA and VGA.

SDKPAINT.DAT is an ASCII, comma-delimited file that you can edit to add
information about display devices. Each string in the file defines a display
device. A string is terminated by a carriage return (no null character) and
contains the following six fields:

  name,num-colors,curs-horz-size,curs-vert-size,icon-horz-size,
icon-vert-size

Field definitions are as follows:

Field                             Description
────────────────────────────────────────────────────────────────────────────
name                              Name of the display device. The name can
                                  contain up to 10 uppercase and lowercase
                                  letters.

num-colors                        Number of colors of the icon or cursor
                                  image.

curs-horz-size                    Horizontal size of a cursor image in
                                  pixels.

curs-vert-size                    Vertical size of a cursor image in
                                  pixels.

icon-horz-size                    Horizontal size of an icon image in
                                  pixels.

icon-vert-size                    Vertical size of an icon image in
                                  pixels.

In addition to information about icon and cursor images, SDKPAINT.DAT  can
include comments. Indicate comments by placing a semicolon (;) at the
beginning of the comment line.

For example, the following SDKPAINT.DAT file specifies information for icons
and cursors displayed on two devices:

  ";This is a sample SDKPAINT.DAT file
        4-Plane,16,32,32,32,32
        3-Plane,16,32,32,32,32

"

This line is a comment.



This line defines a device with four color planes. The device displays
16-color cursors and icons. Cursors and icons on this device are 32-by-32
pixels.



This line defines a device with three color planes, which also displays
16-color cursors and icons. Cursors and icons on this device are also
32-by-32 pixels.

SDKPaint displays information from the SDKPAINT.DAT file when you load an
icon or cursor image into SDKPaint. For information about loading images,
see "Loading an Image into the Workspace" in Section 4.3.3.


4.2  The SDKPaint Window

The SDKPaint window varies with the kind of resource you are editing. Figure
4.2 illustrates the SDKPaint window after a user has opened an icon file.

(This figure may be found in the printed book).

Regardless of the type of image you edit, the menu bar contains the
following menus:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Menu                              Commands
────────────────────────────────────────────────────────────────────────────
File                              This menu contains the following
                                  commands:

                                  New─Initializes the workspace with a
                                  bitmap, icon, or cursor image.

                                  Open─Opens existing .BMP, .ICO, and .CUR
Menu                              Commands
────────────────────────────────────────────────────────────────────────────
                                  Open─Opens existing .BMP, .ICO, and .CUR
                                  files for editing.

                                  Save and Save As─Save changes to bitmaps,
                                  icons, and cursors.

                                  Exit─Exits the editor.

Edit                              This menu contains the following
                                  commands:

                                  Undo─Restores the image to its state
                                  before the last edit.

                                  Copy─Moves an image to the clipboard.

                                  Paste─Moves an image from the clipboard.

Image                             This menu contains the following
Menu                              Commands
────────────────────────────────────────────────────────────────────────────
Image                             This menu contains the following
                                  commands:

                                  New─Initializes the workspace with an
                                  icon or cursor image.

                                  Open─Opens images in a bitmap, icon, or
                                  cursor file.

                                  Save─Retains an icon or cursor currently
                                  in the workspace.

                                  Restore─Restores an image to its state
                                  when initially loaded into the editor or
                                  when last retained.

                                  Clear─Sets to white all the pixels in
                                  the work area.

Menu                              Commands
────────────────────────────────────────────────────────────────────────────

                                  Delete─Deletes an image from the work
                                  area and clears the image from the
                                  SDKPaint window.

Brushsize                         This menu lets you choose among three
                                  sizes of brushes to draw an image.

Palette                           This menu contains the following
                                  commands:

                                  Edit Colors─Changes the currently
                                  selected color to the hue you specify or
                                  restores the color to its default value.

                                  Get Colors─Loads a color palette (.PAL)
                                  file into the
                                  editor.

Menu                              Commands
────────────────────────────────────────────────────────────────────────────

                                  Save Colors─Saves newly-created colors
                                  in a .PAL file.

Hotspot                           This menu contains commands that let you
                                  define or display the hotspot of a
                                  cursor. For information about the
                                  hotspot, see Section 4.7, "Defining the
                                  Cursor Hotspot."




4.3  Opening Files and Images

Before editing an existing bitmap, icon, or cursor, you must first open a
file to prepare the workspace for the kind of image you are going to edit.


4.3.1  Converting Files to 3.0 Format

When you open a version 2.0 or later bitmap, icon, or cursor file, SDKPaint
automatically converts it to 3.0 format as it is loaded into the editor.


4.3.2  Opening Bitmaps

To open an existing bitmap file, choose the Open command from the File menu.
SDKPaint opens the file and loads its image into the workspace of the
SDKPaint window.

────────────────────────────────────────────────────────────────────────────
NOTE

SDKPaint opens and loads only 2-color and 16-color bitmaps.
────────────────────────────────────────────────────────────────────────────

If you are creating a new bitmap instead of editing one that exists, do the
following:


  1.  Choose the New command from the File menu.

      The editor displays the Resource Type dialog box.

  2.  Choose the Bitmap option.

      SDKPaint displays a dialog box that lets you enter the height and
      width of the bitmap image you are creating and placing in the file.
      The dialog box also prompts you for the number of bitmap colors.

  3.  Specify either 2 or 16 colors.

      By default, the first time you open a bitmap file, SDKPaint uses
      values appropriate to the display on which it is running. If you
      subsequently open additional bitmap files, SDKPaint specifies by
      default the values of the most recently created bitmap.


SDKPaint prepares the workspace of the SDKPaint window for the bitmap image
that you will create.


4.3.3  Opening Icons and Cursors

Because icon and cursor files contain multiple images, you must first open a
file and then load a specified image into the workspace.


Specifying an Icon or Cursor File

To open an existing icon or cursor file, choose the Open command from the
File menu. SDKPaint offers you a choice of files to open.

If you want to create icons or cursors that you will save in a new file,
choose the New command from the File menu.

When SDKPaint displays the Resource Type dialog box, do the following:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Image Type                        Procedure
────────────────────────────────────────────────────────────────────────────
Image Type                        Procedure
────────────────────────────────────────────────────────────────────────────
Icon                              To specify a new icon file:

                                  1.  Choose the Icon option.

                                  SDKPaint displays an Icon Sizes dialog
                                  box. By default, SDKPaint displays icon
                                  image information appropriate for the
                                  display on which SDKPaint is running.

                                  2.  Choose the device type from the
                                  combo box.

                                  If you want to create an icon image for
                                  a different type of device, open the
                                  drop-down combo box and choose the kind
                                  of device you want to target.

Cursor                            To specify a new cursor file, do the
                                  following:
Image Type                        Procedure
────────────────────────────────────────────────────────────────────────────
                                  following:

                                  1.  Choose the Cursor option.

                                  SDKPaint displays a Cursor Sizes dialog
                                  box. By default, SDKPaint displays
                                  cursor image information appropriate for
                                  the display on which SDKPaint is running.

                                  2.  Choose the device type from the
                                  combo box.

                                  If you want to create a cursor for a
                                  different type of device, open the
                                  drop-down combo box and choose the kind
                                  of device you want to target.




Loading an Image into the Workspace

After opening a file, you can either load an existing image into the
workspace of the SDKPaint window or specify that you will create a new
image.

To load an icon or cursor image with a specified pixel dimension into the
workspace, choose the Open command from the Image menu. SDKPaint first
prompts you for the image you want and then displays the image you select.

To load a new icon or cursor image with a specified pixel dimension into the
workspace, choose the New command from the Image menu. The editor displays a
dialog box that prompts you first for the characteristics of the image you
want to create and then asks for information about the pixel dimensions of
the image.


4.4  Drawing with SDKPaint Tools

Whether editing an existing image or creating a new image from scratch, use
the tools displayed at the bottom of the SDKPaint window to draw your
bitmap, icon, or cursor.

Table 4.1 illustrates and describes SDKPaint tools.

Table 4.1  SDKPaint Tools

╓┌───────────────┌─────────────────────────────┌─────────────────────────────╖
Tool            Illustration                  Description
────────────────────────────────────────────────────────────────────────────
Oil Can         (Please refer to the printed  Fills a bordered area with
                book)                         the current drawing color.

Paintbrush      (Please refer to the printed  Paints the image using the
                book)                         current
                                              drawing width and color.

Rectangle       (Please refer to the printed  Draws a hollow rectangle
                book)                         using the
                                              current drawing color.

Tool            Illustration                  Description
────────────────────────────────────────────────────────────────────────────

Full Rectangle  (Please refer to the printed  Draws a rectangle and fills
                book)                         it with the current drawing
                                              color.

Circle          (Please refer to the printed  Draws a hollow circle or
                book)                         ellipse using the current
                                              drawing color.

Full Circle     (Please refer to the printed  Draws a circle or ellipse
                book)                         and fills it with the
                                              current drawing color.

Line            (Please refer to the printed  Draws a straight line
                book)                         between selected star and
                                              end points using the current
                                              drawing color.

Pick Rectangle  (Please refer to the printed  Selects a rectangular region
Tool            Illustration                  Description
────────────────────────────────────────────────────────────────────────────
Pick Rectangle  (Please refer to the printed  Selects a rectangular region
                book)                         in the image. Choose the
                                              Copy command from the Edit
                                              menu to transfer the
                                              selected portion of the
                                              image to the clipboard.
                                              Choose the Paste command
                                              from the Edit menu to
                                              transfer the contents of the
                                              clipboard to the selected
                                              region. The selected region
                                              reverts to the entire
                                              workspace following a copy
                                              or paste operation.

────────────────────────────────────────────────────────────────────────────




4.5  Using the SDKPaint Palette

The SDKPaint palette defines available and currently selected colors for
drawing and display. SDKPaint displays two types of colors in the palette:
true colors and dithered colors. When you are creating a bitmap or icon, the
16 colors that SDKPaint displays in the leftmost eight columns of the
palette are true colors. The remaining colors are dithered. When you are
creating a cursor, all colors of the palette are true colors.

The 16 true colors are red, green, and blue (RGB) values guaranteed to be
distinct on a device that displays 16 or more colors.

If you are working with icons or cursors, you can get information about the
RGB values of a color on the palette by first selecting the color and then
choosing the Edit Colors command from the Palette menu. If you are editing a
bitmap image, you can also get the information by double-clicking the color.
The editor lists RGB values of the selected color in the Edit Colors dialog
box.

The palette differs with the type of resource you are editing. Figure 4.3
illustrates the palette that SDKPaint displays when you are editing a
bitmap.

(This figure may be found in the printed book).

The palette displays 16 true and 12 dithered colors that you can use to
define screen background.

Figure 4.4 illustrates the palette that SDKPaint displays when you are
editing an icon.

(This figure may be found in the printed book).

The palette displays 16 true and 12 dithered colors.

Figure 4.5 illustrates the palette that SDKPaint displays when you are
editing a cursor.

(This figure may be found in the printed book).

The palette indicates that you can use only black and white opaque colors to
define a cursor. The palette also displays 16 true colors that you can use
for screen and inverse color.

The following section describes how to use the colors that the palette
displays.


4.5.1  Working with Opaque, Screen, and Inverse Colors

Images comprise one or more of the following types of colors:

Color                             Description
────────────────────────────────────────────────────────────────────────────
Color (opaque)                    Colors that retain their hue regardless
                                  of the color of the screen.

Screen                            The color that defines the screen
                                  background.

Inverse                           The color that is the inverse of the
                                  screen color. SDKPaint always displays
                                  the inverse color of the currently
                                  specified screen color.

To select an opaque, screen, or inverse color from the palette, do the
following:


  1.  Select the type of color you want to draw within the color type
      window.

  2.  Click the color displayed in the palette.

      SDKPaint displays the selected color in the color type window.


When using the opaque color type, you can associate a color with the left
mouse button by clicking that color with the left mouse button. The color
you select appears in the box labeled "Left."

To associate an opaque color with the right mouse button, click the color
with the right mouse button. The selected color appears in the box labeled
"Right."

The following sections describe how to use opaque, screen, and inverse
colors.


Using Opaque Colors

The following describes the opaque color options for each image:

Image                             Color Options
────────────────────────────────────────────────────────────────────────────
Bitmap                            Bitmaps are either monochrome or color.

Icon                              Icons can use the full spectrum of the
                                  palette.

Cursor                            Cursors are monochrome.


Using Screen Colors

Screen colors let you see how your icon or cursor looks against various
screens. SDKPaint displays screen colors in the viewing area of the SDKPaint
window. In addition to the selection method described above, you can change
screen colors as follows:


  ■   Select a color from the palette and then click in the viewing area.

      This method changes the screen color, regardless of the color type you
      have selected. If you are currently drawing with the opaque color
      type, using this procedure changes the color of the screen to the
      color you select from the palette.

  ■   Select the inverse color type and then click a color in the palette.

      SDKPaint displays the inverse color you have selected and
      automatically  displays the corresponding screen color.



Using Inverse Colors

When the opaque colors of an icon or cursor are identical to the color of
the screen on which they are displayed, the icon or cursor is not visible.
Inverse colors are useful for defining the image when this condition occurs.
For example, if you outline an icon in an inverse color, the border of the
icon is visible when the screen and opaque colors are identical.

In addition to the selection method described in the preceding section, you
can change the inverse color by choosing a new screen color. When you change
the screen color, SDKPaint automatically displays the compatible inverse
color.


4.6  Customizing the Palette

SDKPaint lets you customize the palette by editing colors. After editing one
or more colors, you can save them in a special palette that you load into
the editor.

This section describes how to do the following:


  ■   Edit colors for bitmaps and color icons

  ■   Save a palette that you have customized

  ■   Load a customized palette into the editor




4.6.1  Editing Colors

SDKPaint lets you edit the palette used to draw bitmaps and color icons. To
edit a color from the palette that is currently loaded in SDKPaint, do the
following:


  1.  Select the color you want to edit.

  2.  Choose the Edit Colors command from the Palette menu.

      If you are editing a bitmap, you can also double-click the color on
      the palette. In either case, SDKPaint displays the Edit Colors dialog
      box.

  3.  Change the RGB values of the color.

      The editor displays the changes to the color in the dialog box.

  4.  Choose OK if you are satisfied with the new color.

      If you want to cancel your edits on the color, choose Cancel.



4.6.2  Saving a Palette

After you customize a palette by editing selected colors on it, you can save
the palette for future use by choosing the Save Colors command from the
Palette menu. SDKPaint prompts you for the filename of the palette you are
saving.

SDKPaint assigns the extension .PAL to custom palettes by default.


4.6.3  Loading a Customized Palette

Choose the Get Colors command from the Palette menu to load a customized
palette into SDKPaint. SDKPaint prompts you for the name and location of the
palette you want to use.

After you load the palette into SDKPaint, you can return to the default
palette by doing the following:


  1.  Choose the Edit Colors command from the Palette menu.

  2.  Select Default in the Edit Colors dialog box.



4.7  Defining the Cursor Hotspot

To define the hotspot of a cursor do the following:


  1.  Choose the Set Hotspot command from the Hotspot menu.

      SDKPaint changes the cursor to a bullseye and displays a window that
      gives the coordinates of the cursor as you move it around the work
      area.

  2.  Click the left mouse button to define the hotspot.

      Clicking the mouse button when the cursor is outside the work area
      disables the Set Hotspot command.


To show the current hotspot, choose the Show Hotspot command from the
Hotspot menu. The editor displays the coordinates of the current hotspot in
a window. To delete the window, choose Show Hotspot again.


4.8  Using the Clipboard

SDKPaint lets you transfer images to and from the clipboard using the Copy
and Paste commands from the Edit menu. Transferring images is useful to do
the following:


  ■   Load an image created using Paintbrush or another paint program.

  ■   Move an image from one resource type to another, such as when using a
      cursor image to create an icon.

  ■   Create multiple device-specific versions of one image.


The editor uses two data formats when transferring images to and from the
clipboard. To transfer opaque colors, SDKPaint uses the CF_BITMAP format. To
transfer inverse colors, the editor uses a private format. Many drawing
applications, such as Paintbrush, recognize the CF_BITMAP format.

The image you transfer from the clipboard may be smaller or larger than the
selected rectangular region of the image. By default, the selected region is
the entire workspace; you can select a smaller region using the Pick
Rectangle tool.

When the clipboard image is not the same size as the selected region,
SDKPaint displays a dialog box that gives you the following options:


  ■   Stretch/shrink Clipboard bitmap?

  ■   Clip Clipboard bitmap?


If you select the Stretch/shrink option, SDKPaint stretches or compresses
the image as necessary. For details about this process, see the description
of the StretchBlt function in the Reference, Volume 1.

If you select the Clip option, SDKPaint pastes the clipboard bitmap to the
screen, justified on the top left corners of the workspace and viewing area.
SDKPaint modifies rows and columns of the image as follows:

Size of Clipboard Bitmap          Rows and Columns Modified
────────────────────────────────────────────────────────────────────────────
Smaller than selected region      Rows at the bottom and columns at the
                                  far right of the selected region
                                  remain unchanged.

Larger than selected region       SDKPaint clips rows at the bottom and
                                  columns at the far right of the
                                  clipboard bitmap.


4.9  Using ZoomIn to Examine Images

The Microsoft Windows ZoomIn utility (ZOOMIN) allows you to examine screen
images in detail. ZoomIn captures images from the screen and expands or
contracts the size of the pixels of that image. For example, you could use
ZoomIn to capture the image of a character displayed with the system font,
expand that image to show the pixel pattern of the character, and then
duplicate the character in the image you are creating with SDKPaint.

When you run ZoomIn, the utility displays a small overlapped window with a
vertical scroll bar. To capture an image, press the left mouse button while
the cursor is inside the client area of the ZoomIn window. A rectangle
appears that shows the size of the area on the screen which ZoomIn will
display. Drag the rectangle to the image on the screen you want to capture,
and then release the mouse button.

To vary the detail of the image, use the vertical scroll bar of the ZoomIn
window. Scrolling up decreases the detail, and scrolling down increases the
detail. To change the size of the image captured by ZoomIn, resize the
ZoomIn window.


4.10  Summary

SDKPaint is a tool that lets you design bitmaps, icons, and cursors.

For more information on subjects related to creating images, see the
following:

Subject                           Reference
────────────────────────────────────────────────────────────────────────────
Resource files                    Tools: Chapter 3, "Compiling Resources:
                                  The Resource Compiler"

Icons                             Guide to Programming: Chapter 5, "Icons"

Cursors                           Guide to Programming: Chapter 6, "The
                                  Cursor, the Mouse, and the Keyboard"

Bitmaps                           Guide to Programming: Chapter 11,
                                  "Bitmaps"

Clipboard files                   Reference, Volume 2: Chapter 9, "File
                                  Formats"








Chapter 5  Designing Dialog Boxes: The Dialog Editor
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Dialog Editor (DIALOG) is a tool that lets you design and
test a dialog box on the display screen instead of defining dialog
statements in a resource script. Using the Dialog Editor, you can add,
modify, and delete controls in a dialog box. The Dialog Editor saves the
changes you make as resource script statements. You then compile these
statements into a binary resource file that is linked to your application's
executable file.

This chapter describes the following topics:


  ■   How the Dialog Editor works with files

  ■   Installing custom controls

  ■   Viewing the Dialog Editor window

  ■   Opening resource files, include files, and dialog boxes

  ■   Editing individual controls

  ■   Working with groups of controls

  ■   Working with dialog boxes

  ■   Moving a dialog box between resources

  ■   Working with include files
────────────────────────────────────────────────────────────────────────────
NOTE

You must use a mouse or similar pointing device with the Dialog Editor.
────────────────────────────────────────────────────────────────────────────





5.1  How the Dialog Editor Works with Files

The Dialog Editor creates or modifies the following types of files:

File Type                         Description
────────────────────────────────────────────────────────────────────────────
Dialog script (.DLG)              Text file containing DIALOG and CONTROL
                                  statements that the Resource Compiler
                                  interprets

Resource file (.RES)              Binary file containing multiple dialog
                                  resources, and other resources such as
                                  bitmaps, icons, menus, and string tables


File Type                         Description
────────────────────────────────────────────────────────────────────────────
Include file (.H)                 Text file containing #define constants
                                  that are associated with symbol names
                                  for the various controls located in a
                                  dialog box

Figure 5.1 illustrates how the Dialog Editor manages these files.

(This figure may be found in the printed book).


5.1.1  The Dialog Script

The most important output of the Dialog Editor is the dialog script (.DLG)
file. You can define more than one dialog box in a .DLG file. The following
exemplifies a .DLG script that Dialog Editor produces:

  FirstBox DIALOG LOADONCALL MOVEABLE DISCARDABLE 12, 20, 130, 113
  STYLE WS_DLGFRAME | WS_POPUP
  BEGIN
  CONTROL "Option 1", 102, "button", BS_RADIOBUTTON |
            WS_TABSTOP | WS_CHILD, 33, 19, 28, 12
  CONTROL "Option 2", 103, "button", BS_RADIOBUTTON |
            WS_TABSTOP | WS_CHILD, 33, 36, 28, 12
  CONTROL "Option 3", 104, "button", BS_RADIOBUTTON |
            WS_TABSTOP | WS_CHILD, 33, 53, 28, 12
  CONTROL "Ok", 1, "button", BS_PUSHBUTTON |
            WS_TABSTOP | WS_CHILD, 29, 86, 24, 14
  CONTROL "Cancel", 2, "button", BS_PUSHBUTTON |
            WS_TABSTOP | WS_CHILD, 70, 86, 24, 14
  END

  SecondBox DIALOG LOADONCALL MOVEABLE DISCARDABLE  30, 40, 135, 125
  STYLE WS_DLGFRAME | WS_POPUP
  BEGIN
            .
            .
            .

You include the dialog script within your application's resource script
(.RC) file by using an #include statement that refers to the .DLG file. If
you name the dialog script MYDLGS.DLG, your .RC file might look similar to
the following example:

  #include "mydlgs.h"
  .
  .
  .
  MainMenu  MENU
  BEGIN
     POPUP  "&File"
      BEGIN
          MENUITEM  "&New",  MI_FILE_NEW
          .
          .
           .
     END
  END

  #include "mydlgs.dlg"
  .
  .
  .

Using the #include directive, include the .DLG script into the application's
overall .RC script. Then compile the .RC text file to produce an .RES binary
file using the -r switch. Finally, link the .RES file into your
application's .EXE file.

See Section 5.1.3, "The Include File," for more information on how to
include the .H header and the .DLG files.


5.1.2  The Resource File

The Dialog Editor produces an .RES file that is a companion to the .DLG
file. This .RES file is a compiled, binary representation of the dialog
script.

The purpose of the .RES file produced by the Dialog Editor is solely to
reedit the dialog script. The Dialog Editor does not read in .DLG files; it
reads only in .RES files. Note that this .RES file should not be linked to
your application's .EXE file because it does not include the other
resources─such as bitmaps, icons, menus, and string tables─required by your
application.

There are two methods for reediting a dialog resource. The first method is
to read back into the Dialog Editor the .RES file that the editor produced
as a companion to the .DLG file.

The second method is to read into the Dialog Editor the .RES file that the
Resource Compiler produced from the combined .RC and .DLG scripts.

Which method you choose is a matter of personal preference. The advantage of
the first method is that you can group together categories of dialog boxes
into separate .DLG files and their corresponding .RES files, and manage them
separately. Also, it is not necessary for you to use the Resource Compiler
to convert the .DLG text file into the binary .RES format required as input
to the Dialog Editor. The advantage of the second method is that you can
discard .RES files produced by the Dialog Editor and free up disk space.


5.1.3  The Include File

The include (.H) file produced by the Dialog Editor contains #define
statements that identify controls in dialog boxes.

When creating a dialog box, you can assign symbolic names to controls. You
use the symbolic names in your application's C source code to refer to the
controls. As a result of these assignments, the Dialog Editor produces a
header file containing #define statements such as the following:

  #define DI_OPTION1  102
  #define DI_OPTION2  103
  #define DI_OPTION3  104

By including the header file in your C source code with an #include
statement, you can refer to the controls by symbolic names, rather than
numeric values, as the following illustrates:

  BOOL FAR PASCAL FirstDlgProc(hDlg, wMessage, wParam, lParam)
   .
   .
   .
  switch (wMessage)
  {
     case DI_OPTION1:
        /* Respond to Ok button here */
              break;        case DI_OPTION2:
       /* Respond to Cancel button here */
      break;
   .
  .
  .

You must include the header file in your application's resource script file
before including the dialog script. This is necessary because the dialog
script refers to the controls using the symbolic names instead of the
numeric values. For an example of including files, see Section 5.1.1, "The
Dialog Script."

When assigning ID values to controls, you can assign any number you want;
however, there are some special guidelines for ID values 1 and 2.


ID Value of 1

When the user presses ENTER, Windows automatically sends a WM_COMMAND
message to the dialog-input function. If the dialog box has a default button
(for example, the OK button), pressing ENTER sends a WM_COMMAND message with
the ID value. If you have a default OK button, you should assign it an ID
value of 1 so that it is activated when the user presses ENTER. This is
consistent with the recommended guidelines for creating a Windows
application set forth in Guide to Programming.

Windows defines the ID value of 1 as IDOK.


ID Value of 2

When the user presses CANCEL or ESCAPE, Windows automatically sends a
WM_COMMAND message with the ID value of 2. If you have a Cancel button in a
dialog box, it should have an ID value of 2.

Windows defines the ID value of 2 as IDCANCEL.


5.2  Installing and Removing Custom Controls

The Dialog Editor provides a menu and toolbox of standard controls─such as
edit fields and list boxes─that you can select when designing a dialog box.
In addition, you can incorporate nonstandard custom controls into a dialog
box.

You can develop or acquire any number of custom controls and maintain them
in a catalog recognized by the Dialog Editor. A custom control consists of a
dynamic-link library (DLL) that contains the window procedure for the
control. The DLL also contains functions that interact with the Dialog
Editor. For more information on developing custom controls, see Guide to
Programming.

The Dialog Editor maintains the catalog of custom controls in your WIN.INI
file under the heading [User Controls]. Each entry equates the name of a
custom control with the full pathname of the control's DLL file, as shown in
the following example:

  [user controls]
  rainbow = c:\myctrls\rainbow.dll

The Dialog Editor lets you add and remove custom controls from this catalog.



5.2.1  Installing a Custom Control

To install a custom control in the catalog, do the following:


  1.  Choose the Add Custom Control command from the File menu.

  2.  Specify the full pathname of the DLL file that defines your custom
      control.


If you want to call up a custom control only during a Dialog Editor session,
without permanently adding it to your custom control catalog, then select
the Create Temporary Control radio button in the Add Control dialog box.

For information on working with custom controls, see Section 5.5, "Editing
Dialog Box Controls."


5.2.2  Removing a Custom Control

To remove a custom control from the catalog, choose the Remove Control
command from the File menu. The editor displays a Remove Control Library
dialog box that lists custom controls you can remove.


5.3  Viewing a Dialog Box: The Dialog Editor Window

Figure 5.2 illustrates the Dialog Editor window after a user has loaded a
dialog box and has chosen the Toolbox and Status commands from the Options
menu.

(This figure may be found in the printed book).

The menu bar contains the following menus:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Menu                              Commands
────────────────────────────────────────────────────────────────────────────
File                              This menu contains the following
                                  commands:

                                  New─Creates .DLG and companion .RES
                                  files
Menu                              Commands
────────────────────────────────────────────────────────────────────────────
                                  files

                                  Open─Opens existing .RES files for
                                  editing

                                  Save and Save As─Save changes to a
                                  dialog boxes

                                  Add Custom Control and Remove Custom
                                  Control─Adds and removes members of your
                                  custom control catalog

                                  Exit─Exits the editor

Include                           This menu contains the following
                                  commands:

                                  New─Creates a new include file

Menu                              Commands
────────────────────────────────────────────────────────────────────────────

                                  Open─Opens an existing include file

                                  Save and Save As─Save changes to include
                                  files

                                  View/Edit─Displays and edits include
                                  files

                                  Hex Values─Toggles the display of
                                  hexadecimal and
                                  decimal values in include files

Dialog                            This menu contains the following
                                  commands:

                                  New─Creates a new dialog box

                                  View─Lists current dialog boxes in the
Menu                              Commands
────────────────────────────────────────────────────────────────────────────
                                  View─Lists current dialog boxes in the
                                  resource file

                                  Flags─Sets memory flags

                                  Groups─Sets tab stops and group markers

                                  Rename─Renames the current dialog box

                                  Test─Toggles work and test modes to
                                  allow you to test your dialog box

Edit                              This menu contains the following
                                  commands:

                                  Restore─Reverts to last saved version of
                                  a dialog box

                                  Cut─Moves a dialog box to the clipboard
Menu                              Commands
────────────────────────────────────────────────────────────────────────────
                                  Cut─Moves a dialog box to the clipboard

                                  Copy─Copies a dialog box to the
                                  clipboard

                                  Paste─Copies a dialog box from the
                                  clipboard

                                  Erase Dialog─Removes a dialog box

                                  Styles─Changes the style of a control or
                                  dialog box

                                  Group Mode─Allows you to move a group of
                                  controls as a unit

                                  Duplicate Mode─Allows you to duplicate
                                  controls by dragging them

Menu                              Commands
────────────────────────────────────────────────────────────────────────────

Control                           This menu contains different types of
                                  controls that you can select for the
                                  dialog box.

Options                           This menu contains the following
                                  commands:

                                  Status─Displays and hides the Selected
                                  Item Status window

                                  Toolbox─Displays and hides the Toolbox
                                  window

                                  Grid─Allows you to specify grid
                                  increments for aligning controls




5.3.1  The Mode Display

Beneath the menu bar, the Dialog Editor displays the mode you are currently
using. The modes are as follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Mode                              Meaning
────────────────────────────────────────────────────────────────────────────
Work                              Indicates you are creating or modifying
                                  a dialog box

Test                              Indicates you are testing a box

Work/Group                        Indicates that you are in the process of
                                  selecting and moving a group of controls

Work/Copy                         Indicates that you are in the process of
                                  duplicating
                                  controls

Mode                              Meaning
────────────────────────────────────────────────────────────────────────────




5.3.2  The Toolbox

The Toolbox is a convenient alternative to choosing controls from the
Control menu. Initially, the Dialog Editor does not display the Toolbox. If
you choose the Toolbox command in the Options menu, the editor displays the
toolbox in the upper-right corner of the window.

You can move the Toolbox by dragging its title bar.


5.3.3  The Selected Item Status Window

When you choose the Status command from the Options menu, the Dialog Editor
displays the Selected Item Status window in the lower-right corner of the
Dialog Editor window. You can move the Selected Item Status window or close
it by choosing the Status command from the Options menu a second time. The
window supplies the following information about the currently displayed
dialog box and its controls:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Field                             Description
────────────────────────────────────────────────────────────────────────────
Dialog                            The name of the dialog box being edited.

(x, y)                            Position of the upper-left corner of the
                                  selected dialog box or control.

(cx, cy)                          Offset of the selected dialog box or
                                  control.

Control                           Type of control selected (for example,
                                  Radio Button or Check Box). If the
                                  dialog box itself is selected, the
                                  editor displays "Dialog Box" in this
                                  field.

Field                             Description
────────────────────────────────────────────────────────────────────────────

ID Value                          Identifier of the selected control. The
                                  identifier is displayed
                                  as either a number or a symbol. If the
                                  dialog box is selected instead of a
                                  control, no ID value is shown.



Size and position values are given in horizontal and vertical dialog units.
The horizontal units are 1/4 of the dialog base width unit; the vertical
units are 1/8 of the dialog base height unit. The current dialog base units
are computed from the height and width of the current system font. The
GetDialogBaseUnits function returns the dialog base units in pixels.

When you change the dialog box or controls, the window reflects the change.



5.4  Opening Files and Dialog Boxes

After invoking DIALOG, you can open the following:


  ■   An existing or new resource file

  ■   An existing or new include file

  ■   An existing or new dialog box


Whenever you open a new resource or include file, the editor offers you the
opportunity of saving your previous work.


5.4.1  Opening a Resource File

Using the File menu, you can either create a new resource file or open an
existing resource file.

If opening an existing resource file, you can specify an .RES file that
either the Dialog Editor or the Resource Compiler created.


5.4.2  Opening an Include File

After you load a resource file, Dialog Editor prompts you for an include
file. The include file associates symbolic names with control identifiers.

If you are already working with an include file, you can choose to continue
working with it or open a new one.

If you loaded an existing resource file, the Dialog Editor displays the Open
File window. To edit an include file, choose one of the files listed.


5.4.3  Opening a Dialog Box

If you are loading an existing resource file, the Dialog Editor offers you
the choice of opening an existing dialog box. The editor displays a list of
dialog boxes available for editing in the View Dialog window. If you want to
create a new dialog box in the existing resource file, choose the Cancel
button from the View Dialog window.


Opening an Existing Dialog Box

To open an existing dialog box, choose it from the list that the View Dialog
window displays. The dialog box appears in the working area of the Dialog
Editor window.


Creating a New Dialog Box

To create a new dialog box, choose the New command from the Dialog menu. The
Dialog Editor prompts you for a dialog box name.


5.5  Editing Dialog Box Controls

The Dialog Editor lets you add, modify, and delete dialog box controls,
which are described in Table 5.1.

Table 5.1  Dialog Box Controls

╓┌──────────────────────┌─────────────────────────┌──────────────────────────╖
Control                Illustration              Description
────────────────────────────────────────────────────────────────────────────
Push button            (Please refer to the      Push buttons let the user
                       printed book)             choose an immediate
                                                 action, such as canceling
                                                 the dialog box.

Radio button           (Please refer to the      Radio buttons are
                       printed book)             typically used in groups
                                                 to give the user a choice
                                                 of selections. The user
                                                 can select only one radio
                                                 button in a group at a
                                                 time.

Check box              (Please refer to the      Check boxes are
                       printed book)             independent of one
Control                Illustration              Description
────────────────────────────────────────────────────────────────────────────
                       printed book)             independent of one
                                                 another, although two or
                                                 more often appear next to
                                                 each other to give the
                                                 user a choice of
                                                 selections. The user can
                                                 turn any number of check
                                                 boxes on or off at a
                                                 given moment.

Horizontal scroll bar  (Please refer to the      Scroll bars let the user
                       printed book)             scroll data. They are
                                                 usually associated with
                                                 another control or window
                                                 that
                                                 contains text or graphics.


Vertical scroll bar    (Please refer to the
Control                Illustration              Description
────────────────────────────────────────────────────────────────────────────
Vertical scroll bar    (Please refer to the
                       printed book)

Edit                   (Please refer to the      Edit controls display
                       printed book)             both numbers and text,
                                                 and let the user type in

                                                 numbers and text.

Static text            (Please refer to the      Static text controls
                       printed book)             label other
                                                 controls, such as edit
                                                 controls.

Group box              (Please refer to the      Group boxes enclose a
                       printed book)             collection or group of
                                                 other controls, such as a
                                                 group of radio buttons.

Control                Illustration              Description
────────────────────────────────────────────────────────────────────────────

List box               (Please refer to the      List boxes display a list
                       printed book)             of strings, such as file
                                                 or directory names.

Combo box              (Please refer to the      Combo boxes combine list
                       printed book)             boxes with edit controls.


Frame                  (Please refer to the      A hollow rectangle you
                       printed book)             can use to frame a
                                                 control or group of
                                                 controls.



Table 5.1  Dialog Box Controls (continued)

╓┌──────────┌───────────────────────────────┌────────────────────────────────╖
Control    Illustration                    Description
────────────────────────────────────────────────────────────────────────────
Icon       (Please refer to the printed    A rectangular space in which
           book)                           you can place an icon. Do not
                                           size the icon space; icons
                                           automatically size themselves.


Rectangle  (Please refer to the printed    A filled rectangle you can use
           book)                           for graphical emphasis.

Custom                                     A control you design and define
                                           in a DLL file. See Section 5.2,
                                           "Installing and Removing Custom
                                           Controls."

────────────────────────────────────────────────────────────────────────────




5.5.1  Adding Controls

The Dialog Editor lets you choose the controls you want to add to a dialog
box from either the Control menu or the Toolbox. The Toolbox displays an
icon for each control.


Enabling the Toolbox

To enable the Toolbox, choose the Toolbox command from the Options menu. The
Dialog Editor displays the Toolbox in the upper-right section of the Dialog
Editor window. You can move the Toolbox by dragging its title bar.


Adding Standard Controls

To add standard controls to a dialog box, do the following:


  1.  Choose the control you want to add from either the Control menu or the
      Toolbox.

      Choosing either a control command in the Control menu or a control
      icon in the Toolbox changes the cursor to a plus sign (+).

  2.  Position the cursor where you want to add the control.

  3.  Click the mouse button.


If the control includes text, add the text using the method described in
Section 5.5.2, "Working with Individual Controls."


Adding Custom Controls

After you have installed a custom control using the procedure described in
Section 5.2.1, "Installing a Custom Control," the control is accessible in
the Control menu and the Toolbox. To add the custom control to a dialog box,
choose either the Custom Control command from the Control menu or the Custom
Control icon from the Toolbox. The Dialog Editor displays the Select Custom
Control dialog box illustrated in Figure 5.3.

(This figure may be found in the printed book).

The window lets you select and view a specified custom control. To complete
the selection, choose the OK button.

You can specify the styles for custom controls as you would standard
controls. For information about editing controls, see the next section.


5.5.2  Working with Individual Controls

The Dialog Editor lets you make changes to individual controls, as follows:



  ■   Moving a control

  ■   Resizing a control

  ■   Changing control identifiers and styles

  ■   Adding or changing text associated with a control

  ■   Duplicating a control

  ■   Deleting a control




Moving a Control

The Dialog Editor lets you move individual controls. Use the mouse to drag a
control to its new position and the DIRECTION keys to make fine adjustments
to the control position.

The DIRECTION keys let you move a control horizontally and vertically by
dialog units. (For a description of dialog units, see Section 5.3.3, "The
Selected Item Status Window.") By default, controls move one dialog unit
each time you press a DIRECTION key. To change the distance moved, choose
the Grid command from the Options menu. The Grid command lets you specify
the number of dialog units moved along the x and y axes. If you choose new
grid coordinates after you have placed a control, the control will align
with the new grid coordinates when you move it.

For information about moving groups of controls, see Section 5.6, "Working
with Groups of Controls."


Resizing a Control

To change the size of a control, do the following:


  1.  Select the control.

  2.  Drag one of the eight small rectangles that appear on the boundaries.


Dragging one of the corner rectangles changes the width and height of the
control simultaneously.

The Grid command in the Options menu also affects how a control is resized.
When you resize the control, it will automatically size to the nearest grid
coordinate. However, if you select new grid coordinates and then resize the
control, the size of the control will change in increments of the grid
coordinates, but relative to the control's current position. The control
itself will not move when you resize it, even though it may no longer be
aligned with the grid. To ensure that a control aligns with new grid
coordinates, you must move the control.


Changing Control Identifiers and Styles

To change the identifier or style of a control, do the following:


  1.  Double-click the control, or select the control and choose the Styles
      command from the Edit menu.

      The Dialog Editor displays a window that lists the identifier, text,
      and style of the control selected. Figure 5.4 illustrates the Button
      Control Style dialog box.

      (This figure may be found in the printed book).

  2.  To change the identifier, type the new identifier in the ID Value box.


      If you supply a symbolic name instead of a numeric value, the Dialog
      Editor checks to determine whether or not you have already defined the
      name in the current include file. If you have not, the editor offers
      you the option of adding the name.

  3.  To change the style of a control, select the styles you want in the
      Styles box.



Adding or Changing Text

In addition to changing identifiers and styles, the Style window lets you
add or modify text associated with a control.

To add or modify text, type the text in the Text box.

────────────────────────────────────────────────────────────────────────────
NOTE

When you add an icon control to a dialog box, the names of the control and
the identifier in the .RC file should be the same. For example, if the .RC
file defines an icon as "myicon", name the control "myicon" also.
────────────────────────────────────────────────────────────────────────────


Duplicating A Control

You can copy a control from an existing control in your dialog box by using
either of the following methods:


  ■   Drag the original control while holding down the CONTROL key. The Mode
      Display beneath the menu bar indicates "Work/Copy" during this
      operation. A copy of the original control follows the cursor until you
      release the drag.

  ■   Choose the Duplicate Controls command from the Edit menu. While
      Duplicate Controls is selected, the Mode Display beneath the menu bar
      indicates "Work/Copy." In this mode, the effect of dragging a control
      is to duplicate it, rather than move it. To cancel this mode, toggle
      it by choosing the Duplicate Controls command again.



Deleting A Control

To delete a control, select it and press the DELETE key or choose the Clear
Control command from the Edit menu. The Dialog Editor deletes the selected
control from the dialog box.


5.6  Working with Groups of Controls

The Dialog Editor lets you do the following with groups of controls:


  ■   Move controls as a group

  ■   Define the input focus sequence of a group




5.6.1  Moving Groups of Controls

To move a group of controls, do the following:


  1.  Choose the Group Move command from the Edit menu.

      The work mode will indicate "Work/Group."

  2.  Click each control in the group you want to move.

      The editor outlines each control you select, and the group itself,
      with a gray line.

  3.  Click the mouse button while pointing to a location in the group
      rectangle not occupied by one of the controls.

  4.  While holding down the mouse button, drag the group of controls to a
      new position.

  5.  Cancel the "Work/Group" mode by toggling the Group Move command in the
      Edit menu.


You must select all the controls you want to move, even if one control
encloses another. For instance, to move several radio buttons and the group
box that encloses them, you must select each radio button and the group box,
and then move them as a unit.


5.6.2  Defining Input Focus Sequence

The Groups command in the Dialog menu lets you specify the input focus
sequence in a group of controls, as follows:


  ■   Specify the controls forming a group. A group defines a sequence of
      controls within which the user can shift input focus by using the
      DIRECTION keys.

  ■   Specify tab stops that define how input shifts from group to group as
      the user presses the TAB key.

  ■   Specify the sequential order in which individual and groups of
      controls receive input focus as the user presses DIRECTION and TAB
      keys.


When you choose the Groups command, the Dialog Editor displays the Order
Groups window illustrated in Figure 5.5.

(This figure may be found in the printed book).


Defining a Group

To specify a group of controls, place a group marker before the first
control in the group and another after the last control, as follows:


  1.  Select the first control in the group.

  2.  Click the Group Marker button.

      The Dialog Editor inserts a group marker above the control.

  3.  Select the control below the last control in the group.

  4.  Click the Group Marker button.

      The Dialog Editor inserts a group marker below the last control in the
      group. This marker defines the beginning of the next group.


Placing a group marker before a control instructs the Dialog Editor to
assign the WS_GROUP style to the control.

To delete a group marker, select the group marker and click the Delete Group
button.


Setting and Deleting Tab Stops

Tab stops determine where input focus shifts when the user presses the TAB
key. Set or delete tab stops on individual controls, or on the first control
in a group, as follows:


  1.  Select the control on which you want to set or remove a tab stop.

  2.  Click the Tab Stop or Delete Tab button to set or delete a tab,
      respectively.


An asterisk appears next to each control on which a tab stop is set.

Placing a tab stop on a control instructs the Dialog Editor to assign the
WS_TABSTOP style to the control.


Changing the Input Focus Sequence of Controls

By default, controls receive input focus in the order in which you place
them in the dialog box, not their position in the dialog box. Repositioning
controls does not affect the order in which they receive input focus.

To change the order in which controls receive user input, reorder the
controls listed in the Order Groups window as follows:


  1.  Select the control you want to move.

  2.  Move the cursor to the position where you want the control to appear
      in the list box.

      The cursor changes from an arrow to a short, horizontal bar. The bar
      appears only in places where you can insert the control.

  3.  Click the mouse button to insert the control.



5.7  Working with a Dialog Box

In addition to adding, changing, and deleting controls in a dialog box, you
can do the following to the box as a whole:


  ■   Change its size and name

  ■   Define its styles

  ■   Set flags that indicate how Windows stores the box in memory

  ■   Erase the box




5.7.1  Resizing a Dialog Box

To change the size of a dialog box, select it and drag one of its resize
handles.

For information about resizing a control, see Section 5.5.2, "Working with
Individual Controls."

The Grid command in the Options menu affects how a dialog box is resized.
When you resize the dialog box, it will automatically size to the nearest
grid coordinate. However, the presence of the grid does not affect how a
dialog box is moved.


5.7.2  Renaming a Dialog Box

To rename a dialog box, do the following:


  1.  Choose the Rename command from the Dialog menu.

  2.  Enter the new name in the Name Dialog window.



5.7.3  Defining Styles

To define the styles of a dialog box, do the following:


  1.  Select the dialog box.

  2.  Choose the Styles command from the Edit menu.

  3.  Select the relevant styles from the Dialog Box Styles window.



5.7.4  Setting Memory Flags

To set memory flags for the currently displayed dialog box, do the
following:


  1.  Choose the Flags command from the Dialog menu.

  2.  Select the relevant memory flags from the Memory Flags window.


Memory flags are as follows:


  ■   Moveable─Dialog resource data segment can be moved in memory if
      necessary to compact memory.

  ■   Preload─Dialog resource data segment is loaded immediately.

  ■   Discard─Dialog resource data segment can be discarded if no longer
      needed.


By default, dialog boxes are moveable, loaded on call rather than preloaded,
and discardable.

For more information about memory flags, see Guide to Programming and the
Reference, Volume 2.


5.7.5  Canceling Edits

To cancel edits on a dialog box, use either the Restore or the Clear command
from the Edit menu. The Restore command cancels edits and reloads the
currently displayed dialog box. The Clear command removes the currently
displayed dialog box from the work area and the resource.


5.8  Moving a Dialog Box Between Resources

To move a dialog box from one resource file to another, use the Cut, Copy,
and Paste commands from the Edit menu, as follows:


  1.  Cut or copy the currently displayed dialog box to the clipboard.

      The Cut command removes the dialog box from the work area and copies
      the resource to the clipboard; the Copy command copies the box to the
      clipboard.

  2.  Load a new resource file into the Dialog Editor.

  3.  Paste the dialog box from the clipboard to the work area.


The Dialog Editor supports the clipboard bitmap format (CF_BITMAP) so that
other clipboard viewers can paste dialog box images. The editor also uses a
private clipboard format, "Dialog," for its own use. The Dialog Editor can
paste from the clipboard only if an instance of the Dialog Editor has
previously copied data to the clipboard in the private "Dialog" format.


5.9  Working with Include Files

Dialog Editor lets you create and modify include files that define symbolic
names for controls.

This section describes the following:


  ■   How to create new include files when editing a dialog box

  ■   How to load existing include files into the Dialog Editor

  ■   How to edit include files

  ■   How to save include files


Table 5.2 describes the commands used for editing include files.

Table 5.2  Commands for Editing Include Files

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Description
────────────────────────────────────────────────────────────────────────────
New                               Creates a new include file.

Open                              Opens an existing include file.
Command                           Description
────────────────────────────────────────────────────────────────────────────
Open                              Opens an existing include file.

Save                              Saves a specified include file.

Save As                           Renames an include file and saves it.

View/Edit                         Displays the View/Edit Include File
                                  window. This window enables the user to
                                  edit symbolic definitions for controls.

Hex Values                        Toggles the display of identifier values
                                  between decimal and hexidecimal.

────────────────────────────────────────────────────────────────────────────



────────────────────────────────────────────────────────────────────────────
NOTE

The Dialog Editor works with include files that have only #define
directives. The Dialog Editor will not work with header files that contain
other directives, such as typedef, or comments preceded by a semicolon ( ;
). When the Dialog Editor saves the include file, it strips out any blank
lines that may have existed previously in the include file.

────────────────────────────────────────────────────────────────────────────


5.9.1  Creating New Include Files

The Dialog Editor lets you create new include files to define symbol names
for controls in your dialog boxes. You can create new include files either
when you create a new resource file or when you are editing a dialog box.

Typically, you create a new include file when creating a new resource file.
After creating a new resource file using the method described in Section
5.4.1, "Opening a Resource File," the Dialog Editor asks whether or not you
want to create a new include file.

When creating a new include file, you can give it a name identical to the
resource filename. Giving the resource and include files identical names
causes the Dialog Editor to open the include file automatically each time
you load the corresponding resource file into the editor. If you give the
resource file and include file different filenames, the Dialog Editor
prompts you for the include file you want to open.

If you want to create a new include file while you are editing a dialog box,
choose the New command from the Include menu.


5.9.2  Loading Existing Include Files

Just as you can create a new include file either when loading a resource
file at the beginning of an editing session or later when editing a dialog
box, you can load existing include files either at the beginning or during
your editing session.

Typically, you load an existing include file into the editor at the
beginning of an editing session. When you open a resource file at the
beginning of a session, the Dialog Editor automatically loads the
corresponding include file, if the file has the same name as the resource
file you open. If the include filename is different than the resource
filename, the editor asks you to select the include file you want to open.

If you want to open an existing include file while you are editing a dialog
box, choose the Open command from the Include menu. The Dialog Editor
displays an Open File window that lists include files you can load.


5.9.3  Editing Include Files

You can edit an include file in the following ways:


  ■   Select individual controls and define their symbolic names.

  ■   Open the file and edit its symbolic names and identifiers.


The second method lets you define symbolic names for controls as you work
with them.


Defining Names by Individual Control

Instead of opening an include file and editing it as a whole, you can define
symbolic names for individual controls as you work with them. The Dialog
Editor saves the names in the include file that you loaded into the editor.


To define the symbolic name of an individual control as you are working with
it, do the following:


  1.  Double-click the control.

      The Dialog Editor displays a Style window.

  2.  Enter the symbolic name of the control in the ID Value field.

      If you have not defined the symbolic name before, the Dialog Editor
      displays the following warning message: "That symbol does not exist."

  3.  Click the OK button in the Warning Message window.

      The Dialog Editor displays the View/Edit Include File window with the
      symbolic name you have defined for the control.

  4.  Click the Add button to complete adding the symbolic name to the
      include file.



Editing the File

To edit an include file, do the following:


  1.  Choose the View/Edit command from the Include menu. The editor
      displays the View/Edit Include File window.

  2.  Select the symbol you want to edit.

  3.  Make the change in the Symbol Name or ID Value text box.

  4.  Choose the Change button.

  5.  Select the symbol and choose the Delete command.



5.9.4  Saving Include Files

When saving an include file, give the file a name identical to the name of
its corresponding resource file, if possible. If the resource file and
include file have the same name, the Dialog Editor loads the include file
automatically when you open its corresponding resource file.


5.10  Summary

This chapter described the Dialog Editor, a tool that lets you design a
dialog box on the display screen instead of defining dialog statements in a
resource script file. For further information, see the following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Resource file                     Tools: Chapter 3, "Compiling Resources:
management                        The Resource Compiler"

Introduction to dialog boxes      Guide to Programming: Chapter 8,
                                  "Controls," and Chapter 9, "Dialog
                                  Boxes"

Memory flags                      Guide to Programming: Chapter 15,
                                  "Memory
                                  Management" and Reference, Volume 2:
                                  Chapter 8, "Resource Script Statements"

Control and dialog box styles     Reference, Volume 2: Chapter 8,
                                  "Resource Script Statements"

                                  System Application Architecture, Common
                                  User Access: Advanced Interface Design
                                  Guide





Chapter 6  Designing Fonts: The Font Editor
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Font Editor (FONTEDIT) lets you modify existing fonts to
create new fonts for your applications. Using the Font Editor, you can
modify each character in a font, or the height, width, and character mapping
of a font itself. In addition, you can use the editor to update information
in the font file header.

This chapter describes the following:


  ■   Editing letters, numbers, and other characters in the font

  ■   Modifying the height, width, and character mapping of the font

  ■   Changing information in the font file header


You can use the Font Editor only to create and edit raster fonts.

After creating a new font with the Font Editor, you must add the new font to
a font resource file.

For information on creating vector fonts and adding fonts to the font
resource file, see the Reference, Volume 2.

────────────────────────────────────────────────────────────────────────────
NOTE

You must use a mouse or similar pointing device with the Font Editor.

────────────────────────────────────────────────────────────────────────────


6.1  Opening a Font

To create a new font, you must open and edit an existing font. You cannot
create a new font from scratch. The font file you open must be in Windows
2.0 or 3.0 format.

If you do not have an existing 2.0 or 3.0 font to edit, the SDK disks
provide two "seed" fonts that are installed in your Windows development
tools directory (named \WINDEV by default). The ATRM1111.FNT is a
fixed-pitch font, while the VGASYS.FNT is a variable-pitch font.

After opening a font, the Font Editor displays the font, a specified
character, and information about the character. Figure 6.1 illustrates the
Font Editor window.

(This figure may be found in the printed book).

The Font Editor window has the following features:

Feature                           Description
────────────────────────────────────────────────────────────────────────────
Character window                  Contains a copy of the character you
                                  want to edit. A grid divides the window
                                  into rectangles. Each rectangle
                                  represents a pixel.

Character-viewing window          Displays two instances of the character
                                  in its normal size. The
                                  character-viewing window lets you
                                  examine the effect of the changes you
                                  make to the character. It also lets you
                                  see external character leading, the
                                  amount of vertical separation between
                                  lines.

Character information             Displays the character ANSI value and
                                  the character width and height in pixels.


Font window                       Displays normal-size copies of the
                                  characters in the font. This window is
                                  moveable.

The following sections describe how to edit characters displayed in the Font
Editor window.


6.2  Editing Characters

The Font Editor lets you change characters. This section describes how to
change characters in the following ways:


  ■   By turning on and off individual pixels

  ■   By adding and deleting columns or rows of pixels

  ■   By modifying specified blocks of pixels

  ■   By changing the width of a specified character, if the character
      belongs to a variable-pitch font

      NOTE  When you select a new character for editing, the Font Editor
      updates the current workspace with the character you have edited. If
      you do not want to save your edits, make sure you cancel changes,
      using the Refresh command in the Edit menu, before you make the new
      selection. See Section 6.2.6, "Canceling Changes to a Character," for
      more information on the Refresh command.



6.2.1  Turning Pixels On or Off

The Font Editor lets you change characters pixel by pixel. To turn a
character pixel on or off, point to the pixel and click the left mouse
button. To turn several pixels on or off, drag the cursor over the pixels
you want to change.


6.2.2  Changing Rows and Columns of Pixels

The Font Editor lets you copy or delete rows and columns of pixels. The Row
and Column menus each contain Add and Delete commands.


Adding a Row or Column

The Font Editor adds rows and columns to a character by copying the row or
column you select. To add a row or column, do the following:


  1.  Choose the Add command from the appropriate menu.

  2.  Select the row or column you want to delete by clicking on it.


The Font Editor duplicates the row or column selected.

When adding a new row, the Font Editor inserts it between the selected row
and the row immediately below it. The Font Editor pushes all rows below the
new row down one, and deletes the row at the bottom of the Character window.
Figure 6.2 illustrates selecting a row for addition to the character. Figure
6.3 illustrates the character after the Font Editor has duplicated the row.

(This figure may be found in the printed book).

(This figure may be found in the printed book).

When adding a new column, the Font Editor inserts it between the selected
column and the one to its right. The Font Editor inserts the new column and
pushes all columns to its right one column to the right, and deletes the
column at the far right of the Character window. Figure 6.4 illustrates
selecting a column for addition to the character. Figure 6.5 illustrates the
character after the Font Editor has duplicated the column.

(This figure may be found in the printed book).

(This figure may be found in the printed book).


Deleting a Row or Column

To delete a row or column of pixels, do the following:


  1.  Choose the Delete command from the appropriate menu.

  2.  Select the row or column you want to delete by clicking on it.


Deleting a row causes all rows below it to move up one, and causes the last
row in the Character window to be duplicated.

When you delete a whole column, all columns to the right of the deleted
column move left one, and the column at the far right of the Character
window is duplicated.


6.2.3  Modifying Blocks of Pixels

The Fill menu provides commands that let you select and change specified
blocks of pixels. The commands on the Fill menu are useful if you want to
modify a large number of pixels in the same way. For example, you can select
a block of pixels and fill all of them in one operation.

The Fill menu contains the following commands:

Command                           Description
────────────────────────────────────────────────────────────────────────────
Clear                             Changes a specified block of pixels to
                                  background pixels.

Solid                             Fills a specified block with foreground
                                  pixels.

Hatched                           Creates alternate foreground and
                                  background pixels in a specified block.

Inverted                          Changes foreground pixels to background
                                  pixels, and vice versa, in a specified
                                  block.

Left=Right                        Rotates a specified block horizontally
                                  180 degrees.

Top=Bottom                        Rotates a specified block vertically 180
                                  degrees.

Copy                              Copies pixels in a specified block to
                                  the clipboard.

Paste                             Fills a specified block with pixels from
                                  the clipboard.

If you are pasting pixels from the clipboard, be sure the area of the
Character window in which you want to paste is the same size as the block on
the clipboard. If you try to paste your data from the clipboard into an area
that is larger or smaller than the block, the Font Editor tries to stretch
or squeeze the block to fit.

The procedure for carrying out commands in the Fill menu is as follows:


  1.  Choose the relevant command from the menu.

  2.  Select the block of pixels you want to change.


The editor executes the relevant operation on all pixels within the
specified block.


6.2.4  Changing Character Width

Use the Width menu to change the width of a character belonging to a
variable-pitch font. Commands in the Width menu change the number of columns
in the character bitmap in the following ways:

Command                           Description
────────────────────────────────────────────────────────────────────────────
Wider (left)                      Adds a blank column to the left side of
                                  the character.

Wider (right)                     Adds a blank column to the right side of
                                  the character.

Wider (both)                      Adds a blank column to each side of the
                                  character.

Narrower (left)                   Deletes a column from the left side of
                                  the character.

Narrower (right)                  Deletes a column from the right side of
                                  the character.

Narrower (both)                   Deletes a column from each side of the
                                  character.

────────────────────────────────────────────────────────────────────────────
NOTE

The width of a character can be changed only on variable-pitch fonts.

Characters in a variable-pitch font cannot be wider than the maximum
character width. If you try to make a character cell wider than the maximum
character width, a dialog box appears, warning you that the maximum
character width will increase.
────────────────────────────────────────────────────────────────────────────


6.2.5  Storing Changes to a Character

You can store changes to a character by selecting it in the Font-viewing
window.

The Font Editor stores your selection by copying it back to the font buffer.
The Font-viewing window is updated to show the new character.

You can also store changes to a character by making a new selection. The
Font Editor copies the old selection into the font buffer before copying the
new selection to the Character window. This is useful if you want to
continue editing characters in the same font.


6.2.6  Canceling Changes to a Character

To recover from an editing mistake, use either the Undo command or the
Refresh command from the Edit menu.

The Undo command restores the character window to its state before the last
change in the window.

The Undo command cannot cancel changes made to a character that you have
stored in the buffer.

To cancel all changes you have made to a character, use the Refresh command
from the Edit menu. The Refresh command replaces the current character in
the character window with a copy from the Font window.

────────────────────────────────────────────────────────────────────────────
NOTE

You cannot cancel changes to a character by selecting a new character.
Selecting a new character, or reselecting the current character, causes the
Font Editor to store all changes to the character in the font buffer. Only
the Refresh command cancels changes.
────────────────────────────────────────────────────────────────────────────


6.3  Editing a Font

To change the height, width, and character-mapping ANSI value of a font, use
the Size command in the Font menu. The command displays a dialog box that
contains the following options:

Option                            Description
────────────────────────────────────────────────────────────────────────────
Character Pixel Height            Defines the height (in pixels) of the
                                  characters in the font.

Maximum Width (variable-width     Defines the width (in pixels) of the
fonts only)                       widest possible character in a
                                  variable-pitch font.

Character Pixel Width             Defines the width (in pixels) of all
(fixed-pitch fonts only)          characters in a fixed-pitch font. In
                                  fixed-pitch fonts all characters have
                                  equal width.

First Character                   Defines the character value (for example,
                                  the ANSI value) of the first character
                                  in the font. The first character is the
                                  character to the far left when you
                                  scroll the contents of the font-viewing
                                  window to the far right.

Option                            Description
────────────────────────────────────────────────────────────────────────────
Last Character                    Defines the character value (for example,
                                  the ANSI value) of the last character in
                                  the font. The last character is the
                                  character to the far right when you
                                  scroll the contents of the font-viewing
                                  window to the far left.

Pitch

                                  Defines the font as either Fixed or
                                  Variable. Fixed and Variable are
                                  mutually exclusive.

                                  You can change a font from fixed-pitch
                                  to variable-pitch by selecting Variable
                                  in the Size dialog box. You cannot
                                  change a variable-pitch font to
                                  fixed-pitch.

Weight                            Lists options that define the font
                                  weight, ranging from thin to heavy. Each
                                  option represents the specific degree of
                                  heaviness (i.e., thickness of stroke) of
                                  the font. The options are mutually
                                  exclusive.


6.4  Changing Font File Header Information

To change the information in the font file header, use the Header command in
the Font menu. The Header command displays a dialog box that contains the
following information about the font:

Item                              Description
────────────────────────────────────────────────────────────────────────────
Face Name                         The name used to distinguish the font
                                  from other fonts. It is not necessarily
                                  the same as the font filename. The face
                                  name can be as many as 32 characters.

File Name                         The name of the font file being edited.

Copyright                         Either a copyright notice or additional
                                  information about the font. It can be as
                                  many as 60 characters in length.

Nominal Point Size                The point size of the characters in the
                                  font. One point is equal to
                                  approximately 1/72 of an inch.

Item                              Description
────────────────────────────────────────────────────────────────────────────
Height of Ascent                  The distance (in pixels) from the top of
                                  an ascender to the baseline.

Nominal Vert.                     The vertical resolution at which the
Resolution                        characters were digitized.

Nominal Horiz.                    The horizontal resolution at which the
Resolution                        characters were digitized.

External Leading                  The pixel height of the external leading.
                                  External leading is the vertical
                                  distance (in rows) from the bottom of
                                  one character cell to the top of the
                                  character cell below it. The
                                  Character-viewing window shows two
                                  copies of the character, one above the
                                  other, so that you can see the effect of
                                  the leading.

Internal Leading                  The pixel height of the internal leading.
                                  Internal leading is the vertical
                                  distance (in rows) within a character
                                  cell above the top of the tallest
                                  letter; only marks such as accents,
                                  umlauts, and tildes for capital letters
                                  should appear within the space
                                  designated as internal leading.

Default Character                 The character value (for example, the
                                  ANSI value) of the default character.
                                  The default character is used whenever
                                  your application tries to use a
                                  character that does not exist in the
                                  font.

Break Character                   The character value of the break
                                  character. The break character is used
                                  to pad lines that have been justified.
                                  The break character is typically the
                                  space character. (For example, in the
                                  ANSI character set, the value is 32.)

ANSI, OEM, or                     These options define the character set.
SYMBOL                            The ANSI character set (value zero) is
                                  the default Windows character set. The
                                  OEM character set (value 255) is
                                  machine-specific. The Symbol character
                                  set (value 2) contains special
                                  characters typically used to represent
                                  mathematical and scientific formulas.
                                  The number to the right of these options
                                  defines the character set. It can be any
                                  value from 0 to 255, but only 0, 2, and
                                  255 have a predefined meaning.

Item                              Description
────────────────────────────────────────────────────────────────────────────
Font Family                       The family to which the font belongs.
                                  Font families define the general
                                  characteristics of the font as follows:


                                  Family      Description
                                  Name
────────────────────────────────────────────────────────────────────────────
                                  Roman       Proportionally-spaced fonts
                                              with serifs.

                                  Modern      Fixed-pitch fonts.

                                  Swiss       Proportionally-spaced fonts
                                              without serifs.

                                  Decorative  Novelty fonts.

                                  Script      Cursive or script fonts.

                                  Dontcare    Custom font.

                                  Italic      This option defines an
                                              italic font.

                                  Underline   This option defines an
                                              underlined font.

                                  Strikeout   This option defines a font
                                              whose characters have been
                                              struck out.


6.5  Summary

The Font Editor lets you modify existing fonts on the screen to create new
fonts for your application. For an introduction to Windows fonts, see
Chapter 18, "Fonts," in Guide to Programming.






PART III  Debugging and Optimization Tools
────────────────────────────────────────────────────────────────────────────

Part 3 describes Microsoft Windows debugging and optimization tools.  The
SDK includes three debuggers: Code View for Windows, Symbolic  Debugger, and
Windows 80386 Debugger. Use Code View for Windows to debug your application
with protected-mode (standard or 386 enhanced) Windows, and the Symbolic
Debugger to debug your application with real-mode Windows. Use the 80386
Debugger for more advanced debugging in protected mode.

The SDK also includes tools that let you monitor messages and analyze memory
management. Spy lets you monitor messages sent to a specified window or to
all windows. It is useful for verifying that the messages you think a window
is receiving are, in fact, being received. Heap Walker, Profiler, Swap, and
Shaker help you analyze memory management. Heap Walker is useful for
analyzing your application when it allocates objects in the global heap.
Profiler lets you determine the amount of time Windows spends executing
sections of code. Swap ets you analyze the calls, swaps, discards, and
returns that occur when your application runs. It is useful for minimizing
the number of procedure calls that occur across segment boundaries. Shaker
lets you see the effect of memory movement on your applications.






Chapter 7  Debugging in Protected Mode: CodeView for Windows
────────────────────────────────────────────────────────────────────────────

Version 3.0 of the Microsoft CodeView(R) for Windows (CVW) debugger is a
powerful, easy-to-use tool for analyzing the behavior of programs. With CVW,
you have the power to test completely the execution of your program and
examine your data simultaneously. You can isolate problems quickly because
you can display any combination of variables─global or local─while you halt
or trace a program's execution.

The CVW debugger provides a variety of ways to analyze a program. You can
use the debugger to examine source code, disassemble machine code, or
examine a mixed display that shows you precisely what machine instructions
correspond to each of your C-language statements. You can also monitor the
occurrence of specific Windows messages.

CVW is similar to CodeView (CV) for DOS version 3.0. If you are familiar
with CV for DOS, see Section 7.2.2, "Differences between CVW and CodeView
for DOS," for a concise description of CVW's unique features.

This chapter serves as a complement to the CVW on-line Help system. A
significant portion of the CVW documentation is on-line. For information on
using the CVW on-line Help system, see Section 7.7, "Getting On-line Help in
CVW."

This chapter describes the following:


  ■   Requirements for using CVW

  ■   Differences between CVW other Microsoft debuggers

  ■   Preparing to run CVW

  ■   Starting CVW

  ■   Working with the CVW screen

  ■   Displaying program data

  ■   Controlling program execution

  ■   Advanced CVW debugging techniques

  ■   Customizing CVW behavior with the TOOLS.INI file

  ■   Using CVW to debug a sample application

      NOTE  CVW supports the Microsoft Mouse, or any fully compatible
      pointing device. All operations are first described using the mouse.
      The keyboard command follows.



7.1  Requirements for Use

To use version 3.0 of CVW, your system must meet the standard requirements
for running the Microsoft Windows Software Development Kit (SDK). For a list
of the SDK requirements, see the Installation and Update Guide. CVW
specifically requires the following:


  ■   A secondary monochrome display adapter and monitor. (CVW version 3.0
      does not support a serial terminal.) For IBM PS/2 systems, CVW
      supports (through the /8 option) a dual-monitor configuration, where
      an 8514/a monitor serves as the Windows screen and a VGA monitor
      serves as the debugging screen.

  ■   At least 384K of extended memory. For applications compiled with many
      symbols, 1 megabyte or more of extended memory is required.

  ■   For 80386-based systems, the following entry in the [386enh] section
      of your SYSTEM.INI file:

      device=windebug.386


      The SDK INSTALL program automatically adds this entry to your
      SYSTEM.INI file.

  ■   A PATH environment variable that lists the directory containing
      CVW.EXE, WINDEBUG.DLL, WINDEBUG.386, and CVW.HLP. The SDK INSTALL
      program will place WINDEBUG.DLL and WINDEBUG.386 in the same directory
      as CVW.EXE.



7.2  Comparing CVW with Other Microsoft Debuggers

If you have programmed in the Windows environment, you may have used the
Symbolic Debugger (SYMDEB) or CVW version 2.0 to debug Windows applications.
Or you may have used CodeView (CV) for DOS, which accompanies the Microsoft
C Optimizing Compiler. This section describes the features and functions of
CVW that are different from these other Microsoft debugging tools.


7.2.1  Differences between CVW and SYMDEB

CVW has all the capabilities of SYMDEB and a number of features that SYMDEB
does not provide. The following list summarizes differences between SYMDEB
and CVW.

SYMDEB Feature                    CVW Feature
────────────────────────────────────────────────────────────────────────────
Debugs applications in real       Debugs applications in protected mode.
mode.

Examines only global (static)     Examines both global and local
variables.                        variables.

When examining variables, you     Examines memory directly, but also uses
must specify simple memory        the C expression evaluators to combine
addresses or symbol names.        any program variables with higher
                                  level-language syntax.

Provides only breakpoints to      Provides breakpoints, tracepoints, and
halt execution.                   watchpoints to set Boolean conditions
                                  and then break execution whenever these
                                  conditions become true.

Does not set breakpoints or       Sets breakpoints and tracepoints on
tracepoints on Windows messages.  Windows messages.

Uses only line-oriented           Uses line-oriented or menu-driven
commands.                         commands.

────────────────────────────────────────────────────────────────────────────
NOTE

CVW version 3.0 supports Windows in protected mode (that is, standard and
386 enhanced modes) only; it does not support  Windows in real mode. Use
SYMDEB for real-mode debugging.
────────────────────────────────────────────────────────────────────────────


7.2.2  Differences between CVW and CodeView for DOS

Like CV for DOS, CVW allows you to display and modify any program variable,
section of addressable memory, or processor register. Also like CV for DOS,
CVW lets you monitor the path of execution and precisely control where
execution pauses. However, CV for DOS and CVW differ in the following ways:

CV for DOS Feature                CVW Feature
────────────────────────────────────────────────────────────────────────────
Starts from the DOS prompt.       Starts from within Windows.

ALT+/ repeats a search.           CTRL+R repeats a search.

Exits back to DOS.                Under normal termination conditions,
                                  exits back to Windows. Abnormal
                                  terminations of CVW may cause the
                                  Windows session to be terminated also.

In addition to these differences CVW includes the following unique features:



  ■   The ability to track your application's segments and data as Windows
      moves their locations in memory. As items are moved, the debugger
      readjusts its symbol table accordingly.

  ■   The (lh) and (gh) type casts, which you can use to dereference local
      and global handles of a memory object into near and far pointer
      addresses. For a more detailed description, see "Dereferencing Memory
      Handles" in Section  7.8.6.

  ■   Windows-specific commands. CVW has six new commands:


Command                           What it does
────────────────────────────────────────────────────────────────────────────
wdl (Windows Display Local Heap)  Displays a list of the memory objects in
                                  the local heap.

wdg (Windows Display Global       Displays a list of the memory objects in
Heap)                             the global heap.

wdm (Windows Display Module       Displays a list of the application and
List)                             library modules known by Windows.

wwm (Windows Watch Message)       Displays a Windows message or class of
                                  messages in the CVW
                                  Command window.

wbm (Windows Break Message)       Sets a breakpoint on a Windows message
                                  or class of messages.

wka (Windows Kill Application)    Terminates the currently executing task.
                                  You should use this command with caution.
                                  See Section 7.10.4,
                                  "Interrupting Your Program," for more
                                  information.


7.3  Preparing to Run CVW

Before beginning a CVW debugging session, you must do the following:


  ■   Set up a secondary monitor on which to display CVW information.

  ■   Ensure that the Windows application you are going to debug has been
      compiled and linked properly.


In addition to these mandatory steps, it is also recommended that you set up
a debugging version of Windows.

The following sections describe how to prepare your system for running CVW.



7.3.1  Setting Up a Secondary Monitor

In addition to the graphics adapter card and graphics display monitor
required for your Windows display, you need a monochrome adapter card and
monochrome display monitor to use CVW.

To set up a secondary monitor for debugging, do the following:


  1.  Install a secondary monochrome adapter card in a free slot on your
      computer and connect the monochrome monitor to the port in the back.

  2.  Set the secondary-display-adapter switches to the appropriate
      settings, according to the display adapter and computer manufacturer
      recommendations.


If your system is an IBM PS/2, it must be configured with an 8514/a monitor
as the primary monitor, and a VGA as the secondary monitor. To use this
configuration, specify the /8 (8514/a) option when you choose the Run
command from the CVW File menu. If your VGA monitor is monochrome, you must
also use the /B (black and white) option. The 8514/a serves as the Windows
screen and the VGA as the debugging screen.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

Do not attempt to run non-Windows applications or the DOS shell while
running CVW with the /8 option.
────────────────────────────────────────────────────────────────────────────

By default, the debugging screen operates in 50-line mode in this
configuration. If you specify the /8 option, you can optionally specify the
/25 or /43 option for 25- or 43-line mode, respectively, on the VGA
debugging screen.

With the secondary monitor connected to your system, you can view CVW output
and Windows output simultaneously.


7.3.2  Setting Up the Debugging Version of Windows

You can run CVW with either the debugging or retail version of Windows.

The debugging version performs error checking which is not available in the
retail version. For example, the debugging version of Windows checks whether
a window handle passed to a Windows function is valid. When the debugging
version of Windows detects such an error, it reports a fatal exit. If this
happens while you are running CVW, the fatal exit is reported in the CVW
Command window. Section 7.11, "Handling Abnormal Termination of the
Application," discusses this error handling in greater detail.

Another advantage to using the debugging version of Windows with CVW is the
additional support which the Windows core dynamic-link libraries (DLLs)
(KRNL286.EXE, KRNL386.EXE, GDI.EXE, and USER.EXE) provide for debugging.
These DLLs contain symbol information which makes it easier to determine the
cause of an error. For example, if your application causes a general
protection (GP) fault while running with the debugging version, Windows can
display symbol information for the Windows code that was executing when the
GP fault was detected. If, instead, you were running with the retail version
of Windows, Windows would only be able to display CS:IP address values of
the code that was executing when the fault occurred.

CVW does not automatically use these Windows core DLL symbols. To provide
CVW access to these symbols, you must specify one or more of the core DLLs
either using the /L command-line option or in response to the DLL prompt
within CVW. If you are running CVW with Windows in standard mode, specify
KRNL286.EXE. In 386 enhanced mode, specify KRNL386.EXE. Section 7.4.4,
"Starting a Debugging Session for DLLs," explains how to load symbols from a
DLL.

Installing the debugging version of Windows requires only three simple
steps:


  1.  Rename or copy the KRNL286.EXE, KRNL386.EXE, GDI.EXE, and USER.EXE
      files located in the Windows system directory. If you accepted the
      default Windows directory name offered by Windows Setup, the Windows
      system directory is named \WINDOWS\SYSTEM.

  2.  Copy the debugging version of these files from the Windows development
      debugging directory (named \WINDEV\DEBUG by default) to the Windows
      system directory.

  3.  Copy the corresponding symbol files from the debugging directory to
      the system directory.



7.3.3  Preparing Windows Applications for Debugging

To prepare a Windows application for use with CVW, take the following steps:



  1.  Compile your C source code with the /Zi option and, optionally, the
      /Od options.

      The /Zi option directs the compiler to produce object files that
      contain CodeView symbolic information. The /Od option disables the
      compiler's optimization. If optimization is enabled, the code
      generated by the compiler does not match as closely the statements in
      the C source code. Using the /Od option makes debugging easier.

      For example:

      CL -d -c -AS -Gsw -Zpei -Od OUTPUT.C

  2.  Link your application with the /CO option.

      The /CO option directs the linker to produce an executable file that
      contains CodeView information. This information is used directly by
      CVW.

      Note that no other switches, intermediate files, or programs (such as
      MAPSYM, used with SYMDEB) are required for CVW. For example:

      LINK OUTPUT,,,/NOD /CO SLIBW SLIBCEW, OUTPUT.DEF


After compiling and linking your application with these options, you can
start a CVW debugging session.


7.4  Starting a Debugging Session

Like most Windows applications, you can start CodeView for Windows several
ways. For a complete description of how to start Windows applications, see
the Windows User's Guide. To specify CVW options, you must choose the Run
command from the File menu in Program Manager. See Section 7.4.5, "Using CVW
File Run Options," for more information on CVW options.

You can run CVW to perform the following tasks:


  ■   Debug a single application

  ■   Debug multiple instances of an application

  ■   Debug multiple applications

  ■   Debug dynamic-link libraries (DLLs)


This section describes the methods you use to perform these tasks, and
summarizes the syntax of the Run command in the File menu of CVW.


7.4.1  Starting a Debugging Session for a Single Application

After you start CVW from Windows, CVW will display the Command Line dialog
box on your secondary monitor. To start debugging a single application:


  1.  At the Command Line prompt, type the name of the application. If you
      do not include an extension, CVW assumes the .EXE extension by
      default. You can also include any arguments that the application
      recognizes. The following shows the syntax of the command to start
      debugging a single application:

      appname«.EXE» «application_arguments»

  2.  Press ENTER or click OK.

      CVW displays the following prompt:

      Name any other DLL or executable with debug info:

      Since you are debugging only one application and no DLLs, press ENTER
      or click OK. CVW loads the application and displays the source code
      for the application's WinMain routine on the debugging screen.

  3.  Set breakpoints in the code, if you desire.

  4.  Use the go command to resume execution of the application.


If you want to avoid the start-up dialog boxes, you can start CVW more
quickly by specifying the application name as an argument in the Run command
line, as follows:


  1.  Choose the Run command from the Windows File menu.

  2.  Type the application name and any application arguments in the CVW
      command line. The following shows the syntax of the command line to
      start debugging a single application:

      CVW «cvw_options» appname«.EXE» «application_arguments»

  3.  Press ENTER or click OK.



7.4.2  Starting a Debugging Session for Multiple Instances of an Application

Windows can run multiple instances of an application simultaneously, which
can be a potential problem for your application. For example, two instances
of an application might interfere with each other, or perhaps one could
corrupt the data of the other.

To help you solve problems associated with running multiple instances of a
program, CVW allows you to debug multiple instances of an application
simultaneously. You can determine which instance of an application you are
looking at by examining the DS register at any breakpoint.

To debug multiple instances of an application, perform the following steps:



  1.  Start CVW as usual for your application.

  2.  Run one or more additional instances of your application by choosing
      the Run command from the File menu in Windows.


Specifying your application name more than once when starting CVW does not
have the effect of loading multiple instances of the application.

The breakpoints you set in your application will apply to all instances of
the application. To determine which instance of the application has the
current focus in CVW, examine the DS register.


7.4.3  Starting a Debugging Session for Multiple Applications

You can debug two or more applications at the same time, such as a DDE
Client and Server. However, global symbols shared by both applications (such
as the symbol name "WINMAIN") are not distinguished. CVW always resolves
symbol references to the first application named when you started CVW.

Perform the following steps to debug more than one application at the same
time:


  1.  Start CVW as usual for a single application.

  2.  Provide the name of the second application when CVW displays this
      prompt:

      Name any other DLL or executable with debug info:


      You must include the .EXE extension of the filename of the second
      application.

  3.  Set breakpoints in either or both applications, using the File Open
      Module command to display the source code for the different modules.

  4.  Use the go command to continue execution of the first application.

  5.  Choose the Run command from the File menu in Windows to start
      execution of the second application.


Alternatively, you can use the /L option on the Run command line in CVW to
load the symbols for a second application, as shown:

  cvw /l second.exe first.exe

The /L option and the name of the second application must precede the name
of the first application on the Run command line. You can repeat the /L
option for each application to be included in the debugging session.

Once CVW starts, choose the Run command from the File menu in Windows to
start execution of the second application.


7.4.4  Starting a Debugging Session for DLLs

You can debug one or more DLLs while you are debugging an application. As
with multiple applications, global symbols shared by both applications are
not distinguished.

Perform the following steps to debug a DLL at the same time as an
application:


  1.  Start CVW as usual for the application.

  2.  Provide the name of the DLL when CVW displays this prompt:

      Name any other DLL or executable with debug info:


      CVW assumes the .DLL extension if you do not supply an extension with
      the filename. If your DLL has another extension (such as .DRV), you
      must specify it explicitly.

  3.  Set breakpoints in either the application or the DLL, using the File
      Open Module command to display the source code for the different
      modules.

  4.  Use the go command to continue execution of the application.


Alternatively, you can use the /L option on the CVW File Run command line to
specify the DLL, as shown:

  cvw /l appdll appname.exe

The /L option and the name of the DLL must precede the name of the first
application on the CVW File Run command line. You can repeat the /L option
for each DLL to be included in the debugging session. The .DLL extension is
the default extension for the /L option.

CVW allows you to debug the LibEntry initialization routine of a DLL. If
your application implicitly loads the library, then a special technique is
required to debug the LibEntry routine. An application implicitly loads a
DLL if the library routines are imported in the application's
module-definition (.DEF) file, or if your application imports library
routines through an import library when you link the application. An
application explicitly loads a DLL by calling the LoadLibrary function.

If your application implicitly loads the DLL and you specify the application
at the Command Line prompt, CVW automatically loads the DLL and executes the
DLL's LibEntry routine when CVW loads the application. This gives you no
opportunity to debug the LibEntry routine. To avoid this problem, perform
the following steps:


  1.  Do not provide the name of your application at the Command Line
      prompt. Instead, provide the name of any "dummy" application which
      does not implicitly load the library.

  2.  Enter the name of your DLL, being sure to include the extension if it
      is not .DLL, at the following prompt:

      Name any other DLL or executable with debug info:


  3.  Use the File Open Module command to display the source code for the
      library module containing the LibEntry routine. Set breakpoints in the
      LibEntry routine.

  4.  Use the File Open Module command to display the source code for other
      library or application modules and set desired breakpoints.

  5.  Use the go command to start execution of the "dummy" application.

  6.  Execute your application (that is, the application that implicitly
      loads the DLL) by choosing the Run command from the File menu in
      Windows. CVW will resume control when the breakpoint in the LibEntry
      routine is encountered.


Alternatively, you can use the CVW File Run command line to identify the
"dummy" application, your application, and the DLL, as shown:

  cvw /l appdll dummyapp


7.4.5  Using CVW File Run Options

Sections 7.4.1 through 7.4.4 illustrated different ways to use the CVW File
Run command line. The following shows the general syntax of this command
line:

  CVW «cvw_options» app_name«.EXE» «app_arguments»

None of the parameters are case-sensitive.

The following list describes these parameters.

╓┌──────────────┌─────────────────────────────┌──────────────────────────────╖
Parameter      Description
────────────────────────────────────────────────────────────────────────────
cvw_options    Specifies one or more
               options that modify how CVW
               runs. Acceptable options
               are:

               Option                        Purpose

               /L dll_or_exe                 Specifies the name of an
                                             application or DLL that has
                                             been compiled and linked with
                                             CVW symbols. CVW assumes the
                                             default file extension .DLL
                                             if no extension is supplied.
                                             You can use the /L option
                                             more than once to specify
                                             multiple DLLs or executable
Parameter      Description
────────────────────────────────────────────────────────────────────────────
                                             multiple DLLs or executable
                                             files.

               /C command                    Specifies one or more CVW
                                             commands which CVW executes
                                             when it loads the application
                                             specified by the app_name
                                             parameter. The commands must
                                             be enclosed in double
                                             quotation marks ( " ) and
                                             separated with semicolons ( ;
                                             ).

               /M                            Disables the use of the mouse
                                             at the debugging screen. You
                                             should use this option when
                                             you set breakpoints in code
                                             that is responsive to mouse
                                             movements on the Windows
Parameter      Description
────────────────────────────────────────────────────────────────────────────
                                             movements on the Windows
                                             (application) screen.

               /TSF                          Toggles the save state-file
                                             status. See Section
                                             <NO>7</NO>.5, "Saving Session
                                             Information," for details.

               /8                            Allows CVW to recognize a
                                             dual-monitor configuration.
                                             See <NO>7</NO>.3.1, "Setting
                                             Up a Secondary Monitor," for
                                             more information.

               /B                            Specifies a monochrome VGA
                                             monitor used as the secondary
                                             display with an 8514/a
                                             display. This option is valid
                                             only in conjunction with the
Parameter      Description
────────────────────────────────────────────────────────────────────────────
                                             only in conjunction with the
                                             /8 option.

               Option                        Purpose

               /25                           Specifies 25-line mode for
                                             the secondary VGA monitor.
                                             This option is valid only in
                                             conjunction with the /8
                                             option.

               /43                           Specifies 43-line mode for
                                             the secondary VGA monitor.
                                             This option is valid only in
                                             conjunction with the /8
                                             option.

               /50                           Specifies 50-line mode for
                                             the secondary VGA monitor.
Parameter      Description
────────────────────────────────────────────────────────────────────────────
                                             the secondary VGA monitor.
                                             This option is valid only in
                                             conjunction with the /8
                                             option. The /50 option is not
                                             required, since 50-line mode
                                             is the default for the
                                             dual-monitor configuration.

app_name       Specifies the pathname of
               the application for which
               CVW will load symbols and
               issue an initial breakpoint.
               The .EXE extension is
               optional.

app_arguments  Specifies one or more
               arguments recognized by the
               application that CVW loads.

Parameter      Description
────────────────────────────────────────────────────────────────────────────




7.5  Saving Session Information

After your session, CVW stores session information in a file called
CURRENT.STS, which is located in the directory pointed to by the INIT
environment variable or in the current directory. If this file does not
already exist, CVW automatically creates it. Session information includes:


  ■   CodeView display windows that were opened.

  ■   Breakpoint locations.


CodeView for Windows saves this information, which becomes the default the
next time you run a CVW session for that application.

You can disable this feature by placing the following entry in your
TOOLS.INI file: (The default is "y" ─yes.)

  [cvw]
  StateFileRead: n

The /TSF option temporarily toggles this setting when you run CVW. That is,
if TOOLS.INI disables this feature, running CVW with the /TSF option saves
session information for that session only.

────────────────────────────────────────────────────────────────────────────
NOTE

If your Windows session abnormally terminates while CVW is running, the
CURRENT.STS file may be corrupted. This may cause CVW to fail when it first
tries to execute the application you are debugging. If this happens, delete
the CURRENT.STS file before attempting to run CVW again.
────────────────────────────────────────────────────────────────────────────


7.6  Working with the CVW Screen

When you start CVW, the CVW menu bar and three display windows─the Local
window, the Source window, and the Command window─will appear on your
secondary monitor. Figure 7.1 illustrates how the screen appears during a
debugging session.

(This figure may be found in the printed book).


7.6.1  Using CVW Display Windows

CVW divides the screen into logically separate sections called display
windows, so that a large amount of information can be displayed in an
organized and easy-to-read fashion. Each CVW display window is a distinct
area on your monitor that operates independently of the other display
windows. The name of each display window appears in the top of the window's
frame. The following list describes the seven types of CVW display windows:

CVW Display Window                Purpose
────────────────────────────────────────────────────────────────────────────
Source window                     Displays the source code. You can open a
                                  second source window to view an include
                                  file, another source file, or the same
                                  source file at a different
                                  location.

Command window                    Accepts debugging commands.

Watch window                      Displays the current values of selected
                                  variables.

Local window                      Lists the values of all variables local
                                  to the current function or block.

Memory window                     Shows the contents of memory. You can
                                  open a second Memory window to view a
                                  different section of memory.

Register window                   Displays the contents of the
                                  microprocessor's registers, as well as
                                  the processor flags.

8087 window                       Displays the registers of the
                                  coprocessor or its software emulator.

Help window                       Displays the Help options or any Help
                                  information that you request.


Opening Display Windows

There are two ways to open CVW display windows:


  ■   Choose a window from the View menu. (Note that you can open more than
      one Source or Memory window.)

  ■   Perform an operation that automatically opens a window if it is not
      already open. For example, selecting a Watch variable automatically
      opens the Watch window.


CodeView continually and automatically updates the contents of all its
display windows.


Selecting Display Windows

To select a window, click anywhere inside of it. You can also press F6 or
SHIFT+F6 to move the focus from one window to the next.

The selected window is called the "current" window and is marked in three
ways:


  ■   The window's name is displayed in white.

  ■   The text cursor appears in the window.

  ■   The vertical and horizontal scroll bars are moved into the window.


Typing commands into the Source window causes CVW to temporarily shift its
focus to the Command window. Whatever you type is appended to the last line
in the Command window. If the Command window is closed, CVW beeps in
response to your entry and ignores the input.


Adjusting Display Windows

CVW display windows often contain more information than they can display on
the screen. Although you cannot change the relative positions of the display
windows, you can manipulate a selected window using the mouse, as follows:


  ■   To scroll the window vertically or horizontally, use the vertical or
      horizontal scroll bar.

  ■   To maximize a window so that it fills the screen, click the Up arrow
      at the right end of the window's top border. To restore the window to
      its previous size and position, click the Double arrow at the right
      end of the top border.

  ■   To change the size of a window:

      1.  Position the cursor anywhere on the border between two windows.

      2.  Press and hold down the left mouse button.

          Two double arrows will appear on the line.

      3.  Drag the mouse to enlarge or reduce the window.


  ■   To remove a window, click the small, dotted box at the left end of the
      top border.

      The adjacent windows automatically expand to recover the empty space.


You can also use the following keyboard commands:

Keyboard Command                  Description
────────────────────────────────────────────────────────────────────────────
PAGE UP or PAGE DOWN              Scrolls through the text vertically.

CTRL+F10                          Maximizes a selected display window.

CTRL+F8                           Changes the size of a selected display
                                  window.

CTRL+F4                           Removes a selected display window.

You can also choose the Maximize, Size, and Close commands from the View
menu to manipulate a selected display window.

The different CVW display windows can help you to conduct a variety of
debugging activities simultaneously. These activities are initiated and
controlled with CVW debugging commands, which can be typed in the CVW
Command window or selected using the CVW menus.


7.6.2  Using the CVW Menu Bar

In addition to display windows, the CVW screen includes a menu bar, which
contains the following menus:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Menu                              Command
────────────────────────────────────────────────────────────────────────────
File                              This menu contains the following
                                  commands:

                                  Open Source opens any text file and
                                  reads it into the currently active
                                  source window.

                                  Open Module opens the source file of any
                                  module for which CVW information has
                                  been loaded and reads it into the
                                  currently active source window.

                                  Exit ends your CVW session and returns
                                  you to Windows.

Edit                              This menu contains the following
                                  commands:
Menu                              Command
────────────────────────────────────────────────────────────────────────────
                                  commands:

                                  Copy copies selected text to the paste
                                  buffer

                                  Paste inserts text from the paste buffer
                                  into the active window at the present
                                  cursor location, if that location is
                                  valid (for example, text cannot be
                                  pasted into the source window).

View                              This menu contains the following
                                  commands:

                                  Source opens a new Source window. Memory
                                  opens a new Memory window.

                                  Register acts as a switch to open and
                                  close the Register window.
Menu                              Command
────────────────────────────────────────────────────────────────────────────
                                  close the Register window.

                                  8087 acts as a switch to open and close
                                  the 8087 window.

                                  Local acts as a switch to open and close
                                  the Local window.

                                  Watch acts as a switch to open and close
                                  the Watch window.

                                  Command acts as a switch to open and
                                  close the Command window.

                                  Help acts as a switch to open and close
                                  the Help window.

                                  Maximize enlarges the current window so
                                  that it fills the screen.
Menu                              Command
────────────────────────────────────────────────────────────────────────────
                                  that it fills the screen.

                                  Size changes the size of the current
                                  window.

                                  Close closes the current window.

Search                            This menu contains the following
                                  commands:

                                  Find searches for the next occurrence of
                                  a string or a regular expression that
                                  you supply in the Find dialog box.

                                  Selected Text searches for the next
                                  occurrence of a string of selected text.

                                  Repeat the Last Find searches for the
                                  next occurrence of whatever you
Menu                              Command
────────────────────────────────────────────────────────────────────────────
                                  next occurrence of whatever you
                                  specified in the previous Find command.

                                  Label/Function searches for a function
                                  or label definition in the active Source
                                  window and, if one is found, changes the
                                  input focus to the active Source window.

Run                               This menu contains the following
                                  command:

                                  Animate continues the execution of a
                                  program while displaying the execution
                                  path in the Source window. This type of
                                  display is called an "animated trace"
                                  display.

Watch                             This menu contains the following
                                  commands:
Menu                              Command
────────────────────────────────────────────────────────────────────────────
                                  commands:

                                  Add Watch adds an expression to the
                                  Watch window.

                                  Delete Watch deletes an expression from
                                  the Watch window.

                                  Set Breakpoint tells the program where
                                  to halt execution; you can set
                                  breakpoints on lines of source code,
                                  variables and expressions, and Windows
                                  messages.

                                  Edit Breakpoint performs editing
                                  functions on breakpoints; they can be
                                  added, removed, modified, enabled or
                                  disabled.

Menu                              Command
────────────────────────────────────────────────────────────────────────────

                                  Quick Watch selects one expression for
                                  the Quick Watch window.

Options                           This menu contains the following
                                  commands:

                                  Source Window sets the display
                                  characteristics of the active Source
                                  window.

                                  Memory Window sets the display
                                  characteristics of the active Memory
                                  window.

                                  Trace Speed sets the speed of program
                                  tracing and execution.

                                  Case Sensitivity, when turned on, treats
Menu                              Command
────────────────────────────────────────────────────────────────────────────
                                  Case Sensitivity, when turned on, treats
                                  uppercase and lowercase letters as
                                  different characters. When turned off,
                                  it does not differentiate between
                                  uppercase and lowercase letters.

                                  386 Instructions, when turned on,
                                  recognizes all 80386 instructions in
                                  32-bit values. When turned off, it reads
                                  all instructions as 16-bit values

Calls                             The contents and size of this menu
                                  change as your program executes. It
                                  shows the currently executing routine
                                  and the trail of routines from which it
                                  was called. Your application must
                                  execute, at least, the beginning of the
                                  WinMain procedure before CVW will
                                  display the current routine. When you
Menu                              Command
────────────────────────────────────────────────────────────────────────────
                                  display the current routine. When you
                                  select one of the lines in the Calls
                                  menu, CVW displays the source code
                                  corresponding to the calling location in
                                  the
                                  active source window.

Help                              This menu contains Help information on
                                  various CodeView topics.



For a more detailed description of the CVW menu and commands, refer to CVW
Help.


7.7  Getting On-line Help in CVW

CVW on-line Help contains detailed information and examples not found in
this chapter. You can get on-line help by choosing a command from the Help
menu described in the previous section, or selecting an item on your screen
and pressing F1. Help is available on items such as commands, menus, dialog
boxes, and error messages.


7.8  Displaying Program Data

CVW offers a variety of ways to display program variables, processor
registers, and memory. You can also modify the values of all these items as
the program executes. This section describes how to display:


  ■   Variables in the Watch window.

  ■   Expressions in the Watch window.

  ■   Arrays and structures in the Watch window.

  ■   A single expression in the Quick Watch window.

  ■   Windows messages in the Command window.

  ■   Memory in the Memory window.

  ■   The contents of registers in the Register window.




7.8.1  Displaying Variables

You can use the Watch window to monitor the value of a given variable
throughout the execution of your program. For example, do, for, and while
loops can cause problems when they don't terminate correctly. By displaying
loop variables in the Watch window, you can determine if a loop variable
achieves its proper value.

To add a variable to the Watch window:


  1.  In the Source window, use the mouse or the DIRECTION keys to position
      the cursor on the name of the variable you want to watch.

  2.  Select the Add Watch command from the Watch menu, or press CONTROL+W.

      A dialog box will appear with the selected variable's name displayed
      in the Expression field.

  3.  Press ENTER or click the OK button to add the variable to the Watch
      window.

      If you want to add a different variable than the one shown in the
      dialog box, type its name over the one displayed, and then press
      ENTER.


The Watch window appears at the top of the screen. Adding a Watch variable
opens the Watch window automatically if it is not already open.

When you add a local variable, you may get the following message:

  Watch Expression Not in Context

This message appears when program execution has not yet reached the C
function that defines the local variable. Global variables (those declared
outside C functions) never cause CVW to display this message; you can watch
them from anywhere in the program.

────────────────────────────────────────────────────────────────────────────
NOTE

If you are debugging more than one application or DLL, and if two or more of
these contain global variables with the same name, CVW will display the
variable of only the first application or DLL containing that variable name.


For example, if you are debugging App1 and App2, and both contain a global
variable named hInst, CVW will always display the value of hInst in App1,
even if CVW stopped at a breakpoint in App2.
────────────────────────────────────────────────────────────────────────────

The Watch window will hold as many variables as you like; the quantity is
limited only by available memory. You can scroll through the Watch window to
position it at those variables you want to view. CVW automatically updates
all watched variables as the program runs, including those not currently
visible.

To remove a variable from the Watch window:


  1.  Choose the Delete Watch command from the Watch menu.

  2.  Scroll through the dialog box and select the variable you want to
      remove.


You can also position the cursor on any line in the Watch window and press
CONTROL+Y to delete the line.


7.8.2  Displaying Expressions

You might have noticed that the Add Watch dialog box prompts for an
expression, not simply a variable name. You can add any valid combination of
variables, constants, or operators as an expression for CVW to evaluate and
display in the Watch window.

The advantage of evaluating expressions is that you can reduce several
variables to a single value, which can be easier to interpret than the
components that make it up. For example, imagine a for loop with two
variables whose ratio is supposed to remain constant. You suspect that one
of these variables sometimes takes the wrong value. With (var1 / var2)
displayed as an expression in the Watch window, you can easily see when the
quotient changes, without having to mentally divide two numbers.

You can also display Boolean expressions. For example, if a variable is
never supposed to be greater than 100 or less than 25, the expression (var >
100) evaluates to 1 (true) when var goes out-of-bounds.


7.8.3  Displaying Arrays and Structures

A program variable is usually a scalar quantity (a single character, integer
or floating-point value). The variable appears in the Watch window with the
variable name to the left, followed by an equal sign (=), and the current
value. The Watch window must provide a different way to display "aggregate"
data items, such as arrays and structures.

Arrays and structures contain multiple values that can be arranged in one or
more layers. You can control how these variables appear in the Watch
window─whether all, part, or none of their internal structure is displayed.


An array initially appears in the Watch window in this form:

  +Wordholder[]  = [...]

The brackets indicate that this variable contains more than one element. The
plus sign (+) indicates that the variable has more elements than are
displayed on the screen. You can expand the variable to display any or all
of its components; this technique is called "dereferencing."

To dereference (expand) the array, double-click anywhere on the line. You
can also position the cursor on the line and press ENTER. For example, if
Wordholder is a six-character array containing the word "Basic," the Watch
window display changes to:

  -Wordholder[]
     [0]  =  66 'B'
     [1]  =  97 'a'
     [2]  =  115 's'
     [3]  =  105 'i'
     [4]  =  99 'c'
     [5]  =  0 ''

Note that both the individual character values and their ASCII decimal
equivalents are listed. The minus sign (-) indicates no further expansion is
possible. To contract the array, double-click its line again or position the
cursor on the line and press ENTER.


Displaying Character Arrays

If viewing a character array in this form is inconvenient, cast the
variable's name to a character pointer by placing the following in front of
the name:

  (char *)

The character array is then displayed as a string delimited by apostrophes.


Displaying Multidimensional Arrays

You can display arrays with more than one dimension. For example, imagine a
5-by-5 integer array named Matrix, whose diagonal elements are the numbers 1
through 5 and whose other elements are zero. Unexpanded, the array is
displayed like this:

  +Matrix[]  = [...]

Double-clicking Matrix (or pressing ENTER) changes the display to:

  -Matrix[]
    +[0][]  =  [...]
    +[1][]  =  [...]
    +[2][]  =  [...]
    +[3][]  =  [...]
    +[4][]  =  [...]

The actual values of the elements are not shown yet. You have to descend one
more level to see them. For example, to view the elements of the third row
of the array, position the cursor anywhere on the +[2] line and press ENTER.
The following code shows the third row of the array dereferenced:

  -Matrix[]
    +[0][]  =  [...]
    +[1][]  =  [...]
    -[2][]
       [0]  = 0
       [1]  = 0
       [2]  = 3
       [3]  = 0
       [4]  = 0
    +[3][]  =  [...]
    +[4][]  =  [...]

Dereferencing the fifth row (+[4]) of the array produces this display:

  -Matrix[]
    +[0][]  =  [...]
    +[1][]  =  [...]
    -[2][]
       [0]  = 0
       [1]  = 0
       [2]  = 3
       [3]  = 0
       [4]  = 0
    +[3][]  =  [...]
    -[4][]
       [0]  = 0
       [1]  = 0
       [2]  = 0
       [3]  = 0
       [4]  = 5

Any element of an array or structure can be independently expanded or
contracted; you need not display every element of the variable. If you only
want to view one or two elements of a large array, specify the particular
array or structure elements in the expression field of the Add Watch dialog
box.

You can dereference a pointer in the same way as an array or structure. The
Watch window will display the pointer address, followed by all the elements
of the variable to which the pointer currently refers. You can display
multiple levels of indirection (that is, pointers referencing other
pointers) simultaneously.


Displaying Dynamic Array Elements

An array may have dynamic elements that change as some other variable
changes. Just as you can display a particular element of an array by
specifying its subscript, you can also display a dynamic array element, by
specifying its variable subscript. For example, suppose that the loop
variable p is a subscript for the array variable Catalogprice. The Watch
window expression Catalogprice[p] displays only the array element currently
specified by the variable p, not the entire array.

You can mix constant and variable subscripts. For example, the expression
BigArray[3][i] displays only the element in the third row of the array to
which the index variable i points.


7.8.4  Using the Quick Watch Command

Using the Quick Watch command is a convenient way to take a quick look at a
variable or expression. Since the Quick Watch window can only display one
variable at a time, you would not use it for most of the variables you want
to view.

Selecting the Quick Watch command from the Watch menu (or pressing SHIFT+F9)
displays the Quick Watch dialog box. If the text cursor is in the Source,
Local, or Watch window, the variable at the current cursor position appears
in the dialog box.

The Quick Watch display automatically expands arrays and structures to their
first level. For example, an array with three dimensions will expand to the
first dimension. You can expand or contract an element just as you would in
the Watch window; position the cursor on the appropriate line and press
ENTER. If the array needs more lines than the Quick Watch window can
display, drag the mouse along the scroll bar, or press DOWN ARROW or PAGE
DOWN to view the rest of the array.

You can add Quick Watch variables to the Watch window. If you decide to add
a Quick Watch item to the Watch window, select the Add Watch button. Arrays
and structures appear in the Watch window expanded as they were displayed in
the Quick Watch box.


7.8.5  Tracing Windows Messages

You can trace the occurrence of a Windows message or an entire class of
Windows messages by using the wwm (Watch Windows Message) command. CVW will
display the messages in the CVW Command window.

To trace a Windows message or message class, type the wwm command in the
Command window. The syntax for the command is:

  wwm winproc msgname | msgclasses

The winproc parameter is the symbol name or address of an application's
window function. The msgname parameter is the name of a Windows message,
such as WM_PAINT. The msgclasses parameter is a string of characters that
identify one or more classes of messages to be traced. The classes are
consistent with those defined in the Windows Spy application; they are:

Message Class                     Type of Windows Message
────────────────────────────────────────────────────────────────────────────
m                                 mouse

w                                 window management

n                                 input

s                                 system

i                                 initialization

c                                 clipboard

d                                 DDE

z                                 nonclient

For example, the following command traces all mouse and input messages sent
to MainWndProc:

  wwm MainWndProc mn

The CVW Command window displays Windows messages in the following  format:

  HWND:lc00 wParm:0000 lParm:000000 msg:000F WM_PAINT


7.8.6  Displaying Memory

Selecting the Memory command from the View menu opens a Memory window. CVW
allows you to have two Memory windows open at one time.

By default, memory is displayed as hexadecimal byte values, with 16 bytes
per line. At the end of each line is a second display of the same memory in
ASCII form. Values that correspond to printable ASCII characters (decimal 32
through 127) are displayed in that form. Values outside this range are shown
as periods ( . ).

Byte values are not always the most convenient way to view memory. If the
area of memory you are examining contains character strings or
floating-point values, you might prefer to view them in a directly readable
form. The Memory Window command of the Options menu displays a dialog box
with a variety of display options:


  ■   ASCII characters

  ■   Byte, word, or double-word binary values

  ■   Signed or unsigned integer decimal values

  ■   Short (32-bit), long (64-bit), or 10-byte (80-bit) floating-point
      values


You can also directly cycle through these display formats by pressing
SHIFT+F3.

If a section of memory cannot be displayed as a valid floating-point number,
the number shown includes the characters NAN (not a number).


Displaying Local and Global Memory Objects

CVW also allows you to display global and local memory objects in their
respective Windows heaps. You can display the heap of global memory objects
with the wdg (Display Global Heap) command, and the heap of local memory
objects with the wdl (Display Local Heap) command. Both of these commands
will display the entire heap of global or local memory objects in the
Command window.

For the wdg command, you can specify the single object parameter to display
a partial list of the global heap. When you use the single object parameter
with the wdg command, the Command window will display the first five memory
objects in the global heap, starting at the handle rather than at the
beginning of the heap. The following illustrates the output format of the
wdg (Display Global Heap) command:

  "
  047E   (0A7D) 00000020b   MYAPP    PRIV MOVEABLE DISCARDABLE

  0A6D          00000134b   MYAPP    DATA FIXED PGLOCKED=0001

  0806  (0805)  00000600b   PDB (0465)

  FREE          000000A0b

The following describes the indicated fields:

╓┌──┌───────────────────────────────────┌────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
"  A global memory handle value.
   Global memory objects are
   displayed in the order in which
   Windows manages them, which is
   typically not in ascending handle
   order.

   A memory selector. This value is
   not displayed if the selector
────────────────────────────────────────────────────────────────────────────
   not displayed if the selector
   value is the same as the global
   handle, as is the case for DATA
   objects.

   The length in bytes of the global
   memory object.

   The name of the application or
   library module that allocated the
   object. The name "PDB" is for
   Process Descriptor Block.

   The type of global memory object:

   Type                                Meaning

   PRIV                                Application or DLL global data, or
                                       system object

────────────────────────────────────────────────────────────────────────────

   CODE                                Code segment

   DATA                                Data segment of application or DLL

   FREE                                Free memory block in the global
                                       heap



╓┌─┌────────────────────────────────────┌────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
  One or more of the following
  combinations of memory allocation
  attributes:

  MOVEABLE

  MOVEABLE DISCARDABLE

────────────────────────────────────────────────────────────────────────────

  FIXED

  The disposition of the object if it
  is moveable:

  Disposition                          Meaning

  LOCKED=number                        Number of times the object has been
                                       locked with the GlobalLock or
                                       LockData functions

  PGLOCKED=number                      Number of times Windows has locked
                                       the object in its linear address
                                       space.

  The owner handle of the Process
  Descriptor Block.

  A free memory block, followed by
────────────────────────────────────────────────────────────────────────────
  A free memory block, followed by
  the size of the free block.



The following shows the output of the wdl (Display Local Heap) command:

  "
  190A:  000A   BUSY   (16DA)

The following describes the indicated fields:

╓┌──┌───────────────────────────────────┌────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
"  The offset of the local memory
   object in the local data segment.

   The length in bytes of the object.

   One of the following dispositions:
────────────────────────────────────────────────────────────────────────────
   One of the following dispositions:

   Disposition                         Meaning

   BUSY                                Currently allocated

   FREE                                A free block in the local heap

   A local memory handle




Displaying Variables with a Live Expression

Section 7.8.4, "Using the Quick Watch Command," explained how to display a
specific array element by adding the appropriate expression to the Watch
window. It is also possible to watch a particular array element or structure
element in the Memory window. This CVW display feature is called a "live
expression."

"Live" means that the area of memory displayed changes to reflect the value
of a pointer or subscript. For example, if Buffer is an array and pBuf is a
pointer to     that array, then *pBuf points to the array element currently
referenced. A live expression displays the section of memory beginning with
this element.

CVW displays live expressions in a Memory window. To create a live
expression:


  1.  Select the Memory Window command from the Options menu.

  2.  Select the live expression check box and type the name of the element
      you want to view.

      For example, if StrgPtr is a pointer to an array of characters, and
      you want to see what it currently points to, type:

      *StrgPtr

  3.  Click the OK button or press ENTER.


A new Memory window opens. The first memory location in the window is the
first memory location of the live expression. The section of memory
displayed changes to the section the pointer currently references.

You can use the Memory Window command of the Options menu to display the
value of the live expression in a readable form. This is especially
convenient when the live expression represents strings or floating-point
values, which are difficult to interpret in hexadecimal form.

It is usually more convenient to view an item in the Watch window than as a
live expression. However, you might find some items easier to view as live
expressions. For example, you can examine what is currently at the top of
the stack by specifying SS:SP as the live expression.


Dereferencing Memory Handles

In a Windows application, the LocalLock and GlobalLock functions are used to
dereference memory handles into near or far pointers. In a debugging
session, you may know the handle of the memory object, but might not know
what near or far address it dereferences to, unless you are debugging in an
area where the program has just completed a LocalLock and GlobalLock
function call. To get the near and far pointer addresses for your local and
global handles, use the (lh) and (gh) type casts. For example, you could use
(lh) to dereference the array in the following code:

  HANDLE hLocalMem;
  int near *pnArray;
  hLocalMem = LocalAlloc(LMEM_MOVEABLE,100);
  pnArray = LocalLock(hLocalMem);
       /* load values into the array */
  LocalUnlock(hLocalMem);

To properly display this array in CVW, you would use the following command:


  dw (lh)hLocalMem

If you set a breakpoint immediately after the LocalLock function, you could
find out where the local object was allocated in the application's data
segment by looking at the value of the pnArray variable. To display the
value of pnArray, use the following CVW command:

  dw pnArray

Note that you cannot rely on the value of pnArray anywhere else in the
program because it may change or the memory object may move.

If the memory object is a string, you can display it using double type
casting, as shown:

  HANDLE hGlobalMem;
  LPSTR  lpstr;

  hGlobalMem = GlobalAlloc(GMEM_MOVEABLE, 10L)
  lpstr = GlobalLock(hGlobalMem);
  lstrcpy(lpstr,"ABCDEF");
  GlobalUnlock(hGlobalMem);

You could then display the contents of the string with the following
statement:

  ? *(char far*) (gh)lpstr,s

The (gh) type cast will return a pointer to the far address of the global
memory object.


7.8.7  Displaying the Contents of Registers

Selecting the Register command from the View menu (or pressing F2) opens a
window on the right side of the screen. The current values of the
microprocessor's registers appear in this window.

At the bottom of the window are a group of mnemonics representing the
processor flags. When you first open the Register window, all values are
shown in normal-intensity video. Any subsequent changes are marked in
high-intensity video. For example, suppose the overflow flag is not set when
the Register window is first opened. The corresponding mnemonic is NV and it
appears in normal-intensity video. If the overflow flag is subsequently set,
the mnemonic changes to OV and appears in high-intensity video.

Selecting the 386 Instructions command from the Options menu displays the
registers as 32-bit values. This command is valid only if your computer uses
an 80386 processor. Selecting this command a second time changes the
registers back to 16-bit values.

You can also display the registers of an 8087/287/387 coprocessor in a
separate window by selecting the 8087 command from the View menu. If your
program uses the coprocessor emulator, the emulated registers are displayed
instead.


7.8.8  Displaying Windows Modules

The wdm (Dump Modules) command displays a list of all the DLL and task
modules that Windows has loaded. For each module, the list shows the module
handle, the type of module (DLL or task), the name of the module, and the
pathname of the module.


7.9  Modifying Program Data

You can easily change the values of variables, memory locations, or
registers displayed in the Watch, Local, Memory, Register, or 8087 window.
Simply position the cursor at the value you want to change and type in the
appropriate value. If you change your mind, press ALT+BACKSPACE to undo the
last change you made.

The Memory window displays the starting address of each line in
segment:offset form. Altering the address automatically shifts the display
to the corresponding section of memory. If that section is not used by your
program, memory locations are displayed as double question marks (??).

You can also change the values of memory locations by modifying the right
side of the memory display, which shows memory values in ASCII form. For
example, to change a byte from decimal 75 to decimal 85, place the cursor
over the letter K, which corresponds to the position where the memory value
is 75 (K is ASCII 75), and type in U (U is ASCII 85).

To change a processor flag, click its mnemonic; or position the cursor on a
mnemonic, and then press any key (except TAB or SPACEBAR). Repeat these
operations to restore the flag to its previous setting.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

You should be especially cautious when altering "machine-level" values. The
effect of changing a register, flag, or memory location may vary from no
effect at all to crashing the operating system. You can alter most items
from the Watch window; although sometimes it is useful to modify a register
or memory directly.
────────────────────────────────────────────────────────────────────────────

One example of altering memory directly would be to replace values in the AX
register. C functions return their values through this register. By altering
the AX register directly, you can change a returned value without having to
execute the function that returns it.


7.10  Controlling Program Execution

This section describes how you can use CVW to control the execution of your
application.

There are two possible forms of program execution in CodeView for Windows:

Program Execution                 Description
────────────────────────────────────────────────────────────────────────────
Continuous                        The program executes until either a
                                  previously specified "breakpoint" has
                                  been reached or the program terminates
                                  normally.

Single-step                       The program pauses after each line of
                                  code has been executed.

Sections 7.10.1, "Continuous Execution," and 7.10.2, "Single-Step
Execution," explain the most effective way to use each form of execution.
Section 7.10.3, "Jumping to a Particular Location," explains how to force
the system to jump to a particular location in your program. Section 7.10.4,
"Interrupting Your Program," tells you how to interrupt your program.


7.10.1  Continuous Execution

Continuous execution lets you quickly execute bug-free sections of code. The
simplest way to initiate continuous execution is to click the right mouse
button on the line of code you want to debug or examine in more detail. The
program executes at full speed up to the start of this line, then pauses.
You can do the same thing by positioning the text cursor on this line, then
pressing F7.

You can also pause execution at a specific line of code with a breakpoint.
CVW provides you with several types of breakpoints to control your program's
execution. The sections that follow describe how to use breakpoints.


Selecting Breakpoint Lines

You can skip over the parts of the program that you don't want to examine by
specifying one or more lines as breakpoints. The program executes at full
speed up to the first breakpoint, then pauses. Pressing F5 continues program
execution up to the next breakpoint, and so on. You can set as many
breakpoints as you want, provided that you have available memory.

There are several ways to set breakpoints:


  ■   Double-click anywhere on the desired breakpoint line. The selected
      line is highlighted to show that it is a breakpoint. To remove the
      breakpoint, double-click on the line a second time.

  ■   Position the cursor anywhere on the line at which you want execution
      to pause. Press F9 to select the line as a breakpoint and highlight
      it. Press F9 a second time to remove the breakpoint and highlighting.

  ■   Display the Set Breakpoint dialog box by choosing Set Breakpoint from
      the Watch menu. Choose one of the breakpoint options that permits you
      to specify a line (location). The line on which the text cursor
      currently rests is the default breakpoint line in the Location field.
      If this line is not the location you want, replace it with the line
      number where you want the breakpoint. When you type in a new line
      number, make sure that you precede it with a period.


A breakpoint line must be a program line that represents executable code.
You cannot select a blank line, a comment line, or a declaration line (such
as a variable declaration or a preprocessor statement) as a breakpoint.

────────────────────────────────────────────────────────────────────────────
NOTE

By default, Microsoft compilers optimize your code. In the process of
optimization, some lines of code may be repositioned or reorganized for more
efficient execution. These changes can prevent CodeView from recognizing the
corresponding lines of source code as breakpoints. Therefore, it is a good
idea to disable optimization during development (use the /Od switch). You
can restore optimization once debugging is completed.
────────────────────────────────────────────────────────────────────────────

A breakpoint can also be set at a function or an explicit address. To set a
breakpoint at a function, simply enter its name in the Set Breakpoint dialog
box. To set a breakpoint at an address, enter the address in CS:IP form.

────────────────────────────────────────────────────────────────────────────
NOTE

If you are debugging more than one application or DLL that share names for
certain window procedures (such as MainWndProc), you can only refer by name
to the procedure that is defined in the first application or DLL.
────────────────────────────────────────────────────────────────────────────

You can remove a breakpoint by selecting it in the Source window and
pressing F9 or the using the Edit Breakpoints screen of the Watch menu. When
your program pauses at a breakpoint, you can continue execution by pressing
F5 or clicking the F5 button in the display.


Setting Breakpoint Values

Breakpoints are not limited to specific lines of code. CVW can also break
execution when an expression reaches a particular value, or just changes
value. Use one of the following methods to set a breakpoint value:


  ■   To pause execution when an expression changes value, type the name of
      the expression in the expression field.

  ■   To pause execution when a expression reaches a particular value, type
      an expression that is usually false in the Expression field of the Set
      Breakpoint dialog box.

      For example, if you want to pause when a variable called looptest
      equals 17, type:

      looptest == 17.

      Execution will halt when this statement becomes true.


You can also use the Set Breakpoint dialog box to combine value breakpoints
with line breakpoints so that execution stops at a specific line only if an
expression has simultaneously reached a particular value, or changed value.


For large variables (such as arrays or character strings), you can specify
the number of bytes you want checked (up to 32K) in the length field.

────────────────────────────────────────────────────────────────────────────
NOTE

When a breakpoint is tied to a variable, CVW must check the variable's value
after each machine instruction is executed. This computational overhead
slows execution greatly. For maximum speed when debugging, either tie value
breakpoints to specific lines, or only set value breakpoints after you have
reached the section of code that needs to be debugged.
────────────────────────────────────────────────────────────────────────────


Setting Breakpoints on Windows Messages

In the Windows environment, you can also set a breakpoint on a Windows
message or an entire class of Windows messages. This feature lets you track
your application's response to user input and window-management messages.

To set a breakpoint on a Windows message or message class, type the wbm
(Windows Breakpoint Message) command in the Watch window. The syntax for the
command is:

  wbm winproc msgname | msgclasses

The winproc parameter is the symbol name or address of an application's
window function. The msgname parameter is the name of a Windows message,
such as WM_PAINT. The msgclasses parameter is a string of characters that
identify one or more classes of messages. The classes are consistent with
those defined in the Windows Spy application; they are:

Message Class                     Type of Windows Message
────────────────────────────────────────────────────────────────────────────
m                                 mouse

w                                 window management

n                                 input

s                                 system

Message Class                     Types of Windows Message
────────────────────────────────────────────────────────────────────────────
i                                 initialization

c                                 clipboard

d                                 DDE

z                                 nonclient

For example, if your application is failing to refresh the client area of a
window, you might set a breakpoint on the WM_PAINT message so that you can
watch your program's behavior. The following command will halt execution
whenever the application's MainWndProc function receives a WM_PAINT message:


  wbm MainWndProc WM_PAINT


Using Breakpoints

Here are several examples that show how breakpoints can help you find the
cause of a problem.

One of the most common bugs is a for loop that executes too many or too few
times. If you set a breakpoint that encloses the loop statements, the
program pauses after each iteration. With the loop variable or critical
program variables in the Watch or Local windows, you can easily see what the
loop is doing wrong.

You do not have to pause a program the first time you reach a breakpoint.
CVW lets you specify the number of times you want to ignore the breakpoint
condition before pausing. To specify how many times a breakpoint line is
executed:


  1.  Choose the Set Breakpoint command from the Watch menu.

  2.  Type the decimal number in the Pass Count field of the dialog box.


For example, suppose your program repeatedly calls a function to create a
binary tree. You suspect that something goes wrong with the process about
halfway through. You could mark the line that calls the function as the
breakpoint, then specify how many times this line is to execute before
execution pauses. Running the program creates a representative (but
unfinished) tree structure that can be examined from the Watch window. You
can then continue your analysis using "single-step" execution, which is
described in the next section.

Another programming error is erroneously assigning a value to a variable. If
you enter a variable in the expression field of the Set Breakpoint dialog
box, execution will break every time the variable changes value. By
evaluating a variable expression, you can halt execution when its value
changes unintentionally.

Breakpoints are a convenient way to pause the program so that you can assign
new values to variables. For example, if a limit value is set by a variable,
you can change the value to see if it affects the program's execution.
Similarly, you can pass a variety of values to a switch statement to see if
they are correctly processed. This ability to alter variables is an
especially convenient way to test new functions without having to write a
stand-alone test program.

When your program reaches a breakpoint and you change a variable, you might
want to watch each step execute while you check the value of that variable.
You can do this with a CVW technique called "single-stepping."


7.10.2  Single-Step Execution

When single-stepping, CVW pauses after each line of code is executed. If a
line contains more than one executable statement, CVW executes all the
statements on the line before pausing. The next line to be executed is
highlighted in reverse video.

You can use either the Step function or the Trace function to single-step
through a program. Step does not display each function call as the program
executes. All the code in the function is executed; but the function appears
to execute as a single step. To use Step, press F10. Trace displays each
step of every function for which CVW has symbolic information. Each line of
the function is executed as a separate step. To use Trace, press F8. (CVW
has no symbolic information about run-time functions; therefore, they are
executed as a single step.) You can alternate between Trace and Step as you
like. The method you use depends on whether you want to see what happens
within a particular function.

You can trace through the program continuously, without having to press F8,
by choosing the Animate command from the Run menu. The speed of execution is
controlled by the Trace Speed command from the Options menu. You can halt
animated execution at any time by pressing any key.

────────────────────────────────────────────────────────────────────────────
NOTE

Attempting to step or trace through Windows start-up code while viewing
assembly-language listing will cause unpredictable results. To step through
your program while viewing assembly-language instructions, first set a
breakpoint at the WinMain function and begin stepping through the program
only after the breakpoint has been reached.
────────────────────────────────────────────────────────────────────────────


7.10.3  Jumping to a Particular Location

At times you may wish to force the system to jump to a particular location
in your program during execution. For example, you might want to avoid
executing code that you know has bugs, or you might want to repeatedly
execute a particularly troublesome portion of your program.

To jump to a specific location in your application:


  1.  Choose the Source command from the Options menu and select the Mix
      Source and Assembly and the Show Machine Code options.

  2.  In the Source window, view the line of source code to which you want
      to jump.

  3.  Examine the code offset of the first machine instruction for the
      assembled statement.

  4.  Use the rip (Register IP) command to change the IP register to this
      code offset, supplying the value as a hexadecimal number.


CVW highlights the line to which you have jumped.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

Do not jump from one procedure to another. Jumping from one procedure to
another disrupts the stack.

When jumping to a specific point in your application, remember that
assembled source code for a given statement may rely on memory values and
registers set in previous instructions that you have skipped. This is
particularly true if you have not disabled optimization by compiling the
source module using the -Od option.
────────────────────────────────────────────────────────────────────────────


7.10.4  Interrupting Your Program

There may be times when you want to halt your program immediately. You can
force an immediate interrupt of a CVW session by pressing
CONTROL+ALT+SYSREQ. You then have the opportunity to change debugging
options, such as adding breakpoints and modifying variables. To resume
continuous execution, just press F5; to single-step, press F10.

You should take care when you interrupt the CVW session. For example, if you
interrupted the session while Windows code or other system code was
executing, attempting to use the Step or Trace functions will produce
unpredictable results. When you interrupt the CVW session, it is usually
safest to set breakpoints in your code and then resume continuous execution,
rather than using Step or Trace.

An infinite loop in your code presents a special problem. Again, since you
should avoid using Step or Trace after interrupting your program, you should
try to locate the loop by setting breakpoints in places you suspect are in
the loop.

Whether or not you locate the infinite loop, you will have to terminate your
application. The wka (Windows Kill Application) command terminates the
currently executing task. Since this task is not necessarily your program,
you should use the wka command only when your application is the currently
executing task.

If your application is the currently executing task and is executing a
module containing symbol information, the CVW Source window will highlight
the current instruction. However, if your application contains modules that
were not compiled with the /Zi option, it will be more difficult to
determine whether the assembly-language code displayed in the Source window
belongs to your application or to another task. In this case, use the wdg
(Windows Dump Global Heap) command, supplying the value in the CS register
as the parameter. CVW will display a listing that will indicate whether the
code segment belongs to your application. If it does, you can use the wka
command without affecting other tasks. However, the wka command does not
perform all the cleanup tasks associated with the normal termination of a
Windows application. For example, GDI objects created during the execution
of the program but not destroyed before you terminated the program will
remain allocated in the system-wide global heap. This will reduce the amount
of memory available during your Windows session. Because of this, you should
use the wka command to terminate the application only if you cannot
terminate it normally.

────────────────────────────────────────────────────────────────────────────
NOTE

The wka command simulates a fatal error in your application. Because of
this, when you use the wka command, Windows displays an "Unexpected
Application Error" message box.

After you close this message box, Windows may not release subsequent mouse
input messages from the system queue until you press a key. If this happens,
the cursor will move on the Windows screen, but Windows will not appear to
respond to the mouse. After you press any key, Windows will then respond to
all mouse events that occurred before you pressed the key.
────────────────────────────────────────────────────────────────────────────


7.11  Handling Abnormal Termination of the Application

Your application can terminate abnormally in one of two ways while you are
debugging it with CVW. It can cause a fatal exit, or it can cause a GP
fault. In both cases, CVW regains control, giving you the opportunity to
examine the state of the system when your application terminated. In
particular, you can often determine the location in your application's code
where the error occurred, or which call caused the error. CVW allows you to
view registers, dump the global heap, display memory, and examine the source
code.

Once you have determined where the error occurred, use the q command to
terminate CVW. In most cases, control will return to Windows.


7.11.1  Handling a Fatal Exit

If the abnormal termination was a fatal exit, and the application was
running with the retail version of Windows, the CVW Command window displays
the following:

  Trap 13 (0DH) -- General Protection Fault.

The CS:IP register contains an address in the Windows code itself. This
small amount of information provides little to help you locate the last call
that your application made before the error was detected.

If, however, your application was running with the debugging version of
Windows, the CVW Command window displays a stack trace that is much more
useful for finding the error in your source code.

After the stack trace appears in the CVW Command window, Windows displays
this prompt:

  Abort, Break, or Ignore?

To locate the cause of the error, press B. This allows CVW to regain control
from Windows.

In most cases, the stack trace will have scrolled off the top of the CVW
Command window, but once CVW regains control, you can scroll it back to
examine the entire stack trace. The following information appears at the top
of the stack trace:


  ■   A fatal exit number. See the Reference, Volume 2, for a listing of the
      possible fatal exit numbers.

  ■   The CS:IP address or the name of the Windows function where the error
      was detected, or the name of the last Windows function called before
      the error was detected.


Following this information, additional Windows functions might be listed in
the stack trace. Somewhere near the top of the stack trace a CS:IP address
will be listed without a Windows function name. In most cases, this is the
location in the source code of your application where the call to a Windows
function occurred that triggered the fatal exit.

To examine this location in your source code, open a Source window if
necessary and use the v command followed by the CS:IP address, being sure to
precede both the segment and the offset with the "0x" hexadecimal prefix.
For example, if CVW indicates that the error occurred at 07DA:0543 in your
application, enter the following command:

  v 0x07DA:0x0543

If you had compiled the module where the error occurred using the C Compiler
 -Zi option, the CVW Source window displays the location in your code where
the errant call to a Windows function occurred.

The first CS:IP address without a name in the stack trace may point to a
location in your code without symbols. For example, the code might be in a
DLL you didn't specify with the /L command-line option or at the CVW prompt.
Or the address might be in a module that you did not compile with the -Zi
option. In such cases, CVW reports that no source code is available. If this
happens, continue down the stack trace, using the v command with each
unnamed CS:IP address. You likely will find a location in a module that was
compiled with the -Zi option, and this location might have made a call into
one of your modules which you did not compile using the -Zi option.

Section 7.16, "A Sample Session in CVW," shows a sample fatal-exit stack
trace and how to use that information to locate an error.


7.11.2  Handling a GP Fault

When a GP fault occurs, CVW displays a message in the Command window to
notify you of the event. If the GP fault occurred at an instruction in one
of your modules, CVW displays the corresponding source code if it had been
compiled using the -Zi option. You can obtain information about the chain of
calls leading up to the GP fault using the CVW Call menu. This displays a
backtrace of calls in the form of a series of segments and offsets, starting
at the most recent call.

If your application was running with the debugging version of Windows, the
backtrace will show window function names next to some of the segment/offset
pairs. By examining the window function names, you might be able to
determine where in your code the error occurred.


7.12  Ending a CVW Session

To terminate a CVW session, use the Exit command in the File menu, or type
the q (Quit) command in the Command window.


7.13  Restarting a CVW Debugging Session

You can terminate your application without terminating CVW. While Windows is
terminating the application, it will notify CVW, and CVW will display the
following message:

  Program terminated normally (0)

The value in parentheses is the return value of the WinMain function. This
value is usually the wParam parameter of the WM_QUIT message, which in turn
is the value of the nExitCode parameter passed to the PostQuitMessage
function.

If you were debugging more than one application or DLL, you can then use the
go command to continue the debugging session. You can also restart the
application you just terminated by using the go command and then restarting
your application through Windows File Manager or Program Manager.


7.14  Advanced CVW Techniques

Once you are comfortable displaying and changing variables, and controlling
the program's execution, you might want to experiment with the following
advanced techniques:


  ■   Using multiple Source windows

  ■   Calling functions

  ■   Checking for undefined pointers

  ■   Handling register variables

  ■   Redirecting CodeView input and output




7.14.1  Using Multiple Source Windows

You can have two Source windows open at the same time. The windows can
display two different sections of source code for the same program. They can
both track CS:IP addresses; or, one can display a high-level listing and one
can display an assembly-language listing. You can move freely between the
Source windows, executing a single line of source code or a single assembly
instruction at a time.


7.14.2  Calling Functions

You can call any C function in your program from the Command window or the
Watch window. The format for calling C functions is:

?funcname (varlist)

CVW evaluates the function and displays its returned value in the Command
window.

The function does not have to be one that is called by your program. You can
evaluate any function that is included in the .OBJ parameters specified on
the LINK command line.

This feature allows you to run functions from within CVW that you would not
normally include in the final version of your program. For example, you
could call a function that checks the integrity of the data structure.

────────────────────────────────────────────────────────────────────────────
NOTE

Directly calling a Windows application procedure or dialog function might
have unpredictable results.
────────────────────────────────────────────────────────────────────────────


7.14.3  Checking for Undefined Pointers

Until a pointer has been explicitly assigned a value, its value is
undefined. Its value can be completely random, or it can be some consistent
value that does not point to a useful data address (such as -1).

Accessing a value through an uninitialized pointer address can cause
inexplicable or erratic program behavior, because the data is not being read
from or written to the intended location. For example, suppose that var1 is
mistakenly written to the address specified by an uninitialized pointer,
then var2 is also written there. When var1 is read back it does not have its
original value, having been overwritten by var2.

At present, all Microsoft C static or global near pointers have an
uninitialized value of 0. That is, they point to the base address of the
data segment. (There is no guarantee, however, that future versions of the
Microsoft C Compiler will be the same; C language specifications do not
define the value of an uninitialized pointer.)

You can take advantage of this consistency. If you specify DS:0 as a
breakpoint expression, CVW automatically halts execution if your program
attempts to write a nonzero value to a null pointer address. This is an easy
way to see whether or not you have initialized all of your pointers.


7.14.4  Handling Register Variables

A register variable is stored in one of the microprocessor's registers,
rather than in RAM. This speeds up access to the variable.

There are two ways for a conventional variable to become a register
variable. One way is declaring the variable as a register variable. If a
register is free, the compiler will store the variable there. The other way
occurs during optimization, when the compiler stores an often-used variable
(such as a loop variable) in a register to speed up execution.

Register variables can cause problems when debugging. As with local
variables, they are only visible within the function where they are defined.
In addition, a register variable might not always be displayed with its
current value.

In general, it is a good idea to turn off all optimization (using the /Od
option when compiling) and to avoid declaring register variables until the
program has been fully debugged. Any side effects produced by optimization
or register variables can then be easily isolated.


7.14.5  Redirecting CVW Input and Output

You can cause CVW to receive input from an input file and generate output to
an output file. To redirect CVW input and output, use the CVW start-up
command with the /C option as follows:

  CVW /c "<infile; t >outfile" myprog

When you redirect input, CVW will execute any commands in infile during
start-up. When CVW exhausts all commands in the input file, focus
automatically shifts to the Command window.

When you redirect output, it is both sent to outfile and echoed to the
Command window. The t parameter must precede the > in the command to send
output to the Command window.

Redirection is a useful way to automate CVW start-up. It also lets you keep
a viewable record of command-line input and output, but no record of mouse
operations. Some applications (particularly interactive ones) may need
modification to allow for redirection of input to the application itself.


7.15  Customizing CVW with the TOOLS.INI File

The TOOLS.INI file customizes the behavior and user interface of several
Microsoft products. The TOOLS.INI file is a plain ASCII text file. You
should place it in a directory pointed to the INIT environment variable. (If
you do not use the INIT environment variable, CodeView for Windows only
looks for TOOLS.INI in its source directory.)

The CodeView for Windows section of TOOLS.INI is preceded by the following
line:

  [cvw]

Most of the TOOLS.INI customizations control screen colors, but you can also
specify start-up commands or the name of the file that receives CodeView for
Windows output. The Help system contains full information about all of the
TOOLS.INI switches for CVW.


7.16  A Sample Session in CVW

The following sample session demonstrates how to use the CVW debugger to
examine a Windows application. The session will use the SDK sample
application called Output, which writes text and draws three shapes─a
rectangle, an ellipse, and a dashed semicircle─on the screen.

Before you begin the CVW session, you must prepare the Output application
for debugging. Compile and link the Output make file after you make the
following changes to the CL and LINK commands:


  1.  Add the -Zi option to CL command by changing -Zpe to -Zpei, and add
      the -Od option:

      CL -c -Gsw -Oas -Zpei -Od OUTPUT.C


  2.  Add the -Co option to the LINK command:

      LINK OUTPUT,,,/NOD /CO SLIBCEW LIBW, OUTPUT.DEF



After you compile with these options, start Windows and then start a CVW
session for Output. See Section 7.4, "Starting a Debugging Session," for
more information about starting CVW. To start the CVW session:


  1.  Choose Run from the File menu in Windows and type the following
      command in the Run dialog box:

      CVW


      The debugging monitor displays the CVW Start-up dialog box.

  2.  Type the application name in the CVW Start-up dialog box:

      OUTPUT


      Your debugging monitor displays the DLL dialog box.

  3.  In this session, you will not be debugging additional DLLs, so leave
      the command line blank and press ENTER.


The CVW menu, the Source window, the Command window, and the Local window
appear on the debugging monitor. The Source window displays the source code
for Output. Notice its title:

  source1 CS:IP output.c (ACTIVE)

The title indicates that the Source window is the active, or selected,
window.

Before you start executing the application, set a breakpoint in your source
code. For example, you could halt Output after it displays text on the
user's screen, but before it draws the rectangle. You know that Output will
draw the rectangle in response to a Windows WM_PAINT message, so use the
Find command to scan the source code for WM_PAINT. To search for this
message:


  1.  Choose the Find option from the CVW Search menu.

      CVW displays the Find dialog box.

  2.  Type the following on the command line:

      WM_PAINT


      Select the Match Upper/Lower Case checkbox; press ENTER.

      CVW finds the first occurrence of "WM_PAINT" in a comment. This is not
      the location you want. To continue the search:

  3.  Choose the Repeat Last Find option from the Search menu.

      This time the Source window displays the case WM_PAINT: statement.
      This is the location you were looking for.


Within this case statement, find the Rectangle function. Scroll downward
through the Source window until you see the following code:

  Rectangle (
                hDC
               ,nDrawX
               ,nDrawY
               ,nDraw + 50
               ,nDraw + 30
              );

Notice that the statement is spread over several lines. To set a breakpoint
on a multiline statement, you must position the cursor on the last line of
the statement. If you try to set a breakpoint on any other line, CVW will
not accept it. To set a breakpoint on this statement:


  1.  Click the ");" characters─the last line of the statement.

      The blinking cursor is now on this line.

  2.  Choose the Set Breakpoint command on the Options menu, or press F9.


CVW displays the line in bold characters to indicate that it is a
breakpoint. Also, the Command window displays the following message:

  Break at: output.c!.297

You have two ways to display a list of the breakpoints:


  ■   You can use the bl command. In the Command window, type:

      bl


      The Command window will display a list of the breakpoint messages.

  ■   You can use the Edit Breakpoints command on the Watch menu. The
      Breakpoint dialog box will display a list of breakpoint messages.


The message for the breakpoint you just set is:

  0) E output.c!.297

The following table uses this message to illustrate the format for CVW
breakpoint messages:

Message Content                   What it Means
────────────────────────────────────────────────────────────────────────────
0)                                Indicates the sequence number of the
                                  breakpoint in the Source Code. This is
                                  the first breakpoint.

E                                 Indicates that the breakpoint is
                                  Enabled.

output.c!.297                     Indicates that the breakpoint is set on
                                  line number 297 of the OUTPUT.C source
                                  code file.

When you are ready to execute the Output application, click in the Command
window and type the go command at the prompt:

  g

The Output application will start running and displaying the text on the
user's screen (the Windows monitor). While the application is running,
Windows has control of the session. When the application reaches the
breakpoint line, CVW takes control and halts the application before the line
is executed. Notice that the CVW Source window displays the breakpoint line
in reverse video to indicate where the application has stopped.

At this point, CVW has control of the session. You can use the CVW menus and
commands to display values, edit breakpoints, or otherwise modify your
debugging session.

Instead of resuming continuous execution, single-step through the
application as it draws the rectangle on the Windows screen. To execute a
single statement, press F10. The Output application draws a rectangle on the
screen and then stops. The CVW Source window displays the next statement of
code in reverse video:

  SelectObject(hDC, hGreenBrush);

Single-step through the next several statements by pressing F10. As you
single-step, the Output application draws each shape on the Windows screen
and then Windows passes control of the session back to CVW. You can resume
continuous execution at any time by pressing F5.

When the application is finished executing, it passes control back to CVW.
To terminate CVW, select the Quit option from the File menu.

If the application is running and you want to interrupt it and terminate
execution:


  1.  Press CONTROL+ALT+SYSREQ.

  2.  Select the Quit command from the File menu in CVW.


You will be returned to Windows. Your application will continue to run.

To see how CVW handles a fatal exit, you will need to introduce a severe
error into the code of Output. Replace the hDC parameter of the DrawText
function in the WM_PAINT case statement of MainWndProc with (HDC)0.
Recompile the application and run CVW to debug the application.

When the debugging version of Windows reaches the call to DrawText, it
detects an invalid display-context handle and displays in the CVW Command
window a stack trace similar to the following:

  FatalExit code = 0x0000
  Stack trace:
  GDI!_TEXT:VALIDATEHANDLE+0046
  GDI!_TEXT:GSV+0018
  USER!_WMG:DRAWTEXT+000D
  0A35:03E9
  USER!_FFFE:INTRNALUPDATEWINDOW+0033
  USER!_FFFE:UPDATEWINDOW+0019
  0A35:011E
  0A35:0031
  0A35:0629

  Abort, Break, or Ignore?

The fatal exit code value 0x0000 indicates that an invalid handle was passed
to a GDI function. See the Reference, Volume 2 for a complete list of fatal
exit codes.

To locate the cause of the error in your source code, respond to the prompt
by pressing B. CVW will then display:

  Break caused by INT3 in code

Find the first CS:IP address without a label. In this case, it is 0A35:03E9.
Use the v command with this address, remembering to add the 0x hexadecimal
prefix, as shown:

  v 0x0A35:0x03E9

CVW will display source code similar to the following:

  DrawText (
   (HDC)0
     , szText
     , strlen(szText)
     , &rcTextBox
    , DT_CENTER |DT_EXTERNALLEADING | DT_NOCLIP
                   | DT_NOPREFIX | DT_WORDBREAK
  );

This is the function call that you changed to cause the fatal exit.


7.17  Summary

CodeView for Windows is a tool that lets you debug Windows applications in
protected mode. With CVW running on your secondary monitor, you can view and
modify program data, and control execution, as you run your Windows
application.

For information related to CodeView for Windows, see the following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Programming Windows applications  Guide to Programming

System requirements               Installation and Update Guide

Fatal exit codes                  Reference, Volume 2: Appendix C,
                                  "Windows
                                  Debugging Messages"

CVW commands                      CVW on-line Help






Chapter 8  Debugging in Real Mode: Symbolic Debugger
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Symbolic Debugger (SYMDEB) is a debugging program that
helps you test executable files for applications that run in real mode. To
debug applications that run in protected mode, use the Microsoft CodeView
for Windows (CVW) debugger.  For information on CVW, see Chapter 7,
"Debugging in Protected Mode: CodeView for Windows."

SYMDEB lets you refer to data and instructions by name rather than by
address. The Symbolic Debugger can access program locations through
addresses, global symbols, or line-number references, making it easy to
locate and debug specific sections of code. You can debug C programs at the
source-file level as well as at the machine level. You can display the
source statements of a program, the disassembled machine code of the
program, or a combination of source statements and disassembled machine
code.

Using SYMDEB, you can display and execute program code, set breakpoints that
stop the execution of your program, examine and change values in memory, and
debug programs that use the floating-point emulation conventions used by
Microsoft languages.

This chapter describes the following topics:


  ■   Preparing symbol files for an application

  ■   Setting up the debugging terminal

  ■   Starting SYMDEB with Windows

  ■   Working with symbol maps

  ■   Interpreting SYMDEB's allocation messages

  ■   Setting breakpoints and interpreting backtraces

  ■   Displaying the application's code and viewing its source file


The chapter also provides the syntax and description of each SYMDEB command.


────────────────────────────────────────────────────────────────────────────
NOTE

To use the Symbolic Debugger, you must have an extra monochrome card or a
serial terminal, or both.

────────────────────────────────────────────────────────────────────────────


8.1  Preparing Symbol Files

Windows applications are difficult to debug without symbolic information
about Windows and the application. To take advantage of the Symbolic
Debugger's symbolic features, first prepare a symbol file that SYMDEB can
use.

The steps for setting up a symbol file depend on the method used to create
the program. The following sections describe those steps for applications
written in C or assembly language.


8.1.1  MAPSYM Program

The MAPSYM program creates symbol files for symbolic debugging. The program
converts the contents of an application's symbol map (.MAP) file into a form
suitable for loading with SYMDEB, copying the result to a symbol (.SYM)
file.


Syntax

  mapsym «{/ | -}l» «{/ | -}n» mapfilename

Parameter                         Description
────────────────────────────────────────────────────────────────────────────
mapfilename                       Specifies the filename for a symbol map
                                  file that was created during linking. If
                                  you do not give a filename extension,
                                  .MAP is assumed. If you do not give a
                                  full pathname, the current directory and
                                  drive are assumed. The MAPSYM program
                                  creates a new symbol file having the
                                  same name as the map file but with the
                                  .SYM extension.

/l                                Directs MAPSYM to display information
                                  about the conversion on the screen. The
                                  information includes the names of groups
                                  defined in the program, the program
                                  start address, the number of segments,
                                  and the number of symbols per segment.

/n                                Directs MAPSYM to ignore line-number
                                  information in the map file. The
                                  resulting symbol file contains no
                                  line-number information.

In the following example, MAPSYM uses the symbol information in FILE.MAP to
create FILE.SYM on the current drive and directory:

  mapsym /l file.map

Information about the conversion is sent to the screen.

────────────────────────────────────────────────────────────────────────────
NOTE

The MAPSYM program always places the new symbol file in the current drive
and directory.

To create a map file for MAPSYM input, you must specify the /map option when
linking. To add line-number information to the map file, specify the
appropriate option when compiling, and specify the /linenumbers option when
linking.

The MAPSYM program can process up to 10,000 symbols for each segment in the
application, and up to 1024 segments.
────────────────────────────────────────────────────────────────────────────


8.1.2  The Incremental Linker

Microsoft C version 6.0 includes , the incremental linker (ILINK). ILINK
directly creates .SYM files for use by the Symbolic Debugger (SYMDEB). If
you use ILINK to link your files and create .SYM files, you do not have to
use MAPSYM.

For more information on ILINK, see the Microsoft C Optimizing Compiler
version 6.0 documentation.


8.1.3  Symbols with C-Language Applications

To prepare a symbol file for an application written in the C language,
follow these steps:


  1.  Compile your source file using the -Zd option to produce line numbers
      in the object file.

      Debugging is easier if you disable the compiler's optimization using
      the -Od option.

  2.  Link the object file to produce an executable version of the program
      by specifying a map filename in the linker's command line and giving
      the /map and /linenumbers options.

      Make sure the map filename is the same as the application's module
      name given in the module-definition file.

  3.  Use the MAPSYM program to produce a symbol file. For information about
      using MAPSYM, see Section 8.1.1, "MAPSYM Program."


The following example shows how to use symbols with C-language applications:


  cl -d -c -AS -Gsw -Od -Zdp test.c
  link test,test,test/map/li,/NOD slibcew slibw, test
  mapsym test


8.1.4  Symbols with Assembly-Language Applications

To prepare symbol files for Windows applications written in assembly
language, follow these steps:


  1.  Make sure that all symbols you might want to use with SYMDEB are
      declared public.

      Segment and group names should not be declared public. They are
      automatically available for debugging.

  2.  Assemble your source file.

  3.  Link the object file to produce an executable version of the
      application by specifying a map filename in the linker's command line
      and giving the /map option.

      Make sure the map filename is the same as the application's module
      name given in the module-definition file.

  4.  Use the MAPSYM program to create a symbol file. For information about
      using MAPSYM, see Section 8.1.1, "MAPSYM Program."


The following is an example of the syntax used when preparing symbol files,
written in assembly language, for debugging:

  masm test;
  link test,test,test/map,slibw slibc libh,test
  mapsym test


8.2  Setting Up the Debugging Terminal

While it is running, Windows takes complete control of the system console,
making debugging through the console impossible. To debug Windows
applications, you can either set up a remote terminal connected through the
computer's serial port, or set up a secondary monochrome display adapter and
monitor.


8.2.1  Setting Up a Remote Terminal

To set up a remote terminal for debugging, follow these steps:


  1.  Select a serial port on your computer and connect a terminal to it.

  2.  Use the DOS MODE command to set the baud rate and line protocol of the
      serial port to correct values for use with the terminal.

      Line protocol includes the number of stop bits, type of parity
      checking, and number of transmission bits used by the terminal.

  3.  When you start the Symbolic Debugger, redirect its input and output to
      the remote terminal using the = = command to specify a communication
      port.

      For example, the following command redirects all subsequent SYMDEB
      command input and output to COM2:

      == com2
────────────────────────────────────────────────────────────────────────────
NOTE

Debugging through a remote terminal disables the normal function of the
CONTROL+S key combination. Do not use this key combination while debugging
Windows




8.2.2  Setting Up a Secondary Monitor

To set up a secondary monitor for debugging, follow these steps:


  1.  Install a secondary monochrome display adapter in a free slot of your
      computer and connect the monochrome monitor to it.

  2.  Set the secondary display adapter switches to the appropriate
      settings.

      Follow the display adapter and computer manufacturer's
      recommendations.

  3.  When you start the Symbolic Debugger, use the /m option to redirect
      SYMDEB output to the secondary monitor.

      NOTE  When the /m option is given, the Symbolic Debugger redirects
      output to the secondary monitor, but continues to use the system
      keyboard for input until the application being debugged is started.
      While the application is running, SYMDEB yields complete control of
      the keyboard to the application. As soon as the application reaches a
      breakpoint or terminates, SYMDEB reclaims the keyboard and permits
      user input again.



8.3  Starting SYMDEB with Windows

To start the Symbolic Debugger with Windows, enter the following SYMDEB
command line at the DOS command prompt:

  SYMDEB «options» «symbolfiles» WIN.COM /R  «arguments»

The options parameter specifies one or more SYMDEB options. The symbolfiles
parameter specifies the names of symbol files. The arguments parameter
specifies arguments that you want to pass to WIN.COM.

If you want additional symbolic information about Windows, add the full
pathname of the debug, the nondebug, or the kernel version of the symbol
file, as in the following example:

  ... ,APP.SYM\WM\DEBUG\GDI.SYM

Once started, the Symbolic Debugger displays a start-up message followed by
the SYMDEB command prompt (-). When you see the prompt you can enter SYMDEB
commands. These commands are described in Section 8.9, "SYMDEB Commands."

────────────────────────────────────────────────────────────────────────────
NOTE

To set breakpoints in discardable library code in a large frame EMS
environment, add the following entry to the [kernel] section of WIN.INI:
────────────────────────────────────────────────────────────────────────────

  [Kernel]
  EnableEMSDebug=1

Adding the entry will slow down debugging.
The following section describes the elements of the SYMDEB command line.


8.3.1  Specifying SYMDEB Options

You can specify one or more SYMDEB options in the command line. These
options control the operation of the Symbolic Debugger. Options must appear
before WIN.COM on the command line so that SYMDEB will not interpret them as
program arguments.

The SYMDEB tool has the following command-line options:

Option                            Meaning
────────────────────────────────────────────────────────────────────────────
/m                                Redirects SYMDEB output to a secondary
                                  monochrome monitor and permits debugging
                                  of Windows applications without
                                  redirecting input and output to a remote
                                  terminal. The SYMDEB utility assumes
                                  that the necessary display adapter and
                                  monitor are
                                  installed.

/x                                Disables the "more" feature. Unless this
                                  option is specified, the Symbolic
                                  Debugger automatically stops lengthy
                                  output and does not continue the display
                                  until the user presses a key. The SYMDEB

                                  utility stops the output after
                                  displaying enough lines to fill the
                                  screen, then prompts the user to
                                  continue by displaying the message
                                  "[more]". If this option
                                  is specified, the Symbolic Debugger
                                  continues to
                                  display output until the command is
                                  completely
                                  executed.

Option                            Meaning
────────────────────────────────────────────────────────────────────────────
/wnumber                          Sets the memory-allocation reporting
                                  level. The reporting level defines what
                                  kind of memory allocation and movement
                                  messages the Symbolic Debugger will
                                  display when Windows loads and moves
                                  program segments. The number parameter
                                  specifies the reporting level and can be
                                  0, 1, 2, or 3. Level 0 specifies no
                                  reporting. Level 1, the default level if
                                  the /w option is not given, generates
                                  allocation messages only. Level 2
                                  generates movement messages only. Level
                                  3 generates both allocation and movement
                                  messages. See Section 8.6, "Displaying
                                  Allocation Messages," for more
                                  information about allocation messages.

/@filename                   Directs the Symbolic Debugger to load
                                  macro definitions from the file
                                  specified by filename. Macro definitions
                                  define the meaning of the debugger's 10
                                  macro commands. The given file must
                                  contain one or more macro definitions in
                                  the following form:

                                  mnumber=command-string

                                  Specifies the macro and one or more
                                  SYMDEB commands. The number parameter
                                  specifies the macro; the command-string
                                  parameter specifies commands.

/n                                Permits use of nonmaskable interrupts on
                                  non-IBM computers. To use nonmaskable
                                  interrupts, you must have a system that
                                  is equipped with the proper hardware,
                                  such as the following products:

                                  ■ IBM Professional Debugging Facility

                                  ■ Software Probe (Atron Corporation)

                                  The SYMDEB utility requires only the
                                  hardware provided with these products;
                                  no additional software is needed. If you
                                  are using one of these products with a
                                  non-IBM system, you must use the /n
                                  option to take advantage of the break
                                  capability. Using a
                                  nonmaskable-interrupt break system is
                                  more reliable than using the interactive
                                  break key because you can always stop
                                  program execution regardless of the
                                  state of interrupts and other conditions.


Option                            Meaning
────────────────────────────────────────────────────────────────────────────
/i«bm»                            Directs the Symbolic Debugger to use
                                  features available on IBM-compatible
                                  computers. The option is not necessary
                                  if you have an IBM PC, because SYMDEB
                                  automatically checks the hardware on
                                  start-up. If SYMDEB does not find that
                                  the hardware is an IBM PC, it assumes
                                  that the hardware is a generic DOS
                                  machine. Without this option, the
                                  Symbolic Debugger cannot take advantage
                                  of special hardware features such as the
                                  IBM 8259
                                  Interrupt Controller, the IBM-style
                                  video display, and other capabilities of
                                  the IBM basic input and
                                  output system (BIOS).

/ffilename                        Prevents association of the named symbol
                                  file with the executable file that has
                                  the same name. This option is rarely
                                  used and is not recommended for
                                  debugging Windows applications.

/commands                         Directs the Symbolic Debugger to execute
                                  commands in the commands list
                                  immediately after starting. Commands in
                                  the list must be separated with
                                  semicolons and the entire list must be
                                  enclosed in double quotation marks. The
                                  slash (/) is required.

────────────────────────────────────────────────────────────────────────────
NOTE

You can specify a hyphen instead of a slash for the option designator. You
can also use both uppercase and lowercase letters to specify the option.

Files containing a hyphen in the filename must be renamed before use with
SYMDEB. Otherwise, SYMDEB will interpret the hyphen as an option designator.
────────────────────────────────────────────────────────────────────────────


8.3.2  Specifying Symbol Files

To debug a Windows application symbolically, you should load symbol files
for the following items:


  ■   The application

  ■   Windows kernel, user, and GDI (graphics device interface) libraries

  ■   Other Windows libraries used by the application


The symbol file for the application is not required. The symbol files for
the Windows libraries are optional, but recommended. They are helpful when
trying to trace calls made to routines that are not in the application or to
trace window messages.

You must give the complete filename and extension when naming a symbol file.
If the symbol file is not in the current directory, you must supply a full
pathname. All symbol files must be specified before the WIN.COM file.

You should always name the application's symbol file before any other symbol
files.

The following example shows how to specify a symbol file:

  SYMDEB \APP\TEST.SYM USER.SYM GDI.SYM \APP\TESTLIB.SYM WIN.COM /R

────────────────────────────────────────────────────────────────────────────
NOTE

The Windows symbol files for the kernel, user, and GDI libraries, WIN.COM,
USER.SYM, and GDI.SYM, are provided as part of the Microsoft Windows
Software Development Kit (SDK).

You can create symbol files for other Windows libraries by using the same
methods you used to create application symbol files.
────────────────────────────────────────────────────────────────────────────


8.3.3  Passing the Application to Windows

You can pass the name of your application to Windows by placing the full
pathname on the SYMDEB command line immediately after the WIN.COM filename.
Windows receives the name as an argument when you start WIN.COM from within
SYMDEB. Windows uses the name to load and run the application.

The following example shows how to pass an application to Windows:

  SYMDEB \APP\TEST.SYM WIN.COM /R \APP\TEST.EXE

If you do not supply your application's name as an argument, you can load
and start your application by starting WIN.COM and using the Windows shell
to load the application.


8.3.4  Using SYMDEB Keys

The Symbolic Debugger provides a number of special keys for controlling
input and output and program execution. The following is a list of these
keys:

Key                               Action
────────────────────────────────────────────────────────────────────────────
SCROLL LOCK                       Suspends and restores SYMDEB output. The
                                  key is typically used to temporarily
                                  stop the output of lengthy displays. To
                                  suspend output, press SCROLL LOCK. To
                                  restore output, press the key again.

CONTROL + SYSREQ                  Generates an immediate breakpoint that
                                  halts program execution and returns
                                  control to the Symbolic Debugger.
                                  (Available on the IBM PC/AT(R) only.)


Key                               Action
────────────────────────────────────────────────────────────────────────────
CONTROL + C                       Cancels the current SYMDEB command. This
                                  key combination does not apply to
                                  commands that pass execution control to
                                  the application being debugged.


8.4  Working with Symbol Maps

Symbol files that the Symbolic Debugger has loaded for debugging are called
symbol maps. The Symbolic Debugger utility lets you examine symbol maps and
use the symbols in the maps to set breakpoints and display variables and
functions.

Although symbol maps are in memory, SYMDEB allows access to only one symbol
map at a time. You can display a list of symbol maps at any time, but to
display or use the symbols in a map, you must first open that map.

────────────────────────────────────────────────────────────────────────────
NOTE

The Symbolic Debugger requires that the filename of the application's .SYM
file be the same as the application's module name (specified in the
application's module-definition file). If these names are not identical, the
Symbolic Debugger will not be able to determine the correct segment
addresses for symbols in the application.

────────────────────────────────────────────────────────────────────────────


8.4.1  Listing the Symbol Maps

You can display a list of the symbol maps by using the x command with the
asterisk (*) argument. The command displays the names of all maps in memory,
the name of each segment belonging to a map, and the 16-bit paragraph
address of each segment. (The x command without an argument displays only
the open map.)

For example, type the following to display a list of the symbol maps:

  -x *

The resulting list could look like the following:

  [ 0000 TEST ]
          [ 0001 IGROUP ]
            0002 DGROUP
    0000 TESTLIB
            0001 _TEXT
            0002 DGROUP

The open map name is enclosed in brackets ([ ]). The active segment in the
map is also enclosed in brackets. Segment addresses appear immediately
before the segment names.

────────────────────────────────────────────────────────────────────────────
NOTE

The Symbolic Debugger does not display a segment's actual address until the
code or data corresponding to that segment has been loaded. If you list the
symbol maps before loading an application, SYMDEB displays low-memory
addresses as a warning that the segments are not yet in memory.
────────────────────────────────────────────────────────────────────────────

Once an application is loaded, SYMDEB appends a number to the end of the
data-segment name in the symbol map. This number shows which instance of the
application the data segment belongs to. If you load multiple instances of
an application, SYMDEB adds a new data-segment name to the symbol map for
that application.

In the following example, SYMDEB places parentheses around the active data
segment to show which instance of the application is currently running:

  [ 0000 TEST ]
          [ 88F0 IGROUP ]
          ( 87E0 DGROUP )
            8944 DGROUP1


8.4.2  Opening a Symbol Map

To access the symbols in a symbol map, you must open the symbol map using
the xo command. For example, to open the symbol map named TEST, you would
type the following:

  -xo test!

The Symbolic Debugger opens the symbol map and lets you examine and use
symbols from the map.

You can use the xo command to open a different symbol map at any time.


8.4.3  Displaying Symbols

You can use the x? command to display the symbols in the open symbol map.
The command lists each symbol by name and also gives the symbol's address
offset. For example, to display the symbol TestWndProc, type the following:

  -x? testwndproc

The command displays the name and address of the segment to which the symbol
belongs, as in the following example:

  [ 88E0 IGROUP ]
    005A TESTWNDPROC

The symbol's absolute address can be computed using the segment's address
and the symbol's offset. In the preceding example, the function TestWndProc
is in the segment IGROUP at address 88E0:005A.

If the symbol is an external symbol (for example, a function or variable
defined outside of the application), no group name is given and the offset
is always zero, as shown in the following example:

  0000 SHOWWINDOW

You can use the asterisk (*) as a wildcard character with the x command to
display more than one symbol at a time. For example, the following command
displays all symbols in the IGROUP segment:

  -x? igroup:*

The following command displays all symbols in the DGROUP segment that begin
with an underscore (_):

  -x? dgroup:_*


8.5  Starting the Application

You can start the application by using the g command. The command directs
the Symbolic Debugger to pass execution control to the program at the
current code address. (Immediately after starting SYMDEB with Windows, the
current code address is the start address of the WIN.COM. file.)

If you have supplied your application's filename as a WIN.COM argument on
the SYMDEB command line, WIN.COM starts your application automatically.
Otherwise, it starts the Windows shell, which will load and run your
application.


8.6  Displaying Allocation Messages

The Symbolic Debugger displays memory-allocation messages to show that
Windows has created, freed, or moved memory blocks. The messages are
intended to help you locate your application's program code and data in
memory. The messages can also be used to see the effect of the application
on Windows memory management. The Symbolic Debugger actually displays
messages only if the memory-allocation reporting level is set to an
appropriate value (see the /w option in Section 8.3.1, "Specifying SYMDEB
Options").

When Windows allocates a new block of memory and the reporting level is 1 or
3, the Symbolic Debugger displays a message of the following form:

module-name!segment-name=segment-address

The module-name field specifies the name of the application or library to
receive the allocated memory. The segment-name field specifies the name of
the code or data segment within the application or library that will occupy
the memory block. The segment-address field specifies the 16-bit paragraph
address of the memory block.

When Windows moves a block of memory and the reporting level is 2 or 3, the
Symbolic Debugger displays a message of the following form:

old-address moved to new-address

The old-address and new-address fields specify the old and new 16-bit
paragraph addresses of the memory block.

When Windows frees a block of memory and the reporting level is 1 or 3, the
Symbolic Debugger displays a message of the following form:

segment-address freed

The segment-address field specifies the 16-bit paragraph address of the
block to be freed.

The following is an example of allocation messages that SYMDEB might
display:

  TEST!IGROUP=886F
  TEST!DGROUP=8799
  GDI!Code=1C32
  8344 moved to 8230
  7C12 freed


8.6.1  Setting Breakpoints with Symbols

You can use the bp command and symbols to set breakpoints in your
application code even before loading the application. The bp command uses
the symbol to compute the instruction address at which to break execution.
If the application has not been loaded, SYMDEB sets a virtual breakpoint. A
virtual breakpoint has no effect on execution until the application is
actually loaded. Once an application is loaded, SYMDEB computes the actual
code addresses of all virtual breakpoints and enables the breakpoints.

For example, to set a breakpoint at the application's WinMain function, you
would type the following:

  -bp winmain

After you set the breakpoint, the application breaks and returns control to
SYMDEB when this address is encountered.

────────────────────────────────────────────────────────────────────────────
NOTE

If you do not set breakpoints before starting the application, use an
interrupt key to break execution (see Section 8.3.4, "Using SYMDEB Keys,"
for more information on SYMDEB keys).
────────────────────────────────────────────────────────────────────────────


8.6.2  Displaying Variables

You can use the d command to display the content of the application's global
variables. The command frequently takes the variable's symbol as an argument
and computes the variable's address using the address of the variable's
segment and its offset. The symbol map containing the symbol must be open.
See Section 8.9, "SYMDEB Commands," for details of arguments to the d
command.

When there are multiple instances of the application being debugged, SYMDEB
uses the address of the active data segment to compute a variable's address.
To display a variable in another instance, supply an absolute segment
address. For example, to display the value of hInstance in the first
instance, you must first determine the 16-bit paragraph address of the first
DGROUP segment by typing the following:

  -x

SYMDEB displays the name and address of each segment in the open map, as in
the following example:

  [ 0000 TEST ]
   [ 8A12 IGROUP ]
     89A0 DGROUP
   ( 8882 DGROUP1 )

Specify the address when typing the d command, as follows:

  -dw 89A0:hinstance

SYMDEB displays the contents of the specified variable, as follows:

  88AO:0010 0235 0000 0000 0000 0000 0000 0000 0000


8.6.3  Displaying Application Source Statements

You can display the source statements of an application by using the v, s+,
and s& commands. The v command displays the source lines of the application
beginning with the source line corresponding to the current code address
(CS:IP). The s+ command directs the Symbolic Debugger to display source
lines whenever you use the u command. The s& command directs the Symbolic
Debugger to display both source lines and unassembled code whenever you use
the u command. For more information on these commands, see Section 8.9,
"SYMDEB Commands."

────────────────────────────────────────────────────────────────────────────
NOTE

If a symbol file does not contain line-number information, the v, s+, and s&
commands have no effect.

If the application source file is not in the current directory, or the file
does not have the same name as the symbol file, SYMDEB prompts for the
file's correct name and/or pathname.
────────────────────────────────────────────────────────────────────────────


8.7  Quitting SYMDEB

You can terminate SYMDEB at any time by using the q command to return to the
DOS prompt. Before quitting SYMDEB, however, you must end the current
Windows session and restore the console display to its normal display modes.

Follow these general rules:


  ■   Use the q command to quit, if you have not started Windows.

  ■   Open the Windows shell and choose the Close command from its System
      menu, then use the q command, if you have started Windows and it is
      still operational. Make sure that all instances of the shell are
      closed.

      IMPORTANT  When Windows terminates as a result of a fatal exit, the
      Symbolic  Debugger displays a fatal-exit message and returns the
      SYMDEB prompt. Do not attempt to restart Windows or quit SYMDEB. You
      must reboot the system to continue.



8.8  SYMDEB Command Overview and Tables

This section contains a complete listing of commands that can be used with
the Symbolic Debugger. It also describes the arguments and expressions used
with SYMDEB commands, as well as predefined names used as register and
register-flag names. Table 8.1 is a summary of the syntax and meaning of
SYMDEB commands:

Table 8.1  SYMDEB Commands

╓┌─────────────────────────────────────┌─────────────────────────────────────╖
Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────
a «address»                           Assemble instruction mnemonics

ba option size address«value»         Set address breakpoint(s) on 80386
«command-string»                      machines

bc id-list                            Clear breakpoint(s)

bd id-list                            Disable breakpoint(s)

be id-list                            Enable breakpoint(s)
Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────
be id-list                            Enable breakpoint(s)

bl                                    List breakpoint(s)

bp«id» address «value»                Set breakpoint(s)
«command-string»

c range address                       Compare

d «range»                             Dump memory using previous type

da «range»                            Dump memory ASCII

db «range»                            Dump memory bytes



Table 8.1  SYMDEB Commands (continued)

╓┌─────────────────────────────────────┌─────────────────────────────────────╖
Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────
dd «range»                            Dump memory doublewords

df                                    Display list of global free blocks

dg                                    Display global heap

dh                                    Display local heap for current data
                                      segment register

dl «range»                            Dump memory, long floating point

dm                                    Display list of loaded modules

dq                                    Dump list of current tasks, their
                                      SS:BP, CS:IP, nEvents, priority,
                                      module name, and queue handle

ds «range»                            Dump memory, short floating point
Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────
ds «range»                            Dump memory, short floating point

dt «range»                            Dump memory 10-byte reals

du                                    Display LRU list

dw «range»                            Dump memory words

e address «value»                     Enter using previous type

ea address «value»                    Enter ASCII

eb address «value»                    Enter bytes

ed address «value»                    Enter doublewords

el address «value»                    Enter long floating point

es address «value»                    Enter short floating point
Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────
es address «value»                    Enter short floating point

et address «value»                    Enter 10-byte reals

ew address «value»                    Enter words

f range list                          Fill

g «= startaddress » «breakaddress»...  Go

h value1 value2                       Add hexadecimal command

i value                               Input from port

k «value»                             Backtrace stack

kt pdb «value»                        Backtrace task

kv «value»                            Annotate each stack frame with the
Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────
kv «value»                            Annotate each stack frame with the
                                      associated frame pointer value

l «address «drive record count» »     Load

m range address                       Move

mid«= command-string»                 Define or execute macro

n «filename»«arguments»               Set name

o value byte                          Output to port

p «= startaddress» «value»            Trace program instruction or call

q                                     Quit

r «register» « «= » value»            Register

Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────

s range list                          Search

s-                                    Set machine debugging only

s&                                    Set machine and source debugging

s+                                    Set source debugging only

t «= startaddress» «value»            Trace program instruction

u «range»                             Display unassembled instructions

v range                               View source lines

w «address «drive record count» »     Write to disk or file

x «*| ?» symbol                       Examine symbol(s)

Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────

xo «symbol!»                          Open symbol map/segment

z symbol value                        Set symbol value

?                                     Display list of SYMDEB commands and
                                      operators

? expression                          Compute and display expression

.                                     Display current source line

< filename                            Redirect SYMDEB input

> filename                            Redirect SYMDEB output

= = filename                          Redirect SYMDEB input and output

{ filename                            Redirect program input
Syntax                                Meaning
────────────────────────────────────────────────────────────────────────────
{ filename                            Redirect program input

} filename                            Redirect program output

~ filename                            Redirect program input and output

! «dos-command»                       Shell escape

* comment                             Comment

────────────────────────────────────────────────────────────────────────────



Any combination of uppercase and lowercase letters may be used in commands
and arguments. If a command uses two or more parameters, separate them with
a single comma (,) or one or more spaces.

The following provides examples of SYMDEB commands:

  ds _avg L 10
  U .22
  f DS:100,110 ff,fe,01,00

For complete information about command syntax, see Section 8.9, "SYMDEB
Commands."


8.8.1  Command Arguments

Command arguments are numbers, symbols, line numbers, or expressions used to
specify addresses or values to be used by SYMDEB commands. The following is
a list of argument syntax and meaning:

Argument                          Description
────────────────────────────────────────────────────────────────────────────
address                           Specifies absolute, relative, or
                                  symbolic address of
                                  a variable or function. The Symbolic
                                  Debugger permits a wide variety of
                                  address types. See Section
                                   8.8.2, "Address Arguments," for a
                                  complete description of address
                                  arguments.

byte                              Specifies a value argument representing
                                  a byte value. It must be within the
                                  range 0 to 255.

command-string                    Specifies one or more SYMDEB commands.
                                  If more than one command is given, they
                                  must be separated by semicolons (;).

count                             Specifies a value argument representing
                                  the number of disk records to read or
                                  write.

dos-command                       Specifies a DOS command.

drive                             Specifies a value argument representing
                                  a disk drive. Drives are numbered 0 for
                                  A, 1 for B, 2 for C, and so on.

expression                        Specifies a combination of arguments and
                                  operators that represents a single value
                                  or address. See Section 8.8.3,
                                  "Expressions," for a list and
                                  explanation of expression operators.

filename                          Specifies the name of a file or a device.
                                  The filename must follow the DOS
                                  filenaming
                                  conventions.

id                                Specifies a decimal number representing
                                  a breakpoint or macro identifier. The
                                  number must be within the range 0 to 9.

Argument                          Description
────────────────────────────────────────────────────────────────────────────
id-list                           Specifies one or more unique decimal
                                  numbers representing a list of
                                  breakpoint identifiers. The numbers must
                                  be within the range 0 to 9. If more than
                                  one number is given, they must be
                                  separated using spaces or commas. The
                                  wildcard character (*) can be used to
                                  specify all breakpoints.

list                              Specifies one or more value arguments.
                                  The values must be within the range 0 to
                                  65,535. If more than one value is given,
                                  they must be separated using spaces or
                                  commas.

                                  A list can also be specified as a list
                                  of ASCII values. The list can contain
                                  any combination of characters and must
                                  be enclosed in either single or double
                                  quotation marks. If the enclosing mark
                                  appears within the list, it must be
                                  given twice.

range                             Specifies an address range. Address
                                  ranges have two forms: a start and end
                                  address pair, and a start address and
                                  object count. The first form consists of
                                  two address arguments, the first
                                  specifying the start address and the
                                  second specifying the end address. The
                                  second form consists of an address
                                  argument, the letter l, and a value
                                  argument. The address specifies the
                                  starting address; the value specifies
                                  the number of objects after the address
                                  to examine or display. The size of an
                                  object depends on the command. If a
                                  command requires a range but only a
                                  start address is given in the command,
                                  the command assumes the range has an
                                  object count of 128. This default count
                                  does not apply to commands that require
                                  a range followed immediately by a value
                                  or an address argument.

record                            Specifies a value argument representing
                                  the first disk record to be read or
                                  written to.

register                          Specifies the name of a CPU register. It
                                  can be any one of the following:

╓┌───┌───┌───┌───────────────────────────────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
AX  CX  ES  SI
BP  DI  F   SP
BX  DS  IP  SS
CS  DX  PC


The names IP and PC refer to the same register: the instruction pointer. The
name F is a special name for the flags register. Each flag within the flags
register has a unique name based on its value. These names can be used to
set or clear the flag. Table 8.2 lists the flag names:

Table 8.2  Flag Values

╓┌────────────────┌───────────────┌──────────────────────────────────────────╖
Flag             Set             Clear
────────────────────────────────────────────────────────────────────────────
Overflow         ov              nv
Direction        dn (decrement)  up (increment)

Interrupt        ei (enabled)    di (disabled)
Sign             ng (negative)   pl (positive)
Zero             zr              nz
Auxiliary Carry  ac              na
Parity           pe (even)       po (odd)
Carry            cy              nc
────────────────────────────────────────────────────────────────────────────


Argument                          Description
────────────────────────────────────────────────────────────────────────────
symbol                            Identifies the address of a variable,
                                  function, or segment. A symbol consists
                                  of one or more characters, but always
                                  begins with a letter, underscore (_),
                                  question mark (?), at symbol (@), or
                                  dollar sign ($). Symbols are available
                                  only when the .SYM file that defines
                                  their names and values has been loaded.
                                  Any combination of uppercase and
                                  lowercase letters can be used; SYMDEB is
                                  not case-sensitive. For some commands,
                                  the wildcard character (*) may be used
                                  as part of a symbol to represent any
                                  combination of characters.

pdb                               Specifies a value argument representing
                                  the segment address of a program
                                  descriptor block.

value                             Specifies an integer number in binary,
                                  octal, decimal, or hexadecimal format. A
                                  value consists of one or more digits
                                  optionally followed by a radix: Y for
                                  binary, O or Q for octal, T for decimal,
                                  or H for hexadecimal. If no radix is
                                  given, hexadecimal is assumed. SYMDEB
                                  truncates leading digits if the number
                                  is greater than 65,535. Leading zeros
                                  are ignored. Hexadecimal numbers have
                                  precedence over symbols, thus FAA is a
                                  number.


8.8.2  Address Arguments

Address arguments specify the location of variables and functions. The
following list explains the syntax and meaning of the various addresses used
in SYMDEB:

Syntax                            Meaning
────────────────────────────────────────────────────────────────────────────
segment:offset                    Specifies an absolute address. A full
                                  address has both a segment address and
                                  an offset, separated by a colon (:). A
                                  partial address is just an offset. In
                                  both cases, the segment or offset can be
                                  any number, register name, or symbol. If
                                  no segment is given, the a, g, l, p, t,
                                  u, and w commands use the CS register
                                  for the default segment address. All
                                  other commands use DS.

name{+ | -}offset                 Specifies a symbol-relative address. The
                                  name can be any symbol. The offset
                                  specifies the offset in bytes. The
                                  address can be specified as a positive
                                  (+) or negative (-) offset.

.{+ | -}number                    Specifies a relative line number. The
                                  number is an offset (in lines) from the
                                  current source line to the new line. If
                                  + is given, the new line is closer to
                                  the end of the source file. If - is
                                  given, the new line is closer to the
                                  beginning.

.«filename:»number                Specifies an absolute line number. If
                                  filename is given, the specified line is
                                  assumed to be in the source file
                                  corresponding to the symbol file
                                  identified by filename. If no filename
                                  is given, the current instruction
                                  address (the current values of the CS
                                  and IP registers) determines which
                                  source file contains the line.

symbol«{+ | -}number»             Specifies a symbolic line number. The
                                  symbol can be any instruction or
                                  procedure label. If number is given, the
                                  number is an offset (in lines) from the
                                  given label or procedure name to the new
                                  line. If + is given, the new line is
                                  closer to the end of the source file. If
                                  - is given, the new line is closer to
                                  the beginning.

────────────────────────────────────────────────────────────────────────────
NOTE

Line numbers can be used only with programs developed with compilers that
copy line-number data to the object file.
────────────────────────────────────────────────────────────────────────────


8.8.3  Expressions

An expression is a combination of arguments and operators that evaluates to
an 8-bit, 16-bit, or 32-bit value. Expressions can be used as values in any
command.

An expression can combine any symbol, number, or address with any of the
unary and binary operators in Tables 8.3 and 8.4.

Table 8.3  Unary Operators

╓┌─────────┌────────────────────────────────────────┌────────────────────────╖
Operator  Meaning                                  Precedence
Operator  Meaning                                  Precedence
────────────────────────────────────────────────────────────────────────────
++        Unary plus                               Highest
-         Unary minus
not       1's complement
seg       Segment address of operand
off       Address offset of operand
by        Low-order byte from given address
wo        Low-order word from given address
dw        Doubleword from given address
poi       Pointer from given address (same as dw)
port      One byte from given port
wport     Word from given port                     Lowest
────────────────────────────────────────────────────────────────────────────


Table 8.4  Binary Operators

╓┌─────────┌─────────────────────────────┌───────────────────────────────────╖
Operator  Meaning                       Precedence
────────────────────────────────────────────────────────────────────────────
Operator  Meaning                       Precedence
────────────────────────────────────────────────────────────────────────────
*         Multiplication                Highest
/         Integer division
mod       Modulus
:         Segment override
++        Addition
-         Subtraction
and       Bitwise Boolean AND
xor       Bitwise Boolean exclusive OR
or        Bitwise Boolean OR            Lowest
────────────────────────────────────────────────────────────────────────────


Unary address operators assume DS as the default segment for addresses.
Expressions are evaluated in order of operator precedence. If adjacent
operators have equal precedence, the expression is evaluated from left to
right. Use parentheses to override this order.

The following exemplifies the use of Unary expressions:

  SEG 0001:0002           ; Equals 1
  OFF 0001:0002           ; Equals 2
  4+2*3                   ; Equals 10 (0Ah)
  4+(2*3)                 ; Equals 10 (0Ah)
  (4+2)*3                 ; Equals 18 (12h)


8.9  SYMDEB Commands

The first part of this chapter described how to use the Symbolic Debugger, a
debugger that helps you test executable files for Windows applications that
run in real mode.

For more information about debugging Windows applications, see Chapter 7,
"Debugging in Protected Mode: CodeView for Windows," and Chapter 9,
"Advanced Debugging in Protected Mode: 80386 Debugger."

This section provides information on SYMDEB commands. Most notably, it
provides the syntax for each command.

a ─ Assemble
────────────────────────────────────────────────────────────────────────────


Syntax

  a«address»

This command assembles instruction mnemonics and places the resulting
instruction codes into memory at address. If no address is given, the
asssembly starts at the address given by the current values of the CS and IP
registers. To assemble a new instruction, type the desired mnemonic and
press ENTER. To terminate assembly, press ENTER. There are the following
assembly rules:


  ■   Use retf for the far return mnemonic.

  ■   Use movsb or movsw for string-manipulation mnemonics.

  ■   Use the near or far prefix with labels to override default distance.
      The ne abbreviation stands for near.

  ■   Use the word ptr or byte ptr prefix with destination operands to
      specify size. The wo abbreviation stands for word ptr; by for byte
      ptr.

  ■   Use square brackets around constant operands to specify absolute
      memory addresses. Constants without brackets are treated as constants.

  ■   Use the db mnemonics to assemble byte values or ASCII strings directly
      into memory.

  ■   Use 8087, 80287, or 80387 instructions only if your system has these
      math coprocessors.


The 80286 protected-mode mnemonics cannot be assembled.

────────────────────────────────────────────────────────────────────────────
NOTE

Assembling over code can destroy checksum and cause a fatal exit.
────────────────────────────────────────────────────────────────────────────


ba ─ Breakpoint Address
────────────────────────────────────────────────────────────────────────────


Syntax

  ba option size address «value» «command-string»

This command, available only on 80386 machines, sets an address breakpoint
at a given address. If your program accesses memory at this address, SYMDEB
will stop execution and display the current values of all registers and
flags.

There are three types of breakpoints you can set with the option parameter.
If I is specified, SYMDEB takes a breakpoint when the CPU fetches an
instruction from the given address. If R is specified, SYMDEB takes a
breakpoint when the CPU reads or writes a byte, word, or doubleword to the
given address. If U is specified, SYMDEB takes a breakpoint when the CPU
writes a byte, word, or doubleword to the given address.

The size parameter specifies the size of the data that SYMDEB expects to
find read or written at the given address. If B is specified (8-bit byte),
the command will break only at one address (for example, 0:10). If W is
specified (16-bit word), the command will break at one of two addresses
within that range (for example, 0:10 or 0:11 will cause a break within that
word). If D is specified (32-bit doubleword), the command will break at one
of four addresses within that range (for example, 0:08, 0:09, 0:10, or 0:11
will cause a break within that doubleword).

The address parameter can specify any valid address. The address value is
rounded down if necessary to the nearest byte, word, or doubleword boundary
(for example, if a doubleword address of 0:14 was requested, the command
would access the address of the nearest doubleword boundary below the
address, in this case 0:12).

The optional value parameter specifies the number of times the breakpoint is
to be ignored before being taken. It can be any 16-bit value.

The command-string parameter specifies an optional list of commands to be
executed each time the breakpoint is taken. Each SYMDEB command in the list
can include parameters and is separated from the next command by a
semicolon.

The bc, bd, be, and bl commands can all be used on these breakpoints.


bc ─ Breakpoint Clear
────────────────────────────────────────────────────────────────────────────


Syntax

  bc id-list

This command permanently removes one or more previously set breakpoints. If
id-list is given, the command removes the breakpoints named in the list. The
id-list can be any combination of integer values from 0 to 9. If the
wildcard character (*) is given, the command removes all breakpoints.


bd ─ Breakpoint Disable
────────────────────────────────────────────────────────────────────────────


Syntax

  bd id-list

This command disables, but does not delete, one or more breakpoints. If
id-list is given, the command disables the breakpoints named in the list.
The id-list can be any combination of integer values from 0 to 9. If the
wildcard character (*) is given, the command disables all breakpoints.


be ─ Breakpoint Enable
────────────────────────────────────────────────────────────────────────────


Syntax

  be id-list

This command restores one or more breakpoints that were temporarily disabled
by a bd command. If id-list is given, the command enables the breakpoints
named in the list. The id-list can be any combination of integer values from
0 to 9. If the wildcard character (*) is given, the command enables all
breakpoints.


bl ─ Breakpoint List
────────────────────────────────────────────────────────────────────────────


Syntax

  bl

This command lists current information about all breakpoints. The command
displays the breakpoint number, the enabled status, the address of the
breakpoint, the number of passes remaining, and the initial number of passes
(in parentheses). The enabled status can be enabled (e), disabled (d), or
virtual (v). A virtual breakpoint is a breakpoint set at a symbol whose .EXE
file has not yet been loaded.


bp ─ Breakpoint Set
────────────────────────────────────────────────────────────────────────────


Syntax

  bp«id» address «value» «command-string»

This command creates a "sticky" breakpoint at the given address. Sticky
breakpoints stop execution and display the current values of all registers
and flags. Sticky breakpoints remain in the program until removed using the
bc command, or temporarily disabled using the bd command. The Symbolic
Debugger allows up to 10 sticky breakpoints (0 through 9). The optional id
parameter specifies which breakpoint is to be created. If no id is given,
the first available breakpoint number is used. The address parameter can be
any valid instruction address (it must be the first byte of an instruction).
The optional value parameter specifies the number of times the breakpoint is
to be ignored before being taken. It can be any 16-bit value. The optional
command-string parameter specifies a list of commands to be executed each
time the breakpoint is taken. Each SYMDEB command in the list can include
parameters and is separated from the next command by a semicolon (;).


c ─ Compare
────────────────────────────────────────────────────────────────────────────


Syntax

  c range address

This command compares the bytes in the memory locations specified by range
with the corresponding bytes in the memory locations beginning at address.
If all corresponding bytes match, the command displays its prompt and waits
for the next command. If one or more pairs of corresponding bytes do not
match, the command displays each pair of mismatched bytes.


d ─ Dump
────────────────────────────────────────────────────────────────────────────

Syntax

  d «range»

This command displays the contents of memory in the given range. The command
displays data in the same format as the most recent dump command. (Dump
commands include d, da, db, dd, dg, dh, dl, dq, ds, dt, and dw.) If no range
is given and no previous dump command has been used, the command displays
bytes starting from DS:IP.


da ─ Dump ASCII
────────────────────────────────────────────────────────────────────────────


Syntax

  da «range»

This command displays the ASCII characters in the given range. Each line
displays up to 48 characters. The display continues until the first null
byte or until all characters in the range have been shown. Nonprintable
characters, such as carriage returns and line feeds, are displayed as
periods (.).


db ─ Dump Bytes
────────────────────────────────────────────────────────────────────────────


Syntax

  db «range»

This command displays the hexadecimal and ASCII values of the bytes in the
given range. Each display line shows the address of the first byte in the
line, followed by up to 16 hexadecimal byte values. The byte values are
immediately followed by the corresponding ASCII values. The eighth and ninth
hexadecimal values are separated by a hyphen (-). Nonprintable ASCII values
are displayed as periods (.).


dd ─ Dump Doublewords
────────────────────────────────────────────────────────────────────────────


Syntax

  dd «range»

This command displays the hexadecimal values of the doublewords (4-byte
values) in the given range. Each display line shows the address of the first
doubleword in the line and up to four hexadecimal doubleword values.


df ─ Display Global Free List
────────────────────────────────────────────────────────────────────────────


Syntax

  df

This command displays a list of the free global memory objects in the global
heap. The list has the following form:

  segment-address: size owner

The segment-address field specifies the segment address of the first byte of
the memory object. The size field specifies the size in paragraphs
(multiples of 16 bytes) of the object.

The owner field always specifies that the module is free.


dg ─ Display Global Heap
────────────────────────────────────────────────────────────────────────────


Syntax

  dg

This command displays a list of the global memory objects in the global
heap. The list has the following form:

  segment-address: size segment-type owner «handle flags chain»

The segment-address field specifies the segment address of the first byte of
the memory object. The size field specifies the size in paragraphs
(multiples of 16 bytes) of the object. The segment-type field specifies the
type of object. The type can be any one of the following:

Segment Type                      Meaning
────────────────────────────────────────────────────────────────────────────
CODE                              Segment contains program code.

DATA                              Segment contains program data and
                                  possible stack and local heap data.

FREE                              Segment belongs to pool of free memory
                                  objects ready for allocation by an
                                  application.

PRIV                              Segment contains private data.

SENTINAL                          Segment marks the beginning or end of
                                  the global heap.

The owner field specifies the module name of the application or library that
allocated the memory object. The name "pdb" is used for memory objects that
represent program descriptor blocks. These blocks contain execution
information about applications.

The handle field specifies the handle of the global memory object. If SYMDEB
displays no handle, the segment is fixed.

The flags field specifies the following:

Flag                              Meaning
────────────────────────────────────────────────────────────────────────────
D                                 The segment is moveable and discardable.

L                                 The segment is locked. If the segment is
                                  locked, the lock count appears to the
                                  right of the flag.

If SYMDEB displays a handle, but no flag, the segment is moveable but
nondiscardable.

The chain field specifies the previous and next segment addresses in the LRU
list. SYMDEB displays the addresses only if the segment is moveable and
discardable (the D flag).


dh ─ Display Local Heap
────────────────────────────────────────────────────────────────────────────


Syntax

  dh

This command displays a list of the local memory objects in the local heap
(if any) belonging to the current data segment. The command uses the current
value of the DS register to locate the data segment and check for a local
heap. The list of memory objects has the following form:

  offset: size { BUSY | FREE }

The offset field specifies the address offset from the beginning of the data
segment to the local memory object. The size field specifies the size of the
memory object in bytes. If BUSY is given, the object has been allocated and
is currently in use. If FREE is given, the object is in the pool of free
objects ready to be allocated by the application. A special memory object,
SENTINAL, may also be displayed.


dl ─ Dump Long Reals
────────────────────────────────────────────────────────────────────────────


Syntax

  dl «range»

This command displays the hexadecimal and decimal values of the long
(8-byte) floating-point numbers within the given range. Each display line
shows the address of the floating-point number, the hexadecimal values of
the bytes in the number, and the decimal value of the number.


dm ─ Display Global Module List
────────────────────────────────────────────────────────────────────────────


Syntax

  dm

This command displays a list of the global modules in the global heap. The
list has the following form:

  module-handle module-type module-name file-name

The module-handle field specifies the handle of the module. The module-type
field specifies either a dynamic-link library (DLL) or the name of the
application you are debugging. The module-name field specifies the name of
the module. The file-name field specifies the name of the file from which
you loaded the application.


dq ─ Dump Task Queue
────────────────────────────────────────────────────────────────────────────


Syntax

  dq

This command displays a list containing information about the various task
queues supported by the system. The list has the following form:

  task-descriptor-block  stack-segment:stack-pointer number-of-events
priority internal-messaging-information module

The task-descriptor-block field specifies the selector or segment address.
The task descriptor block is identical to the "pdb."The
stack-segment:stack-pointer field specifies the stack segment and pointer.
The number-of-events field specifies the number of events waiting for the
segment. The priority field specifies the priority of the segment. The
internal-messaging-information field specifies information about internal
messages. The module field specifies the module name.


ds ─ Dump Short Reals
────────────────────────────────────────────────────────────────────────────


Syntax

  ds «range»

This command displays the hexadecimal and decimal values of the short
(4-byte) floating-point numbers in the given range. Each display line shows
the address of the floating-point number, the hexadecimal values of the
bytes in the number, and the decimal value of the number.


dt ─ Dump Ten-Byte Reals
────────────────────────────────────────────────────────────────────────────


Syntax

  dt «range»

This command displays the hexadecimal and decimal values of the 10-byte
floating-point numbers in the given range. Each display line shows the
address of the floating-point number, the hexadecimal values of the bytes in
the number, and the decimal value of the number.


du ─ Display Global LRU List
────────────────────────────────────────────────────────────────────────────


Syntax

  du

This command displays a list of the least-recently-used (LRU) global memory
objects in the global heap. The list has the following form:

  segment-address: size segment-type owner «handle flags chain»

The segment-address field specifies the segment address of the first byte of
the memory object. The size field specifies the size in paragraphs
(multiples of 16 bytes) of the object. The segment-type field specifies the
type of object. The type can be any one of the following:

Segment Type                      Meaning
────────────────────────────────────────────────────────────────────────────
CODE                              Segment contains program code.

DATA                              Segment contains program data and
                                  possible stack and local heap data.

FREE                              Segment belongs to pool of free memory
                                  objects ready for allocation by an
                                  application.

PRIV                              Segment contains private data.

SENTINAL                          Segment marks the beginning or end of
                                  the global heap.

The owner field specifies the module name of the application or library that
allocated the memory object. The name "pdb" is used for memory objects that
represent program descriptor blocks. These blocks contain execution
information about applications.

The handle field specifies the handle of the global memory object.

The flags field specifies D, which means the segment is moveable and
discardable.

The chain field specifies the previous and next segment addresses in the LRU
list.


dw ─ Dump Words
────────────────────────────────────────────────────────────────────────────


Syntax

  dw «range»

This command displays the hexadecimal values of the words (2-byte values) in
the given range. Each display line shows the address of the first word in
the line and up to eight hexadecimal word values.


e ─ Enter
────────────────────────────────────────────────────────────────────────────


Syntax

  e address «list»

This command enters one or more values into memory. The size of the value
entered depends on the most recently used Enter command. (Enter commands are
e, ea, eb, ed, el, es, et, and ew.) The default is eb (bytes). If no list is
given, the command displays the value at address and prompts for a new
value. If list is given, the command replaces the value at address and at
each subsequent address until all values in the list have been used.


ea ─ Enter Address
────────────────────────────────────────────────────────────────────────────


Syntax

  ea address «list»

This command enters an ASCII string into memory. If no list is given, the
command displays the byte at address and prompts for a replacement. If list
is given, the command replaces the bytes at address, then displays the next
byte and prompts for a replacement.


eb ─ Enter Bytes
────────────────────────────────────────────────────────────────────────────


Syntax

  eb address «list»

This command enters one or more byte values into memory. If list is given,
the command replaces the byte at address and bytes at each subsequent
address until all values in the list have been used. If no list is given,
the command displays the byte at address and prompts for a new value. To
skip to the next byte, enter a new value or press the SPACEBAR. To move back
to the previous byte, type a hyphen (-). To exit from the command, press
ENTER.


ed ─ Enter Doublewords
────────────────────────────────────────────────────────────────────────────


Syntax

  ed address «value»

This command enters a doubleword value into memory. If no value is given,
the command displays the doubleword at address and prompts for a
replacement. If value is given, the  command replaces the doubleword at
address, then displays the next doubleword and prompts for a replacement.
Doublewords must be typed as two words separated by a colon.


el ─ Enter Long Reals
────────────────────────────────────────────────────────────────────────────


Syntax

  el address «value»

This command enters a long-real value into memory. If no value is given, the
command displays the long-real value at address and prompts for a
replacement. If value is given, the command replaces the long-real value at
address, then displays the next long-real value and prompts for a
replacement.


es ─ Enter Short Reals
────────────────────────────────────────────────────────────────────────────


Syntax

  es address «value»

This command enters a short-real value into memory. If no value is given,
the command displays the short-real value at address and prompts for a
replacement. If value is given, the command replaces the short-real value at
address, then displays the next short-real value and prompts for a
replacement.


et ─ Enter Ten-Byte Reals
────────────────────────────────────────────────────────────────────────────


Syntax

  et address «value»

This command enters a 10-byte real value into memory. If no value is given,
the command displays the 10-byte real value at address and prompts for a
replacement. If value is given, the command replaces the 10-byte real value
at address, then displays the next 10-byte real value and prompts for a
replacement.


ew ─ Enter Words
────────────────────────────────────────────────────────────────────────────


Syntax

  ew address «value»

This command enters a word value into memory. If no value is given, the
command displays the word at address and prompts for a replacement. If value
is given, the command replaces the word at address, then displays the next
word and prompts for a replacement.


f ─ Fill
────────────────────────────────────────────────────────────────────────────


Syntax

  f range list

This command fills the addresses in the given range with the values in list.
If range specifies more bytes than the number of values in the list, the
list is repeated until all bytes in the range are filled. If list has more
values than the number of bytes in the range, the command ignores any extra
values.


g ─ Go
────────────────────────────────────────────────────────────────────────────


Syntax

  g «= startaddress» «breakaddress»...

This command passes execution control to the program at the given
startaddress. Execution continues to the end of the program or until break
address is encountered. The program also stops at any breakpoints set using
the bp command. If no startaddress is given, the command passes execution to
the address specified by the current values of the CS and IP registers. If
breakaddress is given, it must specify an instruction address (that is, the
address must contain the first byte of an instruction). Up to 10 break
addresses, in any order, can be given at one time.


h ─ Hex
────────────────────────────────────────────────────────────────────────────


Syntax

  h value1 value2

This command displays the sum and difference of two hexadecimal numbers,
value1 and value2.


i ─ Input
────────────────────────────────────────────────────────────────────────────


Syntax

  i value

This command reads and displays one byte from the input port specified by
value. The value parameter can specify any 16-bit port address.


k ─ Backtrace Stack
────────────────────────────────────────────────────────────────────────────


Syntax

  k «value»

This command displays the current stack frame. Each line shows the name of a
procedure, its arguments, and the address of the statement that called it.
The command displays two 2-byte arguments by default. If value is given, the
command displays that many 2-byte arguments. Using the k command at the
beginning of a function (before the function prolog has been executed) will
give incorrect results. The command uses the BP register to compute the
current backtrace, and this register is not correctly set for a function
until its prolog has been executed.


kt ─ Backtrace Task Stack
────────────────────────────────────────────────────────────────────────────


Syntax

  kt pdb «value»

This command displays the stack frame of the program specified by pdb. Each
line shows the name of a procedure, its arguments, and the address of the
statement that called it. The command displays two 2-byte arguments by
default. If value is given, the command displays that many 2-byte arguments.
The pdb parameter must specify the segment address of the program descriptor
block for the task to be traced.

To obtain the pdb value, use the dq (Dump Task Queue) command.


kv ─ Verbose Backtrace Stack
────────────────────────────────────────────────────────────────────────────


Syntax

  kv «value»

This command displays information that the k (Backtrace Stack) command
provides, plus information about stack location and frame pointer values for
each frame.


l ─ Load
────────────────────────────────────────────────────────────────────────────


Syntax

  l «address «drive record count» »

This command copies the contents of a named file or the contents of a given
number of logical disk records into memory. The contents are copied to
address or to a default address, and the BX:CX register pair is set to the
number of bytes loaded.

To load a file, set the filename using the n command (otherwise, SYMDEB uses
whatever name is currently at location DS:5C). If address is not given,
SYMDEB copies bytes to CS:100. If the named file has an .EXE extension, the
l command adjusts the load address to the address given in the .EXE file
header. The command strips any header information from an .EXE file before
loading. If the named file has an .HEX extension, the l command adds that
file's start address to address before loading the file.

To load logical records from a disk, set drive to 0 (drive A), 1 (drive B),
or 2 (drive C). Set record to the first logical record to be read (any one-
to four-digit hexadecimal number). Set count to the number of records to
read (any one- to four-digit hexadecimal number).


m ─ Move
────────────────────────────────────────────────────────────────────────────


Syntax

  m range address

This command moves the block of memory specified by range to the location
starting at address. All moves are guaranteed to be performed without data
loss.


mid─ Macro
────────────────────────────────────────────────────────────────────────────


Syntax

  mid«= command-string»

This command defines or executes a SYMDEB command macro. The id parameter
identifies the macro to be defined or executed. There are 10 macros,
numbered 0 through 9. If command-string is specified, the command assigns
the SYMDEB commands given in the string to the macro. If no string is given,
the command executes the commands currently assigned to the macro. Macros
are initially empty unless the /@ option is used when the Symbolic Debugger
is started. This option reads a set of macro definitions from a specified
file.


n ─ Name
────────────────────────────────────────────────────────────────────────────


Syntax

  n «filename» «arguments»

This command sets the filename for subsequent l and w commands, or sets
program arguments for subsequent execution of a loaded program. If filename
is given, all subsequent l and w commands will use this name when accessing
disk files. If arguments is given, the command copies all arguments,
including spaces, to the memory location starting at DS:81 and sets the byte
at DS:80 to a count of the total number of characters copied. If the first
two arguments are also filenames, the command creates file control blocks at
addresses DS:5C and DS:6C and copies the names (in proper format) to these
blocks.


o ─ Output
────────────────────────────────────────────────────────────────────────────


Syntax

  o value byte

This command sends the given byte to the output port specified by value. The
value parameter can specify any 16-bit port address.


p ─ Program Step
────────────────────────────────────────────────────────────────────────────


Syntax

  p «=startaddress» «value»

This command executes an instruction, then displays the current values of
all registers and flags. If startaddress is given, the command starts
execution at the given address. Otherwise, it starts execution at the
instruction pointed to by the current CS and IP registers. If value is
given, the command executes value number of instructions before stopping.
The command automatically executes and returns from any call instructions or
software interrupts it encounters, leaving execution control at the next
instruction after the call or interrupt.


q ─ Quit
────────────────────────────────────────────────────────────────────────────


Syntax

  q

This command terminates SYMDEB execution and returns control to DOS.


r ─ Register
────────────────────────────────────────────────────────────────────────────


Syntax

  r «register« «= »value» »

This command displays the contents of CPU registers and allows the contents
to be changed to new values.

If no register is specified, the command displays all registers, all flags,
and the instruction at the address pointed to by the current CS and IP
register values. If register is specified, the command displays the current
value of the register and prompts for a new value. If both register and
value are specified, the command changes the register to the specified
value.


s ─ Search
────────────────────────────────────────────────────────────────────────────


Syntax

  s range list

This command searches the given range of memory locations for the byte
values given in list. The command displays the address of each byte found.


Set Source Mode
────────────────────────────────────────────────────────────────────────────


Syntax

  s-
  s&
  s+

These commands set the display mode for commands that display instruction
code.


  ■   If s- is given, SYMDEB disassembles and displays the instruction code
      in memory.

  ■   If s& is given, SYMDEB displays both the actual program source line
      and the disassembled code.

  ■   If s+ is given, SYMDEB displays the actual program source line
      corresponding to the instruction to be displayed.


To access a source file for the first time, SYMDEB might display the
following prompt:

  Source file name for mapname(cr for none)?

In such cases, type the name, including extension, of the source file
corresponding to the symbol file mapname.


t ─ Trace
────────────────────────────────────────────────────────────────────────────


Syntax

  t «= startaddress» «value»

This command executes an instruction, then displays the current values of
all registers and flags. If startaddress is given, the command starts
execution at the given address. Otherwise, it starts execution at the
instruction pointed to by the current CS and IP registers. If value is
given, the command continues to execute value number of instructions before
stopping. In source-only (s+) mode, t operates directly on source lines. The
t command can be used to trace instructions in ROM.


u ─ Unassemble
────────────────────────────────────────────────────────────────────────────


Syntax

  u «range»

This command displays the instructions and/or statements of the program
being debugged. The s command sets the display format. If range is given,
the command displays instructions generated from code within the given
range. Otherwise, the command displays the instructions generated from the
first eight lines of code at the current address. The 80286 protected-mode
mnemonics cannot be displayed.


v ─ View
────────────────────────────────────────────────────────────────────────────


Syntax

  v range

This command displays source lines beginning at the specified range. The
symbol file must contain line-number information.


w ─ Write
────────────────────────────────────────────────────────────────────────────


Syntax

  w «address «drive record count» »

This command writes the contents of a given memory location to a named file,
or to a given logical record on disk. To write to a file, set the filename
with an n command, and set the BX:CX register pair to the number of bytes to
be written. If no address is given, the command copies bytes starting from
the address CS:100, where CS is the current value of the CS register.

To write to a logical record on disk, set drive to any number in the range
zero (drive A) to 2 (drive C), set record to the first logical record to
receive the data (a one- to four-digit hexadecimal number), and set count to
the number of records to write to the disk (a one- to four-digit hexadecimal
number). Do not write data to an absolute disk sector unless you are sure
the sector is free; otherwise, you may destroy data.


x ─ Examine Symbol Map
────────────────────────────────────────────────────────────────────────────


Syntax

  x «* | ? symbol»

This command displays the name and load-segment addresses of the current
symbol map, segments in that map, and symbols within those segments.

If no parameter is given, the command displays the current symbol map name
and the segments within that map. If the asterisk (*) is specified, the
command displays the names and load-segment addresses for all currently
loaded symbol maps. If ? is specified, the command displays all symbols
within the given symbol map that match the symbol specification. A symbol
specification has the following form:

  «mapname!» «segmentname:]] «symbolname»

If mapname! is given, the command displays information for that symbol map.
The mapname parameter must specify the filename (without extension) of the
corresponding symbol file.

If segmentname: is given, the command displays the name and load-segment
address for that segment. The segmentname parameter must specify the name of
a segment named within the specified or currently open symbol map.

If symbolname is given, the command displays the segment address and segment
offset for that symbol. The symbolname parameter must specify the name of a
symbol in the given segment.

To display information about more than one segment or symbol, enter a
partial segmentname or symbolname ending with an asterisk (*). The asterisk
acts as a wildcard character.


xo ─ Open Symbol Map
────────────────────────────────────────────────────────────────────────────


Syntax

  xo «symbol!»

This command sets the active symbol map and/or segment. If symbol! is given,
the command sets the active symbol map to the given map. The symbol
parameter must specify the filename (without extension) of one of the symbol
files specified in the SYMDEB command line.  A map file can be opened only
if it was loaded by providing its name in the SYMDEB command line.


z ─ Set Symbol Value
────────────────────────────────────────────────────────────────────────────


Syntax

  z symbol value

This command sets the address of symbol to value.


? ─ Display Help
────────────────────────────────────────────────────────────────────────────


Syntax

  ?

This command displays a list of all SYMDEB commands and operators.


? ─ Display Expression
────────────────────────────────────────────────────────────────────────────


Syntax

  ? expression

This command displays the value of expression. The display includes a full
address, a 16-bit hexadecimal value, a full 32-bit hexadecimal value, a
decimal value (enclosed in parentheses), and a string value (enclosed in
double quotation marks). The expression parameter can specify any
combination of numbers, symbols, addresses, and operators.


. ─ Source-Line Display
────────────────────────────────────────────────────────────────────────────


Syntax

  .

This command displays the current source line.


Redirect Input
────────────────────────────────────────────────────────────────────────────


Syntax

  <filename
  { filename

The  command causes SYMDEB to read all subsequent command input from the
specified file. The { command reads all input for the debugged program from
the specified file.


Redirect Output
────────────────────────────────────────────────────────────────────────────


Syntax

  >filename
  }filename

The > command causes SYMDEB to write all subsequent command output to the
specified file. The } command writes all output from the debugged program to
the specified file.


Redirect Input and Output
────────────────────────────────────────────────────────────────────────────


Syntax

  = =filename
  ~ filename

The = = command causes SYMDEB to both read from and write to the device
specified in the filename. The ~ command causes the debugged program to both
read from and write to the given device.


! ─ Shell Escape
────────────────────────────────────────────────────────────────────────────


Syntax

  ! «dos-command»

This command passes control to COMMAND.COM, the DOS command processor,
letting the user carry out DOS commands. The DOS EXIT command returns
control to SYMDEB. If dos-command is given, SYMDEB passes the command to
COMMAND.COM for execution, then receives control back as soon as the command
is completed.


* ─ Comment
────────────────────────────────────────────────────────────────────────────


Syntax

  *comment

This command echoes comment on the screen (or other output device).






Chapter 9  Advanced Debugging in Protected Mode: 80386 Debugger
────────────────────────────────────────────────────────────────────────────

Microsoft Windows 80386 Debugger (WDEB386) is used to test and debug Windows
applications and dynamic-link libraries (DLLs) running in standard or 386
enhanced mode, but not in real mode. It runs only on systems with an Intel
80386 CPU. The debugger provides commands that allow the operator to inspect
and manipulate test code and environment status, install breakpoints, and
perform other debugging operations.

WDEB386 offers debugging features not available in CodeView for Windows
(CVW), but lacks the the convenient character-oriented window interface of
CVW.

To use the debugger, a serial terminal must be connected to the system
running the debugger and test program. The terminal connection requirements
are described in Section 9.2, "Starting the Debugger."

This chapter describes the following:


  ■   Preparing symbol files

  ■   Starting the 80386 Debugger

  ■   How the 80386 Debugger traps a failed application

  ■   Debugger command format

  ■   Common WDEB386 commands

  ■   WDEB386 commands used with Windows in 386 enhanced mode



9.1  Preparing Symbol Files for the 80386 Debugger

Application symbol files should be prepared for the debugger in the same way
as the files are prepared for the Symbolic Debugger (SYMDEB).


  1.  Compile your C source files with the -Zd option.

      This will prepare the object files for use by the 80386 Debugger.

  2.  Run LINK to link these object files.

      WDEB386 does not use line number information, so you need not use the
      /linenumbers option.

  3.  Run the MAPSYM program to create an application symbol file for the
      debugger.



9.2  Starting the Debugger

The command line options are:

  WDEB386 «/C: {1 | 2 | 3 | 4}» «/V«P»» «/S: symfilespec»... winfilespec
«parameters»

For example, the following typical commands are valid:

  WDEB386 /V /S:\windows\system\krnl286.sym /S:myapp.sym \windows\win.com /s
myapp

  WDEB386 /C:1 /S:krnl386.sym /s:user.sym /S:\myapp\myapp.sym
\windows\win.com /3 myapp

Use the /C: option to specify a COM port for debugger output. If no COM port
option is specified, then the debugger checks first for COM2, and if not
found, then checks for COM1. If neither COM1 nor COM2 exists, the debugger
will look for any other COM port in the ROM data area (40:0). A three-wire
null modem cable is all that is needed for terminal connection (no DTR/CTS
handshaking is used).

The /V and /VP options enable Verbose mode, which displays messages
indicating which segments are loading. /V displays the messages for both
Windows in 386 enhanced mode and for Windows applications; /VP displays the
messages for applications only.

Use the /S: option to specify a symbol file to be loaded. These switches are
optional and can be repeated. If the symbol files are not in your current
directory, you must supply a full pathname for the symbol files. WDEB386
does not use the PATH environment variable to locate any of the files
supplied on the command line.

When memory is low, you can use more symbol files by running the 80386
Debugger in the Windows directory and specifying the full pathname of
WIN386.EXE (such as \WINDOWS\SYSTEM\WIN386.EXE) instead of WIN.COM.

A program specification is required, and any characters after the program
specification are passed to the program as parameters.

────────────────────────────────────────────────────────────────────────────
NOTE

The 80386 Debugger does not display your source lines.
────────────────────────────────────────────────────────────────────────────


9.3  When an Application Fails

If a Windows application running in standard or 386 enhanced mode attempts
to read or write memory using a bad selector, beyond a selector limit, or
with a selector set to 0, then a general protection (GP) fault occurs.

Windows in 386 enhanced mode traps this fault and causes the debugger to
display something like the following:

  GENERAL PROTECTION VIOLATION
  AX=xxxxxxxx BX=xxxxxxxx CX=xxxxxxxx DX=xxxxxxxx SI=xxxxxxxx DI=xxxxxxxx
  IP=00000FA0  SP=xxxxxxxx  BP=xxxxxxxx  CR2=xxxxxxxx  CR3=xxxx  IOPL=3  F=─
─
  CS=00AD SS=xxxx DS=xxxx ES=xxxx FS=xxxx GS=xxxx ─ NV UP EI PL ZR NA PE NC
  00AD:00000FA0  MOV BX, WORD PTR ES:[BX]

You can determine the cause of the fault by looking at the value and the
limit of the selector by dumping the LDT entry with the command:

  DL selector

The ability to continue execution depends on the cause of the fault. If the
fault was caused by reading or writing beyond the selector limit, then
sometimes it is possible to skip the instruction by incrementing the IP,
using:

  R IP
  IP=xxxx
  :

You might have to disassemble the instruction with code bytes shown to
determine how many bytes it contains. To do this, use the following
commands:

  Y CODEBYTES
  R

If the fault is caused by a critical logic error, such as trying to use a
selector for a temporary variable, then there probably is no way to continue
execution of the application. Rebooting the machine may be the only option.



9.4  Debugger Command Format

Each debugger command consists of one or two letters, usually followed by
one or more parameters. These commands and parameters are not
case-sensitive.

If a syntax error occurs in a debugger command, the debugger redisplays the
command line and indicates the error with a caret (^) and the word "Error,"
as in the following example:

  A100
   ^ Error


9.4.1  Command Keys

The following is a list of command keys:

╓┌───────────┌───────────────────────────────────────────────────────────────╖
Key         Action
────────────────────────────────────────────────────────────────────────────
CONTROL+C   Halts debugger output and returns to the debugger prompt.
CONTROL+S   Freezes a 80386 Debugger display.
CONTROL+Q   Restarts the display.


CONTROL+S and CONTROL+Q are ignored if the target system is executing code.



9.4.2  Command Parameters

You can separate 80386 Debugger command parameters with delimiters (spaces
or commas), but the only required delimiter is between two consecutive
hexadecimal values. The following commands are equivalent:

  dCS:100 110
  d CS:100 110
  d,CS:100,110

────────────────────────────────────────────────────────────────────────────
NOTE

Selector is the term used to indicate the value in a segment register while
in protected mode. Segment is the equivalent in real mode. Although the
following discussion uses selector, the discussion applies to segments as
well.
────────────────────────────────────────────────────────────────────────────

The following describes the parameters you can use with the 80386 Debugger
commands:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
addr                              Represents an address parameter in one
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
addr                              Represents an address parameter in one
                                  of two forms. The first form contains
                                  either an alphabetic selector register
                                  or a four-digit selector address, and an
                                  offset value. The second form is a
                                  physical address using the % operator.
                                  You can omit the selector name or
                                  selector address, in which case the
                                  default selector is DS. This default
                                  selector is used for all commands except
                                  g, p, t, and u. The default selector for
                                  these commands is CS. All numeric values
                                  are hexadecimal. Example addresses
                                  include:

                                  CS:0100
                                  04BA:0100

                                  A colon is required between the selector
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  A colon is required between the selector
                                  name (whether numeric or alphabetic) and
                                  the offset value. The selector portion
                                  is treated as a selector or segment as
                                  appropriate for the current processor
                                  mode (protected or real) unless
                                  specifically overridden by the # or &
                                  operator.

byte                              Specifies a 2-digit hexadecimal value.

cmds                              Specifies an optional set of debugger
                                  commands to be executed with the bp (Set
                                  Breakpoints) or j (Conditional Execute)
                                  commands.

dword                             Represents an 8-digit (4-byte)
                                  hexadecimal value. A DWORD is most
                                  commonly used as a physical address.
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  commonly used as a physical address.

expr                              Represents a combination of parameters
                                  and operators that evaluates to an 8, 16,
                                  or 32-bit value. An expr parameter can
                                  be used as a value in any command. An
                                  expr parameter can combine any symbol,
                                  number, or address with any of the
                                  binary and unary operators.

group-name                        Specifies the name of a group that
                                  contains the map symbols you want to
                                  display.

list                              Specifies a series of byte values or a
                                  string. The list parameter must be the
                                  last parameter on the command line.
                                  Following is an example of the f (Fill)
                                  command using a list parameter:
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  command using a list parameter:

                                  fCS:100 42 45 52 54 41

map-name                          Specifies the name of a symbol map file.

range                             Contains two addresses (addr addr) or
                                  one address, an L, and a value (addr L
                                  word, where word is the number of items
                                  on which the command should operate; L
                                  80 is the default). Sample ranges
                                  include:

                                  CS:100 110
                                  CS:100 L 10
                                  CS:100

                                  The limit for range is 10000
                                  (hexadecimal). To specify a word of
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  (hexadecimal). To specify a word of
                                  10000 using only four digits, use 0000
                                  or 0.

reg                               Specifies the name of a microprocessor
                                  register.

string                            Represents any number of characters
                                  enclosed in single (") or double ("")
                                  quotation marks. If the quotation marks
                                  must appear within a string, you must
                                  use two sets of quotation marks. For
                                  example, the following strings are
                                  legal:

                                  'This ''string'' is OK.'
                                  "This ""string"" is OK."

                                  However, the following strings are
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  However, the following strings are
                                  illegal:

                                  "This "string" is not OK."
                                  "This 'string' is not OK."

                                  The ASCII values of the characters in
                                  the string are used as a list of byte
                                  values.

word                              Specifies a 4-digit (2-byte) hexadecimal
                                  value.




9.4.3  Binary and Unary Operators

The following list contains, in descending order of precedence, the binary
operators that can be used in 80386 Debugger commands.

╓┌───────────────┌───────────────────────────────────────────────────────────╖
Operator        Meaning
────────────────────────────────────────────────────────────────────────────
( )             Parentheses
:               Address binder
*               Multiplication
/               Integer division
MOD             Modulus (remainder)
++              Addition
-               Subtraction
>               Greater-than relational operator
<               Less-than relational operator
>=              Greater-than/equal-to relational operator
<=              Less-than/equal-to relational operator
==              Equal-to relational operator
!=              Not-equal-to relational operator
AND             Bitwise Boolean AND
XOR             Bitwise Boolean exclusive OR
OR              Bitwise Boolean OR
Operator        Meaning
────────────────────────────────────────────────────────────────────────────
OR              Bitwise Boolean OR
&&              Logical AND
|- |-||         Logical OR


The following list contains, in descending order of precedence, the unary
operators that can be used in 80386 Debugger commands.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Operator                          Meaning
────────────────────────────────────────────────────────────────────────────
&(seg)                            Interpret address using segment value

#(sel)                            Interpret address using selector value

%%(phy)                           Interpret address as a physical value

%(lin)                            Interpret address as a linear value

Operator                          Meaning
────────────────────────────────────────────────────────────────────────────

-                                 Two's complement

!                                 Logical NOT operator

NOT                               One's complement

SEG                               Segment address of operand

OFF                               Address offset of operand

BY                                Low-order byte from given address

WO                                Low-order word from given address

DW                                Doubleword from given address

POI                               Pointer (4 bytes) from given
                                  address─this operator only works with
Operator                          Meaning
────────────────────────────────────────────────────────────────────────────
                                  address─this operator only works with
                                  16:16 addresses

PORT                              1 byte from given port

WPORT                             Word from given port




9.5  Common Command Directory

This section documents the commands available in all environments using the
80386 Debugger. These commands are usually one or two alphabetical
characters, though some are characters preceded by a period (called "dot"
commands).

This section consists of a listing of commands and brief descriptions
followed by detailed descriptions of the commands, including syntax,
purpose, input parameters and examples.

╓┌───────────────┌───────────────────────────────────────────────────────────╖
Command         Description
────────────────────────────────────────────────────────────────────────────
?               Display expression
?               Display help
.?              Display external commands
.b              Set COM port baud rate
.df             Display global free list
.dg             Display global heap
.dh             Display local heap
.dm             Display global module list
.dq             Dump task queue
.du             Display global LRU list
.reboot         Reboot target system
bc              Clear breakpoints
bd              Disable breakpoints
be              Enable breakpoints
bl              List breakpoints
bp              Set breakpoints
Command         Description
────────────────────────────────────────────────────────────────────────────
bp              Set breakpoints
c               Compare memory
d               Display memory
db              Display bytes
dd              Display doublewords
dg              Display GDT
di              Display IDT
dl              Display LDT
dt              Display TSS
dw              Display words
e               Enter byte
f               Fill memory
g               Go
h               Hexadecimal arithmetic
i               Input byte
j               Conditional execute
k               Backtrace stack
ka              Set backtrace arguments
kt              Backtrace task stack
Command         Description
────────────────────────────────────────────────────────────────────────────
kt              Backtrace task stack
kv              Verbose backtrace stack
la              List absolute symbols
lg              List groups
lm              List map
ln              List near
ls              List symbols
m               Move memory
o               Output to port
p               Program trace
r               Display registers
s               Search bytes
t               Trace instructions
u               Unassemble bytes
v               Set interrupt vector trapping
vl              Display interrupt trapping information
w               Change map
y               Debugger configuration options
z               Zap embedded INT 1 and INT 3 instructions
Command         Description
────────────────────────────────────────────────────────────────────────────
z               Zap embedded INT 1 and INT 3 instructions
zd              Execute default command string
zl              Display default command string
zs              Change default command string






? ─ Display Expression
────────────────────────────────────────────────────────────────────────────


Syntax

  ? expr | "string"

The ? command displays the value of a specified expression or string. An
expression is first evaluated and then displayed in hexadecimal, decimal,
octal, and binary format. The debugger also displays an ASCII character
representation of the evaluated expression, a physical address
interpretation, and whether the expression is TRUE or FALSE.

Strings enclosed in quotation marks are echoed to the screen.

The expression evaluator provides support for three types of addresses: real
mode (%selector:offset), protected mode (#selector:offset), and physical
address (DWORD). The &, #, and % characters override the current address
type, allowing selectors to be used in real mode, segments to be used in
protected mode, and so on. The % character converts other addresses to
physical addresses.

╓┌──────────┌───────────────────────────────┌────────────────────────────────╖
Parameter  Description
────────────────────────────────────────────────────────────────────────────
expr       Specifies any combination of
           numbers, addresses, and
           operators. If expr is not
           specified, this command will
Parameter  Description
────────────────────────────────────────────────────────────────────────────
           specified, this command will
           print help messages. The
           following key words can be
           used with the expression:

           Key Word                        Description

           reg                             Returns the value of reg, where
                                           reg is one of the following
                                           registers: AX, BX, CX, DX, SI,
                                           DI, BP, DS, ES, SS, CS, SP, or
                                           IP

           FLG                             Returns the value of the flags

           GDTB                            Returns the value of the GDT
                                           base as a physical address

           GDTL                            Returns the value of the GDT
Parameter  Description
────────────────────────────────────────────────────────────────────────────
           GDTL                            Returns the value of the GDT
                                           limit

           IDTB                            Returns the value of the IDT
                                           base as a physical address

           IDTL                            Returns the value of the IDT
                                           limit

           TR                              Returns the value of the TR
                                           register

           LDTR                            Returns the value of the LDTR
                                           register

           MSW                             Returns the value of the MSW
                                           register

           The @ character can be used
Parameter  Description
────────────────────────────────────────────────────────────────────────────
           The @ character can be used
           with any of the register names
           to ensure that the expression
           evaluator interprets the name
           as a register instead of a
           symbol (for example, @AX is
           the same as AX).

string     Specifies a sequence of
           characters enclosed in single
           or double quotation marks.




Examples

  ?%(#001F:0220)

This example looks up selector 1F's physical address in the current LDT and
adds 220 to it.

  ? ds:si+bx

This example displays the value of the expression DS:SI + BX. The debugger
returns a display similar to the following:

  2038:4278 540557944T 40160411700Q 0100001001111000Y 'X' %0245F8 TRUE

  ? 3*4

This example displays the value of the arithmetic expression 3*4. The
debugger returns the following display:

  0CH 12T 14Q 00001100Y '.' %00000C TRUE

  bp1 100 "r;d 200;? 'BP 1 REACHED'"

This example is used in a bp (Set Breakpoint) command to announce a
breakpoint number.


? ─ Display Help Menu
────────────────────────────────────────────────────────────────────────────


Syntax

  ?

The ? command displays a list of commands and syntax recognized by the
debugger.


.? ─ Display External Commands
────────────────────────────────────────────────────────────────────────────


Syntax

  .?

The .? command displays a list of external commands. These commands are part
of the debugger, but are specific to the environment in which the debugger
is running.


.b ─ Set COM Port Baud Rate
────────────────────────────────────────────────────────────────────────────


Syntax

  .b baud-rate «port-addr»

The .b command sets the baud rate for the debugging port (COM2).

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
baud-rate                         Specifies one of the following values:
                                  150, 300, 600, 1200, 2400, 4800, 9600,
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  150, 300, 600, 1200, 2400, 4800, 9600,
                                  or 19200. Since the default radix for
                                  the debugger is 16, you must include a
                                  "t" after the number to indicate decimal
                                  values.

port-addr                         Can be 1 for COM1, 2 for COM2; anything
                                  else is taken as a base port address.
                                  During initialization, if there is no
                                  COM2, the debugger checks for COM1 and
                                  then any other COM port address in the
                                  ROM data area, and uses it as the
                                  console.




Example

  #.b 1200t

This example sets the baud rate to 1200.


.df ─ Display Global Free List
────────────────────────────────────────────────────────────────────────────


Syntax

  .df

The .df command displays a list of the free global memory objects in the
global heap. The list has the following form:

  address: size owner «chain»

The address field specifies the selector of the memory in standard mode. In
386 enhanced mode, the address field specifies physical and heap addresses.


The size field specifies the size in paragraphs (multiples of 16 bytes) of
the object in standard mode. In 386 enhanced mode, the size field specifies
the size of the object in bytes.

The owner field always specifies that the module is free.

The chain field specifies the previous and next addresses in the LRU list.
WDEB386 displays the addresses only if the segment is moveable and
discardable.


.dg ─ Display Global Heap
────────────────────────────────────────────────────────────────────────────


Syntax

  .dg «object»

The .dg command displays a list of the global memory objects in the global
heap.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
object                            Specifies the first object to be listed.
                                  The object parameter can be a handle,
                                  selector, or (in 386 enhanced mode) a
                                  heap address.



The list has the following form:

  address: size segment-type owner «handle flags chain»

The address field specifies the selector of the memory in standard mode. In
386 enhanced mode, the address field specifies physical and heap addresses.


The size field specifies the size in paragraphs (multiples of 16 bytes) of
the object in standard mode. In 386 enhanced mode, the size field specifies
the size of the object in bytes.

The segment-type field specifies the type of object. The type can be any one
of the following:

Segment Type                      Meaning
────────────────────────────────────────────────────────────────────────────
CODE                              Segment contains program code.

DATA                              Segment contains program data and
                                  possible stack and local heap data.

FREE                              Segment belongs to pool of free memory
                                  objects ready for allocation by an
                                  application.

PRIV                              Segment contains private data.

SENTINAL                          Segment marks the beginning or end of
                                  the global heap.

The owner field specifies the module name of the application or library that
allocated the memory object. The name "pdb" is used for memory objects that
represent program descriptor blocks. These blocks contain execution
information about applications.

The handle field specifies the handle of the global memory object. If
WDEB386 displays no handle, the segment is fixed.

The flags field specifies the following:

Flag                              Meaning
────────────────────────────────────────────────────────────────────────────
D                                 The segment is moveable and discardable.

L                                 The segment is locked. If the segment is
                                  locked, the lock count appears to the
                                  right of the flag.

If WDEB386 displays a handle, but no flag, the segment is moveable but
nondiscardable.

The chain field specifies the previous and next addresses in the LRU list.
WDEB386 displays the addresses only if the segment is moveable and
discardable (the D flag).


.dh ─ Display Local Heap
────────────────────────────────────────────────────────────────────────────


Syntax

  .dh

The .dh command displays a list of the local memory objects in the local
heap (if any) belonging to the current data segment. The command uses the
current value of the DS register to locate the data segment and check for a
local heap. The list of memory objects has the following form:

  offset: size { BUSY | FREE }

The offset field specifies the address offset from the beginning of the data
segment to the local memory object.

The size field specifies the size of the object in bytes.

If BUSY is given, the object has been allocated and is currently in use. If
FREE is given, the object is in the pool of free objects ready to be
allocated by the application. A special memory object, SENTINAL, may also be
displayed.


.dm ─ Display Global Module List
────────────────────────────────────────────────────────────────────────────


Syntax

  .dm

The .dm command displays a list of the global modules in the global heap.
The list has the following form:

  module-handle module-type module-name file-name

The module-handle field specifies the handle of the module. The module-type
field specifies either a dynamic-link library (DLL) or the name of the
application you are debugging. The module-name field specifies the name of
the module. The file-name field specifies the name of the file from which
you loaded the application.


.dq ─ Dump Task Queue
────────────────────────────────────────────────────────────────────────────


Syntax

  .dq

The .dq command displays a list containing information about the various
task queues supported by the system. The list has the following form:

  task-descriptor-block  stack-segment:stack-pointer number-of-events
priority internal-messaging-information module

The task-descriptor-block field specifies the selector or segment address.
The task descriptor block is identical to the "pdb."The
stack-segment:stack-pointer field specifies the stack segment and pointer.
The number-of-events field specifies the number of events waiting for the
segment. The priority field specifies the priority of the segment. The
internal-messaging-information field specifies information about internal
messages. The module field specifies the module name.


.du ─ Display Global LRU List
────────────────────────────────────────────────────────────────────────────


Syntax

  .du

The .du command displays a list of the least-recently-used (LRU) global
memory objects in the global heap. The list has the following form:

  address: size segment-type owner «handle flags chain»

The address field specifies the selector of the memory in standard mode. In
386 enhanced mode, the address field specifies physical and heap addresses.


The size field specifies the size in paragraphs (multiples of 16 bytes) of
the object in standard mode. In 386 enhanced mode, the size field specifies
the size of the object in bytes.

The segment-type field specifies the type of object. The type can be any one
of the following:

Segment Type                      Meaning
────────────────────────────────────────────────────────────────────────────
CODE                              Segment contains program code.

DATA                              Segment contains program data and
                                  possible stack and local heap data.

FREE                              Segment belongs to pool of free memory
                                  objects ready for allocation by an
                                  application.

PRIV                              Segment contains private data.

SENTINAL                          Segment marks the beginning or end of
                                  the global heap.

The owner field specifies the module name of the application or library that
allocated the memory object. The name "pdb" is used for memory objects that
represent program descriptor blocks. These blocks contain execution
information about applications.

The handle field specifies the handle of the global memory object.

The flags field specifies D, which means the segment is moveable and
discardable.

The chain field specifies the previous and next addresses in the LRU list.


.reboot ─ Reboot Target System
────────────────────────────────────────────────────────────────────────────


Syntax

  .reboot

The .reboot command causes the target system to reboot.


bc ─ Clear Breakpoints
────────────────────────────────────────────────────────────────────────────


Syntax

  bc {list | *}

The bc command removes one or more defined breakpoints.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
list                              Specifies any combination of integer
                                  values in the range 0-9. If you specify
                                  list, the debugger removes the specified
                                  breakpoints.

*                                 Clears all breakpoints.




Examples

  bc 0 4 8

Removes breakpoints 0, 4, and 8.

  bc *

Removes all breakpoints.


bd ─ Disable Breakpoints
────────────────────────────────────────────────────────────────────────────


Syntax

  bd {list | *}

The bd command temporarily disables one or more breakpoints. To restore
breakpoints disabled by the bd command, use the be (Enable Breakpoints)
command.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
list                              Specifies any combination of integer
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
list                              Specifies any combination of integer
                                  values in the range 0-9. If you specify
                                  list, the debugger disables the
                                  specified breakpoints.

*                                 Disables all breakpoints.




Examples

  bd 0 4 8

Disables breakpoints 0, 4, and 8.

  bd *

Disables all breakpoints.


be ─ Enable Breakpoints
────────────────────────────────────────────────────────────────────────────


Syntax

  be {list | *}

The be command restores (enables) one or more breakpoints that have been
temporarily disabled by a bd (Disable Breakpoints) command.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
list                              Specifies any combination of integer
                                  values in the range 0-9. If you specify
                                  list, the debugger enables the specified
                                  breakpoints.

Parameter                         Description
────────────────────────────────────────────────────────────────────────────

*                                 Enables all breakpoints.




Examples

  be 0 4 8

Enables breakpoints 0, 4, and 8.

  be *

Enables all breakpoints.


bl ─ List Breakpoints
────────────────────────────────────────────────────────────────────────────


Syntax

  bl

The bl command lists current information about all breakpoints created by
the bp (Set Breakpoints) command.


Examples

If no breakpoints are currently defined, the debugger displays nothing.
Otherwise, the breakpoint number, enabled status, breakpoint address, number
of passes remaining, initial number of passes (in parentheses), and any
optional debugger commands to be executed when the breakpoint is reached are
displayed on the screen, as in the following example:

  0 e 04BA:0100
  4 d 04BA:0503 4 (10)
  8 e 0D2D:0001 3 (3) "R;DB DS:SI"
  9 e xxxx:0012

In this example, breakpoints 0 and 8 are enabled (e), while 4 is disabled
(d). Breakpoint 4 had an initial pass count of 10 and has 4 remaining passes
to be taken before the breakpoint. Breakpoint 8 had an initial pass count of
3 and must make all 3 passes before it halts execution and forces the
debugger to execute the optional debugger commands enclosed in quotation
marks. Breakpoint 0 shows no initial pass count, which means it was set to
1.

Breakpoint 9 shows a virtual breakpoint (a breakpoint set in a segment that
has not been loaded into memory).


bp ─ Set Breakpoints
────────────────────────────────────────────────────────────────────────────


Syntax

  bp«n» addr «passcnt» «"cmds"»

The bp command creates a software breakpoint at an address. During program
execution, software breakpoints stop program execution and force the
debugger to execute the default or optional command string. Unlike
breakpoints created by the g (Go) command, software breakpoints remain in
memory until you remove them with the bc (Clear Breakpoints) command or
temporarily disable them with the bd (Disable Breakpoints) command.

The debugger allows up to 10 software breakpoints (0-9). If you specify more
than 10 breakpoints, the debugger returns a "Too Many Breakpoints" message.
The addr parameter is required for all new breakpoints.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
n                                 Specifies which breakpoint is being
                                  created. No space is allowed between the
                                  bp and n. If n is omitted, the first
                                  available breakpoint number is used.

addr                              Specifies any valid instruction address
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
addr                              Specifies any valid instruction address
                                  (the first byte of an instruction
                                  opcode).

passcnt                           Specifies the number of times the
                                  breakpoint is to be ignored before being
                                  executed. It can be any 16-bit value.

cmds                              Specifies an optional list of debugger
                                  commands to be executed in place of the
                                  default command when the breakpoint is
                                  reached. You must enclose optional
                                  commands in quotation marks, and
                                  separate optional commands with
                                  semicolons (;).




Examples

  bp 123

The first example creates a breakpoint at address CS:123.

  bp8 400:23 "db DS:SI"

This example creates breakpoint 8 at address 400:23 and executes a db
(Display Bytes) command.

  bp 100 10 "r;c100 L 100 300"

This example creates a breakpoint at address 100 in the current CS selector
and displays the registers before comparing a block of memory. The
breakpoint is ignored 16 (10H) times before being executed.


c ─ Compare Memory
────────────────────────────────────────────────────────────────────────────


Syntax

  c range addr

The c command compares one memory location against another memory location.


If the two memory areas are identical, the debugger displays nothing and
returns the debugger prompt. Differences, when they exist, are displayed as
follows:

  addr1 byte1 byte2 addr2

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the block of memory that is to
                                  be compared with a block of memory
                                  starting at addr.

Parameter                         Description
────────────────────────────────────────────────────────────────────────────

addr                              Specifies the starting address of the
                                  second block of memory.




Examples

The following two commands have the same effect. Each compares the block of
memory from 100H to 1FFH with the block of memory from 300H to 3FFH:

  c100 1FF 300

This first example specifies a range with a starting address of 100H and an
ending address of 1FFH. This block of memory is compared with a block of
memory of the same size starting at 300H.

  c100 L 100 300

The second example compares the same block of memory, but specifies the
range by using the L (length) option.


d ─ Display Memory
────────────────────────────────────────────────────────────────────────────


Syntax

  d «range»

The d command displays the contents of memory at a given address or in a
range of addresses. The d command displays one or more lines, depending on
the range given. Each line displays the address of the first item displayed.
The command always displays at least one value. The memory display is in the
format defined by a previously executed db (Display Bytes), dd (Display
Doublewords), or dw (Display Words) command. Each subsequent d (typed
without parameters) displays the bytes immediately following those last
displayed.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of addresses to
                                  display. If you omit range, the d
                                  command displays the next byte of memory
                                  after the last one displayed. The d
                                  command must be separated by at least
                                  one space from any range value.




Examples

  d CS:100 L 20

This example displays 20H bytes at CS:100.

  d CS:100 115

This example displays all the bytes in the range 100H to 115H in the CS
selector.


db ─ Display Bytes
────────────────────────────────────────────────────────────────────────────


Syntax

  db «range»

The db command displays the values of the bytes at a given address or in a
given range.

The display is in two portions: a hexadecimal display (each byte is shown in
hexadecimal value) and an ASCII display (the bytes are shown in ASCII
characters). Nonprinting characters are denoted by a period (.) in the ASCII
portion of the display. Each display line shows 16 bytes, with a hyphen
between the eighth and ninth bytes. Each displayed line begins on a 16-byte
boundary.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of addresses to
                                  display. If you omit range, 128 bytes
                                  are displayed beginning at the first
                                  address after the address displayed by
                                  the previous db command.




Example

  db CS:100 0A

This example displays the lines in the following format:

  04BA:0100 54 4F 4D 20 53  . . . 45 52 TOM SAWYER

Each line of the display begins with an address, incremented by 10H from the
address on the previous line.


dd ─ Display Doublewords
────────────────────────────────────────────────────────────────────────────


Syntax

  dd «range»

The dd command displays the hexadecimal values of the doublewords at the
address specified or in the specified range of addresses.

The dd command displays one or more lines, depending on the range given.
Each line displays the address of the first doubleword in the line, followed
by up to four hexadecimal doubleword values. The hexadecimal values are
separated by spaces. The dd command displays values until the end of the
range or until the first 32 doublewords have been displayed.

Typing dd displays 32 doublewords at the current dump address. For example,
if the last byte in the previous dd command was 04BA:0110, the display
starts at 04BA:0111.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of addresses to
                                  display. If you omit range, 32 DWORDs
                                  are displayed beginning at the first
                                  address after the address displayed by
                                  the previous dd command.




Example

  dd CS:100 110

This example displays the doubleword values from CS:100 to CS:110. The
resulting display is similar to the following:

  04BA:0100 7473:2041 676E:6972 5405:0104 0A0D:7865
  04BA:0110 0000:002E

No more than four values per line are displayed.


dg ─ Display GDT
────────────────────────────────────────────────────────────────────────────


Syntax

  dg«a» «range»

The dg command displays the specified range of entries in the GDT (Global
Descriptor Table).

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of entries in the
                                  GDT. If you omit range, the debugger
                                  displays the entire contents of the GDT.

a                                 Causes all entries in the table to be
                                  displayed, not just the valid entries.
                                  The default is to display just the valid
                                  GDT entries. If the command is passed an
                                  LDT selector, it displays LDT and the
                                  appropriate LDT entry.




Example

  dg 0 40

This example displays only the valid entries from 0H to 40H in the GDT. The
resulting display is similar to the following:

  0008  Data Seg  Base=01D700 Limit=3677 DPL=0 Present ReadWrite Accessed
  0010  TSS Desc  Base=007688 Limit=002B DPL=0 Present Busy
  0018  Data Seg  Base=020D7A Limit=03FF DPL=0 Present ReadWrite
  0020  Data Seg  Base=000000 Limit=03FF DPL=0 Present ReadWrite
  0028  LDT Desc  Base=000000 Limit=0000 DPL=0 Present
  0030  Data Seg  Base=000000 Limit=0000 DPL=0 Present ReadWrite
  0040  Data Seg  Base=000400 Limit=03BF DPL=3 Present ReadWrite


di ─ Display IDT
────────────────────────────────────────────────────────────────────────────


Syntax

  di«a» «range»

The di command displays the specified range of entries in the IDT (Interrupt
Descriptor Table).

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
a                                 Causes all entries in the table to be
                                  displayed, not just the valid ones. The
                                  default is to display just the valid IDT
                                  entries.

range                             Specifies the range of entries to be
                                  displayed. If you omit range, the
                                  debugger displays all IDT entries.




Example

  di 0 10

This command produces a display of valid entries similar to the following:

  0000  Int Gate  Sel=1418    Offst=03D8 DPL=3 Present
  0001  Int Gate  Sel=2D38    Offst=0049 DPL=3 Present
  0002  Int Gate  Sel=1418    Offst=03E4 DPL=3 Present
  0003  Int Gate  Sel=2D38    Offst=006F DPL=3 Present
  0004  Int Gate  Sel=1418    Offst=0417 DPL=3 Present
  0005  Int Gate  Sel=1418    Offst=041D DPL=3 Present
  0006  Int Gate  Sel=1418    Offst=0423 DPL=3 Present
  0007  Int Gate  Sel=2D38    Offst=00A3 DPL=3 Present
  0008  Int Gate  Sel=1418    Offst=042F DPL=3 Present
  0009  Int Gate  Sel=2D38    Offst=00CA DPL=3 Present
  000A  Int Gate  Sel=2D38    Offst=00D3 DPL=3 Present
  000B  Int Gate  Sel=2D38    Offst=0156 DPL=3 Present
  000C  Int Gate  Sel=2D38    Offst=01A4 DPL=3 Present
  000D  Int Gate  Sel=2D38    Offst=01C6 DPL=3 Present


dl ─ Display LDT
────────────────────────────────────────────────────────────────────────────


Syntax

  dl«a | p | s | h» «range»

The dl command displays the specified range of entries in the LDT (Local
Descriptor Table).

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
a                                 Causes all entries in the table to be
                                  displayed, not just the valid ones. The
                                  default is to display just the valid LDT
                                  entries. If the command is passed a GDT
                                  selector, it displays GDT and the
                                  appropriate GDT entry.

p                                 Causes private segment selectors to be
                                  displayed.

s                                 Causes shared segment selectors to be
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
s                                 Causes shared segment selectors to be
                                  displayed.

h                                 Causes huge segment selectors to be
                                  displayed. To display the huge segment
                                  selectors, give the shadow selector
                                  followed by the maximum number of
                                  selectors reserved for that segment plus
                                  1.

range                             Specifies the range of entries to be
                                  displayed. If you omit range, the entire
                                  table is displayed.




Example

  dla 4 57

This example displays all of the LDT entries. The command produces a display
similar to the following:

  0014  Call Gate Sel=1418    Offst=0417 DPL=0 NotPres WordCount=1D
  001C  Code Seg  Base=051418 Limit=0423 DPL=0 NotPres ExecOnly
  0027  Reserved  Base=87F000 Limit=FEA5 DPL=3 Present
  0034  Code Seg  Base=05F000 Limit=1805 DPL=0 NotPres ExecOnly
  003C  Code Seg  Base=05F000 Limit=EF57 DPL=0 NotPres ExecOnly
  0047  Code Seg  Base=4DC000 Limit=0050 DPL=3 Present ExecOnly
  004D  Reserved  Base=71F000 Limit=F841 DPL=1 NotPres
  0057  Code Seg  Base=59F000 Limit=E739 DPL=3 Present ExecOnly


dt ─ Display TSS
────────────────────────────────────────────────────────────────────────────


Syntax

  dt «addr»

The dt command displays the current TSS (Task State Segment) or the selected
TSS if you specify the optional address.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
addr                              Specifies the address of the TSS to
                                  display. If no addr is given, dt
                                  displays the current TSS pointed to by
                                  the TR register.




Example

  dt

This example displays the current TSS. The resulting display is similar to
the following:

  AX=0000   BX=0000   CX=0000   DX=0000   SP=0000   BP=0000   SI=0000
DI=0000
  IP=0000   CS=0000   DS=0000   ES=0000   SS=0000   NV UP DI PL NZ NA PO NC
  SS0=0038  SP0=08DE  SS1=0000  SP1=0000  SS2=0000  SP2=0000
  IOPL=0    LDTR=0028 LINK=0000


dw ─ Display Words
────────────────────────────────────────────────────────────────────────────


Syntax

  dw «range»

The dw command displays the hexadecimal values of the words at a given
address or in a given range of addresses.

The command displays one or more lines, depending on the range given. Each
line displays the address of the first word in the line, followed by up to
eight hexadecimal word values. The hexadecimal values are separated by
spaces. The command displays values until the end of the range or until the
first 64 words have been displayed.

Typing dw displays 64 words at the current dump address. If the last word in
the previous dw command was displayed at address 04BA:0110, the next display
will start at 04BA:0112.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of addresses to
                                  display. If you omit range, 64 words are
                                  displayed beginning at the first address
                                  after the address displayed by the
                                  previous dw command.




Example

  dw CS:100 110

This example displays the word values from CS:100 to CS:110, resulting in a
display similar to the following:

  04BA:0100 2041 7473 6972 676E 0104 5404 7865 0A0D
  04BA:0110 002E


e ─ Enter Byte
────────────────────────────────────────────────────────────────────────────


Syntax

  e addr «list»

The e command enters byte values into memory at a specified address. You can
specify the new values on the command line, or let the debugger prompt you
for values. If the debugger uses a prompt, it displays the address and its
contents and then waits for you to perform one of the following actions:


  ■   Replace a byte value with a value you type. Type the value after the
      current value. If the byte you type is an illegal hexadecimal value or
      contains more than two digits, the system does not echo the illegal or
      extra character.

  ■   Press the SPACEBAR to advance to the next byte. To change the value,
      type the new value after the current value. If, when you press the
      SPACEBAR, you move beyond an 8-byte boundary, the 80386 Debugger
      starts a new display line with the address displayed at the beginning.


  ■   Type a hyphen (-) to return to the preceding byte. If you decide to
      change a byte before the current position, typing the hyphen returns
      the current position to the previous byte. When you type the hyphen, a
      new line is started with its address and byte value displayed.

  ■   Press ENTER to terminate the e command. You can press ENTER at any
      byte position.
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
addr                              Specifies the address of the first byte
                                  to be entered.

list                              Specifies the byte values used for
                                  replacement. These values are inserted
                                  automatically. If an error occurs when
                                  you are using the list form of the
                                  command, no byte values are changed.







Examples

  eCS:100
  04BA:0100 EB.

This example prompts you to change the value EB at CS:100. To step through
the subsequent bytes without changing values, press the SPACEBAR.

  04BA:0100 EB.41  10. 00. BC.

In this example, the SPACEBAR is pressed three times.

To return to a value at a previous address, type a hyphen.

  04BA:0100  EB.41    10. 00. BC.-
  04BA:0102  00.-
  04BA:0101  10.

This example returns to the address CS:101.


f ─ Fill Memory
────────────────────────────────────────────────────────────────────────────


Syntax

  f range list

The f command fills the addresses in a specified range with the values in
the specified list.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of addresses to be
                                  filled. If range contains more bytes
                                  than the number of values in list, the
                                  debugger uses list repeatedly until all
                                  bytes in range are filled. If any of the
                                  memory in range is not valid (bad or
                                  nonexistent), an error will occur in all
                                  succeeding locations.

Parameter                         Description
────────────────────────────────────────────────────────────────────────────

list                              Specifies the list of values to fill the
                                  given range. If list contains more
                                  values than the number of bytes in range,
                                  the debugger ignores the extra values in
                                  list.




Example

  f04BA:100 L 100 42 45 52 54 41

This example fills memory locations 04BA:100 through 04BA:1FF with the bytes
specified, repeating the five values until it has filled all 100H bytes.


g ─ Go
────────────────────────────────────────────────────────────────────────────


Syntax

  g «=addr «addr...»»

The g command executes the program currently in memory. If you type the g
command by itself, the current program executes as if it had run outside the
debugger. If you specify =addr, execution begins at the specified address.

Specifying an optional breakpoint address causes execution to halt at the
first address encountered, regardless of the position of the address in the
list of addresses that halts execution or program branching. When program
execution reaches a breakpoint, the default command string is executed.

The stack (SS:SP) must be valid and have six bytes available for this
command. The g command uses an IRET instruction to cause a jump to the
program under test. The stack is set, and the user flags, CS register, and
IP register are pushed on the user stack. (If the user stack is not valid or
is too small, the operating environment may crash.) An interrupt code (0CCH)
is placed at the specified breakpoint addresses.

When the debugger encounters an instruction with the breakpoint code, it
restores all breakpoint addresses listed with the g command to their
original instructions. If you do not halt execution at one of the
breakpoints, the interrupt codes are not replaced with the original
instructions.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
=addr                             Specifies the address where execution is
                                  to begin. The equal sign (=) is needed
                                  to distinguish the starting address from
                                  the breakpoint address.

addr                              Specifies one or more breakpoint
                                  addresses where execution is to halt.
                                  You can specify up to 10 breakpoints,
                                  but only at addresses containing the
                                  first byte of an opcode. If you attempt
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  first byte of an opcode. If you attempt
                                  to set more than 10 breakpoints, an
                                  error message will be displayed.




Example

  gCS:7550

This example executes the program currently in memory until address 7550 in
the CS selector is executed. The debugger then executes the default command
string, removes the INT 3 trap from this address, and restores the original
instruction. When you resume execution, the original instruction will be
executed.


h ─ Hexadecimal Arithmetic
────────────────────────────────────────────────────────────────────────────


Syntax

  h word word

The h command performs hexadecimal arithmetic on the two specified
parameters.

The debugger adds, subtracts, multiplies, and divides the second parameter
and the first parameter, then displays the results on one line. The debugger
does 32-bit multiplication and displays the result as doublewords. The
debugger displays the result of division as a 16-bit quotient and a 16-bit
remainder.

╓┌──────────────────┌────────────────────────────────────────────────────────╖
Parameter          Description
────────────────────────────────────────────────────────────────────────────
word               Specifies two 16-bit word parameters.



Example

  h 300 100

This example performs the calculations and displays the following:

  +0400  -0200 *0000 0003 /0003 0000


i ─ Input Byte
────────────────────────────────────────────────────────────────────────────


Syntax

  i word

The i command inputs and displays one byte from a specified port.

╓┌───────────────────┌───────────────────────────────────────────────────────╖
Parameter           Description
────────────────────────────────────────────────────────────────────────────
word                Specifies the 16-bit port address.



Example

  i2F8

This example displays the byte at port address 2F8H.


j ─ Conditional Execute
────────────────────────────────────────────────────────────────────────────


Syntax

  j expr «"cmds"»

The j command executes the specified commands when the specified expression
is TRUE. If expr is FALSE, the debugger continues to the next command line
(excluding the commands in cmds).

The j command is useful in breakpoint commands to conditionally break
execution when an expression becomes true.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
expr                              Evaluates to a Boolean TRUE or FALSE.

cmds                              Specifies a list of debugger commands to
                                  be executed when expr is TRUE. The list
                                  must be enclosed in single or double
                                  quotation marks. You must separate
                                  optional commands with semicolons (;).
                                  You can use a single or NULL command
                                  without quotation marks.

Parameter                         Description
────────────────────────────────────────────────────────────────────────────




Examples

  bp 167:1454 "J AX == 0;G"

This example causes execution to break if AX does not equal zero when the
breakpoint is reached.

  bp 167:1462 "J BY (DS:SI+3) == 40 'R;G';DG DS"

This example displays the registers and continues execution when the byte
pointed to by DS:SI +3 is equal to 40H; otherwise, it displays the
descriptor table.

  bp 156:1455 "J (MSW AND 1) == 1 'G'"

This example breaks execution when the breakpoint is reached in real mode.

  bp 156:1455 "J (MSW AND 1) 'G'"

This example is a shortcut that produces the same results as the preceding
command.


k ─ Backtrace Stack
────────────────────────────────────────────────────────────────────────────


Syntax

  k «ss:bp» «cs:ip»

This command displays the current stack frame. Each line shows the name of a
procedure, its arguments, and the address of the statement that called it.
The command displays four 2-byte arguments by default. The ka command
changes the number of arguments displayed by this command.

Using the k command at the beginning of a function (before the function
prolog has been executed) will give incorrect results. The command uses the
BP register to compute the current backtrace, and this register is not
correctly set for a function until its prolog has been executed.

╓┌────────────────┌──────────────────────────────────────────────────────────╖
Parameter        Description
────────────────────────────────────────────────────────────────────────────
ss:bp            Specifies an optional stack-frame address.
cs:ip            Specifies an optional code address.



ka ─ Set Backtrace Arguments
────────────────────────────────────────────────────────────────────────────


Syntax

  ka value

The ka command sets the number of parameters displayed for all subsequent
stack trace commands. The initial default is four.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
value                             Specifies the number of parameters to be
                                  displayed. The value parameter must be
                                  in the range 0 to 31.




kt ─ Backtrace Task Stack
────────────────────────────────────────────────────────────────────────────


Syntax

  kt «tdb»

This command displays the stack frame of the current task or the task
specified by tdb. Each line shows the name of a procedure, its arguments,
and the address of the statement that called it. The command displays four
2-byte arguments by default. The ka command changes the number of arguments
displayed by this command.

This command can be combined with the kv command; the syntax for the
combined command is kvt «tdb».

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
tdb                               Specifies the segment address of the
                                  program descriptor block for the task to
                                  be traced. To obtain the tdb value, use
                                  the .dq (Dump Task Queue) command. If
                                  tdb is not supplied, the kt command
                                  displays the stack frame of the current
                                  task.




kv ─ Verbose Backtrace Stack
────────────────────────────────────────────────────────────────────────────


Syntax

  kv

The kv command displays information that the k (Backtrace Stack) command
provides, plus information about stack location and frame pointer values for
each frame.


la ─ List Absolute Symbols
────────────────────────────────────────────────────────────────────────────


Syntax

  la

The la command lists the absolute symbols in the currently active map.


lg ─ List Groups
────────────────────────────────────────────────────────────────────────────


Syntax

  lg

The lg command lists the selector (or segment) and the name of each group in
the active map.


Example

  lg

This example produces a display similar to the following:

  #0090:0000 DOSCODE
  #0828:0000 DOSGROUP
  #1290:0000 DBGCODE
  #16C0:0000 DBGDATA
  #1A38:0000 TASKCODE
  #1AD8:0000 DOSRING3CODE
  #1AE0:0000 DOSINITCODE
  #2018:0000 DOSINITRMCODE
  #20A8:0000 DOSINITDATA
  #23F8:0000 DOSMTE
  #2420:0000 DOSHIGHDATA
  #28D0:0000 DOSHIGHCODE
  #3628:0000 DOSHIGH2CODE
  #0090:0000 DOSCODE


lm ─ List Map
────────────────────────────────────────────────────────────────────────────


Syntax

  lm

The lm command lists the symbol files currently loaded and indicates which
one is active.

The last symbol file loaded is made active by default. Use the w (Change
Map) command to change the active file.


Example

  lm

This example returns a display similar to the following:

  COMSAM2D is active.
  DISK01D.


ln ─ List Near
────────────────────────────────────────────────────────────────────────────


Syntax

  ln «addr»

The ln command lists the symbol nearest to the specified address. The
command lists the nearest symbol before and after the specified addr
parameter.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
addr                              Specifies any valid instruction address.
                                  The default is the current disassembly
                                  address.




Example

  ln

This example displays the nearest symbols before and after the current
disassembly address. The output looks like this:

  6787 VerifyRamSemAddr + 10
  67AA PutRamSemID - 13


ls ─ List Symbols
────────────────────────────────────────────────────────────────────────────


Syntax

  ls {group-name | name-chars | *}

The ls command lists the symbols in the specified group, or names that match
the search specification in all groups. Only the * wildcard is accepted and
only as the last character (all other characters will be ignored).

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
group-name                        Names the group that contains the
                                  symbols you want to list.

name-chars                        Displays a list of symbols that begin
                                  with the specified characters.




Example

  ls DOSRING3CODE
  ls vkd*
  ls vmm_base

The first example displays all of the symbols in the DOSRING3CODE group. The
debugger displays the symbols in a format similar to the following:

  0000 Sigdispatch
  001A LibInitDisp

The second example displays all of the symbols that start with the first
three characters "vkd." This will show the group names as they are searched,
similar to the following:

  GROUP: [0028] CODE
   60003A74 VKD_Control_Debug
  GROUP: [0030] DATA
   6001DFFC VKD_CB_Offset
  GROUP: [0030} IDATA

The third example displays the address and group for the symbol "VMM_base."



m ─ Move Memory
────────────────────────────────────────────────────────────────────────────


Syntax

  m range addr

The m command moves a block of memory from one memory location to another.

Overlapping moves─those where part of the block overlaps some of the current
addresses─are always performed without loss of data. Addresses that could be
overwritten are moved first. For moves from higher to lower addresses, the
sequence of events is first to move the data at the block's lowest address
and then to work toward the highest. For moves from lower to higher
addresses, the sequence is first to move the data at the block's highest
address and then to work toward the lowest.

Note that if the addresses in the block being moved will not have new data
written to them, the data in the block before the move will remain. The m
command copies the data from one area into another, in the sequence
described, and writes over the new addresses─hence, the importance of the
moving sequence.

To review the results of a memory move, use the d (Display Memory) command,
specifying the same address you used with the m command.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the block of memory to be
                                  moved.

addr                              Specifies the starting address where the
                                  memory is to be relocated.




Example

  mCS:100 110 CS:500

This example first moves address CS:110 to CS:510 and then moves CS:10F to
CS:50F, and so on, until CS:100 is moved to CS:500.


o ─ Output to Port
────────────────────────────────────────────────────────────────────────────


Syntax

  o word byte

The o command writes a byte to a 16-bit port address.

╓┌────────────┌──────────────────────────────────────────────────────────────╖
Parameter    Description
────────────────────────────────────────────────────────────────────────────
word         Specifies the 16-bit port address you are writing to.
byte         Specifies the 8-bit value to be written to the port.



Example

  o 2F8 4F

This example writes the byte value 4F to output port 2F8.


p ─ Program Trace
────────────────────────────────────────────────────────────────────────────


Syntax

  p«N» «=addr »«count»

The p command executes the instruction at a specified address and displays
the current values of all the registers and flags (whatever the z command
has been set to). It then executes the default command string, if any.

The p command is identical to the t (Trace Instructions) command, except
that it automatically executes and returns from any calls or software
interrupts it encounters. The t command always stops after executing into
the call or interrupt, leaving execution control inside the called routine.


╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
N                                 Suppresses the register display so just
                                  the assembly line is displayed. The
                                  suppression will result only if the
                                  default command, z, is set to a normal
                                  setting, r.

addr                              Specifies the starting address to begin
                                  execution. If you omit the optional addr,
                                  execution begins at the instruction
                                  pointed to by the CS and IP registers.
                                  Use the equal sign (=) only if you
                                  specify an addr.
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
                                  specify an addr.

count                             Specifies the number of instructions to
                                  execute before halting and executing the
                                  default command string. If you specify
                                  count, the command continues to execute
                                  count instructions before stopping. The
                                  command executes the default command
                                  string for each instruction before
                                  executing the next.




Examples

  p

This example executes the instruction pointed to by the current CS and IP
register values before it executes the default command string.

  p=120

This example executes the instruction at address CS:120 before it executes
the default command string.


r ─ Display Registers
────────────────────────────────────────────────────────────────────────────


Syntax

  r reg =word

The r command displays the contents of one or more CPU registers and allows
the contents to be changed to new values. If you specify a reg with the r
command, the 16-bit value of that register is displayed in hexadecimal
followed by a colon (:) prompt on the next line. You can then enter a new
word value for the specified register or press ENTER if you do not want to
change the register value.

If you use f for reg, the debugger displays the flags in a row at the
beginning of a new line and displays a hyphen (-) after the last flag.

You can type new flag values in any order as alphabetic pairs. You do not
have to leave spaces between these values. To exit the r command, press
ENTER. Any flags for which you did not specify new values remain unchanged.


If you type more than one value for a flag, or if you enter an invalid flag
name, the debugger returns a "Bad Flag" error message. In both cases, the
flags up to the error in the list are changed; those flags at and after the
error are not changed.

╓┌──────────┌───────────────────────────────┌────────────────────────────────╖
Parameter  Description
────────────────────────────────────────────────────────────────────────────
reg        Specifies the register to be
           displayed. If you omit reg,
           the debugger displays the
Parameter  Description
────────────────────────────────────────────────────────────────────────────
           the debugger displays the
           contents of all registers and
           flags along with the next
           executable instruction.

word       Specifies the new value for
           the register. For the Flags
           register, set or clear a flag
           by using one of the following
           names:

           Flag Name                       Action

           OV                              Overflow set

           NV                              Overflow clear

           DN                              Direction decrement

Parameter  Description
────────────────────────────────────────────────────────────────────────────

           UP                              Direction increment

           EI                              Interrupt enabled

           DI                              Interrupt disabled

           NG                              Sign negative

           PL                              Sign positive

           ZR                              Zero set

           NZ                              Zero clear

           Flag Name                       Action

           AC                              Auxiliary Carry set

Parameter  Description
────────────────────────────────────────────────────────────────────────────

           NA                              Auxiliary Carry clear

           PE                              Parity even

           PO                              Parity odd

           CY                              Carry set

           NC                              Carry clear

           NT                              Nested Task toggle on and off



For the MSW register, use the following names to set a flag:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
Flag Name        Action
Flag Name        Action
────────────────────────────────────────────────────────────────────────────
TS               Sets the task switch bit.
EM               Sets the emulation processor extension bit.
MP               Sets the monitor processor extension bit.
PM               Sets the protected mode bit.



Comments

Setting the protected-mode bit from within the debugger does not set the
target system to run in protected mode. The debugger simulates the setting.
To configure the target system to run in protected mode, you would have to
set the PM bit in the MSW register and reset the target system to boot in
protected mode.


Examples

  r

This example produces the following display:

  AX=0698  BX=2008  CX=2C18  DX=18AB  SP=1B7A  BP=00FF  SI=0020  DI=10CD
  IP=0450  CS=18B0  DS=1BE8  ES=0DA8  SS=0048  NV UP DI PL NZ NA PO NC
  GDTR=01BE80 3687  IDTR=01F508 03FF  TR=0010  LDTR=0028 IOPL=3 MSW=PM
  18B0:0450 C3             RET

  rf

This example displays each flag with a two-character alphabetic code. To
change any flag, type the opposite two-letter code. The flags are either set
or cleared. This example produces a display similar to the following:

  NV UP DI NG NZ AC PE NC - _

To change the value of a flag's setting, enter an opposite setting for the
flag you wish to set.

  NV UP DI NG NZ AC PE NC - PLEICY

This example changes the sign flag to positive, enables interrupts, and sets
the carry flag.

  rmsw

This example modifies the MSW (Machine Status Word) bits. The debugger
displays the status of the MSW register and prints a colon on the next line.



s ─ Search Bytes
────────────────────────────────────────────────────────────────────────────


Syntax

  s range { list | "string" }

The s command searches an address range for a specified list of bytes or an
ASCII character string.

You can include one or more bytes in list, but multiple bytes must be
separated by a space or comma. When you search for more than one byte, the
command returns only the first address of the byte string. When your list
contains only one byte, the debugger displays all addresses of the byte in
the range.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of addresses to be
                                  searched.

list                              Specifies one or more byte values to
                                  search for.

string                            Specifies an ASCII character string to
                                  be searched for. The string must be
                                  enclosed in quotation marks.




Example

  sCS:100 110 41

This example searches for byte 41 in the range CS:100 to CS:110. If it finds
the value, the command produces a display similar to the following:

  04BA:0104
  04BA:010D


t ─ Trace Instructions
────────────────────────────────────────────────────────────────────────────


Syntax

  t«N» «=addr» «word»

The t command executes one or more instructions along with the default
command string, then displays the decoded instruction. If you include an
addr parameter, tracing starts at the specified address. Otherwise, the
command steps through the next machine instruction and then executes the
default command string.

The t command uses the hardware trace mode of the Intel microprocessor.
Consequently, you can also trace instructions stored in ROM.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
N                                 Suppresses the register display so just
                                  the assembly line is displayed. This
                                  works only if the default command, z, is
                                  set to r (the normal setting).

addr                              Specifies the instruction address to
                                  start tracing. The equal sign (=) is
                                  required.

word                              Specifies the number of instructions to
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
word                              Specifies the number of instructions to
                                  execute and trace.




Example

  t

  AX=0E00  BX=00FF  CX=0007  DX=01FF  SP=039D  BP=0000  SI=005C  DI=0000
  IP=011A  CS=04BA  DS=04BA  ES=04BA  SS=04BA  NV UP DI NG NZ AC PE NC
  GDTR=01D700 3677  IDTR=020D7A 03FF  TR=0010  LDTR=0028 IOPL=3 MSW=PM
  04BA:011A  CD21          PUSH   21

This example traces the current position (04BA:011A) and uses the default
command string (r command) to display registers.

  t=011A 10

This command causes the debugger to execute 16 (10H) instructions beginning
at 011A in the current selector. The debugger executes and displays the
results of the default command string for each instruction. The display
scrolls until the last instruction is executed. Use CONTROL+S to stop the
display from scrolling, and CONTROL+Q to resume.


u ─ Unassemble Bytes
────────────────────────────────────────────────────────────────────────────


Syntax

  u range

The u command disassembles bytes and displays the source statements, with
addresses and byte values, that correspond to them.

The display of disassembled code looks similar to a code listing for an
assembled file. If you type the u command by itself, 20H bytes are
disassembled at the first address after the one displayed by the previous u
command.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
range                             Specifies the range of addresses in
                                  which instructions are to be
                                  disassembled. If no range is given, the
                                  command disassembles the next 20H bytes.




Example

  uCS:046C

This example returns a display similar to the following:

  1A60:046C C3               RET
  1A60:046D 9A6B3E100D       CALL  0D10:3E6B
  1A60:0472 33C0             XOR  AX,AX
  1A60:0474 50               PUSH  AX
  1A60:0475 9D               POPF
  1A60:0476 9C               PUSHF
  1A60:0477 58               POP  AX
  1A60:0478 2500F0           AND  AX,F000
  1A60:047B 3D00F0           CMP  AX,F000
  1A60:047E 7508             JNZ  0488
  1A60:0480 689C26           PUSH  269C
  1A60:0483 9AF105100D       CALL  0D10:05F1

If the bytes in some addresses are altered, the disassembler alters the
instruction statements. You can also use the u command for the changed
locations, for the new instructions viewed, and for the disassembled code
used to edit the source file.


v ─ Set Interrupt Vector Trapping
────────────────────────────────────────────────────────────────────────────


Syntax

  v«1 | 3»

The v command is used to specify which privilege rings should have
interrupts 1 and 3 trapped. This is useful for allowing the 80386 Debugger
to coexist with other debuggers such as the Symbolic Debugger (SYMDEB) and
CodeView for Windows (CVW). The 80386 Debugger handles interrupts 1 and 3
which occur in any privilege rings where trapping is enabled, but reflects
the interrupts if trapping is disabled, so that the secondary debugger will
see them. To use the command, enter v1 or v3 as the command with no
parameters. WDEB386 then displays the current rings for which trapping is
enabled. For example:

  #v1
  Rings trapped for int 1 - 0 1 2 3 V
  ? +

The question mark (?) is displayed to prompt you for changes. The plus sign
(+) indicates that you are in enabling mode, so you can just press 0, 1, 2,
3, or V to enable trapping in the required ring. If you need to disable
trapping in any rings, then press HYPHEN ( - ); this will change the plus
sign to a minus sign, indicating that you are now disabling trapping.
Pressing PLUS SIGN ( + ) will get you back into enabling mode. Any number of
changes can be made at one time. The current mode is displayed after each
change. For example:

  #v1
  Rings trapped for int 1 - 0 2 V
  ? +1 +3 -2 -

This command sequence was created by pressing 1, 3, HYPHEN, 2, and ENTER or
the SPACEBAR. It enabled trapping INT 1 instructions in rings 1 and 3 and
disabled trapping in ring 2.


vl ─ Display Interrupt Trapping Information
────────────────────────────────────────────────────────────────────────────


Syntax

  vl

This command shows which privilege rings have trapping enabled for
interrupts 1 and 3. The v command can be used to enable or disable trapping
in specific privilege rings.


Example

  vl
  Rings trapped for int 1 - 0 1 2 3 V
  Rings trapped for int 3 - 0 1 2 3 V


w ─ Change Map
────────────────────────────────────────────────────────────────────────────


Syntax

  w «map-name»

The w command changes the active map file.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
map-name                          Specifies the name of the map file you
                                  want to make active. Use the lm (List
                                  Map) command to display a list of
                                  available map files.

                                  If map-name is not specified, then the
                                  loaded maps are displayed and the user
                                  is prompted to select a map by pressing
                                  its corresponding option number.




Examples

  lm
  COMSAM2D is active.
  DISK01D.
  w DISK01D

The first example displays the loaded map files using the lm command, then
sets the active map file to DISK01D.

  W
  1. KERNEL
  2. Win386 is active
  activate which map?

The second example shows selecting the desired map from the list of
available maps. At the prompt, pressing 1 will activate the KERNEL map;
pressing 2 will leave the Win386 map activated; pressing the SPACEBAR will
leave the current map activated; any other key will be ignored and the
debugger will continue to wait for input.


y ─ Debugger Option Command
────────────────────────────────────────────────────────────────────────────


Syntax

  y [? | 386env | dislwr | regterse | codebytes | symaddrs]

This command allows the debugger configuration to be changed. The ? option
prints the current options supported. The y command by itself prints the
current state of the options. The y and a flag name sets or toggles an
options flag.

  386env - 32 bit environment (toggles)
  dislwr - lower case disassembly (toggles)
  regterse - terse register set (toggles)
  codebytes - terse instruction disassembly (toggles)
  symaddrs - symbols and addresses (toggles)

All these flags toggle their state when set and are printed only when the
option is on.

The 386env flag controls the size of addresses and registers, when
displayed. When this option is on, addresses, registers, etc., are printed
in 32-bit formats; otherwise they are printed in 16-bit formats. This flag
has nothing to do with the CPU (286/386) the debugger is running on, only
the display sizes.

The dislwr flag controls the disassembler's lowercase option. When the flag
is on, disassembly is in lowercase.

The regterse flag controls the number of registers that are displayed in the
register dump command. In the 386 environment (386env on), when the regterse
flag is on, only the first three lines are displayed (instead of the normal
six-line-plus disassembly line display). In the 286 environment (386env
off), only the first two lines of the normal three-line display (plus the
disassembly line) are printed.

The codebytes flag controls the display of the actual code bytes when
disassembling.

The symaddrs flag controls showing just a symbol name or symbol name and
address when disassembling.


z ─ Zap Embedded INT 1 and INT 3 Instructions
────────────────────────────────────────────────────────────────────────────


Syntax

  z

Zaps the current INT 3 or the previous INT 1 instruction, by replacing the
instruction bytes with NOP instructions. This allows the user to avoid INT 1
or INT 3 instructions that were assembled into the executable file from
breaking into the debugger more than once.


zd ─ Execute Default Command String
────────────────────────────────────────────────────────────────────────────


Syntax

  zd

The zd command executes the default command string.

The default command string is initially set to the r (Display Registers)
command by the debugger. The default command string is executed every time a
breakpoint is encountered during program execution or whenever a p (Program
Trace) or t (Trace Instructions) command is executed.

Use the zl command to display the default command string and the zs command
to change the default command string.


zl ─ Display Default Command String
────────────────────────────────────────────────────────────────────────────


Syntax

  zl

The zl command displays the default command string.


Example

  zl
  "R"

This example displays the default command string.


zs ─ Change Default Command String
────────────────────────────────────────────────────────────────────────────


Syntax

  zs "string"

The zs command lets you change the default command string.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Parameter                         Description
────────────────────────────────────────────────────────────────────────────
string                            Specifies the new default command string.
                                  The string must be enclosed in single or
                                  double quotation marks. You must
                                  separate the debugger commands within
                                  the string with semicolons.




Example

  zs "r;c100 L 100 300"

This example changes the current default command string to an r (Display
Register) command followed by a c (Compare Memory) command.

  zs "j (by cs:ip) == cc 'g'"

This example begins execution whenever an INT 3 instruction is executed in
your test program. This will execute a g (Go) command every time an INT 3
instruction is executed.

You can use zs to set up a watchpoint as follows:

  zs "j (wo 40:1234) == 0eeed;t"

This command traces until the word at 40:1234 is not equal to 0EEED. This
won't work if you are tracing through the mode switching code in DOS or
other sections of code that can't be traced.





9.6 386 Enhanced Windows Environment Commands

These commands are specific to the operating environment of Windows running
in 386 enhanced mode. These commands are always dot commands, and are in
addition to the common commands documented in the previous section.

All of these commands are listed when the .? command is executed.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Description
────────────────────────────────────────────────────────────────────────────
.DG                               Calls Windows to dump its global heap
                                  when Windows is installed.

.DF                               Calls Windows to dump its free list when
                                  Windows is installed.

.DL                               Calls Windows to dump the LRU list when
                                  Windows is installed.

.VM                               Displays the status of the current
                                  virtual machine (VM). Status information
                                  includes reentry count, VM handle,
                                  critical section state, client registers,
Command                           Description
────────────────────────────────────────────────────────────────────────────
                                  critical section state, client registers,
                                  and top entries from the client's stack.

.VC                               Displays the standard fields of the
                                  current VM's control block.

.VH                               Displays the current VM's handle.

.VR                               Displays the current VM's client
                                  registers, if the debugger is in
                                  protected mode.

.VS                               Displays the current VM's virtual mode
                                  stack, if the debugger is in protected
                                  mode.

.VL                               Displays a list of all valid VM handles.

.T                                Toggles the fault logging flag. When
Command                           Description
────────────────────────────────────────────────────────────────────────────
.T                                Toggles the fault logging flag. When
                                  fault logging is turned on, all system
                                  faults (hardware interrupts, general
                                  protection faults, page faults, illegal
                                  instruction faults, and so on) are
                                  logged, with the registers at the time
                                  of the fault, and so on. This list of
                                  logged faults can then be viewed with
                                  the .S, .SS, or .SL commands.

.S [item_num]                     Displays fault logging information in a
                                  single line-condensed form. If an
                                  item_num parameter is given, then the
                                  list starts with the specified log item;
                                  otherwise it starts with the last (most
                                  recent) log item. The list is displayed
                                  from most recent to less recent order.
                                  It displays item number, fault number,
                                  VM handle at the time of fault, critical
Command                           Description
────────────────────────────────────────────────────────────────────────────
                                  VM handle at the time of fault, critical
                                  section state, client's CS:IP; and, in
                                  the case of general protection faults,
                                  the executed instruction. The display
                                  will look like the following:

                                  = 00003BB8: 000D 60441000 00 01
                                  02B7:23F5 INT     2A    00008002

                                  The first number (00003BB8) is the log
                                  item number. The second number (000D) is
                                  the fault (interrupt) number (0Dh =
                                  General Protection). The next number
                                  (60441000) is the VM handle of the VM
                                  interrupted.

                                  The next two numbers (00) and (01) are
                                  the critical section claim counts at the
                                  start and end of the fault handling. So,
Command                           Description
────────────────────────────────────────────────────────────────────────────
                                  start and end of the fault handling. So,
                                  in this example, the critical section
                                  was unclaimed on entry, but the fault
                                  handler claimed it before exiting.

                                  The next number (02B7:23F5) is the
                                  client's CS:IP at the time of the
                                  interrupt. (INT 2A) is the instruction
                                  that the client attempted to execute,
                                  causing the protection fault.

                                  The last number (00008002) is the value
                                  of EAX register. This number is given
                                  since it is commonly used for software
                                  interrupt function number selection, and
                                  since all software interrupts done in
                                  virtual 8086 mode will show in this log.
                                  This allows the programmer to see the
                                  most about each fault in a single line.
Command                           Description
────────────────────────────────────────────────────────────────────────────
                                  most about each fault in a single line.
                                  When the faulting instruction is an IN
                                  or OUT instruction, DX and EAX will be
                                  displayed as appropriate.

                                  After each screenful of display, the
                                  debugger pauses, waiting for the user to
                                  press a key to continue. Pressing ESCAPE
                                  or CONTROL+C aborts any further listing.
                                  This command clears the fault logging
                                  flag, to disable further logging.

.SL [item_num]                    Displays complete fault logging
                                  information. If a log item number is
                                  specified, then just the one fault's
                                  information is displayed, starting with
                                  the condensed line, then the register
                                  state at the start of the fault, and
                                  then the register state at the end. If
Command                           Description
────────────────────────────────────────────────────────────────────────────
                                  then the register state at the end. If
                                  no item number is specified, then all
                                  log items are displayed, starting with
                                  the last log item. This list shows the
                                  log number, fault number, VM handle,
                                  client registers, and instruction (if
                                  the item is the end-of-fault item.)

                                  Screen handling is performed exactly as
                                  in the .S command.

.DS                               Dumps the protected-mode stack and
                                  displays near code segment labels (if
                                  available) next to each DWORD from the
                                  stack.



The following Mx commands are for debugging the 386-enhanced-mode Windows
environment memory manager. They are probably of little use to other
programmers.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Description
────────────────────────────────────────────────────────────────────────────
.MH [handle]                      Displays the 386-enhanced-mode Windows
                                  heap information about a specific handle,
                                  if specified; otherwise global
                                  information is displayed.

.MM [handle]                      Displays the 386-enhanced-mode Windows
                                  memory information, such as free and
                                  locked pages, if no handle is specified.
                                  Otherwise, it displays information about
                                  the memory handle such as size and
                                  linear address.

.MV                               Displays the memory handles that are
                                  allocated to the current VM.

Command                           Description
────────────────────────────────────────────────────────────────────────────

.MS PFTaddr                       Displays PFT (paged memory) information.

.MF                               Displays the current free list.

.MI                               Displays instanced data regions.

.VMM                              This command displays a menu of
                                  subcommands. Pressing a single character
                                  selects and executes the listed command.

.device-name                      This command calls the indicated virtual
                                  device so that it can dump information
                                  relevant for debugging it.

.LQ                               Displays queue outs from the most
                                  recent.

.ML lin_addr                      Displays page-table information for the
Command                           Description
────────────────────────────────────────────────────────────────────────────
.ML lin_addr                      Displays page-table information for the
                                  given linear address.

.MP phys_addr                     Displays all linear addresses that map
                                  the given physical address.

.MD                               Changes the debug MONO paging display.

MO                                Schedules a page-out event of all
                                  present pages that are not locked.




9.7 Summary

The 80386 Debugger is a tool that lets you debug Windows applications in
protected (standard or 386 enhanced) mode on systems with an 80386 CPU. It
offers more advanced debugging features not available in CodeView for
Windows, but lacks CVW's more convenient user interface.

For more information related to the 80386 Debugger, see the following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Programming Windows applications  Guide to Programming

System requirements               Installation and Update Guide






Chapter 10  Monitoring Messages: Spy
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Spy (SPY) monitors system messages sent to a specified
application window. Spy records the messages and displays them on a
specified device.

Spy is useful for verifying that the messages you think a window is
receiving are being received. It is also helpful for examining the values of
message parameters.

────────────────────────────────────────────────────────────────────────────
NOTE

If you are using CodeView for Windows to debug your application, you can use
CodeView instead of Spy to trace messages.
────────────────────────────────────────────────────────────────────────────

This chapter describes the following:


  ■   Displaying messages

  ■   Choosing options

  ■   Choosing a window

  ■   Turning Spy on and off




10.1  Displaying Messages

To watch messages, do the following:


  1.  Choose the Options menu to display the Options dialog box and select
      the following:

      ■   The kind of message you want to watch

      ■   The output device to which you want messages to go

      ■   Whether you want Spy to display messages synchronously or
          asynchronously


  2.  Select the window whose messages you want to watch by choosing the
      Window command from the Window menu.

  3.  Click the window you want to watch. To stop watching messages, choose
      the Spy Off command from the Spy menu.


Figure 10.1 illustrates the Spy window.

(This figure may be found in the printed book).


10.2  Choosing Options

The Options menu displays a dialog box that offers you the following
choices:


  ■   The kind of message you want to watch

  ■   The output device to which you want samples to go

  ■   Whether or not Spy sends samples to the output device synchronously or
      asynchronously


The following sections describe how to choose these options.


10.2.1  Choosing Messages

The Options menu displays a dialog box that offers the following choices:

Message                           Description
────────────────────────────────────────────────────────────────────────────
Mouse                             Mouse-related messages, such as
                                  WM_MOUSEMOVE and WM_SETCURSOR.

Input                             Input-related messages, such as WM_CHAR
                                  and WM_COMMAND.

System                            System-wide messages, such as
                                  WM_ENDSESSION and WM_TIMECHANGE.

Message                           Description
────────────────────────────────────────────────────────────────────────────
Window                            Window manager messages, such as WM_SIZE
                                  and WM_SHOWWINDOW.

Init                              Initialization messages, such as
                                  WM_INITMENU and WM_INITDIALOG.

Clipboard                         Clipboard messages, such as
                                  WM_RENDERFORMAT.

Other                             Messages other than the types explicitly
                                  listed.

DDE                               Dynamic Data Exchange messages, such as
                                  WM_DDE_REQUEST.

Non Client                        Windows nonclient messages, such as
                                  WM_NCDESTROY and WM_NCHITTEST.

By default, Spy monitors all messages.


10.2.2  Choosing the Output Device

You can specify that Spy send messages to the following output devices:

Device                            Description
────────────────────────────────────────────────────────────────────────────
Window                            Spy displays messages in the Spy window.
                                  You can specify how many messages Spy
                                  stores in its buffer. By default, it
                                  stores 100 lines of messages which you
                                  can view by scrolling through the Spy
                                  window.

Com1                              Spy sends messages to the COM1 port.

File                              Spy sends messages to the specified file.
                                  The default output file is SPY.OUT.


10.2.3  Choosing Frequency of Output

The following options specify whether Spy sends messages to the output
device as Spy receives them, or queues messages before sending them:

Option                            Description
────────────────────────────────────────────────────────────────────────────
Synchronous                       Spy displays messages as it receives
                                  them.

Asynchronous                      Spy queues messages for display.

By default, Spy sends messages synchronously.


10.3  Choosing a Window: The Window Menu

After specifying message options, use the Window menu to choose the window
you want Spy to watch. The Window menu contains the following commands:

Command                           Description
────────────────────────────────────────────────────────────────────────────
Window...                         Specifies the window that Spy watches.
                                  When you choose the Window... command,
                                  Spy displays a dialog box that contains
                                  information for the window in which the
                                  cursor is located. As you move the
                                  cursor from window to window, the
                                  following information changes:

                                  ■ Window─Handle to the window

                                  ■ Class─Window class

                                  ■ Module─Program that created the window

                                  ■ Parent─Handle to the parent window and
                                  the name of the program that created the
                                  parent window

                                  ■ Rect─Upper-right and lower-left
                                  coordinates of the window and the window
                                  size in screen coordinates

                                  ■ Style─Style bits of the window under
                                  the cursor, the principal style of the
                                  window, and an identifier, if the window
                                  is a child window. The principal style
                                  can be WS_POPUP, WS_ICONIC,
                                  WS_OVERLAPPED, or WS_CHILD.

All Windows                       Specifies that Spy watches all windows.
                                  Choose the All Windows command again to
                                  direct Spy to stop watching all windows.

Clear Window                      Clears the Spy window of messages.


10.4  Turning Spy On and Off: The Spy Menu

After selecting a window to monitor, turn Spy on by clicking the window and
choosing OK in the dialog box.

To stop monitoring messages, or to resume monitoring messages, or to exit
Spy, use the Spy menu. The Spy menu contains the following commands:

Command                           Description
────────────────────────────────────────────────────────────────────────────
Spy On/Off                        Starts and stops message monitoring.

Exit                              Exits Spy.

About Spy...                      Provides information about the version
                                  of Spy you are using.


10.5  Summary

Spy is a tool that lets you monitor messages sent to a specified window. For
more information about topics related to Spy, see the following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Input messages                    Guide to Programming: Chapter 4,
                                  "Keyboard and Mouse Input"

Message syntax and content        Reference, Volume 1: Chapter 6,
                                  "Messages Directory"






Chapter 11  Viewing the Heap: Heap Walker
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Heap Walker (HEAPWALK) lets you examine the global heap,
the system memory that DOS reserves for Windows use. The utility displays
information about memory segments, or objects. Heap Walker is useful for
analyzing the effects your application has when it allocates objects in the
global heap.

This chapter describes the following topics:


  ■   How Heap Walker views memory

  ■   The Heap Walker window

  ■   Using Heap Walker commands to examine the global heap




11.1  How Heap Walker Views Memory

Heap Walker displays the global heap when Windows is running in either
protected or real mode. The heap differs from one mode to the other. The
following sections describe the differences.


11.1.1  Viewing the Heap in Protected Mode

If Windows is running in protected (standard or 386 enhanced) mode, the heap
is an area of memory that starts above DOS, TSR, and system drivers.

When viewing the heap in protected mode, Heap Walker identifies objects by
selector. The CPU uses selectors to indirectly specify memory addresses.


11.1.2  Viewing the Heap in Real Mode

If Windows is running in real mode, the heap can consist of one of the
following:


  ■   The heap that starts above DOS, TSR programs, and system drivers, and
      ends at the top of DOS memory.

  ■   The heap that Windows uses in real mode plus expanded memory that
      Windows can map into the 1-megabyte address space. Windows accesses
      this area of memory using handles to appropriate segments. This access
      mechanism, called the Expanded Memory Specification (EMS), is
      transparent to an application.



11.2  The Heap Walker Window

Figure 11.1 illustrates the Heap Walker window after the user has executed a
Walk command.

(This figure may be found in the printed book).

By default, Heap Walker displays all global objects in the area of memory
below the EMS line, starting at the bottom of the heap. To display objects
in the heap that includes expanded memory, use the EMS menu described in
Table 11.2, "Walk Commands."

Whether you examine the heap below the line or the EMS heap, Heap Walker
displays the following information about each object:


  ■   ADDR (real mode only)─Segment of the object arena header; the object
      starts one paragraph later.

  ■   SLCT (protected mode only)─Selector of the object.

  ■   HANDL─Handle of the memory object.

  ■   SIZE─Size of the object, in bytes.

  ■   LOCK─Lock count of the object.

  ■   FLAG─"D" if the object is discardable; "S" if it is shareable.

  ■   OWNER-NAME─Owner of the object.

  ■   OBJ-TYPE─Type of the object.

  ■   ADD-INFO─Additional information that describes the kind of resource
      objects allocated.



11.3  Using Heap Walker Commands

Heap Walker commands let you do the following:


  ■   Perform file operations

  ■   Walk the heap

  ■   Sort memory objects

  ■   Show objects

  ■   Allocate part or all of the heap

  ■   Add the size of selected memory objects


The following sections describe Heap Walker commands.


11.3.1  Performing File Operations: The File Menu

Table 11.1 describes Heap Walker commands that perform basic file
operations.

Table 11.1  File Operation Commands

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Action
────────────────────────────────────────────────────────────────────────────
Save                              Saves the current listing of objects on
                                  the heap to a HWG.TXT file. Heap Walker
                                  writes the first listing you save to
                                  file HWG00.TXT, and numbers subsequent
                                  saves consecutively (HWG00.TXT,
                                  HWG01.TXT).

Exit                              Exits Heap Walker.

About Heap Walker                 Displays information about the current
                                  version of Heap Walker.

Command                           Action
────────────────────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────────────────────



When saving a list of current objects to a file, Heap Walker dumps the heap
that is displayed on the screen as well as the following information, from
left to right:


  ■   The module name

  ■   The number of discardable segments loaded in memory

  ■   The number of bytes that the discardable segments occupy

  ■   The number of bytes that nondiscardable segments occupy in memory

  ■   The total number of bytes that the module occupies in memory



11.3.2  Walking the Heap: The Walk and EmsWalk Menus

Table 11.2 describes commands for walking the heap.

Table 11.2  Walk Commands

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Action
────────────────────────────────────────────────────────────────────────────
Walk Heap                         Displays objects on the heap below the
                                  EMS line (real mode only if EMS is
                                  present). Each display line identifies
                                  one global object. If the heap does not
                                  have EMS or the heap is in protected
                                  mode, this command displays the entire
                                  heap.



Table 11.2  Walk Commands (continued)

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Action
────────────────────────────────────────────────────────────────────────────
Walk LRU List                     Displays only discardable objects. The
                                  Heap Walker lists objects from the least
                                  recently used to the most recently used.
                                  The object at the top of the list has
                                  been least recently used and, therefore,
                                  is most eligible for discarding.

Walk Free List                    Displays only free blocks of memory.

GC(0) and Walk                    Performs a global compact, asking for
                                  zero bytes, then displays the heap.

GC(-1) and Walk                   Attempts to throw out all discardable
                                  objects and then displays the heap.

Command                           Action
────────────────────────────────────────────────────────────────────────────

GC(-1) and Hit A:                 Attempts to throw out all discardable
                                  objects, then accesses drive A. Used to
                                  test critical error handling.

Set Swap Area                     Resets the code fence. The code fence
                                  defines an area of memory reserved for
                                  discardable code.

Segmentation Test                 Dumps the heap to a file called
                                  HWG00.TXT and does a global compact (-1).
                                  Heap Walker numbers files consecutively
                                  in subsequent dumps. This command is
                                  available whenever Heap Walker is in the
                                  system and EMS memory is not installed,
                                  even if Heap Walker is not the active
                                  application.

Specified application             Walks the heap of a specified
Command                           Action
────────────────────────────────────────────────────────────────────────────
Specified application             Walks the heap of a specified
                                  application using the Expanded Memory
                                  Specification. An EMS walk comprises
                                  relevant objects in memory above the EMS
                                  line and below 1-megabyte.. This command
                                  is available only in real mode for
                                  systems with EMS installed.

────────────────────────────────────────────────────────────────────────────




11.3.3  Sorting Memory Objects: The Sort Menu

Heap Walker lets you sort memory objects in a variety of ways. Table 11.3
describes Heap Walker sort commands.

Table 11.3  Sort Commands

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Action
────────────────────────────────────────────────────────────────────────────
Address (real mode only)          Sorts by address.

Selector (protected mode only)    Sorts by selector.

Module                            Sorts by module name.

Size                              Sorts by object size.

Label Segments                    Substitutes segment names for segment
                                  numbers.

────────────────────────────────────────────────────────────────────────────




11.3.4  Displaying Memory Objects: The Object Menu

Heap Walker lets you view objects selectively. Table 11.4 describes commands
to control and display memory objects.

Table 11.4  Memory Object Commands

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Action
────────────────────────────────────────────────────────────────────────────
Show                              Displays the contents of a selected
                                  object in hexadecimal and ASCII format.

Show Bits                         Displays the bitmap (if any) of a
                                  selected graphics device interface (GDI)
                                  object such as a font or cursor.

Discard                           Discards a selected object.

Oldest                            Marks a selected object as the next
                                  candidate for
                                  discarding.
Command                           Action
────────────────────────────────────────────────────────────────────────────
                                  discarding.

Newest                            Marks a selected object as the last
                                  candidate for
                                  discarding.

LocalWalk                         Displays the local heap of the currently
                                  selected object. The object must be a
                                  data segment. The local walk window
                                  shows the following:

                                  OFFSET─The offset from the DS register
                                  of the object

                                  SIZE─Size in bytes of the object

                                  MOV/FIX─Indicates whether the object is
                                  moveable or fixed

Command                           Action
────────────────────────────────────────────────────────────────────────────

                                  FLAGS─Indicates whether or not an object
                                  is discardable

                                  OBJ TYPE─Object type

                                  Windows allocates the first object in
                                  the local heap, so there are always at
                                  least two objects in a local heap.
                                  LocalWalk has a File menu with a Save
                                  command that saves to a file named
                                  HWL00.TXT. Heap Walker numbers files
                                  consecutively on subsequent dumps
                                  (HWL00.TXT, HWL01.TXT).

LC(-1) and LocalWalk              Compacts the selected local heap, then
                                  displays the heap. LocalWalk has a Save
                                  command that saves to a file named
                                  HWL00.TXT. Heap Walker numbers files
Command                           Action
────────────────────────────────────────────────────────────────────────────
                                  HWL00.TXT. Heap Walker numbers files
                                  consecutively on subsequent dumps
                                  (HWL00.TXT, HWL01.TXT).



Table 11.4  Memory Object Commands (continued)

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Action
────────────────────────────────────────────────────────────────────────────
GDI LocalWalk                     Displays the GDI local heap and provides
                                  information on the objects in the heap.
                                  LocalWalk has a Save command that saves
                                  to a file named HWL00.TXT. Heap Walker
                                  numbers files consecutively on
                                  subsequent dumps (HWL00.TXT, HWL01.TXT).

────────────────────────────────────────────────────────────────────────────
Command                           Action
────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────




11.3.5  Allocating Memory: The Alloc Menu

Heap Walker lets you allocate part or all of memory. Table 11.5 describes
commands that allocate memory.

Table 11.5  Memory Allocation Commands

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Action
────────────────────────────────────────────────────────────────────────────
Allocate all of memory            Allocates all free memory. This command
                                  is useful for testing out-of-memory
                                  conditions in applications.

Command                           Action
────────────────────────────────────────────────────────────────────────────

Free allocated memory             Frees memory allocated by the Allocate
                                  all of memory command.

Free 1K                           Frees 1K of memory. Applies only to
                                  memory allocated by the Allocate all of
                                  memory command.

Free 2K                           Frees 2K of memory. Applies only to
                                  memory allocated by the Allocate all of
                                  memory command.

Free 5K                           Frees 5K of memory. Applies only to
                                  memory allocated by the Allocate all of
                                  memory command.

Free 10K                          Frees 10K of memory. Applies only to
                                  memory allocated by the Allocate all of
                                  memory command.
Command                           Action
────────────────────────────────────────────────────────────────────────────
                                  memory command.

Free 25K                          Frees 25K of memory. Applies only to
                                  memory allocated by the Allocate all of
                                  memory command.

Free 50K                          Frees 50K of memory. Applies only to
                                  memory allocated by the Allocate all of
                                  memory command.

Free XK                           Frees a specified number of kilobytes of
                                  memory. Heap Walker displays a dialog
                                  box that lets you specify the number.

────────────────────────────────────────────────────────────────────────────




11.3.6  Determining Memory Size: The Add! Menu

Heap Walker lets you determine the total size of selected memory objects. To
add the total number of bytes of selected objects, choose the Add! menu. The
menu is a command that displays the number of selected segments and total
segment size in a dialog box.


11.4  Suggestions for Using Heap Walker

One error that frequently occurs in applications is the failure to free
memory objects once they are no longer needed. This can cause Windows to
fail when one of its data segments grows beyond the 64K limit.

You can use Heap Walker to help determine if your application is not freeing
memory objects. Heap Walker lets you view changes in the size of all Windows
data segments, allowing you to observe the effect your application has on
these segments.

To check how your application changes the size of the Windows data segments,
follow these steps:


  1.  Make sure that your application does not generate fatal exits.

  2.  Start the debugging version of Windows, making sure that all the
      values for settings in the [kernel] section of WIN.INI are correct.

  3.  Immediately start Heap Walker and note the sizes of the GDI and USER
      data segments. This establishes the baseline against which you can
      compare the size of the data segments later.

  4.  Select the Object GDI LocalWalk(DATASEG) menu option to display a
      window that lists the different objects in the GDI data segment.
      Select the Save! menu option of this window to copy this list to a
      file; the file will also contain a summary of GDI objects.

  5.  Run your application and exercise it fully over a long period of time,
      noting the changes in the size of the GDI and USER data segments which
      Heap Walker displays as your application runs. While your application
      is running, repeat step 4 a number of times to take "snapshots" of the
      effect your application has on the GDI data segment.

  6.  Close your application, take a final "snapshot" of the GDI data
      segment, and note the total sizes of the GDI and USER data segments.


As you analyze the data that you've recorded, you should look for GDI
objects that your application creates but does not delete when they are no
longer needed.

You should also check the size of the USER data segment before and after you
run your application. While it is normal for the USER data segment to be a
little larger after your application has run once, it should not grow larger
after you have run your application additional times. If it does, your
application probably is calling the MakeProcInstance function without
calling FreeProcInstance to free the procedure-instance address when it is
no longer needed.


11.5  Summary

Heap Walker is a tool that lets you examine objects on the global heap. For
more information on the heap, see Chapter 15, "Memory Management," and
Chapter 16, "More Memory Management," in Guide to Programming.






Chapter 12  Moving Memory: Shaker
────────────────────────────────────────────────────────────────────────────

The Microsoft Windows Shaker (SHAKER) lets you see the effect of memory
movement on your application. Shaker randomly allocates and frees chunks of
global memory with the intention of forcing the system to relocate moveable
data or code segments in your application.

Shaker is useful for making sure that no problems occur when memory moves.

This chapter describes commands you use to allocate and free global memory.



12.1  Using Shaker

To use Shaker, select the parameters you want and start Shaker. You select
parameters and start or stop Shaker with the following commands on the menu
bar:

Command                           Function
────────────────────────────────────────────────────────────────────────────
Parameter                         Displays a dialog box that lets you
                                  specify the following parameters:

                                  ■ Allocation Granularity─Sets the
                                  minimum
                                  size of the objects to be allocated.
                                  Each object
                                  is some multiple of this size; for
                                  example, if the granularity is 128,
                                  Shaker allocates objects that have byte
                                  sizes of 128, 256, 384, and so on. The
                                  smaller the granularity, the more likely
                                  it is that the allocated objects will
                                  fit in the spaces between global objects.


                                  ■ Time Interval─Sets the time interval,
                                  in system-timer ticks, between
                                  allocations. Shaker allocates a new
                                  object after each interval elapses. If
                                  the maximum number of objects has been
                                  allocated, it reallocates one it had
                                  previously allocated.

                                  ■ Max Objects─Sets the maximum number
                                  of
                                  objects to be allocated.

Display                           Displays or removes the display of
                                  object handles and allocation sizes.

Command                           Function
────────────────────────────────────────────────────────────────────────────
Start                             Starts the allocation.

Stop                              Stops the allocation.

Step                              Allocates one object and stops. This
                                  command can be used when Shaker is
                                  otherwise stopped.


12.2  Summary

Shaker is a tool that shows you the effect of memory movement on your
application. For more information on memory management, see Chapter 15,
"Memory Management," and Chapter 16, "More Memory Management," in  Guide to
Programming.






Chapter 13  Analyzing CPU Time: Profiler
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Profiler (PROFILER) is an analytical tool that helps you
optimize the performance of Windows applications. Profiler lets you sample
the amount of time Windows spends executing sections of code.

This chapter describes the following topics:


  ■   An overview of Profiler

  ■   Preparing to run Profiler

  ■   Using Profiler functions

  ■   Sampling code

  ■   Displaying samples


Profiler analyzes applications running with Windows in real mode or in 386
enhanced mode; it cannot analyze applications running with Windows in
standard mode. If you are analyzing Windows applications in real mode, you
use Profiler differently than if you are analyzing applications running with
Windows in 386 enhanced mode. Section 13.4, "Sampling Code," discusses the
differences. Profiler does not support Windows running in standard mode.


13.1  Overview of Profiler

Profiler contains the following:


  ■   A sampling utility

  ■   A reporting utility

  ■   A set of functions that you call from your application


The sampling utility gathers information about the time spent between
adjacent labels, and records memory addresses of code. If the application
you are profiling runs with Windows in real mode, the sampling utility is
PROF.COM. To run the Profiler you invoke PROF.COM, which in turns invokes
Windows.

If the application you are profiling runs with Windows in 386 enhanced mode,
the sampling utility is a special device driver, VPROD.386. To run Profiler,
first install VPROD.386, and then run Windows directly.

Profiler stores the information it gathers in a buffer. It writes the buffer
to disk when Windows terminates, producing a CSIPS.DAT file and a
SEGENTRY.DAT file in the directory that was your current directory when you
started Windows. The CSIPS.DAT file contains statistical samplings of the
code segment (CS), instruction pointer (IP) registers. The SEGENTRY.DAT file
contains information about the movement of code segments. Because code
segments can be located at different physical addresses during the execution
of the program, information in both the CSIPS.DAT and SEGENTRY.DAT files are
required to prepare the profiling report.

After the sampling utility has finished gathering information, the reporting
utility, SHOWHITS.EXE, organizes and displays the results.

Profiler's functions let you start and stop examining code, manage the
output of code samples, and get information about Profiler. All applications
that Profiler examines must include two functions that start and stop the
sampling of code. Other Profiler functions are optional.


13.2  Preparing to Run Profiler

To profile a Windows application in real mode, you need an IBM PC/AT(R) or
PS/2(R) compatible system because Profiler uses the AT CMOS clock chip to
time sampling intervals. The utility will not run on standard PC and
PC/XT(tm) systems.

To profile an application running with Windows in 386 enhanced mode, use any
system capable of running Windows in 386 enhanced mode.

In addition to ensuring that your system is compatible with Profiler, you
must do the following:


  1.  Ensure that the Windows directory is defined in your PATH environment
      variable.

  2.  Include in your application at least two mandatory Profiler functions,
      ProfStart and ProfStop.

      ProfStart indicates when you want Profiler to start sampling code;
      ProfStop indicates when you want Profiler to stop sampling. Other
      functions are optional.

  3.  Compile your application and link the compiled code with the standard
      Windows libraries. Use the LINK /m option to prepare a .MAP file. This
      file is required by the MAPSYM utility.

  4.  Use MAPSYM to produce an application symbol (.SYM) file.



13.3  Using Profiler Functions

In addition to the mandatory ProfStart and ProfStop functions, Profiler
includes functions that determine if Profiler is installed, specify a rate
for sampling, and control the output buffer.

The way you use the Profiler functions depends on whether your application
runs in real mode or in 386 enhanced mode.

If your application runs with Windows in real mode and you want to override
the standard sampling rate or the amount of data that the Profiler writes to
disk, you can use either command line options when invoking the Profiler or
Profiler functions. For information on using command line options, see
Section 13.4, "Sampling Code."

If your application runs with Windows in 386 enhanced mode and you want to
specify nondefault values, you must use Profiler functions. You cannot
change default values when invoking the utility.

The sections that follow describe Profiler functions.


13.3.1  Starting and Stopping Sampling: The ProfStart and ProfStop Functions

Use the ProfStart and ProfStop functions for each section of code that you
want to sample. Deciding where to call ProfStart and ProfStop is important.
You should avoid sampling when your application calls Windows functions that
yield to other applications. For example, sampling a function such as
GetMessage could cause Profiler to collect data on applications other than
your own.

The following example illustrates when to call ProfStart and ProfStop:

  #include "windows.h"
  #include "hello.h"
     .
     .
     .
  void HelloPaint( hDC )
  HDC hDC;
  {
      int i, j;

      ProfStart();

  for(i = 1; i <= 3; i++)
        for(j = 1; j <= 20; j++)
   {
        TextOut( hDC,
                   (short)(i * 120),
                    (short)(j * 12),
                    (LPSTR)szMessage,
                    (short)MessageLength );
   }
      ProfStop();
  }
     .
     .
     .

In this example, the Profiler ProfStart and ProfStop functions specify that
Profiler sample the application's HelloPaint function. Profiler samples only
the nested loops that include the call to the TextOut function.


13.3.2  Checking if Profiler Is Installed: The ProfInsChk Function

To determine if Profiler is installed, use the ProfInsChk function.
ProfInsChk has the following syntax:

  int FAR PASCAL ProfInsChk(void)

The function returns the following values:


  ■   0 if Profiler is not installed

  ■   1 if the Windows real-mode Profiler is installed

  ■   2 if the Windows 386-enhanced-mode Profiler is installed


If Profiler is not installed, the system ignores other Profiler function
calls.


13.3.3  Setting the Sampling Rate: The ProfSampRate Function

To set the rate of code sampling, use the ProfSampRate function.
ProfSampRate has the following syntax:

  void FAR PASCAL ProfSampRate(int,int)

The first parameter specifies the sampling rate of Profiler if the
application is running with Windows in real mode. The value of the first
parameter ranges from 1 to 13, indicating the following sampling rates:

Numeric Value                     Sampling Rate
────────────────────────────────────────────────────────────────────────────
1                                 122.070 microseconds

2                                 244.141 microseconds

3                                 488.281 microseconds

4                                 976.562 microseconds

5                                 1.953125 milliseconds

6                                 3.90625 milliseconds

7                                 7.8125 milliseconds

8                                 15.625 milliseconds

9                                 31.25 milliseconds

10                                62.5 milliseconds

11                                125 milliseconds

12                                250 milliseconds

13                                500 milliseconds

The second parameter defines sampling rates if Profiler is analyzing an
application running with Windows in 386 enhanced mode. The value of the
second parameter can range from 1 to 1000, specifying the sampling rate in
milliseconds.

For Windows in real mode the initial rate is 5 (1.953125 milliseconds) or
what you specify when invoking PROF.COM.

For Windows in 386 enhanced mode, the default rate is 2 milliseconds.

────────────────────────────────────────────────────────────────────────────
NOTE

Profiler selects only the parameter appropriate for the version of Windows
used. If your application runs with Windows in real mode, Profiler reads
only the first parameter; if your application runs with Windows in 386
enhanced mode, Profiler reads only the second.
────────────────────────────────────────────────────────────────────────────


13.3.4  Managing Output: The ProfClear, ProfFlush, and ProfSetup Functions

To manage the output of samples that Profiler gathers, use the ProfClear,
ProfFlush, and ProfSetup functions. ProfClear discards all samples currently
in the sampling buffer. ProfFlush flushes the sampling buffer to disk,
provided that samples do not exceed the limit you define.

────────────────────────────────────────────────────────────────────────────
IMPORTANT

Use ProfFlush sparingly because it can distort the performance of your
application. Additionally, do not call the function when DOS may be
unstable, as in interrupt handling.
────────────────────────────────────────────────────────────────────────────

The ProfSetup function lets you specify the size of the output buffer and
the amount of samples written to disk. ProfSetup is available only to
applications running with Windows in 386 enhanced mode.

If your application runs with Windows in real mode, you must specify the
size of the output buffer and the size of sampling data when you invoke
Profiler.

The syntax of ProfSetup is as follows:

  void FAR PASCAL ProfSetup(int, int)

The first parameter specifies the size of the output buffer in kilobytes
(K), from 1 to 1064. The default value is 64.

The second parameter controls how much sampling data Profiler writes to
disk. Default value is the size of the output buffer in kilobytes. A value
of 0 specifies unlimited sampling data.

The following example uses ProfSetup to specify values for the size of the
output buffer and the amount of samples written to disk. It also calls
ProfSampRate to change the default sampling rate.

  BOOL HelloInit( hInstance )
  HANDLE hInstance;
  {
      PWNDCLASS   pHelloClass;
     .
     .
     .

  int PASCAL WinMain( hInstance, hPrevInstance, lpszCmdLine, cmdShow )
  HANDLE hInstance, hPrevInstance;
  LPSTR lpszCmdLine;
  int cmdShow;
  {
      MSG   msg;
      HWND  hWnd;
      HMENU hMenu;
     .
     .
     .
      ProfSetup(100,0);
      ProfSampRate(4,1);
     .
     .
     .

In this example, the ProfSetup function changes the default sample buffer
size from 64K to 100K and specifies that Profiler write an unlimited amount
of data to disk. The function applies only if the application is running
with Windows in 386 enhanced mode. The ProfSampRate function changes default
sampling rates to 1 millisecond in 386 enhanced mode.

If the application runs with Windows in real mode, Profiler ignores the
ProfSetup call. The ProfSampRate function changes default sampling rates to
976.562 microseconds in real mode.


13.3.5  Stopping Profiler: The ProfFinish Function

To stop Profiler, use the ProfFinish function. ProfFinish stops sampling and
flushes the output buffer to disk. If your application is running with
Windows in 386 enhanced mode, ProfFinish also frees the buffer for system
use.

If you do not call ProfFinish, the output buffer automatically flushes to
disk when you terminate Windows.

If you are profiling more than one instance of the same application, calling
the ProfFinish function will stop Profiler for all instances of the
application.


13.4  Sampling Code

The method you use to sample code depends on the version of Windows your
application runs with. If your application runs with Windows in real mode,
you invoke the PROF.COM program, which loads and runs Windows. If your
application runs with Windows in 386 enhanced mode, you first install
VPROD.386, a virtual device driver, and then run Windows directly.

In real mode, the Profiler output buffer is limited to 64K. In 386 enhanced
mode, your application can call ProfSetup to set the size of the output
buffer up to 1064K.

Both sampling methods use memory that is otherwise available to Windows.
Therefore, using Profiler may decrease the performance of the application
you are analyzing. You can reduce the amount of memory used by specifying a
small output buffer. However, a small output buffer may cause sample loss.

Profiler can write samples to disk only when Windows indicates it is safe to
do so. When the sampling buffer fills, Profiler ignores additional samples
until the buffer is flushed to disk. To minimize sample loss, either
increase the buffer size or periodically call the ProfFlush function.

The following sections describe features specific to Windows in real mode,
and Windows in 386 enhanced mode.


13.4.1  Sampling Applications in Windows Real Mode

To profile applications running with Windows in real mode, use the PROF.COM
utility.

The syntax for invoking PROF.COM is as follows:

  PROF «-tn» [[-cn» «-ln» «-d» «program arguments»

The KERNEL.EXE file must be in the current directory or in the current PATH
environment. The following describes the command line options:

Option                            Description
────────────────────────────────────────────────────────────────────────────
-tn                               Specifies the intervals at which
                                  Profiler samples code. For values of n,
                                  see the description of real-mode Windows
                                  arguments to the ProfSampRate function
                                  in Section 13.3.3, "Setting the Sampling
                                  Rate: The ProfSampRate Function."

-cn                               Specifies the size of the output buffer
                                  in kilobytes. The value of n can range
                                  from 1 to 64 (default buffer size is
                                  64K).

-ln                               Limits the total size of samples written
                                  to disk. If this option is not specified,
                                  the default is the size of the output
                                  buffer.

-d                                Specifies that the program being
                                  analyzed runs with DOS, not Windows.

Option                            Description
────────────────────────────────────────────────────────────────────────────
program arguments                 Names the program and arguments, if any,
                                  that Profiler loads and runs. You would
                                  typically place arguments, such as the
                                  name of the application you are running,
                                  on the Windows command line. If
                                  specified, the name must include an
                                  extension. When profiling Windows
                                  applications, this parameter should be
                                  the name of the Windows program,
                                  typically WIN.COM.


13.4.2  Sampling Applications in Windows 386 Enhanced Mode

The PROF.COM command line options are not available when you profile
applications that run with Windows in 386 enhanced mode. Instead, you add
the Profiler functions to your source code to get equivalent results.

To profile applications that run with Windows in 386 enhanced mode, do the
following:


  1.  Install the VPROD.386 driver by adding the following to the [386enh]
      section of your SYSTEM.INI file:

      DEVICE=VPROD.386


  2.  Run Windows in 386 enhanced mode.

  3.  Run the application you want to profile.

  4.  When you have finished profiling your application, remove the
      VPROD.386 entry from your SYSTEM.INI file.



13.5  Displaying Samples: SHOWHITS.EXE

Use a DOS application, SHOWHITS.EXE, to display data that the Profiler
gathers. This reporting utility reads CSIPS.DAT, SEGENTRY.DAT, and .SYM
files, and organizes and displays the data. The sampling utility places the
CSIPS.DAT and SEGENTRY.DAT files in the current directory. To ensure that
SHOWHITS can locate these files, either run SHOWHITS from the same
directory, or else specify full pathnames for the CSIPS.DAT and SEGENTRY.DAT
files. If the .SYM files are not in the current directory, then use the -i
option to specify the directory or directories containing the symbols files.

SHOWHITS.EXE reads .SYM files to match instruction pointer samples with
global symbols in the application. When you run SHOWHITS.EXE the utility
searches for .SYM files that contain symbolic names identical to the names
of modules that Profiler sampled. If the sampled program is written in the C
language, the symbolic names are typically function names. If the sampled
program is written in assembly language, the symbolic names can be either
procedure names or PUBLIC symbols within procedures.

SHOWHITS.EXE reports the number of times sampling occurred between  adjacent
symbols.

The syntax for invoking SHOWHITS.EXE is as follows:

  SHOWHITS «-r|3» «-ipath [-ipath«...»»» «csips_file» «segentry_file»

The following describes SHOWHITS.EXE options:

Option                            Description
────────────────────────────────────────────────────────────────────────────
-r                                The Profiler was run in real mode
                                  (PROF.COM). SHOWHITS uses the KERNEL.SYM
                                  Windows
                                  kernel symbol file.

-3                                The Profiler was run in 386 enhanced
                                  mode (VPROD.386). SHOWHITS uses the
                                  KRNL386.SYM Windows kernel symbol file.

-ipath                            The path option specifies one or more
                                  directories to search for .SYM files.
                                  The default is the current directory.
                                  SHOWHITS.EXE loads all .SYM files in the
                                  specified directories, regardless of
                                  their relevance to the application you
                                  are profiling.

csips_file                        Specifies the full pathname of the
                                  CSIPS.DAT file. If not specified,
                                  SHOWHITS.EXE looks for the file in the
                                  current directory.

segentry file                     Specifies the full pathname of the
                                  SEGENTRY.DAT file. If not specified,
                                  SHOWHITS.EXE looks for the file in the
                                  current directory.

If you do not supply the -r or -3 option, SHOWHITS.EXE will prompt you for
the mode.

SHOWHITS.EXE displays information about hits, which are instruction pointer
samples, into the following four categories:

Category                          Description
────────────────────────────────────────────────────────────────────────────
Unrecognized                      A list of instruction pointers that
segments                          occur within segments for which there
                                  are no symbols of module names.
                                  Unrecognized segments are typically code
                                  for device drivers, TSR programs, and
                                  other code that Windows does not use.

Category                          Description
────────────────────────────────────────────────────────────────────────────
Known segments                    The number of hits that occur within
                                  known modules. Hits on known segments
                                  typically include counts for the
                                  application and counts for Windows
                                  modules such as KERNEL, GDI, and DISPLAY.
                                  Profiler also counts hits in DOS and the
                                  ROM BIOS. In addition to display hits,
                                  SHOWHITS.EXE lists the total number of
                                  hits and the segment's percentage of
                                  total hits.

Breakdown                         A detailed breakdown of the hits between
                                  labels
                                  of the modules for which SHOWHITS.EXE
                                  finds .SYM files. SHOWHITS.EXE also
                                  displays the
                                  total number of hits and the percentage
                                  of the total number.

Summary                           A list of the top 10 hits.

The following example illustrates a display:

  Here are the Hits for Unrecognized Segments

  Here are the Hits for Known Segments

   0.3%        3  Hits on SYSTEM-0
   0.5%        5  Hits on HELLO-0
  76.5%      786  Hits on DISPLAY-0
  11.3%      116  Hits on GDI-0
  11.5%      118  Hits on KERNEL-0

     1028  TOTAL HITS


  HELLO!_TEXT

   0.4%        4  Hits between labels _HelloPaint and _HelloInit
   0.1%        1  Hits between labels __cintDIV and __fptrap

  Profiler Summary (Top 10 Hits):

   0.4%        4  HELLO! _TEXT! _HelloPaint - _HelloInit
   0.1%        1  HELLO! _TEXT! __cintDIV - __fptrap


13.6  Summary

Profiler is a tool that lets you determine the amount of time Windows spends
executing sections of code. For more information about Profiler functions,
see Reference, Volume 1: Chapter 4, "Functions Directory."






Chapter 14  Analyzing Swaps: Swap
────────────────────────────────────────────────────────────────────────────

Microsoft Windows Swap (SWAP) is a tool that lets you analyze the calls,
swaps, discards, and returns that occur when your Windows application runs.
Swap includes a utility that records swapping information and another
utility that displays the information to a standard output device.

Swap is useful for determining the number of procedure calls that occur
across segment boundaries. You can optimize the performance of your
application by reducing the number of calls across boundaries.

This chapter describes the following topics:


  ■   Preparing to run Swap

  ■   Running Swap

  ■   Displaying swapping information




14.1  Preparing to Run Swap

Before running Swap, do the following:


  ■   Ensure that you have the necessary Swap files.

  ■   Place the SwapRecording function in your application.



14.1.1  Files You Need to Run Swap

To run Swap, you need the following files:


  ■   SKERNEL.EXE─Windows uses this file instead of KERNEL.EXE as part of
      the debugging version of Windows. The SKERNEL.EXE file produces a data
      file named SWAPPRO.DAT, which contains information about the swapping
      behavior of your application. SKERNEL.EXE runs only when Windows is in
      real mode.

  ■   Application .SYM files─Swap requires symbol files for the modules of
      your application that you want to analyze. To create symbol files,
      first link the program using the /map option, and then run the MAPSYM
      utility.

  ■   SWAP.EXE─This file uses the SWAPPRO.DAT file to produce a report of
      swapping behavior.


Swap also includes the optional SKERNEL.SYM file, which provides a listing
of symbols in SKERNEL.EXE.


14.1.2  Using the SwapRecording Function

Place the SwapRecording function in your application to indicate when to
start and stop recording swapping behavior. The syntax of the function is as
follows:

  SwapRecording(value)

The value parameter specifies whether Swap begins or stops analyzing
swapping behavior, as follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Value                             Description
────────────────────────────────────────────────────────────────────────────
0                                 Specifies that Swap stop analyzing.

1                                 Specifies that Swap record calls,
                                  discards, and swap returns.

2                                 Specifies that Swap record calls,
                                  discards, swap returns, and all calls
                                  through thunks.




14.2  Running Swap

To run Swap, do the following:


  1.  Make a backup copy of the KERNEL.EXE file in your Windows system
      directory by copying or renaming it.

  2.  Copy SKERNEL.EXE in the Windows development tools directory (named
      \WINDEV by default at installation) to the Windows system directory.

  3.  Start Windows in real mode (WIN /R) and run the application you want
      to analyze.

  4.  Exit from Windows.

  5.  Run SWAP.EXE.

  6.  When you are finished, be sure to restore the original KERNEL.EXE in
      your Windows system directory.


The following command invokes SWAP.EXE:

  SWAP [-Ipath[;path...» [-Fswapfile]
[-Mmodule[:segment][;module[:segment]...»

Command line options are as follows:

Option                            Description
────────────────────────────────────────────────────────────────────────────
-I                                Specifies one or more directory
                                  pathnames containing the symbol files of
                                  the modules to be analyzed.

-F                                Specifies the pathname of the data
                                  collection file.

-Mmodule                          Specifies the application module that
                                  Swap analyzes.

segment                           Specifies the segment that Swap
                                  analyzes.


14.2.1  Specifying a Symbol-File Path

By default, Swap searches for all required symbol files in the current
directory. To evaluate data in symbol files located in other directories,
specify the pathnames with the -I option. The pathnames must be separated by
semicolons.

For example, the following command line specifies that symbol files reside
in the \PRE\SYSTEM and \TEST\SWAP directories:

  SWAP -I\pre\system;\test\swap


14.2.2  Specifying a Pathname for the Data Collection File

By default, Swap searches for the SWAPPRO.DAT file in the current directory.
If you rename the data collection file or place it somewhere other than the
current directory, use the -F option.

For example, the following command line specifies that the data collection
file, named SWAPREC, resides in directory TMP:

  SWAP -F\TMP\SWAPREC


14.2.3  Specifying a Module and Segment

If the data collection file contains a large amount of data, Swap takes a
long time processing the module and symbol names. To reduce the time, use
the -M option to limit the number of modules and segments for which Swap
prepares output.

The following example specifies that Swap display only records that contain
the _FONTRES segment of the GDI:

  SWAP -MGDI:_FONTRES

You can list multiple segments or module/segment pairs by separating them on
the command line with semicolons. The following example specifies that Swap
display records that contain the _FONTRES segment of the GDI and any segment
of USER:

  SWAP -MGDI:_FONTRES;USER


14.3  Displaying Output

Swap displays records of swapping behavior on standard output devices. Use
DOS commands to direct output to either a file or a screen.

Swap records information in columns of ASCII text separated by tabs. The
format is suitable for reading into spreadsheet programs such as Microsoft
Excel.

Swap displays information from left to right as follows:

Column                            Description
────────────────────────────────────────────────────────────────────────────
Type                              The kind of event that occurred. The
                                  event can be one of the following:

                                  ■ CALL─A normal call through a thunk.

                                  ■ SWAP─A call through a thunk that
                                  caused a swap.

                                  ■ DISCARD─Discard of a segment. If the
                                  discard was the result of a swap, then
                                  the discard records occur after the swap
                                  record.

                                  ■ RETURN─Return that caused a swap in
                                  the
                                  caller.

Time                              The relative time that the event
                                  occurred, in milliseconds. Resolution is
                                  1/18.2 seconds. The first event is
                                  always 0.

Segment (1st)                     One of the following:

                                  ■ If CALL or SWAP, the segment being
                                  called.

                                  ■ If DISCARD, the segment being
                                  discarded.

                                  ■ If RETURN, the segment being returned
                                  to.

                                  If the module name appears in
                                  parentheses, Swap could not find the
                                  .SYM file for the module.

Offset (1st)                      One of the following:

                                  ■ If CALL or SWAP, the offset into the
                                  segment being called.

                                  ■ If RETURN, the offset into the segment
                                  being
                                  returned to.

                                  ■ If DISCARD, this field is blank.

Segment (2nd)                     One of the following:

                                  ■ If CALL or SWAP, the segment that did
                                  the
                                  calling.

Column                            Description
────────────────────────────────────────────────────────────────────────────
                                  ■ If DISCARD, this field is blank.

                                  ■ If RETURN, this field is blank.

                                  If the module name appears in
                                  parentheses, Swap could not find the
                                  .SYM file for the module.

Offset (2nd)                      One of the following:

                                  ■ If CALL or SWAP, the offset into the
                                  segment that did the calling.

                                  ■ If RETURN, this field is blank.

                                  ■ If DISCARD, this field is blank.


14.4  Summary

Swap is a tool that lets you analyze the swapping behavior of Windows
applications. For more information about memory management, see Chapter 15,
"Memory Management," and Chapter 16, "More Memory Management," in Guide to
Programming.






PART IV  Help Tools
────────────────────────────────────────────────────────────────────────────

Part 4 provides a guideline for authors and developers of Help systems for
Microsoft Windows applications. It also defines some specific rules that
must be adhered to when creating a Help system for any single application.
For that reason, some sections include step-by-step procedures, while other
sections suggest general methods.

To illustrate concepts and procedures, several chapters use sample screens
and text from the on-line Help in Helpex, a Windows application supplied in
your Software Development Kit. If you want to study this material in greater
detail, you can use the Helpex system as a working model.






Chapter 15  Providing Help: The Help System
────────────────────────────────────────────────────────────────────────────

A Help system provides users with online information about an application.
Creating the system requires the efforts of both a Help writer and a Help
programmer. The Help writer plans, writes, codes, builds, and keeps track of
Help topic files, which are text files that describe various aspects of the
application. The Help programmer ensures that the Help system works properly
with the application.

This chapter describes the following topics:


  ■   Creating the Help system

  ■   How Help appears to the user

  ■   How Help appears to the Help writer

  ■   How Help appears to the Help programmer


This chapter and those that follow assume you are familiar with Microsoft
Windows Help. The chapters use examples from a sample application called
Helpex, provided on the SDK Sample Source Code disk. If you are unfamiliar
with Windows Help, take a moment to run the Helpex sample application and
use Helpex Help.


15.1  Creating a Help System: The Development Cycle

The creation of a Help system for a Windows application comprises the
following major tasks:


  1.  Gathering information for the Help topics.

  2.  Planning the Help system.

      Chapter 16, "Planning the Help System," describes considerations you
      should keep in mind when planning your Help system.

  3.  Writing the text for the Help topics.

  4.  Entering all required control codes into the text files.

      Control codes determine how the user can move around the Help system.
      Section 15.3, "How Help Appears to the Writer," includes an example of
      several control codes. Chapter 17, "Creating the Help Topic Files,"
      describes the codes in detail.

  5.  Creating a project file for the build.

      The Help project file provides information that the Help Compiler
      needs to build a Help resource file. Chapter 18, "Building the Help
      File," describes the Help project file.

  6.  Building the Help resource file.

      The Help resource file is a compiled version of the topic files the
      writer creates. Chapter 18, "Building the Help File," describes how to
      compile a Help resource file.

  7.  Testing and debugging the Help system.

  8.  Programming the application so that it can access Windows Help.


The following flow diagram shows the general work flow in the conception and
development of the Help system.

(This figure may be found in the printed book).


15.2  How Help Appears to the User

To the user, the Help system appears to be part of the application, and is
made up of text and graphics displayed in the Help window in front of the
application. Figure 15.2 illustrates the Help window that appears when the
user asks for help with copying text in Helpex.

(This figure may be found in the printed book).

The Help window displays one sample Help topic, a partial description of how
to perform one task. In Figure 15.2 the first sentence includes a definition
of the word "clipboard." By pressing the mouse button when the cursor is on
the word (denoted by dotted underlined text), the user can read the
definition, which appears in an overlapping box as long as the mouse button
is held down.

Cross-references to related topics are called jumps. By clicking on a jump
term for a related topic (denoted by underlined text), the user changes the
content of the Help window to a description of the new topic or command.
Figure 15.2 includes a look-up to the definition of "clipboard."


15.3  How Help Appears to the Help Writer

To the writer, the Help system is a group of topic files, which are text
files that include special codes. Figure 15.3 illustrates the source text
that corresponds to the topic shown in Figure <$R[C#1]>.2.

(This figure may be found in the printed book).

To create this topic, the Help writer describes the task, formats the text,
and inserts codes using strikethrough text, underlined text, and footnotes.
In place of strikethrough, the writer can use double underlining if the word
processor does not support strikethrough formatting. Footnotes in the text
contain linking information required by the Help Compiler. Chapter 16,
"Planning the Help System," discusses formatting considerations. Chapter 17,
"Creating the Help Topic Files," describes how to create topics and enter
the special codes that the Help system uses.


15.4  How Help Appears to the Help Programmer

To the programmer, Windows Help is a stand-alone Windows application  which
the user can run like any other application. Your application can call the
WinHelp function to ask Windows to run the Help application and specify
which topic to display in the Help window.

See Chapter 18, "Building the Help File," for details about the Help
application programming interface (API).


15.5  Summary

The Help system is made up of topics linked via hypertext. The topics and
links appear differently on the screen to the user than they do in a topic
file to the writer. To the programmer, Help is a stand-alone application.

For more information about related topics, see the following:

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
Topic                 Reference
────────────────────────────────────────────────────────────────────────────
Coding Help topics    Tools: Chapter 17, "Creating the Help Topic Files"
Compiling Help files  Tools: Chapter 18, "Building the Help File"







Chapter 16  Planning the Help System
────────────────────────────────────────────────────────────────────────────

The initial task for the Help writer is to develop a plan for creating the
system. This chapter discusses planning the Help system for a particular
application.

The chapter covers the following topics:


  ■   Developing a plan

  ■   Determining the topic file structure

  ■   Designing the visual appearance of Help topics




16.1  Developing a Plan

Before you begin writing Help topics using the information you have
gathered, you and the other members of the Help team should develop a plan
that addresses the following issues:


  ■   The audience for your application

  ■   The content of the Help topics

  ■   The structure of topics

  ■   The use of context-sensitive topics


You might want to present your plan in a design document that includes an
outline of Help information, a diagram of the structure of topics, and
samples of the various kinds of topics your system will include. Keep in
mind that contextsensitive Help requires increased development time,
especially for the application programmer.


16.1.1  Defining the Audience

The audience you address determines what kind of information you make
available in your Help system and how you present the information.

Users of Help systems might be classified as follows:

User                              Background
────────────────────────────────────────────────────────────────────────────
Computer novice                   Completely new to computing.

Application novice                Some knowledge of computing, but new to
                                  your kind of application. For example,
                                  if you are providing Help for a
                                  spreadsheet program, the application
                                  novice might be familiar only with
                                  word-processing packages.

Application                       Knowledgeable about your kind of
intermediate                      application.

Application expert                Experienced extensively with your type
                                  of application.

Keep in mind that one user may have various levels of knowledge. For
example, the expert in word processors may have no experience using
spreadsheets.


16.1.2  Planning the Content of the Help System

You should create topics that are numerous enough and specific enough to
provide your users with the help they need.

Novice users need help learning tasks and more definitions of terms. More
sophisticated users occasionally seek help with a procedure or term, but
most often refresh their memory of commands and functions. The expert user
tends only to seek help with command or function syntax, keyboard
equivalents and shortcut keys.

There are no rules for determining the overall content of your Help system.
If you are providing Help for all types of users, you will want to document
commands, procedures, definitions, features, functions, and other relevant
aspects of your application. If you are providing help for expert users
only, you might want to omit topics that describe procedures. Let your
audience definition guide you when deciding what topics to include.

Keep in mind that the decision to implement context-sensitive Help is an
important one. Context-sensitive Help demands a close working relationship
between the Help author and the application programmer, and will therefore
increase the development time necessary to create a successful Help system.



16.1.3  Planning the Structure of Help Topics

Many Help systems structure topics hierarchically. At the top of the
hierarchy is an index or a table of contents, or both. The index and table
of contents list individual topics or categories of topics available to the
user.

Topics themselves can be related hierarchically. Each successive step takes
the user one level down in the hierarchy of the Help system until the user
reaches topic information. The hierarchical relationship of Help topics
determines in part how the user navigates through the Help system. Figure
16.1 illustrates a possible hierarchy:

(This figure may be found in the printed book).

Helpex contains an index that lists several categories of topics. Each
category includes a secondary index, which lists topics in the category, and
the topics themselves.

Moving from the index to a topic, the user goes from the general to the
specific.

The hierarchical structure provides the user a point of reference within
Help. Users are not constrained to navigate up and down the hierarchy; they
can jump from one topic to another, moving across categories of topics. The
effect of jumps is to obscure hierarchical relationships. For example, the
Windows Help application contains a search feature that lets the user enter
a key word into a dialog box and search for topics associated with that key
word. The Help application then displays a list of titles to choose from in
order to access information that relates to the key word.

Because users often know which feature they want help with, they can usually
find what they want faster using the search feature than they can by moving
through the hierarchical structure. For more information about the search
feature, see Section 17.3.4, "Assigning Key Words."

In addition to ordering topics hierarchically, you can order them in a
logical sequence that suits your audience. The logical sequence, or "browse
sequence," lets the user choose the Browse button to move from topic to
topic. Browse sequences are especially important for users who like to read
several related topics at once, such as the topics covering the commands on
the File menu. For more information about browse sequences, see Chapter 17,
"Creating the Help Topic Files."

Whichever structure you decide to use, try to minimize the number of lists
that users must traverse in order to obtain information. Also, avoid making
users move through many levels to reach a topic. Most Help systems function
quite well with only two or three levels.


16.1.4  Displaying Context-Sensitive Help Topics

Windows Help supports context-sensitive Help. When written in conjunction
with programming of the application, context-sensitive Help lets the user
press F1 in an open menu to get help with the selected menu item.
Alternatively, the user can press SHIFT+F1 and then click on a screen region
or command to get help on that item.

For example, if the user presses SHIFT+F1, then clicks on the maximize icon
when using the sample application Helpex, the Help system displays the
information illustrated in Figure 16.2:

(This figure may be found in the printed book).

Developing context-sensitive Help requires coordination between the Help
writer and the application programmer so that Help and the application pass
the correct information back and forth.

To plan for context-sensitive Help, the Help author and the application
programmer should agree on a list of context numbers. Context numbers are
arbitrary numbers that correspond to each menu command or screen region in
the application, and are used to create the links to the corresponding Help
topics. You can then enter these numbers, along with their corresponding
context-string identifiers, in the Help project file, which the Help
Compiler uses to build a Help resource file. Section 18.1, "Creating the
Help Project File," provides details  on how to create a Help project file.


The context numbers assigned in the Help project file must correspond to the
context numbers that the application sends at run time to invoke a
particular topic. See Section 18.9, "Programming the Application to Access
Help," for more information on assigning context numbers.

If you do not explicitly assign context numbers to topics, the Help Compiler
generates default values by converting topic context strings into context
numbers. See Section 18.6, "Mapping Context-Sensistive Topics: The Map
Section," for more information on context-sensitive Help and context
strings.

To manage context numbers and file information, you might want to create a
Help tracker to list the context numbers for your context-sensitive topics.
See Section 17.5.1, "Creating the Help Tracker," for information about using
a tracker.


16.2  Determining the Topic File Structure

The Help file structure remains essentially the same for all applications
even though the context and number of topic files differ. Topic files are
segmented into the different topics by means of page breaks. When you build
the Help system, the compiler uses these topic files to create the
information displayed for the user in the application's Help window.

Figure 16.3 shows this basic file structure.

(This figure may be found in the printed book).


16.2.1  Choosing a File Structure for Your Application

When choosing a file structure for your Help system, consider the scope and
content of the Help system you are planning. For example, you could place
all Help topics in a single large topic file. Or, you could place each Help
topic in a separate file. Neither of these file structures is generally
acceptable. An enormous single file or too many individual files can present
difficulties during the creation of the Help resource file.

The number of topics relates to the number of features covered by the Help
system. Consequently, you cannot make extensive changes to one without
making changes to the other. For instance, if a number of additional product
features are added to Help, then additional topics must be created to
accommodate the new information.

Figure 16.4 illustrates the file structure of a possible Help system. The
number of topics and topic files is limited to simplify the diagram and more
clearly show the concept of linking the topics together through jumps, shown
in the figure as arrows. The figure is not intended to show the number of
files that can be included in the Help file system. Moreover, the figure
does not show how topic files are ordered using the browse feature.

(This figure may be found in the printed book).


16.3  Designing the Appearance of Help Topics

How the information in the Help window appears to the user is primarily a
function of the layout of the Help topic. The Windows Help application
supports a number of text attributes and graphic images you can use to
design your Help window.

This section provides general guidelines for designing a window and
describes fonts and graphic images that Windows Help supports.


16.3.1  Layout of the Help Text

Help text files are not limited to plain, unformatted text. You can use
different fonts and point sizes, include color and graphics to emphasize
points, present information in tables, indent paragraphs to present complex
information, and use a variety of other visual devices to present your
information.

Research on screen format and Help systems has produced general guidelines
for presenting information to users. Section 16.5, "Summary," lists some
sources of this research. The following list summarizes the findings of
these studies.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Design Issue                      Guideline
Design Issue                      Guideline
────────────────────────────────────────────────────────────────────────────
Language                          Use language appropriate for the
                                  audience you have defined.

                                  Language that is too sophisticated for
                                  your audience can frustrate users by
                                  requiring them
                                  to learn the definition of unfamiliar
                                  terms and
                                  concepts.

Amount of text                    Use a minimum of text.

                                  Studies indicate that reading speed
                                  decreases by 30 percent when users read
                                  online text rather than printed text.
                                  Minimal, concise text helps users
                                  compensate for the decreased reading
                                  speed.

Design Issue                      Guideline
────────────────────────────────────────────────────────────────────────────

Paragraph length                  Use short paragraphs.

                                  Online users become overloaded with text
                                  more easily than do readers of printed
                                  material. Breaking your text into short
                                  paragraphs helps avoid this problem.

White space                       Use it to help group information
                                  visually.

                                  White space is important to making
                                  online text more readable. Use it
                                  liberally, while also considering the
                                  overall size that a topic will occupy on
                                  the screen. Users tend to think there is
                                  more information on a screen than exists.
                                  For example, if the ratio of white space
                                  to text is 50:50, users perceive the
Design Issue                      Guideline
────────────────────────────────────────────────────────────────────────────
                                  to text is 50:50, users perceive the
                                  ratio to be 40:60.

Highlighting                      Use highlighting techniques judiciously.

                                  Windows Help provides a variety of
                                  highlighting devices, such as font sizes,
                                  font types, and color. Using a few
                                  devices can help users find information
                                  quickly. Using many devices will
                                  decrease
                                  the effectiveness of your visual
                                  presentation and frustrate users. As
                                  with print-based documentation, use only
                                  one or two fonts at a time.

Graphics and icons                Use graphics to support the explanation
                                  of visual events.

Design Issue                      Guideline
────────────────────────────────────────────────────────────────────────────

                                  Windows Help supports the use of
                                  bitmapped graphic images. Use
                                  appropriate images to help
                                  explain the function of icons and screen
                                  elements  in your application. Remember
                                  that graphics will draw the user's eye
                                  before the accompanying text. Be sure to
                                  crop your images to remove distracting
                                  information. Use color images only if
                                  you are
                                  certain that all your users' systems
                                  have color capability. As with
                                  context-sensitive Help, consider the
                                  additional time necessary to create
                                  accurate and meaningful graphic images.

Design consistency                Be rigorously consistent in your design.

Design Issue                      Guideline
────────────────────────────────────────────────────────────────────────────

                                  Users expect the appearance of Help
                                  topics to be the same, regardless of the
                                  information presented. Consistent
                                  titling, highlighting, fonts, and
                                  positioning of text in the window is
                                  essential to an effective Help system.



Figure 16.5 illustrates a Help window that follows these design principles.


(This figure may be found in the printed book).


16.3.2  Type Fonts and Sizes

The Windows Help application can display text in any font and size available
to the system. When the topic files are passed to the build process, the
Help Compiler attempts to use the fonts and sizes found in the topic files.
If a font or point size cannot be matched exactly when the Help file is
displayed by Windows Help, the closest available font and size on the user's
system will be used.

Windows ships with only certain fonts in specific font sizes. If you write
Help files using these fonts and sizes, the displayed Help file will closely
match the printed word-processed file. Because fonts other than those
shipped with Windows may not be available on users' machines, you might want
to limit your font selection to the shipped Windows fonts.

The fonts included with Windows are:


  ■   Courier 10,12,15

  ■   Helv 8,10,12,14,18,24

  ■   Modern

  ■   Roman

  ■   Script

  ■   Symbol 8,10,12,14,18,24

  ■   Tms Rmn 8,10,12,14,18,24


Figure 16.6 illustrates a Help window with Helv-font text:

(This figure may be found in the printed book).

Since Windows Help supports any Windows font, special symbols such as arrows
can be included in your topics by using the Symbol font, as shown in Figure
16.7:

(This figure may be found in the printed book).


16.3.3  Graphic Images

The Windows Help application allows you to embed graphics in the Help file.
Graphics can be placed and displayed anywhere on the page. Text can appear
next to the graphic, as shown in Figure 16.8:

(This figure may be found in the printed book).

Color graphic images can be included, provided you use only the available
Windows system colors. If you use graphics tools that support an enhanced
color palette to create or capture images, these images may not always
display with the intended colors. And since you cannot control the color
capabilities on a user's machine, you might want to limit your graphic
images to black and white bitmaps.

Keep in mind that graphics are most effective when they contribute to the
learning process. Graphics not tied to the information are usually
distracting rather than helpful and should be avoided. See Section 17.4,
"Inserting Graphic Images," for more information on placing graphics into
your Help files.


16.4  Summary

This chapter described how to plan a Help system, including defining the
audience, planning the content, implementing context-sensitive Help,
structuring topic files, and designing the layout of Help topics.

For additional information about planning your Help system, see the
following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Creating topic files              Tools: Chapter 17, "Creating the Help
                                  Topic Files"

Screen design                     Bradford, Annette Norris. "Conceptual
                                  Differences Between the Display Screen
                                  and the Printed Page." Technical
                                  Communication (Third Quarter 1984):
                                  13-16

                                  Galitz, Wilbert O. Handbook of Screen
                                  Format
                                  Design. 3d ed. Wellesley, MA: QED
                                  Information Sciences, Inc., 1989

                                  Houghton, Raymond C., Jr. "Online Help
                                  Systems: A Conspectus." Communications
                                  of the ACM 27(February 1984): 126-133

                                  Queipo, Larry. "User Expectations of
                                  Online
                                  Information." IEEE Transactions on
                                  Professional Communications PC
                                  29(December 1986): 11-15






Chapter 17  Creating the Help Topic Files
────────────────────────────────────────────────────────────────────────────

Probably the most time-consuming task in developing a Help system for your
application is creating the Help topic files from which you compile the Help
system. Help topic files are text files that define what the user sees when
using the Help system. The topic files can define various kinds of
information, such as an index to information on the system, a list of
commands, or a description of how to perform a task.

Creating topic files entails writing the text that the user sees when using
Help, and entering control codes that determine how the user can move from
one topic to another.

This chapter describes the following topics:


  ■   Choosing an authoring tool

  ■   Structuring Help topic files

  ■   Coding Help topic files

  ■   Managing Help topic files




17.1  Choosing an Authoring Tool

To write your text files, you will need a Rich Text Format (RTF) editor,
which lets you create the footnotes, underlined text, and strikethrough or
double-underlined text that indicate the control codes. These codes are
described in Section 17.3, "Coding Help Topic Files." Your choices include,
but are not limited to:


  ■   Microsoft Word for Windows, version 1.0.

  ■   Microsoft Word for the PC, version 5.0.

  ■   Microsoft Word for the Macintosh, version 3.0 or 4.0.

  ■   Other word processors that support RTF.


Microsoft Word's RTF capability allows you to insert the coded text required
to define Help terms, such as jumps, key words, and definitions. If you
choose an editor other than one of the Microsoft Word products, make sure it
will create Help files that work as you intend.


17.2  Structuring Help Topic Files

A Help topic file typically contains multiple Help topics. To identify each
topic within a file:


  ■   Topics are separated by hard page breaks.

  ■   Each topic accessible via a hypertext link must have a unique
      identifier, or context string.

  ■   Each topic can have a title.

  ■   Each topic can have a list of key words associated with it.

  ■   Each topic can have a build-tag indicator.

  ■   Any topic can have an assigned browse sequence.


Figure 17.1 illustrates part of the topic file that contains descriptions of
how to perform tasks using the sample application Helpex.

(This figure may be found in the printed book).

For information about inserting page breaks between topics, see the
documentation for the editor you are using. For information about assigning
context strings and titles to topics, see the following sections.


17.3  Coding Help Topic Files

The Help system uses control codes for particular purposes:

Control Code                      Purpose
────────────────────────────────────────────────────────────────────────────
Asterisk (*) footnote             Build tag─Defines a tag that specifies
                                  topics the compiler conditionally builds
                                  into the system. Build tags are optional,
                                  but they must appear first in a topic
                                  when they are used.

Pound sign (#) footnote           Context string─Defines a context string
                                  that uniquely identifies a topic.
                                  Because hypertext relies on links
                                  provided by context strings, topics
                                  without context strings can only be
                                  accessed using key words or browse
                                  sequences.

Dollar sign ($) footnote          Title─Defines the title of a topic.
                                  Titles are optional.

Letter "K" footnote               Key word─Defines a key word the user
                                  uses to search for a topic. Key words
                                  are optional.

Plus sign (+) footnote            Browse sequence number─Defines a
                                  sequence that determines the order in
                                  which the user can browse through topics.
                                  Browse sequences are optional. However,
                                  if you omit browse sequences, the Help
                                  window will still include the Browse
                                  buttons, but they will be grayed.

Strikethrough or                  Cross-reference─Indicates the text the
double-underlined text            user can choose to jump to another
                                  topic.

Underlined text                   Definition─Specifies that a temporary or
                                  "look-up" box be displayed when the user
                                  holds down the mouse button or ENTER key.
                                  The box can include such information as
                                  the definition of a word or phrase, or a
                                  hint about a procedure.

Hidden text                       Cross-reference context string─Specifies
                                  the context string for the topic that
                                  will be displayed when the user chooses
                                  the text that immediately precedes it.

If you are using build tags, footnote them at the very beginning of the
topic. Place other footnotes in any order you want. For information about
assigning specific control codes, see the following sections.


17.3.1  Assigning Build Tags

Build tags are strings that you assign to a topic in order to conditionally
include or exclude that topic from a build. Each topic can have one or more
build tags. Build tags are not a necessary component of your Help system.
However, they do provide a means of supporting different versions of a Help
system without having to create different source files for each version.
Topics without build tags are always included in a build.

You insert build tags as footnotes using the asterisk (*). When you assign a
build tag footnote to a topic, the compiler includes or excludes the topic
according to build information specified in the BUILD option and [BuildTags]
section of the Help project file. For information about the BUILD option,
the [BuildTags] section and the Help project file, see Chaper 18, "Building
the Help File."

To assign a build tag to a topic:


  1.  Place the cursor at the beginning of the topic heading line, so that
      it appears before all other footnotes for that topic.

  2.  Insert the asterisk (*) as a footnote reference mark.

      Note that a superscript asterisk ( * ) appears next to the heading.

  3.  Type the build tag name as the footnote.

      Be sure to allow only a single space between the asterisk (*) and the
      build tag.


Build tags can be made up of any alphanumeric characters. The build tag is
not case-sensitive. The tag may not contain spaces. You can specify multiple
build tags by separating them with a semicolon, as in the following example:


  * AppVersion1; AppVersion2; Test_Build

Including a build tag footnote with a topic is equivalent to setting the tag
to true when compared to the value set in the project file. The compiler
assumes all other build tags to be false for that topic. After setting the
truth value of the build tag footnotes, the compiler evaluates the build
expression in the Options section of the Help project file. Note that all
build tags must be declared in the project file, regardless of whether a
given conditional compilation declares the tags. If the evaluation results
in a true state, the compiler includes the topic in the build. Otherwise,
the compiler omits the topic.

The compiler includes in all builds topics that do not have a build tag
footnote regardless of the build tag expressions defined in the Help project
file. For this reason, you may want to use build tags primarily to exclude
specific topics from certain builds. If the compiler finds any build tags
not declared in the Help project file, it displays an error message.

By allowing conditional inclusion and exclusion of specific topics, you can
create multiple builds using the same topic files. This saves time and
effort for the Help development team. It also means that you can develop
Help topics that will help you maintain a higher level of consistency across
your product lines.


17.3.2  Assigning Context Strings

Context strings identify each topic in the Help system. Each context string
must be unique. A given context string may be assigned to only one topic
within the Help project; it cannot be used for any other topic.

The context string provides the means for creating jumps between topics or
to display look-up boxes, such as word and phrase definitions. Though not
required, most topics in the Help system will have context-string
identifiers, Topics without context strings may not be accessed through
hypertext jumps. However, topics without context-string identifiers can be
accessed through browse sequences or key-word searches, if desired. It is up
to the Help writer to justify the authoring of topics that can be accessed
only in these manners. For information about assigning jumps, see Section
17.3.6, "Creating Cross-References Between Topics." For information about
assigning browse sequences, see Section 17.3.5, "Assigning Browse Sequence
Numbers." For information about assigning key words, see Section 17.3.4,
"Assigning Key Words."

To assign a context string to a Help topic:


  1.  Place the cursor to the left of the topic heading.

  2.  Insert the pound sign (#) as the footnote reference mark.

      Note that a superscript pound sign ( # ) appears next to the heading.

  3.  Type the context string as the footnote.

      Be sure to allow only a single space between the pound sign (#) and
      the string.

      Context strings are not case-sensitive.


Valid context strings may contain the alphabetic characters A-Z, the numeric
characters 0-9, and the period (.) and underscore (_) characters. The
following example shows the context string footnote that identifies a topic
called "Opening an Existing Text File":

  #OpeningExistingTextFile

Although a context string has a practical limitation of about 255
characters, there is no good reason for approaching this value. Keep the
strings sensible and short so that they're easier to enter into the text
files.


17.3.3  Assigning Titles

Title footnotes perform the following functions within the Help system:


  ■   They appear on the Bookmark menu.

  ■   They appear in the "Topics found " list that results from a key-word
      search. (Topics that do not have titles, but are accessible via key
      words are listed as >>Untitled Topic<< in the Topics found list.)


Although not required, most topics have a title. You might not assign a
title to topics containing low-level information that Help's search feature,
look-up boxes and system messages do not access.

To assign a title to a topic:


  1.  Place the cursor to the left of the topic heading.

  2.  Insert a footnote with a dollar sign ($) as the footnote reference
      mark.

      Note that a superscript dollar sign ( $ ) appears next to the heading.


  3.  Type the title as the footnote.

      Be sure to allow only a single space between the dollar sign ($) and
      the title.


The following is an example of a footnote that defines the title for a
topic:

  $ Help Keys

When adding titles, keep in mind the following restrictions:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Item                              Restrictions
────────────────────────────────────────────────────────────────────────────
Characters                        Titles can be up to 128 characters in
                                  length.

                                  The Help compiler truncates title
Item                              Restrictions
────────────────────────────────────────────────────────────────────────────
                                  The Help compiler truncates title
                                  strings longer than 128 characters.

                                  The help system displays titles in a
                                  list box when the user searches for a
                                  key word or enters a bookmark.

Formatting                        Title footnote entries cannot be
                                  formatted.




17.3.4  Assigning Key Words

Help allows the user to search for topics with the use of key words assigned
to the topics. When the user searches for a topic by key word, Help matches
the user-entered word to key words assigned to specific topics. Help then
lists matching topics by their titles in the Search dialog box. Because a
key-word search is often a fast way for users to access Help topics, you'll
probably want to assign key words to most topics in your Help system.

────────────────────────────────────────────────────────────────────────────
NOTE

You should specify a key-word footnote only if the topic has a title
footnote since the title of the topic will appear in the search dialog when
the user searches for the key word.
────────────────────────────────────────────────────────────────────────────

To assign a key word to a topic:


  1.  Place the cursor to the left of the topic heading.

  2.  Insert an uppercase K as the footnote reference mark.

      Note that a superscript K ( K ) appears next to the heading.

  3.  Type the key word, or key words, as the footnote.

      Be sure to allow only a single space between the K and the first key
      word.

      If you add more than one key word, separate each with a semicolon.


The following is an example of key words for a topic:

  K open;opening;text file;ASCII;existing;text only;documents;

Whenever the user performs a search on any of these key words, the
corresponding titles appear in a list box. More than one topic may have the
same key word.

When adding key words, keep in mind the following restrictions:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Item                              Restrictions
────────────────────────────────────────────────────────────────────────────
Characters                        Key words can include any ANSI character,
Item                              Restrictions
────────────────────────────────────────────────────────────────────────────
Characters                        Key words can include any ANSI character,
                                  including accented characters. The
                                  maximum length for key words is 255
                                  characters.

                                  A space imbedded in a key phrase is
                                  considered to be a character, permitting
                                  phrases to be key words.

Phrases                           Help searches for any word in the
                                  specified phrase.

Formatting                        Key words are unformatted.

Case sensitivity                  Key words are not case-sensitive.

Punctuation                       Except for semicolon delimiters, you can
                                  use punctuation.

Item                              Restrictions
────────────────────────────────────────────────────────────────────────────




Creating Multiple Key-Word Tables

Multiple key-word tables are useful to allow a program to look up topics
that are defined in alternate key-word tables. You can use an additional
key-word table to allow users familiar with key words in a different
application to discover the matching key words in your application.

Authoring additional key-word tables is a two-part process. First, the
MULTIKEY option must be placed in the [Options] section of the project file.
For information on the MULTIKEY option, see Section 18.4.8, "Multiple
Key-Word Tables: The Multikey Option."

Second, the topics to be associated with the additional key-word table must
be authored and labeled. Footnotes are assigned in the same manner as the
normal key-word footnotes, except that the letter specified with the
MULTIKEY option is used. With this version of the Help Compiler, the
key-word footnote used is case-sensitive. Therefore, care should be taken to
use the same case, usually uppercase, for your key-word footnote. Be sure to
associate only one topic with a key word. Help does not display the normal
search dialog box for a multiple key-word search. Instead it displays the
first topic found with the specified key word. If you want the topics in
your additional key-word table to appear in the normal Help key-word table,
you must also specify a "K" footnote and the given key word.

The application you are developing Help for can then display the Help topic
associated with a given string in a specified key-word table. Key words are
sorted without regard to case for the key-word table. For information on the
parameters passed by the application to call a topic found in alternate
key-word table, see Section 18.9.4, "Accessing Additional Key-Word Tables."


17.3.5  Assigning Browse Sequence Numbers

────────────────────────────────────────────────────────────────────────────
NOTE

In this version of Help, topics defined in browse sequences are accessed
using the Browse buttons at the top of the Help window. Future versions of
Help will not normally display browse buttons for the user. However, if your
Help resource file includes browse sequences authored in the format
described here, these versions will support the feature by automatically
displaying browse buttons for the user.
────────────────────────────────────────────────────────────────────────────

The Browse >> and Browse browse sequence." A browse sequence is determined
by sequence numbers, established by the Help writer.

To build browse sequences into the Help topics, the writer must:


  1.  Decide which topics should be grouped together and what order they
      should follow when viewed as a group.

      Help supports multiple, discontiguous sequence lists.

  2.  Code topics to implement the sequence.




Organizing Browse Sequences

When organizing browse sequences, the writer must arrange the topics in an
order that will make sense to the user. Topics can be arranged in
alphabetical order within a subject, in order of difficulty, or in a
sensible order that seems natural to the application. The following example
illustrates browse sequences for the menu commands used in a given
application. The Help writer has subjectively defined the order that makes
the most sense from a procedural point of view. You may, of course, choose a
different order.

  SampleApp Commands
   File Menu - commands:005
    New Command - file_menu:005
    Open Command - file_menu:010
    Save Command - file_menu:015
    Save As Command - file_menu:020
    Print Command - file_menu:025
     Printer Setup Command - file_menu:030
    Exit Command - file_menu:035
   Edit Menu - commands:010
    Undo Command - edit_menu:025
    Cut Command - edit_menu:015
    Copy Command - edit_menu:010
    Paste Command - edit_menu:020
    Clear Command - edit_menu:005
    Select All Command - edit_menu:030
    Word Wrap Command - edit_menu:035
    Type Face Command - edit_menu:040
    Point Size Command - edit_menu:045
   Search Menu - commands:015
    Find Command - search_menu:005
    Find Next Command - search_menu:010
    Previous Command - search_menu:015
   Window Menu - commands:020
    Tile Command - window_menu:005
    Cascade Command - window_menu:010
    Arrange Icons Command - window_menu:015
    Close All Command - window_menu:020
    Document Names Command - window_menu:025

Each line consists of a sequence list name followed by a colon and a
sequence number. The sequence list name is optional. If the sequence does
not have a list name, as in the following example, the compiler places the
topic in a "null" list:

  Window Menu - 120

Note that the numbers used in the browse sequence example begin at 005 and
advance in increments of 005. Generally, it is good practice to skip one or
more numbers in a sequence so you can add new topics later if necessary.
Skipped numbers are of no conseqence to the Help Compiler; only their order
is significant.

Sequence numbers establish the order of topics within a browse sequence
list. Sequence numbers can consist of any alphanumeric characters. During
the compiling process, strings are sorted using the ASCII sorting technique,
not a numeric sort.

Both the alphabetic and numeric portions of a sequence can be several
characters long; however, their lengths should be consistent throughout all
topic files. If you use only numbers in the strings make sure the strings
are all the same length; otherwise a higher sequence number could appear
before a lower one in certain cases. For example, the number 100 is
numerically higher than 99, but 100 will appear before 99 in the sort used
by Help, because Help is comparing the first two digits in the strings. In
order to keep the topics in their correct numeric order, you would have to
make 99 a three-digit string: 099.


Coding Browse Sequences

After determining how to group and order topics, code the sequence by
assigning the appropriate sequence list name and number to each topic, as
follows:


  1.  Place the cursor to the left of the topic heading.

  2.  Insert the plus sign (+) as the footnote reference mark.

      Note that a superscript plus sign ( + ) appears next to the heading.

  3.  Type the sequence number using alphanumeric characters.


For example, the following footnote defines the browse sequence number for
the Edit menu topic in the previous browse sequence example:

  + commands:010

While it may be easier to list topics within the file in the same order that
they appear in a browse sequence, it is not necessary. The compiler orders
the sequence for you.


17.3.6  Creating Cross-References Between Topics

Cross-references, or "jumps," are specially-coded words or phrases that are
linked to other topics. Although you indicate jump terms with strikethrough
or double-underlined text in the topic file, they appear underlined in the
Help window. In addition, jump terms appear in color on color systems. For
example, the strikethrough text (double-underlined in Word for Windows) New
Command appears as New Command in green text to the user.

To code a word or phrase as a jump in the topic file :


  1.  Place the cursor at the point in the text where you want to enter the
      jump term.

  2.  Select the strikethrough (or double-underline) feature of your editor.

  3.  Type the jump word or words in strikethrough mode.

  4.  Turn off strikethrough and select the editor's hidden text feature.

  5.  Type the context string assigned to the topic that is the target of
      the jump.


When coding jumps, keep in mind that:


  ■   No spaces can occur between the strikethrough (or double-underlined)
      text and the hidden text.

  ■   Coded spaces before or after the jump term are not permitted.

  ■   Paragraph marks must be entered as plain text.



17.3.7  Defining Terms

Most topic files contain words or phrases that require further definition.
To get the definition of a word or phrase, the user first selects the word
and then holds down the mouse button or ENTER key, causing the definition to
appear in a box within the Help window. The Help writer decides which words
to define, considering the audience that will be using the application and
which terms might already be familiar.

────────────────────────────────────────────────────────────────────────────
NOTE

The look-up feature need not be limited to definitions. With the capability
to temporarily display information in a box, you might want to show a hint
about a procedure, or other suitable information for the user.
────────────────────────────────────────────────────────────────────────────

Defining a term requires that you:


  ■   Create a topic that defines the term.

      The definition topic must include a context string. See Section
      17.3.2, "Assigning Context Strings."

  ■   Provide a cross-reference for the definition topic whenever the term
      occurs.

      You don't need to define the same word multiple times in the same
      topic, just its first occurrence. Also, consider the amount of colored
      text you are creating in the Help window.

      See the following "Coding Definitions" section.



Creating Definition Topics

You can organize definition topics any way you want. For example, you can
include each definition topic in the topic file that mentions the term. Or
you can organize all definitions in one topic file and provide the user with
direct access to it. Helpex uses the latter method, with all definitions
residing in the TERMS.RTF file. Organizing definition topics into one file
provides you with a glossary and lets you make changes easily.


Coding Definitions

After creating definition topics, code the terms as they occur, as follows:



  1.  Place the insertion point where you want to place the term that
      requires definition.

  2.  Select the underline feature of your editor.

  3.  Type the term.

  4.  Turn off the underline feature, and select the editor's hidden-text
      feature.

  5.  Type the context string assigned to the topic that contains the
      definition of the term.


Figure 17.2 includes a definition of the term "Clipboard."

(This figure may be found in the printed book).


17.4  Inserting Graphic Images

Bitmapped graphic images can be placed in Help topics using either of two
methods. If your word processor supports the placement of Windows 2.1 or
Windows 3.0 graphics directly into a document, you can simply paste your
bitmaps into each topic file. Alternatively, you can save each bitmap in a
separate file and specify the file by name where you want it to appear in
the Help topic file. The latter method of placing graphics is referred to as
"bitmaps by reference." The following sections describe the process of
placing bitmaps directly or by reference into your Help topics.


17.4.1  Creating and Capturing Bitmaps

You can create your bitmaps using any graphical tools, as long as the
resulting images can be displayed in the Windows environment. Each graphic
image can then be copied to the Windows clipboard. Once on the clipboard, a
graphic can be pasted into a graphics editor such as Paint, and modified or
cleaned up as needed.

Windows Help 3.0 supports color bitmaps. However, for future compatibility,
you might want to limit graphics to monochrome format. If you are producing
monochrome images, you might have to adjust manually the elements of your
source graphic that were originally different colors to either black, white,
or a pattern of black and white pixels.

When you are satisfied with the appearance of your bitmap, you can either
save it as a file, to be used as a bitmap by reference, or you can copy it
onto the clipboard and paste it into your word processor. If you save the
graphic as a file, be sure to specify its size in your graphics editor
first, so that only the area of interest is saved for display in the Help
window. The tighter you crop your images, the more closely you will be able
to position text next to the image. Always save (or convert and save if
necessary) graphics in Windows' .BMP format.

Bitmap images should be created in the same screen mode that you intend Help
to use when topics are displayed. If your Help files will be displayed in a
different mode, bitmaps might not retain the same aspect ratio or
information as their source images.


17.4.2  Placing Bitmaps Using a Graphical Word Processor

The easiest way to precisely place bitmaps into Help topics is to use a
graphical word processor. Word for Windows supports the direct importation
of bitmaps from the clipboard. Simply paste the graphic image where you want
it to appear in the Help topic. You can format your text so that it is
positioned below or alongside the bitmap. When you save your Help topic file
in RTF, the pasted-in bitmap is converted as well and will automatically be
included in the Help resource file.


17.4.3  Placing Bitmaps by Reference

If your word processor cannot import and display bitmaps directly, you can
specify the location of a bitmap that you have saved as a file. To insert a
bitmap reference in the Help topic file, insert one the following statements
where you want the bitmap to appear in the topic:

{bmc filename.bmp} {bml filename.bmp} {bmr filename.bmp}

────────────────────────────────────────────────────────────────────────────
NOTE

Do not specify a full path for filename. If you need to direct the compiler
to a bitmap in a location other than the root directory for the build,
specify the absolute path for the bitmap in the [Bitmaps] section of the
project file.
────────────────────────────────────────────────────────────────────────────

The argument bmc stands for "bitmap character," indicating that the bitmap
referred to will be treated the same as a character placed in the topic file
at the same location on a line. Text can precede or follow the bitmap on the
same line, and line spacing will be determined based upon the size of the
characters (including the bitmap character) on the line. Do not specify
negative line spacing for a paragraph with a bitmap image, or the image may
inadvertently overwrite text above it when it is displayed in Help. When you
use the argument bmc, there is no automatic text wrapping around the graphic
image. Text will follow the bitmap, positioned at the baseline.

The argument bml specifies that the bitmap appear at the left margin, with
text wrapping automatically along the right edge of the image. The argument
bmr specifies that the bitmap appear at the right margin, with text to its
left. Bitmap filenames must be the same as those listed in the [Bitmaps]
section of the Help project file. The [Bitmaps] section is described in
Chapter 18, "Building the Help File."

────────────────────────────────────────────────────────────────────────────
NOTE

Multiple references to a bitmap of the same name refer to the same bitmap
when the Help file is displayed. This means that bitmap references can be
repeated in your Help system without markedly increasing the size of the
Help resource file.
────────────────────────────────────────────────────────────────────────────

Figure 17.3 shows the placement of three bitmaps with related text in a
topic as displayed in Help.

(This figure may be found in the printed book).


17.5  Managing Topic Files

Help topic files can be saved in the default word-processor format or in
RTF. If you always save your files in RTF, and later need to make a change,
the word processor may take additional time to interpret the format as it
reloads the file. If you anticipate making numerous changes during Help
development, you might want to minimize this delay by saving topic files in
both default and RTF formats, with different file extensions to distinguish
them. The compiler needs only the RTF files, and you will have faster access
to the source files for changes. On a large project, this practice can save
a considerable amount of development time.


17.5.1  Keeping Track of Files and Topics

It is important to keep track of all topic files for the following reasons:


  ■   To ensure that no topics are left out of the build process

  ■   To ensure that each topic has been assigned a unique context string

  ■   To double-check browse sequencing within general and specific lists

  ■   To show key-word and title matches

  ■   To allow writers to see where the text for each of the topics is
      located

  ■   To keep track of changes to files and the current status

  ■   To track any other aspect of the Help development process that you
      think essential


At a minimum, writers must keep track of their own topic files, and must
pass the filenames to the person who is responsible for creating the Help
project file.


17.5.2  Creating a Help Tracker

While it is important that you track topic files throughout the development
cycle, the tracking tool can be anything that suits your needs. You can
maintain a current list of topics in an ASCII text file, in a Microsoft
Excel worksheet (if available), or in another format.

When you or another writer creates or revises a topic, you should update the
Help tracking file to reflect the change. The contents of the tracking file
are not rigidly defined, but should contain entries for filename, context
string, title, browse sequence, and key words. If your application makes use
of the context-sensitive feature of Help, you may want to keep track of the
context-sensitive information as well. This entry is necessary only if you
are assigning context numbers to topics in the Help project file. You can
also include optional information, such as date created, date modified,
status, and author, if you want to keep track of all aspects of the Help
development process. How you organize this information is entirely up to
you.

The following sample text file and worksheet illustrate how the tracker
might be organized for the Help system topics. The examples show both Help
menu and context-sensitive Help entries for the topic files. Typically, the
same topics that the user accesses when choosing commands from the Help
menus can be accessed by the context-sensitive Help feature. The topics with
entries in the context ID column are used for context-sensitive help as well
as for the Help menus. Notice that some topics have more than one
context-sensitive help number. This enables the topic to be displayed when
the user clicks on different regions of the screen.

(This figure may be found in the printed book).

(This figure may be found in the printed book).

Of course, you are free to keep track of the topic files you produce in a
manner different from either of these two examples.


17.6  Summary

This chapter described how to write, code, and keep track of Help topic
files. For information about building a Help file, see Chapter 18, "Building
the Help File."






Chapter 18  Building the Help File
────────────────────────────────────────────────────────────────────────────

After the topic files for your Help system have been written, you are ready
to create a Help project file and run a build to test the Help file. The
Help project file contains all information the compiler needs to convert
help topic files into a binary Help resource file.

You use the Help project file to tell the Help Compiler which topic files to
include in the build process. Information in the Help project file also
enables the compiler to map specific topics to context numbers (for the
context-sensitive portion of Help).

After you have compiled your Help file, the development team programs the
application so the user can access it.

The chapter describes the following:


  ■   Creating a Help project file

  ■   Compiling the Help file

  ■   Programming the application to access Help




18.1  Creating the Help Project File

You use the Help project file to control how the Help Compiler builds your
topic files. The Help project file can contain up to six sections that
perform the following functions:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Section                           Function
────────────────────────────────────────────────────────────────────────────
[Files]                           Specifies topic files to be included in
                                  the build. This section is mandatory.

[Options]                         Specifies the level of error reporting,
                                  topics to be included in the build, the
                                  directory in which to find the files,
                                  and the location of your Help index.
Section                           Function
────────────────────────────────────────────────────────────────────────────
                                  and the location of your Help index.
                                  This section is optional.

[BuildTags]                       Specifies valid build tags. This section
                                  is optional.

[Alias]                           Assigns one or more context strings to
                                  the same topic. This section is
                                  optional.

[Map]                             Associates context strings with context
                                  numbers. This section is optional.

[Bitmaps]                         Specifies bitmap files to be included in
                                  the build. This section is optional.



You can use any ASCII text editor to create your Help project file. The
extension of a Help project file is .HPJ. If you do not use the extension
.HPJ on the HC command line, the compiler looks for a project file with this
extension before loading the file. The .HLP output file will have the same
name as the .HPJ file.

The order of the various sections within the Help project file is arbitrary,
with one exception: under all circumstances an [Alias] section must precede
the [Map] section (if an [Alias] section is used).

Section names are placed within square brackets using the following syntax:


  [section-name]

You can use a semicolon to indicate a comment in the project file. The
compiler ignores all text from the semicolon to the end of the line on which
it occurs.


18.2  Specifying Topic Files: The Files Section

Use the [Files] section of the Help project file to list all topic files
that the Help Compiler should process to produce a Help resource file. A
Help project file must have a [Files] section.

The following sample shows the format of the [Files] section:

  [FILES]
  HELPEX.RTF ;Main topics for HelpEx application
  TERMS.RTF  ;Lookup terms for HelpEx appliction

Using the path defined in the ROOT option, the Help Compiler finds and
processes all files listed in this section of the Help project file. If the
file is not on the defined path and cannot be found, the compiler generates
an error. For more information about the ROOT option, see Section 18.4.3,
"Specifying the Root Directory: The Root Option."

You can include files in the build process using the C #include directive
command.

The #include directive uses the following syntax:

  #include <filename>

You must include the angle brackets around the filename. The pound sign ( #
) must be the first character in the line. The filename must specify a
complete path, either the path defined by the ROOT option or an absolute
directory path to the file.

You may find it easier to create a text file that lists all files in the
Help project and include that file in the build, as in this example:

  [FILES]
  #include <hlpfiles.inc>


18.3  Specifying Build Tags: The BuildTags Section

If you code build tags in your topic files, use the [BuildTags] section of
the Help project file to define all the valid build tags for a particular
Help project. The [BuildTags] section is optional.

The following example shows the format of the [BuildTags] section in a
sample Help project file:

  [BUILDTAGS]
  WINENV  ;topics to include in Windows build
  DEBUGBUILD ;topics to include in debugging build
  TESTBUILD ;topics to include in a mini-build for testing

The [BuildTags] section can include up to 30 build tags. The build tags are
not case-sensitive and may not contain space characters. Only one build tag
is allowed per line in this section. The compiler will generate an error
message if anything other than a comment is listed after a build tag in the
[BuildTags] section.

For information about coding build tags in topic files, see Section 17.3.3,
"Assigning Build Tags."


18.4  Specifying Options: The Options Section

Use the [Options] section of the Help project file to specify the following
options:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Meaning
────────────────────────────────────────────────────────────────────────────
BUILD                             Determines what topics the compiler
                                  includes in the build.

COMPRESS                          Specifies compression of the Help
                                  resource file.

FORCEFONT                         Specifies the creation of a Help
                                  resource file using only one font.

INDEX                             Specifies the context string of the Help
                                  index.

MAPFONTSIZE                       Determines the mapping of specified font
                                  sizes to different sizes.

MULTIKEY                          Specifies alternate key-word mapping for
                                  topics.
Option                            Meaning
────────────────────────────────────────────────────────────────────────────
                                  topics.

ROOT                              Designates the directory to be used for
                                  the Help build.

TITLE                             Specifies the title shown for the Help
                                  system.

WARNING                           Indicates the kind of error message the
                                  compiler reports.



These options can appear in any order within the [Options] section. The
[Options] section is not required.

Detailed explanations of the available options follow.


18.4.1  Specifying Error Reporting: The Warning Option

Use the WARNING option to specify the amount of debugging information that
the compiler reports. The WARNING option has the following syntax:

  WARNING = level

You can set the WARNING option to any of the following levels:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Level                             Information Reported
────────────────────────────────────────────────────────────────────────────
1                                 Only the most severe warnings.

2                                 An intermediate level of warnings.

3                                 All warnings. This is the default level
                                  if no WARNING option is specified.



The following example specifies an intermediate level of error reporting:

  [OPTIONS]
  WARNING=2

The compiler reports errors to the standard output file, typically the
screen. You may want to redirect the errors to a disk file so that you can
browse it when you are debugging the Help system. The following example
shows the redirection of compiler screen output to a file.

  HC HELPEX > errors.out

────────────────────────────────────────────────────────────────────────────
HINT

Use the DOS CONTROL+PRINT SCREEN accelerator key before you begin your
compilation to echo errors which appear on the screen to your printer. Type
CONTROL+PRINT SCREEN again to stop sending information to the printer.
────────────────────────────────────────────────────────────────────────────


18.4.2  Specifying Build Topics: The Build Option

If you have included build tags in your topic files, use the BUILD option to
specify which topics to conditionally include in the build. If your topic
files have no build tags, omit the BUILD option from the [Options] section.

────────────────────────────────────────────────────────────────────────────
NOTE

All build tags must be listed in the [BuildTags] section of the project
file, regardless whether or not a given conditional compilation declares the
tags.
────────────────────────────────────────────────────────────────────────────

See Chapter 17, "Creating the Help Topic Files," for information on
assigning build tags to topics in the Help topic files.

The BUILD option line uses the following syntax:

  BUILD = expression

BUILD expressions cannot exceed 255 characters in length, and must be
entered on only one line. BUILD expressions use Boolean logic to specify
which topics within the specified Help topic files the compiler will include
in the build. The tokens of the language are:

╓┌───────────────────────┌───────────────────────────────────────────────────╖
Token                   Description
────────────────────────────────────────────────────────────────────────────
<tag>                   Build tag
( )                     Parentheses
&                       AND operator
|                       OR operator
~                       NOT operator


The compiler evaluates all build expressions from left to right. The
operators have the following precedence:

────────────────────────────────────────────────────────────────────────────
1. ( )
2. ~
3. &
4. |

For example, if you coded build tags called WINENV, APP1, and TEST_BUILD in
your topic files, you could include one of the following build expressions
in the [Options] section:

Build Expression                  Topics Built
────────────────────────────────────────────────────────────────────────────
BUILD = WINENV                    Only topics that have the WINENV tag

BUILD = WINENV & APP1             Topics that have both the WINENV and
                                  APP1 tags

BUILD = WINENV | APP1             Topics that have either the WINENV tag
                                  or the APP1 tag

BUILD = (WINENV | APP1) &         Topics that have either the WINENV or
TESTBUILD                         the APP1 tags and that also have the
                                  TESTBUILD tag

BUILD =~ APP1                     Topics that do not have a APP1 tag


18.4.3  Specifying the Root Directory: The Root Option

Use the ROOT option to designate the root directory of the Help project. The
compiler searches for files in the specified root directory.

The ROOT option uses the following syntax:

  ROOT = pathname

For example, the following root option specifies that the root directory is
\BUILD\TEST on drive D:

  [OPTIONS]
  ROOT=D:\BUILD\TEST

The ROOT option allows you to refer to all relative paths off the root
directory of the Help project. For example, the following entry in the
[Files] section refers to a relative path off the root directory:

  TOPICS\FILE.RTF

To refer to a file in a fixed location, independent of the project root, you
must specify a fully qualified or "absolute" path, including a drive letter,
if necessary, as in the following line:

  D:\HELPTEST\TESTFILE.RTF

If you do not include the ROOT option in your Help project file, all paths
are relative to the current DOS directory.


18.4.4  Specifying the Index: The Index Option

Use the INDEX option to identify the context string of the Help index.
Because the Index button gives the user access to the index from anywhere in
the Help system, you will probably not want to author terms to jump to the
index. Users access this general index either from the Help menu of the
application or by choosing the Index button from the Help window.

Assigning a context string to the index topic in the [Options] section lets
the compiler know the location of the main index of Help topics for the
application's Help file. If you do not include the INDEX option in the
[Options] section, the compiler assumes that the first topic it encounters
is the index.

The INDEX option uses the following syntax:

  INDEX = context-string

The context string specified must match the context string you assigned to
the Help index topic. In the following example, the writer informs the
compiler that the context string of the Help index is "main_index":

  [OPTIONS]
  INDEX=main_index

For information about assigning context strings, see Section 17.3.2,
"Assigning Context Strings."


18.4.5  Assigning a Title to the Help System: The Title Option

You can assign a title to your Help system with the TITLE option. The title
appears in the title bar of the Help window with the word "Help"
automatically appended, followed by the DOS filename of the Help resource
file.

The TITLE option uses the following syntax:

  TITLE = Help-system-title-name

Titles are limited to 32 characters in length. If you do not specify a title
using the TITLE option, only the word Help followed by the Help system
filename will be displayed in the title bar. Because the compiler always
inserts the word Help, you should keep in mind not to duplicate it in your
title.Title option


18.4.6  Converting Fonts: The Forcefont Option

You can use the FORCEFONT option to create a Help resource file that is made
up of only one typeface or font. This is useful if you must compile a Help
system using topic files that include fonts not supported by your users'
systems.

The FORCEFONT option uses the following syntax:

  FORCEFONT = fontname

The fontname parameter is any Windows system font. Windows ships with the
following fonts and sizes:


  ■   Courier 10,12,15

  ■   Helv 8,10,12,14,18,24

  ■   Modern

  ■   Roman

  ■   Script

  ■   Symbol 8,10,12,14,18,24

  ■   Tms Rmn 8,10,12,14,18,24


Font names must be spelled the same as they are in the Fonts dialog box in
Control Panel. Font names do not exceed 20 characters in length. If you
designate a font that is not recognized by the compiler, an error message is
generated and the compilation continues using the default Helv font.

────────────────────────────────────────────────────────────────────────────
NOTE

The fontname used in the FORCEFONT option cannot contain spaces. Therefore,
Tms Rmn font cannot be used with FORCEFONT.
────────────────────────────────────────────────────────────────────────────


18.4.7  Changing Font Sizes : The Mapfontsize Option

The font sizes specified in your topic files can be mapped to different
sizes using the MAPFONTSIZE option. In this manner, you can create and edit
text in a size chosen for easier viewing in the topic files and have them
sized by the compiler for the actual Help display. This may be useful if
there is a large size difference between your authoring monitor and your
intended display monitor.

The MAPFONTSIZE option uses the following syntax:

  MAPFONTSIZE = m[-n]:p

The m parameter is the size of the source font, and the p parameter is the
size of the desired font for the Help resource file. All fonts in the topic
files that are size m are changed to size p. The optional parameter n allows
you to specify a font range to be mapped. All fonts in the topic files
falling between m and n, inclusive, are changed to size p. The following
examples illustrate the use of the MAPFONTSIZE option:

  MAPFONTSIZE=12-24:16 ;make fonts from 12 to 24 come out 16.
  MAPFONTSIZE=8:12  ;make all size 8 fonts come out size 12.

Note that you can map only one font size or range with each MAPFONTSIZE
statement used in the Options section. If you use more than one MAPFONTSIZE
statement, the source font size or range specified in subsequent statements
cannot overlap previous mappings. For instance, the following mappings would
generate an error when the compiler encountered the second statement:

  MAPFONTSIZE=12-24:16 MAPFONTSIZE=14:20

Because the second mapping shown in the first example contains a size
already mapped in the preceding statement, the compiler will ignore the
line. There is a maximum of five font ranges that can be specified in the
project file.


18.4.8  Multiple Key-Word Tables: The Multikey Option

The MULTIKEY option specifies a character to be used for an additional
key-word table.

The MULTIKEY option uses the following syntax:

  MULTIKEY = footnote-character

The footnote-character parameter is the case-sensitive letter to be used for
the key-word footnote. The following example illustrates the enabling of the
letter L for a key word-table footnote:

  MULTIKEY=L

────────────────────────────────────────────────────────────────────────────
NOTE

You must be sure to limit your key word-table footnotes to one case, usually
uppercase. In the previous example, topics with the footnote L would have
their key words incorporated into the additional key word table, whereas
those assigned the letter l would not.
────────────────────────────────────────────────────────────────────────────

You may use any alphanumeric character for a key-word table except "K" and
"k" which are reserved for Help's normal key-word table. There is an
absolute limit of five key-word tables, including the normal table. However,
depending upon system configuration and the structure of your Help system, a
practical limit of only two or three may actually be the case. If the
compiler cannot create an additional table, the excess table is ignored in
the build.


18.4.9  Compressing the File: The Compress Option

You can use the COMPRESS option to reduce the size of the Help resource file
created by the compiler. The amount of file compression realized will vary
according to the number, size and complexity of topics that are compiled. In
general, the larger the Help files, the more they can be compressed.

The COMPRESS option uses the following syntax:

  COMPRESS = TRUE | FALSE

Because the Help application can load compressed files quickly, there is a
clear advantage in creating and shipping compressed Help files with your
application. Compiling with compression turned on, however, may increase the
compile time, because of the additional time required to assemble and sort a
key-phrase table. Thus, you may want to compile without compression in the
early stages of a project.

The COMPRESS option causes the compiler to compress the system by combining
repeated phrases found within the source file(s). The compiler creates a
phrase-table file with the .PH extension if it does not find one already in
existence. If the compiler finds a file with the .PH extension, it will use
the file for the current compilation. This is in order to speed compression
when not a lot of text has changed since the last compilation.

Deleting the key-phrase file before each compilation will prevent the
compiler from using the previous file. Maximum compression will result only
by forcing the compiler to create a new phrase table.


18.5  Specifying Alternate Context Strings: The Alias Section

Use the [Alias] section to assign one or more context strings to the same
topic alias. Because context strings must be unique for each topic and
cannot be used for any other topic in the Help project, the [Alias] section
provides a way to delete or combine Help topics without recoding your files.
The [Alias] section is optional.

For example, if you create a topic that replaces the information in three
other topics, and you delete the three, you will have to search through your
files for invalid cross-references to the deleted topics. You can avoid this
problem by using the [Alias] section to assign the name of the new topic to
the deleted topics. The [Alias] section can also be used when your
application program has multiple context identifiers for which you have only
one topic. This can be the case with context-sensitive Help.

Each expression in the [Alias] section has the following format:

context_string=alias

In the alias expression the alias parameter is the alternate string, or
alias name, and the context_string parameter is the context string
identifying a particular topic. An alias string has the same format and
follows the same conventions as the topic context string. That is, it is not
case-sensitive and may contain the alphabetic characters A-Z, numeric
characters 0-9, and the period and underscore characters.

The following example illustrates an [Alias] section:

  [ALIAS]
  sm_key=key_shrtcuts
  cc_key=key_shrtcuts
  st_key=key_shrtcuts ;combined into keyboard shortcuts topic
  clskey=us_dlog_bxs
  maakey=us_dlog_bxs ;covered in using dialog boxes topic
  chk_key=dlogprts
  drp_key=dlogprts
  lst_key=dlogprts
  opt_key=dlogprts
  tbx_key=dlogprts  ;combined into parts of dialog box topic
  frmtxt=edittxt
  wrptxt=edittxt
  seltxt=edittxt  ;covered in editing text topic

────────────────────────────────────────────────────────────────────────────
NOTE

You can use alias names in the [Map] section of the Help project file. If
you do, however, the [Alias] section must precede the [Map] section.
────────────────────────────────────────────────────────────────────────────


18.6  Mapping Context-Sensitive Topics: The Map Section

If your Help system supports context-sensitive Help, use the [Map] section
to associate either context strings or aliases to context numbers. The
context number corresponds to a value the parent application passes to the
Help application in order to display a particular topic. This section is
optional.

When writing the [Map] section, you can do the following:


  ■   Use either decimal or hexadecimal numbers formatted in standard C
      notation to specify context numbers.

  ■   Assign no more than one context number to a context string or alias.

      Assigning the same number to more than one context string will
      generate a compiler error.

  ■   Separate context numbers and context strings by an arbitrary amount of
      white space using either space characters or tabs.


You can use the C #include directive to include other files in the mapping.
In addition, the Map section supports an extended format that lets you
include C files with the .H extension directly. Entries using this format
must begin with the #define directive and may contain comments in C format,
as in this example:

  #define    context_string    context_number    /* comment */

The following example illustrates several formats you can use in the [Map]
section:

  [MAP]
  "
  Edit_Window  0x0001
  Control_Menu  0x0002
  Maximize_Icon  0x0003
  Minimize_Icon  0x0004
  Split_Bar  0x0005
  Scroll_Bar  0x0006
  Title_Bar  0x0007
  Window_Border  0x0008

  dcmb_scr  30 ; Document Control-menu Icon
  dmxi_scr  31 ; Document Maximize Icon
  dmni_scr  32 ; Document Minimize Icon
  dri_scr   33 ; Document Restore Icon
  dtb_scr   34 ; Document Title Bar


  #define vscroll  0x010A /* Vertical Scroll Bar */
  #define hscroll  0x010E /* Horizontal Scroll Bar */
  #define scrollthm 0x0111 /* Scroll Thumb */
  #define upscroll 0x0112 /* Up Scroll Arrow */
  #define dnscroll 0x0113 /* Down Scroll Arrow */


  #include <sample.h>

In the example:

"

The first eight entries give hexadecimal equivalents for the context
numbers.



The next five entries show decimal context numbers.



The next five entries show how you might include topics defined in a C
include file.



This entry shows a C #include directive for some generic topics.

If context numbers use the #define directive, and the file containing the
#define statements is included in both the application code and the Help
file, then updates made to the context numbers by the application
programmers will automatically be reflected in the next Help build.

You can define the context strings listed in the [Map] section either in a
Help topic or in the [Alias] section. The compiler generates a warning
message if a    context string appearing in the [Map] section is not defined
in any of the topic files or in the [Alias] section.

────────────────────────────────────────────────────────────────────────────
NOTE

If you use an alias name, the [Alias] section must precede the [Map] section
in the Help project file.
────────────────────────────────────────────────────────────────────────────

For more information about context-sensitive Help, see Section 16.2.5,
"Displaying Context-Sensitive Help Topics."


18.7  Including Bitmaps by Reference: The Bitmaps Section

If your Help system uses bitmaps by reference, the filenames of each of the
bitmaps must be listed in the [Bitmaps] section of the project file. The
following example illustrates the format of the [Bitmaps] section.

  [BITMAPS]
  DUMP01.BMP
  DUMP02.BMP
  DUMP03.BMP
  c:\PROJECT\HELP\BITMAPS\DUMP04.BMP

────────────────────────────────────────────────────────────────────────────
NOTE

The [Bitmaps] section uses the same rules as the [Files] section for
locating bitmap files.
────────────────────────────────────────────────────────────────────────────


18.8  Compiling Help Files

After you have created a Help project file, you are ready to build a Help
file using the Help Compiler. The compiler generates the binary Help
resource file from the topic files listed in the Help project file. When the
build process is complete, your application can access the Help resource
file that results.

Before initiating a build operation to create the Help file, consider the
locations of the following files:


  ■   The Help Compiler, HC.EXE. The compiler must be in a directory from
      which it can be executed. This could be the current working directory,
      on the path set with the PATH environment variable, or a directory
      specified by a full pathname, as follows:

      C:\BIN\HC HELPEX.HPJ


  ■   The Help project file, filename.HPJ. The project file can be located
      either in the current directory or specified by a path, as follows:

      C:\BIN\HC D:\MYPROJ\HELPEX.HPJ


  ■   The topic files named in the Help project file, saved as RTF. The
      topic files may be located in the current working directory, a
      subdirectory of the current working directory specified in the [Files]
      section, or the location specified in the Root option.

  ■   Files included with the #include directive in the Help project file.
      Since the #include directive can take pathnames, then any number of
      places will work for these files.

  ■   All bitmap files listed by reference in the topic files.


You must also place any files named in an #include directive in the path of
the project root directory or specify their path using the ROOT option. The
compiler searches only the directories specified in the Help project file.
For information about the ROOT option, see Section 18.4.3, "Specifying the
Root Directory: The Root Option."

────────────────────────────────────────────────────────────────────────────
NOTE

If you use a RAM drive for temporary files (set with the DOS environment
variable TMP), it must be large enough to hold the compiled Help resource
file. If your Help file is larger than the size of the available RAM drive,
the compiler will generate an error message and the compilation will be
aborted.

────────────────────────────────────────────────────────────────────────────


18.8.1  Using the Help Compiler

To run the Help Compiler, use the HC command. There are no options for HC.
All options are specified in the Help project file.

The HC command uses the following syntax:

  HC filename.HPJ

As the compiler program runs, it displays sequential periods on the screen,
indicating its progress in the process. Error messages are displayed when
each error condition is encountered. When the Help Compiler has finished
compiling, it writes a Help resource file with an .HLP extension in the
current directory and returns to the DOS prompt. The Help resource file that
results from the build has the same name as does the Help project file.

Compiler errors and status messages can be redirected to a file using
standard DOS redirection syntax. This is useful for a lengthy build where
you may not be monitoring the entire process. The redirected file is saved
as a text file that can be viewed with any ASCII editor.


18.9  Programming the Application to Access Help

The application-development team must program the application so that the
user can access the Windows Help application and your Help file. The Help
application is a stand-alone Windows application, and your application can
ask Windows to run the Help application and specify the topic that Help is
to show the user. To the user, Help appears to be part of your application,
but it acts like any other Windows application.


18.9.1  Calling WinHelp from an Application

An application makes a Help system available to the user by calling the
WinHelp function.

The WinHelp function uses the following syntax:

  BOOL WinHelp (hWnd, lpHelpFile, wCommand, dwData)

The hWnd parameter identifies the window requesting Help. The Windows Help
application uses this identifier to keep track of which applications have
requested Help.

The lpHelpFile parameter specifies the name (with optional directory path)
of the Help file containing the desired topic.

The wCommand parameter specifies either the type of search that the Windows
Help application is to use to locate the specified topic, or that the
application no longer requires Help. It may be set to any one of the
following values:

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Value                             Meaning
────────────────────────────────────────────────────────────────────────────
HELP_CONTEXT                      Displays Help for a particular topic
                                  identified by a context number.

HELP_HELPONHELP                   Displays the Using Help index topic.

HELP_INDEX                        Displays the main Help index topic.

HELP_KEY                          Displays Help for a topic identified by
                                  a key word.

HELP_MULTIKEY                     Displays Help for a topic identified by
                                  a key word in an alternate key-word
                                  table.

HELP_QUIT                         Informs the Help application that Help
Value                             Meaning
────────────────────────────────────────────────────────────────────────────
HELP_QUIT                         Informs the Help application that Help
                                  is no longer needed. If no other
                                  applications have asked for Help,
                                  Windows closes the Help application.

HELP_SETINDEX                     Displays a designated Help index topic.



The dwData parameter specifies the topic for which the application is
requesting Help. The format of dwData depends upon the value of wCommand
passed when your application calls WinHelp. The following list describes the
format of dwData for each value of wCommand.

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
wCommand Value                    dwData Format
────────────────────────────────────────────────────────────────────────────
HELP_CONTEXT                      An unsigned long integer containing the
                                  context number for the topic. Instead of
wCommand Value                    dwData Format
────────────────────────────────────────────────────────────────────────────
                                  context number for the topic. Instead of
                                  using HELP_INDEX, HELP_CONTEXT can use
                                  the value -1.

HELP_HELPONHELP                   Ignored.

HELP_INDEX                        Ignored.

HELP_KEY                          A long pointer to a string which
                                  contains a key word for the desired
                                  topic.

HELP_MULTIKEY                     A long pointer to the MULTIKEYHELP
                                  structure, as defined in WINDOWS.H. This
                                  structure specifies the table footnote
                                  character and the key word.

HELP_QUIT                         Ignored.

wCommand Value                    dwData Format
────────────────────────────────────────────────────────────────────────────

HELP_SETINDEX                     An unsigned long integer containing the
                                  context number for the topic.



Because it can specify either a context number or a key word, WinHelp
supports both context-sensitive and topical searches of the Help file.

────────────────────────────────────────────────────────────────────────────
NOTE

To ensure that the correct index remains set, the application should call
WinHelp with wCommand set to HELP_SETINDEX (with dwData specifying the
corresponding context identifier) following each call to WinHelp with a
command set to HELP_CONTEXT. HELP_INDEX should never be used with
HELP_SETINDEX.
────────────────────────────────────────────────────────────────────────────


18.9.2  Getting Context-Sensitive Help

Context-sensitive Help should be made available when a user wants to learn
about the purpose of a particular window or control. For example, the user
might pull down the File menu, select the Open command (by using the
DIRECTION keys), and then press F1 to get Help for the command.

Implementing certain types of context-sensitive help requires advanced
programming techniques. The Helpex sample application illustrates the use of
two techniques. These techniques are described in the following sections.


Shift+F1 Support

To implement a SHIFT+F1 mode, such as in Microsoft Excel or Microsoft Word
for Windows, Helpex responds to the SHIFT+F1 accelerator key by calling
SetCursor to change the shape of the cursor to an arrow pointer supplemented
by a question mark.

  case WM_KEYDOWN:
        if (wParam == VK_F1) {

            /* If Shift-F1, turn help mode on and set help cursor */

            if (GetKeyState(VK_SHIFT)) {
                bHelp = TRUE;
                SetCursor(hHelpCursor);
                return (DefWindowProc(hWnd, message, wParam, lParam));
            }

            /* If F1 without shift, then call up help main index topic */
            else {
                WinHelp(hWnd,szHelpFileName,HELP_INDEX,0L);
            }
        }

        else if (wParam == VK_ESCAPE && bHelp) {

            /* Escape during help mode: turn help mode off */
            bHelp = FALSE;
            SetCursor((HCURSOR)GetClassWord(hWnd,GCW_HCURSOR));
        }

        break;

As long as the user is in Help mode (that is, until he clicks the mouse or
hits Escape), Helpex responds to WM_SETCURSOR messages by resetting the
cursor to the arrow and question mark combination.


    case WM_SETCURSOR:
        /* In help mode it is necessary to reset the cursor in response */
        /* to every WM_SETCURSOR message.Otherwise, by default, Windows */
        /* will reset the cursor to that of the window class. */

        if (bHelp) {
            SetCursor(hHelpCursor);
            break;
        }
        return (DefWindowProc(hWnd, message, wParam, lParam));
        break;

    case WM_INITMENU:
        if (bHelp) {
            SetCursor(hHelpCursor);
        }
        return (TRUE);

When the user is in SHIFT+F1 Help mode and clicks the mouse button, Helpex
will receive a WM_NCLBUTTONDOWN message if the click is in a nonclient area
of the application window. By examining the wParam value of this message,
the program can determine which context ID to pass to WinHelp.


    case WM_NCLBUTTONDOWN:
        /* If we are in help mode (Shift+F1) then display context- */
        /* sensitive help for nonclient area. */

        if (bHelp) {
            dwHelpContextId =
                (wParam == HTCAPTION)?(DWORD)HELPID_TITLE_BAR:
                (wParam == HTSIZE)? (DWORD)HELPID_SIZE_BOX:
                (wParam == HTREDUCE)? (DWORD)HELPID_MINIMIZE_ICON:
                (wParam == HTZOOM)? (DWORD)HELPID_MAXIMIZE_ICON:
                (wParam == HTSYSMENU)?(DWORD)HELPID_SYSTEM_MENU:
                (wParam == HTBOTTOM)? (DWORD)HELPID_SIZING_BORDER:
                (wParam == HTBOTTOMLEFT)? (DWORD)HELPID_SIZING_BORDER:
                (wParam == HTBOTTOMRIGHT)?(DWORD)HELPID_SIZING_BORDER:
                (wParam == HTTOP)?(DWORD)HELPID_SIZING_BORDER:
                (wParam == HTLEFT)?(DWORD)HELPID_SIZING_BORDER:
                (wParam == HTRIGHT)?(DWORD)HELPID_SIZING_BORDER:
                (wParam == HTTOPLEFT)?(DWORD)HELPID_SIZING_BORDER:
                (wParam == HTTOPRIGHT)? (DWORD)HELPID_SIZING_BORDER:
                (DWORD)0L;

            if (!((BOOL)dwHelpContextId))
                return (DefWindowProc(hWnd, message, wParam, lParam));
            bHelp = FALSE;
            WinHelp(hWnd,szHelpFileName,HELP_CONTEXT,dwHelpContextId);
            break;
        }

        return (DefWindowProc(hWnd, message, wParam, lParam));


F1 Support

Context-sensitive F1 support for menus is relatively easy to implement in
your application. If a menu is open and the user presses F1 while one of the
menu items is highlighted, Windows sends a WM_ENTERIDLE message to the
application to indicate that the system is going back into an idle state
after having determined that F1 was not a valid key stroke for choosing a
menu item. You can take advantage of this idle state by looking at the
keyboard state at the time of the WM_ENTERIDLE message.

If the F1 key is down, then you can simulate the user's pressing the ENTER
key by posting a WM_KEYDOWN message using VK_RETURN. You don't really want
your application to execute the menu command. What you do is set a flag
(bHelp=TRUE) so that when you get the WM_COMMAND message for the menu item,
you don't execute the command. Instead, the topic for the menu item is
displayed by Windows Help.

The following code samples illustrate F1 sensing for menu items.


    case WM_ENTERIDLE:
        if ((wParam == MSGF_MENU) && (GetKeyState(VK_F1) & 0x8000)) {
            bHelp = TRUE;
            PostMessage(hWnd, WM_KEYDOWN, VK_RETURN, 0L);
        }
        break;


    case WM_COMMAND:
        /* Was F1 just pressed in a menu, or are we in help mode */
        /* (Shift+F1)? */

        if (bHelp) {
            dwHelpContextId =
                (wParam == IDM_NEW)?(DWORD)HELPID_FILE_NEW:
                (wParam == IDM_OPEN)? (DWORD)HELPID_FILE_OPEN:
                (wParam == IDM_SAVE)? (DWORD)HELPID_FILE_SAVE:
                (wParam == IDM_SAVEAS)? (DWORD)HELPID_FILE_SAVE_AS:
                (wParam == IDM_PRINT)?(DWORD)HELPID_FILE_PRINT:
                (wParam == IDM_EXIT)? (DWORD)HELPID_FILE_EXIT:
                (wParam == IDM_UNDO)? (DWORD)HELPID_EDIT_UNDO:
                (wParam == IDM_CUT)?(DWORD)HELPID_EDIT_CUT:
                (wParam == IDM_CLEAR)?(DWORD)HELPID_EDIT_CLEAR:
                (wParam == IDM_COPY)? (DWORD)HELPID_EDIT_COPY:
                (wParam == IDM_PASTE)?(DWORD)HELPID_EDIT_PASTE:
                (DWORD)0L;

            if (!dwHelpContextId)
            {              Messagebox( hWnd, "Help not available for Help
Menu item",                          "Help Example", MB_OK
return (DefWindowProc(hWnd, message, wParam, lParam));
            }

  bHelp = FALSE;
            WinHelp(hWnd,szHelpFileName,HELP_CONTEXT,dwHelpContextId);
            break;
        }

Detecting F1 in dialog boxes is somewhat more difficult than in menus. You
must install a message filter, using the WH_MSGFILTER option of the
SetWindowsHook function. Your message filter function responds to WM_KEYDOWN
and WM_KEYUP messages for VK_F1 when they are sent to a dialog box, as
indicated by the MSGF_DIALOGBOX code. By examining the message structure
passed to the filter, you can determine the context of the F1 help─what the
dialog box is, and the specific option or item. You should not call WinHelp
while processing the filtered message, but rather post an
application-defined message to your application to call WinHelp at the first
available opportunity.


18.9.3  Getting Help on an Item Listed on the Help Menu

Sometimes users may want information about a general concept in the
application rather than about a particular control or window. In these
cases, the application should provide Help for a particular topic that is
identified by a key word rather than a context identifier.

For example, if the Help file for your application contains a topic that
describes how the keyboard is used, you could place a "Keyboard" item in
your Help menu. Then, when the user selects that item, your application
would call WinHelp and request that topic:

  case IDM_HELP_KEYBOARD:
     WinHelp (hWnd, lpHelpFile, HELP_KEY, (LPSTR) "Keyboard");
     break;


18.9.4  Accessing Additional Key-Word Tables

Your application may have commands or terms that correspond to terms in a
similar, but different, application. Given a key word, the application can
call WinHelp and look up topics defined in an alternate key-word table. This
Multikey functionality is accessed through the WinHelp hook with the
wCommand parameter set to HELP_MULTIKEY.

You specify the footnote character for the alternate key-word table, and the
key word or phrase, via a MULTIKEYHELP structure which is passed as the
dwData parameter in the call to WinHelp. This structure is defined in
WINDOWS.H as:

  typedef struct tag MULTIKEYHELP {
   WORD mdSize;
   BYTE mkKeyList;
   BYTE szKeyPhrase[1];
  } MULTIKEYHELP;

The following table lists the format of the fields of the MULTIKEYHELP
structure:

Parameter                         Format
────────────────────────────────────────────────────────────────────────────
mkSize                            The size of the structure, including the
                                  key word (or phrase) and the associated
                                  key-table letter.

mkKeyList                         A single character which defines the
                                  footnote character for the alternate
                                  key-word table to be searched.

szKeyPhrase                       A null-terminated key word or phrase to
                                  be looked up in the alternate key-word
                                  table.

The following example illustrates a key-word search for the word "frame" in
the alternate key-word table designated with the footnote character "L":

  MULTIKEYHELP mk;
  char szKeyword[]="frame";
  mk.mkSize=sizeof(MULTIKEYHELP)+(WORD)lstrlen(szKeyword);
  mk.mkKeylist="L";
  mk.szKeyphrase=szKeyword;
  WinHelp(hWnd,lpHelpfile,HELP_MULTIKEY,(LPSTR)&mk);


18.9.5  Canceling Help

The Windows Help application is a shared resource that is available to all
Windows applications. In addition, since it is a stand-alone application,
the user can execute it like any other application. As a result, your
application has limited control over the Help application. While your
application cannot directly close the Help application window, your
application can inform the Help application that Help is no longer needed.
Before closing its main window, your application should call WinHelp with
the wCommand parameter set to HELP_QUIT, as shown in the following example,
to inform the Help application that your application will not need it again.

  case WM_DESTROY:
     WinHelp (hWnd, lpHelpFile, HELP_QUIT, NULL);

An application that has called WinHelp at some point during its execution
must call WinHelp with the wCommand parameter set to HELP_QUIT before the
application exits from WinMain (typically during the WM_DESTROY message
processing).

If an application opens more than one Help file, then it must call WinHelp
to quit help for each file.

If an application or DLL has opened a Help file but no longer wants the
associated instance of the Help engine (WINHELP.EXE) to remain active, then
the application or DLL should call WinHelp with the wCommand parameter set
to HELP_QUIT to destroy the instance of the Help engine.

Under no circumstances should an application or DLL terminate without
calling WinHelp for any of the opened Help files. A Help file is opened if
any other WinHelp call has been previously made using the Help filename.

The Windows Help application does not exit until all windows that have
called WinHelp have called it with wCommand set to HELP_QUIT. If an
application fails to do so, then the Help application will continue running
after all applications that requested Help have terminated.


18.10  Summary

This chapter described how to create a Help project file, build the Help
resource file, and program your application to access Help. For more
information, see the following:

Topic                             Reference
────────────────────────────────────────────────────────────────────────────
Planning a Help system            Tools: Chapter 16, "Planning the Help
                                  System"

Writing Help topics               Tools: Chapter 17, "Creating the Help
                                  Topic Files"






Chapter 19  Help Examples and Compiler Error Messages
────────────────────────────────────────────────────────────────────────────

The first part of this chapter contains several examples of Help source
files and their corresponding topics as displayed in Help. Each example
shows a topic (or part of a topic) as it appears to the Help writer in the
RTF-capable word processor and as it appears to the user in the Help window.
You can use these examples as guides when creating your own topic files. The
examples should help you predict how a particular topic file created in a
word processor will appear to the user.

The second part of this chapter contains a list of Help Compiler error
messages. Each message is shown as it appears when the compiler encounters
the specific error. A short explanation accompanies each message to aid you
in solving the problem in your Help system. Preceding the error message
listing is a short description of the error reporting behavior of the Help
Compiler. Understanding how the compiler reports and reacts to errors will
help you to debug your Help files.


19.1  Help Topic Examples

(This figure may be found in the printed book).

(This figure may be found in the printed book).

<$R>

(This figure may be found in the printed book).

(This figure may be found in the printed book).

(This figure may be found in the printed book).

(This figure may be found in the printed book).

(This figure may be found in the printed book).

(This figure may be found in the printed book).

(This figure may be found in the printed book).

(This figure may be found in the printed book).

The following is the Helpex (sample Help) project file:

  [OPTIONS]
  ROOT=c:\help
  INDEX=main_index
  TITLE=Help Example
  COMPRESS=true

  [FILES]
  helpex.rtf  ; jump topics
  terms.rtf   ; look-up terms

  [MAP]
  main_index 0xFFFF
  #define HELPID_EDIT_CLEAR     100
  #define HELPID_EDIT_COPY      101
  #define HELPID_EDIT_CUT       102
  #define HELPID_EDIT_PASTE     103
  #define HELPID_EDIT_UNDO      104
  #define HELPID_FILE_EXIT      200
  #define HELPID_FILE_NEW       201
  #define HELPID_FILE_OPEN      202
  #define HELPID_FILE_PRINT     203
  #define HELPID_FILE_SAVE      204
  #define HELPID_FILE_SAVE_AS   205
  #define HELPID_EDIT_WINDOW    300
  #define HELPID_MAXIMIZE_ICON  301
  #define HELPID_MINIMIZE_ICON  302
  #define HELPID_SPLIT_BAR      303
  #define HELPID_SIZE_BOX       304
  #define HELPID_SYSTEM_MENU    305
  #define HELPID_TITLE_BAR      306
  #define HELPID_SIZING_BORDER  307


19.2  Help Compiler Error Messages

The Help Compiler displays messages when it encounters errors in building
the Help resource file. Errors during processing of the project file are
numbered beginning with the letter P and appear as in the following
examples:

  Error P1025: line...7 of filename.HPJ : Section heading sectionname
unrecognized.

  Warning P1039: line...38 of filename.HPJ : [BUILDTAGS] section missing.

Errors which occur during processing of the RTF topic file(s) are numbered
beginning with the letter R and appear as in the following examples:

  Error R2025: File environment error.

  Warning R2501: Using old key-phrase table.

Whenever possible, the compiler will display the topic number and/or
filename that contains the error. Though topics are not numbered, the topic
number given with an error message refers to that topic's sequential
position in your RTF file (first, second, etc.). These numbers may be
identical to the page number shown by your word processor, depending on the
number of lines you have assigned to the hypothetical printed page. Remember
that topics are separated by hard page breaks, even though there is no such
thing as a "page" in the Help system.

Messages beginning with the word "Error" are fatal errors. Errors are always
reported, and no usable Help resource file will result from the build.
Messages beginning with the word "Warning" are less serious in nature. A
build with warnings will produce a valid Help resource file which will load
under Windows, but the file may contain operational errors. You can specify
the amount of warning information to be reported by the compiler. See
section 17.4.1, "Specifying Error Reporting: The Warning Option," for more
information on choosing warning levels to be displayed.

The compiler's reaction to an error is described for each error in the
listing that follows. During processing of the project file, the compiler
ignores lines that contain errors and attempts to continue with the build.
This means that errors encountered early in a build may result in many more
errors being reported as the build continues. Similarly, errors during
processing of the RTF topic files will be reported and if not serious, the
compiler will continue with the build. A single error condition in the topic
file may result in more than one error message being reported by the
compiler. For instance, a misidentified topic will cause an error to be
reported every time jump terms refer to the correct topic identifier. Such a
mistake is easily rectified by simply correcting the footnote containing the
wrong context string.


19.2.1  Errors During Processing of Project File

P1001                             Unable to read file filename.

                                  The file specified in the project file
                                  is unreadable. This is a DOS file error.

P1003                             Invalid path specified in Root option.

                                  The path specified by the Root option
                                  cannot be found. The compiler uses the
                                  current working directory.

P1005                             Path and filename exceed limit of 79
                                  characters.

                                  The absolute pathname, or the combined
                                  root and relative pathname, exceed the
                                  DOS limit of 79 characters. The file is
                                  skipped.

P1007                             Root path exceeds maximum limit of 66
                                  characters.

                                  The specified root pathname exceeds the
                                  DOS limit of 66 characters. The pathname
                                  is ignored and the compiler uses the
                                  current working directory.

P1009                             [FILES] section missing.

                                  The [Files] section is required. The
                                  compilation is aborted.

P1011                             Option optionname previously defined.

                                  The specified option was defined
                                  previously. The compiler ignores the
                                  attempted redefinition.

P1013                             Project file extension cannot be .HLP.

                                  You cannot specify that the compiler use
                                  a project file with the .HLP extension.
                                  Normally, project files are given the
                                  .HPJ extension.

P1015                             Unexpected end-of-file.

                                  The compiler has unexpectedly come to
                                  the end of the project file. There might
                                  be an open comment in the project file
                                  or an included file.

P1017                             Parameter exceeds maximum length of 128
                                  characters.

                                  An option, context name or number, build
                                  tag, or other parameter on the specified
                                  line exceeds the limit of 128 characters.
                                  The line is ignored.

P1021                             Context number already used in [MAP]
                                  section.

                                  The context number on the specified line
                                  in the project file was previously
                                  mapped to a different context string.
                                  The line is ignored.

P1023                             Include statements nested too deeply.

                                  The #include statement on the specified
                                  line has exceeded the maximum of five
                                  include levels.

P1025                             Section heading sectionname
                                  unrecognized.

                                  A section heading that is not supported
                                  by the compiler has been used. The line
                                  is skipped.

P1027                             Bracket missing from section heading
                                  sectionname.

                                  The right bracket (]) is missing from
                                  the specified section heading. Insert
                                  the bracket and compile again.

P1029                             Section heading missing.

                                  The section heading on the specified
                                  line is not complete. This error is also
                                  reported if the first entry in the
                                  project file is not a section heading.
                                  The compiler continues with the next
                                  line.

P1030                             Section sectionname previously defined.

                                  A duplicate section has been found in
                                  the project file. The lines under the
                                  duplicated section heading are ignored
                                  and the compiler continues from the next
                                  valid section heading.

P1031                             Maximum number of build tags exceeded.

                                  The maximum number of build tags that
                                  can be defined is 30. The excess tags
                                  are ignored.

P1033                             Duplicate build tag in [BUILDTAGS]
                                  section.

                                  A build tag in the [BuildTags] section
                                  has been repeated unnecessarily

P1035                             Build tag length exceeds maximum.

                                  The build tag on the specified line
                                  exceeds the maximum of 32 characters.
                                  The compiler skips this entry.

P1037                             Build tag tagname contains invalid
                                  characters.

                                  Build tags can contain only alphanumeric
                                  characters or the underscore (_)
                                  character. The line is skipped.

P1039                             [BUILDTAGS] section missing.

                                  The BUILD option declared a conditional
                                  build, but there is no [BuildTags]
                                  section in the project file. All topics
                                  are included in the build.

P1043                             Too many tags in Build expression.

                                  The Build expression on the specified
                                  line has used more than the maximum of
                                  20 build tags. The compiler ignores the
                                  line.

P1045                             [ALIAS] section found after [MAP]
                                  section.

                                  When used, the [Alias] section must
                                  precede the [Map] section in the project
                                  file. The [Alias] section is skipped
                                  otherwise.

P1047                             Context string contextname already
                                  assigned an alias.

                                  You cannot do: a=b then a=c (A context
                                  string can only have one alias.)

                                  The specified context string has
                                  previously been aliased in the [Alias]
                                  section. The attempted reassignment on
                                  this line is ignored.

P1049                             Alias string aliasname already assigned.

                                  You cannot do: a=b then b=c (You can't
                                  alias an alias.)

                                  An alias string cannot, in turn, be
                                  assigned another alias.

P1051                             Context string contextname cannot be
                                  used as alias string.

                                  You cannot do: a=b then c=a

                                  A context string that has been assigned
                                  an alias cannot be used later as an
                                  alias for another context string.

P1053                             Maximum number of font ranges exceeded.

                                  The maximum number of font ranges that
                                  can be specified is five. The rest are
                                  ignored.

P1055                             Current font range overlaps previously
                                  defined range.

                                  A font size range overlaps a previously
                                  defined mapping. Adjust either font
                                  range to remove any overlaps. The second
                                  mapping is ignored.

P1056                             Unrecognized font name in Forcefont
                                  option.

                                  A font name not supported by the
                                  compiler has been encountered. The font
                                  name is ignored and the compiler uses
                                  the default Helv font.

P1057                             Font name too long.

                                  Font names cannot exceed 20 characters.
                                  The font is ignored.

P1059                             Invalid multiple-key syntax.

                                  The syntax used with a MULTIKEY option
                                  is unrecognized. See Chapter 18,
                                  "Building the Help File," for the proper
                                  syntax.

P1061                             Character already used.

                                  The specified key word-table identifier
                                  is already in use. Choose another
                                  character.

P1063                             Characters 'K' and 'k' cannot be used.

                                  These characters are reserved for Help's
                                  normal key-word table. Choose another
                                  character.

P1065                             Maximum number of keyword tables
                                  exceeded.

                                  The limit of five key-word tables has
                                  been exceeded. Reduce the number. The
                                  excess tables are ignored.

P1067                             Equal sign missing.

                                  An option is missing its required equal
                                  sign on the specified line. Check the
                                  syntax for the option.

P1069                             Context string missing.

                                  The line specified is missing a context
                                  string before an equal sign.

P1071                             Incomplete line in sectionname section.

                                  The entry on the specified line is not
                                  complete. The line is skipped.

P1073                             Unrecognized option in [OPTIONS]
                                  section.

                                  An option has been used that is not
                                  supported by the compiler. The line is
                                  skipped.

P1075                             Invalid build expression.

                                  The syntax used in the build expression
                                  on the specified line contains one or
                                  more logical or syntax errors.

P1077                             Warning level must be 1, 2, or 3.

                                  The WARNING reporting level can only be
                                  set to 1, 2, or 3. The compiler will
                                  default to full reporting (level 3).

P1079                             Invalid compression option.

                                  The COMPRESS option can only be set to
                                  TRUE or FALSE. The compilation continues
                                  without compression.

P1081                             Invalid title string.

                                  The TITLE option defines a string that
                                  is null or contains more than 32
                                  characters. The title is truncated.

P1083                             Invalid context identification number.

                                  The context number on the specified line
                                  is null or contains invalid characters.

P1085                             Unrecognized text.

                                  The unrecognizable text that follows
                                  valid text in the specified line is
                                  ignored.

P1086                             Invalid font-range syntax.

                                  The font-range definition on the
                                  specified line contains invalid syntax.
                                  The compiler ignores the line. Check the
                                  syntax for the MAPFONTSIZE option.

P1089                             Unrecognized sort ordering.

                                  You have specified an ordering that is
                                  not supported by the compiler. Contact
                                  Microsoft Product Support Services for
                                  clarification of the error.


19.2.2  Errors During Processing of RTF Topic Files

R2001                             Unable to open bitmap file filename.

                                  The specified bitmap file is unreadable.
                                  This is a DOS file error.

R2003                             Unable to include bitmap file filename.

                                  The specified bitmap file could not be
                                  found or is unreadable. This is a DOS
                                  file error or an out-of-memory condition.

R2005                             Disk full.

                                  The Help resource file could not be
                                  written to disk. Create more space on
                                  the destination drive.

R2009                             Cannot use reserved DOS device name for
                                  file filename.

                                  A file has been referred to as COM1,
                                  LPT2, PRN, etc. Rename the file.

R2013                             Output file filename already exists as a
                                  directory.

                                  There is a subdirectory in the Help
                                  project root with the same name as the
                                  desired Help resource file. Move or
                                  rename the subdirectory.

R2015                             Output file filename already exists as
                                  read-only.

                                  The specified filename cannot be
                                  overwritten by the Help resource file
                                  because the file has a read-only
                                  attribute. Rename the project file or
                                  change the file's attribute.

R2017                             Path for file filename exceeds limit of
                                  79 characters.

                                  The absolute pathname, or the combined
                                  root and relative pathname, to the
                                  specified file exceed the DOS limit of
                                  79 characters. The file is ignored.

R2019                             Cannot open file filename.

                                  The specified file is unreadable. This
                                  is a DOS file error.

R2021                             Cannot find file filename.

                                  The specified file could not be found or
                                  is unreadable. This is a DOS file error
                                  or an out-of-memory condition.

R2023                             Not enough memory to build Help file.

                                  To free up memory, unload any unneeded
                                  applications, device drivers, and
                                  memory-resident programs.

R2025                             File environment error.

                                  The compiler has insufficient available
                                  file handles to continue. Increase the
                                  values for FILES= and BUFFERS= in your
                                  CONFIG.SYS file and reboot.

R2027                             Build tag tagname not defined in
                                  [BUILDTAGS] section of project file.

                                  The specified build tag has been
                                  assigned to a topic, but not declared in
                                  the project file. The tag is ignored for
                                  the topic.

R2033                             Context string in Map section not
                                  defined in any topic.

                                  There are one or more context strings
                                  defined in the project file that the
                                  compiler could not find topics for.

R2035                             Build expression missing from project
                                  file.

                                  The topics have build tags, but there is
                                  no Build= expression in the project file.
                                  The compiler includes all topics in the
                                  build.

R2037                             File filename cannot be created, due to
                                  previous error(s).

                                  The Help resource file could not be
                                  created because the compiler has no
                                  topics remaining to be processed.
                                  Correct the errors that preceded this
                                  error and recompile.

R2039                             Unrecognized table formatting in topic
                                  topicnumber of file filename.

                                  The compiler ignores table formatting
                                  that is unsupported in Help.  Reformat
                                  the entries as linear text if possible.

R2041                             Jump context_string unresolved in topic
                                  topicnumber of file filename.

                                  The specified topic contains a context
                                  string that identifies a nonexistent
                                  topic. Check spelling, and that the
                                  desired topic is included in the build.

R2043                             Hotspot text cannot spread over
                                  paragraphs.

                                  A jump term spans two paragraphs. Remove
                                  the formatting from the paragraph mark.

R2045                             Maximum number of tab stops reached in
                                  topic topicnumber of file filename.

                                  The limit of 32 tab stops has been
                                  exceeded in the specified topic. The
                                  default stops are used after the 32nd
                                  tab.

R2047                             File filename not created.

                                  There are no topics to compile, or the
                                  build expression is false for all topics.
                                  There is no Help resource file created.

R2049                             Context string text too long in topic
                                  topicnumber of file filename.

                                  Context string hidden text cannot exceed
                                  64 characters. The string is ignored.

R2051                             File filename is not a valid RTF topic
                                  file.

                                  The specified file is not an RTF file.
                                  Check that you have saved the topic as
                                  RTF from your word processor.

R2053                             Font fontname in file filename not in
                                  RTF font table.

                                  A font not defined in the RTF header has
                                  been entered into the topic. The
                                  compiler uses the default system font.

R2055                             File filename is not a usable RTF topic
                                  file.

                                  The specified file contains a valid RTF
                                  header, but the content is not RTF or is
                                  corrupted.

R2057                             Unrecognized graphic format in topic
                                  topicnumber of file filename.

                                  The compiler supports only Windows
                                  bitmaps. Check that metafiles or
                                  Macintosh formats have not been used.
                                  The graphic is ignored.

R2059                             Context string identifier already
                                  defined in topic topicnumber of file
                                  filename.

                                  There is more than one context-string
                                  identifier footnote for the specified
                                  topic. The compiler uses the identifier
                                  defined in the first # footnote.

R2061                             Context string contextname already used
                                  in file filename.

                                  The specified context string was
                                  previously assigned to another topic.
                                  The compiler ignores the latter string
                                  and the topic has no identifier.

R2063                             Invalid context-string identifier for
                                  topic topicnumber of file filename.

                                  The context-string footnote contains
                                  nonalphanumeric characters or is null.
                                  The topic is not assigned an identifier.

R2065                             Context string defined for index topic
                                  is unresolved.

                                  The index topic defined in the project
                                  file could not be found. The compiler
                                  uses the first topic in the build as the
                                  index.

R2067                             Footnote text too long in topic
                                  topicnumber of file filename.

                                  Footnote text cannot exceed the limit of
                                  1000 characters. The footnote is ignored.

R2069                             Build tag footnote not at beginning of
                                  topic topicnumber of file filename.

                                  The specified topic contains a buildtag
                                  footnote that is not the first character
                                  in the topic. The topic is not assigned
                                  a build tag.

R2071                             Footnote text missing in topic
                                  topicnumber of file filename.

                                  The specified topic contains a footnote
                                  that has no characters.

R2073                             Keyword string is null in topic
                                  topicnumber of file filename.

                                  A key-word footnote exists for the
                                  specified topic, but contains no
                                  characters.

R2075                             Keyword string too long in topic
                                  topicnumber of file filename.

                                  The text in the key-word footnote in the
                                  specified topic exceeds the limit of 255
                                  characters. The excess characters are
                                  ignored.

R2077                             Keyword(s) defined without title in
                                  topic topicnumber of file filename.

                                  Key word(s) have been defined for the
                                  specified topic, but the topic has no
                                  title assigned. Search Topics Found
                                  displays Untitled Topic< for the topic.

R2079                             Browse sequence string is null in topic
                                  topicnumber of file filename.

                                  The browse-sequence footnote for the
                                  specified topic contains no sequence
                                  characters.

R2081                             Browse sequence string too long in topic
                                  topicnumber of file filename.

                                  The browse-sequence footnote for the
                                  specified topic exceeds the limit of 128
                                  characters. The sequence is ignored.

R2083                             Missing sequence number in topic
                                  topicnumber of file filename.

                                  A browse-sequence number ends in a colon
                                  (:) for the specified topic. Remove the
                                  colon, or enter a "minor" sequence
                                  number.

R2085                             Sequence number already defined in topic
                                  topicnumber of file filename.

                                  There is already a browse-sequence
                                  footnote for the specified topic. The
                                  latter sequence is ignored.

R2087                             Build tag too long.

                                  A build tag for the specified topic
                                  exceeds the maximum of 32 characters.
                                  The tag is ignored for the topic.

R2089                             Title string null in topic topicnumber
                                  of file filename.

                                  The title footnote for the specified
                                  topic contains no characters. The topic
                                  is not assigned a title.

R2091                             Title too long in topic topicnumber of
                                  file filename.

                                  The title for the specified topic
                                  exceeds the limit of 128 characters. The
                                  excess characters are ignored.

R2093                             Title titlename in topic topicnumber of
                                  file filename used previously.

                                  The specified title has previously been
                                  assigned to another topic.

R2095                             Title defined more than once in topic
                                  topicnumber of file filename.

                                  There is more than one title footnote in
                                  the specified topic. The compiler uses
                                  the first title string.

R2501                             Using old key-phrase table.

                                  Maximum compression can only result by
                                  deleting the .PH file before each
                                  recompilation of the Help topics.

R2503                             Out of memory during text compression.

                                  The compiler encountered a memory
                                  limitation during compression.
                                  Compilation continues with the Help
                                  resource file not compressed. Unload any
                                  unneeded applications, device drivers,
                                  and memory-resident programs.

R2505                             File environment error during text
                                  compression.

                                  The compiler has insufficient available
                                  file handles for compression.
                                  Compilation continues with the Help
                                  resource file not compressed. Increase
                                  the values for FILES= and BUFFERS= in
                                  your CONFIG.SYS file and reboot.

R2507                             DOS file error during text compression.

                                  The compiler encountered a problem
                                  accessing a disk file during compression.
                                  Compilation continues with the Help
                                  resource file not compressed.

R2509                             Error during text compression.

                                  One of the three compression
                                  errors─R2503, R2505, or R2507─has
                                  occurred. Compilation continues with the
                                  Help resource file not compressed.

R2701                             Internal error.

                                  Contact Microsoft Product Support
                                  Services for clarification of the error.

R2703                             Internal error.

                                  Contact Microsoft Product Support
                                  Services for clarification of the error.

R2705                             Internal error.

                                  Contact Microsoft Product Support
                                  Services for clarification of the error.


R2707                             Internal error.

                                  Contact Microsoft Product Support
                                  Services for clarification of the error.

R2709                             Internal error.

                                  Contact Microsoft Product Support
                                  Services for clarification of the error.





INDEX
──────────────────────────────────────────────────────────────────────────



{ } (brackets), in symbol map display
{ } (curly braces), as document convention
( ) (parentheses), as document convention
" " (quotation marks), as document convention
-? option
* (asterisk)
  wildcard character
  with commands
@ (at symbol), with commands
: (colon), use of with doubleword values
, (comma), as parameter separator
$ (dollar sign), as symbol with commands
- (hyphen), as SYMDEB option designator
. (period), as ASCII value
+ (plus sign), as filename separator
? (question mark), with commands
; (semicolon), in SYMDEB command list
/ (slash), as SYMDEB option designator
_ (underscore), with commands
| (vertical bar), as document convention
. . . (ellipses), as document convention
{{ }} (double brackets), as document convention

    A
Address arguments, SYMDEB
Allocating memory
Allocation granularity
ANSI character set
Applications
  and creating import libraries
  and linking files
  and starting SYMDEB
  building
  C language
  compiling options for
  development options for
  executable
  memory model for
  memory movement in
  module-definition (.DEF) files for
  optimizing performance of
  passing to Windows
  resource script (.RC) file
  startup routines for
Arguments
  address
  SYMDEB command
ASCII
  byte values, displaying
  characters, displaying
  strings, entering into memory
Assembling instruction mnemonics
Assembly-language symbol files
Asterisk (*)
  wildcard character
  with commands
At symbol (@), with commands

    B
Binary resource file
Bitmap (.BMP) files
   see also Bitmaps
  and File menu
  and Image menu
  and SDKPAINT process
  creating
  described
  working with colors
BITMAP resource statement
Bitmaps
   see also Bitmap (.BMP) files
  creating
  described
  editing colors for
  editing
  opaque color options
  using colors with
Bold text, as document convention
Braces, curly ({ }), as document convention
Brackets ({ }), in symbol map display
Brackets, double ({{ }}), as document convention
Breakpoints
  "sticky", defined
  clearing
  disabling
  immediate
  interrupt key
  restoring disabled
  setting
  virtual
Byte values
  displaying 4-byte values as hexadecimal
  displaying hexadecimal and ASCII values
  searching for

    C
C Compiler
  default option
  options (table)
  versions supported by Windows
C language
  applications
  libraries
C run-time libraries
Callback function
CAPITAL LETTERS, SMALL, as document convention
Character information
Character mapping
Character window
  clearing
  described
Character-viewing window
Characters
  adding columns to
  adding rows to
  canceling changes to
  changing character pixels
  changing width of
  deleting columns from
  deleting rows from
  displayed in Font Editor window
  editing blocks of pixels
  editing
  first of font
  last of font
  pasting to and from Clipboard
  width restriction of
Check box control
Choosing messages
CL command
CL Compiler
   see C Compiler
Clearing breakpoints
CODE statement
Code, instruction
CodeView for Windows (CVW)
  application development option for
  breakpoints
    examples of
    on lines, functions, and addresses
    on values
    on Windows messages
    removing
  calling functions
  commands
    Help on CVW commands
    new, in CVW
  compared with
    CodeView for DOS
    SYMDEB
  compiling source code for use with
  continuous execution
  controlling program execution
  customizing
  debugging multiple instances of an application
  described
  display windows
    adjusting
    described
    opening
    selecting
    using multiple Source windows
    using the mouse with
  displaying memory
    dereferencing memory handles
    in the Memory window
    live expressions
    local and global memory objects
    register contents
  displaying variables
    arrays and structures
    expressions
    single values
    summarized
    using the Quick Watch command
  ending
  Help in CVW
  interrupting a session
  menus
  preparing Windows applications
  recording session information
  redirecting input and output
  register variables
  requirements for use
  restarting
  secondary monitor, setting up
  setting
    breakpoints
  single-step execution
    described
    stepping
    tracing
  starting a CVW session
  tracing
    program execution. See single-step execution.
    Windows messages
  undefined pointers
  values, changing
    for program data
    for variables, memory locations and registers
  windows-specific features
Colon (:), use of with doubleword values
Colors
  and bitmaps
  dithered
  inverse
  opaque
  screen
  true
Combo box control
Comma (, ), as parameter separator
Command arguments, SYMDEB
Comparing bytes in memory locations
Compiler options
  memory-model
  recommended for
    dynamic-link libraries
    Windows applications
CompilersC Compiler
   see Resource Compiler
CONTROL+C key
CONTROL+S key
Controls
  changing identifiers
  changing styles of
  changing text
  custom
  displaying information about
  positions of
  predefined identifiers
  symbolic names of
  temporary
Copying
  dialog-box controls
  file or disk contents into memory
CPU registers, displaying contents of
Creating
  cursor (.CUR) files
  cursors
  icon (.ICO) files
  import libraries
  map files
  module-definition (.DEF) files
  resource script (.RC) files
  symbol files
  Windows applications
Curly braces ({ }), as document convention
Cursor (.CUR) files
  and File menu
  and Image menu
  and SDKPAINT process
  creating
  described
  working with colors
CURSOR resource statement
Cursor
   see also Cursor (.CUR) files
  creating
  cursor images, and creating icons
  defining
  displaying
  editing
  hotspot
  inverse colors with
  opaque color options
  screen colors with
  with clipboard
  with color
Custom control
Custom controls

    D
-D option
DATA statement
Debugging toolsCodeView for Windows (CVW) Spy
   see Symbolic Debugger (SYMDEB)
Debugging
  adding line-number information
  entering into memory;ASCII strings
  in protected mode. See CodeView for Windows(CVW)
  in real mode. See Symbolic Debugger (SYMDEB)
.DEF file
   see Module-definition (.DEF) files
Defining macros
Deleting dialog-box controls
DESCRIPTION statement
Dialog boxes
  adding group marker to
  controls
    changing order of
    editing
    using custom
  creating new
  defining styles of
  deleting group marker from
  editing
    canceling edits
    include files
    methods of
  modifying
  moving between resources
  opening existing
  renaming
  resizing
  setting memory flags for
Dialog Editor
  controls, groups of
    moving
    specifying
  controls, order of
  described
  dialog unit
  editing include files
  group marker
  mouse requirement for
  opening
    dialog boxes
    include files
    resource files
  sizing handle
  tab stop for
  toolbox
    described
    enabling
  using Clipboard format
  window
  working with files
    dialog script
    include
    resource
Dialog script (.DLG) files
Dialog unit, described
Dialog-box controls
  adding
    custom
    standard
  custom
  defining symbolic names for
  deleting
  duplicating
  identifiers for changing
  input focus
    specifying
    using tab stops
  moving
    groups of
    individual
  resizing
  static text
  styles, changing
  text, changing
  types of
    check box
    combo box
    edit
    frame
    group box
    horizontal scroll bar
    icon
    list box
    push button
    radio button
    rectangle
    vertical scroll bar
Directives, resource
Disabling breakpoints
Displaying
  ASCII characters within a given range
  CPU registers, contents of
  cursor hotspot
  expression, value of
  hexadecimal values
    of bytes in given range
    of doublewords
    of words
  instruction code
  instructions, of program being debugged
  list of
    global free memory objects in global heap
    global memory objects in global heap
    global modules in global heap
    local memory objects in local heap
    LRU global memory objects
    SYMDEB commands and operators
  long floating-point numbers
  memory objects
  memory, contents of
  one byte from the input port
  short floating-point numbers
  source line
    actual program
    current
  stack frame
    current
    for a specified task
    stack location and frame-pointer values
  statements, of program being debugged
  sum and difference of two hexadecimal numbers
  symbol map information
  symbol maps
  symbols
  task-queue information
  ten-byte floating-point numbers
  variables
DLLs
   see Dynamic-link libraries
Document conventions
Dollar sign ($), with commands
DOS commands
  CL
  command processor
  exit
  mode
  RC
Double brackets ({{ }}), as document convention
Doubleword values
Dynamic-link Libraries (DLLs)
  custom control
Dynamic-link libraries (DLLs)
  module-definition (.DEF) files, requirements
  options for compiling
  written in C language, requirements

    E
-E option
Echoing comment on output devices
Edit control
Editing
  canceling dialog box edits
  dialog box controls
  dialog box
  include files
Ellipses, as document convention
  horizontal
  vertical
EMS (Expanded Memory Specification)
  defined
  walking
Enabling breakpoints
Enabling toolbox
Epilog (Windows)
Executable files
Executing
  instructions
  macros
Execution control
EXETYPE statement
EXETYPE WINDOWS statement
Expanded Memory Specification
   see EMS
Exported function
EXPORTS statement
Expressions
  displaying value of
  SYMDEB commands

    F
Fatal exit message
-Fe option
File headers, executable
Filenames, setting for load and write commands
Files
  dialog script (.DLG)
  executable file headers
  icon (.ICO)
  include (.H)
  loading
  module-definition (.DEF)
  resource (.R)
  resource script (.RC)
  symbol
Filling addresses in a given range
Floating-point numbers
Floating-point values
-Fo option
Font Editor
  adding
    columns to a character
    rows to a character
  canceling changes
  changing
    character pixels
    character width
    font file header information
  character information display
  character window
    clearing
    described
  character-viewing window
  Clipboard characters, using
  deleting
    columns from characters
    rows from characters
  described
  editing
    blocks of pixels
    characters
  fixed-pitch font
  Font Editor window
  font family names
  font window
  mouse requirement for
  opening fonts
  resizing fonts
  variable-pitch font
  window
Font EditorFonts
   see also Pixels
Font file header, editing
FONT resource statement
Fonts
  break character of
  canceling changes to
  copyright of
  creating
  default character of
  editing
  face name of
  filename of
  first character of
  font character set
  font face name vs. filename
  font families
  font file header
  height of
    ascent
    character pixel
  height
  last character of
  leading of
    external
    internal
  nominal point size of
  nominal resolution of
    horizontal
    vertical
  opening, in Font Editor
  options
    strikeout
    underline
  pitches of
  saving changes to
  types of
    fixed-pitch
    raster
    variable-pitch
    vector
  weights of
  width of
    fixed-pitch
    variable-pitch
Frame control
Functions
  callback
  exported
  imported
  WinMain

    G
GDI library, symbol files
Global heap
  allocating memory to examine
  defining displayed objects
  displaying lists of
    free global memory objects in
    global memory objects in
    global modules in
    LRU global memory objects in
  protected mode
  real mode
  saving lists of objects on
  sorting displayed objects
  total size of examined objects
  viewing
  walking EMS
  walking
Group box control
Group marker
  adding
  deleting

    H
.H file
   see Include (.H) files
-H option
Heap Walker
  allocating memory examined by
  defining objects displayed by
  described
  displaying selected objects
  file operation commands
  information displayed by
  memory allocation commands
  memory object commands
  saving object lists
  sorting displayed objects
  total size of objects examined by
  window
HEAPSIZE statement
Height, font
Help compiler
Help graphics
  bitmaps
    creating, capturing
    placing
Help Project file
  accessing from an application
  Alias section
  Bitmaps section
  bitmaps, including by reference
  Build option
  Build Tags section
  compiling
  Compress option
  context strings, alternate
  context-sensitive Help
  context-sensitive topics
  creating
  F1 support
  Files section
  Forcefont option
  Index option
  keyword table, accessing
  Map section
  Mapfontsize option
  Multikey option
  on Help menu item
  Options section
  Root option
  Title option
  Warning option
Help system
   see also Help
  appearance to programmer
  appearance to user
  appearance to writer
  calling WinHelp
  development cycle described
  graphics. See Help graphics
  hypertext links summarized
  topics. See Help topics
Help text
  fonts
  layout
Help tools
   see Help
Help topic files
  authoring tool
  browse sequence numbers
  build tags
  context strings
  control codes
  cross references
  definitions
  graphics
  jumps
  key words
  managing
  title footnotes
  tracking
Help topics
  content
  context-sensitivity
  cross-references
  definitions
  file structure
  files. See Help topic files
  jumps
  structure of
  text. See Help text
Help Tracker
Help
  audience definition
  cancelling
  compiler error messages
  context-sensitive
  control codes
  error messages
  F1 support
  file structure
  file. See Help Project file
  key words
  keyword table, accessing
  on Help menu item
  planning
    overview
  topic files
    examples
    links summarized
Hexadecimal values
  of bytes in the given range
  of double words
  of floating-point numbers in the given range
  of words in the given range
Hits, defined
Hotspot, cursor
  defining
  displaying
Hyphen (-), as SYMDEB option designator

    I
-I option
Icon (.ICO) files
  and File menu
  and Image menu
  and SDKPAINT process
  creating
  described
  working with colors
Icon control
ICON resource statement
Icons
   see also Icon (.ICO) files
  colors with
  creating, with cursor images
  editing colors for
  editing
  inverse colors with
  opaque color options
  screen colors with
Identifiers, dialog-box control
Immediate breakpoint
IMPLIB utility
IMPORTS statement
Include (.H) files
  creating
  editing
  loading
  saving
  working with
Input focus, dialog-box control
Input port
Input, redirecting input commands
Instruction code, displaying
Interrupt key
Italic text, as document convention

    K
-K option
Kernel library, symbol files
Keys
  CONTROL+C
  CONTROL+S
  SCROLL LOCK
  SYS REQ

    L
-L option
Leading
LIBRARY statement
Library symbol files
-LIM 32 option
Linker
  command options
    described
    not allowed
    not recommended
  creating import libraries
  LINK command, using
  linking
    applications files
    dynamic-link libraries
    module-definition (.DEF) files
    source files
    Windows applications
  module-definition (.DEF) files
    creating for applications
    creating for libraries
    importing dynamic-link libraries
    module statements
    requirements for creating
Linking
   see Linker
List box control
Listing breakpoint information
Loading
  files
  logical records
Local heap
Logical records, loading

    M
-M option
Macro
  defining
  executing
Managing output
Map files
Maps
   see Symbol maps
MAPSYM program
  creating symbol files
  sample symbol file
MASM assembler
Math coprocessor/emulator, with Windows
Memory flags, setting dialog box
Memory models
Memory
  comparing bytes in memory locations
  copying file or disk contents into
  determining size
  displaying contents of within a given range
  entering
    ASCII strings into
    byte values into
    doubleword values into
    long floating-point values into
    short floating-point values into
    ten-byte real values into
    values into
    word values into
  moving blocks of
  testing movable
Menu bar
Messages
  choosing
  fatal-exit
  information Spy monitors
  memory-allocation
  monitoring
Microsoft QuickC
Mnemonics, instruction
Mode display
Module statements
   see Module-definition (.DEF) files
Module-definition ( DEF) files
  for applications
    described
Module-definition (.DEF) files
  creating
  described
  for applications
    described
    sample file
  for dynamic-link libraries
    described
    sample file
  linking applications
  module statements
    list
    required
Monitor, secondary, for debugging
Monospaced type, as document convention
Moving blocks of memory
MS-DOS
   see DOS commands

    N
NAME statement
Naming
  modules
  symbol files
Non-maskable interrupts
Notational conventions

    O
OEM character set
Oil can
Optimization toolsHeap Walker Profiler Shaker
   see Swap
Options
  compiler
    application development
    dynamic-link library
    memory-model
  LINK command
    described
    options not allowed
    options not recommended
  option designator
  RC command line
  Resource Compiler (table)
  SYMDEB
Output device, choosing (Spy)
Output port
  sending bytes to
Output
  redirecting output commands
  suspending and restoring

    P
-P option
Packed structure
Paintbrush
Parentheses ( ), as document convention
PC-DOS
   see DOS commands
Period (.), as ASCII value
Pixels
  adding rows or columns of
  changing character
  copying to Clipboard
  deleting rows or columns of
  pasting from Clipboard
  selecting and changing blocks of
Plus sign (+), as filename separator
Preprocessor, defining names for
PROF.COM program
Profiler
  checking if installed
  described
  displaying samples
  ensuring compatibility with your system
  functions
  managing output (example)
  sampling
    real-mode Windows applications
    setting rate of
    starting and stopping
    Windows 386 enhanced mode applications
  starting and stopping
Program descriptor block (pdb)
Program execution
Program input and output, redirecting
Programming tools
   see Tools
Programs
  CL
  RC
  setting arguments for program execution
Prolog (Windows)
Protected mode
  debugging in. See CodeView for Windows(CVW)
Public symbols
Push button control

    Q
Question mark (?), with commands
Quitting SYMDEB
Quotation marks (" "), as document convention

    R
-R option
Radio button control
Raster fonts
RC command
RC Compiler
  described
RC compiler
  options (table)
.RC file
   see Resource script (.RC) files
Real mode
  debugging in. See Symbolic Debugger (SYMDEB)
Real-mode Windows applications
REC command
Rectangle control
Redirecting program input and output
Registers, CPU, displaying contents of
Reporting utility
.RES file
   see Resource (.RES) files
Resource (.RES) files
Resource Compiler
  described
  RC command line options
Resource directives
Resource editorsDialog Editor Font Editor
   see SDKPaint
Resource script (.RC) files
  .RC extension
  and Dialog Editor
  creating
  described
  for applications
  resource statements
Resource statements
   see Resource script (.RC) files
Resources
  defining
  dialog box

    S
Sampling
  buffer
  displaying samples
  minimizing loss when sampling buffer fills
  real-mode Windows applications
  setting rate of code
  standard-mode Windows applications
  starting and stopping
  utilities for
  Windows 386 enhanced mode applications
Scroll bar control
SCROLL LOCK key
SDKPaint
  .DAT file, described
  color palette, described
  converting files
  cursor hotspot
    defining
    showing the current
  described
  loading images into
  menu commands (list)
  tools, described (table)
  transferring images to and from clipboard
  window, described
  working with colors
    customizing the color palette
    editing colors
    inverse colors
    loading a customized palette
    opaque colors
    saving a palette
    screen colors
    true colors
    types of
Secondary monitor, setting up for debugging
SEGMENTS statement
Selected Item Status window
Semicolon (
  ), in SYMDEB command list
Serial port
Setting
  active symbol maps and/or segments
  breakpoint address
  breakpoints
  display mode
  filenames for load and write commands
  program arguments for program execution
Shaker
  allocation granularity
  commands (list)
  described
SHOWHITS.EXE utility
  described
  sample display
SKERNEL.EXE file
SKERNEL.SYM file
Slash (/), as SYMDEB option designator
SMALL CAPTIAL LETTERS, as document convention
Sorting memory objects
Source file, compiling
Source lines, displaying
Spy
  choosing a window
  choosing options
    message type
    output device
    output frequency
  described
  starting
  turning on and off
Stack frame
Stack probes
STACK statement
STACKSIZE statement
Starting applications with Windows
Statements
  CODE
  DATA
  DESCRIPTION
  EXETYPE WINDOWS
  EXETYPE
  EXPORTS
  HEAPSIZE
  IMPORTS
  LIBRARY
  NAME
  SEGMENTS
  STACK
  STACKSIZE
  STUB
Static text control
Static variables
STUB statement
Styles
  dialog box
  dialog-box control
SWAP.EXE file
Swap
  command line options
  described
  output format
  reducing processing time
  starting and stopping
.SYM files
Symbol files
  for assembly-language applications
  for C-language applications
  library
  loading
  naming
  setting up
Symbol maps
  defined
  displaying symbols
  listing
  opening
  using symbols from
Symbolic Debugger (SYMDEB)
  and IBM-compatible computers
  application development option for
  arguments
    address (list)
    command (list)
  commands
    canceling current
    command options
    executing at startup
    list of
    redirect input and output
    set source mode
  debugging terminal
    remote
    secondary
  described
  displaying
    application source statements
    variables
  expressions (list)
  for Assembly-language applications
  for C-language applications
  loading macro definitions
  messages
    fatal exit
    memory-allocation
  option designator
  option
  passing control to command.com
  preparing symbol files for
  quitting
  redirecting output from
  returning control to DOS
  setting
    breakpoints
    memory-allocation reporting level
  special keys
  specifying symbol files
  starting applications
  starting
  suspending and restoring output
  symbol maps
    opening
    using symbols from
    working with
  terminating
  use of, with Windows
Symbolic Debugger(SYMDEB)
  debugging terminal
    secondary
Symbols
  declaring public
  displaying
SYS REQ key

    T
Tab stop, setting for dialog-box control
Task descriptor block
Task queue, displaying information about
Terminal
   remote, for debugging
   secondary, for debugging
Terminating SYMDEB
Text editors
  creating applications
  creating resource script files
Text, changing
Toolbox
  described
  enabling
Tools
   see Help.
  compilers. See C Compiler; Resource Compiler
  debugging tools. See CodeView for Windows ; Spy; Symbolic Debugger
  linkers. See Linker
  optimization tools. See Heap Walker; Profiler; Shaker; Swap
  resource editors. See Dialog Editor; Font Editor; SDKPaint
Turning off stack probes

    U
Underscore (_), with commands
User library, symbol files
User-defined resource statement
Utilities
   see Tools

    V
-V option
Variable-pitch fonts
Variables
  displaying
  static
Vector fonts
Vertical bar (|), as document convention
Virtual breakpoint, defined
VPROD.386 device driver

    W
Walking the heap
Width, font
Wildcard character (*), with SYMDEB commands
Window, monitoring messages to
Windows 386 enhanced mode applications
  using PROFILER with
  Using PROFILER with
  using PROFILER with
Windows 386 mode applications
  using PROFILER with
Windows applications
  compiler option, example
  creating
Windows enhanced mode applications
  using PROFILER with
Windows version stamp
Windows
  epilog
  fatal exit message
  import libraries
  prolog
WinMain function
Writing
  to logical records on disk
  to named files

    X
-X option
```

{% endraw %}
