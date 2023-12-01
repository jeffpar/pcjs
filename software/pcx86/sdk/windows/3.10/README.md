---
layout: page
title: Microsoft Windows SDK 3.10 (Standard Mode)
permalink: /software/pcx86/sdk/windows/3.10/
preview: https://diskettes.pcjs.org/pcx86/sdk/windows/3.10/WIN31SDK-DISK01.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/vga/4096kb/machine.xml
    debugger: available
    commands: m fault off
    drives: '[{name:"30Mb Hard Disk",type:3,path:"/harddisks/pcx86/30mb/MSDOS500-WIN310-VGA.json"}]'
    autoMount:
      A: None
      B: Windows SDK 3.10 (Disk 01)
    autoType: MODE COM2:9600,N,8,1\rWDEB386 /C:2 /F:C:\\WINDEV\\STANDARD.WRF C:\\WINDOWS\\WIN.COM\r
---

NOTE: The machine below is an IBM PC AT (8Mhz), which can only run Windows 3.00 in Standard Mode.  There is also an [Enhanced Mode](enhanced/) configuration that uses a Compaq Deskpro 386 (16Mhz).

{% include machine.html id="ibm5170" %}

### README.SDK

```
===========================================================================

                           README.SDK

===========================================================================


This document covers the following topics:

* A guide to sources of information that complement the
  Windows 3.1 Software Development Kit (SDK) manuals.

* Instructions for setting your PATH, INCLUDE, and LIB
  environment variables, and other instructions for
  configuring your Windows development environment. (The SDK
  Install program appends this information to this
  README.SDK file.)


                  OTHER SOURCES OF INFORMATION

The following list describes online documents that contain
important information about the Windows 3.1 SDK that is not
included in the on-line Windows Help or QuickHelp documentation.

Document                Contents
_____________________________________________________________________

README.WRI              Additional information about the Windows
                        3.1 SDK. This file is in Microsoft Write
                        format.

WINDOWS.TXT             Information about changes to WINDOWS.H,
                        including STRICT.

ROBUST.TXT              Information on how to build robust applications.

WINDOWSX.TXT            Information on using the message crackers and
                        control functions in WINDOWSX.H.


Additional information is available on the following topics:

* Microsoft C Runtime Libraries

* Message Crackers and Control APIs

* Audio Documentation and Software

* New Directories

* Dialog Editor (DLGEDIT.EXE)

* Windows clipboard formats

* DOS Protected Mode Interface (DPMI) Specification

These sources are described in this section.


Microsoft C Runtime Libraries
-----------------------------
C runtime libraries for Windows are no longer included with the SDK. 
These files are now included with the C product you use for 
Windows Development.


Message Crackers and Control APIs
---------------------------------
The Message Crackers and Control APIs were moved from WINDOWS.H 
to WINDOWSX.H.  Most known bugs and problems reported from 
pre-release 2 are fixed in this release of WINDOWSX.H. You can
build generic Windows applications that use Message Crackers and
Control APIs and which are STRICT compliant by using WINDOWSX.H
with the generic sample MAKEAPP located in the SAMPLES
subdirectory.


Audio Documentation and Software
--------------------------------
This release also includes MMSYSTEM.H and on-line documentation 
on how to use the new audio services in Windows 3.1.  The on-line 
documentation is located in WIN31MWH.HLP, MMPWKBK.HLP, 
and MCISTRWH.HLP (WinHelp format) or WIN31QH.HLP, MCISTRQH.HLP 
(QuickHelp format).


New Directories
---------------   
   BIN       contains the files previously installed in the 
             root WINDEV directory
   GUIDE     contains the Guide to Programming Samples
   SAMPLES   contains the new sample source code applications
   REDIST    contains the redistributable file for the SDK
   HELP      contains the SDK Quickhelp files


Windows Clipboard Formats
-------------------------
Specifications for various clipboard formats supported by
Microsoft and other vendors' applications are available from
sources described below.

* Rich Text Format (RTF) -- similar to the standard text
  format, except that formatting attributes such as font,
  style, and size are embedded.  The RTF specification is
  included in the "Microsoft Word Technical Reference for
  Windows and OS/2 Presentation Manager,", which may be
  ordered through bookstores or directly from Microsoft
  Press at (800)888-3303.

* Binary Interchange File Format (BIFF) -- the native
  Microsoft Excel format. The BIFF specification is
  available from Microsoft Excel Telephone Sales at
  (800)227-6444; ask for department "ET".

* Tag Image File Format (TIFF) -- a format that assists in
  incorporating line art, photographs, and other raster
  images into documents via desktop publishing application
  programs. The TIFF specification is available from Aldus
  Corporation at (206)628-2320; select the Production
  Information phone extension.  It is also available in the
  CompuServe "Aldus" Forum, Library 10.

* Data Interchange Format (DIF), WKS, and WK1 -- formats
  maintained by Lotus Development Corporation,
  (617)253-9150.


DOS Protected Mode Interface (DPMI) Specification
-------------------------------------------------
This specification defines how DOS programs can access the
extended memory of PC architecture computers while
maintaining system protection.  Windows provides
applications access to extended memory through Windows'
implementation of DPMI. Most Windows applications do not
need to directly use DPMI services, since these services are
provided by the Windows application programming interface
(API). Special Windows applications and device drivers may
need to access DMPI services directly.

The DPMI specification is available from Intel Corporation
at (800)548-4725. (Request part number JP-26.) This DPMI
specification should be read in conjunction with the
"Windows Support for DPMI" note included in the Windows
Developer's Notes, described above.


=========================================================
Setting Your PATH, INCLUDE, and LIB Environment Variables
=========================================================

Based on the directories that you specified during the SDK
installation procedure, you should add the following
directories in your environment variables:

Insert C:\WINDEV\INCLUDE as the first path in the INCLUDE variable.
Insert C:\WINDEV\LIB as the first path in the LIB variable.
Insert C:\WINDEV\BIN in the PATH variable.
Insert C:\WINDEV\HELP in the HELPFILES variable.
```

### README.WRI

```
Additional Notes About the Microsoft Windows 3.1 Software Development Kit                                       
_________________________________________________________________________

This online document contains information about the Microsoft Windows
operating system, version 3.1, that is not available in the other
documentation for the Microsoft Windows 3.1 Software Development Kit (SDK).

Using Windows Write to View This Document

If you enlarge the Write window to its maximum size, this document will
be easier to read. To do so, click the Maximize button in the upper-right
corner of the window or open the System menu in the upper-left corner of
the Write window (press ALT+SPACEBAR) and then choose the Maximize command.
(The System menu is sometimes referred to as the Control menu.)

To move through the document, use the PAGE UP and PAGE DOWN keys or click
the arrows at the top and bottom of the scroll bar along the right side of
the Write window.

To print the document, choose the Print command from the File menu.

For Help on using Write, press F1.

To read other online documents, choose the Open command from the File menu
and then select a file. 

Contents

This document contains the following topics:

1.0  General Release Notes
1.1  Network Installation 
1.2  Sample Source Code
1.3  Microsoft C 6.00 Run-time Libraries for Windows
1.4  Redistributable Components
1.5  Multimedia Components Added to the Windows 3.1 SDK

2.0  International Notes
2.1  International Common Dialog Boxes
2.2  Translation Tables

3.0  Release Notes Specific to the Final SDK
3.1  CodeView for Windows (CVW)
	3.1.1  CVW Single-Screen Debugging
	3.1.2  Using CVW 3.07 with .OBJ Files Linked with C 7.00
	3.1.3  Using the Windows 3.1 Debugging Version with CVW 4.00
	3.1.4  Comparing CVW 4.00 with CVW 3.07
	3.1.5  Using CVW with Borland C++ Applications
3.2  COMPAQ Computers
3.3  80386 Debugger and Dr. Watson
3.4  Profiler
3.5  The GetVersion Function
3.6  Using the Windows 3.1 SDK to Develop Windows 3.0 Applications
3.7  Using a Serial Device on COM1 with the Debugging Version of Windows
3.8  DDESpy
3.9  Dialog Editor

4.0  Other Documents
____________________

1.0 General Release Notes

The Windows 3.1 SDK provides information about developing Windows applications
but does not provide much information about environment-specific development
tools. This information is provided instead by such other Windows development
environments as Microsoft C 7.00, Microsoft QuickC for Windows, or other
independent software vendor (ISV) development kits. 

1.1 Network Installation 

The SDK does not support installation from a network drive to a local Windows
installation nor does it support installation from disks to a network
installation of Windows 3.1. (The Windows 3.0 SDK also did not support this.)

1.2 Sample Source Code

The SDK contains sample code that demonstrates new features in Windows or
clarifies existing features. These samples can be found in the \SAMPLES
subdirectory when you install the SDK.

Note: The sample code for the Microsoft Windows Guide to Programming is
installed in the \GUIDE subdirectory. You can choose whether to install these
samples when installing the SDK.

1.3 Microsoft C 6.00 Run-time Libraries for Windows

The SDK installation program no longer installs the C 6.00 run-time libraries
for Windows. The C 6.00 run-time libraries are now distributed on a separate
disk with their own simple installation batch file (the alternate-math
libraries are no longer included). The C run-time libraries for Windows were
removed because most ISV Windows development environments include their own
Windows C run-time libraries. Microsoft C 7.00 and Microsoft QuickC for Windows
also contain C run-time libraries for Windows. If you already have C run-time
libraries for Windows, it is not necessary for you to install these libraries.
For the most part, only Microsoft C 6.00 users need to install these libraries.

1.4 Redistributable Components

Many new Windows features are included in dynamic-link libraries (DLLs) and can
be used in Windows 3.0 and Windows 3.1. If you use the new features in your
Windows 3.0 applications, you will need to redistribute the Windows DLLs and
related files that support these features. For a list of the redistributable
libraries and files, see the separate SDK license agreement.

Some DLLs and device drivers are not redistributable. In particular, the
Multimedia System library (MMSYSTEM.DLL) is not redistributable.

1.5 Multimedia Components Added to the Windows 3.1 SDK

The Windows 3.1 SDK contains Multimedia development tools that make it possible
for you to take advantage of the Multimedia capabilities in the retail version
of Windows 3.1.

File                        Description
_______________________________________

MMSYSTEM.DLL, .H and .LIB   Multimedia System library
MCICDA.DRV                  Media Control Interface (MCI) CD-ROM driver
MCIPIONR.DRV                MCI Pioneer Laserdisc driver
WIN31MWH.HLP                Online Multimedia Windows Reference
MCISTRWH.HLP                MCI Strings interface reference
MMPWKBK.HLP                 Microsoft Windows Multimedia Programmer's Reference
MARKMIDI.EXE                Tool that marks MIDI files as Multimedia Windows 
                            MIDI files
LOWPASS, MCITEST,           Sample source code             	
MIDIMON, and REVERSE files

2.0 International Notes

This section describes enhancements to the SDK that will help you localize
your application.

2.1 International Common Dialog Boxes

The SDK contains localized versions of the common dialog box library,
COMMDLG.DLL, in ten languages, as shown in the following table.  You can
redistribute these files with your localized applications.

Language	Library name
________________________
Danish      COMMDLG.DAN
Dutch       COMMDLG.DUT
Finnish     COMMDLG.FIN
French      COMMDLG.FRA
German      COMMDLG.GER
Italian     COMMDLG.ITN
Norwegian   COMMDLG.NOR
Portuguese  COMMDLG.POR
Spanish     COMMDLG.SPA
Swedish     COMMDLG.SWE

To use one of these files, rename it to COMMDLG.DLL.

2.2 Translation Tables

Translation tables are used by the AnsiToOem and OemToAnsi functions for all
character-set conversions. These tables and the default keyboard driver table
have undergone extensive modifications for the SDK; the default keyboard driver
table is the table for code page 437 (United States). The names of the
translation tables are in the form XLAT###.BIN, in which ### stands for 850,
860, 861, 863, or 865.

It is very important that you verify your application's filename conversions
between Microsoft MS-DOS and Windows.

3.0 Release Notes Specific to the Final SDK

This section outlines information that is specific to the final release of the
Windows 3.1 SDK.

3.1 CodeView for Windows (CVW)

The executable file for the version of Microsoft CodeView for Windows that is
distributed with the SDK has been renamed from CVW.EXE to CVW3.EXE. This
distinguishes it from CVW4.EXE, which is distributed with Microsoft C 7.00.

3.1.1 CVW Single-Screen Debugging

If you experience problems with CVW and single-screen debugging, please use a
secondary monochrome monitor as your debugging terminal. Debugging with two
screens is much faster than single-screen debugging because CVW does not have
to switch between character mode and graphics mode.

CVW is known to have problems with single-screen debugging mode on the
following video adapters:

	ATI VGA
	Cirrus Logic 6410
	IBM P70
	Olivetti OVGA
	Orchid Pro Designer
	Paradise VGA
	Sigma Legend
	Speedstar VGA
	Trident 8900
	Vega Video 7 VGA

3.1.2 Using CVW 3.07 with .OBJ Files Linked with C 7.00

CVW 3.07 will cause a GP fault when you try to load a Windows application
that was linked with .OBJ files from either C 6.00 or C 7.00. You can use
files linked with C 6.00 by packing them, using the C 7.00 CVPACK utility.

3.1.3 Using the Windows 3.1 Debugging Version with CVW 4.00

An error in the following form will occur when you use the Windows 3.1
debugging version files (KERNEL, GDI, and USER) with CVW 4.00:

Warning: relink 'C:\WIN31\SYSTEM\USER.EXE' with the current linker.

To prevent this problem, run the C 7.00 CVPACK utility on KERNEL, GDI, and USER.

Users of CVW 3.07 who also use the DBWIN debugging application should turn off
warning messages before running CVW. CVW 3.07 cannot process warning output
messages.

3.1.4 Comparing CVW 4.00 with CVW 3.07

If you have C 7.00 (which includes CVW 4.00), the only reason to use CVW 3.07
(which is included in the Windows 3.1 SDK) is to debug Basic or FORTRAN code
in the Windows environment. CVW4 does not currently possess an expression
evaluator for either of these languages.  CVW3 supports development in Basic
and FORTRAN with the use command in the Command window.  (No recent version of
CVW has supported Pascal.)

3.1.5 Using CVW with Borland C++ applications

Neither CVW3 nor CVW4 can load Borland C++ applications. 

3.2  COMPAQ Computers

Compaq Computer Corporation ships HIMEM.EXE and CEMM.EXE with their release of 
MS-DOS version 5.0 instead of HIMEM.SYS and EMM386.EXE.

3.3  80386 Debugger and Dr. Watson

If you run Microsoft 80386 Debugger (WDEB386.EXE) and Microsoft Dr. Watson
(DRWATSON.EXE) in standard mode and press CTRL+ALT+SYS RQ, you will encounter
a breakpoint that has been set by the Tool Helper library. Choosing Go at this
point will cause a GP fault. To avoid this, either use the GZ command at the
first int 3 instruction, or use CTRL+C instead of CTRL+ALT+SYS RQ.

3.4  Profiler

Microsoft Windows Profiler analyzes applications running with Windows in 386
enhanced mode. You cannot call the ProfSetup function once you have called the
ProfStart function. Even if you call ProfStop, you cannot call ProfSetup. This
is because ProfStart allocates the block of memory for the data, and if that
block has been allocated the setup code exits during the setup call. The only
way to release this memory and be able to resize it is to call the ProfFinish
function.

3.5 The GetVersion Function

The GetVersion function returns the Windows version in the low-order word of
the return value. The minor version is in the high-order byte and the major
version is in the low-order byte. For more information, see the reference
material for this function in the Microsoft Windows Programmer's Reference,
Volume 2.

3.6  Using the Windows 3.1 SDK to Develop Windows 3.0 Applications

The SDK allows you to create applications for either Windows 3.0 or 3.1.
If you write your application carefully, you can create a single application
that is compatible with Windows 3.0 but also takes advantage of newer features
when the application is run with Windows 3.1. For a comprehensive discussion
of this topic, see Chapter 3, "Creating Windows Applications," in Microsoft
Windows Getting Started.

3.7  Using a Serial Device on COM1 with the Debugging Version of Windows

The debugging version of Windows writes information to the COM1 port as the
default destination. If you want to use a serial device on COM1, you must
redirect the debugging output to a file by adding a line of the following
form to the [debug] section of the \SYSTEM.INI file:

OutputTo=C:\ABC.TXT

You can replace C:\ABC.TXT with any valid filename or device (COM2, NUL, or
LPT1) to which output is redirected. Using NUL prevents the debugging version
from writing any debugging information to COM1. If you use NUL, you can use
DBWIN to view debugging information.

3.8  DDESpy

If you use Microsoft DDESpy (DDESPY.EXE) with the debugging version of Windows
and the application you are investigating sends a WM_DDE_UNADVISE message with
the aItem atom set to NULL, DDESpy will cause a GP fault.

3.9 Dialog Editor

You should not use Microsoft Dialog Editor (DLGEDIT.EXE) with a 256-color
video driver from Windows version 3.0. Instead, you should use a 256-color
video driver from Windows 3.1 or a 16-color driver. If you must use a
256-color driver from Windows 3.0, you can prevent problems with Dialog
Editor by turning off the Grid option in the Arrange Settings dialog box.

4.0 Other Documents

The following list describes other online documents that contain important
information about the Windows 3.1 SDK that is not included in the online
Microsoft Windows Help or Microsoft QuickHelp documentation.

Document            Contents
____________________________

WINDOWS.TXT         Information about changes to WINDOWS.H, including STRICT
                    enhancements.

ROBUST.TXT          Information about how to build robust applications.

WINDOWSX.TXT        Information about using the message crackers and control
                    functions in WINDOWSX.H.

README.SDK          Other sources of information that complement the Windows
                    SDK, and instructions for setting your PATH, INCLUDE, and
                    LIB environment variables.
```

