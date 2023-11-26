---
layout: page
title: "MS Windows 3.0 SDK Installation &amp; Update Guide"
permalink: /documents/books/mspl13/win/w3sdkin/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft Windows Software Development Kit - Installation and Update Guide







────────────────────────────────────────────────────────────────────────────
Microsoft(R) Windows Software Development Kit - Installation and Update
Guide

      development tools for building Microsoft(R) Windows applications
                                VERSION 3.0
────────────────────────────────────────────────────────────────────────────


for the MS-DOS(R) and PC-DOS Operating Systems







Microsoft Corporation

Information in this document is subject to change without notice and does
not represent a commitment on the part of Microsoft Corporation. The
software described in this document is furnished under a license agreement
or nondisclosure agreement. The softw
U.S. Government Restricted Rights



The SOFTWARE and documentation are provided with RESTRICTED RIGHTS. Use,
duplication, or disclosure by the Government is subject to restrictions as
set forth in subparagraph (c) (1) (ii) of the Rights in Technical Data and
Computer Software clause at
 DFARS 252.227-7013 or subparagraphs (c) (1) and (2) of the Commercial
Computer Software ─ Restricted Rights at 48 CFR 52.227-19, as applicable.
Contractor/manufacturer is Microsoft Corporation/One Microsoft Way/Redmond,
WA 98052-6399.


(C)Copyright Microsoft Corporation, 1990. All
rights reserved.

Simultaneously published in the U.S. and Canada.


Printed and bound in the United States of America.


Microsoft, MS, MS-DOS, GW-BASIC, QuickC, CodeView, and
XENIX are registered trademarks of Microsoft Corporation.

Aldus is a registered trademark of Aldus Corporation.

COMPAQ is a registered trademark of Compaq Computer Corporation.

IBM is a registered trademark of International Business
Machines Corporation.

Intel is a registered trademark of Intel Corporation.

Lotus and 1-2-3 are registered trademarks of Lotus Development
Corporation.

Paintbrush is a registered trademark of Zsoft Corporation.

PostScript is a registered trademark of Adobe Systems, Inc.

The Symbol fonts provided with Windows 3.0 are based on the CG
Times font, a product of AGFA Compugraphic Division of Agfa Corporation.

Tandy is a registered trademark of Tandy Corporation.

Document No. SY0333-300-R00-1089







Chapter 1  Overview of the Windows SDK

     1.1   Contents of the Software Development Kit
     1.2   Hardware and Software Requirements<$M[Requirements]>

Chapter 2  Installing the SDK Software

     2.1   Installing the SDK Software
     2.2   Installing the Debugging Version of Windows
     2.3   The Windows C Run-Time Libraries
     2.4   The Windows and C Run-Time Header Files
     2.5   Updating Your CONFIG.SYS and AUTOEXEC.BAT Files

Chapter 3  Setting Up Your Windows Development Environment

     3.1   Configuring Windows as a Development Environment
            3.1.1    Optimizing Windows as a Development Environment
            3.1.1    Associating File Extensions With Development Tools
            3.1.2    Setting Up PIFs for Development Tools
            3.1.3    Testing and Debugging Your Application in Windows
     3.2   Initialization-File Entries
            3.2.1    WIN.INI Settings
            3.2.1    SYSTEM.INI Setting

Chapter 4  What's New for Windows Version 3.0?

     4.1   Overview of New Features
     4.2   Changes to the Windows Environment
            4.2.1    New User Shell
            4.2.2    New Standard Help Facility
            4.2.3    Improved Memory Management
            4.2.4    Color Palette Manager
            4.2.5    Font Improvements
            4.2.6    Device-Independent Bitmaps
            4.2.7    Device-Independent Icons and Cursors
            4.2.8    Changes to the Application User Interface
            4.2.9    Changes to Dynamic-Link Libraries
            4.2.10   Network Support
     4.3   Changes to the Windows Software Development Kit
            4.3.1    Improved Installation
            4.3.2    Windows C Run-Time Libraries
            4.3.3    Consolidation of Language Tools
            4.3.4    New Tools
            4.3.5    Changes to Existing Tools
            4.3.6    Source Code Examples
            4.3.7    Clipboard Support for Objects Larger than 64K
            4.3.8    On-Line Reference Documentation
     4.4   Revising 2.x Applications for Windows 3.0
            4.4.1    Running Successfully with Windows 3.0
            4.4.2    Making 2.x Applications Upwardly Compatible with
                        Windows 3.0
            4.4.3    Migrating 2.x Applications to Version 3.0



Chapter 1  Overview of the Windows SDK
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) Windows(tm) 3.0 Software Development Kit (SDK) is a
collection of utilities, libraries, debugging aids, manuals, and sample
source programs designed to help you create Windows applications.

This guide introduces version 3.0 of the SDK and covers the following
topics:


  ■   The disks and manuals that make up the SDK

  ■   Installing the SDK software

  ■   Configuring Windows 3.0 as an environment for developing Windows
      applications

  ■   What's new for Windows 3.0, and how the changes may affect existing
      Windows applications




1.1  Contents of the Software Development Kit

The SDK contains complete sets of source files on two different sizes of
disks. You'll find six 5 1/4 -inch 1.2-megabyte disks and ten 3 1/2 -inch
720K disks in the box. If you'd prefer to have the SDK software on 360K
disks, please complete the enclosed fulfillment form and return it to
Microsoft.

The SDK includes the following 1.2-megabyte disks:


  ■   Development Tools

  ■   Debug Tools/Analysis Tools

  ■   Development Files

  ■   Link Libraries

  ■   Sample Source Code 1/On-Line Reference (Advisor Format)

  ■   Sample Source Code 2/On-Line Reference (Windows Help Format)


The SDK includes the following 720K disks:


  ■   Development Tools 1

  ■   Development Tools 2/Debug Tools 1

  ■   Debug Tools 2/Debug Files 1

  ■   Debug Files 2

  ■   Include Files/Sample Source Code 1

  ■   Sample Source Code 2

  ■   Link Libraries 1

  ■   Link Libraries 2

  ■   On-Line Reference (Advisor Format)

  ■   On-Line Reference (Windows Help Format)


The SDK includes the following manuals:


  ■   Microsoft Windows Software Development Kit Installation and Update
      Guide  (this booklet)

  ■   Microsoft Windows Software Development Kit Guide to Programming

  ■   Microsoft Windows Software Development Kit Tools

  ■   Microsoft Windows Software Development Kit Reference in two volumes

  ■   System Application Architecture, Common User Access: Advanced
      Interface Design Guide


The manuals contain the following information:


  ■   The Installation and Update Guide gives you an orientation to the SDK,
      explains how to install the SDK software, and highlights the changes
      for version 3.0.

  ■   The Guide to Programming explains how to write Windows applications,
      and provides sample applications that you can use as templates for
      writing your own programs. The Guide to Programming also addresses
      some advanced Windows programming topics.

      If you're an experienced programmer, you may be tempted to skip this
      book, but don't. There are substantial differences between C run-time
      programming and Windows programming; the Guide to Programming
      describes those differences. In addition, it covers advanced topics,
      such as managing memory in the Windows environment and writing custom
      window controls.

      The Guide to Programming also includes several small programming
      examples that show how to accomplish common tasks using the Windows
      application programming interface (API). All programming examples are
      in the C language and conform to the style and structure recommended
      in the System Application Architecture, Common User Access: Advanced
      Interface Design Guide.

  ■   Tools functions as a user's guide for the software-development tools
      that come with the SDK. Among the tools are debugging programs,
      optimization utilities, and specialized editors for creating cursors,
      bitmaps, icons, fonts, and dialog boxes.

  ■   The Reference is a comprehensive guide to all the details of the
      Windows application programming interface (API). The API is is a
      collection of functions, messages, data structures, files formats, and
      protocols. It gives you a way to create applications that are portable
      to any computer running Windows.

      Volume 1 of the Reference lists in alphabetical order all the current
      functions and messages of the API, and provides extensive overviews on
      how to use them.

      Volume 2 of the Reference describes  all the data structures, resource
      script statements, file formats, and other components of the API.

      INSTALL optionally copies two help files to your hard disk. SDKWIN.HLP
      is a Windows Help file. SDKADV.HLP is a Microsoft Advisor on-line Help
      file. Both of these files contain most of Volume 1 and portions of
      Volume 2 of the Reference.

  ■   The System Application Architecture, Common User Access: Advanced
      Interface Design Guide offers guidelines and recommendations for
      writing programs that appear and act consistent with other Windows
      applications. The purpose of these guidelines is to provide a common
      user interface for all Windows applications, so that the user does not
      have to relearn basic concepts for each new program. Programs that
      follow these guidelines can be easily integrated with other Windows
      programs.



1.2  Hardware and Software Requirements<$M[Requirements]>

To use the Windows 3.0 SDK, you'll need the following hardware:


  ■   A personal computer using the Intel 80286, 80386 (386 DX or 386 SX),
      or higher processor

  ■   640K conventional memory and 384K extended memory

  ■   One 51/4-inch (1.2 megabyte) or 31/2-inch (720K) disk drive

  ■   One hard disk

  ■   A CGA, EGA, VGA, 8514/a, or Hercules graphics card, or compatible
      video graphics adapter and monitor

  ■   A secondary monochrome monitor and adapter card (required by the
      CodeView(R) for Windows debugger)

  ■   A Microsoft Mouse or compatible (required for some development tools)


Before installing the SDK, make sure that the following software is already
installed on your system:


  ■   DOS (MS-DOS or PC-DOS operating system) version 3.1 or later

  ■   Microsoft Windows graphical environment version 3.0

  ■   One of the following compilers:

  ■   Microsoft C Optimizing Compiler version 5.1 or later

  ■   Microsoft Macro Assembler version 5.1 or later








Chapter 2  Installing the SDK Software
────────────────────────────────────────────────────────────────────────────

