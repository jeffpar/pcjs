---
layout: page
title: "MS Windows 3.0 SDK Articles"
permalink: /documents/books/mspl13/win/w3sdkart/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft Window's - WLO








────────────────────────────────────────────────────────────────────────────
                        Microsoft(R) Window's - WLO

                                Version 3.0
────────────────────────────────────────────────────────────────────────────




 Information in this document is subject to change without notice and does
not represent a commitment on the part of Microsoft Corporation. The
software and/or databases described in this document are furnished under a
license agreement or nondisclosure agreement. The software and/or databases
may be used or copied only in accordance with the terms of the
agreement. The purchaser may make one copy of the software for backup
purposes. No part of this manual and/or database may be reproduced or
transmitted in any form or by any means, electronic or mechanical,
including photocopying, recording, or information storage and retrieval
systems, for any purpose other than the purchaser's personal use, without
the written permission of Microsoft Corporation.


(C) Copyright Microsoft Corporation, 1990. All rights reserved.

Printed in the United States of America.


Patent #4,825,358

Patent #4,779,187


Microsoft(R), MS(R), MS-DOS(R), the Microsoft logo, and InPort(R)
are registered trademarks, and Windows(tm) is a trademark, of Microsoft
Corporation.


SideKick(R) is a registered trademark of Borland International, Inc.


IBM(R), PC/AT(R), and PS/2(R) are registered trademarks of
International Business Machines Corporation.






Chapter 1  Overview and Installation

     1.1   Introduction
     1.2   System Requirements
     1.3   Software Requirements
     1.4   Disk Contents
     1.5   WLO Development Kit Installation
     1.6   Conversion Tools

Chapter 2  Converting Applications

     2.1   Introduction
     2.2   The WLO Mapping Layer
     2.3   Building Converted Applications
     2.4   Building Converted Dynamic-Link Libraries
     2.5   Debugging
     2.6   Adding OS/2 Features
     2.7   Shipping a Converted Application

Chapter 3  Limitations on Converted Applications

     3.1   Overview
     3.2   Mixed OS/2 and Windows Graphics
     3.3   Differences in Windows Graphics Functions
     3.4   Windows Sound and Profile Functions
     3.5   EMS and XMS Support
     3.6   Exported Selectors and Port Input and Output
     3.7   Multiple Instances of the Same Application
     3.8   Hook Procedures for System Hooks
     3.9   Windows Debugging Features
     3.10  File Access and Compatibility Mode in OS/2
     3.11  OpenFile Return Value
     3.12  Menus in OS/2
     3.13  TextOut Limitations
     3.14  SetMessageQueue and Code Pages
     3.15  Unsupported Windows Functions
     3.16  BIOS/DOS Interrupts
     3.17  Real-Mode C Run-time Functions



Chapter 1  Overview and Installation
────────────────────────────────────────────────────────────────────────────




1.1  Introduction

The Microsoft(R) Windows(tm) Libraries for OS/2 Development Kit (the WLO
Development Kit) provides a set of software tools you can use to build
Operating System/2 Presentation Manager applications from Microsoft Windows
version-3.0-compatible source code. The WLO Development Kit offers a fast
and easy conversion path from Windows to OS/2 Presentation Manager. It also
enables you to enhance Windows applications with OS/2 features.

This manual, the Microsoft Windows Libraries for OS/2 Programmer's Guide,
describes the WLO Development Kit, provides instructions for installing the
WLO Development Kit software, and briefly explains the conversion process.
In addition, the manual discusses limitations on converting applications and
describes the WLO Development Kit sample applications and dynamic-link
libraries.

Typically, converting an application from Windows to OS/2 requires
significant changes throughout the source code, including function-name
alterations and parameter and message reordering. The WLO Development Kit
simplifies this process, enabling you to produce a Presentation Manager
version of your application quickly and with minimal development effort. In
some cases, all you need to do is relink your application with the WLO
import libraries and then bind the Windows version 3.0 resources to the
newly relinked executable file, using the Windows version 3.0 Resource
Compiler. Usually, you will not have to recompile the source code or
resource file.

Applications converted with the WLO Development Kit will run as Presentation
Manager applications with OS/2 versions 1.21 and later. After using the WLO
Development Kit, you will have two versions of your application: the
original Windows version and the converted version that runs with OS/2.

This WLO Development Kit provides libraries and mapping-layer dynamic-link
libraries for use with OS/2 version 1.21. These libraries map Windows
functions into their corresponding OS/2 functions, allowing your Windows
application to run as a Presentation Manager application. Although relinking
your application is the simplest conversion method, you can also change your
application source code to take advantage of OS/2-specific features such as
multitasking and improved memory management.

────────────────────────────────────────────────────────────────────────────
Note

This WLO Development Kit provides a stable mapping layer on which to base
released products. However, since the product is not yet in its final form,
it may still contain some inconsistencies with Windows version 3.0. It is
strongly recommended that, before releasing your relinked WLO application,
you thoroughly test it on the target OS/2 system, using the dynamic-link
libraries in the WLO mapping layer. If you encounter few or no problems, you
may decide to work around the problems or wait for a subsequent release of
the WLO Development Kit. In either case, please report any difficulties or
problem areas by means of your Microsoft OnLine account.
────────────────────────────────────────────────────────────────────────────




1.2  System Requirements

To run the WLO Development Kit software, you must have the following minimum
system-hardware configuration. You may use either the DOS or the OS/2
development environment.

────────────────────────────────────────────────────────────────────────────
Note

Microsoft documentation uses the term "OS/2" to refer to the OS/2 systems
developed jointly by Microsoft and IBM─Microsoft Operating System/2 (MS(R)
OS/2) and IBM OS/2. Similarly, the term "DOS" refers to the MS-DOS(R) and
IBM PC-DOS operating systems. The name of a specific operating system is
used when it is necessary to note features that are unique to that system.
────────────────────────────────────────────────────────────────────────────



DOS Development Environment


  ■   An Industry Standard Architecture (ISA) computer such as the IBM PC/AT
      and compatible computers; a Micro Channel Architecture (MCA) computer
      such as the IBM PS/2 and compatible computers; or an Extended Industry
      Standard Architecture (EISA) computer

  ■   At least 640 kilobytes of memory

  ■   A hard disk (30 megabytes or greater)

  ■   A disk drive capable of using 5.25-inch 1.2-megabyte disks or 3.5-inch
      1.44-megabyte disks



OS/2 Development Environment


  ■   An Industry Standard Architecture (ISA) computer such as the IBM PC/AT
      and compatible computers; a Micro Channel Architecture (MCA) computer
      such as the IBM PS/2 and compatible computers; or an Extended Industry
      Standard Architecture (EISA) computer

  ■   At least 4 megabytes of memory

  ■   A hard disk (40 megabytes or greater)

  ■   A disk drive capable of using 5.25-inch 1.2-megabyte disks or 3.5-inch
      1.44-megabyte disks




1.3  Software Requirements

To run the WLO Development Kit software, you must have the following
additional software. You may use either the DOS or the OS/2 development
environment.

DOS Development Environment


  ■   DOS version 3.0 or later

  ■   Microsoft Windows Software Development Kit (SDK) version 3.0

  ■   Microsoft(R) C Optimizing Compiler version 5.1 or 6.0



OS/2 Development Environment


  ■   Microsoft Windows Software Development Kit (SDK) version 3.0

  ■   Microsoft C Optimizing Compiler version 5.1 or 6.0

  ■   OS/2 version 1.21 or later

  ■   Microsoft OS/2 Presentation Manager Toolkit version 1.2 (strongly
      recommended)




1.4  Disk Contents

The complete set of WLO tools, libraries, and sample code is included in
both 5.25-inch and 3.5-inch disk formats. For a list of all the WLO
Development Kit files and their exact descriptions and locations, see the
PACKING.LST file on Disk 1.


1.5  WLO Development Kit Installation

To install the WLO Development Kit, you use the Setup program found on Disk
1. The Setup program, which runs with either DOS or OS/2, installs the WLO
Development Kit on your hard disk.

The WLO Development Kit is designed to work in tandem with the Windows
Software Development Kit version 3.0 and the C compiler tools and libraries.
In Windows, real-mode versions of the C run-time libraries are used; WLO
applications rely on equivalent protected-mode libraries. The Setup program
builds and installs the appropriate memory models of the WLO C run-time
libraries that you require. You may rerun Setup at any time to build
additional memory-model WLO C run-time libraries without reinstalling the
entire WLO Development Kit. Setup also provides an option for library
installation only.

Various system setups are possible and affect the installation of the WLO
Development Kit. Since you can convert your application in either a DOS or
an OS/2 development environment, your installation choice depends on your
development plans. If you are interested in doing a simple conversion─with
no additional OS/2 features─follow the instructions in Section 1.5.1, "DOS
Installation." If you currently do your Windows version 3.0 development on
an OS/2 system or plan to add OS/2-specific features, follow the
instructions in Section 1.5.2, "OS/2 Installation."


1.5.1  DOS Installation

To install the WLO Development Kit on a DOS system, follow these steps:

  1.  Be sure that the Windows Software Development Kit version 3.0 and the
      Microsoft C Optimizing Compiler (version 5.1 or 6.0) are installed.

  2.  Insert Disk 1 in drive A.

  3.  Move to drive A by typing the following, and then press the ENTER key:

a:


  4.  Type the following, and then press ENTER:

setup

      Follow the directions provided in the Setup program for building the
      WLO import and C run-time libraries.

  5.  Modify the LIB and BIN environment variables in the CONFIG.SYS file so
      that they reference the directories \eWLO\eLIB and \eWLO\eBIN,
      respectively─as in the following example:

set LIB=c:\wlo\lib;...
set BIN=c:\wlo\bin;...



After Setup is finished installing the WLO Development Kit on the DOS
system, rerun Setup on the target OS/2 system to install only the WLO
mapping-layer dynamic-link libraries. (Setup provides an option for doing
this.) Then follow the instructions provided in Setup.

After relinking the Windows application with the WLO import and C run-time
libraries on the DOS system, test it on the destination OS/2 system.


1.5.2  OS/2 Installation

It is common to develop Windows applications with OS/2. The advantage of
using the WLO Development Kit with OS/2 is that you can do the normal
edit-compile-debug cycle on the same system, which is useful if you are
planning to enhance your Windows application by adding calls to OS/2
functions.

The Microsoft C Optimizing Compiler provides tools that function in both DOS
and OS/2. (The Windows Software Development Kit version 3.0 also provides
such tools.) Only Windows Dialog Editor, Icon Editor, and Font Editor
require that Windows be present. If you must use these tools, then you must
run Windows either in the DOS session of OS/2, in DOS itself (as started
from dual boot), or on another system. The Presentation Manager versions of
these tools do not create Windows-compatible resources.

To install the WLO Development Kit on an OS/2 system, follow these steps:

  1.  Be sure that the Windows SDK version 3.0 and the Microsoft C
      Optimizing Compiler (version 5.1 or 6.0) are installed.

  2.  Insert Disk 1 in drive A.

  3.  Move to drive A by typing the following, and then press the ENTER key:

a:



  4.  Type the following, and then press ENTER:

setup

      Follow the directions presented in the Setup program for building the
      WLO import and C run-time libraries.

  5.  Modify the LIB and BIN environment variables in the CONFIG.SYS file so
      that they reference the directories \eWLO\eLIB and \eWLO\eBIN,
      respectively─as in the following example:

set LIB=c:\wlo\lib;...
set BIN=c:\wlo\bin;...



  6.  Modify the LIBPATH variable in CONFIG.SYS to include the directory
      \eWLO\eDLL\eDEBUG. Alternatively, copy the contents of this
      dynamic-link library directory into the directory \eOS2\eDLL on drive
      C.

  7.  Before running the relinked application, use OS/2 Control Panel to
      install the WLO fonts located in the directory \eWLO\eBIN on the
      destination OS/2 system.




1.6  Conversion Tools

The WLO Development Kit provides several tools to assist in the conversion
of Windows applications. The following sections describe these tools and how
they are used.


1.6.1  The Convicon Tool

The Convicon tool converts a Windows icon to a Presentation Manager icon. It
takes an icon file  CREATED BY WINDOWS ICON EDITOR AND PRODUCES A
resource file (.RES) that is compatible with Presentation Manager. This
capability is useful for WLO applications for which you want to display
icons in OS/2 Desktop Manager group windows and in OS/2 File Manager.
Windows icons are not compatible with Presentation Manager icons, therefore
OS/2 displays the default application icon for any WLO application that has
Windows icons.

There are two ways to add a Presentation Manager icon to your WLO
application. If you have the MS OS/2 Presentation Manager Toolkit version
1.2, you can create a Presentation Manager icon resource by using MS OS/2
Icon Editor. Alternatively, you can create an icon with the Windows Icon
Editor and convert it to Presentation Manager format with Convicon. Both
methods produce an icon file compatible with Presentation Manager.

Once you have converted the icon file, you attach it to the WLO executable
file (.EXE file) as an  ON ATTRIBUTE, ONE OF MANY OS/2 EXTENDED
ATTRIBUTES

(EA). There are two ways to accomplish this:

Method 1

Use MS OS/2 File Manager. Follow these steps:

  1.  Start File Manager.

  2.  Select the WLO application file to attach the icon to.

  3.  Choose the Properties command in the File menu. The command displays a
      dialog box.

  4.  Click the Icon button.

  5.  Type the full path and filename of the converted icon file in the text
      box.

  6.  Click the OK button. The command attaches the icon as an extended
      attribute to the selected application.



Method 2

Use Wloinst, a stand-alone utility provided with the WLO Development Kit.
The Wloinst utility attaches the icon, producing the same result as would
using File Manager, but it can be "bundled" in your application's
installation program. Wloinst, which consists of several installation helper
routines, can also install the WLO mapping-layer dynamic-link libraries. For
more information about installing these libraries, see Chapter 2,
"Converting Applications."

The following example shows how to use Wloinst to attach a Presentation
Manager icon file to an executable file. For this example, assume that the
executable file, APPNAME.EXE, and the icon file, APPNAME  «O, HAVE ALREADY»

been copied to the APPS directory on drive C.

wloinst -i c:\apps\appname


Note that the -i switch takes only a drive name and path (C:\eAPPS) and a
root filename (APPNAME). The root filename must consist of 1 to 8 characters
and must be the same for both the application's executable file and its icon
file.

Wloinst attaches APPNAME  O AS AN EXTENDED ATTRIBUTE TO APPNAME.EXE. NOW,
when you add the application to a Desktop Manager group window, OS/2
displays the icon.

Once you attach a converted icon to the WLO application file, use the OS/2
copy command to make copies of the application file. This command copies the
icon as well as the file, so each new file has its own icon. In the
installation program for the application, use the OS/2 API function DosCopy
to ensure that the attached icon is copied with the application file during
installation. It is also possible to use Wloinst to attach an
extended-attribute icon after the application's .EXE file has been copied to
the hard disk.

The following example shows how to convert a Windows icon file WINICON  O
to a Presentation Manager icon file PMICON  O:

convicon winicon.ico pmicon.ico



This command creates a new icon file in the Presentation Manager format. You
can then attach the new icon file to an application file.


1.6.2  The Convfont Tool

Windows and OS/2 use different font-file formats. The Convfont tool takes a
Windows OS/2 Control Panel to install the new Presentation Manager
application, including applications converted with the WLO Development Kit.
Convfont is provided for those Windows applications that depend on specific
custom Windows fonts.

In addition to converting Windows can generate with the MS OS/2 Presentation
Manager Toolkit version 1.2).

To convert a Windows font, use a command of the following form:

convfont Windows-file.fon Presentation_Manager_fontname

For example, the following command line generates a Presentation Manager

convfont tmsre.fon times.

--------------------------------->>> MISSING TEXT???
OS/2 requires that the module name (which is set internally by Convfont) in
the font file be the same as the base name of the font file. You cannot
rename the
--------------------------------->>> MISSING TEXT???

To generate the component -f switch:

convfont -f tmsre.fon times



This command generates TIMESTIMES00included in the TMSREtaking the first
five characters of the font name and adding a two-digit number to them.

Convfont may issue the following warnings:

Message                           Meaning
────────────────────────────────────────────────────────────────────────────

FACE NAME TOO LONG                The face name will be truncated.

FONT TOO LARGE                    The font will not be converted.

STRANGE FONT CHARACTERISTICS      Some font characteristics are
                                  contradictory or too large. These
                                  characteristics will be converted, but
                                  the resulting font may be corrupted.



1.6.3  The Convdll Tool

The Convdll tool helps convert Windows dynamic-link libraries to
dynamic-link libraries compatible with OS/2. Convdll adds code to your
Windows dynamic-link library so that the WLO Development Kit can keep track
of links and "unlinks" to the dynamic-link library. Convdll also rearranges
registers so that the library is initialized correctly. For more details on
how to use Convdll, see Chapter 2, "Converting Applications."





Chapter 2  Converting Applications
────────────────────────────────────────────────────────────────────────────




2.1  Introduction

This chapter explains the Windows Libraries for OS/2 mapping layer and
describes the process of converting a Windows application or dynamic-link
library so that it will run with OS/2.


2.2  The WLO Mapping Layer

The WLO Development Kit provides a run-time translation layer, called the
mapping layer, which maps Windows functions into OS/2 functions. Internally,
the application operates as if it were running with Windows, while
externally, it looks, feels, and operates like a Presentation Manager
application.

Windows and OS/2 share architectural design characteristics that make it
possible to map Windows functionality into OS/2. (You need not rely on
virtualization or emulation.) Windows and OS/2 rely on similar concepts of
dynamic linking, resource management, and windowing. Specifically, Windows
and OS/2 share an executable file format known as the "new" executable file
format (new as compared with the DOS executable file format).

The Windows and OS/2 loaders operate similarly in the way they dynamically
fix up references to routines in dynamic-link libraries (such as system
functions). The way the loaders manipulate resources is also similar.
Because OS/2 directly supports the mechanics of loading Windows executable
files, the mapping layer need only translate Windows functions into their
OS/2 equivalent operations.

By using the WLO Development Kit, you can create (by linking) 16-bit OS/2
applications that rely on OS/2 dynamic-link-library counterparts to the
Windows system dynamic-link libraries: GDI, KERNEL, USER, KEYBOARD, SYSTEM,
and SOUND. Some Windows functions can be mapped one-to-one with their direct
OS/2 equivalents. Other functions are simply "stubbed out," as is the case
for the sound functions, which have no OS/2 equivalents. For a complete list
of unsupported functions, see Chapter 3, "Limitations on Converted
Applications." For the remaining functions, the mapping layer retains
context information across multiple Windows functions. Window handles,
device contexts, resources, and so forth, are managed by the mapping layer
in such a way that the relinked application behaves as if it were running
with Windows even though it is running with OS/2.


2.2.1  Interrupt Support

Presentation Manager applications cannot call system interrupts directly.
WLO applications must also follow this rule. During the WLO conversion
process, you must replace all such direct interrupt calls with their
equivalent system functions. You should change all direct Interrupt 21H
calls or other direct system interrupts to their equivalent C run-time or
OS/2 functions, or to the new Windows version 3.0 function Dos3Call. You
should also use the Windows version 3.0 function NetBiosCall instead of
using network-related interrupts. For an example of how to use the Dos3Call
function to replace direct interrupt calls, see the sample Clock application
provided with the WLO Development Kit.

The WLO relinking process uses the WLO customized protected-mode C run-time
libraries instead of the real-mode Windows versions. These libraries use
appropriate OS/2 functions for operating-system services. Windows version
3.0 also provides system functions such as _lopen, _lclose, _lread, _lwrite,
as well as the new function, Dos3Call. These functions are also remapped to
their OS/2 equivalents in the WLO mapping layer and in protected-mode
libraries. This remapping means that the new Windows functions and the
operating-system-level functions in the C run-time libraries are safe to use
in OS/2 versions 1.21 and later.

────────────────────────────────────────────────────────────────────────────
Note

Be wary of third-party libraries that may make direct system-interrupt
calls: with OS/2 version 1.21, applications (running at protection ring 3)
generate a general protection fault if they attempt to make software
interrupts.
────────────────────────────────────────────────────────────────────────────




2.2.2  Windows Resources

The WLO mapping layer can correctly load and display Windows resources, so
no changes are required for an application's resources. After relinking the
Windows application with the libraries in the WLO Development Kit, use
Windows Resource Compiler to bind any resources used by the application.

Presentation Manager and Windows resources are incompatible; neither the
Windows nor the OS/2 resource compiler can use the other system's resource
definitions. You must use Windows Resource Compiler to create Windows
resources.


2.2.3  Windows Font Support

OS/2 provides three type faces (Helv, Tms Rmn, and Courier) in various
raster sizes, as well as scalable vector fonts (also known as outline
fonts). The system font (used in menus, title bars, etc.) is proportional,
as it is in Windows version 3.0. The WLO Development Kit provides two
Windows fonts that have been converted into OS/2-compatible fonts. Both
fonts are located in the \eWLO\eBIN directory and are described in the
following list:

  ■   WINMONO  dependent on the fixed-pitch-font support in earlier releases
      of Windows. You may find this font a useful alternative to the OS/2
      Courier font.

  ■   WINPRO  boxes. The WLO mapping layer automatically uses this font for
      dialog boxes of converted applications.


The user must install these fonts (by using OS/2 Control Panel) on the OS/2
system that will run the converted application. For more information about
installing fonts with Control Panel, see the Microsoft Operating System/2
User's Guide.

The WLO Development Kit provides the Convfont tool to convert other Windows
fonts to OS/2-compatible fonts. If your Windows application uses special
fonts, you can convert them to the OS/2 format. The Windows function
AddFontResource must refer to an OS/2 font when used in a converted
application running with OS/2.


2.2.4  Windows Help Support

Windows Help Manager, WINHELP.EXE, has been converted to run with OS/2. It
is included with this release of the WLO Development Kit in the directory
\eWLO\eHELP. To use Help Manager, your application can call the normal
Windows Help functions. You must ship a copy of WINHELP.EXE with your
product.


2.2.5  Global-Memory Support

Windows global-memory-allocation functions (GlobalAlloc, GlobalRealloc,
etc.) are mapped to OS/2 functions such as DosAllocSeg and DosAllocHuge.
Your converted application thus has access to the full memory resources of
OS/2.

────────────────────────────────────────────────────────────────────────────
Note

The Windows 32-bit memory manager WINMEM32.DLL is not supported by the WLO
Development Kit.
────────────────────────────────────────────────────────────────────────────




2.2.6  Task-Switching Support

A Windows version 3.0 application is expected to relinquish control of the
CPU only when its message queue is empty when the application calls the
GetMessage or PeekMessage function. This controlled, or cooperative,
nonpreemptive multitasking enables Windows applications to ignore certain
synchronization and resource conflicts that can occur in a preemptive
multitasking system such as OS/2. For example, consider a Windows
application that shares access to a dynamic-link library with other Windows
applications running with the Windows (DOS) environment. You can assume that
when the first application accesses the shared library, all other
applications have given up control of the CPU (and the resources of the
shared dynamic-link library) voluntarily by calling GetMessage or
PeekMessage. You can also assume that the dynamic-link library will be able
to complete the function request and return control to the calling
application before control is given to any other application. Therefore,
there is no need to guard shared resources with semaphores in Windows
version 3.0.

In OS/2, however, a task switch can occur at any time, so there is no
guarantee that the dynamic-link library will be able to complete the first
request before another application gains control and makes a new request.
Clearly, this can cause problems within the dynamic-link library.

Since a native OS/2 application or dynamic-link library can lose control of
the CPU at any time, it is especially important to maintain some sort of
synchronization control within a shared dynamic-link library─for example, by
setting a semaphore when beginning to service a request and ignoring all
other requests until the original request is completed.

To protect converted Windows applications, the WLO mapping layer will
preemptively suspend only one WLO application to schedule another WLO
application when one of the applications calls the GetMessage or PeekMessage
function. This means that a converted Windows application will lose control
of the CPU just as it would when running with Windows. Thus, you typically
do not have to add any OS/2-specific synchronization code to your Windows
application or dynamic-link library.


2.2.7  Floating-Point Support

Windows provides floating-point support with the WIN87EM.DLL dynamic-link
library. OS/2 handles floating-point calculations differently than Windows
does. The protected-mode C run-time libraries provide emulation when the
relinked Windows application is run on an OS/2 version 1.21 system that does
not have a coprocessor installed.


2.2.8  Clipboard and Dynamic-Data-Exchange Support

The WLO mapping layer provides full clipboard data transfer between
converted Windows applications and OS/2 applications, including two-way
metafile conversion between the Windows and OS/2 metafile formats. (For
metafiles, the mapping layer automatically converts a metafile when the
application copies it from the clipboard.) The mapping layer also supports
dynamic data exchange (DDE) between WLO applications and between an WLO
application and a native OS/2 application. Be aware, however, that OS/2
supports fewer predefined DDE data formats than Windows does.

WLO applications can exchange text information with Presentation Manager
applications through the clipboard and DDE. To prevent conflicts between
character sets and code pages, the mapping layer automatically translates
text information between the Windows ANSI (1004) code page and the active
Presentation Manager code page. For more details about using different code
pages, see Section 2.6.6, "Using Different Code Pages." .ET


2.2.9  Printing Support

The mapping layer uses the OS/2 printer drivers to support printing. To a
Windows application, an OS/2 printer driver looks just like a Windows
printer driver. A converted application can print on all printers available
to OS/2, but since OS/2 currently supports fewer printers than Windows
version 3.0 does, the application cannot necessarily print on all printers
available to Windows. Neither OS/2 nor the WLO Development Kit supports
installing or emulating Windows printer drivers.


2.2.10  Device-Driver Support

Windows supports several types of device drivers. In general, OS/2 does not
support these drivers, since the device-driver models in DOS and Windows are
incompatible with those in OS/2. The WLO Development Kit cannot convert
device drivers. You need to replace most device drivers with their
equivalent OS/2 device drivers. In some cases, you can use an existing OS/2
driver, but for more specialized services, you may need to write your own.
For information about writing OS/2 device drivers, consult the Microsoft
OS/2 Device Driver Development Kit. .RT


2.2.10.1  Display and Printer Device Drivers

Windows display and printer device drivers are implemented as dynamic-link
libraries (although they may have a .DRV extension). The WLO Development Kit
does not support dynamic-link libraries that are drivers; therefore, when
using the WLO Development Kit, you cannot install Windows display drivers
(nor should you rely on them). Instead, the WLO mapping layer maps all
output to the equivalent OS/2 display and printer drivers.

In many situations, an existing OS/2 device driver providing similar
functionality is all that is required for an application to be converted
successfully. OS/2 provides equivalent hardware device-driver functionality
for standard Windows requirements, including printer (PostScript, PCL),
display (CGA, EGA, VGA, 8514/A), and keyboard (101 US, 102 foreign) support.
The WLO mapping layer handles the proper mapping between these standard
device drivers, so that, to the converted applications, they are the Windows
drivers.


2.2.10.2  Device-Context Device Drivers

Device drivers for device contexts are display and printer drivers, and
sometimes drivers used for other purposes, that work through the Windows
graphics device interface (GDI). The WLO Development Kit does not support
this type of GDI driver. To convert this type of driver, you must implement
the equivalent functionality by using OS/2 functions.


2.2.10.3  DOS Device Drivers and Terminate-and-Stay-Resident Routines

The WLO Development Kit does not support Windows applications that use DOS
device drivers, which are usually installed by the CONFIG.SYS file or by a
terminate-and-stay-resident (TSR) routine loaded before running Windows. You
must use an equivalent OS/2 device driver.


2.2.10.4  Windows Device Drivers

In general, OS/2 does not support Windows dynamic-link libraries that read
or write directly to hardware addresses or ports. At a minimum, to operate
with the WLO mapping layer, a Windows dynamic-link library must be
compatible with Windows version 3.0 protected mode. OS/2 runs applications
and dynamic-link libraries at rings 2 and 3 (ring 3 is the default); OS/2
requires code that reads or writes from hardware ports to run at ring 2 (in
an IOPL segment). In addition, these Windows dynamic-link libraries cannot
install hardware (or software) interrupt handlers. Interrupts can be handled
only at ring 0 by an OS/2 device driver. This is not an issue in Windows
version 3.0, since Windows applications and dynamic-link libraries run at
ring 0.


2.3  Building Converted Applications

A converted Windows application remains, essentially, a Windows application.
Specifically, the object files and resources are all built using the tools
and include files in the Windows Software Development Kit version 3.0. The
linking process adds some static mapping information from the WLO import
libraries as well as specific references to the OS/2 versions of GDI.DLL,
USER.DLL, and KERNEL.DLL, where most of the WLO mapping layer is located.
The result is a Windows application that runs only with OS/2.

Your development environment is straightforward if you use only the Windows
SDK version 3.0 and the WLO Development Kit to convert Windows applications
into OS/2 executable files. If you have installed the MS OS/2 Presentation
Manager Toolkit version 1.2 in addition to the Windows SDK version 3.0, take
care when setting up paths to tools, include files, and libraries.

If you will be using the WLO Development Kit only to relink a Windows
executable file and do not plan to add OS/2 functions to the file, you
should add the paths to the WLO files (libraries and binaries) to your
current Windows version 3.0 development-environment variables. If you are
using a system with the MS OS/2 Presentation Manager Toolkit version 1.2,
either use separate environment variables or place Windows SDK and WLO paths
ahead of the Toolkit directories when building WLO applications.

For information about the build process and how to use environment variables
when developing applications that mix Windows and OS/2 functions, see
Section 2.6, "Adding OS/2 Features."


2.3.1  Linking Applications

For simple relinking of application object modules, two tools are required:
Microsoft(R) Segmented-Executable Linker (LINK), for relinking the object
modules; and Windows Resource Compiler, for rebinding the resources. An
appropriate linker is supplied with various products: MS OS/2 Presentation
Manager Toolkit version 1.2, Microsoft C Optimizing Compiler version 5.1 or
6.0, and OS/2 version 1.21. Use the latest version of the linker that you
have.

Windows applications are normally linked with the library xLIBCyW, where x
represents the library's memory model (S, M, C, or L, for small, medium,
compact, or large) and y represents the math package (E or A, for emulation
or alternate). Windows version 3.0 also supports the
memory-model-independent library LIBW. You should replace these Windows
library references with references to LIBMK_B and xLIBCyMK, where x is the
appropriate memory model and y is the appropriate math package. The LIBMK_B
library replaces the Windows library LIBW; xLIBCyMK is the WLO Development
Kit's customized protected-mode C run-time library that replaces the
real-mode run-time library xLIBCyW.

You must also use the /NOD linker switch to override default library
searches. This is important if both WLO import libraries and Windows SDK
libraries are in your LIB path. Not using the /NOD switch would result in
incorrect linking to the Windows libraries instead of to the WLO
replacements, creating an application that would cause a general protection
fault when run with OS/2.

The library OS2.LIB is required to resolve direct OS/2 function references
and internal WLO and C run-time library references to OS/2 functions. A copy
of OS2.LIB from the MS OS/2 Presentation Manager Toolkit version 1.2 is
provided in the directory \eWLO\eLIB. You must include a reference to
OS2.LIB when you start the linker.

To ensure correct linking, each WLO sample application or dynamic-link
library includes the necessary make-file changes. The Generic application, a
sample provided with the Windows SDK version 3.0, is provided in a modified
form in the WLO Development Kit. The only changes made were to the make
file. The LINK command line for the application in the Windows SDK is as
follows:

link /NOD generic,,,libw slibcew,generic.def


To build an OS/2 executable file, change the make file to substitute the WLO
import, C run-time, and OS/2 libraries, as follows:

link /NOD generic,,,libmk_b slibcemk os2,generic.def


If you have not added the line EXETYPE WINDOWS to your .DEF file for Windows
version 3.0, you should do so before attempting to link and build a WLO
application.


2.3.2  Changing Application Source Code

The goal of the WLO Development Kit is to provide an easy conversion path
for Windows applications so that no source-code changes are necessary in
most applications. You may need to change your Windows application source
code if it uses Windows functions that are not supported in the WLO mapping
layer. For a list of unsupported Windows functions, see Chapter 3,
"Limitations on Converted Applications."

In most cases, you must recode your application so that is does not call any
unsupported Windows functions. These unsupported functions are "stubbed
out," however, which means that when called they simply return to the caller
without doing anything. If your application does not depend on any specific
result from an unsupported Windows function, you need not change it. The
unsupported function will behave like an assembly NOP instruction.

If your Windows application uses system interrupts (BIOS or DOS), you must
change and recompile the modules that contain these calls. The WLO
Development Kit does not support BIOS calls, except for Interrupt 21H. For a
description of DOS interrupts that are supported by the Windows version 3.0
function Dos3Call, see Chapter 3, "Limitations on Converted Applications."
.ET