### WINDOWS.TXT

```
=============================================================================

				 WINDOWS.TXT

=============================================================================

SDK windows.h Enhancements
-----------------------------------

The 3.1 windows.h header file contains various features that make application
development faster and easier by helping you find problems as you compile your
code.  These improvements include:

    * STRICT option provides stricter type checking, helping you find type
      mismatch errors quickly.

    * windows.h has been completely reorganized so that related functions,
      types, structures, and constants are grouped together.

    * New UINT type used for 32-bit Windows upward compatibility

    * New unique typedefs for all handle types, such as HINSTANCE and HMODULE.

    * Various constants and typedefs missing in the 3.0 windows.h have been
      added.

    * Windows 3.0 compatibility: the 3.1 windows.h can be used to compile
      applications that run under 3.0.

    * Proper use of "const" for API pointer parameters and structure fields
      where pointer is read-only.

    * C++ compatibility: windows.h can now be included without
      modification for use with the C++ language.

    * -W4 and ANSI compatibility: windows.h can be used with the highest
      degree of compiler warning (-W3 or -W4) without generating warnings.
      windows.h is ANSI compatible.



Catching Compile-Time Errors: The windows.h STRICT option
---------------------------------------------------------

The new windows.h supports an option that allows you to enable the strictest
possible compiler error checking in order to help you find programming errors
when you compile your app, rather than at runtime.

The idea is that you #define STRICT before #including windows.h, which causes
the various types and function prototypes in windows.h to be declared in a
way that enforces very strict type checking.  For example, without STRICT, it
is possible to pass an HWND to a function that requires an HDC without any
kind of compiler warning: with STRICT #defined, this results in a compiler
error.

Specific features provided by the STRICT option include:

    * Strict handle type checking (you can't pass an HWND where an HDC is
      declared).

    * Correct and more consistent declaration of certain parameter and return
      value types (e.g., GlobalLock returns void FAR* instead of LPSTR).

    * Fully prototyped typedefs for all callback function types
      (e.g., dialog procs, hook procs, and window procs)

    * Windows 3.0 backward compatible: STRICT can be used with the 3.1
      windows.h for creating applications that will run under Windows 3.0.

    * The COMM DCB and COMSTAT structures are now declared in an ANSI
      compatible way.


Why use STRICT?
---------------

The best way to think of STRICT is as a way for you to get the most out of
the error checking capabilities build into today's modern C and C++
compilers.  STRICT is of great benefit especially with code under development,
because it helps you catch bugs right away when you compile your code, rather
than having to track it down with a debugger.  By catching certain kinds of
bugs right away, it's less likely that you'll ship your applications with
bugs that weren't encountered in testing.

STRICT also makes it easier to migrate your code to the 32-bit Windows
platform later, because it will help you locate and deal with type
incompatibilities that will arise when migrating to 32 bits.

It's not very difficult to convert your application to use STRICT, and it can
be done in stages if needed.

In order to take advantage of the STRICT option, you will probably have to
make some simple changes to your source code (described in detail later).

We think you'll find that STRICT makes modifying, maintaining, and even
reading your code much easier, and well worth the effort to convert your
application.

Unless you #define STRICT, your 3.0 applications will compile just fine with
windows.h without any modifications.  The type declarations for many of the
Windows APIs and callback functions have changed, but unless you #define
STRICT the new declarations are 100% compatible with the old declarations.


Windows.h Enhancement details
-----------------------------

New typedefs, constants, and helper macros
------------------------------------------

The following new typedefs and constants have been added to windows.h.
All are 3.0 backward compatible:

    WINAPI      - Used in place of FAR PASCAL in API declarations.  If you
		  are writing a DLL with exported API entry points, you
		  can use this for your own APIs.

    CALLBACK    - Used in place of FAR PASCAL in application callback
		  routines such as window procs and dialog procs

    LPCSTR      - Same as LPSTR, except used for read-only string pointers.
		  Typedefed as const char FAR*.

    UINT        - Portable unsigned integer type whose size is determined
		  by host environment (16 bits for Win 3.1).  Synonym for
		  "unsigned int".  Used in place of WORD except in the rare
		  cases where a 16-bit unsigned quantity is desired even on
		  32-bit platforms.

    LRESULT     - Type used for declaration of all 32-bit polymorphic
		  return values.

    LPARAM      - Type used for declaration of all 32-bit polymorphic
		  parameters.

    WPARAM      - Type used for declaration of all 16-bit polymorphic
		  parameters.

    MAKELPARAM(low, high)   - Macro used for combining two 16-bit quantities
			      into an LPARAM.

    MAKELRESULT(low, high)  - Macro used for combining two 16-bit quantities
			      into an LRESULT.

    MAKELP(sel, off)    - Macro used for combining a selector and an offset
			  into a FAR VOID* pointer.

    SELECTOROF(lp)      - Macro used to extract the selector part of a far ptr.
			  Returns a UINT.

    OFFSETOF(lp)        - Macro used to extract the offset part of a far ptr.
			  Returns a UINT.

    FIELDOFFSET(type, field)    - Macro used for calculating the offset of
				  a field in a data structure.  The type parameter
				  is the type of structure, and field is the name
				  of the field whose offset is desired.

    New handle types:

    HINSTANCE       - Instance handle type
    HMODULE         - Module handle type
    HLOCAL          - Local handle type
    HGLOBAL         - Global handle type
    HTASK           - Task handle type
    HFILE           - File handle type
    HRSRC           - Resource handle type
    HGDIOBJ         - Generic GDI object handle type (except HMETAFILE)
    HMETAFILE       - Metafile handle type
    HDWP            - DeferWindowPos() handle
    HACCEL          - Accelerator table handle
    HDRVR           - Driver handle (3.1 only)


COMSTAT structure change
------------------------

The 3.0 declaration of the COMSTAT structure was not ANSI compatible: ANSI
does not allow the use of BYTE-sized bitfield declarations.  In order to
allow windows.h to be used with ANSI compilers or with -W4, the COMSTAT
structure has changed.  The 7 bit fields below are now accessed as byte flags
of the single status field:

    old field name              Bit of status field

    fCtsHold                    CSTF_CTSHOLD
    fDsrHold                    CSTF_DSRHOLD
    fRlsdHold                   CSTF_RLSDHOLD
    fXoffHold                   CSTF_XOFFHOLD
    fXoffSent                   CSTF_XOFFSENT
    fEof                        CSTF_EOF
    fTxim                       CSTF_TXIM

No change is not required if you are compiling with WINVER 0x0300 and are not
using STRICT.

If you have code that accesses any of these fields, here's how you have
to change your code:

	Old code:               New code:

    if (comstat.fEof || ...)    if ((comstat.status & CSTF_EOF) || ...)
    comstat.fCtsHold = TRUE;    comstat.status |= CSTF_CTSHOLD;
    comstat.fTxim = FALSE;      comstat.status ~= CSTF_TXIM;

Be careful to properly parenthesize "&" expressions.

See windows.h for more details.


Making Your Application STRICT Compliant
----------------------------------------

Using STRICT with your existing Windows application code is not very
difficult.  Here's what you need to do:

    * Decide what you want be STRICT compliant.

The first step is to decide what you want to be STRICT compliant.

STRICT is most valuable with newly developed code or code is being maintained
or changed regularly.  If you have a lot of stable code that has already been
written and tested, and is not changed or maintained very often, you may
decide that it's not worth the trouble to convert to STRICT.

If you are writing a C++ application, you don't have the option of applying
STRICT to only some of your source files.  Because of the way C++ "type safe
linking" works, you may get linking errors if you mix and match STRICT and
non-STRICT source files in your application.

    * Enable strict compiler error checking

First, turn on your compiler's highest level of error checking.  Do this
without turning on STRICT for now.

The best level of compiler error checking for Microsoft compilers is warning
level 3, or -W3.  It's also very useful to specify the -WX flag, which causes
the compiler to treat any warning as an error that fails the compilation.
This can be very helpful, because there are a number of compiler warnings
that are almost always fatal Windows programming errors, such as passing an
incorrect number of arguments to a function.

    * Change your code to use new STRICT types

First you need to go through your own source and header files and change type
declarations to use the new types defined in windows.h.  Below are the common
types that should be changed:

    HANDLE  ->  HINSTANCE, HMODULE, HGLOBAL, HLOCAL, etc. as appropriate

    WORD    ->  UINT (EXCEPT where you really want a 16-bit value even
		     on a 32-bit platform)

    WORD    ->  WPARAM

    LONG    ->  LPARAM or LRESULT as appropriate

    FARPROC ->  WNDPROC, DLGPROC, HOOKPROC, etc. as appropriate
		(MakeProcInstance and FreeProcInstance calls require casting)

See "Strict Conversion Notes" below for particular things to watch out for
when changing your code.

The UINT type is important for 32-bit Windows migration.  On 16-bit windows,
WORD and UINT are identical: 16 bit unsigned quantities.  On a 32-bit
platform, a UINT will be 32 bits and WORD is 16 bits. This allows much more
efficient code to be generated on the 32-bit platform where UINTs are used.
You should use WORD in your code ONLY in those places where you want a 16 bit
value, even on a 32-bit platform.

You may also want to use CALLBACK instead of FAR PASCAL in the declaration of
your various callback functions, though this isn't necessary.

You may be able to save yourself some work by not converting the body of your
window and dialog procs to use WPARAM, LPARAM, and LRESULT right away, since
those types are compatible with WORD and LONG, even in STRICT.

    * Make sure your functions are declared before use

In order to compile with -W3, all of your application functions must be
properly declared before they are used.  It's best to have all your
declarations in an include file, rather than declaring them in your source
files as needed: it's much easier to maintain your code this way should you
need to change any of the declarations in the future.  Chances are you will
need to be making changes to the function declarations as you change over to
the new STRICT data types.

You can use the compiler -Zg option to create header files with proper type
declarations for all the functions declared within it.  If you DO want to use
this option, it's important that you #define STRICT BEFORE you do so. This is
because the parameter and return type declarations generated by -Zg aren't
the same as you'd use if you did it by hand: by hand: for example, LPSTR is
generated as "char _far *".  Without STRICT defined, the types generated by
HWND, HDC, and other handle types will all be the same: "unsigned short".
With STRICT, you'll get something like "HWND__ _near *", which you can
globally search-and-replace to the correct type.  You don't HAVE to edit
your -Zg output in order to proceed with your STRICT conversion, but it will
make your header files easier to read and more useful later.

While it's not strictly necessary to do so, it's a good idea to provide
function parameter names in your function prototypes.  This makes header
files much easier to read, and provides a degree of self-documentation.

    * Recompile without STRICT and fix resulting warnings

Without #defining STRICT anywhere, recompile your application and fix any
warnings that result.  At this point, it's super handy if your editor has the
capability of automatically positioning the cursor on the next compiler
error, so you can quickly move from warning to warning and fix them.  Almost
all programming editors have this capability: if you haven't used this
feature before, now is a great time to learn about this.  Check your editor's
manual for more information.

Some common compiler warnings -- and how you should deal with them -- are
described later in this section.  Use the rules found there to make the
appropriate changes to your source.

    * Run the app to make sure all is well.

After you've gotten your application to compile cleanly with -W3, it's a good
idea to run your app and put it through it's paces to make sure all is well.

    * #define STRICT

After you've made a first pass and gotten things to compile cleanly without
STRICT, it's time to turn it on and make the next round of changes.

If you've decided that you want to make your entire app STRICT, then the best
and easiest thing to do is #define STRICT in your makefile, by passing the
-DSTRICT flag to the compiler. If you want to do it on a per-sourcefile
basis, then simply #define STRICT in the source file before you #include
windows.h.

    * Recompile and clean up resulting errors

Once you've made the changes to your window and dialog procs as outlines
above, you're ready to recompile everything.

After turning on STRICT you'll probably get new errors and warnings that
you'll need to go through and clean up.

The list of warnings and errors below will explain how to deal with most of
the problems that arise.


STRICT conversion notes
-----------------------

    1. Always declare function pointers with the proper function type, rather
       than FARPROC.  You'll need to cast function pointers to and from the
       proper function type when using MakeProcInstance, FreeProcInstance,
       and other functions that take or return a FARPROC:

		BOOL CALLBACK DlgProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam);
		DLGPROC lpfnDlg;

		lpfnDlg = (DLGPROC)MakeProcInstance(DlgProc, hinst);
		...
		FreeProcInstance((FARPROC)lpfnDlg);

    2. Take special care with HMODULEs and HINSTANCEs.  For the most part,
       the Kernel module management functions use HINSTANCEs, but there are a
       few APIs that return or accept only HMODULEs.

    3. If you've copied any API function declarations from windows.h, they
       may have changed, and your local declaration may be out of date.
       Remove your local declaration.

    4. Properly cast the results of LocalLock() and GlobalLock() to the
       proper kind of data pointer.  Parameters to these and other memory
       management functions chould be cast to LHANDLE or GHANDLE, as
       appropriate.

    5. Properly cast the result of GetWindowWord() and GetWindowLong()
       and the parameters to SetWindowWord() and SetWindowLong().

    6. When casting SendMessage(), DefWindowProc(), and SendDlgItemMsg() or
       any other function that returns an LRESULT or LONG to a handle of
       some kind, you must first cast the result to a UINT:

	    HBRUSH hbr;

	    hbr = (HBRUSH)(UINT)SendMessage(hwnd, WM_CTLCOLOR, ..., ...);

    7. The CreateWindow and CreateWindowEx hmenu parameter is sometimes
       used to pass an integer control ID.  In this case you must cast
       this to an hmenu:

	    HWND hwnd;
	    int id;

	    hwnd = CreateWindow("Button", "Ok", BS_PUSHBUTTON,
		    x, y, cx, cy, hwndParent,
		    (HMENU)id,      // Cast required here
		    hinst,
		    NULL);

    8. Polymorphic data types (WPARAM, LPARAM, LRESULT, void FAR*) should
       be assigned to variables of a known type as soon as possible.  You
       should avoid using them in your own code when the type of the value is
       known.  This will minimize the number of potentially unsafe and
       non-32-bit-portable casting you will have to do in your code.  The
       macro APIs and message cracker mechanisms provided in windowsx.h will
       take care of almost all packing and unpacking of these data types, in
       a 32-bit portable way.

    9. Become familiar with the common compiler warnings and errors that
       you're likely to encounter as you convert to STRICT.


Common Compiler Warnings and Errors
-----------------------------------

Here are some common compiler warnings and errors you might get when trying
to make your application compile cleanly under warning level 3 or 4, with or
without STRICT.  The error messages shown are for Microsoft C 6.0.

These are also the kinds of warnings and errors you'll recieve as you maintain
STRICT source code.

foo.c(24) : warning C4021: 'bar' : too few actual parameters

    This warning simply means that you're not passing enough parameters to a
    function.  THIS IS ALWAYS A SERIOUS BUG in windows application
    programming even though the compiler treats it as a warning!

foo.c(28) : warning C4035: 'foo' : no return value

    This warning means that a function declared to return a value does not
    return a value.  In older, non-ANSI C code, it was common to declare
    functions that did not return a value with no return type:

	foo(i)
	int i;
	{
	    ...
	}

    Functions declared in this manner are treated by the C compiler as being
    declared to return an "int".  If the function does not return anything,
    it should be declared "void":

	void foo(int i)
	{
	}


foo.c(19) : warning C4047: no function prototype given

    This means that a function was used before it was fully prototyped, or
    declared.  It can also arise when a function that takes no arguments
    is not prototyped with void:

	void bar();     /* Should be: bar(void) */

	main()
	{
	    bar();
	}

foo.c(182) : warning C4047: '=' : different levels of indirection
foo.c(249) : warning C4047: 'argument' : different levels of indirection

    These warnings indicate that you are trying to assign or pass a
    non-pointer type when a pointer type is required.  With STRICT defined,
    all handle types as well as LRESULT, WPARAM, and LPARAM are internally
    declared as pointer types, so trying to pass an int, WORD, or LONG as a
    handle will result in this warning.

    These warnings should be fixed by properly declaring the non-pointer
    values you're assigning or passing.  In the case of special constants
    such as (HWND)1 to indicate "insert at bottom" to the window positioning
    functions, you should use the new #definition such as HWND_BOTTOM.

    Only in rare cases should you suppress a "different levels of
    indirection" warning with a cast: this can often generate incorrect code.

foo.c(335) : warning C4049: 'argument' : indirection to different types

    These warnings indicate that you are passing or assigning a pointer of
    the wrong type.   This is the warning you get if you pass the wrong type
    of handle to a function.  This is because under STRICT all handle types
    are defined as pointers to unique structures.

    To suppress these warnings, fix the type mismatch error in your code.
    Once again, it's dangerous to suppress these warnings with a cast, since
    there may be an underlying type error in your app.

foo.c(345) : warning C4024: 'SendMessage' : different types : parameter 3

    These warnings usually occur with an "indirection to different types" or
    "different levels of indirection" warning to indicate which function parameter
    is incorrect.  Fixing the type warning will fix this warning as well.

foo.c(15) : error C2086: 'lParam' : redefinition

    This error will result if you have inconsistent declarations of
    a variable, parameter, or function in your source code.

foo.c(352) : warning C4028: parameter 4 declaration different
foo.c(352) : warning C4113: function parameter lists differed

    These warnings occur when a function definition doesn't match its
    declaration.  Usually this means that you need to edit a window or dialog
    proc, or a callback function.

    These warnings can also result when you're passing a function to a
    function, and your function is improperly prototyped.  This can occur
    with MakeProcInstance and FreeProcInstance, in which case you must do the
    proper casting to and from FARPROC.


foo.c(191) : warning C4135: conversion between different integral types

    This warning results when a value is converted by the compiler into a
    smaller value type, such as from LONG to int, or int to char.  You're
    being warned because you may lose information from this cast: for
    example, if you cast the int value 256 to a char, the resulting value is
    0, because only the lower 8 bits of the value are preserved.

    If you're sure there are no information-loss problems, you can suppress
    this warning with the appropriate explicit cast to the smaller type.

	char* pch;
	int i;

	i = (int)*pch;

foo.c(64) : warning C4069: conversion of near pointer to long integer

    This error results when you cast a near pointer or a handle to a
    32-bit value such as LRESULT, LPARAM, LONG or DWORD.  This warning
    almost always represents a bug, because the hi-order 16 bits of the
    value will contain a non-zero value.  The C compiler first converts
    the 16-bit near pointer to a 32-bit far pointer by placing the current
    data segment value in the high 16 bits, then converts this far pointer
    to the 32-bit value.

    To avoid this warning and ensure that a 0 is placed in the hi 16 bits,
    you must first cast the handle to a UINT:

	HWND hwnd;
	LRESULT result = (LRESULT)(UINT)hwnd;

    In cases where you DO want the 32-bit value to contain a far pointer,
    you can avoid the warning with an explicit cast to a far pointer:

	char near* pch;
	LPARAM lParam = (LPARAM)(LPSTR)pch;

foo.c(32) : warning C4305: truncation during conversion of integral type
	    to pointer

    This error occurs when you cast a 32-bit value such as an LPARAM or
    LRESULT to a 16-bit pointer.  Under STRICT, handles are declared as
    16-bit pointers, so you'll get this error, for example, when you cast the
    result of a SendMessage() to a window handle.

    To avoid this warning, you must first cast the 32-bit value to a UINT
    before casting to the 16-bit pointer or handle:

	HBRUSH hbr = (HBRUSH)(UINT)SendMessage(hwnd, WM_CTLCOLOR, ..., ...);

foo.c(31) : warning C4059: segment lost in conversion

    This warning results when you cast a far pointer directly into a 16-bit
    quantity such as a near pointer, handle, WORD, UINT, or BOOL.

    The compiler is warning you that the segment part of the address is being
    lost in the conversion to a near pointer.  To suppress these warnings
    (after you've determined that you really want to perform the cast), cast
    the far pointer to a DWORD before casting before casting to the 16-bit
    type.  For example:

	void FAR* lp;
	HANDLE h;
	BOOL f;

	f = (BOOL)(DWORD)lp;
	h = (HANDLE)(DWORD)lp;

foo.c(190) : warning C4018: '<' : signed/unsigned mismatch

    Signed/unsigned mismatch errors occur when you mix signed and unsigned
    values in an expression.  Often this means that a parameter, variable or
    field is incorrectly declared.  To fix these problems, you first have to
    determine which is the correct type that should be used in the
    expression. Then, change the declaration of the offending expression term.

    Don't use casts (unless you have to) to suppress these warnings, because
    that will often hide an underlying problem.  It's very important that you
    correctly determine the correct type for an expression, because it can
    lead to very subtle bugs like the following:

	int i;

	if ((WORD)i) < 0)
	{
	    // This code optimized out by compiler
	    // (since no unsigned value can be less than 0)
	    //
	    i = 0;
	}

foo.c(25) : error C2147: unknown size

    This error results from trying to change the value of a void pointer
    with + or +=.  These typically result from the fact that certain Windows
    functions that return pointers to arbitrary types (such as GlobalLock()
    and LocalLock()) are defined to return void FAR* rather than LPSTR.

    To solve these problems, you should assign the void* value to a properly-
    declared variable (with the appropriate cast):

	BYTE FAR* lpb = (BYTE FAR*)GlobalLock(h);

	lpb += sizeof(DWORD);


foo.c(27) : error C2100: illegal indirection

    This error typically results from trying to dereference a void pointer.
    This usually results from directly using the return value of GlobalLock()
    or LocalLock() as a pointer.  To solve this problem, assign the return
    value to a variable of the appropriate type (with the appropriate cast)
    before using the pointer:

	BYTE FAR* lpb = (BYTE FAR*)GlobalLock(h);

	*lpb = 0;

foo.c(231) : warning c4054 : function pointer cast to a data pointer

    This warning results when casting a function pointer into a data pointer
    of some kind.  If you're sure this is really what you want to do, the
    solution is to first cast the function pointer to a DWORD, then to
    the data pointer:

	WNDPROC lpfnWndProc;
	LPSTR lpch;

	lpch = (LPSTR)(DWORD)lpfnWndProc;

foo.c(200) : warning c4100 : 'lParam' : unreferenced formal parameter

    This message can result in callback functions when your code does not use
    certain parameters.  The following construct in your code will suppress
    this warning without generating any code:

	void Foo(UINT param1)
	{
	    (void)param1;
	}

    For improved readability, you can also #define a macro: #define
    UNUSED(p) (void)(p), and use it as follows:

	void Foo(UINT param1)
	{
	    UNUSED(param1);
	}

foo.c(46) : warning C4204: 'AsmFunc' : in-line assembler precludes global optimizations

    This warning results if you're using any of the global optimization
    flags: -Ogle.  To suppress this warning you must temporarily turn off the
    global optimizations, and do register allocation and loop optimizations
    by hand. It's usually best to split the assembly code out into a separate
    function so that the rest of your C code can benefit from the global
    optimizations.

	#pragma optimize("gle", off)

	void AsmFunc(void)
	{
	    _asm
	    {
	    ...
	    }
	}

	#pragma optimize("", on)    // Use default optimizations

foo.c(934) : warning C4203: 'BigFunc' : function too large for global optimizations

    This warning results with really big functions when you use any of the
    global optimizations flags -Ogle.  You have two options: either break the
    function up into smaller pieces, or turn off the global optimizations in
    the function and do register allocation and loop optimizations by hand:

	#pragma optimize("gle", off)

	void BigFunc(void)
	{
	    ...
	}

	#pragma optimize("", on)    // Use default optimizations

    It's best to break the function up, if you can, since that will allow the
    compiler to optimize your code as much as possible.

foo.c(193) : warning C4090: different 'const/volatile' qualifiers

    This message results if you are passing a const pointer to a function
    expecting a non-const pointer, or if you are assigning a const pointer to
    a non-const pointer.  The MAKEINTRESOURCE and MAKEINTATOM macros are now
    declared to return a const pointer.  Errors can result if you assign
    either of these macros to a LPSTR.  To fix this kind of problem with
    these macros, reedeclare the assigned variable as an LPCSTR.
```

