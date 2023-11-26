---
layout: page
title: "MS Windows 3.0 DDK Install. &amp; Update Guide"
permalink: /documents/books/mspl13/win/w3ddkins/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft Windows Device Development Kit - Installation and Update Guide



────────────────────────────────────────────────────────────────────────────
Microsoft (R) Windows (tm) Device Development Kit - Installation and Update
Guide -

development tools for providing Microsoft Windows device support
VERSION 3.0
────────────────────────────────────────────────────────────────────────────


for the MS-DOS (R) or PC-DOS Operating System


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
Computer Software clause at DFARS 252.227-7013 or subparagraphs (c) (1) and
(2) of the Commercial Computer Software
─ Restricted Rights at 48 CFR 52.227-19, as applicable.
Contractor/manufacturer is Microsoft Corporation/One Microsoft Way/Redmond,
WA 98052-6399.


(C) Copyright Microsoft Corporation, 1990. All rights reserved.

Simultaneously published in the U.S. and Canada.


Printed and bound in the United States of America.


Microsoft, MS, MS-DOS, GW-BASIC, QuickC, CodeView, the
Microsoft logo, and XENIX are registered trademarks and Windows,
Windows/286,
and Windows/386 are trademarks of Microsoft Corporation.

AT&T is a registered trademark of American Telephone
and Telegraph Company.

COMPAQ is a registered trademark of Compaq Computer Corporation.

Epson is a registered trademark of Epson America, Inc.

Hercules is a registered trademark of Hercules Computer
Technology.

HP, LaserJet, and PCL are registered trademarks of Hewlett-Packard
Company.

IBM is a registered trademark of International Business
Machines Corporation.

Intel is a registered trademark and 386 is a trademark
of Intel Corporation.

Paintbrush is a registered trademark of Zsoft Corporation.

PostScript is a registered trademark of Adobe Systems,
Inc.

Video Seven is a trademark of Headland Technology, Inc.

The Symbol fonts provided with Windows 3.0 are based
on the CG Times font, a product of AGFA Compugraphic Division of Agfa
Corporation.

Document No. SY0324-300-R00-1089







Chapter 1  Overview of the Windows 3.0 DDK

     1.1   New Features in Windows 3.0
     1.2   Changes in the New DDK
     1.3   Contents of the Device Development Kit
     1.4   Where to Look in the DDK Documentation Set

Chapter 2  Deciding on Whether or Not to Update

     2.1   Updating 2.x Drivers to Run Under Windows 3.0
     2.2   Updating Windows/386 2.x Virtual Devices to Run Under Windows
              3.0 386 Enhanced Mode

Chapter 3  Required Development Environment

     3.1   Languages and Other Tools
     3.2   Recommended Hardware
     3.3   Updating the CONFIG.SYS and AUTOEXEC.BAT Files
     3.4   Special Tools
     3.5   Libraries
     3.6   INCLUDE Files
     3.7   Special INCLUDE Files For Building Virtual Devices
     3.8   Special Tools For Building Virtual Devices
     3.9   Summary List of Special Files

Chapter 4  Recommended Development Process

     4.1   Copy All Required Tools and Sources To Your Hard Disk
     4.2   Familiarize Yourself With the Debugging Tools
     4.3   Build a Sample Driver
     4.4   Use the Test Applications
     4.5   Create a Distribution Disk

Chapter 5  System Setup and Tools Installation

     5.1   Copy the Required Files From the Disks
     5.2   Expand the Compressed Files to Their Normal Size
     5.3   Other Considerations
     5.4   Checking Your Tools Setup

Chapter 6  Windows 3.0 Device Driver Sources

     6.1   Display Driver Sources
            6.1.1    1-Plane Drivers: CGA, EGA Monochrome, EGA High
                        Resolution B&W, Hercules, Plasma,and MCGA
            6.1.2    4-Plane Drivers: EGA and VGA
            6.1.3    8-Plane Drivers: Video Seven VGA and 8514/a
            6.1.4    Windows Real and Standard Mode Grabbers
            6.1.5    System Font Sources
     6.2   Display Driver Test Applications
     6.3   Printer Driver Sources
            6.3.1    PCL/HP LaserJet Printer Driver
            6.3.2    PostScript Printer Driver
            6.3.3    Raster Driver Sample Sources
     6.4   Printer Driver Test Applications
     6.5   Keyboard Driver Sources
     6.6   Mouse Driver Sources
     6.7   COMM Driver Sources
     6.8   Sound Driver Sources
     6.9   Network Driver Sources
     6.10  Network Driver and HCT Test Applications

Chapter 7  Windows 3.0 Virtual Device Sources

     7.1   The Display Devices (CGA, EGA, VGA, 8514/a, HERC)
     7.2   The Display/Windows Interface (GRABBER)
     7.3   The DMA Device (VDMAD)
     7.4   The EBIOS Device (EBIOS)
     7.5   The Hard Disk Device (VHD)
     7.6   The Keyboard Device (VKD)
     7.7   The Mouse Device (VMD)
     7.8   The NetBIOS Device (VNETBIOS)
     7.9   The Local DOS Network Device (LDOSNET)
     7.10  The BIOS Device (BIOSXLAT)
     7.11  The Paging Device (PAGESWAP)
     7.12  The Printer Device (VPD)
     7.13  The COMM Device (VCD)
     7.14  The COM Buffer Device (COMBUFF)
     7.15  The Floppy Drive Device (VFD)



Chapter 1  Overview of the Windows 3.0 DDK
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) Windows(tm) Device Development Kit (DDK) provides
documentation and sample sources to assist you in developing the features
you may want to support in your Microsoft Windows 3.0 device drivers and/or
virtual devices. Along with this DDK, you must purchase the Microsoft
Windows Software Development Kit (SDK) and the retail Windows 3.0 software.
We recommend you review the SDK documentation and install the software in
that kit before installing the DDK. The SDK also contains some of the
Windows tools you will need to build your driver.

The primary objective of the Windows 3.0 DDK is to provide you with the
updated tools and sample sources required to do the following:


  ■   Test, debug, and modify existing 2.x drivers to work properly under
      Windows 3.0.

  ■   Develop a 3.0 driver that takes advantage of the new features provided
      only in Windows 3.0.




1.1  New Features in Windows 3.0

Windows 3.0 provides many enhancements over previous versions and added
features. This section summarizes the major changes to the Windows
environment. For further information on each item, refer to the
documentation provided with the Microsoft Windows Software Development Kit
(SDK).


  ■   A new user shell, file manager, and enhanced accessory programs

  ■   The ability to run in protected mode, which gives applications direct
      access to extended memory

  ■   The swapping of memory pages to and from disk, which enables the
      386(tm) enhanced mode of Windows to provide more virtual memory than
      is physically available

  ■   Color palette management, which enables applications to take full
      advantage of the color capabilities of a device

  ■   Device-independent color bitmap support

  ■   The availability of device-independent icons and cursors by
      automatically selecting the appropriate device-specific image from a
      set of images provided by the application

  ■   Improved network support

  ■   Changes to the application user interface, including the addition of
      new dialog box controls, new menu types, and a more attractive system
      font

  ■   Additional fonts for higher resolution displays, such as the 8514/a,
      and for math symbols



1.2  Changes in the New DDK

The 3.0 version of the Microsoft Windows Device Development Kit is
substantially different from the previous version. The following list
highlights the changes:


  ■   The Windows/286(tm) Device Driver Kit (DDK) and the Windows/386(tm)
      Binary Adaptation Kit (BAK) have been combined into one Microsoft
      Windows Device Development Kit (DDK).

  ■   All the files provided on the DDK disks are compressed and must be
      expanded before using.

  ■   Additional sources have been provided on the disks.

  ■   The documentation is more extensive and totally reorganized.

  ■   Areas of duplication have been minimized by making numerous references
      to the Microsoft Windows Software Development Kit.



1.3  Contents of the Device Development Kit

The 3.0 version of the Microsoft Windows Device Development Kit now consists
of the following:


  ■   Microsoft Windows Device Driver Adaptation Guide, which covers how to
      write or modify device drivers for Windows 3.0.

  ■   Microsoft Windows Virtual Device Adaptation Guide, which covers how to
      write virtual devices for Windows 3.0 when running in 386 enhanced
      mode.

  ■   Microsoft Windows Installation and Update Guide, which provides
      information on the source code, test scripts, utilities, and building
      tools provided with the DDK and the development environments required
      for Windows 3.0 when running in either real, standard, or 386 enhanced
      mode.

  ■   Microsoft Windows Printers and Fonts Kit, which includes information
      on the Printer Font and Cartridge Metrics (PFM and PCM) file formats
      and the new PFM Editor, along with technical notes on the PCL(R)/HP(R)
      LaserJet(R) and PostScript(R) printer drivers.

  ■   Windows 3.0 driver and font sources:

      1-plane mode (2 colors) display drivers and grabbers for CGA,
      Hercules(R), Compaq(R) Plasma, IBM(R) MCGA, EGA high resolution black
      and white, and EGA monochrome displays

      4-plane mode (16 colors) display drivers and grabbers for EGA high
      resolution and VGA displays

      8-plane mode (256 colors) display drivers and grabbers for the Video
      Seven(tm) VGA and 8514/a displays

      Printer drivers for the PCL/HP LaserJet printer (HPPCL) and PostScript
      printer (PSCRIPT)

      Epson(R) 9-pin printer and IBM Color Printer driver sample sources

      Mouse drivers for Microsoft bus or serial mouse

      COMM driver source for parallel and serial ports (LPT1 - LPT3 and COM1
      - COM4)

      Sound driver source

      Network driver source for Microsoft Network (MS-NET)

      IBM AT-style keyboard driver and international keyboard tables

      Fonts for CGA, EGA, VGA, and 8514/a resolution, including Windows 3.0
      proportional system and Windows 2.x fixed-pitch system fonts

  ■   386 enhanced-mode virtual device sources:

      CGA, Compaq Plasma, Hercules, EGA, VGA color, VGA monochrome, and
      8514/a display (VDD)

      CGA, Compaq Plasma, Hercules, EGA, VGA color, VGA monochrome, and
      8514/a display/Windows interface (GRABBER)

      Mouse pointing device (VMD)

      Keyboard device (VKD)

      Hard Disk device (VHD)

      COMM port device (VCD)

      COM Buffer device (COMBUFF)

      DMA device (VDMAD)

      Printer port device (VPD)

      Floppy drive device (VFD)

      NetBIOS device (VNETBIOS)

      Network device (LDOSNET)

      Extended (EBIOS) device (EBIOS)

      Memory Page Swapping device (PAGESWAP)

      ROM BIOS device (BIOSXLAT)

  ■   Utilities and building tools:

      PFM Editor for PFM and PCM fonts (PFMEDIT.EXE)

      PostScript resource tool for creating Windows Printer Description
      (WPD) files (MKPRN.EXE)

      A special version of the C Linker (LINK4.EXE)

      MASM 5.10B for 386 virtual devices (MASM5.EXE)

      LINK386 for 386 virtual devices (LINK386.EXE)

      Special Add Header utility for 386 virtual devices (ADDHDR.EXE)

      Special MAPSYM for 386 virtual devices (MAPSYM32.EXE)

      Test scripts and files for printers, displays, and networks and for
      overall hardware compatibility