If you attempt to call a system interrupt in a converted application running
with OS/2 version 1.21, a general protection fault will result. Converting
system interrupts may involve using OS/2 functions and may require that you
significantly recode and redesign your application. To ease conversion of
system-interrupt calls, use the Windows version 3.0 Dos3Call or NetBiosCall
function. These functions are mapped to appropriate OS/2 functions by the
WLO import libraries and mapping layer. If your application requires an
interrupt that is not supported in the WLO Development Kit by the Dos3Call
or NetBiosCall function provided with this release, please notify Microsoft
through your OnLine account.

Source-code changes may also be necessary to handle certain exceptional
interactions between Windows code and the WLO mapping layer. For information
about specific problems that might require code modification, see Chapter 3,
"Limitations on Converted Applications."


2.4  Building Converted Dynamic-Link Libraries

Windows dynamic-link libraries can be converted to run with OS/2. Like
Windows applications, dynamic-link libraries must be relinked with the WLO
import .RT libraries to be compatible with OS/2. You must also make minor
source-code changes in all converted dynamic-link libraries so that they
will run correctly with OS/2. Once converted, a Windows dynamic-link library
provides the same sort of services in OS/2 as it did in Windows.


2.4.1  Linking Dynamic-Link Libraries

If your application relies on dynamic-link libraries, you must relink these
libraries with WLO import libraries to create an OS/2 dynamic-link library.
Dynamic-link libraries, like applications, can contain Windows resources
that are compiled by using Windows Resource Compiler.

Windows dynamic-link libraries are typically linked with the libraries LIBW
and xDLLCyW, where x represents the library's memory model (S, M, C, or L,
for small, medium, compact, or large) and y represents the math package (E
or A, for emulation or alternate). You should replace these Windows library
references with references to the WLO import libraries LIBMK_B and xDLCCyMK,
where x is the appropriate memory model and y is the appropriate math
package. You must also use the /NOD linker switch to override default
library searches.

Just as it is required for linking applications, the library OS2.LIB is
required to resolve direct OS/2 function references and internal WLO import
and C run-time library references to OS/2 functions. A copy of OS2.LIB from
the MS OS/2 Presentation Manager Toolkit version 1.2 is provided in the
directory \eWLO\eLIB. You must include a reference to OS2.LIB when you start
the linker.

To ensure correct linking, the WLO sample application Windll includes the
necessary changes to the make file. This sample is based on a Windows
Software Development Kit version 3.0 sample application named Select. The
LINK command line in the Windows SDK version is as follows:

link /NOD select libentry,select.dll,,sdllcew libw,select.def


To build an OS/2 dynamic-link library, you must modify the make file,
substituting the WLO import libraries, as follows:

link /NOD select libentry,select.dll,,sdllcemk libmk_b os2,select.def


In the .DEF file for the dynamic-link library, you must define a name for
the dynamic-link-library module by using the LIBRARY statement, as in the
following example:

LIBRARY  mywinlib


Be sure that the module name specified in the LIBRARY statement of the .DEF
file is the same as the base name for the dynamic-link library that is
eventually created. For example, if the LIBRARY statement uses the name
MYWINLIB, the dynamic-link library should be named MYWINLIB.DLL.

────────────────────────────────────────────────────────────────────────────
Note

Simply relinking your Windows dynamic-link library is not sufficient to
enable it to run with OS/2. You must also make small source-code changes in
the initialization function for your dynamic-link library to compensate for
differences in initializing Windows and OS/2 dynamic-link libraries. For
information about the necessary changes to a Windows dynamic-link library,
see the following section.
────────────────────────────────────────────────────────────────────────────




2.4.2  Changing Dynamic-Link-Library Source Code

Although you may be able to convert an application without making any
source-code changes, all Windows dynamic-link libraries require changes in
order to run with OS/2. In addition to relinking the Windows dynamic-link
library with the WLO import libraries, you must also modify the
initialization routine for the dynamic-link library.

The system loads the converted dynamic-link library just as it would any
other OS/2 dynamic-link library; that is, the converted Windows dynamic-link
library is not loaded by any intermediate routines in the WLO mapping layer.
Windows dynamic-link libraries require an assembly-language initialization
routine. The Windows Software Development Kit version 3.0 provides examples
that use a routine named LibEntry in the file LIBENTRY.ASM, which provides
an entry point for the dynamic-link library that is called when the library
is loaded. One-time initialization of the dynamic-link library is typically
done at this time─for example, initialization of the library's heap (if it
has one), plus additional initialization specific to the library.

Like Windows applications, WLO applications running with OS/2 permit
dynamic-link libraries to be referenced by many processes. However, the WLO
Development Kit does not support the WEP (Windows exit procedure) routine,
which Windows calls when the dynamic-link library is unlinked.


2.4.2.1  Register Use in a Dynamic-Link Library

Windows and OS/2 dynamic-link libraries receive different sets of
initialized registers when the system calls the dynamic-link-library entry
point. After loading a dynamic-link library, Windows calls the entry point
with the following registers initialized:

Value                             Description
────────────────────────────────────────────────────────────────────────────

CS:IP                             Contains the entry-point address of the
                                  library initialization function.

SS:SP                             Contains the address of the current
                                  system stack. The initialization
                                  function can use the stack to define
                                  local variables and call other functions,
                                  but it must restore the stack to its
                                  previous state before returning.

DS                                Contains the segment selector of the
                                  library's automatic data segment (if it
                                  has one), or contains the selector for
                                  the data-segment application or system
                                  library that called the Windows
                                  LoadModule function to load the library.

DI                                Identifies the instance handle of the
                                  Windows dynamic-link library.

ES:SI                             Points to the application command line
                                  that is loading the dynamic-link library.

CX                                Contains the size (in bytes) of the heap
                                  as defined in the .DEF file.



All other register values are undefined.

After loading an OS/2 dynamic-link library (or converted Windows
dynamic-link library), OS/2 calls the library's entry point with the
following registers initialized:

Value                             Description
────────────────────────────────────────────────────────────────────────────

CS:IP                             Contains the entry-point address of the
                                  library initialization function.

SS:SP                             Contains the address of the current
                                  system stack. The initialization
                                  function can use the stack to define
                                  local variables and call other functions,
                                  but it must restore the stack to its
                                  previous state before returning.

DS                                Contains the segment selector of the
                                  library's automatic data segment (if it
                                  has one), or contains the selector for
                                  the data-segment application or system
                                  library that called the OS/2
                                  DosLoadModule function to load the
                                  library.

AX                                Identifies the module handle of the
                                  dynamic-link library.



All other register values are undefined.

Note that the dynamic-link-library module handle passed in the AX register
in OS/2 is not equivalent to the dynamic-link-library instance handle that
Windows passes in the DI register. Therefore, AX cannot be used as a module
handle with Windows functions. You must include the CONVDLL.INC macro file
to convert the registers and obtain the mapped module handle in DI. The OS/2
module handle in AX is preserved and can be used by the dynamic-link library
to call OS/2 functions such as DosGetResource and DosGetModName. For
information about the Convdll tool, see Section 2.4.2.2, "The Convdll Tool."



2.4.2.2  The Convdll Tool

To assist in converting a Windows dynamic-link library to an OS/2 library,
the WLO Development Kit provides the Convdll tool. This tool adds code to
the beginning of the dynamic-link library to manipulate register contents so
that, even after the conversion, the contents of the registers appear to the
library just as they would in Windows. Convdll also inserts code in the
dynamic-link library to handle unlinking the library after all its WLO
clients terminate.

Because Convdll must insert code into the library's initialization code, you
must reserve space for the inserted code by including the file CONVDLL.INC
just before the entry point for the dynamic-link library, as follows:

INIT_TEXT segment byte public 'CODE'
     assume cs:INIT_TEXT

INCLUDE convdll.inc

LibEntry proc far
    push   di     ; handle of the module instance
    push   ds     ; library data segment
    push   cx     ; heap size
    push   es     ; command line segment


If Cmacros are used in the dynamic-link library's initialization code (as
shown in LIBENTRY.ASM of the Windll sample), then CONVDLL.INC should be
included as follows:

cProc   LibEntry, <PUBLIC,FAR>   ; entry point into DLL

INCLUDE convdll.inc
cBegin
        push    di               ; handle of the module instance
        push    ds               ; library data segment
        push    cx               ; heap size
        push    es               ; command-line segment
        push    si               ; command-line offset


Incorrectly placing the INCLUDE convdll.inc statement will result in errors
from the Convdll tool. If you have problems with converted dynamic-link
libraries, verify that Convdll does not report any errors and that the
position of the include statement is correct.

The macros in CONVDLL.INC insert code and WLO signature bytes into the
dynamic-link library. After reassembling and relinking the library with the
WLO import libraries, you then run Convdll, as in the following example:

convdll example.dll


In addition to manipulating registers and tracking dynamic-link-library use,
the code inserted by Convdll also ensures, before returning, that the WLO
dynamic-link libraries are loaded and initialized. This allows the
dynamic-link library's initialization routine to freely call Windows
functions without having to determine whether the WLO dynamic-link libraries
are loaded and initialized. With OS/2, there is no guarantee in what order
dynamic-link libraries will be loaded when several such libraries are
referenced by an application. With Windows, the system dynamic-link
libraries (GDI, KERNEL, USER, etc.) are loaded when Windows itself is
loaded. Therefore, a Windows dynamic-link library may freely call Windows
functions within the dynamic-link library's initialization routine without
having to determine whether the system dynamic-link libraries are loaded and
initialized. With OS/2, the WLO dynamic-link libraries are loaded when the
application is loaded, but, because there is no guarantee that the WLO
dynamic-link libraries will be initialized first, an application-defined
dynamic-link library should not call Windows functions during its
initialization routine until after the INCLUDE convdll.inc statement.

The WLO Development Kit provides the sample application Windll, which is
based on the sample application Select in the Windows Software Development
Kit version 3.0. In addition to modifying the make files to relink with the
WLO import libraries and run the Convdll tool on the dynamic-link library,
this sample shows how to change the LIBENTRY.ASM file to include
CONVDLL.INC.


2.5  Debugging

Your development system may be either DOS or OS/2, but you must do any
testing and debugging with an OS/2 system. Therefore, the dynamic-link
libraries in the WLO Development Kit must be present on the destination OS/2
system and referenced in the LIBPATH statement. (These libraries should have
been installed correctly by the Wloinst utility during the installation of
the WLO Development Kit.)

If OS/2 cannot find the WLO dynamic-link libraries when it attempts to run
the application, it displays the following error message:

SYS1804: The system cannot find the file .


Note that OS/2 does not indicate the dynamic-link library that it "cannot
find." You can determine the name of this library by using the OS/2 Detach
utility. If you detach the same application, the error message may then
appear as follows:

SYS1804: The system cannot find the file USER.


This message indicates that the USER.DLL library is not in the path
specified in the LIBPATH environment variable. Once you have corrected this
problem, you can correctly run the relinked application.

When using OS/2 version 1.21, you can use the Microsoft(R) CodeView(R)
debugger (CVP.EXE) provided with the Microsoft C Optimizing Compiler version
5.1. This debugger is an early version of the protected-mode CodeView
(version 2.2). While you can use CodeView version 2.2, it is recommended
that you use a more recent version. The MS OS/2 Presentation Manager Toolkit
version 1.2 provides a copy of CodeView version 2.3; Microsoft C version 6.0
provides CodeView version 3.0. These later versions provide better support
for debugging dynamic-link libraries and child processes.

If you want to debug at source level, CodeView must be running the
executable file and any converted dynamic-link libraries and must also have
access to the source modules. Therefore, the source code should also be on
the destination OS/2 system (typically in the same directory as the
application being tested).

When you first start CodeView on an application, it displays the entry point
to the application in assembly-language format, since the entry point is in
a library module and not in the application's source code. To display the
source code for the application, use a CodeView command, such as the v
(view) command, to advance to one of the functions within the code, as in
the following example:

v WinMain


You can then set breakpoints in the source code and proceed with debugging.

For information about how to use the CodeView debugger, see the
documentation provided with the Microsoft C Optimizing Compiler or with the
appropriate Toolkit or SDK.

You may also use third-party OS/2 debuggers, such as the Logitech MultiScope
Debugger, to debug converted applications. A converted application behaves
and appears to the system and debugger as a normal 16-bit OS/2 executable
file. Contact the vendor of your debugger to verify that the debugger
supports OS/2 version 1.21 or later.


2.5.1  Dynamic-Link Libraries for Debugging

The WLO dynamic-link libraries for debugging provide a built-in debugging
aid. The mapping-layer dynamic-link libraries located in the
\eWLO\eDLL\eDEBUG directory are debugging-enabled versions for application
developers. These libraries serve the same purpose as those provided with
the Windows Software Development Kit version 3.0 and MS OS/2 Presentation
Manager Toolkit version 1.2.

The debugging libraries provide additional internal consistency checking.
Any errors encountered are displayed on a separate debugging terminal. The
system uses a symbol file (.SYM) to provide symbolic addresses during stack
dumps. To be used, a symbol file must be in the same directory as its
matching dynamic-link library. You can also provide symbolic information for
your own application by using the Mapsym utility to create a .SYM file from
the .MAP file generated by the linker.

For more information about setting up an OS/2 system with debugging
dynamic-link libraries, see Disk 2 of the MS OS/2 Presentation Manager
Toolkit version 1.2, which contains a README file (in the DLL directory).

For developing and testing the converted application, use the debugging
versions of the dynamic-link libraries. For final shipment, use the retail
versions of the libraries located in the directory \eWLO\eDLL\eRETAIL.


2.6  Adding OS/2 Features

For many applications (especially those intended to run with both Windows
and OS/2), relinking with the WLO import libraries will be sufficient. But
if you want your applications to take advantage of some of OS/2's unique
features, the WLO Development Kit allows limited mixing of Windows and OS/2
API functions. The following list shows key areas where you can add OS/2
functionality to your applications:

  ■   Long file names and extended attributes for files

  ■   Threads for multitasking

  ■   Interprocess communication



2.6.1  Using Windows and OS/2 Include Files Together

If it were not for conflicts between the Windows and OS/2 include files,
adding OS/2 functions directly to the Windows source code would be easy.
OS/2 and Windows share many definitions that use the same names but that
specify different structures, types, or values. Therefore, it is not
possible to include both Windows and OS/2 include files directly in one
source-code module. If an OS/2 function is referenced from a source module
that includes the WINDOWS.H file, you must "hand prototype" the OS/2
function and any of its parameters. This would be a laborious process if
many OS/2 functions were involved.

Rather than hand-prototype OS/2 functions, a better solution is to separate
them into their own source-code modules. Each source module can include
either WINDOWS.H or the OS/2 include files, but not both. The C compiler
switch -I allows for overriding default include-file searches. In this way,
you can use the INCLUDE environment variable to handle normal compiling,
perhaps referencing the location of WINDOWS.H. You can then use the -I
compiler switch to compile the OS/2 modules so that the OS/2 include files
are referenced.

One issue remains a concern: Windows source modules require function
prototypes for the functions in OS/2 modules or OS/2 dynamic-link libraries.
Windows programmers rely on Windows definitions such as WORD, DWORD, LPSTR,
and so on. OS/2 provides its own set of standard definitions, such as
USHORT, ULONG, and PSZ. Since it is not possible to reference the OS/2
include file OS2DEF.H (which defines these OS/2 type definitions, or
typedefs) and WINDOWS.H in the same source module, you should create a
WINDEF.H include file that converts OS/2 definitions into forms recognizable
in the Windows modules, as in the following example:

#define PSZ    LPSTR
#define USHORT WORD
#define ULONG  DWORD


Including this WINDEF.H file in your Windows source modules allows you to
use standard OS/2 definitions in the function prototypes used to reference
functions in the separate OS/2 source module or OS/2 dynamic-link library.

Note that the Windows and OS/2 header files are subtly different; for
example, they contain typedefs with the same names, such as HWND, HDC, HRGN,
HBITMAP, and so on. Handles are typically 32 bits long in OS/2 but 16 bits
long in Windows. Inadvertently using one of these preceding typedefs in a
function prototype would result in a stack overflow or underflow and an OS/2
general protection fault.

Once you have compiled the application, you must link the object files.
Unlike the include files, the Windows and OS/2 libraries do not conflict.
All OS/2 functions are resolved in OS2.LIB, and the Windows and C run-time
library references are resolved in the WLO import libraries. There are no
naming conflicts among Windows, C run-time, and OS/2 libraries.


2.6.2  Creating an OS/2 Dynamic-Link Library

It is often useful to add OS/2 functions to your converted Windows
application by creating a special OS/2 dynamic-link library. This library
will contain only OS/2 functions, which the original Windows application can
then use. The Windows application can access these features by calling
exported routines from the OS/2 dynamic-link library.

To build an OS/2 dynamic-link library, you compile and link your code,
exporting the functions that you want to be visible and using the LIBRARY
keyword in the .DEF file to tell the linker to create a dynamic-link
library. Once the library is created, you run the Implib tool to create a
library file that you can link with your application. The library file
created by Implib contains short functions that reference the exported
functions in the dynamic-link-library file. You must reference the path of
this file somewhere in the LIBPATH setting so that OS/2 can find it. For an
example of an OS/2 dynamic-link library created to work with a Windows
application, see the sample WLO application OS2DLL.


2.6.3  Using Long Filenames and Extended Attributes

The ability to use long filenames and extended attributes is a key OS/2
feature you may want to add to your Windows application. Extended attributes
are available on all systems running OS/2 version 1.21 or later. Long
filenames are available only on OS/2 systems that have the high-performance
file system (HPFS) installed. (OS/2 version 1.21 includes HPFS, which you
may optionally install in one or more hard-disk partitions.)

The default OS/2 file system is based on the file allocation table (FAT)
model used in DOS. FAT filenames are limited to eight characters plus a
three-character extension (for example, WLODOC10.TXT), often referred to as
the 8.3 format. HPFS filenames, by comparison, can contain up to 260
characters, including embedded spaces.

When converting a Windows application to OS/2, you may want the application
to handle long filenames. A common problem in existing Windows applications
is that they allocate filename buffers just large enough to hold FAT 8.3
filenames and path buffers just large enough to hold the maximum
64-character path length. When using HPFS, however, you can use the OS/2
DosQFileInfo function to determine the maximum length of a path in the
current system and allocate file and path buffers accordingly.

If the application includes filename-parsing code that depends on the 8.3
format, you should modify the code so that it can handle long
filenames─specifically, filenames that contain embedded spaces and multiple
dot delimiters (.). A useful technique when searching for a filename
extension is to parse the name from the end rather than the beginning.

Extended attributes allow you to attach additional information, such as
version history or file type, to a file. Extended attributes are available
in OS/2 versions 1.21 and later in both the FAT and HPFS file systems. There
are two types of extended attributes, critical and noncritical. Critical
extended attributes are considered vital to the meaning of a file;
noncritical extended attributes contain only supplementary information. The
creator of the extended attribute sets a flag to specify whether the
extended attribute is critical.

Your converted Windows application must support existing extended attributes
for the files that it manipulates. For example, it is common to create a
temporary file for editing and then copy the temporary file over the
original file when the user asks to save changes. The OS/2 function DosCopy
copies all extended attributes of the source file along with the contents of
the file. The OS/2 functions DosQFileInfo and DosSetFileInfo allow you to
get and set specific extended attributes for a file or directory.

If your application can handle long filenames, you must set the long-name
flag in the header of the executable file in order to notify the operating
system of the application's capability. If this flag is not set, the
application cannot access any files with names longer than the 8.3 FAT
format, regardless of the filename format. To set this flag, use one of the
following methods:

  ■   Add the LONGNAMES modifier to the NAME directive in your .DEF file, as
      follows:

NAME MyProg LONGNAMES



  ■   Add the NEWFILES directive to your .DEF file, as follows:

NAME MyProg
NEWFILES



  ■   Use the Markexe tool with the LFNS switch. Markexe is provided in the
      MS OS/2 Presentation Manager Toolkit version 1.2.


The WLO sample application Editfile shows how to add extended-attribute
capability and handle long filenames in a converted Windows application. For
more information about using extended attributes and long filenames, see the
Microsoft Operating System/2 Programmer's Reference.


2.6.4  Managing Threads

Another key feature of OS/2 is the ability to create separate threads of
execution within a process. Threads are particularly useful when long
calculations are involved, where there is a need to block a thread for an
indefinite period of time to wait for a specific event, or when large
amounts of information must be transferred. Examples of these three cases
are spreadsheet recalculation, blocking on a semaphore used for interprocess
communication (IPC), and large-file manipulation or serial data exchange.

Threads run within the context of the process that creates them. This
creates a problem for applications that manipulate buffers, handle file
input and output, or require global data for other reasons. Multiple threads
could call related functions when the threads are time-sliced by the OS/2
scheduler, but without proper synchronization, one thread can corrupt
another thread's buffers. To assist programmers in writing multiple-threaded
applications, OS/2 provides semaphore API functions and the ability to enter
critical sections.

As discussed in Section 2.2.6, "Task-Switching Support," Windows
applications are not designed for preemptive multitasking. Task scheduling
occurs when the message queue is checked. The WLO mapping layer recreates
this scheduling design so that WLO applications need not be redesigned to
run in OS/2. However, this affects how threads can be added and used in WLO
applications.

A WLO process consists of a primary thread, Thread 1, that contains all the
Windows API functions. A typical WLO application also calls the C run-time
functions. Any additional threads created within the application code must
operate under the following restrictions:

  1.  Secondary threads must not call any Windows API functions, with the
      exception of the PostMessage function.

  2.  A secondary thread must not call any C run-time functions that are in
      the same application code as the thread. You must restrict
      secondary-thread calls to OS/2 API functions such as DosCreateThread,
      DosOpen, DosRead, and DosWrite. You should place secondary threads in
      a separate OS/2 dynamic-link library where C run-time functions can be
      used.


An application may use the PostMessage function in secondary threads as an
asynchronous notification mechanism─for example, using the background thread
to alert the primary WLO thread to the completion of an operation. This
method is preferable to having the primary WLO thread polling background
threads for status information. If global variables, shared memory, or both
are used to communicate between the WLO thread and background threads, you
should use semaphores to protect any critical sections. Your application
should not block the primary WLO thread by making it wait indefinitely for a
semaphore, nor should the primary thread fail to check its message queue in
a timely fashion; otherwise, other WLO applications will not be scheduled
and will receive no CPU time. This recommendation is as important in WLO
applications as it is in Windows itself.

To elaborate on the second restriction, the WLO libraries are derived from
the single-thread Microsoft C version 6.0 protected-mode libraries.
Therefore, application code used by secondary threads must be restricted to
using OS/2 API equivalents of the C run-time functions. If the threads are
managed in a separate dynamic-link library, you can use the multiple-thread
C run-time libraries, such as LLIBCDLL.LIB.

For more information about the multiple-thread C run-time libraries, see the
C version 5.1 file MTDYNA.DOC or the information about advanced programming
techniques in the C version 6.0 documentation.


2.6.5  Managing Memory

Since the WLO mapping layer translates Windows memory-management functions
into corresponding OS/2 functions, it is not usually necessary to make any
adjustments to memory management in a converted application.

For efficiency in virtual-memory environments (such as Windows version 3.0
enhanced mode), you should not use the Windows GlobalAlloc function for
small objects (that is, less than 4K). Instead, minimize the number of
global objects by using the Windows LocalAlloc function to allocate small
objects on the local heap or by combining small requests into larger
requests for global memory. You should observe the following guidelines on
memory use:

  ■   Do not rely on the 4K page size.

  ■   Do not assume the object size will be rounded to paragraphs.

  ■   Do not expect the GlobalLock function to return a pointer with a zero
      offset.

  ■   Do not expect the GlobalAlloc function for a FIXED object to return a
      selector.

  ■   Do not expect GlobalLock to return the same value each time the
      function is used to lock a particular global memory block.


By default, the GlobalAlloc function allocates private memory that cannot be
shared between processes. If a WLO application must share memory with
another WLO or OS/2 process, it must allocate shared memory using the
GlobalAlloc function with the GMEM_DDESHARE option.


2.6.6  Using Different Code Pages

Windows and OS/2 have different default code pages (character sets). The two
code pages, 850 and 1004, differ in their upper-128 character ranges. Both
character sets contain the same national (accented) characters, but in
different physical locations. In addition, the ANSI character set contains
some special characters (such as the copyright symbol) that are not
available in code page 850. Another aspect of the ANSI character set is that
the order of international characters makes sorting much easier than with
code page 850.

The WLO mapping layer automatically converts text when a converted
application exchanges data with an OS/2 application by using the clipboard
or dynamic data exchange (DDE). That is, if an application uses the ANSI
code page and writes text to the clipboard or uses DDE, the mapping layer
translates the text to code page 850 (or the current code page for
Presentation Manager). Similarly, when a converted ANSI application reads
text from the clipboard or through DDE, the mapping layer converts the text
to ANSI. This automatic translation greatly simplifies the exchange of data
with OS/2 applications.

By default, WLO applications use the Windows ANSI code page (1004), just as
they do with Windows. OS/2 does provide code page management functions, so
WLO application can change the code page if needed.

If the WLO mapping layer detects that the WLO application has set its code
page (by using the OS/2 WinSetCp or DosSetProcCp function), the automatic
character translations for the clipboard and DDE strings are not enabled.
Otherwise, the application is assumed to be running in ANSI and the mapping
layer performs the correct translations.

Note that you must do your own character conversion when reading or writing
binary text files. The mapping layer converts text automatically only for
the clipboard and DDE. In OS/2, you can use the functions WinCpTranslateChar
and WinCpTranslateString to convert characters between two different code
pages.

A call to the OS/2 function WinSetCp during the application's initialization
will set the message-queue code page for that application. You can pass the
constant HMQ_CURRENT (found in PMWIN.H) in the hmq parameter and the number
of the code page that you want to use (for example, 850) in the idcp
parameter. If you convert your Windows application to use code page 850, no
text conversion will be necessary when the application exchanges data with
other OS/2 applications, although you may have a problem when data files are
shared with the original Windows version of the application, which will
still be using the ANSI character set in its files.

Note that, as implemented in the WLO mapping-layer dynamic-link libraries,
the Windows function SetMessageQueue also automatically sets the code page
to the ANSI code page (1004) usually used by Windows applications. This will
be a problem only if your application calls SetMessageQueue after setting
the code page to something other than the ANSI code page. .ET


2.7  Shipping a Converted Application

The following sections discuss what is necessary to deliver and install a
converted application to a user.


2.7.1  Naming Conventions for WLO Dynamic-Link Libraries

The dynamic-link libraries shipped with this release of the WLO Development
Kit contain version-specific characters embedded in their filenames─for
example, USER_B.DLL, GDI_B.DLL, and KERNEL_B.DLL. Since the mapping layer
will continue to be enhanced in future releases of the WLO Development Kit,
the WLO dynamic-link libraries will contain release-dependent features.
Applications converted with later WLO releases will reference dynamic-link
libraries with different names, thus avoiding installation conflicts.


2.7.2  Library Installation

You must ship the WLO dynamic-link libraries with your converted application
and install them on the destination OS/2 system. The WLO Development Kit
includes the Wloinst utility for this purpose. Wloinst checks for the
existence of previously installed WLO dynamic-link libraries and copies more
recent libraries if available. Use Wloinst in a batch program or from within
your application's installation program. .RT

The Wloinst utility takes the following command-line switches:

  ■   The -q switch suppresses all screen messages; this is useful if you
      call Wloinst from another program and do not wish to see extra screen
      messages.

  ■   The -s switch specifies the source directory containing the WLO
      dynamic-link libraries to copy. Wloinst copies libraries from one
      directory only, so make sure all WLO dynamic-link libraries are in the
      same directory on the same installation disk. The dynamic-link
      libraries are then copied to the location of PMWIN.DLL, which is
      typically located in the directory \eOS2\eDLL on drive C. It is
      important to copy WLO dynamic-link libraries to a single location to
      prevent multiple sets of WLO dynamic-link libraries at different
      locations on the same hard disk.


The following example shows how to use Wloinst to install a set of WLO
dynamic-link libraries located in the DLL directory on the disk in drive A:

wloinst -q -s a:\dll


Be sure that in your final product shipment you use the retail version of
the WLO dynamic-link libraries rather than the debugging version. For the
location of the retail libraries, see the PACKING.LST file located on Disk 1
of the WLO Development Kit. These files have filename exensions of .DL@,
rather than .DLL. The Wloinst utility automatically renames the extensions
to .DLL after copying them to the hard disk. For information about the
retail and debugging versions of the WLO dynamic-link libraries, see Section
2.5.1, "Dynamic-Link Libraries for Debugging."


2.7.3  Installation Programs

If you use an installation program (or batch file) designed to work with
DOS, you must change it to work with OS/2. If your installation program
modifies the AUTOEXEC.BAT or CONFIG.SYS file, it is likely that such
modifications are no longer applicable to OS/2. Additional subtle
differences could exist if your installation program depends on the
existence of specific Windows files or directory structures.

If your application requires private dynamic-link libraries of its own, your
installation program should copy these libraries into the directory
\eOS2\eDLL on drive C (the same directory as the WLO dynamic-link
libraries). By copying the private libraries into this directory, the
installation program does not have to modify the LIBPATH statement in the
CONFIG.SYS file. This method also does not require the user to shut down and
reboot the system to complete the installation.


2.7.4  Help Manager

The WLO Development Kit includes a version of Windows Help Manager,
WINHELP.EXE, that has been converted to run with OS/2. If your converted
application uses Windows Help Manager, you must ship the WLO version of
WINHELP.EXE with the application. The WLO Development Kit includes several
foreign-language (localized) versions of Help Manager. Be sure that you ship
the correct version for your application. If the WLO Development Kit does
not include the localized version of Help Manager that you need for your
application, please contact your local Microsoft subsidiary for assistance.
The localized Windows Help Manager is available only in the languages into
which Windows version 3.0 has been localized.

Windows Help Manager is called WINHELP.EXE in all localized versions of
Windows version 3.0. The SMK provides these versions with different names,
such as WINHELPD.EXE for German. Before shipping these localized versions
with your localized applications, be sure to rename them to the proper name
of WINHELP.EXE.


2.7.5  WIN.INI and OS2.INI

The WIN.INI file is an ASCII text file that contains configuration
information for the Windows system and Windows applications. You can modify
WIN.INI by using standard text editors. OS/2 uses the binary-encoded files
OS2.INI and OS2SYS.INI to store similar information.

In Windows, system-configuration information is contained in separate
sections of WIN.INI. These sections are [windows], [intl], [ports], and
[colors]. Some of the keys included in the [windows] section are Beep,
Device, NullPort, Spooler, and SwapMouse.

Windows applications typically read and write configuration information by
using the functions GetProfileString, WriteProfileString, and GetProfileInt.
The WLO mapping layer intercepts these three functions and maps system
values (noted in the preceding paragraph) to OS2.INI. The mapping layer
treats all other values as application-specific and maps them to WIN.INI.

Note that the Windows private profile functions (GetPrivateProfileString,
etc.) do not check for a file named WIN.INI and do not do any mapping to
OS2.INI.

An application should use a private (application-specific) initialization
file to record information that affects only that application. By reducing
the amount of information the WLO Development Kit must read when accessing
the initialization file, this method improves both the performance of the
WLO Development Kit and the performance of the application. An application
should record information in WIN.INI only if it affects either the WLO
environment or other WLO applications; in such cases, the application should
send all top-level windows a WM_WININICHANGE message.

This recommendation may affect any installation programs or scripts that you
ship with your application. For example, if your current installation
program runs with DOS and modifies the system-related sections of WIN.INI
directly, you must create an OS/2 version of your installation program that
uses standard OS/2 functions such as PrfWriteProfileString to make proper
OS2.INI entries for the system-configuration information. Your OS/2
installation program can then use other functions to place
application-specific information directly in WIN.INI.

A better solution is to write a small Windows program to install your
Windows application. The installation program can use Windows functions (for
example, GetProfileString and WriteProfileString) to modify the Windows
configuration file. With this method, the information is automatically
placed in either OS2.INI or WIN.INI, depending on whether it is
system-related or application-specific.

Note that this method requires that the WLO dynamic-link libraries be
installed. Copy the WLO dynamic-link libraries first, using a
character-based OS/2 program such as Wloinst. Make sure the libraries are
copied to a directory referenced by the LIBPATH environment variable;
otherwise, the system must be rebooted before the installation can be
completed.


2.7.6  Sample Shipping List

Shipping an application converted by the WLO Development Kit also involves
shipping various files provided with the WLO Development Kit. These include,
at a minimum, the WLO mapping-layer dynamic-link libraries. It is necessary
to ship the retail WLO dynamic-link libraries, the appropriate language
version of Help Manager (if the application requires it), the relinked WLO
application, and any data files. It is also necessary to install these files
on behalf of the user, which means you must create an OS/2 installation
program.