### Directory of Windows SDK 3.10 (Disk 1)

     Volume in drive A is win31SDKD1
     Directory of A:\

    ANALYSIS     <DIR>       3-23-92   3:10a
    CONVERT      <DIR>       3-23-92   3:10a
    NODEBUG      <DIR>       3-23-92   3:10a
    REDISTRB     <DIR>       3-23-92   3:10a
    RESTOOLS     <DIR>       3-23-92   3:10a
    SAMPLES      <DIR>       3-23-92   3:10a
    WINSTUB      <DIR>       3-23-92   3:10a
    INSTALL  EXE     94075   3-23-92   3:10a
    INSTALL  INF     37180   3-23-92   3:10a
    README   SDK      5729   3-23-92   3:10a
    README   WR_      8366   3-23-92   3:10a
    ROBUST   TX_      3425   3-23-92   3:10a
    WINDOWS  TX_     12577   3-23-92   3:10a
    WINDOWSX TX_     16729   3-23-92   3:10a
           14 file(s)     178081 bytes

     Directory of A:\ANALYSIS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DDESPY   EX_     15621   3-23-92   3:10a
    HEAPWALK EX_     23696   3-23-92   3:10a
    HOOK     DL_      1985   3-23-92   3:10a
    SHOWHITS EX_     28500   3-23-92   3:10a
    SPY      EX_     14997   3-23-92   3:10a
    STRESS   EX_     27861   3-23-92   3:10a
    STRESS   HL_     18128   3-23-92   3:10a
    STRESS   IN_       838   3-23-92   3:10a
    VPROD    38_      2488   3-23-92   3:10a
           11 file(s)     134114 bytes

     Directory of A:\CONVERT

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    COMPRESS EX_     11349   3-23-92   3:10a
    MARK     EX_     16370   3-23-92   3:10a
            4 file(s)      27719 bytes

     Directory of A:\NODEBUG

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    GDI      SY_      3437   3-23-92   3:10a
    KRNL286  SY_      2828   3-23-92   3:10a
    KRNL386  SY_      2850   3-23-92   3:10a
    MMSYSTEM SY_      3544   3-23-92   3:10a
    USER     SY_      5548   3-23-92   3:10a
            7 file(s)      18207 bytes

     Directory of A:\REDISTRB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    SMALLF   FO_     10489   3-23-92   3:10a
    VER      DL_      6307   3-23-92   3:10a
            4 file(s)      16796 bytes

     Directory of A:\RESTOOLS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    ATRM1111 FN_      2493   3-23-92   3:10a
    DBWIN    DL_      6403   3-23-92   3:10a
    DBWIN    EX_      8222   3-23-92   3:10a
    DLGEDIT  EX_     74157   3-23-92   3:10a
    DLGEDIT  HL_    144206   3-23-92   3:10a
    EDITHLP  HL_     17121   3-23-92   3:10a
    FONTEDIT EX_     28401   3-23-92   3:10a
    FONTEDIT HL_     10903   3-23-92   3:10a
    HC       BA_        78   3-23-92   3:10a
    HC30     EX_     90348   3-23-92   3:10a
    HC31     ER_      3143   3-23-92   3:10a
    HC31     EX_    121570   3-23-92   3:10a
    IMAGEDIT EX_     36634   3-23-92   3:10a
    IMAGEDIT HL_     65565   3-23-92   3:10a
    MARKMIDI EX_      6472   3-23-92   3:10a
    MRBC     EX_     35200   3-23-92   3:10a
    QH       EX_     49637   3-23-92   3:10a
    QH       HL_     24538   3-23-92   3:10a
    RC       EX_     40646   3-23-92   3:10a
    RCPP     ER_      5733   3-23-92   3:10a
    RCPP     EX_     88458   3-23-92   3:10a
    SDKTOOL1 GR_      4439   3-23-92   3:10a
    SDKTOOLS GR_      5569   3-23-92   3:10a
    SHED     EX_     49668   3-23-92   3:10a
    SHED     HL_     72565   3-23-92   3:10a
    VGASYS   FN_      2379   3-23-92   3:10a
    ZOOMIN   EX_      4043   3-23-92   3:10a
           29 file(s)     998591 bytes

     Directory of A:\SAMPLES

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    SRVRDEMO     <DIR>       3-23-92   3:10a
            3 file(s)          0 bytes

     Directory of A:\SAMPLES\SRVRDEMO

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DOC      C_       6763   3-23-92   3:10a
    FILE     C_       5255   3-23-92   3:10a
    INI      RE_       276   3-23-92   3:10a
    MAKEFILE _         822   3-23-92   3:10a
            6 file(s)      13116 bytes

     Directory of A:\WINSTUB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    WINSTUB  EX_       182   3-23-92   3:10a
            3 file(s)        182 bytes

    Total files listed:
           81 file(s)    1386806 bytes
                           52736 bytes free