1.4  Where to Look in the DDK Documentation Set

The Microsoft Windows Device Driver Adaptation Guide provides detailed
information on the new Windows 3.0 feature support you should consider
implementing in your device driver. The sample sources for the device
drivers provided on the DDK disks contain additional examples of how to
support these new features. See Chapter 6, "Windows 3.0 Device Driver
Sources," of this guide for more information on the sample sources.

You should review each chapter that applies to your type of device. A
complete list with descriptions of each chapter is provided in the
"Introduction to Device Drivers." The following is simply an overview of
what you will find in the DDK documentation.

Chapter 2, "Display Drivers," and Chapter 3, "Display Drivers: New
Features," contain new information on writing display drivers and on the new
Windows 3.0 features such as:


  ■   Color-palette management

  ■   Device-independent bitmaps (DIBs)

  ■   Greater than (>) 64K font support

  ■   Running in protected mode

  ■   Support for new visuals (cursors, icons, and bitmaps)


Chapter 5, "Printer Drivers," contains new information on writing printer
drivers. One of the major discussions is on device initialization. Two new
APIs have been added to Windows 3.0 to give Windows applications the ability
to initialize printer settings: ExtDeviceMode() and DeviceCapabilities().
Your printer driver should support these new functions. New printer escapes
have also been added (mainly for high end devices) and some have been
updated. You should evaluate if your driver needs to support the new escapes
or if you need to modify any existing ones. Chapter 11, "Device Driver
Escapes," provides descriptions of all the escapes.

The Windows 3.0 SDK documentation provides an overview of the new Help
system provided under Windows 3.0. You should consider using the Help system
for Windows printer and network drivers in place of README.TXT files. The
PCL/HP LaserJet and PostScript printer driver sources included in this kit
demonstrate the use of the Help manager (the Help button is accessible via
the printer dialog box).

Chapter 6, "Network Support," and Chapter 7, "Network Drivers," document the
new Windows network interface.

Chapter 8, "Keyboard Drivers," documents the new keyboard structure
supported under Windows 3.0. If you are writing a keyboard driver, you
should review this information.

Chapter 9, "Miscellaneous Drivers," discusses the sound, communications, and
mouse drivers. No new support has been added in the sound and mouse drivers
other than modifications to run correctly in protected mode. The COMM driver
has been enhanced to support COM1 through COM4 and to run in protected mode.


Chapter 10, "Common Functions," contains information on the common functions
used by different types of graphics device drivers. You should be sure to
review the new enhancements to StretchBlt() if you are writing a display or
printer driver.

Chapter 16, "Overview of Windows in 386 Enhanced Mode," summarizes how
installable virtual devices work under Windows 3.0, but you should read all
the chapters in the Microsoft Windows Virtual Device Adaptation Guide for
complete details on this new support.

A complete reference to all the new virtual device functions and services
has been provided in that document's Part 4, "Virtual Device Services." In
addition, we have provided on the DDK disks various sample virtual device
sources demonstrating the use of the Virtual Machine Manager (VMM) services.
See Chapter 7, "Windows 3.0 Virtual Device Sources," of this guide for more
information on the sample sources.






Chapter 2  Deciding on Whether or Not to Update
────────────────────────────────────────────────────────────────────────────

The following two sections provide background information to help you
determine whether you will need to write a new device driver and/or virtual
device, or simply update your existing 2.x driver and/or virtual device.


2.1  Updating 2.x Drivers to Run Under Windows 3.0

Because of the new protected-mode memory model, it will probably be
necessary for you to update your device driver to work properly under
Microsoft Windows 3.0 when running in standard and 386 enhanced mode (both
of which run with the processor in protected mode). Certain coding rules
need to be followed to avoid General Protection (GP) violations that stop
the execution of Windows. (See the SDK documentation for details on memory
management and the rules for protected mode. See also Chapter 3, "Display
Drivers: New Features," in the Microsoft Windows Device Driver Adaptation
Guide.) Notice that users do have the option of running Windows in real mode
to run 2.x level Windows applications and drivers. However, they then lose
the additional memory capability of Windows 3.0.

When running in protected mode, Windows 3.0 will check each driver loaded to
verify that it has been marked for running in protected mode. Windows 3.0
may refuse then to load some 2.x drivers. The display, communications,
mouse, sound, system, and keyboard drivers fall into this category because
they are integral to the system. If they fail, Windows will crash.

When attempting to load Windows with a 2.x driver, an error message is
displayed and you are returned to the MS-DOS(R) prompt. However, printer and
network drivers are exceptions and are treated similarly to 2.x
applications. This is because they are loaded and run only on the behalf of
particular applications. Therefore, if the driver fails, only the current
application is affected. For example, when a 2.x printer driver is loaded, a
warning message dialog box is displayed in Windows. This can occur many
times within a work session, depending on the currently active application.


With this in mind, it is important for you to evaluate your current level of
support and determine which of the following options you choose to follow:


  1.  Develop a new Windows 3.0 driver that is based on your existing 2.x
      driver or from the driver samples in this kit and built with the 3.0
      tools.

      This is the most desirable solution since your driver will be able to
      take full advantage of the new 3.0 features. The user will also get
      the full benefit of the Windows product and your hardware device.

  2.  Test, debug, and mark your existing driver to run under Windows 3.0.
      However, this is not an option for display or keyboard drivers. This
      will enable your driver to run under both Windows 2.x and Windows 3.0
      in real and protected mode.

      The driver should be built with the Windows/286 2.1 DDK tools. Then,
      you will need to use the MARK utility supplied in the 3.0 SDK to mark
      your driver for memory use. Notice that drivers built with the 3.0
      tools will not run under Windows 2.x.

      Although this is not the most desirable option, it does at least give
      the user the opportunity to run Windows 3.0 with full protected-mode
      memory support.



2.2  Updating Windows/386 2.x Virtual Devices to Run Under Windows 3.0 386
Enhanced Mode

Under 386 enhanced mode in Windows 3.0, a new structure for installable
virtual device support has been added. The interface for virtual devices is
very different from the 2.x versions of Windows/386. All new DDK
documentation has been written to cover the new support available in Windows
3.0 when running in 386 enhanced mode.

The 2.x versions of Windows/386 virtual devices (VxD) are not compatible
with Windows 3.0 when running in 386 enhanced mode because of this new
interface. You should evaluate whether or not it is more beneficial for you
to convert your existing VxD to the new interface or to start building a new
VxD based on the sample sources provided in this kit. This decision will
depend on your device and the extent to which you choose to support it. (See
Chapter 1, "Overview of Windows," in the Microsoft Windows Device Driver
Adaptation Guide for estimates of the time required to write various
drivers.)

You also need to be aware of the following:


  ■   The OFFSET32 macro should be used, in place of the standard MASM
      OFFSET directive, in all virtual device code. This will allow the code
      to adapt to future versions of the macro assembler. (See Chapter 17,
      "Virtual Device Programming Topics," in the Microsoft Windows Virtual
      Device Adaptation Guide for more information on this macro.)

  ■   The V86 Memory Manager (V86MMGR) services enable real-mode devices to
      tell 386 enhanced mode about the API they provide and enable a generic
      virtual device to map these calls between virtual 8086 and protect
      modes.








Chapter 3  Required Development Environment
────────────────────────────────────────────────────────────────────────────

The tools and documentation in the Microsoft Windows 3.0 SDK are required
for developing device drivers and virtual devices. There are several
references to the SDK documentation throughout the DDK. You should plan to
review first the documentation provided in the SDK to get a better
understanding of the new feature support available in Windows 3.0. The DDK
documentation contains additional information on these subjects, as
necessary for writing Windows device drivers and virtual devices. When
writing 386 enhanced-mode virtual devices, you will need to use the tools
available in both the Windows 3.0 SDK and DDK.

To get technical assistance while you are developing your driver or virtual
device, you can connect to the Microsoft OnLine system. If this is your
first time using the system, you should carefully review the Microsoft
OnLine documentation before accessing it.


3.1  Languages and Other Tools