If your installation program is a Windows program, you must first use a
character-based initial program (or a .CMD batch program) to install the WLO
dynamic-link libraries on the destination OS/2 system, before attempting to
run your Windows installation program.

In addition to the WLO dynamic-link libraries, which Wloinst installs, the
following files would be shipped with an English version of the sample WLO
application Reversi:

\0 WLO file                       Recommended installation location
────────────────────────────────────────────────────────────────────────────

\eWLO\eSAMPLES\eREVERSI\eREVERSI.  x:\eREVERSI
EXE

\eWLO\eSAMPLES\eREVERSI\eREVERSI.  x:\eREVERSI
HLP

\eWLO\eBIN\eWINHELP.EXE           x:\eREVERSI


Note that the letter x is an arbitrary drive letter used for installation
purposes.



Chapter 3  Limitations on Converted Applications
────────────────────────────────────────────────────────────────────────────




3.1  Overview

This chapter discusses limitations on converted applications running with
OS/2. Most limitations reflect fundamental differences between OS/2 and
Windows. You should be aware of the following limitations:

  ■   Private device drivers (DOS, Windows, GDI, TSR)

  ■   Direct interrupt calls (for example, Interrupt 21H, 2FH)

  ■   Palette management

  ■   Windows 32-bit memory-management API functions (WINMEM32.DLL)

  ■   Direct port input/output

  ■   Application setup modifications

  ■   Imperfect graphic pixel (pel) emulation

  ■   Dependencies on a common LDT (local descriptor table)

  ■   Exported segment selectors (for example, __0040H, __B800H)

  ■   Extended-memory and expanded-memory dependencies

  ■   Sound API functions

  ■   Debug API functions

  ■   Some bitmap and region API functions

  ■   Critical-execution sections (assembly code bounded by CLI/STI)


Depending upon whether your WLO application requires a particular service,
you may need to develop code to overcome one or more limitations. The
following sections describe the limitations in detail.


3.2  Mixed OS/2 and Windows Graphics

When a Windows application is running in OS/2, it still behaves as though it
were running in Windows. The WLO mapping layer maps Windows functions,
messages, handles, and structures into their appropriate Presentation
Manager counterparts. Therefore, Windows objects such as device contexts,
window handles, bitmap handles, and accelerator-table handles cannot be used
interchangeably between OS/2 functions and Windows functions. For example,
it is not possible to use the OS/2 function GpiPolySpline to draw a spline
in a Windows device context.


3.3  Differences in Windows Graphics Functions

The palette-management functions of Windows version 3.0 are not implemented
in the WLO mapping layer. All calls to palette-management functions simply
return without doing anything. Similarly, the Windows function FloodFill
does nothing in a converted WLO application.

You may also notice slight differences at the pixel level when your
converted application draws paths by using Windows graphics functions. These
differences, which are due to rounding errors, are most noticeable in
drawing applications. In Windows, pixels lie between points in the
coordinate system, but in Presentation Manager, pixels lie exactly on
points. This difference affects the number of pixels in a path. A path
consists of all pixels through which the path passes as well as the pixels
"inside" the path. Since pixels in Windows lie between points, a Windows
path does not include pixels on the path; it includes only pixels inside the
path. A Presentation Manager path, however, includes the pixels both on and
inside the path. This means Presentation Manager paths typically contain
more pixels than identical Windows paths. For example, a filled 4-by-3
rectangle in Windows contains 6 pixels; the same rectangle in Presentation
Manager contains 12 pixels.

Because of the differences in graphic-measurement coordinates between
Windows and Presentation Manager, some imperfect graphic emulation may
result. Although the WLO mapping layer corrects the differences for
rectangular objects and straight line segments, slight discrepancies or
"off-by-one" errors may occur when an application attempts to draw polygons
by using a fill operation or line segments. A typical example of this occurs
when an application draws a filled polygon by using a NULL pen. In Windows,
the outer edge of the polygon would be invisible, even in places where two
edges of the polygon were identical (on top of each other) on the screen. In
Windows, only the filled regions would appear; in Presentation Manager, both
the filled regions and the edges would appear. This can result in unwanted
line segments in the polygon. The solution, in this case, is to "pick up"
the pen in between filled regions.

The only raster operations the WLO mapping layer supports are the overpaint
and XOR operations. This is a problem with styled lines, since in
Presentation Manager there is no concept of a styled-line background. The
WLO mapping layer attempts to simulate a styled line by drawing the line
twice, but this method does not provide the same appearance or color as
styled lines do in Windows.


3.4  Windows Sound and Profile Functions

The mapping layer does not support two categories of functions: the sound
functions and the debug profile functions. Currently, OS/2 offers no
equivalent to the Windows sound functions. However, the Windows sound model
is dated and generally unused in current Windows applications.

OS/2 version 1.21 currently offers no support for the profile functions
available in Windows.


3.5  EMS and XMS Support

Windows version 3.0 supports the Lotus/Intel/Microsoft Enhanced Memory
Specification (LIM EMS) and Lotus/Intel/Microsoft Expanded Memory
Specification (LIM XMS), allowing Windows applications to access memory
beyond the DOS 640K boundary. The WLO mapping layer does not provide EMS or
XMS emulation. Typically, Windows applications running in protected mode do
not require expanded or extended memory, since most applications written for
Windows version 3.0 use Windows protected-mode memory-allocation functions.
In OS/2, there is no equivalent to Windows real mode, since OS/2 runs only
in protected mode. Therefore, if any of your applications require EMS or XMS
support, you must modify them to use Windows protected-mode
memory-management functions, standard C run-time memory functions, or direct
OS/2 memory-management functions.

────────────────────────────────────────────────────────────────────────────
Note

The WLO mapping layer does respond to EMS query calls. When an application
queries whether EMS support is available, the WLO mapping layer responds
with the proper return code, indicating support is not available. The
mapping layer does not support XMS availability calls.
────────────────────────────────────────────────────────────────────────────


3.6  Exported Selectors and Port Input and Output

The WLO mapping layer does not support the use of memory selectors exported
from the kernel to access the BIOS data segment or video memory (for
example, __0040H, __B800H). You need an OS/2 device driver to access memory
in this way. Similarly, WLO applications cannot directly access I/O ports
but must use an OS/2 device driver or add an IOPL segment to do so.


3.7  Multiple Instances of the Same Application

The previous instance handle passed to the WinMain function of a WLO
application will always be zero. This may cause problems for an application
that uses a nonzero value. If necessary, a WLO application can use the
FindWindow function to detect a previous instance.


3.8  Hook Procedures for System Hooks

To be accessible to multiple processes, hook procedures for system hooks
must be in a dynamic-link library. The same rule applies to subclassing
Windows procedures for different processes.


3.9  Windows Debugging Features

Windows provides various debugging aids, which are generally enabled by
entries in the WIN.INI file. These debugging aids apply to the Windows
environment only and do not have counterparts in OS/2. The Windows debugging
features EnableHeapChecking, EnableSegmentChecksum, EnableFreeChecking and
FreezeGlobalMotion are not available in OS/2.


3.10  File Access and Compatibility Mode in OS/2

OS/2 does not support compatibility mode. This is true for the Windows
functions OpenFile and _lopen as well as for the Interrupt 21H functions
called by the Windows version 3.0 function Dos3Call. The mapping layer uses
a conservative approach, mapping these functions to the OS/2 function
DosOpen and replacing them with the constant OPEN_SHARE_DENYREADWRITE.


3.11  OpenFile Return Value

The return value for the Windows OpenFile function is -1 if an error occurs;
this means that zero is a valid file handle. Some older Windows applications
use only nonzero file handles because zero was an error value in earlier
releases of Windows. The WLO mapping layer attempts to compensate for this
behavior, but if you want your application to run with OS/2─as well as with
Windows version 3.0─you will have to modify the application so that it
accepts zero as a valid file handle.


3.12  Menus in OS/2

Windows provides the option of performing menu-item operations (add, delete,
modify) by position as well as by item identifier. OS/2 version 1.21 cannot
identify menu items by position in this way. Therefore, you must be careful
not to have duplicate menu-item identifiers when performing menu-item
operations. This problem commonly occurs when you have more than one
separator item in a menu. Separator items are typically all given the same
identifier (-1), but it is possible to give each separator a unique
identifier. If you plan to manipulate individual items in a menu, be sure
that all items, including separators, have unique identifiers.

Avoid menu-item identifiers of 0xFFFF and 0xF000 through 0xF040. In
particular, 0xFFFF is an error indication in OS/2.

An application receiving an INIT_MENUPOPUP message for a pop-up menu item
must not remove that item while processing the message. This is a limitation
of OS/2 version 1.21.

When a state change in the application would require a different menu to
drop down from a particular menu item, the application should change the
menu at the time of the state change, not while processing the
INIT_MENUPOPUP message.


3.13  TextOut Limitations

OS/2 version 1.21 has a limit of 512 characters for any sort of text-output
functions. For the WLO mapping layer, this limitation applies to the Windows
functions TextOut, ExtTextOut, DrawText, and GreyString. Attempts to use
these functions with more than 512 characters result in no output.


3.14  SetMessageQueue and Code Pages

As implemented in the dynamic-link libraries of the WLO mapping layer, the
SetMessageQueue function also automatically sets the code page (character
set) to the ANSI code page (1004) usually used by Windows applications. Be
aware of this side effect if your application specifically uses a different
code page (such as code page 850). For a discussion of code-page issues in
converted applications, see Chapter 2, "Converting Applications."  


3.15  Unsupported Windows Functions

Following is a list of all the Windows functions that are not supported in
the current release of the WLO Development Kit; the functions are grouped
according to their corresponding dynamic-link library:
.mk
USER
ClipCursor
GetKeyboardState
GetSysModalWindow
MenuItemState
SetKeyboardState
SetMenuItemBitmaps
SetSysModalWindow
TrackPopupMenu

KERNEL
AllocSelector
FreeSelector
GetCodeHandle
GetCodeInfo
GetCurrentPDB
GetInstanceData
LimitEmsPages
SwitchStackBack
SwitchStackTo

GetWinMem32Version
Global16PointerAlloc
Global16PointerFree
Global32Alloc
Global32CodeAlias
Global32CodeAliasFree
Global32Free
Global32Realloc

GDI
ExtFloodFill
FloodFill
FrameRgn
CreateEllipticRgn
CreateEllipticRgnIndirect
CreatePolyPolygonRgn
CreatePolygonRgn
CreateRoundRectRgn
GetTextCharacterExtra
SetDIBitsToDevice  (RGB support provided)
SetTextCharacterExtra
SetTextJustification
StretchDIBits         (RGB support provided)

.in +20P
.rt
AnimatePalette
CreatePalette
GetNearestPaletteIndex
GetPaletteEntries
GetSystemPaletteEntries
SelectPalette
SetPaletteEntries
RealizePalette
ResizePalette
UpdateColors

KEYBOARD
GetKBCodePage
GetKeyboardType
GetKeyNameText
MapVirtualKey
OEMKeyScan
SetSpeed
ToAscii
VkKeyScan

SOUND
CloseSound
CountVoiceNotes
GetThresholdEvent
GetThresholdStatus
OpenSound
SetSoundNoise
SetVoiceAccent
SetVoiceEnvelope
SetVoiceNote
SetVoiceQueueSize
SetVoiceSound
SetVoiceThreshold
StartSound
StopSound
SyncAllVoices
WaitSoundState

DEBUG
ValidateCodeSegments
ValidateFreeSpaces
.in -20P


3.16  BIOS/DOS Interrupts

For OS/2 version 1.21, only Interrupt 5CH (the NetBIOS interrupt) and
Interrupt 21H are supported by the Windows version 3.0 functions NetBIOSCall
and Dos3Call. NetBIOSCall supports all NetBIOS services, except the
call-back routine with the no-wait option.

────────────────────────────────────────────────────────────────────────────
Note

Table 3.1 lists the supported and unsupported Interrupt 21H functions. This
table is not final, however, since additional comments are expected from
developers. If your application uses an unsupported interrupt, please notify
Microsoft by submitting a support request (SR) through your OnLine account.
────────────────────────────────────────────────────────────────────────────

Supported and Unsupported Interrupt 21H Functions"

Hex function                      Description  WLO support
────────────────────────────────────────────────────────────────────────────

00H                          Terminate   Yes
                             program

01H                          Read        No
                             keyboard
                             and echo

02H                          Display     No
                             character

03H                          Auxiliary   No
                             input

04H                          Auxiliary   No
                             output

05H                          Print       No
                             character

06H                          Direct      No
                             console
                             I/O

07H                          Direct      No
                             console
                             input

08H                          Read        No
                             keyboard

09H                          Display     No
                             string

0AH                          Buffered    No
                             keyboard
                             string

0BH                          Check       No
                             keyboard
                             status

0CH                          Flush       No
                             buffer,
                             read
                             keyboard

0DH                          Reset disk  Yes

0EH                          Select      Yes
                             disk

0FH                          Open file   No

10H                          Close file  No

11H                          Search for  No
                             first
                             entry

12H                          Search for  No
                             next entry

13H                          Delete      No
                             file

14H                          Sequential  No
                             read

15H                          Sequential  No
                             write

16H                          Create      No
                             file

17H                          Rename      No
                             file

18H                          Reserved    No

19H                          Get         Yes
                             current
                             disk

1AH                          Set disk    Yes
                             transfer
                             address

1BH                          Get         No
                             default
                             drive data

1CH                          Get drive   No
                             data

1DH                          Reserved    No

1EH                          Reserved    No

1FH                          Reserved    No

20H                          Reserved    No

21H                          Random      No
                             read

22H                          Random      No
                             write

23H                          Get file    No
                             size

24H                          Set         No
                             relative
                             record

25H                          Set         Yes (0 only)
                             interrupt
                             vector

26H                          Create new  No
                             PSP

27H                          Random      No
                             block read

28H                          Random      No
                             block
                             write

29H                          Parse       Yes
                             filename

2AH                          Get date    Yes

2BH                          Set date    Yes

2CH                          Get time    Yes

2DH                          Set time    Yes

2EH                          Set verify  Yes
                             flag

2FH                          Get disk    Yes
                             transfer
                             address

30H                          Get DOS     Yes
                             version
                             number

31H                          Keep        No
                             process

32H                          Reserved    No

33H                          Get/Set     No
                             CTRL+C
                             flag

34H                          Get InDos   No
                             flag

35H                          Get         Yes (0,0x67 only)
                             interrupt
                             vector

36H                          Get disk    Yes
                             free space

37H                          Reserved    No

38H                          Get/Set     No
                             country
                             data

39H                          Create      Yes
                             directory

3AH                          Remove      Yes
                             directory

3BH                          Change      Yes
                             current
                             directory

3CH                          Create      Yes
                             handle

3DH                          Open        Yes
                             handle

3EH                          Close       Yes
                             handle

3FH                          Read        Yes
                             handle

40H                          Write       Yes
                             handle

41H                          Delete      Yes
                             directory
                             entry
                             (Unlink)

42H                          Move file   Yes
                             pointer

43H                          Get/Set     Yes
                             file
                             attributes
                             (Chmod)

44H                          Device-dri  Yes (only AL = 0, 8, 9)
                             ver control
                             (IOCTL)

45H                          Duplicate   Yes
                             file
                             handle

46H                          Force       Yes
                             duplicate
                             file
                             handle

47H                          Get         Yes
                             current
                             directory

48H                          Allocate    No
                             memory
                             block

49H                          Free        No
                             allocated
                             memory
                             block

4AH                          Set memory  No
                             block

4BH                          Execute     Yes (no overlays)
                             program
                                  (EXEC)

4CH                          End         Yes
                             process

4DH                          Get return  No
                             code of
                             child
                             process

4EH                          Find first  Yes
                             file

4FH                          Find next   Yes
                             file

50H                          Reserved    No

51H                          Reserved    No

52H                          Reserved    No

53H                          Reserved    No

54H                          Get verify  Yes
                             state

55H                          Reserved    No

56H                          Change      Yes
                             directory
                             entry

57H                          Get/Set     Yes
                             date and
                             time of
                             file

58H                          Get/Set     No
                             allocation
                             strategy

59H                          Get         Yes
                             extended
                             error
                             information

5AH                          Create      Yes
                             temporary
                             file

5BH                          Create new  Yes
                             file

5CH                          Lock/Unlock  Yes
                             file

5DH                          Reserved    No

5EH                          Get         No
                             machine
                             name,
                             printer
                             setup

5FH                          Device      No
                             redirection

60H                          Reserved    No

61H                          Reserved    No

62H                          Get PSP     No
                             address

63H                          Reserved    No

64H                          Reserved    No

65H                          Get         No
                             extended
                             country
                             informatiom

66H                          Get or set  No
                             code page

67H                          Set handle  Yes
                             count

68H                          Commit      Yes
                             file

69H                          Reserved    No

6AH                          Reserved    No

6BH                          Reserved    No

6CH                          Extended    *
                             open file

87H                          Get         No
                             process
                             identifier

────────────────────────────────────────────────────────────────────────────
Note

The asterisk (*) in the "WLO support" column of Table 3.1 means that,
although not supported in the current WLO release, this function will be
supported in the final release.
────────────────────────────────────────────────────────────────────────────



3.17  Real-Mode C Run-time Functions

Some Windows applications use real-mode-only functions from the C run-time
libraries. The custom C run-time libraries in the WLO Development Kit
provide support for most of these functions by converting Interrupt 21H
functions to Dos3Call functions. Table 3.2 lists the supported and
unsupported functions. <TT>Supported and Unsupported\p Real-Mode C Run-time
Functions"</TT>

Function                                      WLO support
────────────────────────────────────────────────────────────────────────────

bdos                                          Yes

_bios_disk                                    No

_bios_equiplist                               No

_bios_keybrd                                  No

_bios_memsize                                 No

_bios_printer                                 No

_bios_serialcom                               No

_bios_timeofday                               No

_chain_intr                                   No

_disable                                      No

_dos_allocmem                                 No

_dos_close                                    Yes

_dos_creat                                    Yes

_dos_creatnew                                 Yes

dosexterr                                     Yes

_dos_findfirst                                Yes

_dos_findnext                                 Yes .RT

_dos_freemem                                  No

_dos_getdate                                  Yes

_dos_getdiskfree                              Yes

_dos_getdrive                                 Yes

_dos_getfileattr                              Yes

_dos_getftime                                 Yes

_dos_gettime                                  Yes

_dos_getvect                                  Yes (vectors 0 and 67)

_dos_keep                                     No

_dos_open                                     Yes

_dos_read                                     Yes

_dos_setblock                                 No

_dos_setdate                                  Yes

_dos_setdrive                                 Yes

_dos_setfileattr                              Yes

_dos_setftime                                 Yes

_dos_settime                                  Yes

_dos_setvect                                  Yes (vector 0 only)

_dos_write                                    Yes

_enable                                       No

_harderr                                      No

_hardresume                                   No

_hardretn                                     No

int86                                         No

int86x                                        No

intdos                                        Yes

intdosx                                       Yes

You can use the supported functions without getting unresolved linker-error
messages. The unsupported functions will generate unresolved linker errors,
but you should not be using these real-mode-only functions in any case, as
there are OS/2 functions to replace them.
──────────────────────────────────────────────────────────────────────────







Microsoft(R) Windows(TM)  Questions and Answers


For the MS-DOS(R) or PC-DOS Operating System


Questions and Answers


This booklet answers some common questions that users ask about Microsoft(R)
Windows(TM) version 3.0. You might want to read parts of this booklet if you
are encountering problems with Windows, or if you need information that is
not in the Microsoft Windows User's Guide. This booklet makes the same
assumptions, and uses the same conventions, as those described on pages xxi
through xxv of the Microsoft Windows User's Guide.

If you cannot find the answer to your problem or question in this booklet,
or elsewhere in the Microsoft Windows documentation, you can call Microsoft
Product Support Services. Before calling Microsoft, please see "Calling
Microsoft Product Support Services" at the end of this booklet. The phone
numbers listed are for product support in the United States and Canada only.
If you are outside North America, contact your country's Microsoft
subsidiary.



Getting the Information You Need


This section briefly explains how to find answers in the information that's
already available to you. Microsoft Windows comes with several valuable
sources of information:

The Microsoft Windows User's Guide, which explains how to use Windows and
how to get the most out of your system. The Microsoft Windows User's Guide
should supply answers for most of your questions.

A comprehensive Help system that provides instant information while you're
using Windows. For information on using Help, see page 70 of the Microsoft
Windows User's Guide.

Several text files that provide information on specific hardware, and
include information that became available after the Microsoft Windows User's
Guide was printed. The rest of this section explains what is in the text
files and how to read them.

The Windows text files are located in your Windows directory. The files are
as follows:

README.TXT
General information about installing and running Windows.

3270.TXT
Information about using specific non-Windows 3270 emulation applications.

NETWORKS.TXT
Information about running Windows with specific network configurations.

PRINTERS.TXT
Information about configuring particular printers and fonts so you can use
them with Windows.

SYSINI.TXT
SYSINI2.TXT
SYSINI3.TXT
Procedures for modifying SYSTEM.INI settings (for advanced users only).

WININI.TXT
WININI2.TXT
Procedures for modifying WIN.INI settings (for advanced users only).



To read the Windows text files:


1. Double-click the Notepad icon from the Accessories Group in Program
Manager.

2. Choose Open from the Notepad File menu.

3. Double-click the name of the text file you want to read.



Installing Windows 3.0


This section addresses some common questions about installing and setting up
Windows 3.0.



I am having difficulty installing Windows. Setup halts when it gets to Disk
2. How can I prevent this?


If your system halts (in other words, stops responding) before Setup has
finished installing Windows, your system probably includes incompatible
software or hardware.

To eliminate the problem, try each of the following steps in order. Once you
successfully install Windows, you need not perform the rest of the steps.

Step 1: Make sure you are using the correct Setup options.

Restart Setup by typing setup /i at the MS-DOS prompt.

Carefully check the configuration options that Setup displays on the second
Setup screen. You must select the options that match your computer's
configuration.

If Setup still halts, restart your computer and proceed with Step 2.

Step 2: Simplify your AUTOEXEC.BAT and CONFIG.SYS files.

Simplifying these files can eliminate memory-resident software that is
incompatible with Windows. Use a text editor to edit each file as described
in the following procedure.

Disable any command lines for memory-resident programs and unnecessary
device drivers. (See page 516 of the Microsoft Windows User's Guide for
information on how to do this.)

Save your changes to each file.

Press CTRL+ALT+DELETE to restart your system.

Try installing Windows again.

If Setup still halts, restart your computer and proceed with Step 3.

Step 3: Make sure you are running the correct version of MS-DOS.

Each computer manufacturer's version of MS-DOS, such as MS-DOS for COMPAQ or
PC-DOS for IBM systems, should be used only on corresponding systems. For
example, MS-DOS for COMPAQ should be used only on COMPAQ systems, PC-DOS for
IBM systems should be used only on IBM systems, and so on. You should use
the version of MS-DOS that came with your computer.

To find out what version of MS-DOS you are using, type ver at the MS-DOS
prompt.

If you need to install a different version of MS-DOS, do so according to the
manufacturer's instructions.

After installing a different version of MS-DOS, restart your system by
pressing CTRL+ALT+DELETE.

Try installing Windows again.

If Setup still halts, restart your computer and proceed with Step 4.

Step 4: Try setting up Windows without a mouse or network.

Type setup /i to run Setup again.

Choose "None" for the mouse and network options, even if your system
includes a mouse or network.

These options can sometimes cause incompatibilities with Setup. Once Windows
is successfully installed, you can add support for both the mouse and the
network from within Windows (see page 560 of the Microsoft Windows User's
Guide for more information).

If you have tried all four steps and still cannot install Windows
successfully, contact Microsoft Product Support Services. But before calling
Microsoft, please see "Calling Microsoft Product Support Services" at the
end of this booklet. Be sure to tell your Microsoft representative that you
have tried the steps outlined in this booklet.



How do I set up non-Windows applications that Setup didn't find?


After you have installed Windows, you can set up additional applications by
using either Program Manager or Setup. (Use Program Manager if you are
adding only one or two applications. Setup is easier for adding several
applications.)

For information on using Program Manager to add applications to Windows, see
page 88 of the Microsoft Windows User's Guide. For information on using
Setup to add applications, see page 561 of the Microsoft Windows User's
Guide.



How can I use my special hardware (display, printer, tablet, etc.) with
Windows?


To use your hardware with Windows, you install a Windows driver for that
particular type of hardware. A driver is a file that allows Windows to
communicate with hardware. Driver filenames contain the .DRV extension.

Setup automatically installs the correct drivers when you select the
appropriate hardware options. For example, if you tell Setup that you have a
POSTSCRIPT  printer, Setup installs the POSTSCRIPT printer driver,
PSCRIPT.DRV.

Windows comes with drivers for most popular types of displays, printers, and
other devices. Even if your special hardware is not listed among the
hardware options that Setup displays, you might be able to use that hardware
with Windows.

To use your special hardware with Windows:

Check the Hardware Compatibility List included in your Windows package for
the hardware that Windows supports. If your hardware is on the list, Windows
includes a driver for that hardware. In that case, use Setup to install your
hardware.

If your hardware is not on the Hardware Compatibility List, but can emulate
another brand of hardware that Windows supports, tell Setup you have the
type of hardware that is being emulated. For example, if your dot-matrix
printer can emulate an Epson dot-matrix printer, tell Setup that you have an
Epson printer.

If your hardware is not on the Hardware Compatibility List and cannot
emulate any of the hardware that Windows supports, check the Microsoft
Windows Supplemental Driver Library.

The Supplemental Driver Library is a collection of Windows drivers for less
commonly used hardware. The library is not included in the Windows package,
but you can get it for free or for a nominal charge. There are several ways
to get the Supplemental Driver Library:

If you have access to an electronic bulletin board, such as Microsoft
OnLine, CompuServe, or GEnie, you can get a free copy of the library.

On Microsoft OnLine, the Supplemental Driver Library is located in the
Software Library.

On CompuServe, the Supplemental Driver Library is located in the Software
Library in the Microsoft Connection (MSCON).

On GEnie, the Supplemental Driver Library is located in Library 2 of the
Microsoft RoundTable Software Library.

If you don't have access to one of the above bulletin boards, you may be
able to get the Supplemental Driver Library from your user group or directly
from your hardware manufacturer.

Or you can order a copy of the Supplemental Driver Library directly from
Microsoft. For more information, call 1-800-426-9400 (in the U.S. and
Canada).

If the Supplemental Driver Library does not include a driver for your
hardware, contact your hardware manufacturer for a Windows 3.0 device driver
designed for your hardware.



How do I set up Windows to run in conjunction with a Novell network?


Follow the instructions in the NETWORKS.TXT file, located in your Windows
directory. (You can open NETWORKS.TXT using Notepad.)



Running Windows 3.0


This section provides answers to some common questions about starting and
running Windows 3.0.



How can I get Windows to run on my system? When I type win, my system halts.


If your system halts (in other words, stops responding) when you try to
start Windows, it is likely that your system includes hardware or software
that is incompatible with Windows. The solution depends on the type of
system you have. To get Windows running on your system, follow these steps:

Step 1: Make sure you are using the correct Setup options.

Run Setup by typing setup /i at the MS-DOS prompt.

Carefully check the configuration options that Setup displays on the second
Setup screen.

To get Windows to work properly, you must select the options that match your
computer's configuration.