![Windows SDK 3.10 (Disk 1)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK01.jpg)

### Directory of Windows SDK 3.10 (Disk 2)

     Volume in drive A is win31SDKD2
     Directory of A:\

    DBGTOOLS     <DIR>       3-23-92   3:10a
    DEBUG        <DIR>       3-23-92   3:10a
    SAMPLES      <DIR>       3-23-92   3:10a
            3 file(s)          0 bytes

     Directory of A:\DBGTOOLS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CVW3     EX_    282311   3-23-92   3:10a
    CVW3     HL_    228167   3-23-92   3:10a
    CVWIN    DL_      6823   3-23-92   3:10a
    D2N      BA_        40   3-23-92   3:10a
    MAPSYM   EX_     21338   3-23-92   3:10a
    N2D      BA_        40   3-23-92   3:10a
    SWITCH   BA_      1848   3-23-92   3:10a
    VCV      38_      2051   3-23-92   3:10a
    WDEB386  EX_     66170   3-23-92   3:10a
    WINDEBUG 38_      1265   3-23-92   3:10a
           12 file(s)     610053 bytes

     Directory of A:\DEBUG

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    GDI      EX_    188825   3-23-92   3:10a
    GDI      SY_      3434   3-23-92   3:10a
    KRNL286  EX_     74529   3-23-92   3:10a
    KRNL286  SY_      2827   3-23-92   3:10a
    KRNL386  EX_     78865   3-23-92   3:10a
    KRNL386  SY_      2844   3-23-92   3:10a
    MMSYSTEM DL_     38873   3-23-92   3:10a
    MMSYSTEM SY_      3669   3-23-92   3:10a
    USER     EX_    227508   3-23-92   3:10a
    USER     SY_      6832   3-23-92   3:10a
           12 file(s)     628206 bytes

     Directory of A:\SAMPLES

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    RAINBOW      <DIR>       3-23-92   3:10a
            3 file(s)          0 bytes

     Directory of A:\SAMPLES\RAINBOW

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    RAINBOW  C_       9700   3-23-92   3:10a
            3 file(s)       9700 bytes

    Total files listed:
           33 file(s)    1247959 bytes
                          201728 bytes free

![Windows SDK 3.10 (Disk 2)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK02.jpg)

### Directory of Windows SDK 3.10 (Disk 3)

     Volume in drive A is win31SDKD3
     Directory of A:\

    DLL          <DIR>       3-23-92   3:10a
    INC          <DIR>       3-23-92   3:10a
    REDISTRB     <DIR>       3-23-92   3:10a
    SAMPLES      <DIR>       3-23-92   3:10a
    WLIB         <DIR>       3-23-92   3:10a
            5 file(s)          0 bytes

     Directory of A:\DLL

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    STRESS   DL_     11409   3-23-92   3:10a
    STRESSHK DL_      1998   3-23-92   3:10a
    STRESSLG DL_      5444   3-23-92   3:10a
            5 file(s)      18851 bytes

     Directory of A:\INC

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CDERR    H_        888   3-23-92   3:10a
    CMACROS  IN_      7078   3-23-92   3:10a
    COLORDLG H_        629   3-23-92   3:10a
    COMMDLG  H_       4263   3-23-92   3:10a
    CPL      H_       2454   3-23-92   3:10a
    CUSTCNTL H_       1624   3-23-92   3:10a
    DDE      H_       1564   3-23-92   3:10a
    DDEML    H_       5577   3-23-92   3:10a
    DLGS     H_       1828   3-23-92   3:10a
    DRIVINIT H_         73   3-23-92   3:10a
    LZDOS    H_        115   3-23-92   3:10a
    LZEXPAND H_       1476   3-23-92   3:10a
    MMSYSTEM H_      23133   3-23-92   3:10a
    MMSYSTEM IN_     17469   3-23-92   3:10a
    OLE      H_       7694   3-23-92   3:10a
    PENWIN   H_       9227   3-23-92   3:10a
    PENWOEM  H_       1121   3-23-92   3:10a
    PRINT    H_       4306   3-23-92   3:10a
    SCRNSAVE H_       2978   3-23-92   3:10a
    SHELLAPI H_       1339   3-23-92   3:10a
    STRESS   H_        768   3-23-92   3:10a
    TOOLHELP H_       5215   3-23-92   3:10a
    TOOLHELP IN_      3118   3-23-92   3:10a
    VER      H_       3434   3-23-92   3:10a
    WFEXT    H_       1278   3-23-92   3:10a
    WINDOWS  H_      49286   3-23-92   3:10a
    WINDOWS  IN_     25259   3-23-92   3:10a
    WINDOWSX H_      15138   3-23-92   3:10a
    WINMEM32 H_        430   3-23-92   3:10a
           31 file(s)     198762 bytes

     Directory of A:\REDISTRB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    COMMDLG  DA_     50813   3-23-92   3:10a
    COMMDLG  DL_     50924   3-23-92   3:10a
    COMMDLG  DU_     50930   3-23-92   3:10a
    COMMDLG  FI_     50887   3-23-92   3:10a
    COMMDLG  FR_     51148   3-23-92   3:10a
    COMMDLG  GE_     51168   3-23-92   3:10a
    COMMDLG  IT_     50939   3-23-92   3:10a
    COMMDLG  NO_     50816   3-23-92   3:10a
    COMMDLG  PO_     51041   3-23-92   3:10a
    COMMDLG  SP_     51211   3-23-92   3:10a
    COMMDLG  SW_     50830   3-23-92   3:10a
    DDEML    DL_     22366   3-23-92   3:10a
    DIB      DR_     21070   3-23-92   3:10a
    EXPAND   EXE     15285   3-23-92   3:10a
    LZEXPAND DL_      6551   3-23-92   3:10a
    MCIPIONR DR_     10219   3-23-92   3:10a
    OEMSETUP IN_       298   3-23-92   3:10a
    OLECLI   DL_     45422   3-23-92   3:10a
    OLESVR   DL_     14552   3-23-92   3:10a
    PENWIN   DL_     92403   3-23-92   3:10a
    REGLOAD  EX_      9588   3-23-92   3:10a
    SMALLB   FO_     10928   3-23-92   3:10a
    SMALLE   FO_     12501   3-23-92   3:10a
    STRESS   DL_     11409   3-23-92   3:10a
    TOOLHELP DL_     10372   3-23-92   3:10a
    VTD      38_      4681   3-23-92   3:10a
    WINHELP  EX_    163861   3-23-92   3:10a
    WINMEM32 DL_      2999   3-23-92   3:10a
           30 file(s)    1015212 bytes

     Directory of A:\SAMPLES

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    RAINBOW      <DIR>       3-23-92   3:10a
    TOOLHELP     <DIR>       3-23-92   3:10a
            4 file(s)          0 bytes

     Directory of A:\SAMPLES\RAINBOW

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    RAINBOW  DL_       412   3-23-92   3:10a
            3 file(s)        412 bytes

     Directory of A:\SAMPLES\TOOLHELP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         808   3-23-92   3:10a
            3 file(s)        808 bytes

     Directory of A:\WLIB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    COMMDLG  LI_       511   3-23-92   3:10a
    DDEML    LI_       950   3-23-92   3:10a
    LIBENTRY AS_      1445   3-23-92   3:10a
    LIBENTRY OB_       384   3-23-92   3:10a
    LIBW     LI_     37130   3-23-92   3:10a
    LZEXPAND LI_       502   3-23-92   3:10a
    LZEXPC   LI_     16737   3-23-92   3:10a
    LZEXPL   LI_     17069   3-23-92   3:10a
    LZEXPM   LI_     14509   3-23-92   3:10a
    LZEXPS   LI_     14238   3-23-92   3:10a
    MMSYSTEM LI_      4084   3-23-92   3:10a
    OLECLI   LI_      1948   3-23-92   3:10a
    OLESVR   LI_       532   3-23-92   3:10a
    PENWIN   LI_      2921   3-23-92   3:10a
    SCRNSAVE LI_      7500   3-23-92   3:10a
    SHELL    LI_       648   3-23-92   3:10a
    STRESS   LI_       537   3-23-92   3:10a
    TOOLHELP LI_      1057   3-23-92   3:10a
    VER      LI_       506   3-23-92   3:10a
    VERC     LI_      7671   3-23-92   3:10a
    VERL     LI_      7767   3-23-92   3:10a
    VERM     LI_      7651   3-23-92   3:10a
    VERS     LI_      7619   3-23-92   3:10a
    WIN87EM  LI_       807   3-23-92   3:10a
    WINMEM32 LI_       509   3-23-92   3:10a
           27 file(s)     155232 bytes

    Total files listed:
          108 file(s)    1389277 bytes
                           41984 bytes free

![Windows SDK 3.10 (Disk 3)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK03.jpg)