To produce a Windows 3.0 device driver and/or virtual device, you will need
the following languages, tools, and software:


  ■   Microsoft Macro Assembler (MASM) version 5.10 (for all drivers)

  ■   Microsoft C Compiler version 6.0 (generally used for printer drivers)

  ■   Microsoft C Compiler version 5.1 (for those developers who are still
      using the 5.1 version Compiler, or who want to binary compare files
      they create with the Compiler with files provided in Windows 3.0).
      Version 6.0 of the Microsoft C Compiler is the only version now
      commercially available and so we recommend using it as soon as
      possible. However, the drivers released in the Windows 3.0 retail
      product were built with C 5.1.

  ■   The tools and files included with the Microsoft Windows Device
      Development Kit and the Microsoft Windows Software Development Kit

  ■   The Windows 3.0 retail product and various Windows applications (for
      debugging and testing the more complicated areas of your device)



3.2  Recommended Hardware

The following is the minimum hardware configuration recommended for
developing Windows 3.0 device drivers and/or virtual devices:


  ■   A 286- or 386-based computer (with a clock speed of 16 MHz or above)

  ■   At least 2 megabytes or more of memory (4 megabytes is recommended for
      386 enhanced mode)

  ■   A fast hard disk for your compiler/linker

  ■   A fully configured EGA or VGA display card (or other device if you are
      developing a display driver and virtual display device)

  ■   A debugging terminal connected to your serial port

  ■   A Microsoft Mouse or any other mouse compatible with Windows

  ■   A Windows-compatible printer



3.3  Updating the CONFIG.SYS and AUTOEXEC.BAT Files

It is important to note that, during the installation of the Microsoft Macro
Assembler and Microsoft C Compiler tools, you may need to make some changes
to the CONFIG.SYS and AUTOEXEC.BAT files. Consult the reference manuals for
these products for the recommended changes.


3.4  Special Tools

You may also need the IMPLIB.EXE tool, which is provided with the Microsoft
C Compiler, when building the drivers provided in this kit. This tool is not
installed automatically when you install the Microsoft C Compiler version
5.1 software. You need to do this manually. However, C 6.0 does install it
for you.

You will find the LINK4.EXE utility on the Device Driver Samples and Tools
disk # 8 (5.25 inch) or 14 (3.5 inch) under the \TOOLS directory. However,
we recommend you modify the MAKE files to use the linker provided with your
program language software. LINK4.EXE is only provided to help you build the
sources with the MAKE files included in this kit. If you choose to use
LINK4, you should copy this utility to the \TOOLS directory on your hard
disk. This should correspond to the \TOOLS directory you may have set up
with your programming language and/or with the SDK.


3.5  Libraries

These files are located in the \LIB directory on the Device Driver Samples
and Tools disk # 6 (5.25 inch) or 10 (3.5 inch). They consist of four
libraries and a subdirectory that are required for writing particular types
of device drivers and virtual devices. The other required libraries are
provided in the SDK.

╓┌───────────────────────┌───────────────────────────────────────────────────╖
Library                 Used for building
────────────────────────────────────────────────────────────────────────────
SWINLIBC.LIB            All Windows device drivers
USER.LIB                Printer drivers
GDI.LIB                 Printer drivers
KERNEL.LIB              Communications drivers
C51 subdirectory        Drivers with the C5.1 Compiler only



3.6  INCLUDE Files

Most of these files are located in the \INCLUDE directory on the Device
Driver Samples and Tools disk # 6 (5.25 inch) or 10 (3.5 inch). They are
updated INCLUDE and header (.H) files for building Windows device drivers
and virtual devices.

If you are writing a virtual device, you also need to use some additional
INCLUDE files. See the following section on virtual device INCLUDE files for
more information on these files.

You should add the appropriate Windows INCLUDE and header files to the
Windows 3.0 \INCLUDE directory that you created during the SDK Install
procedure. When writing assembly language drivers, you will need to
incorporate at least the following INCLUDE (.INC) files:

╓┌──────────────────┌────────────────────────────────────────────────────────╖
INCLUDE file       Used for building
────────────────────────────────────────────────────────────────────────────
CMACROS.INC        All assembly-language drivers
GDIDEFS.INC        Display and printer drivers
WINDEFS.INC        Drivers affected by asynchronous interrupts


Some of these contain both C and ASM definitions and, therefore, can also be
used in drivers written in C. (See Chapter 1, "Overview of Windows," in the
Microsoft Windows Device Driver Adaptation Guide for more detailed
information on INCLUDE files.)

The most important INCLUDE file is CMACROS.INC, which contains a set of
assembly-language macros that provide a simplified interface to the function
and segment conventions of high-level languages such as C and Pascal.

GDIDEFS.INC enables you to follow the good practice of referring to symbolic
constants and structures by their Windows standard names.

WINDEFS.INC contains two very useful macros that are used to turn off
hardware interrupts such as those from the floppy and hard disk controllers,
math coprocessor, timer, keyboard, and mouse. Use the EnterCrit and
LeaveCrit macros whenever you do not want an asynchronous interrupt to
reenter an area of code that Windows is executing.

The following is a list of some of the other required INCLUDE files.

╓┌────────────────────┌──────────────────────────────────────────────────────╖
INCLUDE file         Used with
────────────────────────────────────────────────────────────────────────────
WINDOWS.H            Printer drivers
SPOOLS.H             Printer drivers
PRINTER.H            Printer drivers
GRABBER.INC          Display drivers
WINNET.H             Network drivers (C Version)
INCLUDE file         Used with
────────────────────────────────────────────────────────────────────────────
WINNET.H             Network drivers (C Version)
WNET.INC             Network drivers (Assembler version)



3.7  Special INCLUDE Files For Building Virtual Devices

To build the sample virtual devices correctly, you need to install all the
files in the \INCLUDE directory from the Virtual Device Samples and Tools
disks. The \INCLUDE directory contains .INC files used by the sample virtual
device sources. This directory must be placed at the same directory level as
the source directories, because they are referenced in the MAKE files in the
following manner:

    ..\..\..\INCLUDE\SAMPLE.INC

This requirement, however, does not apply to INCLUDE files provided on the
Device Driver Samples and Tools disks, or to those with the Windows 3.0 SDK
or standard Microsoft language products. It only pertains to the virtual
device sample sources provided in this kit.

The \INCLUDE directory can be moved, though, if you modify the MAKE files
appropriately.


3.8  Special Tools For Building Virtual Devices

To build the sample virtual devices correctly, you need to install all the
files in the \TOOLS directory on the Virtual Device Samples and Tools disks.
The files in the \TOOLS directory should be put into the Windows 3.0 \TOOLS
directory that was created by the SDK Install program.

The \TOOLS directory contains utilities that are required for building
virtual devices. However, these are not currently part of the standard
Windows 3.0 SDK tool set and are not readily available with most Microsoft
language products.

This directory contains the following tools, each of which is necessary to
build the virtual device sample sources with the MAKE files provided:


  ■   ADDHDR is a utility used to modify the headers of virtual devices. It
      takes only one parameter, the name of the virtual device file, and
      should be run as a standard part of every build procedure.

  ■   LINK386 is a special version of the Microsoft Segmented-Executable
      Linker that is provided specifically for building virtual devices.
      This version has been modified to understand 32-bit offsets.

  ■   MAPSYM32 is a version of the standard MAPSYM utility that is used to
      convert map files produced by the linker into symbol files used by
      some debuggers. This version has been modified to understand 32-bit
      offsets.

  ■   MASM5 is a special version of the Microsoft Macro Assembler, version
      5.10B, that supports the 32-bit address space required for virtual
      devices. It has been named MASM5.EXE so it will not conflict with your
      standard MASM executables.



3.9  Summary List of Special Files

The following is a list of all the special files referred to in this chapter
along with directions on where to find them on the 5.25 inch (or 3.5 inch)
disks:

╓┌───────────────────┌───────────────────────────────────────────────────────╖
Special file        Where to find it
────────────────────────────────────────────────────────────────────────────
IMPLIB.EXE          Microsoft C Compiler
LINK4.EXE           DDK Device Driver S & T Disk # 8 (14) - \TOOLS
SWINLIBC.LIB        DDK Device Driver S & T Disk # 6 (11) - \LIB
USER.LIB            DDK Device Driver S & T Disk # 6 (11) - \LIB
GDI.LIB             DDK Device Driver S & T Disk # 6 (11) - \LIB
KERNEL.LIB          DDK Device Driver S & T Disk # 6 (11) - \LIB
C51 subdirectory    DDK Device Driver S & T Disk # 6 (11) - \LIB
CMACROS.INC         Microsoft Windows SDK
GDIDEFS.INC         DDK Device Driver S & T Disk # 6 (10) - \INCLUDE
WINDEFS.INC         DDK Device Driver S & T Disk # 6 (10) - \INCLUDE
WINDOWS.H           Microsoft Windows SDK
SPOOL.H             DDK Device Driver S & T Disk # 6 (10) - \INCLUDE
Special file        Where to find it
────────────────────────────────────────────────────────────────────────────
SPOOL.H             DDK Device Driver S & T Disk # 6 (10) - \INCLUDE
PRINTER.H           DDK Device Driver S & T Disk # 6 (10) - \INCLUDE
GRABBER.INC         DDK Device Driver S & T Disk # 6 (10) - \INCLUDE
WINNET.H            DDK Device Driver S & T Disk # 6 (10) - \INCLUDE
WNET.INC            DDK Device Driver S & T Disk # 5 (9) - \NET
INT31.INC           DDK Virtual Device S & T Disk # 1 (1) - \INCLUDE
VMM.INC             DDK Virtual Device S & T Disk # 1 (1) - \INCLUDE
DEBUG.INC           DDK Virtual Device S & T Disk # 1 (1) - \INCLUDE
VPICD.INC           DDK Virtual Device S & T Disk # 1 (1) - \INCLUDE
SHELL.INC           DDK Virtual Device S & T Disk # 1 (1) - \INCLUDE
VDD.INC             DDK Virtual Device S & T Disk # 1 (1) - \INCLUDE
ADDHDR.EXE          DDK Virtual Device S & T Disk # 1 (1) - \TOOLS
LINK386.EXE         DDK Virtual Device S & T Disk # 1 (1) - \TOOLS
MAPSYM32.EXE        DDK Virtual Device S & T Disk # 1 (1) - \TOOLS
MASM5.EXE           DDK Virtual Device S & T Disk # 1 (1) - \TOOLS