This chapter explains how to install the Microsoft Windows 3.0 Software
Development Kit (SDK). The SDK installation program performs the following
tasks:


  ■   It copies the SDK software to your hard disk.

  ■   It installs one or more Windows C run-time libraries, depending on the
      memory model(s) and math coprocessor(s) you specify.

  ■   It adds some information to the SYSTEM.INI and TOOLS.INI
      initialization files.

  ■   Optionally, it copies the source files for the sample programs to your
      hard disk.

  ■   Optionally, it copies the SDKWIN.HLP Windows Help file and/or the
      SDKADV.HLP Microsoft Advisor Help file to your hard disk.

  ■   It adds the SDK Tools group to your Program Manager window.


Before installing the SDK, ensure that your system meets the hardware and
software requirements described in Chapter <$R[C#,Requirements]1>, "Overview
of the Windows SDK."


2.1  Installing the SDK Software

To install the programs, libraries, and include files of the SDK on your
hard disk, use the INSTALL program, which is included with the SDK.

You can install the SDK either before or after you install Microsoft C
version 5.1 or later. See Section 2.3, "The Windows C Run-Time Libraries,"
for information on the SDK and your C libraries.

The Microsoft C SETUP program does not copy MAPSYM.EXE to your hard disk
during installation. MAPSYM is a utility that converts map (.MAP) files to
symbol (.SYM) files for use by the Symbolic Debugger and the 80386 Debugger.
After installing Microsoft C, you must copy MAPSYM.EXE to your hard disk,
making sure that it is in a directory listed in your PATH environment.

To install the SDK, follow these steps:


  1.  Install Windows 3.0 (the retail operating environment) according to
      the instructions included with it.

  2.  Make backup copies of your SDK disks before installing the SDK.

  3.  Insert the Development Tools disk into drive A.

  4.  Type the following, then press ENTER:

      A:

  5.  Type the following, then press ENTER:

      INSTALL

  6.  Follow the online instructions to complete the installation.

  7.  Follow the instructions in the README.TXT file.



2.2  Installing the Debugging Version of Windows

The Windows SDK provides two environments in which you can debug your
Windows application: a debugging version of the retail Windows product, and
a nondebugging version of the retail Windows product.

The debugging version of Windows consists of a set of dynamic-link libraries
(DLLs) that replace the Windows core dynamic-link libraries of the retail
product. These DLLs are:


  ■   KERNEL.EXE

  ■   KRNL286.EXE

  ■   KRNL386.EXE

  ■   USER.EXE

  ■   GDI.EXE


Accompanying these DLLs is a set of symbol (.SYM) files.

The debugging versions of the core DLLs provide error checking and
diagnostic messages that help you debug a Windows application. The
symbol-file information helps you track calls into Windows while using two
of the Windows debuggers, the Symbolic Debugger (SYMDEB) and the 80386
Debugger (WDEB386). In addition, the debugging versions of these DLLs
contain CodeView symbol information that helps you track calls into Windows
while using the CodeView for Windows (CVW) debugger.

During the development stages of your application, you should use the
debugging version of Windows. However, you should use the nondebugging
version of Windows in these two situations:


  ■   When you are testing the final version of your application

  ■   When you want to test the performance of your application without the
      performance penalties imposed by the debugging version of Windows


To use the nondebugging version of Windows, use the core DLLs supplied with
the retail version of Windows. The SDK also provides symbol files for the
nondebugging version of Windows. The retail Windows core libraries do not
contain symbol information for use by CVW, however.

The SDK installation program (INSTALL) creates two directories to contain
the debugging and nondebugging versions of the core DLLs. Unless you specify
different paths, INSTALL places the debugging versions of the Windows core
libraries in \WINDEV\DEBUG and the nondebugging versions in \WINDEV\NODEBUG.
INSTALL copies the nondebugging version of  the Windows core libraries from
your Windows system directory to the  \WINDEV\NODEBUG directory.

You can conveniently switch between the debugging and nodebugging Windows
environments by running one of two batch files that INSTALL places in the
Windows development directory (named \WINDEV by default). The N2D.BAT file
switches from the nondebugging to the debugging environment, and D2N.BAT
switches from the debugging to the nondebugging environment.

These batch files either copy files from your \WINDEV\DEBUG and
\WINDEV\NODEBUG directories or rename files in your Windows system
directory. When you install the SDK, INSTALL will ask if you want to keep a
duplicate set of the libraries and symbol files in your Windows system
directory. If you answer yes, N2D.BAT and D2N.BAT will be able to quickly
rename the duplicate files. Otherwise, the batch files will copy the DLLs to
your Windows system directory from the appropriate directory.

If you choose to retain a duplicate set of files, the DLLs and symbol files
for the two versions of Windows will appear in your Windows system directory
with the same names as the core libraries and symbol files, but with the
letter N (nondebugging) or D (debugging) appended to the name. For example,
in addition to KERNEL.EXE, your system directory will contain KERNELD.EXE
and  KERNELN.EXE.


2.3  The Windows C Run-Time Libraries

The SDK installation program installs special C run-time libraries that
contain run-time routines that are specially modified for use with Windows.
INSTALL can place the Windows libraries in the same directory as your
non-Windows libraries. Because the two sets of libraries use different
filename conventions, the Windows libraries do not overwrite your
non-Windows libraries. In fact,  INSTALL does not alter your non-Windows C
libraries in any way.

INSTALL builds different libraries depending on the memory model(s) and math
coprocessor(s) you specify. The libraries have names in the following form:


xLIBCyW.LIB

The x value can be one of the following:


  ■   S for small-model libraries

  ■   M for medium-model libraries

  ■   C for compact-model libraries

  ■   L for large-model libraries


The y value can be one of the following:


  ■   A for the alternate math coprocessor

  ■   E for math emulation


In addition to the regular libraries, you can optionally install special
libraries that contain routines for use by dynamic-link libraries (DLLs). If
you plan to write DLLs, you should install these libraries.

Libraries for use by DLLs have names in the following form:

xDLLCyW.LIB

The x and y values have the same meanings, listed previously, as they do for
regular libraries.

After you have installed the SDK, you can install additional C run-time
libraries simply by running INSTALL with the -L option. This allows you to
install only C run-time libraries without reinstalling the entire SDK.


2.4  The Windows and C Run-Time Header Files

The SDK includes special Windows C header files. Some of these header files,
such as WINDOWS.H, are specific to Windows. Others, such as STRINGS.H, are
special Windows-compatible versions of the standard header file. There is
only one difference between these Windows header files and the non-Windows
header files with the same names: the Windows versions contain #ifdef
directives that hide function prototypes for functions that are not
compatible with Windows.

In general, it's a good idea to install the Windows header files in a
different directory than the one that contains your non-Windows header
files. If you choose to install the Windows C header files in the same
directory as your non-Windows header files, the Windows header files will
overwrite any non-Windows files with the same name. This will not affect
your non-Windows  application development, except that the Windows header
files might run through the preprocessor slightly more slowly than their
non-Windows  counterparts.


2.5  Updating Your CONFIG.SYS and AUTOEXEC.BAT Files

Once the installation is complete, you need to update your CONFIG.SYS and
AUTOEXEC.BAT files. Follow these steps:


  1.  In your AUTOEXEC.BAT file, update your PATH, LIB, and INCLUDE
      environment variables as described at the end of the README.TXT file.
      (INSTALL customizes this file according to the directories you
      specified during installation and puts it in your Windows Development
      Tools directory.)

  2.  When you installed Windows, your CONFIG.SYS file should have been
      updated to contain the correct settings for files and buffers. If not,
      add the following statements to your CONFIG.SYS file:

      files=30
      buffers=20

      If you're using SMARTDrive, you may want to set buffers = 10. With
      SMARTDrive in use, setting buffers = 20 uses memory without increasing
      your system's speed.

  3.  Restart your computer.








Chapter 3  Setting Up Your Windows Development Environment
────────────────────────────────────────────────────────────────────────────

This chapter explains how to configure your computer, and Microsoft Windows
3.0, to provide the best possible performance when creating Windows
applications.

This chapter is divided into two major parts. The first part consists of
suggestions for setting up Windows as an environment for developing Windows
applications. It discusses three topics:


  ■   Configuring Windows to improve the performance of software development
      tools

  ■   Setting WIN.INI entries to allow you to associate file extensions with
      software development tools when using File Manager

  ■   Setting up program information files (PIFs) for MAKE, NMAKE,
      Programmer's WorkBench (PWB), and other development tools


The second part describes settings for your WIN.INI and SYSTEM.INI
initialization files. You use these settings to configure Windows to enable
certain debugging features.


3.1  Configuring Windows as a Development Environment

You can use Windows as your primary application-development environment.
Windows allows you to switch quickly among applications, even non-Windows
applications. As a result, in Windows you can write the code for your
application, create its resources (such as dialog boxes), compile and link
the application, and debug and test it, all in the same Windows session.
This section provides suggestions for how to optimize the Windows
environment for this purpose.


3.1.1  Optimizing Windows as a Development Environment

Because Windows allows you to switch between tasks quickly and easily,
developers often find it most convenient to edit their source code and to
compile and link it in Windows. Although Windows provides non-Windows
applications,

 such as the compiler and linker, with somewhat less memory than would be
available directly in DOS, this is rarely a problem unless the application
being developed is exceptionally large. In return for this slight memory
penalty, however, Windows provides a convenient "one-stop" environment for
developing your application.

For example, you could run PWB in DOS and then run Windows from PWB to test
and debug your application. However, it usually takes considerably longer
for PWB to swap itself out and then load Windows than it does to switch to
and from PWB (using ALT+TAB) in Windows.


Choosing a Windows Mode

The standard and 386 enhanced modes of Windows each offer specific
advantages and disadvantages. Which mode you run Windows in will depend on
which of these are most important to you:


  ■   Speed─Non-Windows applications that frequently read from and write to
      the hard disk run slower in 386 enhanced mode than in standard mode.
      Because of this, compiling and linking is faster in standard mode.

  ■   Background processing─Non-Windows applications can run in the
      background in 386 enhanced mode, but not in standard mode. In 386
      enhanced mode, you can compile and link your applications in the
      background while working with other applications. Also, in 386
      enhanced mode, you can run the compiler and linker in a window, if you
      choose; in standard mode, all non-Windows programs run full-screen.



Optimizing Disk Access

Disk-access time is often one of the most important factors affecting how
long it takes to compile and link an application. Depending on your system
configuration and the mode in which you run Windows, using SMARTDrive and
RAMDrive can significantly improve disk-access time.

SMARTDrive caches frequently used disk blocks, permitting these blocks to be
read from memory instead of from the disk. The Microsoft Windows User's
Guide explains how to set up SMARTDrive on your system.

RAMDrive establishes a disk drive in RAM which can be used to store
temporary files and development tools, reducing the time required to access
these files. See the User's Guide for instructions on how to set up RAMDrive
on your system.

To allow development tools to store temporary files in a RAM drive, set your
TEMP and TMP environment variables to the RAM drive by placing the following
lines in your AUTOEXEC.BAT file:

  SET TEMP = E:\
  SET TMP = E:\

You can also copy the executable files for the C Compiler, linker, and
Resource Compiler to the RAM drive to reduce the time it takes to load these
files into system memory.

The size of your RAM drive will determine the number and size of files you
will be able to put in the RAM drive, and the size of your RAM drive will
depend on the total amount of memory available in your system. Table 3.1
provides guidelines for setting up your system for running Windows in
standard and 386 enhanced modes. Note that in this table, "SMARTDrive size"
refers to the minimum cache size. You specify this size as the second
parameter to the SMARTDrive command line in CONFIG.SYS.

Table 3.1  Suggested System Configurations

╓┌───────────┌───────────────┌───────────────┌───────────────┌───────────────╖
Mega-bytes  SMARTDrive      RAMDrive Size   Set TMP to      Copy C
            Size                            RAMDrive?       Compiler to
                                                            RAMDrive?
────────────────────────────────────────────────────────────────────────────
1           0               0               No              No

2           0               0               No              No

3           512             512             No              No

4           1024            1024            No              No

5           1024            2048            Yes             No

6           1024            2048            Yes             Yes

7           1536            2560            Yes             Yes
Mega-bytes  SMARTDrive      RAMDrive Size   Set TMP to      Copy C
            Size                            RAMDrive?       Compiler to
                                                            RAMDrive?
7           1536            2560            Yes             Yes

8           2048            3072            Yes             Yes

9           2048            4096            Yes             Yes

10          3072            4096            Yes             Yes

11          4096            4096            Yes             Yes

12          4096            4096            Yes             Yes



╓┌───────────┌────────────────┌──────────────┌─────┌─────────────────────────╖
Mega-bytes  SMARTDrive Size  RAMDrive Size  Set

────────────────────────────────────────────────────────────────────────────
Mega-bytes  SMARTDrive Size  RAMDrive Size  Set

────────────────────────────────────────────────────────────────────────────
1           0                0              No    No
2           0                0              No    No
3           512              0              No    No
4           1024             0              No    No
5           1024             1024           Yes   No
6           1024             1024           Yes   Yes
7           1536             1536           Yes   Yes
8           2048             2048           Yes   Yes
9           2048             3072           Yes   Yes
10          3072             4096           Yes   Yes
11          4096             4096           Yes   Yes
12          4096             4096           Yes   Yes
────────────────────────────────────────────────────────────────────────────


Since there are many factors other than Windows mode and system memory that
affect the performance of such tools as the compiler and linker, you should
experiment with other settings to establish an environment that meets your
needs.

Once you have installed the SDK, you can compact your hard disk to improve
disk access times even more. By ensuring that executable and library files
are contiguous on disk, you will significantly reduce the time required by
your system to read these files, often by as much as 20 percent.


3.1.1  Associating File Extensions With Development Tools

You can make it easy to run development tools in Windows by associating the
tools with file extensions in your WIN.INI file. For example, a typical list
of WIN.INI settings might be:

  [Extensions]
  bmp=sdkpaint.exe ^.bmp
  cur=sdkpaint.exe ^.cur
  dlg=dialog.exe ^.dlg
  ico=sdkpaint.exe ^.ico
  mke=nmake.pif ^.mke
  res=dialog.exe ^.res

When you associate a file extension with an application in this manner, you
can run the application by selecting the appropriate filename in the File
Manager directory window. File Manager will start the application and pass
the filename you selected to the application.

Note that it is customary to name make files without an extension. However,
File Manager cannot associate an application with a filename that lacks an
extension. Because of this, if you want to be able to run MAKE or NMAKE by
selecting a filename, the name of the make file must include an extension.
In the preceding example, NMAKE is associated with files having the .MKE
extension.


3.1.2  Setting Up PIFs for Development Tools

You should set up PIFs for such development tools as MAKE (C version 5.1),
NMAKE (C version 6.0), and PWB (C version 6.0) to make it easier to run them
in Windows. Since these applications require an unusually large amount of
memory, you should set up PIFs to ensure that this memory will be available
to them when you run these tools.

One way to ensure that your development tools will have enough memory is to
modify the _DEFAULT.PIF file in your Windows directory, setting the KB
Required option to a minimum of 400K. This will ensure that all non-Windows
applications without their own PIFs will be given at least 400K in which to
run.

Although this is the easiest method, you probably won't want to give every
non-Windows application such a large minimum. Instead, you can set up a PIF
for each non-Windows development tool that is specifically tailored for its
own requirements.

For example, since PWB takes advantage of the mouse, you will probably find
it more convenient to run PWB full screen in 386 enhanced mode. However,
MAKE or NMAKE can run in a window to make it easier to switch to other
windows while it runs in the background.

The SDK includes the following PIFs:


  ■   MAKE.PIF

  ■   NMAKE.PIF

  ■   PWB.PIF


These PIFs have suggested settings that you can, of course, change if you
want. If you use other non-Windows development tools, you will probably want
to create PIFs for them as well.

────────────────────────────────────────────────────────────────────────────
NOTE

The C version 6.0 configuration files for PWB contain certain default
settings that are inappropriate for Windows applications. Be sure to review
PWBINFO.WRI in your Windows development directory (named \WINDEV by default)
for important suggestions before you use PWB for developing your Windows
application.
────────────────────────────────────────────────────────────────────────────


3.1.3  Testing and Debugging Your Application in Windows

One of the advantages of an environment such as Windows is its ability to
run more than one application at a time. However, this advantage can also
create dangers when you are testing and debugging your application.

Windows is a robust environment. When Windows is running in protected
(standard or 386 enhanced) mode, Windows can usually terminate an
application that encounters a fatal error (such as an invalid handle)
without affecting other applications. A fatal error or even a
general-protection fault in an application very rarely causes the entire
system to crash.

However, it is possible to crash the system in other ways when you are
testing and debugging an application. For example, the wka command in
CodeView for Windows (CVW) will terminate the application that has control
of the system when the command is issued. If you were inadvertently to issue
the wka command while Program Manager controlled the system, you would
terminate Windows itself.

Because of this risk, you should always be sure that all file buffers have
been saved to disk before testing and debugging your application. You should
also avoid running other applications while testing and debugging your
application if a general system failure would cause problems for the other
applications.


3.2  Initialization-File Entries

The disks of the retail version of Windows 3.0 contain several files which
describe the settings in the two main Windows initialization files, WIN.INI
and SYSTEM.INI. In addition to the settings described in these files, the
debugging version of Windows recognizes several additional settings. This
section lists these settings and explains their purpose in the debugging
version of Windows.


3.2.1  WIN.INI Settings

The [kernel] section of WIN.INI contains settings that help control how the
debugging version of Windows runs. The following summarizes the syntax of
each setting:

  EnableEMSDebug={0|1}
  EnableFreeChecking={0|1}
  EnableHeapChecking={0|1}
  EnableSegmentChecksum={0|1}
  FreezeGlobalMotion={0|1}
  LRUSweepFrequency=integer

The following sections describe each of these settings.


EnableEMSDebug

The EnableEMSDebug flag allows you to set breakpoints in discardable library
code while using the Symbolic Debugger (SYMDEB). To enable this option, set
the EnableEMSDebug flag to 1. The default is 0. Set this flag to 0 if you
are debugging your application using CodeView for Windows.


EnableFreeChecking

The EnableFreeChecking flag determines whether Windows initializes all free
global and local memory with the value CCh (binary 11001100).

When this flag is set to 0 (the default), Windows does not initialize
memory.

When this flag is set to 1, Windows initializes all free memory with CCh.
Whenever an application allocates free memory, Windows verifies that it
still contains CCh values. Windows reinitializes memory with CCh values when
an application frees the memory. When an application calls the GlobalAlloc
or LocalAlloc function, Windows checks the requested memory to ensure that
it contains only CCh values. Windows checks all free global or local memory
for the initialization values when an application calls the GlobalCompact or
LocalCompact function.

When this flag and the EnableHeapChecking flag are set to 1, an application
can also check the validity of all free memory by calling the
ValidateFreeSpaces function.


EnableHeapChecking

The EnableHeapChecking flag determines whether Windows verifies that local
and global heaps are properly linked and that handles point to appropriate
objects. When this flag is set to 0 (the default), Windows does not check
the local and global heaps. When this flag is set to 1, Windows checks the
local heap when an application makes local-memory function calls and checks
the global heap when an application makes global-memory function calls.

When this flag and the EnableFreeChecking flag are set to 1, an application
can check the validity of all free memory by calling the ValidateFreeSpaces
function.


EnableSegmentChecksum

The EnableSegmentChecksum flag determines whether Windows checks the
integrity of code segments. When this flag is set to 0, Windows does not
check code segments. You should set this flag to 0 when debugging so an INT3
will not be be flagged as a modification to the segment.

When this flag is set to 1 (the default) and a code segment is moved or
discarded, Windows verifies that the code segment has not been altered by
random memory overwrites.

When this flag is set to 1, an application can call the ValidateCodeSegments
function to force Windows to check all code segments when the function is
called.


FreezeGlobalMotion

The FreezeGlobalMotion flag specifies whether Windows should move segments
in memory. When this flag is set to 0 (the default), Windows allows movement
of segments. When set to 1, Windows prevents segment movement.


LRUSweepFrequency

The LRUSweepFrequency setting specifies the rate in milliseconds at which
Windows updates the least-recently-used (LRU) table. The default setting is
250.

If this value is set to 0 (the only useful setting for debugging purposes),
the LRU table is never updated. This ensures that Windows will discard code
segments in the order in which they were loaded, rather than in LRU order.
This allows you to re-create a predictable memory environment for testing
purposes.


3.2.1  SYSTEM.INI Setting

The [386Enh] section of SYSTEM.INI contains information used by Windows in
386 enhanced mode. In addition to the settings documented for the retail
version of Windows, an additional setting is available in the [386Enh]
section for the debugging version of Windows. The following is the syntax of
this setting:

  DebugPhysAddrs = {TRUE|FALSE}

By default, Windows makes the entire base physical linear memory region
available when a debugger is loaded. Setting the DebugPhysAddr option to
FALSE overrides this default behavior when the debugger is loaded. Although
this prevents you from being able to examine all memory, setting this option
to FALSE creates a memory environment more like the nondebugging version of
Windows and can help you spot problems with pointers more quickly. The
default value for DebugPhysAddr is TRUE.





Chapter 4  What's New for Windows Version 3.0?
────────────────────────────────────────────────────────────────────────────

This chapter describes the enhancements and changes to the Microsoft Windows
Software Development Kit (SDK) for version 3.0, and explains how these
changes affect existing Windows applications. It covers the following
topics:


  ■   Changes to the Windows environment

  ■   Changes to the SDK

  ■   Revising existing Windows applications to run with Windows 3.0




4.1  Overview of New Features

Windows 3.0 and version 3.0 of the SDK provide many enhancements and added
features. This section summarizes the major changes to the Windows
environment and to the SDK.


Changes to the Windows Environment

Windows 3.0 offers a greatly improved user interface and a major advance in
memory management. These are the major changes:


  ■   Windows now features a new user shell consisting of two facilities
      that make it easier to run applications and manage files.

  ■   Windows provides a standard Help facility which can be invoked by any
      Windows application.

  ■   When running in standard mode or 386 enhanced mode, Windows uses the
      protected-mode capability of the 80286, 80386, and 80486
      microprocessors. This gives applications direct access to 16 megabytes
      of extended memory.

  ■   When running in 386 enhanced mode, Windows can provide up to 64
      megabytes of virtual memory by swapping memory pages to and from disk.

  ■   Windows manages the system's color palette so that applications can
      take full advantage of the color capabilities of a device.

  ■   Windows provides a proportional system font, and supports fonts larger
      than 64K.

  ■   Windows provides device-independent color bitmaps.

  ■   Windows provides device-independent icons and cursors by automatically
      selecting the appropriate device-specific image from a set of images
      the application provides.

  ■   Several changes have been made to the application user interface,
      including the addition of new dialog box controls, new menu types, and
      a more attractive system font.

  ■   Several changes and enhancements have been made to the way Windows
      handles dynamic-link libraries (DLLs). For example, DLLs can now load
      resources just as applications do.

  ■   Network support has been improved.

  ■   Printer drivers have been improved, and several new drivers have been
      added. One significant change is that many printer drivers now allow
      applications to customize the printer settings for their own use,
      without affecting the current (default) printer settings.


For more about these changes, see Section 4.2, "Changes to the Windows
Environment."


Changes to the Windows Software Development Kit

The Windows SDK version 3.0 offers the following enhancements:


  ■   The installation procedure is more convenient.

  ■   Windows C run-time libraries have been improved.

  ■   Language tools have been consolidated.

  ■   There are several new tools: a color icon/cursor/bitmap editor, a CPU
      profiler, a segment swapping reporter, and a Help compiler.

  ■   Enhancements have been made to existing tools, including the Dialog
      Editor, the Font Editor, the Resource Compiler, CodeView for Windows,
      and the Heap Walker.

  ■   The application programming interface (API) has been expanded,
      including support for device-independent color bitmaps, color palette
      management, MDI (multiple document interface) applications, and
      several new types of controls and menus.

  ■   There are new sample applications, and improvements to existing sample
      applications.

  ■   The clipboard supports objects larger than 64K.

  ■   The documentation has been improved and includes new material on
      advanced programming techniques.

  ■   On-line reference documentation (SDKWIN.HLP and SDKADV.HLP) has been
      added.


For details on these changes, see Section 4.3, "Changes to the Windows
Software Development Kit."


4.2  Changes to the Windows Environment

The Windows environment has undergone many changes for Windows version 3.0.
Some changes, such as Windows' improved user interface, benefit applications
without requiring changes to those applications. However, to take advantage
of other enhancements, such as color icons or new types of controls, you
will need to change your application.

This section explains changes to the Windows environment that affect Windows
applications.


4.2.1  New User Shell

The Windows 3.0 shell consists of Program Manager (PROGMAN.EXE) and File
Manager (WINFILE.EXE). Together, these replace the MS-DOS Executive
(MSDOS.EXE) of previous versions of Windows.

File Manager displays graphical representations of directory trees and
directory listings in child windows and features a mouse-oriented interface
for copying and moving files and directory subtrees. The user can also run
an application by choosing the filename of the application or an associated
data file in a File Manager directory window.

Program Manager groups icons in child windows, making it easy for the user
to organize applications and documents without changing the organization of
the file system. The user can run an application simply by choosing the icon
of the application or data file.

By using the Windows Dynamic Data Exchange (DDE) protocol, your application
can add group items and add or remove groups from Program Manager. For more
information on the DDE interface to Program Manager, see Chapter 22 of Guide
to Programming.


4.2.2  New Standard Help Facility

Windows 3.0 contains a Help application (WINHELP.EXE) that provides a
standard Help facility available to all Windows applications. The Help
application gives the user access to Help information via a hierarchical
index, a key-word search, look-up "definition" windows, and hypertext-like
jumps. It also supports context-sensitive Help, bookmarks, annotations, and
sequential browsing. For more information about taking advantage of the
Windows Help application, see Section 4.3.4, "New Tools."


4.2.3  Improved Memory Management

Windows 3.0 manages memory differently than do previous versions of Windows.
The most important change is that Windows 3.0 uses the protected-mode
capability of the 80286, 80386, and 80486 processors.

Windows 3.0 runs in one of three operating modes: real mode, standard mode
or 386 enhanced mode. Normally, when you start Windows, it selects an
operating mode based on your system configuration and how much memory is
available. (You can use the Windows command-line options to start Windows in
a specific mode. See the Windows User's Guide for more information about
Windows command-line options.)

With less than 1 megabyte of memory, Windows runs in real mode, and does not
use the protected-mode capabilities (if any) of the system's processor.
Because real-mode Windows manages memory using a method similar to that used
by previous versions of Windows, most version 2.x applications can run
successfully in real mode.

With an 80286 processor and at least 1 megabyte of memory, or with an 80386
or 80486 processor and 1-2 megabytes of memory, Windows normally runs in
standard mode. In standard mode, Windows uses the protected-mode capability
of the processor.

With an 80386 or 80486 processor and at least 2 megabytes of memory, Windows
normally runs in 386 enhanced mode. In 386 enhanced mode, Windows uses the
protected-mode capability of the processor, and provides  up to 16 megabytes
of virtual memory by paging memory to and from the hard disk. Windows
applications can use this virtual memory just as if it were normal physical
memory. For a detailed explanation of how Windows 3.0 manages memory, see
Chapter 16 of Guide to Programming.

────────────────────────────────────────────────────────────────────────────
NOTE

Hereafter, this chapter will use the term "protected mode" to refer to both
standard mode and 386 enhanced mode, since both Windows operating modes use
the protected-mode capability of the system's processor.
────────────────────────────────────────────────────────────────────────────

Because of the way Windows 3.0 manages memory, applications must be
"well-behaved." Chapter 16 of Guide to Programming explains the rules an
application must follow in order to run successfully under Windows 3.0. If
you fail to follow these memory-management guidelines, your application will
terminate with a general-protection fault when running with Windows in
protected mode.


4.2.4  Color Palette Manager

Many color graphics displays are capable of displaying a wide range of
colors. However, because of hardware limitations, often such devices can
actually display a more limited number of colors at a time. Because of this,
running more than one color-intensive application can result in conflicting
color requests and problems in displaying the correct colors.

Windows 3.0 can provide optimum colors for each application by mediating
between applications that use Windows color palettes. Windows makes sure
that the active window gets the colors it asks for; it also ensures that
other windows get colors as close as possible to the ones they request.

The SDK version 3.0 includes a full set of functions your application can
use to create and manipulate color palettes and palette entries. To use
Windows color palettes, an application defines its own set of colors and
requests the colors it wants.

The application first creates a palette of colors; when drawing on the
display, the application selects colors from the palette. When an
application's window has the input focus, Windows displays the colors in
that window's palette (up to the maximum possible for the display device).
If the palette uses more colors than the display supports, Windows matches
the additional colors as closely as possible to colors that are already
available.

Although Windows' first priority is the colors in the active window, it does
manage the appearance of background windows' colors as well. Windows
displays background windows' colors as accurately as possible by matching
their color requests to the closest colors in the active window's palette.


4.2.5  Font Improvements

Windows 3.0 provides a proportional system font. All version 3.0
applications  automatically use this font unless they specifically request a
different font. Version 2.x applications can also use the new proportional
font when running with Windows 3.0. In order to use the new font, the 2.x
application must be marked as able to accommodate it. See Section 4.4,
"Revising 2.x Applications for Windows 3.0," for more information about
using the new font.

Windows 3.0 will now allow applications to use fonts that are larger than
64K, in addition to Windows 2.x fonts.

Windows 3.0 supplies several new fonts in addition to the fonts provided
with previous versions:


  ■   A set of fonts for 8514/a-resolution (1024-by-758) displays. These
      fonts include Courier, Helv, and Tms Rmn.

  ■   A math-symbol font for all display resolutions. The character set of
      this font matches the PostScript Symbol font set.



4.2.6  Device-Independent Bitmaps

Devices differ in the way they handle color bitmaps. On a monochrome device,
the correspondence between screen pixels and memory bits is usually
one-to-one: one bit in memory corresponds to one pixel on the screen. For
color displays, however, the number and organization of bits that represent
each pixel depends on the color capabilities and format of the display
device.

Windows 3.0 provides a set of functions that define and manipulate
deviceindependent color bitmaps (DIBs). Your application can use these
functions to display DIBs on any device, regardless of how the device
represents color internally. The functions translate a device-independent
bitmap specification into the device-specific format used by the current
device.

────────────────────────────────────────────────────────────────────────────
NOTE

Windows 3.0 no longer supports 3-plane bitmaps or display drivers. To use
version 2.x bitmaps with Windows 3.0, you must first convert them to the new
3.0 DIB format. To convert 2.x color bitmaps, use the CONVBMP utility. To
convert monochrome bitmaps, you can use either CONVBMP or the SDKPaint tool.
Section 4.4, "Revising 2.x Applications for Windows 3.0," explains how to
convert 2.x bitmaps to the 3.0 format.
────────────────────────────────────────────────────────────────────────────


4.2.7  Device-Independent Icons and Cursors

Windows 3.0 uses new icon and cursor formats. The new formats provide
device-independent color for icons, as well as functional
device-independence with respect to resolution for both icons and cursors.

A version 3.0 icon is actually a set of device-independent color images.
Each image is tailored to look good on a particular display resolution. For
example, a typical icon consists of two images: a 16-by-32-pixel image
designed for CGA display devices, and a 32-by-32 image that works on EGA,
VGA, and 8514/a display devices. When the application displays the icon, it
simply refers to the icon by name; Windows automatically selects the icon
image best suited to the current display device.

Version 3.0 cursors are similar to icons, except that their images are made
up of opaque and transparent pixels. The opaque pixels can be either black
or white. Like an icon, a cursor is actually a set of images, each tailored
for a different display resolution. Windows selects the appropriate cursor
image for the current display device.

You create icons and cursors using the SDKPaint image editor. When creating
an icon or cursor, you design one or more images and specify the display
resolution on which each image looks best. You can provide as many different
images as you want for each icon or cursor.

────────────────────────────────────────────────────────────────────────────
NOTE

Version 2.x cursors and icons are not compatible with Windows 3.0. To use
version 2.x icons and cursors with Windows 3.0, you must first convert them
to the new 3.0 format using SDKPaint. Section 4.4, "Revising 2.x
Applications for Windows 3.0," explains how to convert 2.x icons and cursors
to the 3.0 format.
────────────────────────────────────────────────────────────────────────────


4.2.8  Changes to the Application User Interface

Version 3.0 includes many refinements to the application user interface.
Applications can take advantage of several of these enhancements, including
new dialog controls and new menu types.


Dialog Boxes

Dialog boxes and controls have undergone the following enhancements:


  ■   There is a new control called a "combo box." A combo box is
      essentially a combination of a single-line edit field (or static text)
      and a list box; the user can enter something into the edit box, or can
      scroll through the list box and select an item, which then appears in
      the edit box. There are several different styles of combo boxes.

  ■   List-box controls and edit controls now support the use of tab
      characters for spacing and formatting text in columns. This is useful
      when dealing with the proportional system font; using spaces to format
      text can result in misaligned columns when working with a proportional
      font.

  ■   An application can select any font for list boxes, combo boxes,
      buttons, static text, and edit controls. (Previous versions of Windows
      allowed only the system font in dialog controls.)



New Owner-Draw Controls

Windows 3.0 supports a new type of control, called an "owner-draw control,"
that lets your application determine exactly how its controls appear. For
example, an owner-draw list box could combine text and graphics on each line
in the box.

The SDK version 3.0 includes support for owner-draw combo boxes, menu items,
list boxes, and buttons. There are several new APIs that your application
can use to work with owner-draw controls. Also, the Dialog Editor lets you
add owner-draw controls to dialog boxes.


Menu Enhancements

Version 3.0 includes the following changes to menus:


  ■   You can now provide "cascading menus" by arranging menu items
      hierarchically ─ that is, by associating a child menu with a
      particular menu item. When the user points to a cascading menu item,
      the child menu appears to the right of that menu item; the user can
      then choose an option from the child menu.

  ■   Pop-up menus can now appear anywhere on the screen. While most pop-up
      menus will probably continue to be "pull-down" menus associated with a
      menu bar, an application can now provide "floating" pop-up menus that
      appear in other locations on the screen (for example, at the current
      cursor location).

  ■   Your application can now define its own special symbols to use as menu
      checkmarks.



4.2.9  Changes to Dynamic-Link Libraries

Version 3.0 includes the following changes and enhancements to the way
Windows handles dynamic-link libraries (DLLs):


  ■   The Resoure Compiler (RC) must be run on every version 3.0 DLL, even
      if the DLL has no resources. This is necessary because the Resource
      Compiler provides a version stamp that identifies the DLL as a version
      3.0 DLL.

  ■   Version 3.0 DLLs must have the .DLL filename extension; this prevents
      the user from confusing an application (.EXE) file with a library
      (.DLL) file.

  ■   Windows now provides a standard DLL entry point routine, LIBENTRY.OBJ.
      This means you no longer have to write each DLL's entry point routine
      in assembly language.

  ■   Version 3.0 DLLs must include a routine named named WEP (Windows  Exit
      Procedure), even if all the routine does is return. The routine must
      be exported, and should be exported by name only (not by ordinal).

      Before terminating a DLL, Windows calls the library's WEP routine.
      This gives the library the opportunity to clean up data files, free up
      memory, or perform other appropriate actions before Windows terminates
      it.

  ■   You can now specify a DLL as private by using the Resource Compiler's
      -P option. The -P option creates a private dynamic-link library (DLL)
      that is called by only one application. This allows Windows to use
      memory better, since only one application (or multiple instances of
      the same application) will be calling into the DLL. For example, in
      the large-frame EMS memory model, the DLL is loaded above the EMS bank
      line, freeing memory below the bank line.

  ■   DLLs can now load resources just as applications do, using standard
      resource-loading mechanisms.

  ■   Window classes created by a DLL are now destroyed when the library is
      terminated.



4.2.10  Network Support

New Windows 3.0 features make it significantly easier for the user to access
network resources. The following lists the most important of these features:



  ■   Windows File Manager allows users to add and delete network drive
      connections.

  ■   Control Panel allows users to add and delete network printer
      connections.

  ■   Windows Print Manager (formerly known as Spooler) recognizes both
      local and network printers. Print Manager uses the network driver to
      control network printers and to display the contents and status of
      network print queues.

  ■   Control Panel can display a network-specific dialog box to access
      additional features that the network supports.

  ■   Multiple users can run a single copy of Windows over a network on
      different workstation hardware configurations. This is possible
      because Windows 3.0 device drivers and fonts are no longer bound into
      the Windows binary files.



4.3  Changes to the Windows Software Development Kit

This section explains changes to the SDK tools and the application
programming interface (API).


4.3.1  Improved Installation

The INSTALL program for the SDK version 3.0 has undergone the following
improvements:


  ■   INSTALL's user interface has been improved.

  ■   You no longer have to install the DOS version of the C run-time
      libraries before installing the SDK.

  ■   You no longer have to create a set of disks for the debugging version
      of Windows. You can switch between the debugging and nondebugging
      versions of Windows simply by copying or renaming files. See Chapter
      2, "Installing the SDK Software," for more information on how to
      switch between the debugging and nondebugging versions of Windows.

  ■   The INSTALL program now lets you choose to install only the Windows C
      libraries, rather than installing all SDK software. This means that
      you can start out by installing Windows libraries for one memory
      model, and add the libraries for other memory models later.

      To install only the C libraries, start INSTALL by typing the
      following:

      INSTALL -L



4.3.2  Windows C Run-Time Libraries

The Windows versions of the C run-time libraries have undergone the
following changes:


  ■   The SDK now includes two sets of libraries: one for calls from
      applications, and one for calls from DLLs. The two sets are
      distinguished by their filenames, as explained in the following
      section.

      The Windows 3.0 SDK introduces some new library naming conventions
      that are consistent with those currently in use for DOS libraries and
      OS/2 libraries.

  ■   The model-dependent Windows import libraries have been replaced by a
      single, model-independent Windows import library named LIBW.LIB.

  ■   Windows prologs and epilogs have been added to all C run-time routines
      that require them. This prevents problems associated with code segment
      movements in low memory situations.

  ■   Many (but not all) Windows C run-time routines have been rewritten to
      avoid the assumption that DS equals SS, which is untrue for Windows
      dynamic-link libraries.

  ■   The Windows 3.0 C run-time libraries include only routines that are
      usable in the Windows environment. This prevents you from accidentally
      linking to C run-time routines that do not work in the Windows
      environment.

  ■   The Windows 3.0 SDK includes Windows versions of the C run-time header
      files.

  ■   NULL is defined differently in WINDOWS.H and library header files.

  ■   The SDK now includes libraries containing start-up code for
      applications or DLLs that do not call any C run-time routines.




New Library Naming Conventions

The Windows 3.0 SDK uses the following conventions for naming the Windows C
run-time libraries:


  ■   Libraries for use by applications have names in the form xLIBCyW.LIB,
      in which x indicates the memory model (S, M, C, or L for small,
      medium, compact or large, respectively) and y indicates the math model
      (E for emulated math or A for alternate math). For example, the
      small-model, math-emulator C run-time library for Windows applications
      is named SLIBCEW.LIB.

  ■   Libraries for use by DLLs have names in the form xDLLCyW.LIB, in which
      x and y indicate the memory and math models (as explained in the
      previous item). For example, the medium-model, alternate-math C
      run-time library for Windows DLLs is named MDLLCAW.LIB.


Previous versions of the Windows SDK let you choose from two library naming
conventions: xLIBCyW.LIB or xLIBCy.LIB. The SDK 3.0 uses only the convention
xLIBCyW.LIB. If you want, you can continue to use the naming convention
xLIBCy.LIB for libraries that will be called by applications; to do so, just
rename the libraries after installing them.

────────────────────────────────────────────────────────────────────────────
NOTE

Because of the changes to library names, you need to change the LINK command
line in your make files. See the following section for information on
changing your LINK command line.
────────────────────────────────────────────────────────────────────────────


The Model-Independent Windows Import Library

The Windows 3.0 SDK provides a single, model-independent Windows import
library named LIBW.LIB. This library replaces the model-dependent libraries
(named SLIBW.LIB, MLIBW.LIB, CLIBW.LIB and LLIBW.LIB) that were included
with previous versions of the SDK.

The old Windows import libraries included model-dependent Windows start-up
code and replacement routines for certain C run-time functions (for example,
the malloc routine). In the Windows 3.0 SDK, all model-dependent routines
and all C run-time functions have been moved from the Windows import library
to the model-dependent C run-time libraries. Because of this, there is now
only a model-independent Windows import library, LIBW.LIB.

The introduction of the model-independent LIBW.LIB means that you must
change the LINK command line in your application make files. For example, if
your LINK command line was the following:

  LINK GENERIC, , , /NOD SLIBCEW SLIBW, GENERIC.DEF

then you should change it to the following:

  LINK GENERIC, , , /NOD SLIBCEW LIBW, GENERIC.DEF


Run-Time Libraries for DLLs

Previous versions of the Windows SDK offered an alternative set of libraries
for linking Windows dynamic-link libraries (DLLs). These libraries were
named according to the convention xWINLIBC.LIB. These libraries included
start-up code for DLLs, but did not include any C run-time routines.

The Windows 3.0 SDK provides a new set of C run-time libraries for use with
DLLs. These libraries, which are for use only by DLLs, provide DLL start-up
code, and include all the C run-time routines that Windows DLLs can use.

The new DLL run-time libraries have names in the form xDLLCyW.LIB, in which
x indicates the memory model (S, M, C, or L for small, medium, compact or
large) and y indicates the math model (E for emulated math or A for
alternate math). For example, the small-model, math-emulator C run-time
library for Windows DLLs is named SDLLCEW.LIB.

The introduction of new libraries for DLLs means that you must change the
LINK command line in your DLL's make file. For example, if your LINK command
line was the following:

  LINK MYDLL, MYDLL.DLL, , /NOD /NOE SWINLIBC SLIBW, MYDLL.DEF

then you should change it to the following:

  LINK MYDLL, MYDLL.DLL, , /NOD /NOE SDLLCEW LIBW, MYDLL.DEF

You could also change the command line to the following:

  LINK MYDLL, MYDLL.DLL, , /NOD /NOE SDLLCAW LIBW, MYDLL.DEF


Windows Versions of C Run-Time Header Files

The version 3.0 SDK includes new Windows-specific versions of the C run-time
header files. These will be installed in the same directory as the WINDOWS.H
file.

These Windows-specific header files help you to detect, when you compile
your application's C source files, whether you have called any C run-time
routines that are not supported in the Windows 3.0 environment.

To use the Windows-specific header files, add the #define _WINDOWS directive
before the #include directives for the C run-time header files, as shown in
the following example:

  #define _WINDOWS
   .
   .
   .
  #include "stdio.h"
  #include "strings.h"

Alternatively, you can specify the _WINDOWS flag on your CL command line, as
shown in the following sample CL command line:

  CL -c -AS -Gsw -Oas -Zpe -D_WINDOWS MYAPP

The set of C run-time routines that support calling from Windows DLLs is a
subset of the routines that support calling from Windows applications. The
Windows-specific header files identify this subset. To take advantage of
this feature, add the #define _WINDOWS and #define _WINDLL directives before
the #include directives for the C run-time header files, as shown in the
following example:

  #define _WINDOWS
  #define _WINDLL
   .
   .
   .
  #include "stddef.h"
  #include "strings.h"
   .
   .
   .


The NULL Constant

The symbolic constant NULL has different definitions for Windows and the
Microsoft C Compiler version 6.0. The WINDOWS.H header file defines NULL as
follows:

  #define NULL 0

C version 6.0 library header files, such as STDDEF.H, define NULL as
follows:

  #ifndef NULL
  #define NULL ((void *)0)
  #endif

To avoid compiler warnings, you should use NULL only for pointers, such as
the parameters of type LPSTR in Windows functions. You should not use NULL
for variables you declare as primary data types, such as int, WORD, HANDLE,
and so on.

You can also avoid such compiler warnings by making sure your application
includes WINDOWS.H before any header file from the C run-time library that
defines NULL. For example, the following code includes WINDOWS.H before the
C run-time library header file STDDEF.H:

  #include "windows.h"
  #include "stddef.h"

Because header files in the C run-time library do not define NULL if it has
already been defined, the preprocessor does not override the initial
definition in WINDOWS.H.


Start-up Code Libraries

Normally when you link a Windows application or DLL, the linker adds C
run-time start-up code to the _TEXT code segment. For Windows applications
(but not DLLs), this start-up code in turn allocates memory for C run-time
variables from the application's automatic data segment.

The Windows 3.0 SDK allows you to eliminate this code and data overhead
required by the C run-time libraries. You can eliminate this overhead if all
of the following conditions are true:


  ■   Your application or DLL does not explicitly call any C run-time
      routines.

  ■   Your application does not use the _argc or _argv command-line
      arguments or the _environ variable. (DLLs cannot use _argc, _argv, and
      _environ.)

  ■   Your application or DLL does not implicitly call any C run-time
      routines, such as those that perform stack checking or long division.
      Stack checking is enabled by default, but you can disable it by using
      the C Compiler -Gs option.


If your application or DLL meets these requirements, you can reduce or
eliminate C run-time start-up code from the application or DLL module by
linking to the appropriate library. The library for applications is
xNOCRT.LIB (x is a placeholder for the memory-model specifier), and the
library for DLLs is xNOCRTD.LIB. See Chapter 14 in Guide to Programming, for
more information on using these libraries.


4.3.3  Consolidation of Language Tools

The SDK version 3.0 no longer includes or requires SDK-specific versions of
the following language tools:


  ■   LINK4

      The SDK no longer includes a special version of the linker (LINK4).
      You now link Windows applications using LINK, the linker that comes
      with Microsoft C version 5.1 or 6.0.

  ■   EXEHDR

      The SDK no longer includes the EXEHDR utility. Use the version of
      EXEHDR that accompanies Microsoft C version 5.1 or 6.0.

  ■   LIB and IMPLIB

      The SDK no longer includes the LIB and IMPLIB utilities. Use the
      versions of these tools that came with Microsoft C version 5.1 or 6.0.


  ■   MAKE

      The SDK no longer includes the MAKE utility. You can use either MAKE
      or NMAKE to compile and link Windows applications. MAKE comes with
      Microsoft C version 5.1; NMAKE is included with Microsoft C version
      6.0. To use existing make files with NMAKE, you will probably need to
      make a few small modifications to your make files. For more
      information on updating make files for use with NMAKE, see "Updating
      Your Make Files" in Section 4.4.3.



4.3.4  New Tools

The SDK version 3.0 includes several new software development and testing
tools. The following sections briefly describe each new tool. For details on
the tools that come with the SDK, see Tools.


SDKPaint

A new icon, cursor and bitmap editor, SDKPaint, replaces the IconEdit
application included with version 2.1. SDKPaint lets you create
device-independent icons, cursors, and bitmaps. You can now create color
icons and bitmaps. SDKPaint provides convenient drawing tools as well as
Copy and Paste commands.

You can use SDKPaint to upgrade your version 2.1 icons, cursors and
monochrome bitmaps. (To convert version 2.x color bitmaps, use the CONVBMP
utility.) For more information on converting 2.x icons, cursors and bitmaps,
see Section 4.4, "Revising 2.x Applications for Windows 3.0."


Profiler

The new Profiler tool shows you how much time, on average, is spent
executing each routine in your application. This lets you fine-tune your
application's performance. The SDK includes two versions of Profiler: one
for tuning your application's performance in real mode and one for tuning
its performance in 386 enhanced mode.


Swap

A special version of the Windows kernel, SKERNEL, produces a temporary file
that contains information about your application's segment-swapping
behavior. The SDK includes a special utility, Swap, which reads this
temporary file and reports every code or data segment that your application
swaps in or out of memory. This is useful for balancing segments.


WDEB386

Microsoft Windows 80386 Debugger (WDEB386) is used to test and debug Windows
applications and dynamic-link libraries (DLLs) running in standard or 386
enhanced mode, but not in real mode. The debugger provides commands that
allow the operator to inspect and manipulate test code and environment
status, install breakpoints, and perform other debugging operations.

WDEB386 offers debugging features not available in CodeView for Windows
(CVW), but lacks the the convenient character-oriented window interface of
CVW.


Help Tools

Version 3.0 includes a set of tools designed to make it easier to provide
Help for Windows applications. The Help tools consist of the following:

Help Tool                               Description
────────────────────────────────────────────────────────────────────────────
Windows Help application                The Windows Help application is
                                        part of the Windows 3.0 retail
                                        package. When a user asks for help
                                        in an application, that
                                        application can call Windows Help
                                        and pass it the name of the help
                                        file and a number that identifies
                                        the user's current context. The
                                        Help application then takes care
                                        of displaying the help and
                                        processing the user's requests
                                        while in the Help system (for
                                        example, displaying the next
                                        screen of Help, the Help index, or
                                        the previous topic).

Help Compiler (HC)                      The SDK includes the Help Compiler
                                        (HC) which compiles Help source
                                        files into a single file. The
                                        compiler also inserts any bitmap
                                        graphics, inserts pointers to
                                        different topics, and compresses
                                        the Help file.


4.3.5  Changes to Existing Tools

The Windows 3.0 SDK also includes significant enhancements to existing
software development tools. The following sections summarize the changes to
each tool.


Dialog Editor

The Dialog Editor (DIALOG) has undergone the following changes:


  ■   The Dialog Editor now supports custom controls. You can provide your
      own controls by writing routines that define those controls, and then
      placing these routines in dynamic-link libraries (DLLs). The Dialog
      Editor uses this information to display your custom controls in dialog
      boxes. (For information on the interface between the Dialog Editor and
      the custom-control DLLs, see Chapter 20 in Guide to Programming.)

  ■   You can now select standard controls from a palette as well as from
      the Controls menu.

  ■   The Dialog Editor's support for header files has been improved. When
      you add a control to a dialog box, you can at the same time add a new
      #define name and value to the associated header file.

  ■   The Dialog Editor provides support for the new combo-box and
      owner-draw controls.

  ■   The Dialog Editor lets you select a specific font for the dialog box.



Font Editor

The Font Editor (FONTEDIT) File Open, File Save, Fill, Row Add, Row Delete,
Column Add, and Column Delete commands are easier to use, and provide better
visual feedback while you're using them.


Resource Compiler

The Resource Compiler (RC) has undergone the following changes:


  ■   There are new resource script commands to support combo box controls,
      hierarchical menus, floating pop-up menus, and definable menu
      checkmarks.

  ■   The #include directive recognizes C header files according to the
      extensions .C and .H, and assumes all files with other extensions
      contain only resource scripts.

  ■   RC terminates after the first fatal error it encounters in the
      resource script, instead of generating a series of repercussive error
      messages.

  ■   RC provides a CONTROL+C interrupt trap so that the program deletes
      temporary files and unfinished .RES files before terminating.

  ■   RC is now supplied as a bound .EXE file, which means it runs both with
      MS-DOS and with MS OS/2.



CodeView for Windows

CodeView for Windows (CVW) has undergone the following changes:


  ■   CVW supports debugging only when Windows is running in standard mode
      or 386 enhanced mode; to debug applications in real mode, use the
      Symbolic Debugger (SYMDEB).

  ■   CVW offers better support for debugging DLLs and large applications.

  ■   CVW now lets you dereference handles into memory addresses.

  ■   CVW now lets you trace, and break execution at, Windows messages.

  ■   You now start CVW from Windows rather than from DOS.

  ■   CVW has an improved user interface, with resizable, scrollable,
      character-oriented windows.

  ■   CVW now requires a secondary monochrome monitor with a 25-line
      display; you can no longer run it on a serial terminal.



Heap Walker

The Heap Walker (HEAPWALK) now supports both EMS and protected-mode memory.



SNAP

The SNAP tool is no longer part of the SDK. The functions that SNAP provided
are now built into Windows 3.0, and are always available via the PRINT
SCREEN and ALT+PRINT SCREEN keys. For more information, see the Windows
User's Guide.


4.3.6  Source Code Examples

The SDK version 3.0 disks include a new set of sample applications. Each
application is designed to illustrate one or more concepts. The following is
a list of concepts and the application that illustrates each concept.

Concept                                 Sample Application
────────────────────────────────────────────────────────────────────────────
Cascading, pop-up, and owner-draw       MENU.EXE
menus

Color palettes                          MYPAL.EXE

Combo box controls                      OWNCOMBO.EXE

Communications                          TTY.EXE

Device-independent bitmaps              SHOWDIB.EXE

Dynamic data exchange                   CLIENT.EXE and SERVER.EXE

Multiple-document interface             MULTIPAD.EXE

Owner-draw controls                     OWNCOMBO.EXE

Concept                                 Sample Application
────────────────────────────────────────────────────────────────────────────
Printer settings                        MULTIPAD.EXE

Windows on-line Help system             HELPEX.EXE

In addition, the existing sample applications have been enhanced to use new
3.0 APIs and the latest Windows user-interface standards. The sample code
organization has been improved.


4.3.7  Clipboard Support for Objects Larger than 64K

The clipboard now supports objects larger than 64K. However, be sure to
address such objects using huge pointers, or via _ahincr using the technique
described in Chapter 16 of Guide to Programming.


4.3.8  On-Line Reference Documentation

When you install the SDK, the INSTALL program optionally copies two files
named SDKWIN.HLP and SDKADV.HLP to your hard disk. SDKWIN.HLP is a standard
Windows Help file, while SDKADV.HLP is a Microsoft Advisor on-line Help
file. These files contain most of Volume 1 and portions of Volume 2 of the
Reference. All functions, data structures, and messages are linked to
provide quick access to their descriptions.

The Microsoft Advisor provides on-line Help with such Microsoft language
products as the Microsoft C version 6.0 Programmer's WorkBench (PWB) and
CodeView for Windows (CVW). You can use Windows Help regardless of the
source-code editor you use to create your application.


4.4  Revising 2.x Applications for Windows 3.0

This section explains how to make sure that your 2.x application will run
successfully with Windows 3.0. In general, the process includes testing your
application thoroughly with Windows 3.0 and fixing any problems it has.
There are two ways to prepare your application to run with Windows 3.0:


  ■   Compile the application using the 2.x SDK, then mark it as compatible
      with Windows 3.0. Such applications can run under both Windows 2.x and
      Windows 3.0. However, applications compiled using the 2.x SDK cannot
      use the new Windows 3.0 APIs.

  ■   Compile the application using the 3.0 SDK. Such applications can run
      only under Windows 3.0; however, they can take full advantage of the
      new features that Windows 3.0 offers.


The following sections explain how to ensure that your application runs
successfully with Windows 3.0, how to build an application that runs with
both versions of Windows, and how to upgrade your 2.x application to version
3.0.


4.4.1  Running Successfully with Windows 3.0

Generally, a well-behaved 2.x application should require only minor
modifications in order to run successfully with Windows 3.0. Whether you are
building your application using the 2.x SDK or the 3.0 SDK, you should test
the following aspects of your application:


  ■   Make sure the application uses memory correctly.

  ■   Make sure the application modifies the interrupt flag correctly.

  ■   Make sure the application displays the proportional system font
      correctly.


The rest of this section explains each topic in more detail.


Using Memory Correctly

Windows 3.0 manages memory differently than do previous versions of Windows.
The most important change is that Windows 3.0 uses the protected-mode
capability of the 80286, 80386, and 80486 processors.

When running with Windows in protected mode, applications must manage memory
correctly, using the memory-management rules described in the  section
"Traps to Avoid in Managing Program Data" in Chapter 16 of Guide to
Programming. Failure to follow these rules can result in fatal errors. The
following list briefly summarizes each rule:


  ■   Do not assume the privilege level in which your application is
      running.

  ■   Do not load a segment register with a value other than one provided by
      Windows or DOS.

  ■   Do not perform segment arithmetic.

  ■   Do not compare segment addresses.

  ■   Do not assume any relationship between a handle and a far pointer in
      any mode.

  ■   Do not pass data to other applications via a global handle.

  ■   Do not read or write past the ends of memory objects.

  ■   Do not use code segment variables.

  ■   When increasing the size of a memory object across a 64K boundary, do
      not assume that the GlobalReAlloc function will return the same handle
      it was passed.

  ■   Do not rely on the GlobalFlags function to indicate how many times
      your application has called GlobalLock if your application is running
      in standard or 386 enhanced mode. Your application should not rely on
      GlobalFlags to determine the usage count of a globally allocated
      object. Instead, your application should maintain its own reference
      count for the object.


It is extremely important to test your application with Windows 3.0 in
protected mode; errors that might be harmless in real mode are often fatal
in protected mode. Because Windows manages memory slightly differently in
standard mode and 386 enhanced mode, you should test your application
thoroughly with each Windows operating mode. Keep in mind that errors can be
concealed in code that is executed infrequently.

Use version 3.0 of CVW or WDEB386, the Windows protected-mode debuggers, to
identify the causes of protected-mode violations. CVW 3.0 is included with
the 3.0 SDK.


Modifying Interrupts Correctly

If your application explicity modifies the interrupt flag using the
assembler CLI and STI instructions, then you may need to change the
application to avoid unexpected interrupts.

Windows now runs at I/O Privilege Level 0 (IOPL0). At IOPL0, the POPF and
IRET instructions will not change the state of the interrupt flag. (Other
flags will still be saved and restored.) In this IOPL0 environment, STI and
CLI are the only instructions that will change the interrupt flag. When your
application exits a critical section of code in which interrupts must be
disabled, it must not rely on the POPF instruction to restore the state of
the interrupt flag. Instead, the application should explicitly set the
interrupt flag after examining its saved value (saved by a previous PUSHF).


For additional information, see Chapter 14 of Guide to Programming.


Displaying the Proportional System Font Correctly

Windows 3.0 provides a new system font which has proportional, rather than
fixed, characters and spacing. This new proportional font is much more
legible and attractive than the old fixed-pitch font.

Windows 3.0 provides the proportional font to all Windows applications that
were compiled using the 3.0 SDK. Windows can also provide the proportional
font to version 2.x Windows applications. For a 2.x application to receive
the proportional font when running with Windows 3.0, you must use the MARK
utility to mark the application as able to accommodate the proportional
font. For information about the MARK utility, see Section 4.4.2, "Making 2.x
Applications Upwardly Compatible with Windows 3.0."

When running with Windows 3.0, a 2.x application that has not been marked
for the proportional system font will use the old fixed-pitch system font in
its dialog boxes, controls, and client areas (except where the application
explicitly selects a different font). (However, an unmarked 2.x application
will still use the proportional font in its menus.)

You should test your application thoroughly to make sure it handles the
proportional font correctly in its menus, dialog boxes, controls, and client
areas. To test the application with the new font, first mark the application
using the MARK utility's MEMORY FONT option. This tells Windows to let the
application use the new proportional font.

The following list describes some potential font display problems, their
causes, and their solutions:


  ■   Text is truncated in controls (for example, list box controls or
      static text).

      The control is too narrow for the text. This can be a problem
      particularly if the text consists mostly of wide or uppercase
      characters.

      Make the control wider, or change uppercase characters to lowercase.

  ■   Accelerator codes are misaligned in menu items.

      This is usually caused by using spaces to align the codes. With a
      proportional font, spaces are no longer useful for aligning text.

      Use tab characters, not spaces, to align accelerator codes in menu
      items.

  ■   Columns are misaligned in list boxes or a series of edit controls.

      This is usually caused by using spaces to align the columns. With a
      proportional font, spaces are no longer useful for aligning text.

      Use the GetVersion function to determine whether your application is
      running with Windows 2.x or 3.0. If your application is running with
      Windows 3.0, it should align the control text using the WM_SETTABSTOP
      message. If the application is running with Windows 2.x, it should use
      space characters instead.

  ■   Horizontal spacing is incorrect.

      If the application is drawing text using the default system font, it
      might be assuming a constant width for each character. Doing so will
      result in incorrect line-spacing calculations.

      Instead of assuming that each character is the same width, use the
      GetTextExtent function to calculate the exact width of each string.


You can use the fixed-pitch system font at any time by calling the
GetStockObject function and specifying ANSI_FIXED_FONT.


4.4.2  Making 2.x Applications Upwardly Compatible with Windows 3.0

This section explains how to modify your 2.x application so that it can run
successfully with both Windows versions 2.x and 3.0.

To build an application that runs with both versions of Windows, follow
these steps:


  1.  Compile the application using the Windows 2.x SDK.

  2.  Test the application thoroughly with both versions of Windows. Section
      4.4.1, "Running Successfully with Windows 3.0," describes the areas to
      which you should pay particular attention.

  3.  Mark the final executable file as compatible with Windows 3.0. To do
      this, use the MARK utility included with the 3.0 SDK. This section
      explains how to use the MARK utility.


Using MARK, you can mark your 2.x application to indicate the following:


  ■   This application runs successfully with Windows 3.0 in protected mode
      (that is, in 386 enhanced mode and standard mode).

  ■   This application runs successfully with Windows 3.0 in protected mode,
      and accommodates the proportional system font.




Why Should I Mark My 2.x Application?

You do not need to mark a 2.x application to run it with Windows 3.0. Many
2.x applications can run successfully with Windows 3.0 if they follow the
guidelines described earlier in this chapter. However, because some 2.x
applications do not run properly with Windows 3.0 in protected mode, Windows
3.0 normally displays a warning dialog box when the user starts an unmarked
2.x application. The dialog box warns the user that the application might
have problems running with Windows 3.0.

There are several advantages to testing and marking a 2.x application for
compatibility with Windows 3.0:


  ■   When you mark a 2.x application as compatible with protected mode,
      Windows 3.0 starts that application without displaying a warning.

  ■   Windows 3.0 uses the proportional system font for 2.x applications
      that are marked as able to accommodate the proportional system font.
      Such applications will be more attractive and more consistent with
      Windows 3.0.

      Unmarked applications use the old nonproportional font.



Running the MARK Utility

To mark your 2.x application as compatible with Windows 3.0, run the MARK
utility included with the SDK 3.0.

────────────────────────────────────────────────────────────────────────────
NOTE

If your 2.x application loads any dynamic-link libraries, you must also mark
those DLLs as compatible with protected mode.
────────────────────────────────────────────────────────────────────────────

╓┌───────────────────────────────────────┌───────────────────────────────────╖
Command                                 What It Does
────────────────────────────────────────────────────────────────────────────
MARK filename                           Tells you whether this application
                                        is already marked for protected
                                        mode or the proportional system
Command                                 What It Does
────────────────────────────────────────────────────────────────────────────
                                        mode or the proportional system
                                        font.

MARK MEMORY filename                    Marks the program as safe to run
                                        in protected mode.

MARK MEMORY FONT filename               Marks the program as safe to run
                                        in protected mode and as able to
                                        use the proportional system font.



Typical output from the MARK utility looks like this:

  C:\ mark myprog.exe
  Microsoft (R) Windows Executable Marker  Version 1.0
  Copyright (C) Microsoft Corp 1989. All rights reserved.

  Clean use of memory:  No
  Proportional system font: No

  C:\ mark memory font myprog.exe
  Microsoft (R) Windows Executable Marker  Version 1.0
  Copyright (C) Microsoft Corp 1989. All rights reserved.

  Clean use of memory:  No ─ Yes
  Proportional system font: No ─ Yes


4.4.3  Migrating 2.x Applications to Version 3.0

Eventually, you will probably want to upgrade your version 2.x Windows
application to version 3.0. Although it's a good first step to rebuild your
2.x application so that it can run with both versions of Windows, such
applications are still basically 2.x applications, and cannot take advantage
of many of the new features that Windows 3.0 provides. For example, a 2.x
application cannot use color icons, the new combo box controls, or the new
Windows API. When you upgrade your 2.x application using the 3.0 SDK, it
becomes a "true" version 3.0 application, and can use all the new Windows
3.0 features.

The following steps are the minimum needed to recompile a 2.x application
using the 3.0 SDK:


  1.  Ensure that the application runs correctly with Windows 3.0. See
      Section 4.4.1, "Running Successfully with Windows 3.0," earlier in
      this chapter, for information on ensuring that your application is
      compatible with Windows 3.0.

  2.  Use SDKPaint to convert 2.x icons and cursors to the new 3.0 format.
      See Tools for information on how to use SDKPaint.

  3.  Convert 2.x bitmaps to 3.0 device-independent bitmaps (DIBs).

      Use the CONVBMP utility to convert 2.x device-dependent, 3-plane color
      bitmaps into 3.0 DIBs. Start CONVBMP from the DOS prompt, and specify
      both an input filename and an output filename. For example, the
      following command converts the 2.x color bitmap CAT.BMP into a 3.0 DIB
      named CAT.DIB:

      CONVBMP CAT.BMP CAT.DIB

      Use either CONVBMP or SDKPaint to convert 2.x monochrome bitmaps into
      3.0 DIBs.

  4.  Update your application's module-definition (.DEF) file as required
      for the C 5.1 or C 6.0 linker.

  5.  Update your LINK command line as explained in "Updating Your LINK
      Command Line" to accomodate the new library-naming conventions.

  6.  Update the application's make files as explained in "Updating Your
      Make Files" later in this section.

  7.  Ensure that your C source files include the WINDOWS.H header file
      before any C run-time header files that define NULL as "(void*)0".




Updating Your Module-Definition File

The SDK no longer includes a special version of the linker. You now link
Windows applications using LINK, the linker that comes with Microsoft C
version 5.1 or 6.0.

The C version of LINK differs from the SDK version 2.1 LINK4 in one way: the
default setting for the EXETYPE key word is EXETYPE OS2. Therefore, every
Windows application's module-definition (.DEF) file must contain the
following statement:

  EXETYPE WINDOWS

This statement explicitly specifies a Windows .EXE header rather than an
OS/2 header.


Updating Your LINK Command Line

Before recompiling and relinking your 2.x application using the Windows 3.0
SDK, you should make the following changes to your LINK command line:


  ■   The LINK command line must explicitly include the name of the version
      3.0 Windows C run-time library.

      If you omit the library name, the linker automatically searches for
      libraries with names in the form xLIBCy.LIB. Because the Windows 3.0
      run-time libraries have names in the form xLIBCyW.LIB, the linker will
      not find the correct library unless you include the library name on
      the command line. For example, the following command line tells LINK
      to use the library SLIBCEW.LIB:

      LINK GENERIC, , , /NOD SLIBCEW LIBW, GENERIC.DEF

  ■   The LINK command line should include the /NOD option.

      The /NOD option prevents LINK from accidentally searching for a C
      run-time function in a library you did not intend to include, but
      which is named using the default (non-Windows) naming convention
      xLIBCy.LIB.


Section 4.3.2, "Windows C Run-Time Libraries," provides more information on
the new library naming conventions.


Updating Your Make Files

To recompile your 2.x application using the SDK version 3.0, you should make
the following changes to your application's make files:


  ■   The files should use the new C run-time library naming conventions.
      The convention for application libraries is xLIBCy W.LIB; that for DLL
      libraries is xDLLCyW.LIB.

  ■   The files should use the new model-independent Windows import library,
      LIBW.LIB, instead of the version 2.x model-dependent libraries (which
      have names in the form xLIBW.LIB).

  ■   The make files must refer to LINK rather than to LINK4.

  ■   If you plan to use NMAKE, the files should be compatible with NMAKE.


For example, by adding the following as the first line of the make file for
the SDK source code example Generic, you can then use that make file with
NMAKE:

  all: generic.exe

  generic.res: generic.rc generic.h
     rc -r generic.rc
   .
   .
   .
```

{% endraw %}