### Directory of Windows SDK 3.10 (Disk 4)

     Volume in drive A is win31SDKD4
     Directory of A:\

    GUIDIRS      <DIR>       3-23-92   3:10a
    GUISETUP     <DIR>       3-23-92   3:10a
    PEN          <DIR>       3-23-92   3:10a
    REDISTRB     <DIR>       3-23-92   3:10a
    SAMPLES      <DIR>       3-23-92   3:10a
            5 file(s)          0 bytes

     Directory of A:\GUIDIRS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BLDCUI       <DIR>       3-23-92   3:10a
    DISKLAY      <DIR>       3-23-92   3:10a
    INTLDLL      <DIR>       3-23-92   3:10a
            5 file(s)          0 bytes

     Directory of A:\GUIDIRS\BLDCUI

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BITMAP   DI_      1000   3-23-92   3:10a
    BLDVER   H_        608   3-23-92   3:10a
    CUI      H_        669   3-23-92   3:10a
    CUISTF   LN_       120   3-23-92   3:10a
    CUISTFD  LN_       123   3-23-92   3:10a
    DIALOGS  DL_      5607   3-23-92   3:10a
    DIALOGS  H_       1156   3-23-92   3:10a
    DIALOGS  RC_       548   3-23-92   3:10a
    DIALOGS  RE_      5881   3-23-92   3:10a
    DLGPROCS C_      10915   3-23-92   3:10a
    MAKEFILE _         371   3-23-92   3:10a
    MSCOMSTF LI_      4842   3-23-92   3:10a
    MSCUISTF DE_       367   3-23-92   3:10a
    MSSHLSTF LI_       597   3-23-92   3:10a
    MSUILSTF LI_       557   3-23-92   3:10a
    SETUP    IC_       723   3-23-92   3:10a
           18 file(s)      34084 bytes

     Directory of A:\GUIDIRS\DISKLAY

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    COLORLST VB_     10617   3-23-92   3:10a
    DSKLAYT  EX_     52490   3-23-92   3:10a
    DSKLAYT2 EX_     57346   3-23-92   3:10a
    VBRUN100 DL_    189920   3-23-92   3:10a
            6 file(s)     310373 bytes

     Directory of A:\GUIDIRS\INTLDLL

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BLDVER   H_        608   3-23-92   3:10a
    GAUGE    DL_       366   3-23-92   3:10a
    GAUGE    H_        548   3-23-92   3:10a
    IDS      H_       2541   3-23-92   3:10a
    IDS_INST H_         99   3-23-92   3:10a
    LOGIDS   H_        451   3-23-92   3:10a
    MSCOMSTF DL_     36935   3-23-92   3:10a
    MSCOMSTF RC_      5576   3-23-92   3:10a
    MSDETSTF DL_     14351   3-23-92   3:10a
    MSDETSTF RC_       457   3-23-92   3:10a
    MSINSSTF DL_     39784   3-23-92   3:10a
    MSINSSTF RC_       846   3-23-92   3:10a
    MSSHLSTF DL_      6929   3-23-92   3:10a
    MSSHLSTF RC_      1919   3-23-92   3:10a
    MSUILSTF DL_      3541   3-23-92   3:10a
    MSUILSTF RC_       453   3-23-92   3:10a
           18 file(s)     115404 bytes

     Directory of A:\GUISETUP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    FILEDESC WR_      5388   3-23-92   3:10a
    MSCOMSTF DL_     41320   3-23-92   3:10a
    MSCUISTF DL_     10751   3-23-92   3:10a
    MSDETECT IN_      4726   3-23-92   3:10a
    MSDETSTF DL_     14949   3-23-92   3:10a
    MSINSSTF DL_     40805   3-23-92   3:10a
    MSREGDB  IN_      1361   3-23-92   3:10a
    MSSHARED IN_      1151   3-23-92   3:10a
    MSSHLSTF DL_      9226   3-23-92   3:10a
    MSUILSTF DL_      3970   3-23-92   3:10a
    README   WR_      8633   3-23-92   3:10a
    SAMPLE1  IN_       415   3-23-92   3:10a
    SAMPLE1  MS_      2579   3-23-92   3:10a
    SAMPLE2  IN_       475   3-23-92   3:10a
    SAMPLE2  MS_      4570   3-23-92   3:10a
    SAMPLE3  IN_       503   3-23-92   3:10a
    SAMPLE3  MS_      1393   3-23-92   3:10a
    SETUP    EX_     15807   3-23-92   3:10a
    SETUP    LS_       336   3-23-92   3:10a
    SETUPAPI IN_     13459   3-23-92   3:10a
    TESTDRVR HL_     37672   3-23-92   3:10a
    _MSSETUP EX_      7543   3-23-92   3:10a
    _MSTEST  EX_     55370   3-23-92   3:10a
           25 file(s)     282402 bytes

     Directory of A:\PEN

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MARS     DL_     90573   3-23-92   3:10a
    MARS     MO_     76040   3-23-92   3:10a
    MSMOUSE  DR_      4287   3-23-92   3:10a
    PENWIN   IN_       328   3-23-92   3:10a
    README   TX_      7313   3-23-92   3:10a
    VGAP     DR_     43502   3-23-92   3:10a
    YESMOUSE DR_       317   3-23-92   3:10a
            9 file(s)     222360 bytes

     Directory of A:\REDISTRB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    SHELL    DL_     25821   3-23-92   3:10a
    WINHELP  HL_     23822   3-23-92   3:10a
            4 file(s)      49643 bytes

     Directory of A:\SAMPLES

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CLIDEMO      <DIR>       3-23-92   3:10a
    CROPDIB      <DIR>       3-23-92   3:10a
    DDEML        <DIR>       3-23-92   3:10a
    HELPEX       <DIR>       3-23-92   3:10a
    INSTVER      <DIR>       3-23-92   3:10a
    MEMORY       <DIR>       3-23-92   3:10a
    MYPAL        <DIR>       3-23-92   3:10a
    RAINBOW      <DIR>       3-23-92   3:10a
    SRVRDEMO     <DIR>       3-23-92   3:10a
           11 file(s)          0 bytes

     Directory of A:\SAMPLES\CLIDEMO

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CLIDEMO  C_      12477   3-23-92   3:10a
    CLIDEMO  DE_       442   3-23-92   3:10a
    CLIDEMO  H_       1040   3-23-92   3:10a
    CLIDEMO  IC_       310   3-23-92   3:10a
    CLIDEMO  RC_      4761   3-23-92   3:10a
    CLIVER   RC_       174   3-23-92   3:10a
    DEMORC   H_       2241   3-23-92   3:10a
    DIALOG   C_      11932   3-23-92   3:10a
    DIALOG   H_       1205   3-23-92   3:10a
    GLOBAL   H_       1953   3-23-92   3:10a
    MAKEFILE _         893   3-23-92   3:10a
    OBJECT   C_      14734   3-23-92   3:10a
    OBJECT   H_        712   3-23-92   3:10a
    REGISTER C_       2519   3-23-92   3:10a
    REGISTER H_        336   3-23-92   3:10a
    STREAM   C_       4557   3-23-92   3:10a
    STREAM   H_        539   3-23-92   3:10a
    UTILITY  C_       5770   3-23-92   3:10a
    UTILITY  H_        627   3-23-92   3:10a
           21 file(s)      67222 bytes

     Directory of A:\SAMPLES\CROPDIB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CROPDIB  C_       6580   3-23-92   3:10a
    CROPDIB  DE_       243   3-23-92   3:10a
    CROPDIB  H_        752   3-23-92   3:10a
    CROPDIB  IC_       229   3-23-92   3:10a
    CROPDIB  RC_      1470   3-23-92   3:10a
    DIB      C_      13430   3-23-92   3:10a
    DIB      H_        876   3-23-92   3:10a
    MAKEFILE _         804   3-23-92   3:10a
           10 file(s)      24384 bytes

     Directory of A:\SAMPLES\DDEML

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CLIENT       <DIR>       3-23-92   3:10a
    CLOCK        <DIR>       3-23-92   3:10a
    SERVER       <DIR>       3-23-92   3:10a
            5 file(s)          0 bytes

     Directory of A:\SAMPLES\DDEML\CLIENT

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CLINIT   C_       2092   3-23-92   3:10a
    CONV     IC_       343   3-23-92   3:10a
    DDE      C_       7766   3-23-92   3:10a
    DDEMLCL  C_      14426   3-23-92   3:10a
    DDEMLCL  DE_       457   3-23-92   3:10a
    DDEMLCL  DL_      2357   3-23-92   3:10a
    DDEMLCL  H_       3656   3-23-92   3:10a
    DDEMLCL  IC_       359   3-23-92   3:10a
    DDEMLCL  RC_      1456   3-23-92   3:10a
    DIALOG   C_       8971   3-23-92   3:10a
    DIALOG   H_        532   3-23-92   3:10a
    HUGE     C_       2141   3-23-92   3:10a
    HUGE     H_        212   3-23-92   3:10a
    INFOCTRL C_       6742   3-23-92   3:10a
    INFOCTRL H_       1039   3-23-92   3:10a
    LIST     IC_       295   3-23-92   3:10a
    MAKEFILE _         886   3-23-92   3:10a
    MEM      C_        956   3-23-92   3:10a
    TRACK    C_       2773   3-23-92   3:10a
    TRACK    H_        367   3-23-92   3:10a
           22 file(s)      57826 bytes

     Directory of A:\SAMPLES\DDEML\CLOCK

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CLOCKDAT AS_       509   3-23-92   3:10a
    CLOCKDAT BI_       281   3-23-92   3:10a
    DDEMLCLK C_      10494   3-23-92   3:10a
    DDEMLCLK DE_       264   3-23-92   3:10a
    DDEMLCLK DL_       414   3-23-92   3:10a
    DDEMLCLK H_       1362   3-23-92   3:10a
    DDEMLCLK IC_       315   3-23-92   3:10a
    DDEMLCLK RC_       287   3-23-92   3:10a
    GETTIME  AS_       568   3-23-92   3:10a
    GETTIME  OB_       219   3-23-92   3:10a
    MAKEFILE _         854   3-23-92   3:10a
    WRAPPER  C_       5215   3-23-92   3:10a
    WRAPPER  H_       1044   3-23-92   3:10a
           15 file(s)      21826 bytes

     Directory of A:\SAMPLES\DDEML\SERVER

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DDE      C_       6716   3-23-92   3:10a
    DDEMLSV  C_       8362   3-23-92   3:10a
    DDEMLSV  DE_       382   3-23-92   3:10a
    DDEMLSV  DL_      1072   3-23-92   3:10a
    DDEMLSV  H_       1957   3-23-92   3:10a
    DDEMLSV  IC_       366   3-23-92   3:10a
    DDEMLSV  RC_       633   3-23-92   3:10a
    DIALOG   C_       2627   3-23-92   3:10a
    DIALOG   H_        160   3-23-92   3:10a
    HUGE     C_       2141   3-23-92   3:10a
    HUGE     H_        212   3-23-92   3:10a
    MAKEFILE _         829   3-23-92   3:10a
           14 file(s)      25457 bytes

     Directory of A:\SAMPLES\HELPEX

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BULLET   BM_       129   3-23-92   3:10a
    CHKBOFF  BM_        67   3-23-92   3:10a
    CHKBON   BM_        93   3-23-92   3:10a
    CODEC    BM_       320   3-23-92   3:10a
    CONTINUE BM_       250   3-23-92   3:10a
    DONE     BM_       229   3-23-92   3:10a
    HELP     CU_       232   3-23-92   3:10a
    HELPEX   C_       4476   3-23-92   3:10a
    HELPEX   DE_       244   3-23-92   3:10a
    HELPEX   DL_       274   3-23-92   3:10a
    HELPEX   HP_       526   3-23-92   3:10a
    HELPEX   H_        451   3-23-92   3:10a
    HELPEX   RC_       646   3-23-92   3:10a
    HELPEX   RT_      9894   3-23-92   3:10a
    HELPICON BM_       146   3-23-92   3:10a
    HELPIDS  H_        273   3-23-92   3:10a
    KEYS     RT_      4368   3-23-92   3:10a
    MAKEFILE _         793   3-23-92   3:10a
    MAX2ICON BM_        83   3-23-92   3:10a
    MOUSE    BM_       108   3-23-92   3:10a
    TERMS    RT_      1169   3-23-92   3:10a
    WINWORD  BM_       286   3-23-92   3:10a
           24 file(s)      25057 bytes

     Directory of A:\SAMPLES\INSTVER

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DLLENTRY AS_      1225   3-23-92   3:10a
    DLLENTRY OB_       487   3-23-92   3:10a
    DOS      AS_      2580   3-23-92   3:10a
    DOS      OB_      1099   3-23-92   3:10a
    INSTPRIV H_       1512   3-23-92   3:10a
    INSTVER  C_       5612   3-23-92   3:10a
    INSTVER  DE_       246   3-23-92   3:10a
    INSTVER  H_        687   3-23-92   3:10a
    MAKEFILE _        1077   3-23-92   3:10a
           11 file(s)      14525 bytes

     Directory of A:\SAMPLES\MEMORY

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         796   3-23-92   3:10a
    MEM      H_        265   3-23-92   3:10a
    MEMORY   DE_       323   3-23-92   3:10a
    MEMORY   RC_       375   3-23-92   3:10a
    MEMORY1  C_        467   3-23-92   3:10a
    MEMORY2  C_        753   3-23-92   3:10a
    MEMORY3  C_        604   3-23-92   3:10a
    MEMORY4  C_        485   3-23-92   3:10a
           10 file(s)       4068 bytes

     Directory of A:\SAMPLES\MYPAL

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         772   3-23-92   3:10a
    MYPAL    C_       6684   3-23-92   3:10a
    MYPAL    DE_       208   3-23-92   3:10a
    MYPAL    H_        285   3-23-92   3:10a
    MYPAL    IC_       193   3-23-92   3:10a
    MYPAL    RC_       159   3-23-92   3:10a
            8 file(s)       8301 bytes

     Directory of A:\SAMPLES\RAINBOW

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         781   3-23-92   3:10a
    RAINBOW  DE_       254   3-23-92   3:10a
    RAINBOW  H_        345   3-23-92   3:10a
    RAINBOW  RC_       503   3-23-92   3:10a
            6 file(s)       1883 bytes

     Directory of A:\SAMPLES\SRVRDEMO

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    OBJ      C_      10892   3-23-92   3:10a
    SERVER   C_       5485   3-23-92   3:10a
    SRVRDEMO C_      13279   3-23-92   3:10a
    SRVRDEMO DE_       752   3-23-92   3:10a
    SRVRDEMO H_       4378   3-23-92   3:10a
    SRVRDEMO IC_       254   3-23-92   3:10a
    SRVRDEMO RC_      1231   3-23-92   3:10a
            9 file(s)      36271 bytes

    Total files listed:
          256 file(s)    1301086 bytes
                           93184 bytes free

![Windows SDK 3.10 (Disk 4)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK04.jpg)