Chapter 4  Recommended Development Process
────────────────────────────────────────────────────────────────────────────

This chapter provides an ordered outline of the steps you should follow when
developing a new device driver or virtual device. It also directs you to the
appropriate sections for the detailed information you will need to
accomplish each step.


4.1  Copy All Required Tools and Sources To Your Hard Disk

See Chapter 5, "System Setup and Tools Installation," in this guide to
assist you in copying to your hard disk all the files that you will need to
create your device driver and/or virtual device. It is important to remember
that the files have been provided in a compressed format and need to be
restored first to their original size before using them. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for further information
on how to do this.


4.2  Familiarize Yourself With the Debugging Tools

There are several debugging tools provided with and documented in the SDK:
CodeView(R) Windows (CVW), SYMDEB, and WDEB386. CodeView is used mainly for
C debugging (e.g., printer drivers) and WDEB386 is used for assembly
debugging (e.g., display drivers).

If you have the appropriate hardware necessary for running CVW, you should
try using this tool for your debugging. Otherwise, you should use the SYMDEB
debugger whenever you are debugging in the real-mode memory model and the
WDEB386 debugger when debugging in protected mode. Notice that, despite the
name, the WDEB386 debugger can be used with either the 80286, 80386, or
80486 processors. See the SDK documentation for more information on using
these debuggers.


4.3  Build a Sample Driver