Check the Hardware Compatibility List, included in your Windows package, for
your system type. If the Hardware Compatibility List has an asterisk by your
system type, you must make sure that the correct system type is selected in
Setup. (For more information on running Setup, see page 563 of the Microsoft
Windows User's Guide.)

After completing Setup, choose Reboot, or return to DOS.

Type win to start Windows.

If your system still halts, restart it and continue with Step 2.

Step 2: Try running Windows in real mode.

Type win /r to start Windows in real mode.

If your system halts when you type win /r, you probably still have the wrong
video display or system type selected. Repeat Step 1 again.

If Windows starts successfully when you type win /r, but your system still
halts when you type win, restart your system and continue with Step 3.

Step 3: Simplify your AUTOEXEC.BAT and CONFIG.SYS files.

Simplifying these files can eliminate memory-resident software that is
incompatible with Windows. Use a text editor to edit each file as described
in the following procedure.

Disable any command lines for memory-resident programs and unnecessary
device drivers. (For more information, see page 516 of the Microsoft Windows
User's Guide.)

Save your changes to each file.

Press CTRL+ALT+DELETE to restart your system, and type win to start Windows.

If your system still halts, restart your system and proceed with Step 4.

Step 4: Make sure HIMEM is using the correct system type.

Using a text editor, open your CONFIG.SYS file and find the HIMEM.SYS
command line, which starts the HIMEM memory manager.

Add the /M switch by typing /m: and the number for your system type at the
end of the HIMEM.SYS command line. (See the following table for a list of
system type numbers.)

The /M switch tells HIMEM what type of system you have. Normally, HIMEM
automatically detects your system type. However, HIMEM might be unable to
detect some types of computers; this could cause your system to halt when
you start Windows.

The following table lists the system-type numbers to specify after the /M
switch.

Number    System Type
1    IBM PC/AT or 100 percent compatible
2    IBM PS/2
3    Phoenix Cascade BIOS
4    HP Vectra (A and A+)
5    AT&T 6300 Plus
6    Acer 1100
7    Toshiba 1600 and 1200XE
8    Wyse 12.5 MHz 286

For example, if your system is a Toshiba 1200XE, your HIMEM.SYS command line
might look like the following:

device = c:\himem.sys /m:7

If your system is a PC-compatible computer not listed above, try using the
/m:3 setting.

Save the changes to your CONFIG.SYS file.

Press CTRL +ALT+DELETE to restart your system. Then type win to start
Windows.

If your system still halts, restart it and proceed with Step 5 (for 80386 or
80486 systems only).

Step 5: Add an EMMEXCLUDE line to your SYSTEM.INI file.

This step is for 80386 or 80486 systems with at least 2 megabytes of memory.

Using a text editor, open your SYSTEM.INI file, which is located in your
Windows directory.

Find the [386Enh] section of the file, and type the following line at the
beginning of the [386Enh] section:

EMMEXCLUDE = C000-D000

Save your changes to the SYSTEM.INI file.

Type win to start Windows.

If Windows still does not run, call Microsoft Product Support Services for
assistance. But before you call Microsoft, see "Calling Microsoft Product
Support Services" at the end of this booklet.



When I type win, Windows starts in real mode, even though my system is an
80286 (or 80386). How can I get Windows to run in a different mode?


If you have an 80286, 80386, or 80486 system, but Windows starts in real
mode when you type win, one of the following might be the problem:

Your system does not have enough memory to run in standard or 386 enhanced
mode. You need at least 1 megabyte of memory to run Windows in standard
mode, and 2 megabytes to run in 386 enhanced mode.

Your system has enough memory, but the HIMEM memory manager is not properly
installed.

Your system has enough memory, but your CONFIG.SYS file is starting
utilities that take up too much memory.

To get Windows to run in standard or 386 enhanced mode, try each of these
steps in order. Once Windows starts in the mode you want, you need not
perform the remaining steps.

Step 1: Make sure your CONFIG.SYS file contains a command line for
HIMEM.SYS.

In order for Windows to use your system's extended memory, your CONFIG.SYS
file must contain a device command line for the HIMEM memory manager.

Using a text editor, open your CONFIG.SYS file and look for a command line
such as the following:

device = c:\himem.sys

If your CONFIG.SYS file does not contain a HIMEM.SYS command line, rerun
Setup by typing setup at the MS-DOS prompt.

If your CONFIG.SYS file does contain a HIMEM.SYS command line, make sure the
path is correct. The HIMEM.SYS file should exist in the location that the
command line specifies.

Press CTRL+ALT+DELETE to restart your system, and try running Windows again.

To tell Windows to start only in standard mode, type win /s. Windows will
not start if it cannot start in standard mode.

To tell Windows to start only in 386 enhanced mode, type win /3. Windows
will not start if it cannot start in 386 enhanced mode.

If Windows does not start in the mode you want, continue with Step 2.

Step 2: Disable any device drivers that might use extended memory.

Although your system might have 1 or 2 megabytes of memory, your CONFIG.SYS
file might start device drivers that use extended memory. If so, Windows
might not run in standard or 386 enhanced mode.

Open your CONFIG.SYS file again.

Disable any DEVICE commands for device drivers that might be taking up
extended memory. (For more information, see page 516 of the Microsoft
Windows User's Guide.) Do not disable the HIMEM.SYS command line.

Save any changes to your CONFIG.SYS file.

Press CTRL+ALT+DELETE to restart your system, and try running Windows again.

If Windows does not start in the mode you want, continue with Step 3.

Step 3: Disable your graphics card's auto-switching capabilities.

If you are using a graphics card that has auto-switching capabilities,
disable auto-switching.

Normally, to disable auto-switching, you must change a hardware switch
located on the graphics card. Follow the instructions in the documentation
that accompanied your graphics card.

After disabling the graphics card's auto-switching capability, restart your
system by turning the power off and on again.

Try running Windows again.

If Windows still does not run in the mode you want, call Microsoft Product
Support Services for assistance. But before calling Microsoft, see "Calling
Microsoft Product Support Services" at the end of this booklet.

For information on starting Windows in a specific mode, see page 428 of the
Microsoft Windows User's Guide.



How can I improve the speed at which Windows runs?


There are several things you can do to improve speed. See page 503 of the
Microsoft Windows User's Guide for a discussion of the methods for improving
the speed and efficiency of Windows. Chapter 13, "Optimizing Windows,"
explains how to configure your system for top efficiency with Windows.



I am using a Logitech mouse with Windows and it is not working properly. How
can I solve this problem?


Occasionally, when a Logitech mouse is used with Windows 3.0, the cursor
moves erratically or not at all. This could be due to one of the following:

Setup changed the path from your Logitech mouse driver to the driver
included with Windows. To determine if this is the problem, check your
mouse-driver command line in either your CONFIG.SYS file or your
AUTOEXEC.BAT file.

If your Logitech mouse driver is MOUSE.SYS, the command line will be in your
CONFIG.SYS file. If the MOUSE.SYS command line is similar to the following,
your system is being directed to the wrong mouse driver:

device = c:\windows\mouse.sys

If your Logitech mouse driver is MOUSE.COM, the command line will be in your
AUTOEXEC.BAT file. If the MOUSE.COM command line is similar to the
following, your system is being directed to the wrong mouse driver:

c:\windows\mouse.com

Change the command line so that it specifies the directory that contains
your original Logitech mouse driver, rather than the Windows directory.

You don't have an updated mouse driver for non-Windows applications. You
need version 4.1 or later of the Logitech mouse driver. To get an updated
Logitech mouse driver, contact Logitech Technical Support at 415-795-8100
(in the U.S. and Canada).



Running Applications


This section provides answers to some common questions about running
applications with Windows.

The Microsoft Windows User's Guide provides some troubleshooting tips for
running applications. If you are having problems with running applications,
see page 482 of the Microsoft Windows User's Guide.



How do I run my non-Windows applications with Windows 3.0?


There are many ways to run a non-Windows application with Windows. The
following are the most common methods:

Add the application (program item) to a group in Program Manager, and then
start it by double-clicking its icon in Program Manager. See page 88 of the
Microsoft Windows User's Guide for more information.

Start the application from File Manager by double-clicking the application's
filename. See page 137 of the Microsoft Windows User's Guide for more
information.

To run some non-Windows applications properly, Windows requires additional
information about the application. For example, Windows might need to know
how the application uses the video display. You specify such information in
a program information file (PIF). For more information on PIFs, and on
running non-Windows applications in general, see Chapter 12 of the Microsoft
Windows User's Guide.



How do I get my non-Windows application to run in a window?


In 386 enhanced mode, you can run some non-Windows applications in a window.
(You cannot run non-Windows applications in a window if you are running
Windows in real mode or standard mode.)

To get a non-Windows application to run in a window:

Use PIF Editor to open the application's program information file (PIF), if
it has one. (If it doesn't have a PIF, you should create one.) For
information on creating and editing PIFs, see page 446 of the Microsoft
Windows User's Guide.

Make sure the Display Usage option is set to "Windowed," rather than to
"Full Screen," in the application's PIF. For information on the Display
Usage PIF option, see page 460 of the Microsoft Windows User's Guide.

Make sure the Display Options are set correctly in the Advanced section of
the application's PIF. For information on the Advanced options, see page 462
and 469 of the Microsoft Windows User's Guide.

NOTE
Many non-Windows applications cannot run in a window because they perform
graphics or other screen interactions that are incompatible with Windows'
screen management. Most of these applications can run successfully with
Windows as long as they run in a full-screen display, rather than in a
window.



Why doesn't the mouse work with my non-Windows application when I run it
with Windows?


You can use the mouse with a non-Windows application only when running the
application in a full-screen display. When you run the application in a
window, the mouse performs Windows tasks, such as moving or resizing the
window; it does not provide input to the application running in that window.

If the mouse does not work when you run the application in a full-screen
display, you probably don't have a mouse driver installed for non-Windows
applications. (Windows has its own built-in mouse driver, which enables you
to use the mouse with Windows and Windows applications.) Check your
CONFIG.SYS and AUTOEXEC.BAT files to ensure that your mouse driver is
installed properly.



How can I get Windows to start an application automatically when I start
Windows?


There are several ways to start an application when you start Windows:

To start an application and Windows at the same time, type the application
command on the Windows command line. For example, to start both Windows and
Notepad, you could type the following at the MS-DOS prompt:

win notepad.exe

For information on the Windows command line, see page 425 of the Microsoft
Windows User's Guide.

To start an application automatically each time you start Windows, list that
application on the run= command line of your WIN.INI file. (Your WIN.INI
file is a text file located in your Windows directory. To edit the file, use
a text editor, such as Notepad.)

For example, the following command line would automatically start Microsoft
Word each time you start Windows:

run = c:\word\word.exe

You can list more than one application on the run= command line. If an
application is not in the Windows directory, include the full pathname to
the executable application file.

To automatically load an application in icon form each time you start
Windows, list that application on the load= command line of your WIN.INI
file. For example, the following command line would load Microsoft Word in
icon form each time you start Windows:

load = c:\word\word.exe

You can list more than one application on the load= command line. If an
application is not in the Windows directory, include the full pathname to
the executable application file.

For more information about the WIN.INI file, see the contents of the files
WININI.TXT and WININI2.TXT (also located in your Windows directory).



My applications always start with my Windows directory as the default
directory. How can I get them to start with a different default directory?


Normally, applications start with the Windows directory as the application's
default directory. However, you can use the directory that contains the
application file as the default directory. Or you can specify a different
directory altogether.

To use the application's directory as the default directory:

Select the application's icon in Program Manager.

Choose Properties from the File menu.

In the Command Line box, type the full pathname of the application's
executable file.

For example, if the path to your application is C:\REFLEX\REFLEX.EXE and you
want to it to use its own directory as the default directory, you would type
the following in the Command Line box:

C:\REFLEX\REFLEX.EXE

Choose OK.

Instead of using the application's directory as the default directory, you
can specify a completely different directory. The method for doing so,
however, differs for Windows and non-Windows applications.

To specify a different default directory for aWindows application:

Edit your AUTOEXEC.BAT file using a text editor, such as Notepad.

Add the directory that contains the application to the PATH command line.

For example, if the pathname of your application is
C:\WINDOWS\CORELDRW\COREL.EXE, your PATH command might look like the
following:

path=c:\;c:\windows;c:\dos;c:\windows\coreldrw

Save the changes to your AUTOEXEC.BAT file, and restart your system by
pressing CTRL+ALT+DELETE.


Start Windows and select the application's icon in Program Manager.

Choose Properties from the File menu.

In the Command Line box, type the full pathname of the default directory you
want, followed by the name of the application's executable file.

For example, if your application is named COREL.EXE, and you want to use the
directory D:\DRAWINGS as the default directory, you would type the following
in the Command Line box:

D:\DRAWINGS\COREL.EXE

Choose OK.

To specify a different default directory for a non-Windows application:

Use PIF Editor to edit the application's program information file (PIF). (If
the application does not have a PIF, you should create one.) For information
on using PIF Editor, see page 446 of the Microsoft Windows User's Guide.

Type the pathname of the default directory in the Startup Directory box.

Save your changes to the application's PIF. (You should save the PIF in your
Windows directory or in the directory that contains the application file.)



How do I provide expanded memory for my non-Windows applications when I run
them with Windows 3.0?


If you have an 8086, an 8088, or an 80286 computer, and you use applications
that need expanded memory, you must have an expanded memory board. Your
CONFIG.SYS file must contain a command line for the expanded memory manager
that came with your memory board.

If you have an 80386 or 80486 computer and you run Windows in 386 enhanced
mode, Windows can simulate expanded memory for applications that require it,
even if your system does not have expanded memory. You can use each
application's program information file (PIF) to specify how much expanded
memory a particular application needs. For information about working with
PIFs, see page 444 of the Microsoft Windows User's Guide.

NOTE

If you have an 80386 or 80486 system, you can also install EMM386, a utility
that provides expanded memory for applications when you are not running
Windows in 386 enhanced mode. For more information, see page 540 of the
Microsoft Windows User's Guide.



How do I customize the icons in Program Manager?


There are several ways to adjust and customize the program item icons in
Program Manager:

If more than one icon is available for a program item, you can choose a
different icon by choosing Properties from the File menu and then choosing
Change Icon in the Program Item Properties dialog box. You cycle through the
avail- able icons by choosing View Next. See pages 90 and 96 of the
Microsoft Windows User's Guide for more information.

You can adjust the spacing between icons by choosing the Desktop icon from
Control Panel, then typing a number in the Icon Spacing box. See page 156 of
the Microsoft Windows User's Guide for more information.

You can use an icon drawing program to create your own icon design, save it
in an icon file with the extension .ICO, and specify that file in the
Program Item Properties dialog box. (Windows does not include an icon
drawing program. One is included with the Microsoft Windows Software
Development Kit version 3.0. In addition, there are several "shareware" icon
editors available that create icons compatible with Windows 3.0.)

NOTE

Your customized icons appear only in the Program Manager window. When you
run an application that has a customized icon, its original icon is used
when you minimize the running application.



What do I do if I get the message "Unrecoverable Application Error"?


This error occurs only when Windows is running in standard mode or 386
enhanced mode. It indicates that a Windows application has caused a
protection violation (that is, an application has used an area of memory to
which it does not have access, potentially corrupting other code in that
area of memory).

If you receive this message, you should immediately close all applications,
exit Windows and restart your system. Don't continue using Windows without
restarting your system. When this error occurs, it means that memory might
have been corrupted. Until you restart your system, other applications, or
Windows itself, might behave erratically or terminate unexpectedly.

NOTE

Once one application causes this error, other applications might
subsequently display the same error, even though they are not actually the
cause of the problem.

To prevent an unrecoverable application error from recurring, follow these
steps:

Step 1: Make sure the application was designed for Windows 3.0.

Many unrecoverable application errors are caused by running a Windows
application that was designed for older versions of Windows.

If the error occurred when you were running an application designed for
Windows 3.0, continue with Step 2.

Step 2: Run Setup again to ensure that Windows is set up properly.

An unrecoverable application error might result if you selected an incorrect
computer or network during Setup.

Exit Windows and type setup at the MS-DOS prompt.

Check the settings that Setup displays to ensure that they match your
hardware configuration.

Exit Setup and restart Windows.

If the error recurs, continue with Step 3.

Step 3: Simplify your AUTOEXEC.BAT and CONFIG.SYS files.

Simplifying these files can eliminate memory-resident software that is
incompatible with Windows. Use a text editor to edit each file as described
in the following procedure.

Disable any command lines for memory-resident programs and unnecessary
device drivers. (See page 516 of the Microsoft Windows User's Guide for
information on how to do this.)

Save your changes to each file.

Press CTRL+ALT+DELETE to restart your system. Then restart Windows.

If the error recurs, proceed with Step 4.

Step 4: Make sure you are running the correct version of MS-DOS.

Each computer manufacturer's version of MS-DOS, such as MS-DOS for

COMPAQ or PC-DOS for IBM systems, should be used only on corresponding
systems. For example, MS-DOS for COMPAQ should be used only on COMPAQ
systems, PC-DOS for IBM systems should be used only on IBM systems, and so
on. You should use the version of MS-DOS that came with your computer.

To find out what version of MS-DOS you are using, type ver at the MS-DOS
prompt.

If you need to install a different version of MS-DOS, do so according to the
manufacturer's instructions.

After installing a different version of MS-DOS, restart your system by
pressing CTRL+ALT+DELETE, and restart Windows.

If the error recurs, contact Microsoft Product Support Services. But before
calling Microsoft, see "Calling Microsoft Product Support Services" at the
end of this booklet.



What do I do if I get the message "Out of memory" when starting a
non-Windows application?


If you get the message "Out of memory" when you try to run an application,
try the following:

Minimize Windows applications (display them as icons).

Close other applications.

If you are running Windows in 386 enhanced mode, try running applications in
a full-screen display instead of in a window.

If you are running Windows in 386 enhanced mode, tell Windows not to allow
non-Windows applications to run in the background. To do so, edit each
application's program information file (PIF) and make sure the Execution:
Background box is not selected.

Clear or save the contents of the Clipboard.

If you are using a desktop wallpaper, set the Wallpaper option to None.

For more information on freeing up memory, see page 478 of the Microsoft
Windows User's Guide. For more information on editing PIF options for 386
enhanced mode, see page 437 of the Microsoft Windows User's Guide.



Printing


This section provides answers to some common questions about printing.

The Microsoft Windows User's Guide provides some troubleshooting tips for
printing. If you are having problems with printing in Windows, see page 211
of the Microsoft Windows User's Guide.



I can't print from Windows. How can I solve this problem?


If you cannot print information from Windows, see page 212 of the Microsoft
Windows User's Guide for a list of common printing problems and their
solutions.

If the Microsoft Windows User's Guide does not address your printing
problem, try each of the following steps in order. Once you can print
successfully from Windows, you need not perform the remaining steps.

Step 1: Make sure you can print when you are not running Windows.

If you cannot print when Windows is not running, the problem might be with
your printer, printer cables, or printer port.

If you can print when Windows is not running, but you still cannot print
from Windows, continue with Step 2.

Step 2: Check to make sure your printer is supported by Windows.

For a complete list of printers that Windows supports, see the Hardware
Compatibility List that was included in your Windows package.

If your printer is not on the Hardware Compatibility List, check to see if
it is included with the Supplemental Driver Library. (For additional
information on the Supplemental Driver Library, see the question "How can I
use my special hardware with Windows?" earlier in this booklet.)

If your printer is on the Hardware Compatibility List, and you still cannot
print from Windows, continue with Step 3.

Step 3: Make sure your printer is installed properly for use with Windows.

See pages 158 and 164 of the Microsoft Windows User's Guide for information
on installing and configuring a printer for use with Windows.

If your printer is properly installed and you still cannot print from
Windows, continue with Step 4.

Step 4: For a serial printer, make sure the communications settings are
correct.

If your printer is attached to a serial port (COM1, COM2, and so on),
incorrect communications settings might prevent you from being able to print
from Windows.

Make sure the communications settings are correct for the serial port. See
page 175 of the Microsoft Windows User's Guide for information on
configuring a serial port.

If the communications settings are correct, and you still cannot print from
Windows, continue with Step 5.

Step 5: Make sure that the SET TEMP command is set properly.

Use a text editor to edit your AUTOEXEC.BAT file as described in the
following procedure.

See if the file contains a SET TEMP command.

In order to print from Windows, your AUTOEXEC.BAT file should contain a SET
TEMP command that specifies a drive with at least 1 megabyte of free disk
space.

If the file does not already contain a SET TEMP command, you should add one.

For example, if drive D has more than 1 megabyte of free disk space, the SET
TEMP command might look like the following:

set temp = d:\

Save the file.

Restart your system by pressing CTRL+ALT+DELETE, restart Windows, and try
printing again.

If you still cannot print from Windows, continue with Step 6.

Step 6: Make sure you are running the correct version of MS-DOS.

Each computer manufacturer's version of MS-DOS, such as MS-DOS for COMPAQ or
PC-DOS for IBM systems, should be used only on corresponding systems. For
example, MS-DOS for COMPAQ should be used only on COMPAQ systems, PC-DOS for
IBM systems should be used only on IBM systems, and so on. You should use
the version of MS-DOS that came with your computer.

To find out what version of MS-DOS you are using, type ver at the MS-DOS
prompt.

If you need to install a different version of MS-DOS, do so according to the
manufacturer's instructions.

After installing a different version of MS-DOS, restart your system by
pressing CTRL+ALT+DELETE, restart Windows, and try printing again.

If you still cannot print from Windows, call Microsoft Product Support
Services for assistance. But before calling Microsoft, see "Calling
Microsoft Product Support Services" at the end of this booklet.



How do I print to a file?


To print to a file, connect your printer to the printer port named FILE. See
page 210 of the Microsoft Windows User's Guide for more information.



Using DayBook


This section provides answers to some common questions about using DayBook,
an electronic organizer that is included with Windows 3.0.


Do I need a mouse in order to use DayBook?


Yes, a mouse is required to use DayBook.




What can I do to increase the speed of DayBook?


DayBook is written in a script language, and does not run as fast as
programs that were written in a programming language and then compiled. In
spite of this basic speed limitation, there are several things that you can
do to speed up DayBook:

Make sure there is as much free physical extended memory as possible. To do
so, close other applications and, if you are using a desktop wallpaper, set
the Wallpaper option to None.

Turn off DayBook's opening animation by choosing Turn Off Animation
from DayBook's File menu.

Tell DayBook to run in black and white by changing the StartupSysColors=
command line in the [ToolBook] section of the WIN.INI file, so the line
appears as follows:

StartupSysColors=False

Use the SMARTDrive disk-caching utility, and allocate it as much memory as
you can afford, up to about 2048K. (For information on using SMARTDrive, see
page 530 of the Microsoft Windows User's Guide.)

Defragment the information on your hard disk about once a week by running
CHKDSK /F and a disk-compaction utility directly from MS-DOS (outside of
Windows). Doing so keeps your hard disk running as fast and efficiently as
possible. For information on using the CHKDSK utility and compacting your
hard disk, see pages 510 and 512 of the Microsoft Windows User's Guide.



Calling Microsoft Product Support Services


This section provides answers to some common questions about contacting
Microsoft Product Support Services.



When should I call Microsoft Product Support Services?


You should call Microsoft Product Support Services if you are encountering a
problem with a Microsoft product that you cannot solve on your own. You
should also call if you have a question and the answer is not in the manual
or in the on-line text files that accompany the product (for example,
README.TXT).


What number should I call for Microsoft Windows 3.0 product support?


For answers to questions about Microsoft Windows 3.0, call Microsoft Product
Support Services at 206-637-7098 (in the U.S. and Canada). If you are
outside North America, contact your country's Microsoft subsidiary. Before
calling, you should read the answer to the question "What information should
I have ready when I call Microsoft product support," later in this section.



What number should I call for DayBook and ToolBook product support?


For answers to questions about DayBook, call Microsoft Product
Support Services at 206-637-7098 (in the U.S. and Canada).

For answers to questions about the full (authoring) version of ToolBook,
call Asymetrix Product Support at 206-637-1600. For the name of a software
dealer in your area where you can purchase the full (authoring) version of
ToolBook, call 1-800-624-8999 ext. 299A.


What information should I have ready when I call Microsoft product support?


Your Microsoft support representative will be able to answer your question
or solve your problem more efficiently if you find out as much as you can
about your computer before you call. The Microsoft representative will need
to know about both your system's hardware and software.

NOTE

At the back of the Microsoft Windows User's Guide is a form you can fill out
before calling Microsoft Product Support Services. However, since that form
is common to all Microsoft products, you should also complete the following
steps to collect Windows-specific information.



Collecting Information About Your System's Hardware


When reporting a problem, it is important for you to be able to tell your
Microsoft support representative what type of hardware your system has. If
possible, before calling Microsoft, write down the following information
about your system's hardware:

Your computer's manufacturer, model name, and model number.

Most computers bear a nameplate with this information. Or look in the manual
that accompanied your computer.

The type and amount of memory your computer has.

If some of the memory exists on an add-on memory board, also note the
manufacturer and model of the memory board.

If you have MS-DOS version 4.0 or later, you can find out about your
computer's memory configuration by typing mem at the MS-DOS prompt. You
might want to print a copy of the resulting information by pressing
ALT+PRINT SCREEN.

The manufacturer, model name, and resolution of your video display.

The manufacturer and model name of your mouse, if you have one.

How many hard disks your computer has, and how much space is available on
each disk.

To find out the available space on a hard disk, click its drive icon in File
Manager. File Manager then displays the available space in the lower-left
corner of the window. Or type chkdsk at the MS-DOS prompt.

If possible, you should also note the manufacturer and model name of each
disk drive.

The manufacturer and model name of your printer, if you have one.

The manufacturer and model name of any other hardware your computer has (for
example, a CD-ROM drive, a hand-held scanner, or a modem).


Collecting Information About Your System's Software


It is also important for you to be able to tell your Microsoft support
representative what type of software your system has. Before calling
Microsoft, you should write down the following information about your
system's software:

The manufacturer and version of MS-DOS you are using (for example, MS-DOS
for COMPAQ version 3.31)

Information about any memory-resident software, including
terminate-and-stay-resident (TSR) programs and device drivers you are using.
The following procedure
explains how to get this information.

Information about your Windows configuration, including the version number
and the mode in which you are currently running Windows. The following
procedure explains how to get this information.

There are several ways to collect information about your system's software.
The easiest way is to use some of the facilities that Windows offers.
However, if you cannot run Windows, you will need to use MS-DOS methods
instead.



To get information about your system's software using Windows:


Start Windows as you did when you encountered the problem you are
reporting.

For example, if you encountered the problem after you started Windows by
typing win /r, you would type win /r.

Choose About Program Manager from the Help menu in Program Manager. Windows
displays the About dialog box, which contains information about your Windows
configuration. Write down the information contained in the About dialog box.

Start Windows Setup by double-clicking the Windows Setup icon in the Main
Group of Program Manager. Write down the information contained in the
Windows Setup window and then close Setup.

Choose Run from the File menu in Program Manager.

Type sysedit and choose OK.

The System Configuration Editor (Sysedit) window appears. Sysedit is a
special version of Notepad that lets you edit and print four files that
affect the way Windows starts and runs. Sysedit contains four document
windows, one for each file.

Choose Print from the File menu to print the first file.

Click the next document window to bring it to the foreground.

Choose Print again.

Repeat steps 7 and 8 until you have printed the contents of all four files.

If you cannot run Windows, you will need to get software information by
using MS-DOS methods. The following procedure explains how to do this.



To get information about your system's software if you can't run Windows:


Change to the hard disk drive from which your system starts. On most
systems, this is drive C. To change to drive C, type c: and press ENTER.

Type cd\ to change to the root directory of your hard disk drive.

Print the contents of your CONFIG.SYS file by typing a command such as the
following (replace "LPT1:" with the name of your printer port):

> Lpt1:

If you don't have a printer, type the following command and write down the
contents of the file as displayed on your screen:

type config.sys

Print the contents of your AUTOEXEC.BAT file by typing a command such as the
following (replace "LPT1:" with the name of your printer port):

> Lpt1:

If you don't have a printer, type the following command and write down the
contents of the file as displayed on your screen:

type autoexec.bat

Change to your Windows directory by using the CD command. For example, if
Windows is installed in the \WINDOWS directory, you would type cd \WINDOWS
to change to this directory.

Print the contents of your WIN.INI file by typing a command such as the
following (replace "LPT1:" with the name of your printer port):

> Lpt1:

If you don't have a printer, type the following command and write down the
contents of the file as displayed on the screen:

type win.ini

Print the contents of your SYSTEM.INI file by typing a command such as the
following (replace "LPT1:" with the name of your printer port):

> Lpt1:

If you don't have a printer, type the following command and write down the
contents of the file as displayed on your screen:

type system.ini

Once you have gathered information about your system's hardware and
software, call Microsoft Product Support Services. Product support
representatives are available Monday through Friday, from 5 A.M. to 7 P.M.
Pacific Standard Time.




Information in this document is subject to change without notice and
does not represent a commitment on the part of Microsoft Corporation.
The software described in this document is furnished under a license
agreement or nondisclosure agreement. The software may be used or
copied only in accordance with the terms of the agreement. It is against
the law to copy the software on any medium except as specifically
allowed in the license or nondisclosure agreement. No part of this
manual may be reproduced or transmitted in any form or by any means,
electronic or mechanical, including photocopying and recording, for
any purpose without the express written permission of Microsoft.

RESTRICTED RIGHTS: Use, duplication, or disclosure by the U.S. Government
is subject to restrictions as set forth in subparagraph (c)(i)(ii)
of the Rights in Technical Data and Computer Software clause at DFARS
252.227-7013 or subparagraphs (c)(1) and (2) of Commercial Computer
Software--Restricted Rights at 48 CFR 52.227-19, as
applicable. Contractor/Manufacturer is Microsoft Corporation, One
Microsoft Way,
Redmond, Washington 98052-6399.

(C)Copyright Microsoft Corporation, 1985-1990.
All rights reserved.
Printed and bound in the United States of America.

Microsoft, MS, MS-DOS, and the Microsoft logo are
registered trademarks, and Making it all make sense and Windows
are trademarks of Microsoft Corporation.

Acer is a registered trademark of Acer Technologies Corporation.

AT&T is a registered trademark of American Telephone and Telegraph
Company.

Reflex is a registered trademark of Borland International, Inc.

COMPAQ is a registered trademark of Compaq Computer Corporation.

CompuServe is a registered trademark of CompuServe, Inc.

Corel is a trademark of Corel Systems Corporation.

DayBook is a trademark, and ToolBook is a registered trademark, of
Asymetrix Corporation.

Epson is a registered trademark of Epson America, Inc.

GEnie is a trademark of General Electric Corporation.

HP and Vectra are registered trademarks of Hewlett-Packard Company.

IBM, PS/2, and AT are registered trademarks of International Business
Machines Corporation.

Logitech is a trademark of Logitech, Inc.

Novell is a registered trademark of Novell, Inc.

POSTSCRIPT is a registered trademark of Adobe Systems, Inc.

Toshiba is a registered trademark of Kabushiki Kaisha Toshiba.

Wyse is a registered trademark of Wyse Technology.







OBJECT LINKING and EMBEDDING SPECIFICATION



January 1991 Beta Version


Extensible Application Protocols
Object Linking and Embedding


Microsoft Corporation
One Microsoft Way
Redmond WA, 98052

(C) Copyright Microsoft Corporation 1990, 1991. All rights reserved





Etymological Note, and Acknowledgement
The protocol defined in this specification was initiated by Rick Hawes of
the Microsoft Applications Graphics Business Unit.  Concurrently, a very
similar protocol was proposed by Rick Trent of Aldus, called PEZ.  This work
is a synthesis of the earlier proposals, refined and completed with the help
of many people at Microsoft, Lotus, Aldus, and Word Perfect Corp.  The
original working title of the specification of this protocol was "Linked and
Embedded Documents".  Following review and comment, the working title was
changed to "Extensible Compound Document Architecture" with the intent to
convey the nature and purpose of the specification.  To avoid confusion with
the acronym CDA which is owned by Digital Equipment Corporation, and to
convey that the specification defines a protocol between application
components, the title was changed to "Compound Document Protocol".  Finally,
we have decided to return almost to the beginning, and have settled on the
current title.




User Conceptual Model

User Task: Compound Document Management
The model developed here is designed to support the general task of
combining information from numerous sources. More specifically, it is
intended to support the creation, and editing of compound documents built
from information of various kinds.  This requires that multiple application
programs be able to cooperate on editing a single document.

Conceptual Model: Visual Containment and Links
The conceptual model developed here is a simple one:
 There are things and there are places those things can reside.

Things may be moved from one place to another, and may be linked to in other
places. They may also be parts of other things. Things have content and a
behavior, neither of which depend on the places they are found. Users
visualize and manipulate things through their presentations, which are
derived from their contents, behaviors, and their relationships to the
places they are found. Things in the same place may have entirely different
content, behavior, or presentation; users bring them together because they
are part of the same task.

Semantic Model
This section describes the conceptual model in more detail, and presents a
more formal definition of its semantics. This model has two basic elements,
objects and  containers, two fundamental relationships,  containment and
reference, and three basic operations,  move, copy, and  link.

Objects
Objects are the "things" manipulated by the user. A graph, a range of
spreadsheet cells, a paragraph in a document, the current selection in an
open window, and an entire document are all potential objects. Each object
has two defining features:  content and  behavior. An object's behavior
determines what actions the user can perform on it, how it responds to those
actions, and what tools are used to effect those responses. Behavior is what
distinguishes objects from simple "data."
All objects also have a presentation, which determines how it will appear to
the user in a given context. An object's presentation in a place is derived
from its content and behavior, subject to constraints imposed by its
relationship to that place.
Objects are distinguished from "data" by the possession of behaviors; when
they lose them, they cease to be objects. The current implementation of
"Paste" in Word, for example, "converts"

Each object has a class that is used to identify what kind of object it is.
All objects with the same set of behaviors (e.g. all PowerPoint graphs, all
Excel tables) have the same class.


Containers
Containers are the "places" that hold objects or links to objects. A file
folder, for example, is a container for document objects; a PowerPoint slide
is a container for a PowerPoint graph. A compound document is the
paradigmatic container: it contains numerous objects from many sources and
of many different types, that the user has placed in the same container for
the purpose of working on them as part of a group of related tasks.
Many objects are also containers; they are distinguished from other objects
by the containment relationship (see below) that they exhibit with the
objects they contain. An object need not act as a container; it may simply
refuse to contain any other objects, or just objects of specific types.
PowerPoint graphs, for example, though they behave as objects, cannot act as
containers for other objects. Whether or not an object acts as a container
for another object is one of the behaviors of that object.
Most containers are also objects, in the sense that they can be contained,
but this is not a requirement. The desktop, for example, is typically
treated as a "root" or "high-level" container, that cannot be contained in
any other containers. Certain kinds of large compound documents or
"workspaces" may exhibit similar behavior.


Containment
At the core of the model developed here is the relationship between objects
and their containers.

Behaviors: editing
The content and behavior of an object are unaffected by its container. A
Canvas drawing contained in a Word document, for example, behaves exactly as
if it were part of a Canvas document: it retains all of the behaviors of a
Canvas drawing, and all of the operations that are legal for such drawings
remain legal. This is the crucial difference between containment and our
current implementations of pasting operations: a contained object is
conceptually unaltered by its new environment, and all of its behavior is
managed by the tools that are associated with its class.
Any changes to a contained object are made using the object's (not the
container's) tools. In current implementations (e.g., embedded graphs in
PowerPoint 2.0) the user is made explicitly aware of this: editing occurs in
a window owned by the application representing the contained object's
editing tools.  While in the container, the object is "shrink-wrapped"; it
may be seen, but must be opened in order to modify it. In future
implementations, editing may occur  in situ using interfaces (editable
views) provided by the object but presented in the container.

Presentation: display and printing
The presentation of a contained object is also determined by the object, but
is constrained by its container.  In some cases, for example a hypertext
link, a container may simply not request any presentation for a contained
object, and the object will not be directly visible; instead some marker
icon or other indication would be displayed as the handle to activate the
link. More often, the object's presentation will be constrained to a region
provided by the container.

Dependent objects
One object may be part of a larger object, such that it has no real meaning
independently of the whole.  As a result, when such an object is copied (see
below) or moved, other parts of the whole may be duplicated or moved with
it, and any changes to the behavior (editing) of the object can only take
place in the context of the whole, which is exposed to the user when the
object is opened.  When, for example, a selection (say a summary table) from
a spreadsheet is copied, all the portions of the spreadsheet upon which
those cells depend are also copied.  For simplicity, this will normally mean
that the entire spreadsheet is copied even though only a small part is
selected and will be visible in the destination container.

Operations
This model has three fundamental "transfer" operations:  move, copy, and
link. This operation is always applied to a specific  argument, and has two
additional operands: a  source and a  destination. The source contains the
argument when the transfer is initiated.
After one of these operations is completed, the contents of the source and
destination will vary depending on the operation performed. The results of
these operations are summarized in the table below, and explained in more
detail in the following sections.


╓┌─────────────────┌─────────┌───────────────────────────────────────────────╖
Form of Transfer  Source    Destination
────────────────────────────────────────────────────────────────────────────
Move              Nothing   Argument
Copy              Argument  Duplicate of argument
Link              Argument  Link to argument
Form of Transfer  Source    Destination
────────────────────────────────────────────────────────────────────────────
Link              Argument  Link to argument




The argument to one of these operations may be some data managed by the
containing document, or it may already be a linked or embedded object
managed by some application other than that of the containing document.
Thus objects once embedded or linked may be moved to other containers.  If
the argument is initially data manged by the containing document and it is
copied or moved to another type of document, and embedded object will be
created.  The link operation always creates a link to the selected region of
the source document.
An object or link is copied (moved) from one place to another using the Copy
(Cut) command in the source, followed by a Paste command in the destination.
A link to an object is established by using the Copy command followed by
Paste Link. (See Parts 2 and 3.)

Move
When an object or link is  moved, it is taken out of the source, and placed
in the destination. Note that, as mentioned above, since the object must
retain all of its content and behaviors in the destination, and since these
may depend on other parts of the source, those may be duplicated, and moved
along with the object. If, for example, a range of Excel cells is moved, and
if that range has dependencies on other parts of a spreadsheet, those parts
of the spreadsheet will be duplicated, and moved along with the selected
cells. It is important also to reiterate that the presentation in the
destination depends only on the object (not the whole of the source) so that
none of these precedent portions of the owner are  visible in the
destination, except to the extent that they influence the object's
presentation through its content or behavior.
An object or link (see "Link", below) is moved from one container to another
using the Cut and Paste commands.

Copy
When an object or link is  copied, an exact duplicate of that object or link
is created in the destination. Note that, as with the move operation, the
duplicate must have all of the content and behavior of the original, and
since these may depend on its owner, parts of the owner may also be
duplicated along with the object. Also, as is the case for moved objects,
none of these precedent portions of the owner of the copied object are
visible in the destination.
An object or link is copied from one container to another using the Copy and
Paste commands.

Link
The  link operation creates a link in the destination to the source
argument; the object in the source is unaffected. A link behaves as a clone
of the object it is a link to. Conceptually, any changes to the behavior or
content of an object are immediately reflected in all links to it, in
practice, containers may delay the presentation of these changes.
Links are subordinate to the objects to which they refer. Because of this
difference between objects and links, deletion of a link has no effect on
the object it refers to, while deletion of an object makes all links to it
invalid. It is up to containers to decide what to do with any invalid links
they contain. In a sense, links are a way of  sharing objects: an object may
exist in only one container, but it may be shared with other containers by
placing links to it in those containers.A link to a part of one container is
created in another using the Copy and Paste Link commands.


Variations
The basic functionality described above covers cases where the object is
visually contained in the client document, whether it is embedded or linked
in storage terms.  The model allows for cases where the object itself is not
visually contained, but may be opened from the container, in analogy to a
footnote or reference citation in a document.  Similarly, the basic
functionality is described in terms of objects with a static visualization
which may be edited.  The model also allows for dynamic or non-visual
objects such as voice annotations or actions which may be invoked.


Dynamic Objects
Some applications provide a kind of pop-up annotation, where some textual or
other material is attached to some element of a document and may be called
up on command.  There may or may not be additional visual indication of the
existence of the annotation.  Some objects have annotation-like user
interface appearance and behavior.  For example, a voice object might be
displayed as a small icon, which when double-clicked would cause the voice
message to be played.   We discuss the nature of the object (voice etc.)
separately from the characteristics of annotations in general.  Other
aspects of annotations include the ability to show some or all annotations,
suppress them, show markers where annotations exist etc., and the ability to
specify these attributes separately for display and printing.  Unless the
container provides support for control of annotations (see below) dynamic
objects will appear in the printed form just as they do in the displayed
form.

Voice, sound and animations
When a time-varying object is created by (e.g.) recording a spoken
utterance, or constructing a script with an animation editor, the result can
be copied or linked into a container document.  The creator should provide a
static visualization that will be inserted into the container at the
insertion point.  This visualization might be small in the case of
non-visual objects like voice, or a full-size picture if the animation is
visual. The user can open the object, in which case the animation should be
run (thus playing the voice message, or running the animation or live-action
video in place or in a pop-up window).
As an example consider adding a voice annotation to a word processor
document that does not understand voice.  The user would activate the
recorder (perhaps simply by switching on a microphone) and say his piece.
The recorder tool would construct a voice object with an icon (say a pair of
lips) as its visualization, and put it on the clipboard.  The user would
return to the word processor, and simply Paste the voice object into the
current insertion point.
Handwritten annotation could work identically except perhaps in how the
recorder is started: the user may have to click on a freehand tool or
otherwise indicate that his input is to be recorded as strokes rather than
recognized as text.
If the user wishes to modify the object rather than play it, there are two
means at his disposal.  First is simply to create a new object and replace
the first, which is suitable for recording a new voice message but not for
re-scripting a major motion picture.  The second method is to open the
object, stop playing and activate the editing commands.


Actions: executable objects
Executable objects such as macro scripts are much the same as animated
objects in their creation and visualization except that once execution has
started it cannot be undone.   A suitable visualization for an action would
be a icon-like picture perhaps labelled with a creator-defined name.  The
editor for the macro script would supply this visualization when the object
is copied or linked into the container, using the normal mechanisms.
Actions would not execute when opened from the container; instead a button
click is required to start execution.  Editing the action would be supported
simply by activating the editing commands instead of the execute button.

Hypertext and Annotations
A hypertext link is represented as a small sensitive element in the
container document which the user can open to show the linked object.
Clearly, if the server has a small element that can be selected and linked,
this appearance can be achieved with normal links.  Otherwise, links which
do not require the full picture of the linked object can be provided without
requiring support in either client or server, beyond the functionality
required for linked and embedded objects.
We will provide an example object type that acts as the intermediary between
client and server.  It behaves (to the client) as a normal embedded object,
and gives as its visualization a small picture.  This object acts as a
client to the target of the link.  It encapsulates the link and substitutes
the alternative visualization.  The object interprets the "open" action to
mean open the linked object, thus giving the look and feel of a simple
hypertext-like link.
The look and feel of the intermediaryobject and its editor will be specified
separately from this document.

Client-provided hypertext links
The other case of hypertext link is where the sensitive element is part of
the container's data, such as a keyword in text, or a drawing element in a
picture.  In this second case, a the container must provide a Create Link
command to attach the link to the selection instead of inserting the
visualization of the linked object into the container.  The container must
have ways to allow the user to activate the link and to edit the data to
which it is attached.  Typically, containers will have views in which the
structure of the data is exposed and can be edited, such as a formula bar or
a field codes view.  This view should be used to edit the data that is
attached to the link, and should also permit the user to change a visual
link to a hypertext link and vice versa.  The normal view should interpret
input actions as related to the link rather than the data, so that clicking
on a word would open the linked object.

Client-provided annotations
Annotations are pieces of information associated with but not an intrinsic
part of a document.  Annotations may be suppressed or shown when printing
and displaying the document.  The content of the annotation may be shown, or
a hypertext-like indication that an annotation exists and can be opened.
Annotations should be able to hold any kind of information, just as the main
body of the document can.  Examples of annotations are hidden text,
footnotes, side notes, end notes, voice annotations with an icon in the
document, handwritten notes on a pop-up post-it note etc.
Annotations of this kind must be managed by the container, in that it
provides the user with the ability to create annotations, show/hide them on
printer/display independently, move information between the main body and
the annotation etc.




User Interface
Other than section 2.1, all of section 2 is new in this version of the
document.
The Object Linking and Embedding interface provides easy methods for
inserting linked and embedded objects, viewing the objects, editing them,
and changing their properties.   Each of these methods will be discussed in
turn.
The user interface described here is not mandatory.  This document specifies
the user interface that will be implemented by Microsoft products and which
is recommended for all Windows applications, in the interests of
consistency.

Terminology
This document will be clearer to the reader if the following use of
terminology is understood.
When an object is put on the clipboard, it is represented by two formats,
Native which contains the native data for the object, and OwnerLink, which
describes the class of the object and identifies the part of the object that
is to be displayed in the container.  When a link is being copied or moved
out of a container, it is represented just by the OwnerLink format.  When a
new link is being created (with the Paste Link command), the ObjectLink
format is used.  In all cases, if a class-specific rendering DLL is not
available, some presentation format (Picture etc) will also be taken from
the clipboard by the client library.
When describing behavior in the client application or library, the term
object, unless qualified, refers to either an embedded object or a link.

Client  A document that is a container of objects managed by other
applications, or the application that manages such documents. The term
container is also used where the usage is clear.

Server  An application that provides editing and rendering services
to clients for linked or embedded objects.

Source  The document (and application) that provides data in a
transfer operation; this will be the application where a Cut or Copy command
is invoked.

Destination  The document (and application) that receives data
in a transfer operation; the site of the paste command (or a variant).

Owner  The server for a linked or embedded object. This may be
different from both source and destination in the case where an object is
selected and transferred.

Presentation  Data sent from the server to the client so that
the client can display and print the object in the containing document.

Native The data that completely defines the object, whose format and
interpretation is known only to the server (owner). This data is transferred
between client and server in the case of embedded objects, where the client
provides permanent storage (within the container document) and the server
provides editing.

Link  A link between a container and another document. The linked
object is visible in the container document (either the visualization of the
object itself, or some other indication), and can be opened for editing, but
is stored in another document.

This term is also used to refer to the existing Link format transferred
through DDE and the clipboard.

ObjectLink A DDE and clipboard format carrying a descriptor for the source
object. It is used to identify the class, document, and item that is the
source of data for a linked object.  An ObjectLink is represented internally
as three null-terminated strings followed by a null string (i.e. a null
character).

OwnerLink  A DDE and clipboard format carrying a descriptor for
the owner of a linked or embedded object. This has the same representation
as ObjectLink, and is used to communicate information about the owner of an
object, which may be distinct from the source.

ClassName  Identifies the type of an object. This is used to
identify the editor to be invoked.

DocumentName  Identifies the object itself. For linked objects,
this is the pathname of the file containing the object. For embedded
objects, the DocumentName is only used when opening the editor, and is a
name manufactured by the client to guarantee uniqueness of access to the
server.

ItemName  Identifies the portion of the server document that is the
object. The ItemName is manufactured by the server and passed to the client
as an uninterpreted identifier for latter use. The server must ensure
persistence of the mapping from this identifier to the object.


Inserting Objects
The basic user interface for inserting links and embedded objects relies on
the familiar Cut, Copy, and Paste commands on the Edit menu, plus one
additional command, Paste Link, for inserting links.  To accelerate linking
and embedding or provide additional control over data formats, applications
may also implement optional commands such as Paste Special and Insert New
Object.  The following sections discuss the standard insertion procedures
first, followed by the optional commands.

Inserting Embedded Objects:  Cut/Copy from Source, Paste into Destination
The basic procedure for inserting embedded objects is simple.  For example,
to insert a drawing into a text document, the following steps would be
required:
  ■   In the editor application for the drawing, select the drawing and
      choose the Copy command from the Edit menu.
  ■   In the text application,  choose the Paste command from the Edit menu.

  ■   This procedure inserts the drawing at the current location of the
      cursor in the text document.
  ■   In general, for applications that support OLE, the
      Paste command will embed the object that is on the Clipboard, as in
      the example just described.  Under some circumstances, however, the
      application may choose not to embed the object.  In particular,
      suppose that the object is represented on the Clipboard not only by
      the embedded object format but also by an alternate format that
      completely represents the original data and that the application knows
      how to edit.  In this case, the application may choose to insert this
      editable alternate data rather than embedding the object.  Most
      applications, however, will not be able to provide full editing
      capabilities for any alternate format, so they will simply embed the
      object and allow the source application to provide editing
      tools.
  ■   Thus in most applications that support OLE, when the Clipboard
      contains an object from another application, the Paste command will
      embed the object in the current document.  Note that in applications
      that do not support OLE, this Paste command would simply insert a
      static copy of the data, without providing easy access to the tools
      required for later editing of the data.  The easy editing provided by
      embedded objects will be discussed further below.


Inserting Links:  Copy from Source, Paste Link into Destination
Inserting links to objects is just as easy as embedding objects.  To
continue the previous example, suppose that instead of embedding the
drawing, the user wanted to insert a link to the drawing.  The following
steps would be required:
  ■   In the editor application for the drawing, select the drawing and
      choose the Copy command from the Edit menu.  (This step is exactly the
      same as in the procedure for inserting an embedded object.)
  ■   In the text application,  choose the Paste Link command from the Edit
      menu.

  ■   This procedure inserts a link to the drawing at the current location
      of the cursor in the text document.  The drawing is displayed in the
      text document but stored in the original drawing file.  The link is an
      "automatic" link; in other words, whenever the drawing file is
      changed, the drawing in the text file is updated automatically.
      Automatic and manual links are described more fully in the discussion
      of the Link Properties dialog.
  ■   Once a link exists in one document, it can be inserted in other
      documents via Copy and Paste (not Paste Link).  For example, suppose
      that Document1 contains Link1, which refers to a bitmap in a graphics
      file.  If Link1 is selected, the Copy command copies Link1, not the
      bitmap that is the source object.  The Paste command then inserts a
      copy of Link1 (which we can call CopyOfLink1) at the current cursor
      location.  Like Link1, CopyOfLink1 refers to the original bitmap.  If
      Paste Link is used instead of Paste, a  link to (not a copy of) Link1
      is inserted.  This new link ("LinkToLink1") refers to Link1, which in
      turn refers to the original bitmap.  Link1, CopyOfLink1, and
      LinkToLink1 all yield exactly the same visual presentation (a
      representation of the original bitmap) in their client documents, but
      Link1 and CopyOfLink1 refer directly to the bitmap, whereas
      LinkToLink1 refers to the bitmap only indirectly, via Link1.
  ■
  ■   Just as links can be copied from one location to another via Copy and
      Paste, they can also be moved via Cut and Paste.  In this respect
      links behave like any other objects that can be manipulated via the
      Clipboard.


Optional Methods for Inserting Links and Embedded Objects
For inserting links and embedded objects, many applications will need
nothing more than the simple methods discussed in the preceding sections.
Some applications, however, may want to provide extra control or convenience
via the Paste Special and Insert New Object commands.

Controlling Data Formats:  "Paste Special..." Command
Some applications can interpret and edit data in a wide variety of
formats-not only the format native to the application, but also one or more
other ones, such as Rich Text Format (RTF), ASCII text, bitmaps, and
object-oriented picture formats.  Such applications may wish to provide a
"Paste Special..." command on the Edit menu, to provide more control over
which format is used when data is pasted in from another application.
By default, the standard Paste and Paste Link commands look on the Clipboard
for a format that completely represents the original data and that the
client application can edit with its own tools.  If such a format is found,
the original data is translated into that format and inserted into the
client.  In some cases, however, the user may want to override the default
format.  For example, certain special tools or editing operations (e.g.
rotation) might only be available for a non-default format (e.g. drawings in
a text application).  Alternatively, the user might want to force the data
to be inserted as an embedded object (rather than translated into a
client-editable format), so that the tools of the original creator
application (called the "server" application) could easily be invoked to
edit the object.  These choices between formats are supported by the Paste
Special dialog.

The Data Type list in the Paste Special dialog shows the formats available
on the Clipboard.  The list also includes one additional entry, "<Object>
Object" (e.g. "Excel Worksheet Object") that will be discussed further
below.
  ■   The Paste button translates the data into the selected format and
      inserts it into the document, without establishing a link to the
      original source of the data.  (If the user has not changed the default
      format, i.e. the one originally selected in the list, then pressing
      Paste in this dialog is equivalent to choosing Paste from the Edit
      menu.)  If the user has selected "<Object> Object" rather than a data
      format, the data is inserted as an embedded object rather than
      translated into a client-editable format.
  ■   Like the Paste button, the Paste Link button translates the data into
      the selected format and inserts it into the document.  Unlike the
      Paste button, however, Paste Link establishes an automatic link to the
      original source of the data.  (If the user has not changed the default
      format, i.e. the one originally selected in the list, then pressing
      Paste Link in this dialog is equivalent to choosing Paste Link from
      the Edit menu.)

  ■   The Paste Special dialog provides a superset of the functionality
      provided by the Paste Link command, and thus it is not strictly
      necessary for applications that include Paste Special to also provide
      Paste Link.  Nonetheless, it is strongly recommended that the Paste
      Link command be retained even when Paste Special is provided, because
      Paste Link is a more convenient and less complicated means of
      establishing links.


Embedding Blank Objects:  "Insert New Object..." Command
To accelerate the procedure for embedding blank objects, applications may
implement an "Insert New Object..." command.  In applications that include
an Insert menu, the command should appear on that menu and should be called
"New Object...".  In applications that do not include an Insert menu, the
command should appear on the Edit menu and should be called "Insert New
Object...".

The Object Type list in the Insert New Object dialog contains object names
drawn from the registration database maintained by the system.  To embed an
object, the user selects its name from the list and presses OK.  This
activates the server application for the selected object; the server
displays a blank window, in which the user can create and edit the object.
After the editing is complete, the user selects the Update command from the
File menu of the server.  This command closes the server and inserts the
object in the client, at the location where the cursor was positioned when
the Insert New dialog was invoked.  (For additional details on the File
Update command and other aspects of editing and saving objects, see below.)

Viewing Objects
Complex compound documents may contain several linked or embedded objects
(OLE objects), interspersed with objects that are native to the document.
Because the OLE objects support operations different from those supported by
the native objects, it is convenient to be able to visually distinguish the
OLE objects from the native ones.  For this purpose, applications should
provide visual indications of OLE object boundaries.  The boundaries for a
particular object should appear whenever the object is selected.  In
addition, applications should also provide a way for all object boundaries
to be turned on or off at once, to facilitate easy viewing of all OLE
objects in a document.  For example, applications could reveal object
boundaries, as well as other normally hidden information, via a "Hidden
Structure" command on the View menu or a "Show All" checkbox in a
Preferences dialog.
The exact method of indicating object boundaries depends on the nature of
the client application and the type of linked or embedded object.  Three
possible methods are:
  ■   Complete borders surrounding the object.  For PC VGA monitors, the
      border should be dark grey; for non-VGA PC monitors, the border should
      be a 50% grey pattern; and for Macintoshes, the border should consist
      of a one-pixel-wide white line sandwiched between two 50% grey lines.
  ■   Special graphic characters (e.g. "[" and "]" ) at the beginning and
      end of the object.
  ■   Distinctive formatting (e.g. a dotted underline) that is not used
      elsewhere in the client.

  ■   Whichever method is used, the goal is to provide a clear indication of
      the extent of the linked or embedded object.


Editing Objects
Once linked or embedded objects have been inserted into a document, the
standard user interface provides two methods for editing them.  The first
method is very simple:  Double-clicking on the object boundary invokes the
server application (i.e. the original creator application) that is
associated with the object.  (If the object is atomic-that is, if only the
whole object can be selected in the client-then the user can double-click
anywhere on the object to invoke the server.)  The second method for editing
linked or embedded objects relies on the  "<Object> Properties" command on
the Edit menu of the client.  This command is discussed further in the next
section.
When the server window opens, the object is loaded into the window.  For
embedded objects, the window is initially sized to show only the portion of
the object that was displayed in the client.  (Some embedded objects, such
as spreadsheets, may include portions that are not displayed.  These hidden
portions are included because the displayed portion draws data from them.)
The user can resize the window to display additional portions of the
embedded object.  In the case of linked objects, the entire linked file is
loaded, and the linked portion is selected.
The user can modify the object with the editing tools provided by the
server.  The process for updating the object in the client file varies
slightly depending on whether the server supports the Multiple Document
Interface (MDI).

Updating Objects from Non-MDI Servers
When a non-MDI application functions as a server, the Save command on the
File menu changes to Update.   After the user is finished editing the
object, this command can be used to close the server, update the object in
the client, and reactivate the client window.  Updates to embedded objects
can be undone via the Undo command on the Edit menu of the client.  If the
user tries to exit the server without updating the object, a warning message
is displayed.

When an embedded object is being edited, the File Save As command can be
used to save a copy of the object in a separate file.  If the client file
has not yet been updated, a warning message is displayed before the standard
Save As dialog appears.  The same warning is displayed if the File New
command is chosen.  In all other respects, the Save As and New commands
behave just as they would if the application were not functioning as a
server.
When the server closes, the focus returns to the client.
If the user attempts to close the client while servers for that client are
still open, the servers are closed first, after the usual checks for unsaved
data.

Updating Objects from MDI Servers
The procedure for editing and updating objects from MDI servers is similar
to the procedure for non-MDI servers, with the following exceptions.
  ■   If the focus changes from the embedded object window to a "normal"
      document window (i.e. one containing an existing file or a new
      document), the File Update command changes back to File Save.  If the
      embedded object window regains the focus, File Save becomes File
      Update again.
  ■   When the File Save As or File New command is chosen, the window
      containing the embedded object remains open.  Therefore it is not
      necessary to display the "Update <client file name>?" message if the
      client file has not yet been updated.
  ■   If the embedded object window is not the only open document window in
      the server, then the File Update command only closes the embedded
      object window.  The other document windows, and the server application
      window itself, remain open, and the server retains the focus.


Changing Object Properties
The properties of linked and embedded objects may be changed via the
"<Object> Properties" command.  This command appears on the Edit menu of the
client; it may also be invoked via Alt+Double-Click on the boundary of an
object.  (If the object is atomic-that is, if only the whole object can be
selected in the client-then Alt+Double-Click may be used anywhere on the
object to invoke the "<Object> Properties dialog.)  Depending on what kind
of objects are included in the current selection in the client, the
"<Object> Properties" command may modify its name and invoke different
dialogs.

If no links or embedded objects are included in the selection, the command
name is "Object Properties" and is greyed to indicate that the command
cannot be chosen.  If links are included in the selection, the command
changes to "Link Properties..." and leads to a dialog (see below for
details).  If the selection includes no links but includes one or more
embedded objects, the command leads to the "<Object> Properties" dialog.  In
this case, if the objects are of different types, the command name is simply
"Object Properties..." (and the dialog title is "Object Properties", without
the ellipsis).  If the objects are all of the same type, the first part of
the name indicates that type.  For example, if the objects are all Excel
worksheets, the command name is "Excel Worksheet Properties..." (and the
dialog title is "Excel Worksheet Properties").

<Object>Properties Dialog
The text at the top of the dialog shows the number of embedded objects that
are selected in the document.  If all the objects are of the same type, the
text mentions the type as well as the number of objects:  "<Number>
<ObjectType> selected" (e.g. "3 Microsoft Excel Worksheets selected").  If
the objects are of different types, the text omits the object type and
simply refers to the objects as "embedded objects":  "<Number> embedded
objects selected".
The buttons operate as follows:
  ■   The Open button opens the object for editing; in other words, the
      server application for the object is started, and the object is loaded
      into the application.
  ■   The Change to Picture button changes the object to a picture that can
      no longer be edited via the standard OLE techniques.  It is still
      possible to edit the graphic aspects of the picture via the older,
      more cumbersome cut/copy/paste techniques.  For example, the user
      could cut the picture out of the client, paste it into a graphics
      application, modify the picture, cut it out of the graphics
      application, and paste it back into the original client.  However, it
      is unlikely that the picture contains all of the information in the
      original object (unless the original object was itself a picture).
      For example, a picture of a spreadsheet object retains no information
      about the underlying formulas.  Thus the Change to Picture operation
      usually causes an irreversible loss of data.
  ■   After an object is changed to a picture, no object boundaries are
      displayed for the picture.

  ■   An embedded object may contain a link, but the <Object> Properties
      dialog provides no direct access to the link properties.  To access
      those properties, the user must first invoke the editor for the object
      and then choose the Link Properties command in the editor.


Link Properties Dialog
The Link Properties dialog allows users to open linked files for editing,
change the type of updating (automatic or manual) for links, update linked
objects, cancel links, and repair broken links.

When the Link Properties dialog first opens, the Links list shows each link
contained in the current selection in the document; each link item in the
list is initially selected.  The listbox is an extended-selection listbox,
which allows the user to select one or several links by using Shift-Click
for range selection and Control-Click for discontiguous selection, just as
in the Windows File Manager.
Below the listbox, the dialog contains two "Update" radio buttons:
"Automatic" and "Manual".  When the dialog opens, these buttons reflect
whether the currently selected links are automatically updated whenever the
linked file changes or whether they must be manually updated.  The update
rule for the selected links can be changed via the radio buttons.  If links
with different update rules are selected in the list, neither the
"Automatic" or "Manual" radio button is selected.  In this case, pressing
one of the buttons changes all the selected links to have the corresponding
update property.
The push buttons at the bottom of the dialog carry out the following
operations:
  ■   "Open Source" opens the linked file for the link selected in the Links
      list; in other words, the server application for the linked file is
      started, and the linked file is loaded into the server.  Pressing this
      button is equivalent to double-clicking on the link boundary in the
      client.  If the selection in the Links list includes multiple links
      that are not all linked to the same file, each linked file is opened.
  ■   "Update Now" updates all links selected in the Links list.  In other
      words, the presentations of the linked objects in the client are
      updated to reflect the current data in the linked files.  Suppose that
      the selected links are all associated with a file called "source.doc".
      It is possible that the client contains other, currently unselected
      links associated with the same file.  In this case, after the selected
      links are updated, a message box is displayed.  If the originally
      selected links were associated with several files, and if the document
      contains other unselected links to those files, the message box will
      be displayed once for each of the files.
  ■   "Cancel Link" permanently breaks the link between the client and the
      server.  The linked object in the client is changed to a picture that
      can no longer be updated or edited via the standard OLE techniques.
      As described for the "Change to Picture" operation in the <Object>
      Properties dialog, the picture can still be edited via the older
      cut/copy/paste techniques, but it is unlikely that the picture retains
      all the data present in the original linked object.   No link
      boundaries are displayed for the picture.
  ■   The "Change Link..." button is greyed if the selection in the Links
      list includes multiple links that are not all linked to the same file.
      Otherwise, if all the selected links are linked to the same file, the
      button is active and leads to a dialog exactly like the File Open
      dialog, except that the title is "Change Link"; the standard File Open
      dialog is described in the Appendix).
  ■   The Change Link dialog allows the user to change the file to which a
      link refers.  This capability has two uses.  First, it allows broken
      links to be reestablished.  For example, suppose that a linked file is
      renamed or moved to a new location.  The dialog allows the user to
      reconnect the link in the client to the linked file under its new name
      or in its new location.  Second, the dialog allows a single client
      that operates on linked data files to be successively connected to
      different sets of linked files.  This flexibility in providing data to
      the client is particularly useful for applications such as
      spreadsheets and databases.
  ■   When the user chooses a file and presses OK in the Change Links
      dialog, the links that were selected in the Links list are
      disconnected from their previous file and connected to the newly
      chosen file.  It is possible that the previous file was also
      associated with other, currently unselected links in the client.  In
      this case, after the selected links are changed, a message box is
      displayed.  This message is analogous to the one described above for
      the Update Now button.

  ■   In addition to the standard controls, the Link Properties dialog may
      also include a dropdown list for changing the format (e.g. Text or
      Picture) in which the object is displayed.  If present, this dropdown
      list should be placed at the bottom of the dialog, just above the push
      buttons.


Other Dialogs for Link Updating
When a file containing manual links is opened, a message box is displayed to
ask the user whether to update the links.

If the user presses the Yes button in the message box, the application
updates the links.  The progress indicator is displayed while the links are
being updated.  The Stop button interrupts the update without cancelling any
updating that has already been carried out.  If the client can support a
complete cancellation of all updates, the message box should contain a
Cancel button instead of the Stop button.

If some of the linked files were unavailable, a warning dialog is displayed.
This dialog contains two buttons, OK and Link Properties....  The OK button
closes the dialog without updating the links.  The Link Properties... button
selects the entire document and displays the Link Properties dialog.  The
whole document is selected so that all links in the document appear in the
Links list in the Link Properties dialog.  Unavailable linked files are
marked with the word "Unavailable" in the third column of the list.  The
user can attempt to locate the unavailable files by using the Change Links
dialog, which is available via the Change Links... button in the Link
Properties dialog.





Implementor's Guide

Introduction
The implementor's guide gives a description of the main commands related to
linked and embedded documents, and the actions that clients and servers
should take to provide the right results. Part 4 gives the specification of
the library functions that applications call.  The appendix gives details of
the DDE messages that the library uses to implement these actions.
The overall structure of the libraries is shown in the diagram below.  A
client deals with linked and embedded objects through opaque handles and API
calls to the compound document library DLL.  That DLL makes calls on system
services (registration,  DDE etc) and may also make use of additional DLLs
that may be supplied to manage or render particular types of object.  The
client application is unaffected by this.



Clipboard ConventionsA major part of the compound document support required
is concerned with creating objects and moving them around among containers.
The majority of this will be done with the clipboard-based copy and paste
commands. The effect of these commands depends on the nature of the
selection that is Cut or Copied, and the target for the Paste command.
The rules for how the Copy and Paste commands deal with the clipboard are
relatively simple. The Copy command offers formats to the clipboard in order
of their fidelity of description of the selection (most preferable is
offered first). The clipboard preserves this ordering, and uses it as the
order when another application enumerates the available formats. The source
application will offer data formats that adequately describe the selection
(e.g. RTF for a part of a structured document), then it will offer and
embedded object (communicated by Native and OwnerLink formats), then
presentation (e.g. Picture) and other formats into which the selection can
be rendered. If the source can be a server for links, it will also offer
Link format.
If the source selection is an embedded object, or a link, which is not
modified by the source container, then the appropriate formats to represent
the object are the owner's Native and OwnerLink. If the source container has
modified the object's presentation (e.g. recolored it), or if the selection
is a range that includes such an object, then the source should offer
descriptive formats if such exist (e.g. some enhanced RTF), and offer the
source's Native and OwnerLink.
The Paste command will enumerate the formats available on the clipboard in
the order in which they were offered, and will take the first format that is
compatible with the target for the Paste command. If no suitable data format
is found, a compound document client will make an embedded object from the
Native and OwnerLink formats, and enumerate further formats to find and
obtain a data or presentation format. The destination application may have
different preferences for formats depending on where the selection is in the
destination document (e.g. pasting into a picture frame vs. pasting into a
stream of text).
The Paste Link command behaves like the Paste command in its enumeration and
selection of data and presentation formats, but first checks for the
existence of the ObjectLink format, and ignores the Native and OwnerLink
formats. If ObjectLink and a useful format are found, the destination
application makes a data link or a compound document link as appropriate.
If ObjectLink is not available, the destination may look for a Link format
and create a non-object link  as in existing applications.
Non-compound document applications that try to Paste from such a clipboard
offering will simply ignore the Native, OwnerLink and ObjectLink formats,
and behave as they do now. Non-compound document applications that Copy to
the clipboard will not offer these formats, and a data transfer will result,
as happens at present. It is possible that some existing applications do not
follow the rules on offering preferred formats first, and that a compound
document application following these Paste rules will end up with a
different result than it would today.

The following list shows the results of these rules in various
representative scenarios.

 Pictorial data
 e.g. a chart in Excel or a CAD drawing or part of a presentation etc.
Application or domain specific formats e.g. .XLC, DRW

Native(src)
OwnerLink(src)
Picture
ObjectLink, Link


 Structured data
 e.g. a range of a spreadsheet or a data table in a DBMS etc

Structured data formats e.g. Biff
Structured document formats e.g. SGML, RTF
Native(src)
OwnerLink(src)
Picture, Text etc.
ObjectLink, Link


 Range of structured document

Structured document formats e.g. SGML, RTF
Native(src)
OwnerLink(src)
Picture, Text etc.
ObjectLink, Link


 Compound document link
(unmodified by the container)

OwnerLink(owner)
Picture or other presentation format
ObjectLink, Link


 Embedded object
(unmodified by the container)

Native(owner)
OwnerLink(owner)
Picture or other presentation format
ObjectLink, Link

Note that because of the ability to have object-specific handler libraries,
it will be possible to have Native data in the set of presentation formats
available in the above cases.  For this reason the order of appearance of
Native and OwnerLink is important to disambiguate an embedded object (Native
first) and a link (OwnerLink first) which happens to use (a cached copy of)
Native data for its presentation.

 Source selection
 Destination context


 Pictorial data
Worksheet: embed
Structured document: embed
Picture frame: embed
Rich text frame: embed
Presentation graphics: embed
Draw program: embed

 Structured data
Worksheet: convert
Structured document: convert
Picture frame: embed
Rich text frame: convert
Presentation graphics: embed
Draw program: embed

 Structured document
Worksheet: convert
Structured document: convert
Picture frame: embed
Rich text frame: convert
Presentation graphics: embed
Draw program: embed

 Compound document link
Worksheet:link to owner
Structured document: link to owner
Picture frame: link to owner
Rich text frame: link to owner
Presentation graphics: link to owner
Draw program: link to owner

 Embedded object
Worksheet: embed owner
Structured document: embed owner
Picture frame: embed owner
Rich text frame: embed owner
Presentation graphics: embed owner
Draw program: embed owner

Notes:
ObjectLink always describes the source class, document, and item. Paste Link
always uses the ObjectLink format and some data or presentation format (or
Link format for non-object sources).
OwnerLink may describe the source or the owner, but always describes the
owner application for the object. Paste will use Native, OwnerLink and some
presentation format if no preferable data format is found.
There are some cases where the user might legitimately want a different
result than is given by these rules. There are a number of ways that these
can be achieved, some are application-dependent and involve additional
function in applications. Others involve an extra action by the user to
achieve the intended result.
The first case is where the Copy/Paste rules lead to a data conversion and
the user wants to embed. For example, we have chosen to offer structured
document formats in preference to Native for structured data, on the grounds
that more often the conversion will be what is desired. To force embedding
rather than conversion, the user should have ways to select the source
material in an unambiguous way (in cases where the source application is
rich in both data manipulation and presentation). Additionally, where a
destination application is capable of converting document formats as well as
embedding, it should offer the user a way to indicate the context into which
the Paste is to happen, for example by inserting a picture frame and pasting
into that, or through some Paste Special... command.
Cases where these rules lead to undesired embedding are all dealing with
pictures (either source or destination). One variant is that the user wants
to take a picture that is the result of a computation (e.g. a chart), and
import it into a drawing editor to change it. (The case of annotation is
nicely handled by embedding it and adding drawing elements).  Drawing
editors might have some special command for this purpose, as it is specific
to those applications and is a rare case. The other variant is where the
user does not want to pay the storage cost for the Native data, and is
prepared to lose the ability to change the picture (except with a drawing
editor as above). For this case, command buttons in the property dialogs of
the objects allow them to be unlinked or converted to static pictures after
the Paste has taken place.  If the user wants to convert an already linked
or embedded object, he simply opens it first and selects the data he
requires.
An interesting case occurs where the selection is an embedded picture that
the source container has modified (e.g. recolored). Following the rules
above, Copy/Paste will cause the recolored object to be embedded in the
destination: what the user sees in the source is what he gets in the
destination. If the user wants the original picture, he need simply open it
or otherwise select the unmodified object, and Copy/Paste that.

Registration
Clients must be able to locate servers for objects that they contain.  This
is achieved by servers registering the required information into the system
registration database when the server is installed onto the system.  The
details of what must be registered are described in the implementor's guide.
Applications that implemented the protocol prior to the availability of this
library and the registration service used a different registration
mechanism: they stored information in a special section in win.ini.
Applications using this library will have access to those servers
transparently, since the registration service will perform the mapping of
the registration information.  Similarly, older client applications which
look in win.ini will find information about newer servers which were
registered with the system since the registration service will store the old
format information in win.ini for the purpose.


Client
A client is a container of other objects. A client application uses the
services of other applications (servers) to carry out editing and rendering
of the objects that the client document contains. The client application
provides storage for the object, and contextual information about the target
printer, where on the page the picture should be printed, etc., and provides
the user with the means to open the object for editing using the correct
server application. In order to be a client, or container, the application
must provide ways to bring objects into the container and take them out
again. The client must provide the permanent storage for the object within
the container document's permanent storage (i.e. file).
For embedded objects, the client library will store the native data for the
object, some presentation data for the object (e.g. a metafile), and the
link information which contains the ClassName, some client-supplied document
name, and the item name associated with the object. Details of use of the
link information are given in the protocol reference section later in this
document.
For links to other documents, the client library will store the link
information as above, where the document name in this case will be the
permanent name for the document (e.g. its pathname), and also the
presentation data as above along with a timestamp recording when the
presentation data was obtained.
Certain operations (updating objects, launching and closing down servers
etc.) are asynchronous operations.  The library does not retain control
during these operations, but marks the objects as busy, and returns to the
client so that events can be processed.  As long as the client is
dispatching events, the library will process the transactions in a
coroutine-like manner.   The library will notify the client by a callback
function when the operation completes.

Protocol Checking
A client must check that a server it wants to contact will support the
desired protocol. For this specification the protocol is identified by the
string "StdFileEditing". The check is performed by passing the protocol name
to the library functions that create objects (from clipboard contents, from
files etc).
if( EcdCreateFromClip( "StdFileEditing", ... ) == ECD_OK ) ...

Open a Document
When a client opens a document that contains a link or an embedded object,
it should register the document (with EcdRegisterClientDoc) and call the
client library to load the object.  The client should query the object to
determine if it has changed since the document was last loaded and needs to
be updated.  If so, the client should accumulate a list of out-of-date
objects and offer the user the opportunity to update them. Note that for
embedded objects it is possible for the presentation data to be out of date,
since the embedded object may itself contain links to other objects.
    EcdRegisterClientDoc( ... )
    load application data from file
    if found an object
        if( EcdLoadFromStream( &filestream, "StdFileEditing", &clientstruct,
        &lpobj) != ECD_OK )
            return BADFILE
        if (EcdQueryOutOfDate( lpobj ) != ECD_OK)
            add object to list of out-of-date items
    when load completed, if out-of-date objects exist
        inform the user, offer to update selected objects


Save or Close a Document
When a document containing linked or embedded objects is saved or closed,
the client should save the objects into the file by calling EcdSaveToStream.
The library will save up-to-date versions of the relevant data for the
objects (native, link, presentation as appropriate) in the client documents
permanent storage (e.g. file). If some server is open, the client library
will retrieve the data from the servers before saving. If the client
launched the server as a slave to edit the object, the client library will
close down the server.  Since updates and closing down servers are
asynchronous operations, the library may return indicating that the client
application should not terminate until the library notifies the client that
the operation is complete.  The client should notify the library whether the
document was saved or changes were discarder, and should call
EcdReleaseClientDoc to indicate that the document is no longer open.
case SAVE:
    if( document not saved)
        save client application data
        for each object
            if (EcdSaveToStream( lpobj, &filestream) == ECD_BUSY)
                while notification not received
                    dispatch messages
        EcdSavedClientDoc( ... )
    break;

case CLOSE:
        for each object
            if( EcdRelease(lpobj ) == ECD_BUSY)
                add to list of objects in process of closing
        while busy objects remain
            dispatch messages
        if( close without save )
            EcdRevertClientDoc( ... )
        EcdReleaseClientDoc( ... )


Display and Print
The client should set up the device context and bounding rectangle for
rendering the object and call
EcdDraw( lpobj, hDC, &bounds, hFormatDC );
The library will either call the class-specific rendering DLL to render the
object if available, or will use the presentation data for the
objects to display and print in the appropriate place.  The library will
periodically call back to the client callback function during drawing.  The
client function may check for interrupt etc, and should return zero if it
wants to prematurely terminate the drawing.  The EcdDraw function
will then return immediately indicating that the drawing was interrupted.
It is also possible for the client to take some actions within the callback
function and return non-zero to indicate that drawing should continue,
provided that those actions do not interfere with the drawing e.g. by
scrolling the window.  An example is that the client might give up focus
during drawing to permit the user to switch to another window.

Open an Object
When the user requests the client to open the object for editing, the client
should call EcdOpen(lpobj, fShow).  The library will notify the client when
the server is properly open or when something fails.  The object may be
displayed during this process, but should not otherwise be altered.  FShow
tells the server whether to show the window to the user (true, non-zero) or
to keep it hidden (false, zero).  The latter is useful for invisibly
updating an object.

Change Printer, Resize
Objects are assumed to have a given size on the intended target device
(printer etc).  Sizes are all communicated in HIMETRIC units. The client
should call EcdSetTargetDevice(lpobj, hTargetDevice) if the target output
device is changed, and should call EcdSetBounds(lpobj, &newBounds) if the
size of the rectangle is changed (e.g. by user action). See also EcdDraw.

Cut and Copy
Clients must provide support for transferring objects out of their documents
through the cut and copy commands, as well as taking them in through paste
and paste link commands. There is additional support required for being a
server, which is used to create objects from data and to create links. It is
likely that many applications will be able to act as both client and server,
and it is convenient to describe both here.
Applications that cannot act as servers for embedded objects would not offer
their Native data or OwnerLink formats.  Applications that cannot act as
servers for links would not offer ObjectLink or Link format. In the case
that an application can be a server for embedded objects, it should use the
OwnerLink format to convey its name and item information to the receiving
application.
When an linked or embedded object is selected, clients must call
EcdCopyToClipboard or EcdCutToClipboard as appropriate.

The values assigned to each of the formats placed on the clipboard by the
copy command will depend on the nature of the current selection. The
following algorithm summarizes the rules containers use to assign values to
the various formats placed on the clipboard by the copy command:
    if (selection is link or embedded object)
        EcdCopyToClipboard( lpobj )     // or EcdCutToClipboard...
    else
        offer any data formats that adequately
                describe the selection
        if (can be server for embedded objects)
            offer Native = source's native data for selection
            offer OwnerLink = source generated description
                    of selection
    offer other formats that can be used to present the selection
            or into which it can be converted
    if (can serve links
            & source is not an open embedded object)
        offer ObjectLink = source generated description
                of location in source
        if( can serve old kind of links )
            offer Link = appname/topicname/itemname as in existing
            applications


Paste
The "Edit-Paste" command pastes the object, data, or link on the clipboard
at the current insertion point. If data is on the clipboard then the data is
converted into a native data type of the container as it is pasted; if an
object is on the clipboard it is embedded in the container; if a link is on
the clipboard it is used to create a link in the container.

The following algorithm summarizes the rules containers apply to the formats
on the clipboard to determine how to execute a paste command:
    for each format on the clipboard in order
        if format is acceptable for target
            if format is not Native or OwnerLink
                convert the data and paste it in
            else
                EcdCreateFromClip( "StdFileEditing", ...)
        else
            continue searching
    if no format was found
        refuse paste

After the paste operation is completed, clients should select the newly
pasted item, unless the item has been converted to a container-native type.
This will give the user quick access to the properties of the object.

Paste Link
The "Edit-Paste Link" command creates a link at the target identified by the
current selection, to the item identified on the clipboard. This command
should be disabled if link information is not available on the clipboard.

The following algorithm summarizes the rules containers apply to the formats
on the clipboard to determine how to execute a paste-link command:
    if ObjectLink format is available
        if( EcdCreateLinkFromClip( "StdFileEditing", ...) == ECD_OK )
            //all done
        else
            if Link format is available
                do whatever link stuff you do today

As with the paste operation, clients should select the new object, to give
the user quick access to the properties.

Undo
Clients should save a copy of the embedded object when it is opened for
editing, so that when the editor is closed and the object is updated, the
user still has the chance to undo all of the changes made in the editor.
This must be supported in the client, since the server has no way to revert
to the prior state.

Links
A client that maintains links might offer functions to the user to manage
those links, reconnect broken links to renamed documents etc. This is
determined by the client. The library provides functions to query and set
the link information for the object so that the client application can
implement the user interface for these functions.  Note: the item name may
be null in which case the link refers to the whole of the server document.

Properties
Applications that support this model must implement a "<Type> Properties..."
command in their "Edit" menus; selecting this command produces an  object
properties dialog for the currently selected object or link. If a client
supports a variety of update rules, it should provide functions whereby the
user can change the attributes of the link, change a link to an embedded
object (which requires the client to launch the server and request the
native data), unlink, leaving only the picture, and so on.

Shutdown
When a client or server shuts down while it is the clipboard owner, it
should render all formats to the clipboard, subject to memory availability.
The application should ensure that the clipboard presents a consistent state
(e.g. there is no native data without corresponding owner link), and
reflects the preference order of formats and the nature of the selection
that was copied (e.g. not an owner link without native data for and embedded
object).
When shutting down, the client should delete all objects from memory.
Ecdrelease may return indicating that the client should not terminate yet,
but should wait (dispatching messages) until a notification callback informs
the client that it is safe to terminate.

Server
Server applications provide their service by allocating structures defined
in Part 4 and registering them with the server library.  The server library
will implement the DDE execute commands and DDE data conventions described
in the DDE protocol reference appendix. The library will call back to the
server application to use the service.  Servers should be passive, and
should not make assumptions about ordering of callbacks.
Server implementors will also need to refer to the Copy command described in
the client section above.

Opening
When a client launches a server to edit a linked or embedded object, it
passes a command line switch to the server("-Embedding", for historical
reasons). The server should change some of its menu commands as listed
below, and be prepared to be controlled partially by the client, through the
server library. See Part 4 for details of the latter.
The library will launch a new instance of a server in order to edit an
embedded or linked object, except in the case that the object is a link to a
document that is already open, or if the server is a single instance
application.  The latter case is handled by the startup negotiation
described in the appendix. The intent is that separate instances of
applications should normally be used to avoid interfering with the
application's context information (e.g. current window, current selection
etc).

Shutdown
For embedded objects, the client library will use DDE commands to instruct
the server library to close documents, exit, show the window, etc. The
server library will make callbacks to the server application to invoke these
functions.  Servers should comply with these commands without confirmation
dialogs etc, and should exit when so instructed. The onus is on the client
to provide the requisite confirmation dialogs.  For linked objects, although
the client will open the server it will not instruct it to close the
document or exit (unless it is performing an invisible update).  The linked
object has an existence independent of the client and the user (through the
server application) controls saving and closing the document.
There is one case where the server for an embedded object must be more
intelligent: if it is a multiple document application, and more than one
client has established contact, or the user has opened additional documents,
then the server should remain open until the user closes it. Exit commands
from clients should be ignored.
See also the Shutdown in the client section above for clipboard behavior.

Copy
The behavior of the copy command is described in the client section above.
If a server cannot also act as a client, it follows that the selection will
only ever be server data. The server should offer descriptive data formats
first, then Native, OwnerLink, then presentation and other formats, and
lastly ObjectLink (and possibly Link) formats.

Save As
The normal "Save As..." command has the additional effect of changing the
association of the in-memory document to be the new file, , so the
connection to the client should be broken (after optionally updating the
client's version of the object.

Update
When editing an embedded object, the server should change its Save menu
command to be "Update".  This should notify the client (via the server
library) of changes as described in the protocol reference section.

Exit, Close
The Exit command should be changed to "Exit and Update" or "Exit and
return", and the main window close command should have the same effect. When
a server that is editing an embedded object is closed and changes have been
made but not updated to the client, it should query the user whether to
perform the same actions as Update, above, before closing. Similarly, a
multiple document server that closes a window containing an object embedded
in some client, it should perform the Update action as above before closing.

Renaming a Document
If a server of a link renames the document while a client has a conversation
with the server (the server library creates an object structure when this
happens),  the server should notify the library of the change of name.  The
client will in turn be notified of change by the client-side library.

Installation of Classes
Installing a server class is simply a matter of registering the editor. See
the registration specification in the API specification section.




API specification
All types, constant values and functions required by clients and servers are
declared in a C header file "ecd.h".  Additional types and functions
required by class-specific handlers are declared in "objcreate.h".

Introduction and general definitions
A recurrent idiom in these structure definitions is the use of a  vtbl,
which is a table of function pointers, and a  vptr, which is a pointer to a
vtbl.  The vptr is stored in a data structure whose address is used to
identify and access the data structure.  Extra instance-specific state
information may be stored in the data structure that contains the vptr,
initialized by and for the use of the object handler functions.  The client
for the particular object should not access this state information as its
content is entirely determined by the implementor of the handler functions.
In various occurrences of this idiom the creator may be the client
application, the client library, and object handler library, the server
library, or the server application.
The convention for calling a function whose address is stored in a vtbl is
to pass the address of the object as the first argument.   This permits the
function to access the state stored in the structure without use of global
data and without use of void* parameters to pass the contextual information.
This scheme allows multiple instances of the same type of object, and
extension of the state information stored in the structures.


Client API specification

Types, Data structures and parameter definitions
All functions return a status code to indicate success or some failure
condition.  Result values are returned through pointer parameters.  Return
codes are defined as follows:

ECDSTATUS
//  return codes for ECD functions

typedef enum {
ECD_OK,                 // function operated correctly
ECD_WAIT_FOR_RELEASE,    // client must wait for release callback before
quitting or calling
                // another method on the object.
ECD_BUSY,        // attempt to execute a method while another method
                                // is being executed in the background.
ECD_ERROR_MEMORY,       // could not allocate or lock memory
ECD_ERROR_FATAL,        // only DEBUG version. normally fatal error
ECD_ERROR_STREAM,       // (ECDSTREAM) stream error
ECD_ERROR_STATIC,       // object is unexpectedly static
ECD_ERROR_BLANK,        // critical data missing
ECD_ERROR_LAUNCH,    //failed to launch server
ECD_ERROR_COMM,          //failed to establish communication with server
ECD_ERROR_DRAW,      //error or interrupt while drawing
ECD_ERROR_CLIP,          //failed to get/set clipboard data
ECD_ERROR_FORMAT,       // requested format is not available
ECD_ERROR_ILLEGALOBJECT,// Not a valid object
ECD_ERROR_OPTION,       // invalid option (update or render)
ECD_ERROR_PROTOCOL,    // server not following protocol
ECD_ERROR_ADDRESS,      // one of the pointers is invalid
ECD_ERROR_NOT_EQUAL,    // objects are not equal
ECD_ERROR_HANDLE,       // invalid handle encountered
ECD_ERROR_GENERIC,
ECD_ERROR_MAPPING_MODE, // This is temporary: picture has a mapping mode
that
                // cannot be handled. Remove it when you figure
                                       // out how to convert to
                                       MM_ANISOTROPIC
ECD_ERROR_INVALIDCLASS, // Invalid class
ECD_ERROR_SYNTAX,       // command syntax error
ECD_ERROR_PROTECT_ONLY, // attempt to call create APIsfrom real mode
ECD_ERROR_NOT_OPEN,     // object is not open for editing
ECD_ERROR_POKENATIVE,   // failure of poking native data to server
ECD_ERROR_ADVISE_PICT,  // failure of advise for picture data
ECD_ERROR_DATATYPE,     // data format is not supported
ECD_ERROR_ALREADY_BLOCKED // trying to block a blocked server
} ECDSTATUS;



Structures provided by the library for the client
The object structure is an in-memory structure used to hold information
about the embedded or linked object.  It is created by the library when an
object is read from a file, pasted from the clipboard, or duplicated.  The
client does not see the content of this structure, merely its pointer.
Client programs directly call functions to manipulate these objects.  These
functions reside in a DLL, and use the vtbl structure to dispatch to the
object-specific implementation.

ECDOBJECT, LPECDOBJECT

struct  _ECDOBJECT    /* opaque to clients */

typedef struct  _ECDOBJECT  ECDOBJECT, FAR* LPECDOBJECT;
Server programs and class-specific libraries  provide an implementation of
the ECDOBJECT type.  The set of methods that must be supplied is specified
in the sections on object handlers and servers.

Structures provided by the client for the library
Object libraries require certain functionality from the client application
in order to do their work.  This functionality is made available to the
object libraries through structures and callback functions that the client
defines and passes as arguments to the libraries.  In this way the client is
given great flexibility in how the functions are implemented.
ECDCLIENT is a structure allocated by the client and passed to the library
when an in-memory object is being created.  It is used to pass a callback
function that the library uses to notify the client of various events, along
with any state that the client wishes to associate with the object..  The
pointer to the client structure and the pointer to the object are remembered
by the passed to the callback function along with the reason for the
notification. The client may add extra information associated with the
object for its own purposes at the end of the client structure.  The library
stores the client pointer in the object structure so that it (the library)
can locate it when needed.

ECD_NOTIFICATION
// Codes for CallBack events
typedef enum {
ECD_CHANGED,
ECD_SAVED,
ECD_CLOSED,
ECD_RENAMED,
ECD_QUERY_PAINT,        // interruptible paint support
ECD_RELEASE,            // object is released (asynchronous operation is
                            // is finished)
ECD_QUERY_RETRY         // retry query for the busy from the server.
} ECD_NOTIFICATION;




ECDCLIENT, LPECDCLIENT
struct _ECDCLIENT;    /*forward*/

typedef struct _ECDCLIENT FAR *LPECDCLIENT;

struct _ECDCLIENTVTBL
{
    BOOL (FAR PASCAL  *CallBack) (    LPECDCLIENT lpclient,
                    ECD_NOTIFICATION notification,
                    LPECDOBJECT lpobject);
};

typedef struct _ECDCLIENT {
    struct _ECDCLIENTVTBL FAR* vptr;
    /* any client supplied state goes here */
} ECDCLIENT;


ECDCLIENT: CallBack
BOOL (FAR PASCAL *CallBack)( lpclient, notification, lpobject );
lpclient
LPECDCLIENT
long pointer to the client structure associated with the object.  The
library retrieves this pointer from its object structure when a notification
occurs, uses it to locate the callback function, and passes the pointer to
the client structure for the client application's use.

notification
ECD_NOTIFICATION
a value of an enumerated type which indicates the reason for the
notification.

Values are:
ECD_CHANGED: object has changed and needs to be redrawn, will need to be
saved etc.
ECD_SAVED:  a linked object has been saved in its server.
ECD_CLOSED:  object has been closed (in its server).
ECD_RENAMED: a linked object has been renamed in its server.  This variant
is for information only, as the library takes care of updating its link
information.  No particular action is required. This notification implies
ECD_CHANGED.
ECD_QUERY_PAINT: This notification is made during lengthy drawing operations
to allow interrupt. See return value, below.
ECD_RELEASE:  This notification informs the client that an asynchronous
operation on the object has finally terminated either correctly or with an
error.  The client should call EcdQueryReleaseError to determine whether the
operation succeeded, and optionall can call EcdQueryReleaseMethod to find
out the operation that has terminated (in case the client has forgotten).
ECD_QUERY_RETRY:  the server has responded to a request indicating that it
is busy.  This notification asks the client if the library should continue
trying the request.  If the callback function returns false, the transaction
with the server will be aborted.


return value
BOOL
this value is ignored except in the case of ECD_QUERY_PAINT and
ECD_QUERY_RETRY.   The client should return false (zero) if the painting or
server transaction should be aborted, and true (non-zero) if  the library
should continue.
The client should act on these notifications at the next appropriate time
(e.g. main event loop, closing the object etc).  Update of objects may be
deferred until the user requests update, if the client wishes to provide
that functionality.  The client may call the library from a notification
callback function.  The library will be properly re-entrant.  There will be
some things that the client may not do while some operations are in progress
(opening etc).  In these cases the library will return ECD_WAIT_FOR_RELEASE
when the function is first initiated, will notify the client of completion
or error, and will return ECD_BUSY if the client attempts to invoke a
conflicting operation while the previous one is in progress.  The client can
determine if an asynchronous operation is in progress by calling
EcdQueryReleaseStatus, which returns ECD_BUSY if the operation has not yet
completed.

ECDSTREAM, LPECDSTREAM
The ECDSTREAM structure is provided by the client application.  It provides
stream IO functions (read, write, seek) for the library to use when loading
and saving objects.  This permits the client to determine where the
permanent storage is by providing variations on the IO procedures, e.g. to
store the object in a database.
// Stream definitions
typedef struct _ECDSTREAM   FAR * LPECDSTREAM;

typedef struct  _ECDSTREAMVTBL{
    LONG  (FAR PASCAL *Get) (LPECDSTREAM, LPSTR, LONG);
    LONG  (FAR PASCAL *Put) (LPECDSTREAM, LPSTR, LONG);
    LONG  (FAR PASCAL *Seek)(LPECDSTREAM, LONG, INT);    //like _llseek
} ECDSTREAMVTBL;

typedef  ECDSTREAMVTBL  FAR   *LPECDSTREAMVTBL;

typedef struct  _ECDSTREAM {
    LPECDSTREAMVTBL      lpstbl;
} ECDSTREAM;

The stream need not be valid all the time while the object exists. The
stream is only valid for the duration of the function to which it is passed.
The library will obtain everything it needs.  In event of an error reading
or writing the stream, the library will indicate the existence of the error
back to the client, but not its nature.  The client-supplied stream object
should store any needed indication of what the error condition was so that
the client can take recovery action.

ECDSTREAM: Get
LONG (FAR PASCAL *Get)( lpstream, lpbuf, cbbuf );
lpstream
LPECDSTREAM
a long pointer to a stream structure allocated by the client

lpbuf
LPSTR
a long pointer to a buffer to fill with data from the stream
cbbuf    LONG    a long count of bytes to read into the buffer
return value    LONG    a long count of bytes actually read into the buffer.
A return value of zero implies end-of-file was encountered.  A negative
return value implies an error was encountered.


ECDSTREAM: Put
LONG (FAR PASCAL *Put)( lpstream, lpbuf, cbbuf );
lpstream
LPECDSTREAM
a long pointer to a stream structure allocated by the client

lpbuf
LPSTR
a long pointer to a buffer from which to write data into the stream
cbbuf    LONG    a long count of bytes to write into the stream
return value    LONG    a long count of bytes actually written.  A return
value less than cbbuf implies an error occurred or insufficient space in the
stream.

ECDSTREAM: Seek
LONG (FAR PASCAL *Seek)( lpstream, loffset, iorigin );
lpstream
LPECDSTREAM
a long pointer to a stream structure allocated by the client.  loffset,
iorigin and the return value are exactly as specified in the Windows _llseek
function.

Protocol naming and checking
Protocols are definitions of API sets.  This API set is the basic compound
document protocol.  Protocols are named with (null terminated) string names;
this one is called StdFileEditing.  The name of the protocol that the client
requires (identifying the API functions he needs to call) is passed in to
the function that create the object.  The library checks that the object
does in fact support that protocol and fails the request if not.

Rendering Options
The client may control the way the object will be rendered.  The library
provides support for handling all of the rendering, obtaining data for the
client to handle the rendering, or doing nothing.

ECDOPT_RENDER, ECDCLIPFORMAT
// rendering options

typedef enum {
    ecdrender_none,    //library gets no data, will not draw
    ecdrender_draw,    //client will call draw, lib manages data
    ecdrender_format    //client will call getdata and render,
                // lib gets and stores data.
} ECDOPT_RENDER;

typedef WORD ECDCLIPFORMAT; // standard clipboard format type
            // tells lib what format to get for ecdrender_format


API functions
Functions that create objects rather than operating on existing objects
return the object pointer through a pointer argument (LPECDOBJECT FAR *)
rather than taking an object pointer as the first argument.  Windows memory
management is used to obtain storage for the object structures.

Client Document Management Functions
In order to enable proper link tracking in future implementations of the
libraries, the library needs to keep track of client documents where obejcts
are being created and destroyed.  For these purposes the client must
register its open document(s) with the library and obtain a (long) handle
for use in object-creation functions.  The client must also notify the
library when renaming, closing, saving, or reverting to saved state has been
performed.  The first function below registers an open document with the
library, and the following four functions notify the library of
document-level actions that the client has performed.
In addition, the client must maintain a persistent name for each object that
is unique within the scope of the client document.  This name must be
specified when the object is created.  It must be stored in the client
document and must remain the same when the saved and reopened later.

EcdRegisterClientDoc
LHCLIENTDOC FAR PASCAL EcdRegisterClientDoc (classname, documentname,
reserved);
classname
LPSTR
string name of the class of the client document

documentname
LPSTR
string name of the client document, typically a fully qualified pathname

reserved
LONG
reserved for future use, must be 0L.

return value
LHCLIENTDOC
a long handle to be used to identify the client document in object creation
calls and the following document management calls.

EcdReleaseClientDoc
ECDSTATUS   FAR PASCAL EcdReleaseClientDoc (lhclientdoc);
lhclientdoc
LHCLIENTDOC
handle to the document which is no longer open.

EcdRenameClientDoc
ECDSTATUS   FAR PASCAL EcdRenameClientDoc (lhclientdoc, newdocname);
lhclientdoc
LHCLIENTDOC
handle to the document which has been renamed (eg with Save As)

newdocname
LPSTR
the new string name of the document.

EcdRevertClientDoc
ECDSTATUS   FAR PASCAL EcdRevertClientDoc (LHCLIENTDOC);
lhclientdoc
LHCLIENTDOC
handle to the document which has reverted to saved state

EcdSavedClientDoc
ECDSTATUS   FAR PASCAL EcdSavedClientDoc (LHCLIENTDOC);
lhclientdoc
LHCLIENTDOC
handle to the document which has been saved

Utility functions
Some of the functions defined here are implemented in a library of utility
functions.  The real work is done by calling method functions on the
objects.  To get full flexibility in managing the objects a client can call
the object methods directly.  To get a simpler but less flexible interface,
the utility functions are provided.

Enabling Paste and Paste link commands
The following functions check that the object on the clipboard supports the
required protocol, and can be linked or embedded as appropriate.  They are
called when the client wants to check whether to enable a Paste or Paste
Link command.  The client should supply the protocol string name
"StdFileEditing".

EcdQueryCreateFromClip
ECDSTATUS FAR PASCAL EcdQueryCreateFromClip  ( protocol, renderopt, cfFormat
);
protocol
LPSTR
the name of the protocol that the client wishes to use.  Currently the
library supports "StdFileEditing" which is the internal name of the object
linking and embedding protocol, and "Static", which allows simple clients to
use the library to manage static pictures for them.  Static objects will
fail if asked to open, and will generate no notifications.

renderopt
ECDOPT_RENDER
an indication of how the client wants to have the object displayed and
printed:

ecdrender_none: the object is not to be shown at all.  This option may be
used to hypertext links etc.  The library will not obtain any presentation
data, will not draw ecdrender_draw: the client will call EcdDraw, the
library will obtain and manage presentation data

ecdrender_format: the client will call EcdGetData and do the rendering, the
library will obtain and manager the data in the requested format (see
below).

cfFormat    ECDCLIPFORMAT    the clipboard format that the client will
request  through EcdGetData, only used with ecdrender_format above.

EcdQueryLinkFromClip
ECDSTATUS FAR PASCAL EcdQueryLinkFromClip( protocol, renderoption, cfFormat
);
arguments are as above

Executing Paste and Paste link commands
The following functions check that the object on the clipboard supports the
required protocol, and can be linked or embedded as appropriate, and perform
the operation.  They are called when the client wants to execute a Paste or
Paste Link command.  The client should supply the protocol string name
"StdFileEditing", or "Static" if the object is a non-editable picture.

EcdCreateFromClip
ECDSTATUS FAR PASCAL EcdCreateFromClip ( protocol, lpclient, lhclientdoc,
lpobjname, lplpobject , renderopt, cfFormat);
protocol
LPSTR
as protocol above

lpclient
LPECDCLIENT
a long pointer to an ECDCLIENT structure allocated and initialized by the
client application.  This pointer will be used to locate the CallBack
function, and passed in CallBack notifications.

 lhclientdoc
LHCLIENTDOC
long handle to client document where object is being created

lpobjname
LPSTR
the client's name for the object.

lplpobject
LPECDOBJECT FAR *
a long pointer to a long pointer to an ECDOBJECT.  The caller should pass
the address of an LPECDOBJECT into which the library will store the address
of the created object.

renderopt
ECDOPT_RENDER
as renderopt above

cfFormat
ECDCLIPFORMAT
as cfFormat above

return value
ECDSTATUS
see ECDSTATUS type definition

EcdCreateLinkFromClip
ECDSTATUS FAR PASCAL EcdCreateLinkFromClip( protocol, lpclient, lhclientdoc,
lpobjname, lplpobject , renderopt, cfFormat );

arguments and return value are as above.  This function creates a link to an
object rather than an embedded object.

 Copying or cutting an object to the clipboard


EcdCopyToClipboard
ECDSTATUS FAR PASCAL EcdCopyToClipboard( lpobject );
 lpobject
LPECDOBJECT
a long pointer to the object to be copied to the clipboard

return value
ECDSTATUS
see ECDSTATUS type definition

Puts the object on the clipboard (Copy command).  The client should open the
clipboard, offer any data formats on the clipboard, call this function,
offer any additional presentation formats, and close the clipboard.   If the
client  wishes to support delayed rendering it should use
EcdEnumObjectFormats to offer them to the clipboard, and either EcdGetData
or EcdCopyToClipboard to actually render the data.  Alternatively, a simple
client may render the data immediately with the following functions and
avoid deferred rendering.

EcdCutToClipboard
ECDSTATUS FAR PASCAL EcdCutToClipboard( lpobject );
lpobject
LPECDOBJECT
a long pointer to the object to be cut to the clipboard

return value
ECDSTATUS
see ECDSTATUS type definition

This function cuts the object to the clipboard (which may optimize compared
to copy/delete).  Usage is as above.

Load from  and Save to client's file
The client should call these functions to load the object from the
containing document and save it back after editing.  The client does not
need to know the class of the object, or whether it is linked or embedded
(although it can find out using EcdEnumObjectFormats).  The client simply
needs to remember where objects are stored in the file.

EcdLoadFromStream
ECDSTATUS FAR PASCAL EcdLoadFromStream( lpstream, protocol, lpclient,
lhclientdoc, lpobjname, lplpobject );
lpstream
LPECDSTREAM
a long pointer to an ECDSTREAM structure allocated and initialized by the
client application.  The library will call the Get method in the ECDSTREAM
structure to obtain the data for the object.

protocol
LPSTR
see protocol earlier

lpclient
LPECDCLIENT
see lpclient earlier

lhclientdoc
LHCLIENTDOC
long handle to client document where object is being created

lpobjname
LPSTR
the client's name for the object.

lplpobject
LPECDOBJECT FAR *
a long pointer to an LPECDOBJECT where the library will store the long
pointer to the object

return value
ECDSTATUS
see ECDSTATUS type definition

EcdSaveToStream
ECDSTATUS FAR PASCAL EcdSaveToStream( lpobject, lpstream );
lpobject
LPECDOBJECT
a long pointer to the object to be saved into the stream

lpstream
LPECDSTREAM
a long pointer to an ECDSTREAM structure allocated and initialized by the
client application.  The library will call the Put method in the ECDSTREAM
structure to store the data from the object.

return value
ECDSTATUS
see ECDSTATUS type definition

Object creation


Creating new objects


EcdCreate
ECDSTATUS FAR PASCAL EcdCreate( protocol, lpclient,classname, lhclientdoc,
lpobjname, lplpobject ,renderopt, cfFormat );
This function creates an object of a specified class.  The server is opened
to perform the initial editing.

protocol
LPSTR
as protocol earlier

lpclient
LPECDCLIENT
as lpclient earlier

classname
LPSTR
null terminated string which is the registered name of the class of the
object to be created.

lhclientdoc
LHCLIENTDOC
long handle to client document where object is being created

lpobjname
LPSTR
the client's name for the object.

lplpobject
LPECDOBJECT FAR *
as lplpobject earlier

renderopt
ECDOPT_RENDER
as renderopt earlier

cfFormat
ECDCLIPFORMAT
as cfFormat earlier

return value
ECDSTATUS
see ECDSTATUS type definition

EcdCreateFromTemplate
ECDSTATUS FAR PASCAL EcdCreateFromTemplate( protocol, lpclient,
objectname, lhclientdoc, lpobjname, lplpobject, renderopt, cfFormat );
This function creates an object given the name of an object in a file to use
as a template.  The server is opened to perform the initial editing.
This function creates an object of a specified class.  The server is opened
to perform the initial editing.

protocol
LPSTR
as protocol earlier

lpclient
LPECDCLIENT
as lpclient earlier

objectname
LPSTR
null terminated string which is the pathname of an object to be used as a
template for the new object.  The server is opened for editing and loads the
initial state of the new object from the named object

lhclientdoc
LHCLIENTDOC
long handle to client document where object is being created

lpobjname
LPSTR
the client's name for the object.

lplpobject
LPECDOBJECT FAR *
as lplpobject earlier

renderopt
ECDOPT_RENDER
as renderopt earlier

cfFormat
ECDCLIPFORMAT
as cfFormat earlier

return value
ECDSTATUS
see ECDSTATUS type definition


EcdCreateFromFile
ECDSTATUS   FAR PASCAL  EcdCreateFromFile (lpprotocol, lpclient, lpfilename,
lhclientdoc, lpobjname, lplpobject, optrender, cfFormat);
EcdCreateFromFile creates an embedded object from the contents of a named
file.  The server will be activated to render the native data and picture,
and then closed down.  The server will not show the object to the user for
editing.


EcdCreateLinkFromFile
ECDSTATUS   FAR PASCAL  EcdCreateLinkFromFile ( lpprotocol, lpclient,
lpfile, lpitem, lhclientdoc, lpobjname, lplpecdobject, optRender, cfFormat);
Analogous to EcdCreateFromFile, this function creates a link to an object in
a file.  The server will be activated if necessary to render the
presentation data, but will not be shown to the user for editing.

lpprotocol
LPSTR
as above

lpclient
LPECDCLIENT
as above

lpfile
LPSTR
as above

lpitem
LPSTR
the string name of the item which identifies the part of the server document
to be linked.  This may be a null string in which case the link is to the
whole of the document.

lhclientdoc
LHCLIENTDOC
as above

lpobjname
LPSTR
as above

lplpecdobject
LPECDOBJECT FAR *
as above

optRender
ECDOPT_RENDER
as above

cfFormat
ECDCLIPFORMAT
as above


Creating an object by converting an existing object


EcdObjectConvert
ECDSTATUS FAR PASCAL EcdObjectConvert( lpobject, protocol, lpclient,
lhclientdoc, lpobjname, lplpobject );
This function may be used to request creation of a new object that supports
a specified protocol from an existing object.  Today, there are only two
protocols: StdFileEditing which manages linked and embedded objects, and
Static, which manages embedded pictures only.  As of now, only converting
linked or embedded objects to static objects will succeed.  The original
object is not deleted or replaced by this call.

lpobject
LPECDOBJECT
a long pointer to the object to convert

protocol
LPSTR
the name of the protocol required for the new object

lpclient
LPCLIENT
a long pointer to a client structure for the new object

lhclientdoc
LHCLIENTDOC
long handle to client document where object is being created

lpobjname
LPSTR
the client's name for the object.

lplpobject
LPECDOBJECT FAR *
a long pointer to an LPECDOBJECT where the library will store the long
pointer to the new object

return value
ECDSTATUS
see ECDSTATUS type definition


Copying and comparing objects


EcdClone
ECDSTATUS FAR PASCAL EcdClone( lpobject, lpclient, lhclientdoc, lpobjname,
lplpobject );
This function makes a duplicate copy of an object.  A new client context may
be supplied.

lpobject
LPECDOBJECT
a long pointer to the object to be copied

lpclient
LPECDCLIENT
a long pointer to the client structure for the new object

lhclientdoc
LHCLIENTDOC
long handle to client document where object is being created

lpobjname
LPSTR
the client's name for the object.

lplpobject
LPECDOBJECT FAR *
a long pointer to an LPECDOBJECT where the library will store the long
pointer to the new object

return value
ECDSTATUS
see ECDSTATUS type definition


EcdEqual
ECDSTATUS FAR PASCAL EcdEqual( lpobject1, lpobject2 );
Also a function to compare two objects for equality.  The latter can be used
to save storage.  Embedded objects are equal if their class, item and Native
data are identical.  Linked objects are equal if their class, document, and
item are identical.

lpobject1, lpobject2
LPECDOBJECT
long pointers to the objects to be compared

return value
ECDSTATUS
see ECDSTATUS type definition.  Returns ECD_OK if the two objects are equal
as described above.


Making a local copy of a linked object


EcdCopyFromLink
ECDSTATUS FAR PASCAL EcdCopyFromLink( lpobject, protocol, lpclient,
lhclientdoc, lpobjname,  lplpobject );
This function makes a local embedded copy of a linked object. This may
involve launching the server application.

lpobject
LPECDOBJECT
a long pointer to the linked object that is to be embedded

protocol
LPSTR
the name of the protocol required for the new embedded object

lpclient
LPECDCLIENT
a long pointer to a client structure for the new object

lhclientdoc
LHCLIENTDOC
long handle to client document where object is being created

lpobjname
LPSTR
the client's name for the object.

lplpobject
LPECDOBJECT FAR *
as lplpobject earlier

return value
ECDSTATUS
see ECDSTATUS type definition.


Object method functions


Asynchronous operations
typedef enum {
    ECD_NONE,               // no method active
    ECD_DELETE,             // object delete
    ECD_COPYFROMLNK,        // CopyFromLink (auto reconnect)
    ECD_LOADFROMSTREAM,     // LoadFromStream (auto reconnect)
    ECD_LNKPASTE,           // PasteLink (auto reconnect)
    ECD_SHOW,               // Show
    ECD_OPEN,               // Open
    ECD_UPDATE,             // Update
    ECD_CLOSE,              // Close
    ECD_RECONNECT,          // Reconnect
    ECD_CREATEFROMTEMPLATE, // CreatefromTemplate
    ECD_CREATE,             // create
    ECD_SETUPDATEOPTIONS,   // setting update options
    ECD_SRVRUNLAUNCH        // server is being unluanched
}ECD_RELEASE_METHOD;

EcdQueryReleaseStatus
ECDSTATUS   FAR PASCAL LeQueryReleaseStatus (lpobj)

lpobj
LPECDOBJECT
long pointer to the object whose status is to be queried

return value
ECDSTATUS
ECD_BUSY if an operation is in progress otherwise ECD_OK


EcdQueryReleaseError
ECDSTATUS   FAR PASCAL LeQueryReleaseError (lpobj)

Name
Typelpobj
LPECDOBJECT
long pointer to the object whose status is to be queried

return value
ECDSTATUS
an indication of the error that occurred, ECD_OK if completion was
successful.


EcdQueryReleaseMethod
ECD_RELEASE_METHOD   FAR PASCAL LeQueryReleaseMethod (lpobj)

lpobj
LPECDOBJECT
long pointer to the object whose status is to be queried

return value
ECD_RELEASE_METHOD
an enum value indicating the method that completed.  See above.


Protocol extensibility


EcdQueryProtocol
LPVOID FAR PASCAL *  EcdQueryProtocol( lpobj, lpprotocol );
The design of the object protocol allows for additional protocols to be
defined at future times.  It will be necessary for clients to perform a
run-time check that an object supports a desired protocol, either at
creation time (suitable for protocols on which the client insists) or after
the object has been created, to test whether an object supports an optional
protocol that the client can exploit if it is available.  For this purpose
we define a method on the object that can be called to simultaneously query
if the protocol is supported and return a modified object pointer giving
access to the method table for the extra protocol.  The pointer returned has
the  same form as the LPECDOBJECT pointer, in that it points to a pointer to
a table of functions, and additional state information may be stored by the
object handler following the vtable pointer.  This secondary pointer is not
considered to point to a different object however; if the object is deleted
(with EcdDelete), secondary pointers become invalid.  A protocol may elect
to include delete methods, and calling any delete method will invalidate all
pointers to that object.

lpobj
LPECDOBJECT
a long pointer to the object to check for an additional protocol

lpprotocol
LPSTR
the (null-terminated) string name of the desired protocol.  Currently only
the name StdFileEditing is defined.

return value
LPVOID
a long pointer to an object structure (defined as having a long pointer to a
table of methods as the first entry).  The definition of the functions is
entirely determined by the protocol definition.  This function returns NULL
if the object does not support the requested protocol.


Destroying an object


EcdDelete
ECDSTATUS FAR PASCAL EcdDelete( lpobject );
Delete an object and reclaim storage.  Closes the object if it is open.
This call indicates that the object is no longer part of the client
document.


EcdRelease
ECDSTATUS FAR PASCAL EcdRelease(lpobject);
This call has the same parameters and return type as EcdDelet, and releases
the object from memory, closing it if open, but does not indicate that the
object has been deleted from the client document.  EcdRelease should be
called for all objects when closing the client document.

 Finding the display size of an object


EcdQueryBounds
ECDSTATUS FAR PASCAL EcdQueryBounds( lpobject, lpBounds );
This function returns the geometric bounding rectangle (on the target
device) of the object in MM_HIMETRIC units.


Formatting an object


EcdSetTargetDevice
ECDSTATUS FAR PASCAL  EcdSetTargetDevice( lpobject, hTargetDevice );

lpobject
LPECDOBJECT
a long pointer to the object that should be formatted for the specified
target device

hTargetDevice
HANDLE
a handle to a memory structure that describes the target device for the
object.  The format of this structure is described in the appendix under
StdTargetDevice

return value
ECDSTATUS
see ECDSTATUS type description

Specify the target device for output so that the object may format
appropriately for that device even when rendering on a different device
(e.g. a window).  This function should be called whenever the target device
is changed, so that servers can be notified and re-render the picture if
necessary.  The client should call the library to redraw the object if it
receives a notification that the object has changed.  See the appendix for
details of the StdTargetDevice structure.

EcdSetBounds
ECDSTATUS FAR PASCAL EcdSetBounds( lpobject, lpBounds );

Specify the rectangle to be used as the target size of the object.  This is
not necessarily the same as will be used in the EcdDraw call, depending on
the view scaling that the container application is using.  This call can be
used to cause the server to reformat the picture to fit the rectangle
better.  The bounds are specified in MM_HIMETRIC units.  This call is
ignored for linked objects as their size is determined by the document of
which they are a part.

EcdSetHostNames
ECDSTATUS FAR PASCAL EcdSetHostNames( lpobject, hostname, hostobjectname );


lpobject
LPECDOBJECT
a long pointer to the object that should be formatted for the specified size
on the target device

hostname
LPSTR
the string name of the container application

hostobjectname
LPSTR
the container's string name for the object.

return value
ECDSTATUS
see ECDSTATUS type description

Specify the name of the container application and the container's name for
the object, to be used in window titles when editing in the server

Rendering an object


EcdDraw
ECDSTATUS FAR PASCAL EcdDraw( lpobject, hDC, lpBounds, hFormatDC );

lpobject
LPECDOBJECT
a long pointer to the object to be drawn

hDC
HDC
a handle to the drawing context in which the object should be drawn.

lpBounds
LPRECT
a long pointer to a RECT structure containing the bounding rectangle (in the
units required by the mapping mode for HDC) into which the object should be
drawn..

hFormatDC
HDC
a handle to a device context that describes the target device for which the
object should be formatted.

return value
ECDSTATUS
see ECDSTATUS type description.  This function will return ECD_ERROR_DRAW if
the CallBack function returns false (zero) during drawing.

Draw the object mapped into the specified rectangle on device hDC.  The
object should be formatted as if it were to be drawn at the size specified
by the EcdSetBounds call on the device context specified by hFormatDC.  In
many cases this formatting will already have been done by the server and the
library will simply play a metafile with suitable scaling for the required
lpBounds.  The hDC argument may include a clipping region smaller than the
LPRECT, for cropping or banding purposes.  The DC of the target device is
required for this call, since the library may be using an object-specific
DLL to render the object instead of keeping a metafile.  In this case, the
DLL may need the information about the target device.  The LPRECT argument
identifies the rectangle on the hDC (relative to its current mapping mode)
that the object should be mapped onto.  This may involve scaling the
picture, and can be used by client applications to impose a view scaling
between the displayed view and the final printed image.
This function will periodically call the client CallBack function during
drawing, with the notification argument ECD_QUERY_PAINT.  The client may
check for input or other reason to interrupt the drawing process in this
function, and return false (zero) if the drawing should be interrupted.  The
client may also take action in this callback provided it  does  not
interfere with the state of the object or where it should be drawn, and
return true (non-zero) to indicate that the drawing should continue.  This
allows the client to (for example) give up focus if requested while a
lengthy drawing operation is in progress.

Initializing and retrieving data
Clients may retrieve data in a specified format from the object with the
EcdGetData function.  The client must have requested this format when
creating the object, using the ecdrender_format option.
Clients may also provide data to the object with the EcdSetData function.
The server should be active when this call is made, in which case the
library will send the data to the server.  This scenario requires that the
client know what format to send to the object, and that it will be
meaningful.  The intent is to support embedded objects such as charts, and
allow the client to provide the data to be graphed.  The Get and SetData
functions are modelled on the Windows Get/SetClipboardData functions.
Objects managed by the standard library (i.e. for which there is no
rendering DLL) will not provide conversions: only native, link, and
presentation data formats will be offered.

EcdEnumObjectFormats
ECDCLIPFORMAT EcdEnumObjectFormats( lpobject, cfFormat );
The client may enumerate the formats that the object can render using
EcdEnumObjectFormats, which is modelled after the windows
EnumClipboardFormats function: passing in a null format returns the first
available format.  Passing in one that was returned returns the next in
sequence.  When no more formats are available, null is returned.


lpobject
LPECDOBJECT
a long pointer to the object to be queried

cfFormat
ECDCLIPFORMAT
previous format returned from this call, or null for first call

return value
ECDCLIPFORMAT
next format available, or null if no more


EcdGetData
ECDSTATUS FAR PASCAL EcdGetData(lpobject, cfFormat, lphandle);
This function retrieves data in the requested format from the object.  If
the object cannot provide the data, a null handle is returned.


lpobject
LPECDOBJECT
a long pointer to the object from which to retrieve data

cfFormat
ECDCLIPFORMAT
format in which the data should be returned

lphandle
HANDLE FAR *
long pointer to a handle where the library will store a handle to a memory
object containing the data in the requested format, or null if cannot
satisfy the request.

return value
ECDSTATUS
see ECDSTATUS type definition


EcdSetData
ECDSTATUS FAR PASCAL EcdSetData(lpobject, cfFormat, hData);
This function sends in the specified format to the object.  If the object
cannot accept the data, an error status is returned.


lpobject
LPECDOBJECT
a long pointer to the object to which data is to be sent.

cfFormat
ECDCLIPFORMAT
format of the data.

hData
HANDLE
handle to a memory object containing the data in the specified format.

return value
ECDSTATUS
see ECDSTATUS type description


Repairing broken links
The representation of the link information is a buffer containing three
null-terminated strings consecutively, followed by a null byte.  These
strings are the classname, documentname, and itemname.   The client may
retrieve the link information using EcdGetData with the ObjectLink format.
The call will fail if the object is not a link (i.e. is embedded).  Class
information may be obtained through the OwnerLink format.  The client may
let the user edit the link information and store it into the object with the
EcdSetData function, specifying the ObjectLink format.

Update control
The client may set and query the update rules for links.  The options are
update always (i.e. hot link, try to keep the link up to date at all times),
update when the target object is saved, and update only when the client
requests (typically on user request).

ECDOPT_UPDATE
typedef enum { ecdupdate_always, ecdupdate_onsave, ecdupdate_oncall,
ecdupdate_onclose } ECDOPT_UPDATE;

EcdGetLinkUpdateOptions
ECDSTATUS   FAR PASCAL  EcdGetLinkUpdateOptions( lpobject, lpupdateopt );
This function returns the update options for the specified object.


lpobject
LPECDOBJECT
a long pointer to the object to be queried

lpupdateopt
ECDOPT_UPDATE FAR *
a long pointer to an ECDOPT_UPDATE where the current option setting will be
stored.

return value
ECDSTATUS
see ECDSTATUS type description.


EcdSetLinkUpdateOptions
ECDSTATUS   FAR PASCAL  EcdSetLinkUpdateOptions( lpobject, updateopt );
This function sets the update options for the specified object.

lpobject
LPECDOBJECT
a long pointer to the object to be changed

lpupdateopt
ECDOPT_UPDATE
the requested update option value

return value
ECDSTATUS
see ECDSTATUS type description.


Opening and updating


EcdOpen
ECDSTATUS FAR PASCAL EcdOpen( lpobject, fShow, hwnd, lpBounds );
This function opens the object.  Normally a server will be launched in a
separate window, and editing proceeds asynchronously with changes being
notified to the client through the CallBack function.
The hwnd and lpBounds parameters identify the window and the rectangle
within it where the object is displayed in the client.  They are used for
placement hints for the server's editing window, and possibly for "exploding
rectangle" feedback to the user.


EcdQueryOpen
ECDSTATUS FAR PASCAL EcdQueryOpen( lpobject );
This function queries whether the object is open.

lpobject
LPECDOBJECT
a long pointer to the object to be queried

return value
ECDSTATUS
see ECDSTATUS type description.  returns ECD_OK if the object is open.


EcdUpdate
ECDSTATUS FAR PASCAL EcdUpdate( lpobject );
This function updates the object so that the presentation is up to date and
the object itself is up to date with respect to any other objects it depends
on.

lpobject
LPECDOBJECT
a long pointer to the object to be updated

return value
ECDSTATUS
see ECDSTATUS type description.


EcdReconnect
ECDSTATUS FAR PASCAL EcdReconnect( lpobject );
This function re-establishes the link to a linked object (if it is open) so
that the presentation will be kept up to date.  If the target object is not
open, this call will not open it.


lpobject
LPECDOBJECT
a long pointer to the object to be connected

return value
ECDSTATUS
see ECDSTATUS type description.


EcdQueryOutOfDate
ECDSTATUS FAR PASCAL EcdQueryOutOfDate( lpobject );
This function queries whether an object (e.g. a linked object) is out of
date with respect to some other object.

lpobject
LPECDOBJECT
a long pointer to the object to be queried

return value
ECDSTATUS
see ECDSTATUS type description.


EcdClose
ECDSTATUS FAR PASCAL EcdClose( lpobject );
This function closes the object if it was open.

lpobject
LPECDOBJECT
a long pointer to the object to be closed

return value
ECDSTATUS
see ECDSTATUS type description.


Object handler API specification


Overview
When an memory object structure is being created, the client library uses
the class name of the object to try to locate an object handler for that
class.  If one is found, the client library loads the handler and calls it
to create the object.  The handler may create an object where all of the
creation functions and methods are defined by the handler, or call default
object creation functions in the client library.
Using this feature a class may provide special implementation for some or
all of the object methods, and defer to the default implementation in cases
where that is appropriate.
On Windows, creation functions and method functions must be exported and
declared "_loadds".

Object creation and initialization

Library functions which create objects are:
    EcdLoadFromStream
    EcdCreateFromClip
    EcdCreateLinkFromClip
    EcdCreate
    EcdCreateFromTemplate
    EcdCreateFromFile
    EcdCreateLinkToFile
Each of these first locates the classname, and looks in the registration
service (under the keyword "Handler") for the name of a DLL that contains a
handler.  If not found, the default creation code in the library is invoked.
If a handler is found, the DLL is loaded and entry points for the above
creation functions are located (using string names as above with prefix
"Ecd" replaced by the prefix "Dll").  These are saved in a table, and the
appropriate creation function is called.
The handler should declare a table of type ECDOBJECTVTBL (defined below),
copy the table from the object returned by the default creation function,
and replace pointers to those methods that the handler wishes to preempt in
the new method table.  Finally, the handler should assign the address of the
new method table into the object's pointer.  Calls to the client library API
are dispatched through the method table, and will be routed either to the
client library (if the handler has not overridden that entry) or to the
handler-supplied version.  The handler may save (on creation) the pointer to
the overridden function, and call it from the handler's version if desired.
The library exports the default creation functions under the same names but
with the prefix "Def" instead of "Ecd".  The handler may import and call
these.  Argument types and semantics are the same for the "Def" functions as
for the "Dll" functions.  Arguments types and semantics for the latter are
the same as for the "Ecd" functions, with the following exceptions:

Dll/DefCreateFromClip
ECDSTATUS FAR PASCAL DllCreateFromClip ( protocol, lpclient,
lhclientdoc, lpobjname, lplpobject , renderopt, cfFormat, objtype);

ECDSTATUS FAR PASCAL DefCreateFromClip ( protocol, lpclient, lhclientdoc,
lpobjname, lplpobject , renderopt, cfFormat, objtype);
EcdCreateFromClip calls DllCreateFromClip with an additional argument to
tell the library what is being created (object or link) depending on what
was found on the clipboard.  DllCreateFromClip should pass this and other
arguments on to DefCreateFromClip if that is being called, possibly modified
as described below.

protocol
LPSTR
the name of the protocol.  The handler should verify that it understands
this protocol by comparing this argument against the protocol names known to
the handler.  Currently only the name "StdFileEditing" is defined.  This
argument should be passed on to DefCreateFromclip.

lpclient
LPECDCLIENT
long pointer to the client structure for the object.

lhclientdoc
LHCLIENTDOC
long handle to client document

lpobjname
LPSTR
string containing the client's name for the object.

lplpobject
LPECDOBJECT FAR *
long pointer to an LPECDOBJECT variable where the address of the created
object should be returned.   This can be used in the call to
DefCreateFromClip.

renderopt
ECDOPT_RENDER
indicates whether the client requires no rendering, will call the handler to
draw the object, or will call GetData to retrieve a rendering in the format
selected by the following argument.  The handler may give a different value
for this argument in calling DefCreateFromClip: for example if the client
calls this function with ecdrender_draw, the handler may call
DefCreateFromClip with ecdrender_none if the handler will do the drawing
based on Native data, or ecdrender_format if the handler will call GetData
and do the drawing based on some class-specific format.

cfFormat
ECDCLIPFORMAT
the clipboard format to be retrieved with GetData.  The handler may call
DefCreateFromClip with some format that the handler wishes to use for
rendering.  The client library will take care of obtaining the data in the
first place, and getting updates from the server.

objtype
LONG
an indication of what is on the clipboard:

OT_LINK
a link is to be created

OT_EMBEDDED
an embedded object is to be created.

return value
ECDSTATUS
as for EcdCreateFromClip


Dll/DefLoadFromStream
EcdLoadFromStream calls DllLoadFromStream with three additional
parameters.  The handler function should pass these on to DefLoadFromStream
if that function is to be called, or may modify them as described below.
ECDSTATUS FAR PASCAL DllLoadFromStream( lpstream, protocol, lpclient,
lhclientdoc, lpobjname, lplpobject, objtype, aClass, cfFormat );

ECDSTATUS FAR PASCAL DefLoadFromStream( lpstream, protocol, lpclient,
lhclientdoc, lpobjname, lplpobject, objtype, aClass, cfFormat );

lpstream
LPECDSTREAM
a long pointer to an ECDSTREAM structure allocated and initialized by the
client aplication.  The library will call the Get method in the ECDSTREAM
structure to obtain the data for the object.


protocol
LPSTR
see protocol earlier

lpclient
LPECDCLIENT
see lpclient earlier

lhclientdoc
LHCLIENTDOC
long handle to client document

lpobjname
LPSTR
string containing the client's name for the object.

lplpobject
LPECDOBJECT FAR *
a long pointer to an LPECDOBJECT where the library will store the long
ointer to the object

objtype
LONG
as objtype above, except here the client library obtains the nature of the
object from the containing stream data.

aClass
ATOM
an atom containing the class name for the object.  This should be passed on
to DefLoadFromStream.

cfFormat
ECDCLIPFORMAT
The handler may elect to call DefLoadFromStream with a private format that
it will use for rendering; the client library will take care of loading and
saving this data as well as getting updates from the server.  If the handler
does not use a special format, it should call DefLoadFromStream with the
default value that the handler was called with.

return value
ECDSTATUS
see ECDSTATUS type definition


Object methods
Object method functions implement the bulk of the library functionality.
Arguments and functionality are as defined for the corresponding API
function, which has the same name as the method but prefixed by "Ecd".   A
handler may override any of the method functions, but must supply a
semantically equivalent function in order that clients work correctly.

ECDOBJECT, ECDOBJECTVTBL, LPECDOBJECT
typedef struct _ECDOBJECTVTBL {
    LPVOID (FAR PASCAL *QueryProtocol)( LPECDOBJECT lpobj, LPSTR lpprotocol
    );
    ECDSTATUS  (FAR PASCAL  *Delete) ( LPECDOBJECT lpobj );
    ECDSTATUS (FAR PASCAL *Show)     ( LPECDOBJECT lpobj );
    ECDSTATUS (FAR  PASCAL *GetData)( LPECDOBJECT lpobj,
                        ECDCLIPFORMAT  clipFormat,
                        LPHANDLE lpdata );
    ECDSTATUS (FAR PASCAL *SetData ( LPECDOBJECT lpobj,
                        ECDCLIPFORMAT clipFormat,
                         HANDLE hdata );
    ECDSTATUS (FAR PASCAL *SetTargetDevice) ( LPECDOBJECT lpobj,
                        HANDLE  hdata );
    ECDSTATUS (FAR PASCAL *SetBounds)( LPECDOBJECT lpobj, LPRECT );
    ECDSTATUS (FAR PASCAL *EnumFormats) (LPECDOBJECT lpobj,
                            ECDCLIPFORMAT  clipFormat);
    ECDSTATUS (FAR PASCAL *Release)( LPECDOBJECT lpobj);
    ECDSTATUS (FAR PASCAL *SetHostNames)( LPECDOBJECT lpobj, LPSTR. LPSTR );
    ECDSTATUS (FAR PASCAL *SaveToStream)(LPECDOBJECT, LPECDSTREAM);
    ECDSTATUS (FAR PASCAL *Clone)(LPECDOBJECT,LPECDCLIENT, LHCLIENTDOC,
                    LPSTR,LPECDOBJECT FAR * );
    ECDSTATUS (FAR PASCAL *CopyFromLink)( LPECDOBJECT, LPECDCLIENT,
                    LHCLIENTDOC, LPSTR, LPECDOBJECT FAR * );
    ECDSTATUS (FAR PASCAL *Equal)  (LPECDOBJECT lpobj)
    ECDSTATUS (FAR PASCAL *CopyToClipboard) (LPECDOBJECT lpobj);
    ECDSTATUS (FAR PASCAL *CutToClipboard) (LPECDOBJECT lpobj);
    ECDSTATUS (FAR PASCAL *QueryBounds) (LPECDOBJECT lpobj,
                        LPRECT lpbounds);
    ECDSTATUS  (FAR PASCAL *Draw) (LPECDOBJECT lpobj,
                        HDC hdc,
                        LPRECT bounds,
                        HDC hFormatDC);
    BOOL (FAR PASCAL *QueryOpen ) (LPECDOBJECT lpobj);
    ECDSTATUS (FAR PASCAL *Open) (LPECDOBJECT lpobj,
                        BOOL fShow,
                        HWND hwnd,
                        LPRECT lpbounds);
    ECDSTATUS (FAR PASCAL *Close )( LPECDOBJECT lpobj);
    ECDSTATUS (FAR PASCAL *Update) (LPECDOBJECT lpobj,
                        BOOL  fShow);
    ECDSTATUS (FAR PASCAL *Reconnect )( LPECDOBJECT lpobj);
    ECDSTATUS (FAR PASCAL *QueryOutOfDate) (LPECDOBJECT lpobj);
    ECDSTATUS (FAR PASCAL *ObjectConvert) (LPECDOBJECT lpobj,
                        LPSTR lpprotocol,
                        LPECDCLIENT lpclient,
                        LHCLIENTDOC lhclientdoc,
                        LPSTR lpobjname
                        LPECDOBJECT FAR * lplpobject);
} ECDOBJECTVTBL
typedef struct _ECDOBJECT{
    struct _ECDOBJECTVTBL FAR *vptr;
    /* server supplied object state goes here */
} ECDOBJECT;



Object release
The Release method is used to free the object.  Handlers may override this
method in order to perform any class-specific termination actions for this
object, free any additional resources etc.  The handler should call the
library-supplied version of Release from its version if it overrides, and
return the status that the library returns.

Server API specification


Types, Data structures and parameter definitions
The server library requires a number of different services from the server
application.  These are packaged into different structures that the server
application creates and makes available to the library.  See the client API
specification for a description of the general way that these structures are
built and used.

Structures provided by the server for the library
The server application creates memory structures of several types in order
to give the library access to the objects that clients know about.  These
structures model the concepts of server, document, object.  At startup, the
server application creates a structure of type ECDSERVER and registers it
with the library.  When a document is opened or created (either by the user
or on request from the library), a structure of type ECDDOCUMENT is created
and registered (or returned if the library requested it).  Since each
document may have many links, the library requests creation of a structure
of type ECDOBJECT for each, and requests functions based on those.  Detailed
specification of the methods that must be supplied for server, document and
object types are given in the sections following.  The library also
maintains information for each of these types, which the server applications
sees and identifies through opaque (long) handles.  The overall model is one
of mutual courtesy: the server library maintains the association between its
internal structure and that of the server application, and passes both
handle (to library info) and pointer (to the application's data structure)
in calls to the application.  The application in turn is required to
remember the library's handle, and pass that in the appropriate calls.

LHSERVER, LHDOCUMENT
/* definition of handles passed  back to the server application from server
lib */
typedef LONG LHSERVER;
typedef LONG LHDOCUMENT;

typedef  struct _ECDSERVER FAR *LPECDSERVER;
typedef struct  _ECDDOCUMENT FAR *LPECDDOCUMENT;

/* LPECDOBJECT is defined to be opaque in the client api specification */
/* we give a proper object definition here for servers to implement. */


typedef struct  _ECDOBJECT  FAR *LPECDOBJECT;


API functions and callbacks (methods)


Startup and registration
If the server application is started normally, it should proceed with its
normal default document creation or whatever.  If the server is launched
with "-Embedding" on the command line, it should not create a document or
show a window, but should register with the library (see below) and enter a
message dispatch loop and wait for calls from the library to create
documents etc.

EcdRegisterServer
typedef enum {
    ECD_SRVR_MULTI,           // multiple instances
    ECD_SRVR_SINGLE           // single instance (mutiple document)
}ECD_SRVR_USE;

ECDSTATUS FAR PASCAL EcdRegisterServer( classname, lpsrvr , lplhserver,
hInst, srvr_use );
At startup, the server application should create a struct ECDSERVER and call
this function to register it with the library together with the classname
that the server supports.  Server that support several classnames may
allocate a structure for each or may reuse the same structure as they
desire.  The classname is passed back to server application functions
invoked through the library, so that multi-class servers can distinguish
which class is being requested.

classname
LPSTR
the name of the class being registered

lpserver
LPECDSERVER
a long pointer to an ECDSERVER structure allocated and initialized by the
server application

lplhserver
LHSERVER FAR *
a long pointer to an LHSERVER where the library will store the handle for
its information.  The server application should remember this handle and use
it for further calls to the library (e.g. EcdRevokeServer) to identify the
class/server.

hInst
HANDLE
the instance handle of the server application.  This is used to ensure
clients connect to the right instance of a server application.

srvr_use
ECDSRVR_USE
indicates whether a single instance of this server should be used to support
multiple clients, or whether multiple instances should be used.  Note that
MDI servers may follow either convention.  SDI servers must be multiple
instance.  This option is used to control the negotiation between client and
server libraries on opening an object.

return value
ECDSTATUS
see ECDSTATUS type description.


Concurrency control

Server applications may control when the server library will process
requests from clients (and potentially call back to the server application)
with the following functions.

EcdBlockServer, EcdUnblockServer
ECDSTATUS FAR PASCAL EcdBlockServer (LPECDSERVER);
ECDSTATUS FAR PASCAL EcdUnblockServer (LPECDSERVER, BOOL FAR *);
EcdBlockServer directs the library to queue incoming requests until such
time as the server calls EcdUnblockServer.   EcdUnblockServer processes one
request (if any are ending) and returns through the second parameter a
boolean indicating whether or not there are more requests in the queue.

Server Methods
The server library will listen for requests from clients, and invoke methods
on the server object to create or open documents, etc.  These methods must
be supplied by the server application and are declared as follows:

ECDSERVER, LPECDSERVER
struct _ECDSERVERVTBL
{
    ECDSTATUS (FAR PASCAL *Open)( LPECDSERVER lpsrvr,
                LHDOCUMENT lhdoc,
                LPSTR documentname,
                LPECDDOCUMENT FAR * lpdoc );
    ECDSTATUS (FAR PASCAL *Create)( LPECDSERVER lpsrvr,
                 LHDOCUMENT lhdoc,
                LPSTR classname,
                 LPSTR documentname,
                 LPECDDOCUMENT FAR * lpdoc );
    ECDSTATUS (FAR PASCAL *CreateFromTemplate)(LPECDSERVER lpsrvr,
                         LHDOCUMENT lhdoc,
                         LPSTR classname,
                         LPSTR documentname,
                         LPSTR templatename,
                         LPECDDOCUMENT FAR * lpdoc );
    ECDSTATUS (FAR PASCAL *Edit)( LPECDSERVER lpsrvr,
                LHDOCUMENT lhdoc,
                LPSTR classname,
                LPSTR documentname,
                LPECDDOCUMENT FAR * lpdoc );

    ECDSTATUS (FAR PASCAL *Exit)( LPECDSERVER lpsrvr );
    ECDSTATUS (FAR PASCAL *Release)(LPECDSERVER lpsrvr); /*ok to quit */
};

struct _ECDSERVER{
    struct _ECDSERVERVTBL FAR* vptr;
    /* any server supplied state goes here */
};

Open is used to open an existing file and prepare to edit the contents.
Save commands should save the changed object back to the original file.
Create is used to make a new object of the given classname which is to be
embedded in the client application.  The documentname parameter will be used
to identify the object, but should not be used to create a file for the
object.  CreateFromTemplate is used to create a new document initialized
with the data in the file identified by templatename.  As with Create, the
document should be treated as untitled, and will be embedded in the client
application.  Edit is used to create a document to be initialized with the
data in a subsequent SetData call.  The object is embedded in the client
application.  In each of these functions, the created document should not be
shown to the user for editing until instructed by the library (see below).
The Exit function is used to instruct the server application to close
documents and shut down.  The server should normally comply with this
without prompting (e.g. to save modified documents) since this is the
client's responsibility.  In the case that the server application has opened
other documents on request by the user, the server should ignore the request
to exit.

ECDSERVER: Open
ECDSTATUS (FAR PASCAL *Open)( lpsrvr,     lhdoc, documentname, lplpdoc );
This function requests the server application to open a named document,
allocate and initialize an ECDDOCUMENT structure, associate the library's
handle with it, and return the address of the structure in lplpdoc.

lpsrvr
LPECDSERVER
a long pointer to an ECDSERVER structure that was registered by the server
application.

lhdoc
LHDOCUMENT
a long handle that the library will use to identify the document internally.

documentname
LPSTR
a null-terminated string containing the permanent name of the document to be
opened (normally a pathname, but for some applications this might be further
qualified, e.g. a table in a database).

lplpdoc
LPECDDOCUMENT FAR *
a long pointer to an LPECDDOCUMENT where the server application should
return a long pointer to the created ECDDOCUMENT structure.

return value
ECDSTATUS
the server should return ECD_OK if all is well.


ECDSERVER: Create
ECDSTATUS (FAR PASCAL *Create)( lpsrvr,lhdoc,classname,documentname,lplpdoc
);
This function requests the server application to create a new document of
the specified class, allocate and initialize an ECDDOCUMENT structure,
associate the library's handle with it, and return the address of the
structure in lplpdoc.  The created document is opened for editing by this
call and will be embedded in the client when it is closed.

lpsrvr
LPECDSERVER
a long pointer to an ECDSERVER structure that was registered by the server
application.

lhdoc
LHDOCUMENT
a long handle that the library will use to identify the document internally.

classname
LPSTR
the string name of the class of document to create

documentname
LPSTR
a null-terminated string containing a name for the document to be created.
This name need not be used by the server application, but  may be used in
window titles etc.

lplpdoc
LPECDDOCUMENT FAR *
a long pointer to an LPECDDOCUMENT where the server application should
return a long pointer to the created ECDDOCUMENT structure.

return value
ECDSTATUS
the server should return ECD_OK if all is well.


ECDSERVER: CreateFromTemplate
ECDSTATUS (FAR PASCAL *CreateFromTemplate)( lpsrvr, lhdoc, classname,
documentname, templatename, lplpdoc );
This function requests the server application to create a new document of
the specified class, initialized from the content of the document named in
"templatename", allocate and initialize an ECDDOCUMENT structure, associate
the library's handle with it, and return the address of the structure in
lplpdoc.  The created document is opened for editing by this call and will
be embedded in the client when it is closed.

lpsrvr
LPECDSERVER
a long pointer to an ECDSERVER structure that was registered by the server
application.

lhdoc
LHDOCUMENT
a long handle that the library will use to identify the document internally.

classname
LPSTR
the string name of the class of document to create

documentname
LPSTR
a null-terminated string containing a name for the document to be created.
This name need not be used by the server application, but  may be used in
window titles etc.

templatename
LPSTR
the permanent name of the document to use to initialize the new document.
Normally a pathname, but may be further qualified.  See Open, above.

lplpdoc
LPECDDOCUMENT FAR *
a long pointer to an LPECDDOCUMENT where the server application should
return a long pointer to the created ECDDOCUMENT structure.

return value
ECDSTATUS
the server should return ECD_OK if all is well.

ECDSERVER: Edit
ECDSTATUS (FAR PASCAL *Edit)( lpsrvr,lhdoc, classname, documentname, lplpdoc
);
This function requests the server application to create a new document of
the specified class, allocate and initialize an ECDDOCUMENT structure,
associate the library's handle with it, and return the address of the
structure in lplpdoc.  The created document will be given its initial data
from the client in a following SetData call.  Subsequently, the document is
opened for editing.

lpsrvr
LPECDSERVER
a long pointer to an ECDSERVER structure that was registered by the server
application.

lhdoc
LHDOCUMENT
a long handle that the library will use to identify the document internally.

classname
LPSTR
the string name of the class of document to create

documentname
LPSTR
a null-terminated string containing a name for the document to be created.
This name need not be used by the server application, but  may be used in
window titles etc.

lplpdoc
LPECDDOCUMENT FAR *
a long pointer to an LPECDDOCUMENT where the server application should
return a long pointer to the created ECDDOCUMENT structure.

return value
ECDSTATUS
the server should return ECD_OK if all is well.

ECDSERVER: Exit
ECDSTATUS (FAR PASCAL *Exit)( lpsrvr );
This function is used to instruct the server to exit.  The server should
close any open documents.  If a multiple document server has documents
opened by other clients or by user command, it should ignore this call.

lpsrvr
LPECDSERVER
a long pointer to an ECDSERVER structure that was registered by the server
application.

return value
ECDSTATUS
see ECDSTATUS type description

ECDSERVER: Release
ECDSTATUS (FAR PASCAL *Release)( lpsrvr );
This function is used to notify the server application when all connections
to the server have closed down and it will be safe to terminate.  All
registered server structures must be released before the server application
can terminate.

 Shutdown
Before exiting, the server application should close all documents (see
below) and de-register all server classes by calling the following function.

EcdRevokeServer
ECDSTATUS FAR PASCAL EcdRevokeServer( lhsrvr );
This function may be called by the application when (e.g.) the user asks the
application to exit.  The library will close any documents that it opened on
behalf of clients, and terminate conversations with them.  The library may
return ECD_WAIT_FOR_RELEASE if conversations are still in the process of
termination, in which case the application should not free the ECDSERVER
structure or exit, but should wait (dispatching messages) until a Release
call from the library is received.

lhsrvr
LHSERVER
a long handle obtained by calling EcdRegisterServer, indicates which server
to revoke.

return value
ECDSTATUS
may be ECD_WAIT_FOR_RELEASE or ECD_OK or some error.

 Document creation


EcdRegisterDocument
ECDSTATUS FAR PASCAL EcdRegisterDocument( lhsrvr, documentname,lpdoc,lplhdoc
);
When the server application creates or opens a document other than on
request from the library, it should register the document with the library
in case other clients have links to it.  This function is used for this.
If the document were created or opened in response to request from the
library, it should not be registered through this function but instead the
pointer to the document struct should be returned through the parameter to
the relevant call.

lhsrvr
LHSERVER
a long handle obtained by calling EcdRegisterServer, indicates which server
to revoke.

documentname
LPSTR
the permanent name for the document.  Normally a pathname.

lpdoc
LPECDDOCUMENT
a long pointer to an ECDDOCUMENT structure allocated and initialized by the
server application.

lplhdoc
LHDOCUMENT FAR *
a long pointer to a long handle where the library will return the handle by
which it identifies the document internally.

return value
ECDSTATUS
may be ECD_WAIT_FOR_RELEASE or ECD_OK or some error.

 Document methods


ECDDOCUMENT, LPECDDOCUMENT
struct _ECDDOCUMENTVTBL{
    ECDSTATUS (FAR PASCAL *Save)( LPECDDOCUMENT lpdoc );
    ECDSTATUS (FAR PASCAL *Close)( LPECDDOCUMENT lpdoc );
    ECDSTATUS (FAR PASCAL *SetHostNames) (LPECDOBJECT lpobj,  LPSTR, LPSTR);
    ECDSTATUS (FAR PASCAL *SetDocDimensions) (LPECDOBJECT  lpobj,
                                  LPRECT  lpbounds);
    ECDSTATUS (FAR PASCAL *GetObject)( LPECDDOCUMENT lpdoc,
                  LPSTR itemname,
                  LPECDOBJECT FAR* lpobj,
                  LPECDCLIENT lpclient);
    ECDSTATUS (FAR PASCAL *Release)(LPECDDOCUMENT lpdoc); /*Finished with
    document */
};

struct _ECDDOCUMENT{
    struct _ECDDOCUMENTVTBL FAR *vptr;
    /* server supplied document state goes here */
};


Once a document has been created, the library may make calls to it to save
it (if it was opened rather than created as an embedded object) or close it.
Save should save the state into the file associated with the document.
Close should simply close the document without saving or prompting.  The
document structure and associated resources should be freed.
The library will call  GetObject to associate a client with the part of the
document identified by itemname, where a null itemname (i.e. a null string)
means the whole document.  Once a client has been connected by this call,
the server should be prepared to send notifications as  described below.
Note that documents opened or created on request from the library should not
be shown to the user for editing until the library requests it as described
below.

ECDDOCUMENT: Save
ECDSTATUS (FAR PASCAL *Save)(  lpdoc );
This function is used to instruct the server to save the document.

pdoc
LPECDDOCUMENT
a long pointer to an ECDDOCUMENT that was returned by a method function of a
registered server, and which should be saved.

return value
ECDSTATUS
the server application should return ECD_OK if all is well.

ECDDOCUMENT: Close
ECDSTATUS (FAR PASCAL *Close)( lpdoc );
This function is used to instruct the server application to unconditionally
close the document.  The server application should not prompt the user to
save etc., as that is the responsibility of the client.

lpdoc
LPECDDOCUMENT
a long pointer to an ECDDOCUMENT that was returned by a method function of a
registered server, and which should be closed.

return value
ECDSTATUS
the server application should return ECD_OK if all is well.

ECDDOCUMENT: SetHostNames

ECDSTATUS (FAR PASCAL *SetHostNames)( lpdoc, lpclientname, lpdocname );
This function is used to set names that should be used for window titles
etc. These names are only used for embedded objects, as linked objects have
their own titles.  This call is only used for documents that are embedded
objects.


lpdoc
LPECDDOCUMENT
a long pointer to the ECDDOCUMENT that is the embedded object for which
names are being specified.

lpclientname
LPSTR
the name of the client

lpdocname
LPSTR
the client's name for the object.

return value
ECDSTATUS
see ECDSTATUS type description

lpclientname
LPSTR
the name of the client

lpdocname
LPSTR
the client's name for the object.

return value
ECDSTATUS
see ECDSTATUS type description

ECDDOCUMENT: SetDocDimensions
ECDSTATUS (FAR PASCAL *SetDocDimensions)( lpdoc,  lpbounds );
This function is used to communicate to the server the size on the target
device to which the object should be formatted.  The bounds are specified in
MM_HIMETRIC units.  This call is only relevant for documents that are
embedded objects.

lpdoc
LPECDDOCUMENT
a long pointer to the ECDDOCUMENT that is the embedded object for which the
target size is being specified.

lpbounds
LPRECT
a long pointer to a RECT structure containing the target size of the object
in MM_HIMETRIC units.

return value
ECDSTATUS
see ECDSTATUS type description

ECDDOCUMENT: GetObject
ECDSTATUS (FAR PASCAL *GetObject)( lpdoc, itemname, lplpobj, lpclient );
This function is used by the library to request an object structure on
behalf of a client.  The server application should allocate and initialize
an ECDOBJECT structure, associate the lpclient pointer with it, and return
the pointer through the lplpobj argument.

lpdoc
LPECDDOCUMENT
a long pointer to an ECDDOCUMENT that was returned by a method function of a
registered server

itemname
LPSTR
the string name of an item in the specified document for which an object
structure is requested.  A null item name (i.e. and empty string) implies
the entire document, and is the normal case for objects embedded in clients.

lplpobj
LPECDOBJECT FAR *
a long pointer to an LPECDOBJECT where the server application should return
a long pointer to the allocated ECDOBJECT structure.

lpclient
LPECDCLIENT
a long pointer to an ECDCLIENT structure allocated by the library, which
should be associated with the object and used to notify changes etc. to the
library.

return value
ECDSTATUS
the server application should return ECD_OK if all is well.

ECDDOCUMENT: Release
ECDSTATUS (FAR PASCAL *Release)( lpdoc );
This function is used by the library to notify the server application when a
revoked document (see below) has finally terminated conversations and may be
destroyed.

lpdoc
LPECDDOCUMENT
a long pointer to an ECDDOCUMENT whose associated LHDOCUMENT was revoked and
which may now be released.

return value
ECDSTATUS
the server application should return ECD_OK if all is well.

Closing documents
When closing a document other than on request from the library, the server
application should first de-register all object structures that have been
registered with the library, and then de-register the document with the
following call:

EcdRevokeDocument
ECDSTATUS FAR PASCAL EcdRevokeDocument( lhdoc );
This function should be called when a registered document is being closed or
otherwise made unavailable for clients.

lhdoc
LHDOCUMENT
a long handle to a document that was returned from EcdRegisterDocument or
was associated with a document through one of the server methods that create
documents.

return value
ECDSTATUS
may return ECD_WAIT_FOR_RELEASE indicating that the server application
should not terminate or free the ECDDOCUMENT structure until a Release
notification occurs.  This library will return ECD_OK if the document may be
freed immediately.

Object creation
Object structures should be created only on request from the library and
should be returned through the parameter to the relevant call.

Server Object methods
The object structure in the server library is the same as for the object
handler, but only the first few methods are called by the server library,
and only these need be implemented by the server application.
LPVOID (FAR PASCAL *QueryProtocol)( LPECDOBJECT lpobj, LPSTR lpprotocol );
    ECDSTATUS  (FAR PASCAL  *Delete) ( LPECDOBJECT lpobj );
/* Delete is just Release in server, doesn't tell server to destroy data,
just free the structure */
    ECDSTATUS (FAR PASCAL *Show)( LPECDOBJECT lpobj );
    ECDSTATUS  (FAR  PASCAL *GetData)( LPECDOBJECT lpobj,
                        ECDCLIPFORMAT  clipFormat,
                        LPHANDLE lpdata );
    ECDSTATUS (FAR PASCAL *SetData ( LPECDOBJECT lpobj,
                        ECDCLIPFORMAT clipFormat,
                         HANDLE hdata );
    ECDSTATUS (FAR PASCAL *SetHostNames)( LPECDOBJECT lpobj, LPSTR. LPSTR );
    ECDSTATUS (FAR PASCAL *SetTargetDevice) ( LPECDOBJECT lpobj,
                        HANDLE  hdata );
    ECDSTATUS (FAR PASCAL *SetBounds)( LPECDOBJECT lpobj, LPRECT );
    ECDSTATUS (FAR PASCAL *EnumFormats) (LPECDOBJECT lpobj,
                            ECDCLIPFORMAT  clipFormat);

The library will call Show when the server application should show the
document to the user for editing, or to request the server to scroll the
document to bring the object into view (if the document is already open).
The library will call Delete when no clients are connected to the object.
The object structure and associated resources should be freed.

ECDOBJECT: Delete
ECDSTATUS  (FAR PASCAL  *Delete)( lpobject );
This function tells the server to free the resources associated with the
object structure since no clients are currently connected.  It does not tell
the server to destroy  any data.
lpobject
LPECDOBJECT
a long pointer to the ECDOBJECT to be released

return value
ECDSTATUS
the server should return ECD_OK if all is well.

ECDOBJECT: Show
ECDSTATUS (FAR PASCAL *Show)( lpobject );
This function tells the server to show the object, showing its window and
scrolling if necessary to bring it into view.

lpobject
LPECDOBJECT
a long pointer to the ECDOBJECT to be shown

return value
ECDSTATUS
the server should return ECD_OK if all is well.

ECDOBJECT: GetData
ECDSTATUS  (FAR  PASCAL *GetData)( lpobject, cfFormat, lphdata );
This function is used to retrieve data from the object in a specified
format.  The server application should allocate a memory object of adequate
size, fill it with the data, and return it through the lphdata argument.

lpobject
LPECDOBJECT
a long pointer to the ECDOBJECT from which data is requested

cfFormat
ECDCLIPFORMAT
the format in which the data is requested

lphdata
HANDLE FAR *
a long pointer to a memory handle where the server application should return
the handle to the allocated memory.  The library will free the memory when
it is no longer needed.

return value
ECDSTATUS
the server should return ECD_OK if all is well.

ECDOBJECT: SetData
ECDSTATUS (FAR PASCAL *SetData( lpobject, cfFormat, hdata );
This function is used to store data into the object in a specified format.
This function is called (with format Native) when a client opens an embedded
object for editing (after a document has been created with the server's Edit
method).   It is also used if the client calls EcdSetData with some other
format.

lpobject
LPECDOBJECT
a long pointer to the ECDOBJECT into which data is to be stored

cfFormat
ECDCLIPFORMAT
the format of the data.

hdata
HANDLE
a memory handle from which the server application should extract the data

return value
ECDSTATUS
the server should return ECD_OK if all is well.

ECDOBJECT: SetTargetDevice
ECDSTATUS (FAR PASCAL *SetTargetDevice)( lpobject, hdata );
This function is used to communicate information about the client's target
device for the object, which can be used by the server to generate a picture
formatted for best results on that  device.

lpobject
LPECDOBJECT
a long pointer to the ECDOBJECT for which the target device is being
specified.

hdata
HANDLE
a handle to a memory object containing a StdTargetDevice structure (see
appendix for details under StdTargetDevice)

return value
ECDSTATUS
see ECDSTATUS type description

 Object release
Revoking a document will cause the library to release each object associated
with that document.  Objects may be explicitly revoked by the server
application.

EcdRevokeObject
ECDSTATUS FAR PASCAL EcdRevokeObject( lpclient );
The server application can call this function to revoke access to an object,
for example if the user destroys it.

lpclient
LPECDCLIENT
a long pointer to the ECDCLIENT structure associated with the object which
is being revoked.

return value
ECDSTATUS
will be ECD_OK unless the server application passes a bad pointer.

Notification
The client should notify the library of certain changes to the document.
The library may call the object to retrieve new data either immediately
(during the notification call) or at a later time (e.g. on request from a
client application).  Notifications are required when an object changes
state, or when certain actions happen to the containing document.  The
latter actions are saving, closing, renaming.  Notification is done through
the CallBack function pointer found through the ECDCLIENT structure that is
passed to the server when an object structure is created.  See the client
API section for details of notification function syntax.
Note that the library will make callbacks to objects (particularly for
rendering data with GetData) from inside the notification call from the
server application.


Registration
Servers that support the compound document protocol register their classes
in the system registry. This is a general-purpose system registry that is
described in the Registration API section of the Windows SDK documentation.
This registry stores key-value pairs, where keys and values are
null-terminated strings. Keys are hierarchically structured, with component
names separated by "\" characters. To make a server available, the following
key-value pairs must be registered during installation of the server.
Applications should register the information described in the shell section
of the integration guide, which includes extension-classname pairs, a
human-readable form for the classname, and associated actions.
For this protocol, installing a server application requires that for each
class supported by the server, register the classname and server application
name resulting in the key-value pairs below.  If the class hasa handler, it
should be registered with the "Handler" keyword.
.classes\.ext = <classname>
.classes\<classname> = <Human readable classname, localizable>
.classes\<classname>\protocol\StdFileEditing\Server =     <pathname and
arguments>
.classes\<classname>\protocol\StdFileEditing\Handler = <dll pathname>
Clients check that a class supports this protocol, and retrieve the command
line for launching the server, by querying the registry for the last entry
above.
...
[Embedding]
<classname>=<comment>,<human readable classname>,<pathname and
arguments>,Picture,1
The system registration service also reads and writes registration
information in the Embedding section of win.ini for compatibility with
earlier applications.  The keyword Picture indicates to Powerpoint that the
server can produce metafiles for the rendering.  The magic value 1 indicates
that the server supports the StdFileEditing protocol, and is ignored by
Powerpoint.  Powerpoint Graph supports an earlier, slightly different,
version of the protocol and should not have the magic value in the
[Embedding] section.  Powerpoint 2.0 is compatible with both.



Appendix: DDE-based protocol specification
Implementation of the compound document protocol requires implementation of
the underlying DDE protocol, as specified in the Windows and Presentation
Manager documentation.

Launching the Server Application
When opening a link or an embedded document, the client application should
look up the class name in the system registry as above.When the server is
given the "-Embedding" parameter, it should not create a new default
document, but wait until the client sends the StdOpenDocument (or the
StdEditDocument command followed by the Native data) and then instructs the
server to show the window. The server may optionally use the StdHostNames
item ( q.v.) to display the client's name in the window title. When the user
closes the document in the server, the client should be re-activated.
Client side logic is as follows.  In all cases if an initiate receives more
than one response the first is taken and the others are terminated.
Linked object:

    Initiate classname, documentname
    if not found {
        initiate classname, OLEsystem
        if not found {
            initiate classname, System
            if not found {
                launch appname, -Embedding
                fLaunched = true
                initiate classname, OLEsystem
                if not found {
                    initiate classname, System
                    if not found
                        return error
                }
            }
        }
        // here we have a conversation with system or OLEsystem topic
        DDE_EXECUTE StdOpenDocument(docname)
        initiate classname, Documentname
        if not found {
            if( fLaunched ) DDE_EXECUTE StdExit //clean up!
            return error
        }
    }
    // here we have a conversation with the right document
Embedded object:

    initiate classname, OLEsystem
    if not found {
        initiate classname, System
        if not found {
            launch appname, -Embedding
            fLaunched = true
            initiate classname, OLEsystem
            if not found {
                initiate classname, System
                if not found
                    return error
            }
        }
    }
    // here we have a conversation with system or OLEsystem topic
    DDE_EXECUTE StdEditDocument(docname)
        // or StdCreateDoc if this is Insert New Object command
    initiate classname, Documentname
    if not found {
        if( fLaunched ) DDE_EXECUTE StdExit     //clean up!
        return error
    }
    // now we have a conversation with the right document.


Server-side logic is as follows.  There are two cases, one where the server
wishes to re-use a single instance for editing all objects (in MDI child
windows), and the other where a new instance is to be used for each object.
The latter case includes SDI applications.  In addition, SDI application
should reject requests to open or create a new docuemnt if they already have
a document open.
Single instance app:

        case wm_dde_initiate
            if classname == this class {
                if ( docname == OLEsystem || docname == System )
                        initateack
                else if docname == name of some open document
                        initiateack
            }

multi-instance app:

        case wm_dde_initiate:
            if classname == this class {
                if ( docname == OLEsystem || docname == System ) {
                        if no documents open
                                initiateack
                }
                else if docname == name of some open document
                        initiateack
            }


DDE Conventions
This protocol is a set of conventions for use of DDE. All of the standard
DDE rules and facilities apply. Applications that conform to this proposal
must also conform to the DDE specification. Conforming to this specification
implies supporting the System topic, and the standard items in that topic
(Topics, SysTopics, etc).

Conversations
Document operations will be performed in conversation with the application's
system topic. The document ClassName is used to establish conversation.
Data transfer and negotiation operations will be performed in conversation
with the document (i.e. topic). The document name is used to establish the
conversation.
Note that the topic name is only use in initiating conversations and is not
fixed for the life of the conversation; permitting the document to be
renamed (see DocumentName item, below) does not mean that there will be two
names. It is therefore reasonable to tie the topic name to the document
name.

Formats



ClassName:szClassname
DocumentName:szDocument
ItemName:szItemApplications supporting extended DDE use four clipboard
formats in addition to the regular data and picture formats:


╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Format Name                       Structure
────────────────────────────────────────────────────────────────────────────
ObjectLink                        szClassname,szDocument,szItem,0

OwnerLink                         szClassname,szDocument,szItem,0

Native                            Stream of bytes,only parsed by
                                  application rendering it, must be
                                  self-contained, i.e. the application
                                  must be able to completely reconstruct
                                  the item from the bytes in the Native
                                  format.

Binary                            A stream of bytes whose interpretation
                                  is implicit in the item; see
                                  StdHostNames, StdTargetDevice, and
                                  EditEnvItems items.





System Topic Items

Topics returns a list of DDE topic names that the server application
has open. Where topics correspond to documents, the topic name will be the
permanent document name.

Protocols returns a list of protocols supported by the
application. The list is returned in text format, tab separated. A protocol
is a defined set of execute strings and item/format conventions that the
application understands. Currently defined is:
        Protocol: StdFileEditing    Commands/items/formats: as in this
document.
    For compatibility with older client applications which do not use the
library, server applications written directly to the DDE protocol should
also list the name "Embedding" in the list of protocols.

Status is a text item which returns "Ready" if the server is prepared
to respond to DDE requests, and "Busy" otherwise. This item can be queried
to determine if there is any point in offering functions such as "Update
link" to the user. It is possible for the server to reject or defer a
request even if this item returned "Ready", so client applications should be
prepared for this.


Standard Item Names and Notification Control
New items available on each topic other than the system topic are defined
for this protocol. These are:

StdDocumentName contains the permanent document name associated with the
topic. If no permanent storage is associated with the topic, this item is
empty. The item supports both request and advise transactions, and may be
used to detect renaming of open documents.

EditEnvItems returns a tab-separated list (in text format) of the items
carrying environmental information that the server supports for its
documents. Currently defined are StdHostNames , StdDocDimensions and
StdTargetDevice. Applications can declare other items (and define the
interpretations if Binary is to be used) to permit clients that know of them
to provide richer information. Servers that cannot use particular items
should omit their names from this item. Clients should REQUEST this item to
determine which items the server can use, and should supply the data through
a DDE POKE message.

StdHostNames accepts information about the client application, in Binary
format interpreted as the following structure:
struct {
            WORD clientNameOffset;
            WORD documentNameOffset;
            BYTE data[];
        } StdHostNames;

The offsets indicate the starting point for the appropriate information in
the data array (relative to the start of the data array).

StdTargetDevice accepts information about the target device that the client
is using. This information is in Binary format, interpreted as the following
structure.  Offsets are relative to the start of the data array.
struct {
            WORD deviceNameOffset;
            WORD driverNameOffset;
            WORD portNameOffset;
            WORD extDevModeOffset;
            WORD extDevModeSize;
            WORD environmentOffset;
            WORD environmentSize;
            BYTE data[];
        } StdTargetDevice;

StdDocDimensions accepts information about the sizes of document that the
client is interested in. This information is in Binary format, interpreted
as the following structure.

struct {
            WORD defaultWidth;
            WORD defaultHeight;
            WORD maxWidth;
            WORD maxHeight;
        } StdDocDimensions;

The default fields indicate a suggested size for newly created pictures, and
the max fields indicate the maximum allowable size (i.e. the page size of
the client document). These measurements are specified in MM_HIMETRICS
units.

StdColorScheme returns the colors that the server is currently using, and
accepts information about the colors that client wants the server to use.
This information is in Binary format, interpreted as a Windows LOGPALETTE
structure.

null is zero length ItemName that specifies a request/advise on the entire
data contained in the topic.
The update method used for Advises on items follows a convention of
appending an update specifier to the actual item name. The item is encoded
as follows:
   <itemname>/<update type>

For backward compatibility, omission of the update type results in the same
as specifying /Change. <update type> may be one of:
    Change        notify each change
    Save        notify when topic is saved
    Close        notify when file closed

DDE server applications are required to remember each occurrence of an
Advise that specifies a unique tuple <item, update type, format,
conversation>. Notifications are disabled by a DDE UnAdvise message with
corresponding parameters.


Standard Commands in DDE Execute Strings
The syntax for standard commands sent in execute strings is as defined in
the DDE manual:
[command(argument1,argument2,..)][command2(arg1,arg2)]

Commands without arguments do not require (). String arguments must be
enclosed in double quotes
Commands that must be supported by server applications are defined in the
following sections.


StdNewDocument(ClassName,DocumentName)
Creates a new, empty document of the given class, with the given name, but
does not save it. The server should not show the window until a StdShowItem
command is received. The server should return an error if the DocumentName
is already in use, and the client should generate another name and try
again.


StdNewFromTemplate(ClassName,DocumentName,TemplateName)
Creates a new document of the given class with the given DocumentName from
the template with the given permanent name (i.e. filename).


StdEditDocument(DocumentName)
Creates a document with the given name, and gets ready to accept data to be
poked into it using WM_DDE_POKE. The server should not show the window until
a StdShowItem command is received. The server should return an error if the
DocumentName is already in use, and the client should generate another name
and try again.


StdOpenDocument(DocumentName)
Sent to system topic. Opens an existing document with the given name. The
server should not show the window until a StdShowItem command is received.

The above three commands all make the document available for DDE
conversations with the name DocumentName. They do not show any window
associated with the document; the client must send a StdShowItem command to
make the window visible. This enables the client to negotiate additional
parameters (e.g. StdTargetDevice) with the server without causing extraneous
repaints.


StdCloseDocument(DocumentName)
Sent to the system topic. Closes down the window associated with the
document. Following acknowledgement, the server terminates any conversations
associated with the document. The server should not activate the window in
the process of closing it.


StdSaveDocument(DocumentName)
Sent to System conversation. Saves the named document. Preserves the same
name. The server should not activate the window in the process of saving it.


StdShowItem(DocumentName,ItemName [, fTakeFocus] )
Sent to the system topic, this command makes the window containing the named
document visible, and scrolls to show the named item if it is not null.  The
optional third argument indicates whether the server should take focus and
bring itself to the front or not.  The value of this argument shouldbe the
literal TRUE indicating take focus or FALSE indicating not.   If the
argument is not present, TRUE is assumed.


StdExit
Shuts down the server application. This command should only be used by the
client application that launched the server. This command is available in
the system topic only.

The following variants of the above commands may be sent to the document
topic rather than the system topic, so that the client does not have to open
an additional conversation to the system if it already has a conversation
with the document. The document name is omitted from these commands because
it is implied by the conversation topic, and because it may have been
changed by the server. This kind of name change does not invalidate the
conversation, and the client should not be forced to track the change to the
name unnecessarily. The implication is that the server must be able to
identify the document to be operated on from the conversation information.


StdCloseDocument
Sent to document conversation. Closes the document associated with the
conversation without activating it. This command causes a DDE terminate to
be posted by the server window following the acknowledgement.


StdSaveDocument
Sent to document conversation. Saves the document associated with the
conversation. Preserves the same name. Should not activate the window or
show any confirmation dialog.


StdShowItem(ItemName  [, fTakeFocus] )
Sent to document conversation. Shows the document window, scrolling if
necessary to bring the item into view. A null item name does not cause
scrolling.  The optional third argument indicates whether the server should
take focus and bring itself to the front or not.  The value of this argument
shouldbe the literal TRUE indicating take focus or FALSE indicating not.
If the argument is not present, TRUE is assumed.
```

{% endraw %}