### Directory of Windows SDK 3.10 (Disk 5)

     Volume in drive A is win31SDKD5
     Directory of A:\

    SAMPLES      <DIR>       3-23-92   3:10a
            1 file(s)          0 bytes

     Directory of A:\SAMPLES

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BITMAP       <DIR>       3-23-92   3:10a
    BLANDMDI     <DIR>       3-23-92   3:10a
    BOUNCER      <DIR>       3-23-92   3:10a
    CDDEMO       <DIR>       3-23-92   3:10a
    CLIPTEXT     <DIR>       3-23-92   3:10a
    COMMDLG      <DIR>       3-23-92   3:10a
    CURSOR       <DIR>       3-23-92   3:10a
    DBWIN        <DIR>       3-23-92   3:10a
    DDE          <DIR>       3-23-92   3:10a
    DEFPROCS     <DIR>       3-23-92   3:10a
    DIBIT        <DIR>       3-23-92   3:10a
    DIBVIEW      <DIR>       3-23-92   3:10a
    DRAGDROP     <DIR>       3-23-92   3:10a
    EDITCNTL     <DIR>       3-23-92   3:10a
    EDITFILE     <DIR>       3-23-92   3:10a
    EDITMENU     <DIR>       3-23-92   3:10a
    EXPENSE      <DIR>       3-23-92   3:10a
    FILEOPEN     <DIR>       3-23-92   3:10a
    FONTEST      <DIR>       3-23-92   3:10a
    GDOSMEM      <DIR>       3-23-92   3:10a
    GENERIC      <DIR>       3-23-92   3:10a
    GWAPI        <DIR>       3-23-92   3:10a
    HANDLER      <DIR>       3-23-92   3:10a
    HELPHOOK     <DIR>       3-23-92   3:10a
    HFORM        <DIR>       3-23-92   3:10a
    HOOKS        <DIR>       3-23-92   3:10a
    ICON         <DIR>       3-23-92   3:10a
    INPUT        <DIR>       3-23-92   3:10a
    LISTHORZ     <DIR>       3-23-92   3:10a
    LOWPASS      <DIR>       3-23-92   3:10a
    MACROHLP     <DIR>       3-23-92   3:10a
    MAKEAPP      <DIR>       3-23-92   3:10a
    MCITEST      <DIR>       3-23-92   3:10a
    MENU         <DIR>       3-23-92   3:10a
    MIDIMON      <DIR>       3-23-92   3:10a
    MULTIPAD     <DIR>       3-23-92   3:10a
    MUSCROLL     <DIR>       3-23-92   3:10a
    OWNERB       <DIR>       3-23-92   3:10a
    PALETTE      <DIR>       3-23-92   3:10a
    PENCNTL      <DIR>       3-23-92   3:10a
    PENPAD       <DIR>       3-23-92   3:10a
    REVERSE      <DIR>       3-23-92   3:10a
    ROTARY       <DIR>       3-23-92   3:10a
    SHOWGDI      <DIR>       3-23-92   3:10a
    SNOOP        <DIR>       3-23-92   3:10a
    SREC         <DIR>       3-23-92   3:10a
    TDOSMEM      <DIR>       3-23-92   3:10a
    TIMERS       <DIR>       3-23-92   3:10a
    TOOLHELP     <DIR>       3-23-92   3:10a
    TTY          <DIR>       3-23-92   3:10a
    VER          <DIR>       3-23-92   3:10a
    VERSTAMP     <DIR>       3-23-92   3:10a
    WINMEM32     <DIR>       3-23-92   3:10a
    WMFDCODE     <DIR>       3-23-92   3:10a
    XTENSION     <DIR>       3-23-92   3:10a
           57 file(s)          0 bytes

     Directory of A:\SAMPLES\BITMAP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BITMAP   C_       5533   3-23-92   3:10a
    BITMAP   DE_       252   3-23-92   3:10a
    BITMAP   H_        417   3-23-92   3:10a
    BITMAP   RC_       555   3-23-92   3:10a
    CAT      BM_       359   3-23-92   3:10a
    DOG      BM_       352   3-23-92   3:10a
    MAKEFILE _         793   3-23-92   3:10a
    SELECT   C_       1265   3-23-92   3:10a
    SELECT   DL_      2807   3-23-92   3:10a
    SELECT   H_        478   3-23-92   3:10a
    SELECT   LI_       340   3-23-92   3:10a
           13 file(s)      13151 bytes

     Directory of A:\SAMPLES\BLANDMDI

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BLANDINI C_       1950   3-23-92   3:10a
    BLANDMDI C_       3057   3-23-92   3:10a
    BLANDMDI DE_       340   3-23-92   3:10a
    BLANDMDI H_        825   3-23-92   3:10a
    BLANDMDI RC_       585   3-23-92   3:10a
    MAKEFILE _         847   3-23-92   3:10a
    MDICHILD IC_       241   3-23-92   3:10a
    MDIFRAME IC_       252   3-23-92   3:10a
           10 file(s)       8097 bytes

     Directory of A:\SAMPLES\BOUNCER

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BOUNCER  C_       5750   3-23-92   3:10a
    BOUNCER  DE_       365   3-23-92   3:10a
    BOUNCER  DL_       841   3-23-92   3:10a
    BOUNCER  H_        668   3-23-92   3:10a
    BOUNCER  IC_       259   3-23-92   3:10a
    BOUNCER  RC_       574   3-23-92   3:10a
    FROG     BM_      1246   3-23-92   3:10a
    MAKEFILE _         830   3-23-92   3:10a
    RIBBIT   WA_      3266   3-23-92   3:10a
    SCRNSAVE DL_       898   3-23-92   3:10a
           12 file(s)      14697 bytes

     Directory of A:\SAMPLES\CDDEMO

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CDDEMO   C_      15481   3-23-92   3:10a
    CDDEMO   DE_       569   3-23-92   3:10a
    CDDEMO   DL_       369   3-23-92   3:10a
    CDDEMO   H_       2613   3-23-92   3:10a
    CDDEMO   IC_       323   3-23-92   3:10a
    CDDEMO   RC_      1601   3-23-92   3:10a
    DLGBRUSH BM_        94   3-23-92   3:10a
    ERROR    C_       1882   3-23-92   3:10a
    INIT     C_        686   3-23-92   3:10a
    MAKEFILE _         798   3-23-92   3:10a
    PRINT    DL_       321   3-23-92   3:10a
           13 file(s)      24737 bytes

     Directory of A:\SAMPLES\CLIPTEXT

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CLIPTEXT C_       4370   3-23-92   3:10a
    CLIPTEXT DE_       254   3-23-92   3:10a
    CLIPTEXT H_        392   3-23-92   3:10a
    CLIPTEXT RC_       765   3-23-92   3:10a
    MAKEFILE _         774   3-23-92   3:10a
            7 file(s)       6555 bytes

     Directory of A:\SAMPLES\COMMDLG

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CDDRV    BM_       140   3-23-92   3:10a
    COLOR    DL_       890   3-23-92   3:10a
    FILEOPEN DL_      1261   3-23-92   3:10a
    FINDTEXT DL_       975   3-23-92   3:10a
    FONT     BM_       277   3-23-92   3:10a
    FONT     DL_       832   3-23-92   3:10a
    LANDSCAP IC_       509   3-23-92   3:10a
    PORTRAIT IC_       527   3-23-92   3:10a
    PRNSETUP DL_      1309   3-23-92   3:10a
    SMFLDER  BM_       128   3-23-92   3:10a
    SMFLDR1  BM_       138   3-23-92   3:10a
    SMFLDR2  BM_       131   3-23-92   3:10a
    SMFLDR3  BM_       150   3-23-92   3:10a
    SMFLDR4  BM_       152   3-23-92   3:10a
    SMFLDR5  BM_       163   3-23-92   3:10a
    SMFLOPY  BM_       128   3-23-92   3:10a
    SMHARD   BM_       125   3-23-92   3:10a
    SMNET    BM_       133   3-23-92   3:10a
    SMRAM    BM_       126   3-23-92   3:10a
           21 file(s)       8094 bytes

     Directory of A:\SAMPLES\CURSOR

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BULLSEYE CU_       187   3-23-92   3:10a
    CURSOR   C_       5263   3-23-92   3:10a
    CURSOR   DE_       254   3-23-92   3:10a
    CURSOR   H_        225   3-23-92   3:10a
    CURSOR   RC_       401   3-23-92   3:10a
    MAKEFILE _         786   3-23-92   3:10a
            8 file(s)       7116 bytes

     Directory of A:\SAMPLES\DBWIN

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    ALLOCBRK C_       1656   3-23-92   3:10a
    COMOUT   C_       1329   3-23-92   3:10a
    DBAPI    TX_      4189   3-23-92   3:10a
    DBWIN    C_       5659   3-23-92   3:10a
    DBWIN    DE_       202   3-23-92   3:10a
    DBWIN    DL_      1695   3-23-92   3:10a
    DBWIN    H_       1056   3-23-92   3:10a
    DBWIN    IC_       350   3-23-92   3:10a
    DBWIN    RC_       770   3-23-92   3:10a
    DBWIN    TX_      5229   3-23-92   3:10a
    DBWIN    VE_       848   3-23-92   3:10a
    DBWINDLL C_       3102   3-23-92   3:10a
    DBWINDLL DE_       189   3-23-92   3:10a
    DBWINDLL H_        518   3-23-92   3:10a
    DBWINDLL RC_        91   3-23-92   3:10a
    DBWINDLL VE_       867   3-23-92   3:10a
    DBWINDLP H_        795   3-23-92   3:10a
    DLGDEFS  H_        604   3-23-92   3:10a
    MAKEFILE _        1168   3-23-92   3:10a
    MONOOUT  C_       2451   3-23-92   3:10a
    NFYFMT   C_       3394   3-23-92   3:10a
    SETDB    C_       2466   3-23-92   3:10a
           24 file(s)      38628 bytes

     Directory of A:\SAMPLES\DDE

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CLIDATA  C_       6477   3-23-92   3:10a
    CLIDDE   C_       6373   3-23-92   3:10a
    CLIENT   C_       6580   3-23-92   3:10a
    CLIENT   DE_       387   3-23-92   3:10a
    CLIENT   DL_      1685   3-23-92   3:10a
    CLIENT   H_       1047   3-23-92   3:10a
    CLIENT   RC_       598   3-23-92   3:10a
    CLIRES   H_        270   3-23-92   3:10a
    MAKEFILE _         943   3-23-92   3:10a
    SERVDATA C_       4695   3-23-92   3:10a
    SERVDDE  C_       5297   3-23-92   3:10a
    SERVER   C_       3707   3-23-92   3:10a
    SERVER   DE_       266   3-23-92   3:10a
    SERVER   H_        836   3-23-92   3:10a
    SERVER   RC_       472   3-23-92   3:10a
    SERVRES  H_         97   3-23-92   3:10a
           18 file(s)      39730 bytes

     Directory of A:\SAMPLES\DEFPROCS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DEFDLG   C_       3377   3-23-92   3:10a
    DEFWND   C_       5337   3-23-92   3:10a
            4 file(s)       8714 bytes

     Directory of A:\SAMPLES\DIBIT

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DIBIT    C_      10242   3-23-92   3:10a
    DIBIT    DE_       632   3-23-92   3:10a
    DIBIT    H_        648   3-23-92   3:10a
    DIBIT    RC_       547   3-23-92   3:10a
    MAKEFILE _         781   3-23-92   3:10a
            7 file(s)      12850 bytes

     Directory of A:\SAMPLES\DIBVIEW

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    ABOUT    C_        861   3-23-92   3:10a
    ABOUT    H_        180   3-23-92   3:10a
    CAPTURE  C_       4650   3-23-92   3:10a
    CAPTURE  H_        329   3-23-92   3:10a
    CHILD    C_      22196   3-23-92   3:10a
    CHILD    H_       1397   3-23-92   3:10a
    CLIPBRD  C_       4253   3-23-92   3:10a
    CLIPBRD  H_        421   3-23-92   3:10a
    DIB      C_       5078   3-23-92   3:10a
    DIB      H_        630   3-23-92   3:10a
    DIBDRAG  CU_       170   3-23-92   3:10a
    DIBVIEW  C_       1270   3-23-92   3:10a
    DIBVIEW  DE_       369   3-23-92   3:10a
    DIBVIEW  H_       1294   3-23-92   3:10a
    DIBVIEW  IC_       330   3-23-92   3:10a
    DIBVIEW  RC_      4522   3-23-92   3:10a
    ERRORS   C_       1135   3-23-92   3:10a
    ERRORS   H_        929   3-23-92   3:10a
    FILE     C_      12140   3-23-92   3:10a
    FILE     H_       1631   3-23-92   3:10a
    FRAME    C_       8169   3-23-92   3:10a
    FRAME    H_        205   3-23-92   3:10a
    INIT     C_       2269   3-23-92   3:10a
    INIT     H_        152   3-23-92   3:10a
    MAKEFILE _        1022   3-23-92   3:10a
    MYDIB    IC_       244   3-23-92   3:10a
    OPTIONS  C_       4206   3-23-92   3:10a
    OPTIONS  DL_       932   3-23-92   3:10a
    OPTIONS  H_       1165   3-23-92   3:10a
    PAINT    C_       3492   3-23-92   3:10a
    PAINT    H_        177   3-23-92   3:10a
    PALETTE  C_      11523   3-23-92   3:10a
    PALETTE  H_       1442   3-23-92   3:10a
    PRINT    C_      13019   3-23-92   3:10a
    PRINT    H_       1446   3-23-92   3:10a
    SELECT   CU_       175   3-23-92   3:10a
           38 file(s)     113423 bytes

     Directory of A:\SAMPLES\DRAGDROP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DRAGDROP C_       3385   3-23-92   3:10a
    DRAGDROP DE_       288   3-23-92   3:10a
    DRAGDROP H_        508   3-23-92   3:10a
    DRAGDROP IC_       238   3-23-92   3:10a
    DRAGDROP RC_       860   3-23-92   3:10a
    MAKEFILE _         787   3-23-92   3:10a
            8 file(s)       6066 bytes

     Directory of A:\SAMPLES\EDITCNTL

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    EDITCNTL C_       2637   3-23-92   3:10a
    EDITCNTL DE_       257   3-23-92   3:10a
    EDITCNTL H_        409   3-23-92   3:10a
    EDITCNTL RC_       746   3-23-92   3:10a
    MAKEFILE _         774   3-23-92   3:10a
            7 file(s)       4823 bytes

     Directory of A:\SAMPLES\EDITFILE

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    EDITFILE C_       7350   3-23-92   3:10a
    EDITFILE DE_       255   3-23-92   3:10a
    EDITFILE H_        583   3-23-92   3:10a
    EDITFILE RC_       742   3-23-92   3:10a
    MAKEFILE _         809   3-23-92   3:10a
            7 file(s)       9739 bytes

     Directory of A:\SAMPLES\EDITMENU

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    EDITMENU C_       2129   3-23-92   3:10a
    EDITMENU DE_       247   3-23-92   3:10a
    EDITMENU H_        374   3-23-92   3:10a
    EDITMENU RC_       744   3-23-92   3:10a
    MAKEFILE _         774   3-23-92   3:10a
            7 file(s)       4268 bytes

     Directory of A:\SAMPLES\EXPENSE

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CUSTDICT C_       1790   3-23-92   3:10a
    CUSTDICT DE_       261   3-23-92   3:10a
    CUSTDICT H_        432   3-23-92   3:10a
    DEPTNAME DI_       132   3-23-92   3:10a
    EXPENSE  C_      10203   3-23-92   3:10a
    EXPENSE  DE_       287   3-23-92   3:10a
    EXPENSE  H_       1327   3-23-92   3:10a
    EXPENSE  IC_       276   3-23-92   3:10a
    EXPENSE  RC_       608   3-23-92   3:10a
    EXPRES   H_        414   3-23-92   3:10a
    MAKEFILE _        1014   3-23-92   3:10a
    NAMES    DI_       139   3-23-92   3:10a
           14 file(s)      16883 bytes

     Directory of A:\SAMPLES\FILEOPEN

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    FILEOPEN C_       3474   3-23-92   3:10a
    FILEOPEN DE_       255   3-23-92   3:10a
    FILEOPEN H_        501   3-23-92   3:10a
    FILEOPEN RC_       742   3-23-92   3:10a
    MAKEFILE _         784   3-23-92   3:10a
            7 file(s)       5756 bytes

     Directory of A:\SAMPLES\FONTEST

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    FONT     IC_       627   3-23-92   3:10a
    FONTEST  C_       6875   3-23-92   3:10a
    FONTEST  DE_       293   3-23-92   3:10a
    FONTEST  DL_      1014   3-23-92   3:10a
    FONTEST  H_        434   3-23-92   3:10a
    FONTEST  RC_       469   3-23-92   3:10a
    LOG      H_        224   3-23-92   3:10a
    MAKEFILE _         807   3-23-92   3:10a
    PRINT    C_       1860   3-23-92   3:10a
    PRINT    DL_       303   3-23-92   3:10a
    PRINT    H_        149   3-23-92   3:10a
           13 file(s)      13055 bytes

     Directory of A:\SAMPLES\GDOSMEM

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    GDOSMEM  C_       6191   3-23-92   3:10a
    GDOSMEM  DE_       582   3-23-92   3:10a
    GDOSMEM  H_        353   3-23-92   3:10a
    GDOSMEM  RC_       428   3-23-92   3:10a
    GTSR     AS_      2220   3-23-92   3:10a
    GTSR     OB_       381   3-23-92   3:10a
    MAKEFILE _         816   3-23-92   3:10a
    READ     ME_        91   3-23-92   3:10a
           10 file(s)      11062 bytes

     Directory of A:\SAMPLES\GENERIC

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    GENERIC  C_       4168   3-23-92   3:10a
    GENERIC  DE_       617   3-23-92   3:10a
    GENERIC  H_        209   3-23-92   3:10a
    GENERIC  RC_       376   3-23-92   3:10a
    MAKEFILE _         770   3-23-92   3:10a
            7 file(s)       6140 bytes

     Directory of A:\SAMPLES\GWAPI

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    GWAPI    C_       3030   3-23-92   3:10a
    GWAPI    DE_       261   3-23-92   3:10a
    MAKEFILE _         759   3-23-92   3:10a
            5 file(s)       4050 bytes

     Directory of A:\SAMPLES\HANDLER

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    HANDLER  AS_      2509   3-23-92   3:10a
    HANDLER  DE_       193   3-23-92   3:10a
    HANDLER  H_        210   3-23-92   3:10a
    HANDLER  IN_        85   3-23-92   3:10a
    HANDLER  OB_      3960   3-23-92   3:10a
    HANDTEST C_       2096   3-23-92   3:10a
    HANDTEST DE_       284   3-23-92   3:10a
    HANDTEST H_        227   3-23-92   3:10a
    HANDTEST RC_       374   3-23-92   3:10a
    MAKEFILE _         968   3-23-92   3:10a
           12 file(s)      10906 bytes

     Directory of A:\SAMPLES\HELPHOOK

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    HELPHOOK C_       5579   3-23-92   3:10a
    HELPHOOK DE_       626   3-23-92   3:10a
    HELPHOOK DL_      1817   3-23-92   3:10a
    HELPHOOK H_        454   3-23-92   3:10a
    HELPHOOK IC_       452   3-23-92   3:10a
    HELPHOOK RC_       302   3-23-92   3:10a
    MAKEFILE _         776   3-23-92   3:10a
            9 file(s)      10006 bytes

     Directory of A:\SAMPLES\HFORM

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    HFORM    C_       7744   3-23-92   3:10a
    HFORM    DE_       284   3-23-92   3:10a
    HFORM    H_        727   3-23-92   3:10a
    HFORM    IC_       279   3-23-92   3:10a
    HFORM    RC_       602   3-23-92   3:10a
    HFRES    H_        503   3-23-92   3:10a
    MAKEFILE _         776   3-23-92   3:10a
            9 file(s)      10915 bytes

     Directory of A:\SAMPLES\HOOKS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DLLSTUFF C_        634   3-23-92   3:10a
    HOOKS    C_       3665   3-23-92   3:10a
    HOOKS    DE_       273   3-23-92   3:10a
    HOOKS    H_        477   3-23-92   3:10a
    HOOKS    IC_       333   3-23-92   3:10a
    HOOKS    RC_       745   3-23-92   3:10a
    HOOKSDLL C_       7733   3-23-92   3:10a
    HOOKSDLL DE_       359   3-23-92   3:10a
    HOOKSDLL RC_        41   3-23-92   3:10a
    MAKEFILE _        1035   3-23-92   3:10a
    MESSAGES RC_      1642   3-23-92   3:10a
           13 file(s)      16937 bytes

     Directory of A:\SAMPLES\ICON

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    ICON     C_       1752   3-23-92   3:10a
    ICON     DE_       252   3-23-92   3:10a
    ICON     H_        209   3-23-92   3:10a
    ICON     RC_       418   3-23-92   3:10a
    MAKEFILE _         779   3-23-92   3:10a
    MYICON   IC_       436   3-23-92   3:10a
            8 file(s)       3846 bytes

     Directory of A:\SAMPLES\INPUT

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    INPUT    C_       3928   3-23-92   3:10a
    INPUT    DE_       242   3-23-92   3:10a
    INPUT    H_        209   3-23-92   3:10a
    INPUT    RC_       368   3-23-92   3:10a
    MAKEFILE _         769   3-23-92   3:10a
            7 file(s)       5516 bytes

     Directory of A:\SAMPLES\LISTHORZ

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    LISTHAPI H_        287   3-23-92   3:10a
    LISTHORZ C_       2407   3-23-92   3:10a
    LISTHORZ DE_       228   3-23-92   3:10a
    LISTHORZ DL_       488   3-23-92   3:10a
    LISTHORZ H_        338   3-23-92   3:10a
    LISTHORZ IC_       695   3-23-92   3:10a
    LISTHORZ RC_       621   3-23-92   3:10a
    LISTHSCR C_       5463   3-23-92   3:10a
    LISTHSCR DE_       352   3-23-92   3:10a
    LISTHSCR H_        319   3-23-92   3:10a
    LISTQCW  DE_       304   3-23-92   3:10a
    MAKEFILE _        1027   3-23-92   3:10a
    WEP      C_        730   3-23-92   3:10a
           15 file(s)      13259 bytes

     Directory of A:\SAMPLES\LOWPASS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    LOWPASS  C_       4755   3-23-92   3:10a
    LOWPASS  DE_       248   3-23-92   3:10a
    LOWPASS  H_        439   3-23-92   3:10a
    LOWPASS  IC_       276   3-23-92   3:10a
    LOWPASS  RC_       825   3-23-92   3:10a
    MAKEFILE _         797   3-23-92   3:10a
            8 file(s)       7340 bytes

     Directory of A:\SAMPLES\MACROHLP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    ABC      RT_      5700   3-23-92   3:10a
    DEFGHI   RT_      5853   3-23-92   3:10a
    JNPRS    RT_      5317   3-23-92   3:10a
    MACROHLP HP_       867   3-23-92   3:10a
    MACROHLP RT_      4184   3-23-92   3:10a
    WINDOWS  SH_       342   3-23-92   3:10a
            8 file(s)      22263 bytes

     Directory of A:\SAMPLES\MAKEAPP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    APP      C_       3274   3-23-92   3:10a
    APP      H_        803   3-23-92   3:10a
    CLIENT   C_       2058   3-23-92   3:10a
    CLIENT   H_        835   3-23-92   3:10a
    DLG      C_       1687   3-23-92   3:10a
    DLG      H_        403   3-23-92   3:10a
    DLGDEFS  H_        393   3-23-92   3:10a
    FRAME    C_       2669   3-23-92   3:10a
    FRAME    H_        997   3-23-92   3:10a
    MAKEAPP  BA_       687   3-23-92   3:10a
    MAKEAPP  DE_       194   3-23-92   3:10a
    MAKEAPP  DL_       792   3-23-92   3:10a
    MAKEAPP  H_        170   3-23-92   3:10a
    MAKEAPP  IC_       345   3-23-92   3:10a
    MAKEAPP  RC_       794   3-23-92   3:10a
    MAKEAPP  TX_      3226   3-23-92   3:10a
    MAKEAPP  VE_       815   3-23-92   3:10a
    MAKEAPP2 BA_       109   3-23-92   3:10a
    MAKEFILE _         852   3-23-92   3:10a
    MAKEWC   BA_       554   3-23-92   3:10a
    MAKEWC   C_       1286   3-23-92   3:10a
    MAKEWC   H_        719   3-23-92   3:10a
    MAKEWC2  BA_       186   3-23-92   3:10a
    MENU     H_        496   3-23-92   3:10a
    REP      EX_     33335   3-23-92   3:10a
           27 file(s)      57679 bytes

     Directory of A:\SAMPLES\MCITEST

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DLGOPEN  C_       3570   3-23-92   3:10a
    DLGOPEN  DL_       724   3-23-92   3:10a
    DLGOPEN  H_        791   3-23-92   3:10a
    EDIT     C_       2610   3-23-92   3:10a
    EDIT     H_        201   3-23-92   3:10a
    GMEM     H_       1009   3-23-92   3:10a
    MAKEFILE _         835   3-23-92   3:10a
    MCIMAIN  DL_      1474   3-23-92   3:10a
    MCITEST  C_       9107   3-23-92   3:10a
    MCITEST  DE_       280   3-23-92   3:10a
    MCITEST  H_        850   3-23-92   3:10a
    MCITEST  IC_       274   3-23-92   3:10a
    MCITEST  RC_       467   3-23-92   3:10a
           15 file(s)      22192 bytes

     Directory of A:\SAMPLES\MENU

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CHECKOFF BM_       121   3-23-92   3:10a
    CHECKON  BM_       197   3-23-92   3:10a
    MAKEFILE _         761   3-23-92   3:10a
    MENU     C_       7441   3-23-92   3:10a
    MENU     DE_       216   3-23-92   3:10a
    MENU     DL_       263   3-23-92   3:10a
    MENU     H_        699   3-23-92   3:10a
    MENU     IC_       292   3-23-92   3:10a
    MENU     RC_       967   3-23-92   3:10a
           11 file(s)      10957 bytes

     Directory of A:\SAMPLES\MIDIMON

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    ABOUT    C_        712   3-23-92   3:10a
    ABOUT    H_        171   3-23-92   3:10a
    CALLBACK C_       1940   3-23-92   3:10a
    CALLBACK DE_       272   3-23-92   3:10a
    CALLBACK H_        187   3-23-92   3:10a
    CIRCBUF  C_       1687   3-23-92   3:10a
    CIRCBUF  H_        507   3-23-92   3:10a
    DISPLAY  C_       3132   3-23-92   3:10a
    DISPLAY  H_        864   3-23-92   3:10a
    FILTER   C_       1129   3-23-92   3:10a
    FILTER   H_        390   3-23-92   3:10a
    INSTDATA C_        924   3-23-92   3:10a
    INSTDATA H_        380   3-23-92   3:10a
    MAKEFILE _        1111   3-23-92   3:10a
    MIDIMON  C_      10475   3-23-92   3:10a
    MIDIMON  DE_       266   3-23-92   3:10a
    MIDIMON  H_       1308   3-23-92   3:10a
    MIDIMON  IC_       330   3-23-92   3:10a
    MIDIMON  RC_      1329   3-23-92   3:10a
    PREFER   C_        862   3-23-92   3:10a
    PREFER   H_        470   3-23-92   3:10a
           23 file(s)      28446 bytes

     Directory of A:\SAMPLES\MULTIPAD

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         845   3-23-92   3:10a
    MP300    IC_       252   3-23-92   3:10a
    MPFILE   C_       4314   3-23-92   3:10a
    MPFIND   C_       2953   3-23-92   3:10a
    MPINIT   C_       1921   3-23-92   3:10a
    MULTIPAD C_       9732   3-23-92   3:10a
    MULTIPAD DE_       354   3-23-92   3:10a
    MULTIPAD DL_       934   3-23-92   3:10a
    MULTIPAD H_       2200   3-23-92   3:10a
    MULTIPAD RC_      1534   3-23-92   3:10a
    NOTE300  IC_       241   3-23-92   3:10a
           13 file(s)      25280 bytes

     Directory of A:\SAMPLES\MUSCROLL

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CTLDLG   C_       4475   3-23-92   3:10a
    CTLSTYLE DL_       689   3-23-92   3:10a
    INIT     C_       4205   3-23-92   3:10a
    MAKEFILE _        1103   3-23-92   3:10a
    MSAPI    C_       3363   3-23-92   3:10a
    MUSCRDLL H_       2328   3-23-92   3:10a
    MUSCROLL C_       4794   3-23-92   3:10a
    MUSCROLL DE_       609   3-23-92   3:10a
    MUSCROLL H_        917   3-23-92   3:10a
    MUSCROLL RC_       452   3-23-92   3:10a
    MUSCROLL TX_      4106   3-23-92   3:10a
    MUSTEST  C_       3485   3-23-92   3:10a
    MUSTEST  DE_       235   3-23-92   3:10a
    MUSTEST  H_        541   3-23-92   3:10a
    MUSTEST  IC_       240   3-23-92   3:10a
    MUSTEST  RC_       150   3-23-92   3:10a
    PAINT    C_       3950   3-23-92   3:10a
    WEP      C_        492   3-23-92   3:10a
           20 file(s)      36134 bytes

     Directory of A:\SAMPLES\OWNERB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         785   3-23-92   3:10a
    OWNERB   C_       2212   3-23-92   3:10a
    OWNERB   DE_       254   3-23-92   3:10a
    OWNERB   H_        297   3-23-92   3:10a
    OWNERB   IC_       202   3-23-92   3:10a
    OWNERB   RC_       120   3-23-92   3:10a
    PLAY     BM_       167   3-23-92   3:10a
    PLAYS    BM_       173   3-23-92   3:10a
           10 file(s)       4210 bytes

     Directory of A:\SAMPLES\PALETTE

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    INIT     C_        960   3-23-92   3:10a
    MAKEFILE _         817   3-23-92   3:10a
    PALETTE  CU_       178   3-23-92   3:10a
    PALETTE  C_       3335   3-23-92   3:10a
    PALETTE  DE_       270   3-23-92   3:10a
    PALETTE  H_        477   3-23-92   3:10a
    PALETTE  IC_       235   3-23-92   3:10a
    PALETTE  RC_       151   3-23-92   3:10a
           10 file(s)       6423 bytes

     Directory of A:\SAMPLES\PENCNTL

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BEDITDE  DL_      6072   3-23-92   3:10a
    HEDITDE  DL_      6173   3-23-92   3:10a
            4 file(s)      12245 bytes

     Directory of A:\SAMPLES\PENPAD

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         808   3-23-92   3:10a
    NOTE300  IC_       241   3-23-92   3:10a
    PENPAD   C_      13005   3-23-92   3:10a
    PENPAD   DE_       414   3-23-92   3:10a
    PENPAD   DL_      1647   3-23-92   3:10a
    PENPAD   H_       2268   3-23-92   3:10a
    PENPAD   RC_      1528   3-23-92   3:10a
    PP300    IC_       292   3-23-92   3:10a
    PPFILE   C_       5659   3-23-92   3:10a
    PPFIND   C_       2974   3-23-92   3:10a
    PPINIT   C_       1709   3-23-92   3:10a
    PPOPEN   C_       3153   3-23-92   3:10a
    PPPRINT  C_       5084   3-23-92   3:10a
           15 file(s)      38782 bytes

     Directory of A:\SAMPLES\REVERSE

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         796   3-23-92   3:10a
    REVERSE  C_       6426   3-23-92   3:10a
    REVERSE  DE_       207   3-23-92   3:10a
    REVERSE  H_        581   3-23-92   3:10a
    REVERSE  IC_       315   3-23-92   3:10a
    REVERSE  RC_       548   3-23-92   3:10a
            8 file(s)       8873 bytes

     Directory of A:\SAMPLES\ROTARY

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         777   3-23-92   3:10a
    ROTARY   BM_       670   3-23-92   3:10a
    ROTARY   C_       6244   3-23-92   3:10a
    ROTARY   DE_       264   3-23-92   3:10a
    ROTARY   H_        804   3-23-92   3:10a
    ROTARY   IC_       310   3-23-92   3:10a
    ROTARY   RC_       104   3-23-92   3:10a
            9 file(s)       9173 bytes

     Directory of A:\SAMPLES\SHOWGDI

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DC       C_       3388   3-23-92   3:10a
    DC       H_        780   3-23-92   3:10a
    DIALOGS  C_      13138   3-23-92   3:10a
    DIALOGS  H_        703   3-23-92   3:10a
    DIB      C_      10331   3-23-92   3:10a
    DIB      H_       1455   3-23-92   3:10a
    DLG      H_       1893   3-23-92   3:10a
    DRAW     C_       2093   3-23-92   3:10a
    DRAW     H_        861   3-23-92   3:10a
    MAIN     C_       2168   3-23-92   3:10a
    MAIN     H_        514   3-23-92   3:10a
    MAKEFILE _         869   3-23-92   3:10a
    MENU     H_       1043   3-23-92   3:10a
    MENUS    RC_      1558   3-23-92   3:10a
    SHOWGDI  DE_       475   3-23-92   3:10a
    SHOWGDI  DL_     16997   3-23-92   3:10a
    SHOWGDI  IC_       320   3-23-92   3:10a
    SHOWGDI  RC_       112   3-23-92   3:10a
    UTIL     C_        607   3-23-92   3:10a
    UTIL     H_       1156   3-23-92   3:10a
    VIEW     C_       4202   3-23-92   3:10a
    VIEW     H_        556   3-23-92   3:10a
           24 file(s)      65219 bytes

     Directory of A:\SAMPLES\SNOOP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         767   3-23-92   3:10a
    SNOOP    C_       6733   3-23-92   3:10a
    SNOOP    DE_       253   3-23-92   3:10a
    SNOOP    H_        583   3-23-92   3:10a
    SNOOP    IC_       378   3-23-92   3:10a
    SNOOP    RC_       149   3-23-92   3:10a
            8 file(s)       8863 bytes

     Directory of A:\SAMPLES\SREC

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAIN     H_        467   3-23-92   3:10a
    MAKEFILE _         997   3-23-92   3:10a
    PENAPP   C_      11024   3-23-92   3:10a
    PENAPP   DE_       439   3-23-92   3:10a
    PENAPP   H_       1336   3-23-92   3:10a
    PENAPP   IC_       339   3-23-92   3:10a
    PENAPP   RC_       337   3-23-92   3:10a
    PENRES   H_        244   3-23-92   3:10a
    SREC     C_       6043   3-23-92   3:10a
    SREC     DE_       326   3-23-92   3:10a
           12 file(s)      21552 bytes

     Directory of A:\SAMPLES\TDOSMEM

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         822   3-23-92   3:10a
    READ     ME_        91   3-23-92   3:10a
    TDOSMEM  C_       6350   3-23-92   3:10a
    TDOSMEM  DE_       582   3-23-92   3:10a
    TDOSMEM  H_        398   3-23-92   3:10a
    TDOSMEM  RC_       400   3-23-92   3:10a
    TTSR     AS_      2133   3-23-92   3:10a
    TTSR     OB_       373   3-23-92   3:10a
           10 file(s)      11149 bytes

     Directory of A:\SAMPLES\TIMERS

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         782   3-23-92   3:10a
    TIMERS   C_       3562   3-23-92   3:10a
    TIMERS   DE_       270   3-23-92   3:10a
    TIMERS   H_        189   3-23-92   3:10a
    TIMERS   RC_       341   3-23-92   3:10a
            7 file(s)       5144 bytes

     Directory of A:\SAMPLES\TOOLHELP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    THASM    AS_      2450   3-23-92   3:10a
    THASM    OB_       463   3-23-92   3:10a
    THSAMPLE C_      15432   3-23-92   3:10a
    THSAMPLE DE_       248   3-23-92   3:10a
    THSAMPLE H_        595   3-23-92   3:10a
    THSAMPLE IC_       267   3-23-92   3:10a
    THSAMPLE RC_      1132   3-23-92   3:10a
            9 file(s)      20587 bytes

     Directory of A:\SAMPLES\TTY

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         800   3-23-92   3:10a
    RESOURCE H_        767   3-23-92   3:10a
    TTY      BM_       420   3-23-92   3:10a
    TTY      C_      18336   3-23-92   3:10a
    TTY      DE_       290   3-23-92   3:10a
    TTY      H_       2591   3-23-92   3:10a
    TTY      IC_       267   3-23-92   3:10a
    TTY      RC_      2530   3-23-92   3:10a
    VERSION  H_         59   3-23-92   3:10a
           11 file(s)      26060 bytes

     Directory of A:\SAMPLES\VER

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    CAN_ADF  RC_      2080   3-23-92   3:10a
    DM309    RC_      2070   3-23-92   3:10a
    FINSTALL RC_      2300   3-23-92   3:10a
    GEN      RC_      2069   3-23-92   3:10a
    HPPCL5A  RC_      2268   3-23-92   3:10a
    IBM4019  RC_      2067   3-23-92   3:10a
    LBPII    RC_      2071   3-23-92   3:10a
    LBPIII   RC_      2073   3-23-92   3:10a
    NWPOPUP  RC_      2245   3-23-92   3:10a
    PG306    RC_      2068   3-23-92   3:10a
    RECORDER RC_      2056   3-23-92   3:10a
    SF4019   RC_      2060   3-23-92   3:10a
    SFINST   RC_      2058   3-23-92   3:10a
    TERMINAL RC_      2053   3-23-92   3:10a
           16 file(s)      29538 bytes

     Directory of A:\SAMPLES\VERSTAMP

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         797   3-23-92   3:10a
    VERSTAMP C_      13906   3-23-92   3:10a
    VERSTAMP DE_       687   3-23-92   3:10a
    VERSTAMP H_       1689   3-23-92   3:10a
    VERSTAMP IC_       361   3-23-92   3:10a
    VERSTAMP RC_      2317   3-23-92   3:10a
            8 file(s)      19757 bytes

     Directory of A:\SAMPLES\WINMEM32

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    WINMEM32 TX_      6576   3-23-92   3:10a
            3 file(s)       6576 bytes

     Directory of A:\SAMPLES\WMFDCODE

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    BALLON   CL_      8549   3-23-92   3:10a
    BIRD     WM_     12982   3-23-92   3:10a
    CMNDLG   C_       2639   3-23-92   3:10a
    DLGPROC  C_       8304   3-23-92   3:10a
    MAKEFILE _         817   3-23-92   3:10a
    WMF      IC_       386   3-23-92   3:10a
    WMFDCODE C_       5881   3-23-92   3:10a
    WMFDCODE DE_       787   3-23-92   3:10a
    WMFDCODE H_       4556   3-23-92   3:10a
    WMFDCODE RC_      2710   3-23-92   3:10a
    WMFMETA  C_      12537   3-23-92   3:10a
    WMFPRINT C_       3064   3-23-92   3:10a
           14 file(s)      63212 bytes

     Directory of A:\SAMPLES\XTENSION

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         793   3-23-92   3:10a
    XTENSION C_       7389   3-23-92   3:10a
    XTENSION DE_       295   3-23-92   3:10a
    XTENSION H_        897   3-23-92   3:10a
    XTENSION IC_       487   3-23-92   3:10a
    XTENSION RC_      1491   3-23-92   3:10a
            8 file(s)      11352 bytes

    Total files listed:
          702 file(s)    1028025 bytes
                          256000 bytes free