The best way to test your development environment is to build one of the
sample device drivers included in this kit. To build one, follow these
general steps. More detailed instructions are given in the remaining
chapters. How to build a virtual device is described in greater detail in
the Microsoft Windows Virtual Device Adaptation Guide.


  1.  Choose the disk containing the sample driver most similar to your
      device. (See Chapter 6, "Windows 3.0 Device Driver Sources," and
      Chapter 7, "Windows 3.0 Virtual Device Sources," in this guide for a
      complete list of the sample drivers included with this kit.)

  2.  Copy from the floppy disk to your hard disk and then expand all the
      files pertaining to that driver.  (See Chapter 5, "System Setup and
      Tools Installation," for more information on these files.)

  3.  Follow the instructions in the MAKE file for that driver. Be sure to
      read the important building information in the header for the MAKE
      file before attempting to build the driver.

  4.  Modify the SYSTEM.INI file, which is located in the Windows directory,
      to set the "currently selected" driver to your newly built driver so
      that you can test it. To understand the structure and format of the
      SYSTEM.INI file, read the SYSINI.TXT file.

      The following is a debugging example using a VGA display driver as a
      sample. To debug it, enter the following command:

      WDEB386 -S:<path>VGA.SYM[-S:other symbol maps] WIN/3 (or WIN/2 or
      WIN/r)

      All debugging output is then directed to COM1, with a 9600 baud rate,
      no parity, 8 bits-per-character, and 1 stop bit. For further details
      on debugging, see the Microsoft Windows Software Development Kit.

      If you built a sample printer driver, use the Control Panel program
      provided with the Windows 3.0 retail product to install your driver
      for testing.



4.4  Use the Test Applications

To help you in the testing of your display and printer drivers, we have
included test applications and test files for use in printing from various
Windows applications. These test applications can be found under the
\TESTS\ITE directory, where ITE stands for Integrated Test Environment, and
the test files are under the \TESTS\PRINT directory.

See Section 6.2, "Display Driver Test Applications," and Section 6.4,
"Printer Driver Test Applications," in this guide for more information on
these applications and files. See Section 6.10, "Network Driver and HCT Test
Applications," for more information on the hardware compatibility test and
network test applications.

The SDK also contains several test applications that are mentioned, where
appropriate, later in this guide.


4.5  Create a Distribution Disk

Once you are convinced that you have thoroughly tested your device driver or
virtual device and have found it to be functioning properly, you should
create the distribution disk with which the end-user will install your new
device driver or virtual device. See Appendix C, "Creating Distribution
Disks for Drivers," in the Microsoft Windows Virtual Device Adaptation Guide
for the detailed steps involved.






Chapter 5  System Setup and Tools Installation
────────────────────────────────────────────────────────────────────────────

Before installing the DDK software, you must first install the SDK software.
The SDK  Installation and Update Guide contains directions for installing
the basic tools you will need for building device drivers. If you plan to
debug and test your driver, you must also install the retail Microsoft
Windows 3.0 software following the instructions in the Microsoft Windows
Users Guide.


5.1  Copy the Required Files From the Disks

Once you have installed the SDK tools, you should determine which sources
you need a nd copy these to the appropriate directory on your hard disk. The
software provided with the DDK is mainly comprised of compressed driver and
virtual device sources. There is no formal installation process for these
files. They can simply be copied from the floppy disks to your hard disk and
then expanded. (See Chapter 6, "Windows 3.0 Device Driver Sources," and
Chapter 7, "Windows 3.0 Virtual Device Sources," in this guide for detailed
descriptions of the sources provided in the DDK.)

Many of the driver source directories are organized into source trees
containing files and subdirectories. They also contain all the software
modules and MAKE and batch files necessary to build the drivers. We
recommend you use the MS-DOS XCOPY command in most cases to ensure you are
copying the directory images just as they are on the disks. Unlike the COPY
command, the XCOPY command can copy all the files contained in the entire
hierarchical file structure of the source disk to the destination disk.

The following is an example showing how to use the XCOPY command and several
of its optional switches:

  XCOPY A:\DISPLAY\1PLANE C:\DISPLAY\1PLANE /s /e /v

The /s switch tells XCOPY to copy all the subdirectories. The /e switch
ensures that empty directories get copied. The /v switch is optional but
recommended since it enables you to verify that the files are copied
correctly.

It is important to maintain the directory structure for the provided MAKE
and batch files to work properly. If you change the organization of the
files on your hard disk, be sure to make the appropriate changes to the MAKE
or batch file for building the driver. Notice that a source directory tree
may span across several of the DDK disks. Therefore, be sure to review all
the disks to ensure you have copied all the appropriate files.


5.2  Expand the Compressed Files to Their Normal Size

Notice that the files on the disks in the DDK are provided in a compressed
format to conserve disk space. However, they cannot be used in that form.
After the XCOPY command has been used to copy all the disks to your hard
disk, you must expand either all the compressed files or just the files you
need to create the device driver or virtual device you plan to develop.

To convert all the files to their normal size, we have included, in the root
directory of the Device Driver Samples and Tools disk # 1 (1), the following
four files that need to be copied to your hard disk:


  ■   TREEEX2.BAT

  ■   TREEEX3.BAT

  ■   TREEEXP.BAT

  ■   WALK.EXE


After you have copied from the disks the compressed directory that you need,
move to that directory and type the following:

  TREEEXP

This batch file will expand to their normal size all the files in the
current directory and any of its subdirectories.


5.3  Other Considerations

If you have directories for the 2.0 version tools on your hard disk, be sure
to set your MS-DOS PATH and SET commands to include, instead of or before
the 2.0 directories, all the 3.0 tools, INCLUDE, and library directories.

Also, you need to determine whether you need the device driver sources, the
virtual device sources, or both. For example, if you are writing a printer
driver, you do not need to write a virtual device because access to these
devices is already virtualized at the printer port level in the Virtual
Printer Device. However, if you are writing a display driver you probably
will need them. If your device can be shared among several virtual machines
(VMs) while running under 386 enhanced mode (e.g., if DOS standard
applications can call your device, as well as Windows), then you should
provide a virtual device. Some examples of devices for which we will provide
virtual device support in Windows include the following:


  ■   Displays

  ■   Printer or parallel ports

  ■   Serial ports

  ■   Keyboards

  ■   Pointing devices

  ■   Network API (e.g., NetBIOS)

  ■   Special hard disks

  ■   Math co-processors



5.4  Checking Your Tools Setup

To check if you have installed the tools correctly, enter (one at a time)
the following commands:

    MAKE

    LINK

    LINK386

    RC

    MAPSYM

    MASM

    MASM5

    CL

    ADDHDR

After you enter each command, the appropriate version banner for that tool
should appear on the screen. Ensure that you are using the correct version
per the following list:

    MAKE (4.07)

    LINK (5.10 for C 6.0 or 5.01.21 for C 5.1)

    LINK386 (1.00.058)

    RC (3.0)

    MAPSYM (4.11)

    MASM (5.10)

    MASM5 (5.10B)

    CL (6.0 or 5.1)

    ADDHDR (1.01)






Chapter 6  Windows 3.0 Device Driver Sources
────────────────────────────────────────────────────────────────────────────

The following sections contain detailed descriptions of the Microsoft
Windows 3.0 device driver sources provided in the DDK. The information
includes where you can find the code on the disks, the procedure for
building the driver, and the features demonstrated by the code.

The sources in this DDK are provided for your development use. You should
use the sources provided as a code base or as examples of how you should
structure your driver.

The sources are set up in subdirectories on the enclosed disks. You should
use the MS-DOS COPY or XCOPY command to copy all the files and related
subdirectories to your hard disk. It is important that you maintain the
structure as provided on the disks to ensure that the accompanying MAKE and
batch files work properly. Also, be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.

The following table provides a summary of all the source files mentioned in
this chapter and their locations on the 5.25 inch (or 3.5 inch) DDK Device
Driver Samples and Tools Disks:

╓┌──────────────────────────┌───────────┌────────────────────────────────────╖
Sources for                On disk #   Directory name
────────────────────────────────────────────────────────────────────────────
1-plane displays           1 (2) and   \DISPLAY\1PLANE
                           2 (3/4)

4-plane displays           1 (1/2)     \DISPLAY\4PLANE

8-plane displays           2 (4) and   \DISPLAY\8PLANE
                           3 (5)

Sources for                On disk #   Directory name
────────────────────────────────────────────────────────────────────────────

CGA grabbers               8 (14)      \GRABBERS\CGAHERC\CGA

Compaq Plasma              8 (14)      \GRABBERS\CGAHERC\CGA
grabbers

Hercules grabbers          8 (14)      \GRABBERS\CGAHERC\HERCULES

EGA color grabbers         8 (14)      \GRABBERS\EGA\EGACOLOR

EGA mono grabbers          8 (14)      \GRABBERS\EGA\EGAMONO

VGA color grabbers         8 (14)      \GRABBERS\VGA\VGACOLOR

8514/a grabbers            8 (14)      \GRABBERS\VGA\VGACOLOR

VGA mono grabbers          8 (14)      \GRABBERS\VGA\VGAMONO

Proportional system font   7 (13)      \FONTS\SYSTEM
Sources for                On disk #   Directory name
────────────────────────────────────────────────────────────────────────────
Proportional system font   7 (13)      \FONTS\SYSTEM

Fixed-pitch system font    7 (13)      \FONTS\FIXED

Display driver test app    7 (13)      \TESTS\ITE\BIN\DISPTEST.EXE

Display driver test app    6 (11)      \TESTS\DTA\DTA.EXE

Display driver test docs   7 (13)      \TESTS\ITE\DOCS\DISPTEST.TXT

Display driver test docs   6 (11)      \TESTS\DTA\DTA.DOC

PCL/HP LaserJet printers   3 (5)       \PRINTERS\HPPCL

Printer Font Installer     4 (7)       \PRINTERS\FINSTALL

PFM Editor                 8 (13)      \TOOLS\PFMEDIT.EXE

PostScript printers        4 (7)       \PRINTERS\PSCRIPT
Sources for                On disk #   Directory name
────────────────────────────────────────────────────────────────────────────
PostScript printers        4 (7)       \PRINTERS\PSCRIPT

MKPRN tool                 8 (13)      \TOOLS\MKPRN.EXE

Epson printers             5 (8)       \PRINTERS\RASTER\EPSON

IBM Color Printer          5 (9)       \PRINTERS\RASTER\COLOR\IBMCOLOR

Printer driver test app    7 (12)      \TESTS\ITE\BIN\PRNTTEST.EXE

Printer driver test docs   7 (12)      \TESTS\ITE\DOCS\PRNTTEST.TXT

Keyboard drivers           5 (13)      \KEYBOARD

Mouse drivers              6 (10)      \MOUSE

Communications drivers     6 (10)      \COMM

Sound drivers              6 (10)      \SOUND
Sources for                On disk #   Directory name
────────────────────────────────────────────────────────────────────────────
Sound drivers              6 (10)      \SOUND

MS-Net network driver      5 (9)       \NET

Network driver test app    7 (12)      \TESTS\NETTEST\BIN\NETTEST.EXE

Network driver test docs   7 (12)      \TESTS\NETTEST\README.TXT

Hardware compatibility     7 (13)      \TESTS\HCT
test applications

Hardware compatibility     7 (13)      \TESTS\HCT\README.DOC
test docs

────────────────────────────────────────────────────────────────────────────




6.1  Display Driver Sources

We are providing 1-, 4-, and 8-plane display driver sources in the DDK on
the Device Driver Samples and Tools disks. See the table at the beginning of
this chapter for their exact locations.

While many of the display drivers use common code, several drivers compile
with different switches. Therefore, if you build one display driver and,
then, want to build a different one, you must delete all the .OBJ files in
the following directories:

╓┌──────────────────────────────┌────────────────────────────────────────────╖
1-plane drivers                4-plane drivers
────────────────────────────────────────────────────────────────────────────
\1PLANE                        \4PLANE
\1PLANE\BW                     \4PLANE\COLOR
\1PLANE\BW\CGAHERC             \4PLANE\COLOR\EGA
\1PLANE\BW\EGA
────────────────────────────────────────────────────────────────────────────



6.1.1  1-Plane Drivers: CGA, EGA Monochrome, EGA High Resolution B&W,
Hercules, Plasma, and MCGA

All the above-mentioned drivers are 1-plane drivers. These drivers have been
modified to run bimodal (in real and protected memory modes), support
device-independent bitmaps (DIBs), and support greater than (>) 64K fonts.
They are located on the Device Driver Samples and Tools disks # 1 (2) and 2
(3/4) under the \DISPLAY\1PLANE directory.

These drivers share common code in many areas. Therefore, you need to copy
all the files in the directory structure to your hard disk. We suggest you
use the MS-DOS XCOPY command to do this. Also, be sure to expand the
compressed files to their normal size after copying them to your hard disk.
See Section 5.2, "Expand the Compressed Files to Their Normal Size," for
details on how to do this.

You need to change to the appropriate subdirectory for the driver you want
to build. Each driver directory has a MAKEIT.BAT batch file to build the
driver. You will find a batch file for each driver under the following
pathnames:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Driver                            Location
────────────────────────────────────────────────────────────────────────────
CGA                               \DISPLAY\1PLANE\BW\CGAHERC\CGA\ AKEIT.BAT

Compaq Plasma                     \DISPLAY\1PLANE\BW\CGAHERC\COMPAQ
                                  \MAKEIT.BAT

Hercules mono                     \DISPLAY\1PLANE\BW\CGAHERC\HERC\MAKEIT.BAT

EGA hi res B&W                    \DISPLAY\1PLANE\BW\EGA\EGAHIBW\MAKEIT.BAT

EGA mono                          \DISPLAY\1PLANE\BW\EGA\EGAMONO\MAKEIT.BAT

MCGA (VGAmono)                    \DISPLAY\1PLANE\BW\EGA\MCGA\MAKEIT.BAT



If your 1-plane display device is based on the CGA, EGA, or Hercules
standard, you should base your driver code on one of these drivers.
Otherwise, these sources can provide you with the sample code necessary for
you to design and plan for a new 1-plane driver.


6.1.2  4-Plane Drivers: EGA and VGA

Both the EGA and VGA driver sources use all 4 planes to support 16 colors.
These drivers have been modified to run bimodal (in real and protected
memory modes), support device-independent bitmaps (DIBs), and support
greater than (>) 64K fonts. They are located on the Device Driver Samples
and Tools disk # 1 (1/2) under the \DISPLAY\4PLANE directory.

You may also find samples of IFDEF palette management code in these sources.
However, we recommend that you do not follow these examples. See the
following section on 8-plane VGA drivers for more complete information on
sample sources with palette management support.

These drivers share common code in many areas. Therefore, you need to copy
all the files in the directory structure to your hard disk. We suggest you
use the MS-DOS XCOPY command to do this. Also, be sure to expand the
compressed files to their normal size after copying them to your hard disk.
See Section 5.2, "Expand the Compressed Files to Their Normal Size," for
details on how to do this.

You need to change to the appropriate subdirectory for either the VGA or EGA
driver and execute the MAKEIT.BAT batch file to build the driver. You will
find a batch file for each driver under the following pathnames:

╓┌────────────────────┌──────────────────────────────────────────────────────╖
Driver               Location
────────────────────────────────────────────────────────────────────────────
EGA hi res color     \DISPLAY\4PLANE\COLOR\EGA\EGAHIRES\MAKEIT.BAT
VGA                  \DISPLAY\4PLANE\COLOR\EGA\VGA\MAKEIT.BAT


If your 4-plane display device is based on either the EGA or VGA standard,
you should base your driver code on the appropriate driver. Otherwise, these
sources can provide you with the sample code necessary for you to design and
plan for a new 4-plane driver.


6.1.3  8-Plane Drivers: Video Seven VGA and 8514/a

We have provided you with sources for the Video Seven VGA and the 8514/a
drivers. These drivers use all 8 planes available on the adapter for 256
color support. The code provides a good example of the use of color-palette
management and device-independent bitmaps (DIBs). These drivers have been
adapted to run bimodal and support >64K fonts. Both driver sources can be
used as examples of how a packed-pixel driver is implemented under Windows.


To demonstrate the use of DIBs and color-palette management in these
drivers, you can run the sample application, SHOWDIB, provided in the SDK.

You will find these sources on the Device Driver Samples and Tools disks # 2
(4) and 3 (5) under the \DISPLAY\8PLANE (\V7 or \8514) directory. You need
to copy all the files in the appropriate directory structure to your hard
disk. These two drivers do not share any common code, so you must choose one
or both depending on your needs. Use the MS-DOS XCOPY command to do this.
Also, be sure to expand the compressed files to their normal size after
copying them to your hard disk. See Section 5.2, "Expand the Compressed
Files to Their Normal Size," for details on how to do this.

Notice that the \8PLANE\V7 directory contains an empty subdirectory called
\DEBUG. The \8PLANE\8514 directory also has an empty \OBJ subdirectory. You
must have these subdirectories available when you build the driver,
otherwise the MAKE files will fail.

You need to change to the appropriate subdirectory for the driver you want
to build. You will find a batch file for the Video Seven VGA driver under
the following pathname:

    \DISPLAY\8PLANE\V7\MKP.BAT

This will build the V7VGA.DRV file into the \DEBUG subdirectory.

For the 8514/a driver, change to the following subdirectory
(\DISPLAY\8PLANE\8514\SOURCE) and then type:

    MAKE DRIVER

This will build the 8514.DRV file into the \OBJ subdirectory.


6.1.4  Windows Real and Standard Mode Grabbers

The Windows real and standard mode grabbers are on the Device Driver Samples
and Tools disk # 8 (14) under the \GRABBERS directory. Since much of the
grabber code for different displays is common, you should copy the \GRABBERS
sub-directory in its entirety to your hard disk. Also, be sure to expand the
compressed files to their normal size after copying them to your hard disk.
See Section 5.2, "Expand the Compressed Files to Their Normal Size," for
details on how to do this.

The individual grabbers are in the following directories:

╓┌─────────────────────────────┌─────────────────────────────────────────────╖
Grabber                       Location
────────────────────────────────────────────────────────────────────────────
CGA and Compaq Plasma         \GRABBERS\CGAHERC\CGA
Hercules                      \GRABBERS\CGAHERC\HERCULES
EGA color                     \GRABBERS\EGA\EGACOLOR
EGA mono                      \GRABBERS\EGA\EGAMONO
VGA color and 8514/a          \GRABBERS\VGA\VGACOLOR
VGA mono (MCGA)               \GRABBERS\VGA\VGAMONO
Grabber                       Location
────────────────────────────────────────────────────────────────────────────
VGA mono (MCGA)               \GRABBERS\VGA\VGAMONO


After changing to the appropriate subdirectory, use the MAKE files provided
in each of these directories to build the grabber by typing:

    MAKE grabbername


6.1.5  System Font Sources

We have provided both the new Windows 3.0 proportional system font and the
old Windows 2.0 fixed-pitch system font. If your display driver supports
resolutions other than the display resolutions provided in Windows, you may
need to modify the system fonts for your display.

You will need to copy the \FONTS directory to your hard disk in its
entirety. Use the MS-DOS XCOPY command to do this. You will find this
directory on the Device Driver Samples and Tools disk # 7 (13). Also, be
sure to expand the compressed files to their normal size after copying them
to your hard disk. See Section 5.2, "Expand the Compressed Files to Their
Normal Size," for details on how to do this.

The Windows 3.0 proportional system fonts are hand tuned for the screen and
match the Adobe font widths for their Helv font. If you need to adapt the
system font for a display with a different horizontal resolution than the
ones supported by these fonts, you will need to adjust the font widths
accordingly. This ensures that the character will do the best "copy fit" of
the printed character with those on the screen. To modify these (.FNT) files
before building the .FON file, use the Font Editor tool provided with the
SDK.

Before you build any fonts, you must make the FONTS.OBJ file, which you can
do by running the following once from the \FONTS directory:

    MASM FONTS;

You can easily build the proportional system font files by executing the
MAKE file from the \FONTS\SYSTEM directory:

    MAKE SYSTEM

The font filenames for the new proportional system fonts are as follows:

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
Filename          Resolution
────────────────────────────────────────────────────────────────────────────
CGASYS.FON        (640 x 200) CGA
EGASYS.FON        (640 x 350) EGA high res
VGASYS.FON        (640 x 480) VGA (square pixels, 96 dpi)
8514SYS.FON       (1024 x 768) 8514/a (square pixels, 120 dpi)


In addition to the new Windows 3.0 proportional system font, the Windows 2.0
fixed-pitch system font is necessary for older Windows applications running
under Windows 3.0. All Windows applications that are not "marked" to run
with the new proportional font, or that were not developed as a Windows 3.0
application, will be given the fixed-pitch font for  displaying text in
dialog and message boxes and in the client area.

Since Windows 3.0 supports both of these files, it may be necessary for you
to also modify the appropriate fixed-pitch system font.

You will find these fonts, as well as the terminal (OEM) fixed-pitch fonts,
in the \FONTS\FIXED directory. Execute from this directory the MAKE file
called FIXED by running:

    MAKE FIXED

The font filenames for the Windows 2.0 fixed-pitch system and terminal (OEM)
fonts are as follows:

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
Filename          Resolution
────────────────────────────────────────────────────────────────────────────
CGAFIX.FON        (640 x 200) CGA
CGAOEM.FON        (640 x 200) CGA
EGAFIX.FON        (640 x 350) EGA high res
EGAOEM.FON        (640 x 350) EGA high res
VGAFIX.FON        (640 x 480) VGA (square pixels, 96 dpi)
VGAOEM.FON        (640 x 480) VGA (square pixels, 96 dpi)
VGA850.FON        (640 x 480) VGA (square pixels, 96 dpi)
Filename          Resolution
────────────────────────────────────────────────────────────────────────────
VGA850.FON        (640 x 480) VGA (square pixels, 96 dpi)
VGA860.FON        (640 x 480) VGA (square pixels, 96 dpi)
VGA861.FON        (640 x 480) VGA (square pixels, 96 dpi)
VGA863.FON        (640 x 480) VGA (square pixels, 96 dpi)
VGA865.FON        (640 x 480) VGA (square pixels, 96 dpi)
8514FIX.FON       (1024 x 768) 8514/a (square pixels, 120 dpi)
8515OEM.FON       (1024 x 768) 8514/a (square pixels, 120 dpi)


If you want to build both the system proportional and fixed fonts at the
same time, you can run the MAKE file called FONTS from the \FONTS directory.



6.2  Display Driver Test Applications

The DDK now contains a display driver test application. You will find the
complete documentation, program executable, and source to this test under
the \TESTS\ITE directory on the Device Driver Samples and Tools disk # 7
(13). The program is called DISPTEST.EXE and is in the \TESTS\ITE\BIN
subdirectory. The documentation for running the program is in
\TESTS\ITE\DOCS\DISPTEST.TXT.

The sources have been provided to aid in your debugging should you find a
problem while running the display test program. If you need to build this
program for some reason, you should follow the instructions in the
README.TXT file under the \TESTS\ITE directory.

A more comprehensive display driver test application called DTA.EXE is also
included and can be found under \TESTS\DTA on the Device Driver Samples and
Tools disk # 6 (11). The documentation for running it is in
\TESTS\DTA\DTA.DOC.


6.3  Printer Driver Sources

We are providing driver sources for our PCL/HP LaserJet and PostScript
printer drivers. In addition, sample sources for dot-matrix black/white and
color raster printers are also included. All of these sample sources provide
full support for Windows 3.0 features.

After copying all the appropriate files to your hard disk with the MS-DOS
XCOPY or COPY command, be sure to expand the compressed files to their
normal size. See Section 5.2, "Expand the Compressed Files to Their Normal
Size," for details on how to do this.


6.3.1  PCL/HP LaserJet Printer Driver

The PCL/HP LaserJet printer driver sources are being provided as examples
for using the new device initialization APIs, the Printer Font Installer,
the new Windows 3.0 controls in the printer dialog box, and the new Help
Manager. The two new APIs (ExtDeviceMode() and DeviceCapabilities()) for
device initialization are documented in the DDK in Chapter 5, "Printer
Drivers," of the Microsoft Windows Device Driver Adaptation Guide.

The device-mode dialog box should be used as an example for designing a
driver dialog box interface only for Windows 3.0. The design should follow
the guidelines described in the Systems Application Architecture, Common
User Access: Advanced Interface Design Guide. If this dialog box offers the
user any options, some mechanism should be included to enable the user to
access online help. How to use the Windows 3.0 Help Engine is described in
the Microsoft Windows Software Development Kit.

The PCL/HP LaserJet core driver sources are on the Device Driver Samples and
Tools disk # 3 (5) under the \PRINTERS\HPPCL directory. The \HPPCL directory
contains subdirectories necessary for building the driver. You can build the
driver by running the MAKEIT.BAT batch file from the \HPPCL directory.

Included in the DDK documentation set is the Microsoft Windows Printers and
Fonts Kit. You should review this document for information on font support
under the PCL/HP LaserJet printer driver and for new features that have been
incorporated into this version of the driver. For example, the Soft Font
Installer has been removed from the core driver and placed into a separate
dynamic-link library (DLL). It will install font information for both soft
and cartridge fonts. A new source tree was created for the installer (now
called the Printer Font Installer).

The Printer Font Installer source is on the Device Driver Samples and Tools
disk # 4 (7) under the \PRINTERS\FINSTALL directory. You can build the font
installer by running the MAKEIT.BAT file from the \FINSTALL directory. This
module is called by selecting the "Fonts..." button in the HPPCL driver
dialog box.

The Printer Font Metrics (PFM) Editor (PFMEDIT.EXE), also documented in the
Microsoft Windows Printers and Fonts Kit, is provided on the Device Driver
Samples and Tools disk # 8 (13) under the \TOOLS directory.


6.3.2  PostScript Printer Driver

The PostScript printer driver is also a good example of how to use the new
device initialization APIs (ExtDeviceMode() and DeviceCapabilities()), the
new Windows 3.0 controls, and the Help Manager. It can also provide an
example of Windows support for vector devices such as plotters.

Notice that the device-mode interface between the PCL/HP LaserJet driver and
the PostScript driver are consistent wherever possible. These sources also
serve as an example of the new and updated escapes documented in Chapter 11,
"Device Driver Escapes," of the Microsoft Windows Device Driver Adaptation
Guide.

This version of the driver provides RGB color PostScript support. Percent
scaling has also been added to the driver. The user can specify the scale of
the output to be printed in the printable area of the page.

Device-independent color bitmaps (DIBs) are supported directly in the
driver. This is a good example of how you can support this Windows 3.0
feature on color printer devices. For more information on DIBs, see Chapter
3, "Display Drivers: New Features," in the Microsoft Windows Device Driver
Adaptation Guide.

The option to change the Graphics Resolution has been removed from the
device-mode dialog interface. Under Windows 3.0, StretchBlt() is implemented
at the driver level. Therefore, the need to change the device resolution to
speed up bitmap output is no longer needed. See Chapter 10, "Common
Functions," in the Microsoft Windows Device Driver Adaptation Guide for more
information on the StretchBlt() enhancements. An example of its use is in
the PostScript driver source file STRCHBLT.C.

Another new GDI device driver function for scaling DIBs is the
StretchDIBits() function. See Chapter 3, "Display Drivers: New Features,"
for more information on this and other DIBs functions. An example of its use
is in the PostScript driver source file DIBTODEV.C.

The driver sources are on the Device Driver Samples and Tools disk # 8 (13)
under the \PRINTERS\PSCRIPT directory. A batch file is provided to build the
driver called MAKEPS33.BAT.

The PostScript printer driver has been modified to make it easier to add new
device support, without modifying the source files. The DDK provides a tool
called MKPRN.EXE, which is located on the Device Driver Samples and Tools
disk # 8 (13) under the \TOOLS directory. Use this tool to compile
PostScript Printer Description (PPD) files into Windows Printer Description
(WPD) files. You can then install .WPD files for the PostScript driver by
choosing the "Add Printer" option in the driver's dialog box. Once
installed, the device will be selectable from the list of printers in the
driver. See the Microsoft Windows Printers and Fonts Kit for more
information on this tool.


6.3.3  Raster Driver Sample Sources

Also included in this kit are sample sources for an older version Epson
9-pin printer and an IBM Color Printer driver. These samples have been
updated from the original 2.x samples to reflect the new 3.0 feature support
for device initialization and an enhanced printer dialog box interface.

The IBM Color Printer driver sources provide an example of supporting
3-plane color bitmaps with a color library. This library may be linked to
your driver, or you may still choose to implement a different method for
supporting color on your device.

The files are on the Device Driver Samples and Tools disks # 5 (8 / 9) under
the \PRINTERS\RASTER directory. To build the IBM Color Printer driver, you
need to run the batch file under the \PRINTERS\RASTER\COLOR\IBMCOLOR
directory:

    MAKEIT.BAT

To build the Epson printer driver, you need to run the MAKE file under the
\PRINTERS\RASTER\EPSON directory:

    MAKE EPSON

These raster driver sources should provide you with a good example for
implementing dot-matrix, ink-jet, and other raster device driver support.


6.4  Printer Driver Test Applications

The DDK includes a printer driver test application. You will find the
complete documentation, program executable, and source to this test under
the \TESTS\ITE directory on the Device Driver Samples and Tools disk # 7
(12). The program is called PRNTTEST.EXE and is in the \TESTS\ITE\BIN
subdirectory. The documentation for running the program is in
\TESTS\ITE\DOCS\PRNTTEST.TXT.

The sources have been provided to aid in your debugging should you find a
problem while running the printer test program. If you need to build this
program for some reason, you should follow the instructions in the
README.TXT file under the \TESTS\ITE directory.

Additional test files have also been provided for printing from various
Windows applications. You will find the documentation, along with the source
files for these tests, under the \TESTS\PRINT directory on the Device Driver
Samples and Tools disk # 6 (12).


6.5  Keyboard Driver Sources

The keyboard driver structure has been changed substantially since Windows
2.x. If you currently have a Windows 2.x driver, you will need to rewrite
the driver to the new structure. We suggest you start your development with
the sources provided in this kit, adding support for your specific keyboard
where appropriate.

The new keyboard sources are on the Device Driver Samples and Tools disk # 5
(13) under the \KEYBOARD directory. Copy all the files to your hard disk
with the MS_DOS XCOPY or COPY command. Also, be sure to expand the
compressed files to their normal size after copying them to your hard disk.
See Section 5.2, "Expand the Compressed Files to Their Normal Size," for
details on how to do this.

This driver also requires the INCLUDE file INT31.INC. You will need to copy
(and expand) this file from the \INCLUDE directory on the Virtual Device
Samples and Tools disk # 1 (1). Make sure this file is in your INCLUDE path.


There is a batch file provided to build the IBM-style keyboard driver and
all the international tables for foreign keyboards. To build the drivers,
you need to run the MAKEKEYB.BAT batch file in the \KEYBOARD directory.


6.6  Mouse Driver Sources

The mouse driver has few changes from the version shipped with the Windows
2.1 DDK. The driver was only modified to run correctly in the protected-mode
memory model.

The Microsoft Mouse (or Microsoft Mouse-compatible) driver sources are on
the Device Driver Samples and Tools disk # 6 (10). Copy all the files from
the \MOUSE directory to your hard disk with the MS-DOS XCOPY or COPY
command. Also, be sure to expand the compressed files to their normal size
after copying them to your hard disk. See Section 5.2, "Expand the
Compressed Files to Their Normal Size," for details on how to do this.

To build the driver, run the following:

    MAKE MOUSE


6.7  COMM Driver Sources

This driver has been enhanced to support COM1 through COM4 and dual-mode
execution with Windows 3.0.

The COMM driver sources are on the Device Driver Samples and Tools disk # 6
(10). Copy all the files from the \COMM directory to your hard disk with the
MS-DOS XCOPY or COPY command. Also, be sure to expand the compressed files
to their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.

This driver also requires the INCLUDE file INT31.INC. You will need to copy
(and expand) this file from the \INCLUDE directory on the Virtual Device
Samples and Tools disk # 1 (1). Make sure this file is in your INCLUDE path.


To build the driver, run the following:

    MAKE COMM


6.8  Sound Driver Sources

The sound driver has few changes from the version shipped with the Windows
2.1 DDK. The driver was only modified to run correctly in the protected-mode
memory model.

The sound driver sources are on the Device Driver Samples and Tools disk # 6
(10). Copy all the files from the \SOUND directory to your hard disk with
the MS-DOS XCOPY or COPY command. Also, be sure to expand the compressed
files to their normal size after copying them to your hard disk. See Section
5.2, "Expand the Compressed Files to Their Normal Size," for details on how
to do this.

To build the driver, run the following:

    MAKE SOUND


6.9  Network Driver Sources

These network driver sources are new for Windows 3.0 and enable the Windows
File Manager, Print Manager, and Control Panel to perform network functions
such as connecting to network drivers.

The MS-Net network driver sources are on the Device Driver Samples and Tools
disk # 5 (9). Copy all the files from the \NET directory to your hard disk
with the MS-DOS XCOPY or COPY command. Also, be sure to expand the
compressed files to their normal size after copying them to your hard disk.
See Section 5.2, "Expand the Compressed Files to Their Normal Size," for
details on how to do this.

To build the driver, run the following:

    MAKE MSNET


6.10  Network Driver and HCT Test Applications

The DDK includes a network driver test application. You will find the
documentation, program executable, and source for this test under the
\TESTS\NETTEST directory on the Device Driver Samples and Tools disk # 7
(12). The program is called NETTEST.EXE and is in the \TESTS\NETTEST\BIN
subdirectory.

The sources have been provided to aid in your debugging should you find a
problem while running the network test program. If you need to build this
program for some reason or need documentation for running the program, you
should follow the instructions in the README.TXT file under the
\TESTS\NETTEST directory.

The DDK also includes a hardware compatibility test application. This test
suite contains a series of testing components that will help to verify that
your hardware is compatible with Windows 3.0. You will find the
documentation, program executables, and sources for these tests under the
\TESTS\HCT directory on the Device Driver Samples and Tools disk # 7 (13).
The documentation for running the program is in \TESTS\HCT\README.DOC.






Chapter 7  Windows 3.0 Virtual Device Sources
────────────────────────────────────────────────────────────────────────────

These virtual device sources are provided to you to begin development for
Windows 3.0 386 enhanced mode virtual device support. Each source directory
contains one or more .ASM source files, a .DEF file, and two MAKE files. The
first MAKE file is usually called MAKEFILE (or MAKEVGA for the VGA VDD) and
is used with Microsoft NMAKE or with other Unix-style MAKE utilities. The
second one, called by the name of the file being produced (e.g., VPD), is
used with the standard Microsoft MAKE utility. You can use either MAKE file
to produce virtual devices. Notice, however, that NMAKE is not provided in
the DDK. It is included, though, with some Microsoft language products, such
as Microsoft C Professional Development System version 6.0.

These MAKE files offer examples of the proper use of the tools and options,
and of the general build procedures that should be followed in developing
virtual devices. Also, be sure to expand the compressed files to their
normal size after copying them to your hard disk. See Section 5.2, "Expand
the Compressed Files to Their Normal Size," for details on how to do this.

Notice that, if you encounter random results or problems when building these
virtual devices, it may be due to a low-memory situation. This can be
resolved by creating more memory for your system by removing such things as
TSRs and Network software.

The following table provides a summary of all the source files mentioned in
this chapter and their locations on the 5.25 inch (or 3.5 inch) DDK Virtual
Device Samples and Tools disks:

╓┌───────────────────────┌──────────┌────────────────────────────────────────╖
Sources for             On disk #  Directory name
────────────────────────────────────────────────────────────────────────────
CGA displays            1 (2)      \VDDCGA
Compaq Plasma           1 (2)      \VDDCGA
EGA displays            1 (2)      \VDDEGA
VGA displays            1 (2)      \VDDEGA
8514/a display          1 (2)      \VDDEGA
Hercules display        1 (2)      \VDDHERC
CGA grabbers            2 (3)      \GRABBERS
Sources for             On disk #  Directory name
────────────────────────────────────────────────────────────────────────────
CGA grabbers            2 (3)      \GRABBERS
EGA grabbers            2 (3)      \GRABBERS
VGA grabbers            2 (3)      \GRABBERS
8514/a grabbers         2 (3)      \GRABBERS
Hercules grabbers       2 (3)      \GRABBERS
ATT/Compaq grabbers     2 (3)      \GRABBERS
Grabber font files      2 (3)      \OEMFONTS
DMA devices             1 (2)      \VDMAD
EBIOS devices           1 (1)      \EBIOS
Hard Disk devices       1 (2)      \VHD
Keyboard devices        1 (2)      \VKD
Mouse devices           2 (2)      \VMD
NetBIOS devices         2 (3)      \VNETBIOS
DOS network devices     2 (3)      \LDOSNET
ROM BIOS devices        2 (3)      \BIOSXLAT
Paging devices          1 (1)      \PAGESWAP
Printer devices         2 (3)      \VPD
Communications devices  2 (2)      \VCD
COM Buffer devices      2 (2)      \COMBUFF
Sources for             On disk #  Directory name
────────────────────────────────────────────────────────────────────────────
COM Buffer devices      2 (2)      \COMBUFF
Floppy drive devices    2 (2)      \VFD
────────────────────────────────────────────────────────────────────────────



7.1  The Display Devices (CGA, EGA, VGA, 8514/a, HERC)

This device virtualizes the video display and is the most complex of the
devices supplied in the DDK.

The various VDD sources are on the Virtual Device Samples and Tools disks
under the directories \VDDCGA, \VDDEGA and \VDDHERC. See the table at the
beginning of this chapter for a complete list of all the sources and their
locations. Be sure to expand the compressed files to their normal size after
copying them to your hard disk. See Section 5.2, "Expand the Compressed
Files to Their Normal Size," for details on how to do this.

The \VDDCGA source tree only contains files to build the CGA VDD. This VDD
also provides support for the Compaq Plasma display, which is sometimes
called IDC.

The \VDDEGA source tree uses conditional assembly to build three separate
virtual devices to handle EGA, VGA, and 8514/a video adapters.

The \VDDHERC source tree only contains files to build the Hercules VDD.

You will find different MAKE files for each of the VDDs in their appropriate
directories. The following is a list of the MAKE filenames (for NMAKE and
DOS MAKE) for each VDD:

╓┌─────────┌─────────┌───────────────────────────────────────────────────────╖
Adapter   NMAKE     DOS MAKE
────────────────────────────────────────────────────────────────────────────
CGA/IDC   MAKEFILE  VDDCGA
EGA       MAKEEGA   VDDEGA
VGA       MAKEVGA   VDDVGA
8514/a    MAKE8514  VDD8514
Hercules  MAKEFILE  VDDHERC


Notice that, if you are using NMAKE, you may need to rename the appropriate
NMAKE filename to "MAKEFILE." Some versions of NMAKE always use the
"MAKEFILE" filename.

The EGA, VGA, and 8514/a VDDs all share common code but compile with
different switches. Therefore, if you build one VDD and, then, want to build
a different one, you must delete all the .OBJ files in the VDDEGA directory.



7.2  The Display/Windows Interface (GRABBER)

The grabbers for 386 enhanced mode are different from those used when
running in real or standard mode. These are responsible for rendering a
virtual machine's display context within a window. Therefore, they are
closely bound with the virtual display device (VDD). Each VDD needs to be
accompanied by its own grabber as a linked pair.

The sources are on the Virtual Device Samples and Tools disk # 2 (3) under
the \GRABBERS directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.

The DDK contains sources for CGA, EGA, VGA, 8514/a, Compaq Plasma, and
Hercules grabbers. Since they are all built in the same directory, different
MAKE files are provided for each. The following is a list of the MAKE
filenames (for NMAKE and DOS MAKE) for each grabber:

╓┌──────────────┌─────────┌──────────────────────────────────────────────────╖
Adapter        NMAKE     DOS MAKE
────────────────────────────────────────────────────────────────────────────
CGA            MAKECGA   CGAGRB
EGA            MAKEFILE  EGAGRB
VGA            MAKEVGA   VGAGRB
8514/a         MAKE8514  8514GRB
Hercules       MAKEHERC  HERCGRB
ATT(R)/Compaq  MAKEPLSM  PLSMGRB


Notice that, if you are using NMAKE, you may need to rename the appropriate
NMAKE file to "MAKEFILE." Some versions of NMAKE always use the "MAKEFILE"
filename.

The font files used by the grabbers when running in a window are provided in
this kit. You will find them on the Virtual Device Samples and Tools disk #
2 (3) under the \OEMFONTS directory structure.

Before building the OEM fonts, you need to create the FONTS.OBJ file by
running the following from the \OEMFONTS directory:

    MASM FONTS;

Once this is completed, you run the MAKE file from the \FONTS directory:

    MAKE FONTS

To build these files properly, you need to make sure you have WINSTUB.EXE,
which is provided in the SDK, in your MS-DOS path before building the
grabbers and/or OEM font files.


7.3  The DMA Device (VDMAD)

This device handles direct memory access (DMA) devices. Virtual devices can
support hardware cards that use DMA by calling the DMA services provided by
the VDMAD. These services are documented in Chapter 41, "Virtual DMA Device
(VDMAD) Services," of the Microsoft Windows Virtual Device Adaptation Guide.


See Section 7.15, "The Floppy Drive Device (VFD)," for an example of a
device that uses the DMA services. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.

The VDMAD should not normally need to be customized; it should only need to
be altered to support DMA on machines with non-standard architectures.

The sources are on the Virtual Device Samples and Tools disk # 1 (2) under
the \VDMAD directory structure.


7.4  The EBIOS Device (EBIOS)

This device detects the extended BIOS data region on machines that use it
such as the PS/2, identifies it, and ensures that it is reserved as global
memory.

It will probably not need to be modified. However, it is provided here as an
example of a relatively simple device that passively accommodates something
in the environment.

The sources are on the Virtual Device Samples and Tools disk # 1 (1) under
the \EBIOS directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.5  The Hard Disk Device (VHD)

This device virtualizes access to the hard disk. It also provides direct
access to the disk for demand paging on compatible hardware.

This should be modified to support incompatible hard disks.

The sources are on the Virtual Device Samples and Tools disk # 1 (2) under
the \VHD directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.6  The Keyboard Device (VKD)

This is one of the more complicated virtual devices, as it not only
virtualizes the keyboard but also interacts with the Windows shell to handle
hotkeys and other special functions. It should be modified to support other,
nonstandard keyboards.

The sources are on the Virtual Device Samples and Tools disk # 1 (2) under
the \VKD directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.7  The Mouse Device (VMD)

This device virtualizes the mouse and maps the INT 33H API between protected
mode and virtual 8086 mode.

The sources are on the Virtual Device Samples and Tools disk # 2 (2) under
the \VMD directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.8  The NetBIOS Device (VNETBIOS)

This device maps the NetBIOS API between protected mode and virtual 8086
mode, enabling Windows applications to access the network using NetBIOS
calls. It also handles asynchronous network transactions by mapping the
application's buffer into global memory, so the network software can access
it when the asynchronous event occurs, even if another virtual machine is
running at that time.

This should be modified by network vendors who extend the standard NetBIOS
interface and should also serve as a guide to writing virtual devices for
other types of network API.

The sources are on the Virtual Device Samples and Tools disk # 2 (3) under
the \VNETBIOS directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.9  The Local DOS Network Device (LDOSNET)

This device is not part of the Windows 3.0 retail package. However, it is
included in the DDK as a sample source to demonstrate some mechanisms used
in supporting network functionality.

In general, this device manages network connections and ensures network
integrity across all virtual machines.

This source was included in previous DDK releases under the name DOSNET.
However, it has been replaced in the Windows 3.0 retail package by a new
DOSNET device that makes network connections global across all virtual
machines. The version included here keeps connections local, but allows
inheritance. It has, therefore, been renamed LDOSNET to avoid confusion.

The device could serve as a model for handling some types of networks. In
general, however, we recommend that network connections be global instead of
local.

On MS-Net networks, the enhanced Windows LDOSNET device provides the
following support:


  ■   If a connection exists before Windows is started, it is global and
      cannot be deleted from within Windows or any VMs.

  ■   If the user makes a connection in Windows and, then, spawns off
      another virtual machine, that VM inherits Windows' connections as of
      that time.

  ■   If a VM has inherited a connection from Windows, it cannot delete it.

  ■   If any VM exists that inherited a particular connection from Windows,
      Windows cannot delete that connection.


The sources are on the Virtual Device Samples and Tools disk # 2 (3) under
the \LDOSNET directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.10  The BIOS Device (BIOSXLAT)

This device maps the ROM BIOS API between protected mode and virtual 8086
mode, thereby providing Windows applications and device drivers with access
to ROM BIOS services.

This should be modified when there are non-standard ROM BIOS calls that pass
pointers to memory and that are used by Windows applications or device
drivers.

The sources are on the Virtual Device Samples and Tools disk # 2 (3) under
the \BIOSXLAT directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.11  The Paging Device (PAGESWAP)

This device is used by 386 enhanced mode for demand paging at either the INT
21H or INT 13H level.

The sources are on the Virtual Device Samples and Tools disk # 1 (1) under
the \PAGESWAP directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.12  The Printer Device (VPD)

The printer device virtualizes access to the parallel ports. If a second
virtual machine tries to access one of the ports while it is being used by
another application, a contention dialog is presented to the user that
allows them to resolve the ownership dispute.

The sources are on the Virtual Device Samples and Tools disk # 2 (3) under
the \VPD directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.13  The COMM Device (VCD)

This device virtualizes the standard serial ports on ISA type machines. It
supports COM1 through COM4.

It should be modified to add support for different chip sets or for
additional COM ports.

The sources are on the Virtual Device Samples and Tools disk # 2 (2) under
the \VCD directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.14  The COM Buffer Device (COMBUFF)

This device is responsible for buffering COM I/O. It is closely tied to the
Virtual COMM Device (VCD).

It can be modified to support alternative serial communications ports or to
use specific XON/XOFF protocols instead of relying on the applications to do
so.

The sources are on the Virtual Device Samples and Tools disk # 2 (2) under
the \COMBUFF directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.


7.15  The Floppy Drive Device (VFD)

This device is responsible for the removal of special timer port trappings
to ensure that copy-protection schemes work properly, and for communications
with the VDMAD to synchronize DMA channel usage.

The sources are on the Virtual Device Samples and Tools disk # 2 (2) under
the \VFD directory structure. Be sure to expand the compressed files to
their normal size after copying them to your hard disk. See Section 5.2,
"Expand the Compressed Files to Their Normal Size," for details on how to do
this.
```

{% endraw %}