![Windows SDK 3.10 (Disk 5)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK05.jpg)

### Directory of Windows SDK 3.10 (Disk 6)

     Volume in drive A is win31SDKD6
     Directory of A:\

    SAMPLES      <DIR>       3-23-92   3:10a
    WIN31QH      <DIR>       3-23-92   3:10a
            2 file(s)          0 bytes

     Directory of A:\SAMPLES

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MULTIPAD     <DIR>       3-23-92   3:10a
    OUTPUT       <DIR>       3-23-92   3:10a
    OWNCOMBO     <DIR>       3-23-92   3:10a
    PRNTFILE     <DIR>       3-23-92   3:10a
    SELECT       <DIR>       3-23-92   3:10a
    SHOWDIB      <DIR>       3-23-92   3:10a
            8 file(s)          0 bytes

     Directory of A:\SAMPLES\MULTIPAD

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MPPRINT  C_       4331   3-23-92   3:10a
            3 file(s)       4331 bytes

     Directory of A:\SAMPLES\OUTPUT

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         772   3-23-92   3:10a
    OUTPUT   C_       4725   3-23-92   3:10a
    OUTPUT   DE_       255   3-23-92   3:10a
    OUTPUT   H_        209   3-23-92   3:10a
    OUTPUT   RC_       374   3-23-92   3:10a
            7 file(s)       6335 bytes

     Directory of A:\SAMPLES\OWNCOMBO

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         777   3-23-92   3:10a
    OWNCOMBO C_       8167   3-23-92   3:10a
    OWNCOMBO DE_       259   3-23-92   3:10a
    OWNCOMBO DL_      1440   3-23-92   3:10a
    OWNCOMBO H_        706   3-23-92   3:10a
    OWNCOMBO IC_       246   3-23-92   3:10a
    OWNCOMBO RC_       456   3-23-92   3:10a
    README   TX_       972   3-23-92   3:10a
           10 file(s)      13023 bytes

     Directory of A:\SAMPLES\PRNTFILE

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MAKEFILE _         800   3-23-92   3:10a
    PRNTFILE C_      10361   3-23-92   3:10a
    PRNTFILE DE_       360   3-23-92   3:10a
    PRNTFILE H_        663   3-23-92   3:10a
    PRNTFILE RC_       925   3-23-92   3:10a
            7 file(s)      13109 bytes

     Directory of A:\SAMPLES\SELECT

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DEMO     C_       2943   3-23-92   3:10a
    DEMO     DE_       248   3-23-92   3:10a
    DEMO     H_        224   3-23-92   3:10a
    DEMO     RC_       450   3-23-92   3:10a
    MAKEFILE _         992   3-23-92   3:10a
    SELECT   C_       2093   3-23-92   3:10a
    SELECT   DE_       220   3-23-92   3:10a
    SELECT   H_        495   3-23-92   3:10a
           10 file(s)       7665 bytes

     Directory of A:\SAMPLES\SHOWDIB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    DIB      C_       9352   3-23-92   3:10a
    DLGOPEN  C_       5947   3-23-92   3:10a
    DLGOPENA AS_      1262   3-23-92   3:10a
    DLGOPENA OB_       219   3-23-92   3:10a
    DRAWDIB  C_      11426   3-23-92   3:10a
    MAKEFILE _         839   3-23-92   3:10a
    PRINT    C_       2517   3-23-92   3:10a
    SHOWDIB  C_      13205   3-23-92   3:10a
    SHOWDIB  DE_       289   3-23-92   3:10a
    SHOWDIB  DL_      1556   3-23-92   3:10a
    SHOWDIB  H_       3968   3-23-92   3:10a
    SHOWDIB  IC_       302   3-23-92   3:10a
    SHOWDIB  RC_       603   3-23-92   3:10a
           15 file(s)      51485 bytes

     Directory of A:\WIN31QH

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    API31    HL_   1104411   3-23-92   3:10a
    MCISTRQH HL_     77812   3-23-92   3:10a
    PENAPIQH HL_    133396   3-23-92   3:10a
            5 file(s)    1315619 bytes

    Total files listed:
           67 file(s)    1411567 bytes
                           32256 bytes free

![Windows SDK 3.10 (Disk 6)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK06.jpg)

### Directory of Windows SDK 3.10 (Disk 7)

     Volume in drive A is win31SDKD7
     Directory of A:\

    WIN31QH      <DIR>       3-23-92   3:10a
            1 file(s)          0 bytes

     Directory of A:\WIN31QH

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MSGS31   HL_    523612   3-23-92   3:10a
    OVER31   HL_    757905   3-23-92   3:10a
    WINHELP  HL_     23822   3-23-92   3:10a
            5 file(s)    1305339 bytes

    Total files listed:
            6 file(s)    1305339 bytes
                          151040 bytes free

![Windows SDK 3.10 (Disk 7)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK07.jpg)

### Directory of Windows SDK 3.10 (Disk 8)

     Volume in drive A is win31SDKD8
     Directory of A:\

    WIN31QH      <DIR>       3-23-92   3:10a
    WIN31WH      <DIR>       3-23-92   3:10a
            2 file(s)          0 bytes

     Directory of A:\WIN31QH

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    WIN31MQH HL_    202873   3-23-92   3:10a
            3 file(s)     202873 bytes

     Directory of A:\WIN31WH

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    WIN31WH  1H_   1144227   3-23-92   3:10a
            3 file(s)    1144227 bytes

    Total files listed:
            8 file(s)    1347100 bytes
                          109056 bytes free

![Windows SDK 3.10 (Disk 8)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK08.jpg)

### Directory of Windows SDK 3.10 (Disk 9)

     Volume in drive A is win31SDKD9
     Directory of A:\

    WIN31WH      <DIR>       3-23-92   3:10a
    WLIB         <DIR>       3-23-92   3:10a
            2 file(s)          0 bytes

     Directory of A:\WIN31WH

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    SAMPLES  HL_     51502   3-23-92   3:10a
    WIN31WH  0H_   1098700   3-23-92   3:10a
            4 file(s)    1150202 bytes

     Directory of A:\WLIB

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    TIPS     HL_    176046   3-23-92   3:10a
            3 file(s)     176046 bytes

    Total files listed:
            9 file(s)    1326248 bytes
                          130048 bytes free

![Windows SDK 3.10 (Disk 9)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK09.jpg)

### Directory of Windows SDK 3.10 (Disk 10)

     Volume in drive A is win31SDKD10
     Directory of A:\

    WIN31WH      <DIR>       3-23-92   3:10a
            1 file(s)          0 bytes

     Directory of A:\WIN31WH

    .            <DIR>       3-23-92   3:10a
    ..           <DIR>       3-23-92   3:10a
    MCISTRWH HL_    119633   3-23-92   3:10a
    PENAPIWH HL_    191010   3-23-92   3:10a
    WIN31MWH HL_    263544   3-23-92   3:10a
    WIN31WH  2H_    843422   3-23-92   3:10a
            6 file(s)    1417609 bytes

    Total files listed:
            7 file(s)    1417609 bytes
                           38400 bytes free

![Windows SDK 3.10 (Disk 10)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK10.jpg)

### Directory of Windows SDK 3.10 (Disk 11)

     Volume in drive A is C6RUNLIB
     Directory of A:\

    INSTALL  BAT      1310   3-09-92  12:42p
    INCLUDE      <DIR>       3-18-92   1:53p
    LIB          <DIR>       3-18-92   1:54p
            3 file(s)       1310 bytes

     Directory of A:\INCLUDE

    .            <DIR>       3-18-92   1:53p
    ..           <DIR>       3-18-92   1:53p
    ASSERT   H         594  12-05-90   3:10a
    BIOS     H        4577  12-05-90   3:10a
    CONIO    H        1043  12-05-90   3:10a
    CTYPE    H        2979  12-05-90   3:10a
    DIRECT   H         892  12-05-90   3:10a
    DOS      H        5550  12-05-90   3:10a
    ERRNO    H        1428  12-05-90   3:10a
    FCNTL    H        1126  12-05-90   3:10a
    FLOAT    H        4911  12-05-90   3:10a
    IO       H        1512  12-05-90   3:10a
    LIMITS   H        1326  12-05-90   3:10a
    LOCALE   H        1519  12-05-90   3:10a
    MALLOC   H        4112  12-05-90   3:10a
    MATH     H        7881  12-05-90   3:10a
    MEMORY   H        1628  12-05-90   3:10a
    PROCESS  H        2881  12-05-90   3:10a
    SEARCH   H        1159  12-05-90   3:10a
    SETJMP   H         822  12-05-90   3:10a
    SHARE    H         450  12-05-90   3:10a
    SIGNAL   H        2019  12-05-90   3:10a
    STDARG   H         894  12-05-90   3:10a
    STDDEF   H        1254  12-05-90   3:10a
    STDIO    H        6432  12-05-90   3:10a
    STDLIB   H        6641  12-05-90   3:10a
    STRING   H        4975  12-05-90   3:10a
    TIME     H        3119  12-05-90   3:10a
    VARARGS  H         922  12-05-90   3:10a
    SYS          <DIR>       3-18-92   1:54p
           30 file(s)      72646 bytes

     Directory of A:\INCLUDE\SYS

    .            <DIR>       3-18-92   1:54p
    ..           <DIR>       3-18-92   1:54p
    LOCKING  H         468  12-05-90   3:10a
    STAT     H        1330  12-05-90   3:10a
    TIMEB    H         827  12-05-90   3:10a
    TYPES    H         734  12-05-90   3:10a
    UTIME    H         968  12-05-90   3:10a
            7 file(s)       4327 bytes

     Directory of A:\LIB

    .            <DIR>       3-18-92   1:54p
    ..           <DIR>       3-18-92   1:54p
    CDLLCW   LIB     93181  12-05-90   3:10a
    CLIBCW   LIB    104589  12-05-90   3:10a
    CLIBFPW  LIB     73637  12-05-90   3:10a
    CNOCRT   LIB      2071  12-05-90   3:10a
    CNOCRTD  LIB      1559  12-05-90   3:10a
    LDLLCW   LIB     95229  12-05-90   3:10a
    LIBH     LIB     21033  12-05-90   3:10a
    LLIBCW   LIB    106125  12-05-90   3:10a
    LLIBFPW  LIB     77221  12-05-90   3:10a
    LNOCRT   LIB      2071  12-05-90   3:10a
    LNOCRTD  LIB      1559  12-05-90   3:10a
    MDLLCW   LIB     90613  12-05-90   3:10a
    MLIBCW   LIB    100993  12-05-90   3:10a
    MLIBFPW  LIB     75173  12-05-90   3:10a
    MNOCRT   LIB      2071  12-05-90   3:10a
    MNOCRTD  LIB      1559  12-05-90   3:10a
    SDLLCW   LIB     89077  12-05-90   3:10a
    SLIBCW   LIB     98945  12-05-90   3:10a
    SLIBFPW  LIB     72613  12-05-90   3:10a
    SNOCRT   LIB      2071  12-05-90   3:10a
    SNOCRTD  LIB      1559  12-05-90   3:10a
           23 file(s)    1112949 bytes

    Total files listed:
           63 file(s)    1191232 bytes
                          250880 bytes free

![Windows SDK 3.10 (Disk 11)]({{ site.software.diskettes.server }}/pcx86/sdk/windows/3.10/WIN31SDK-DISK11.jpg)
