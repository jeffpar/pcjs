---
layout: page
title: "MS Windows 3.0 DDK Printer &amp; Font Kit"
permalink: /documents/books/mspl13/win/w3ddkprn/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  Windows  Device Development Kit - Printers and Fonts Kit








────────────────────────────────────────────────────────────────────────────
 Microsoft (R) Windows (tm) Device Development Kit - Printers and Fonts Kit

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
Microsoft logo, and XENIX are registered trademarks and Windows is
a trademark of Microsoft Corporation.

Aldus and PageMaker are registered trademarks of Aldus
Corporation.

Apple, LaserWriter, and Macintosh are registered trademarks
of Apple Computer, Inc.

Hewlett-Packard, HP, LaserJet, and PCL are registered
trademarks of Hewlett-Packard Company.

IBM and PS/2 are registered trademarks of International
Business Machines Corporation.

Micrografx is a trademark of Micrografx, Inc.

PostScript is a registered trademark and Adobe and Adobe
Illustrator are trademarks of Adobe Systems, Inc.

The Symbol fonts provided with Windows 3.0 are based
on the CG Times font, a product of AGFA Compugraphic Division of Agfa
Corporation.

Document No. SY0329c-300-R00-1089






Table of Contents
────────────────────────────────────────────────────────────────────────────



Introduction
     Background
     Windows Font Requirements
            Bitmap Screen Fonts
            Downloadable Fonts
            Printer Font Metrics Files


PART I  Fonts
────────────────────────────────────────────────────────────────────────────


Chapter 1  Screen Fonts for Windows

     1.1   The Aspect-Ratio Classes of Display Devices
     1.2   Translating Point Sizes into Line Sizes
     1.3   Choosing the Correct Range of Line Sizes
            1.3.1    Greeking
            1.3.2    Proof Versus Draft (Doubling and Tripling) Quality
            1.3.3    Vector Font Substitution
            1.3.4    Down-sizing to Match Widths
     1.4   Recommended Screen Font Sizes

Chapter 2  Printer Font Metrics (PFM) Files

     2.1   Listing .PFM Files in WIN.INI
     2.2   Printer Font Install Directory File
     2.3   .PFM File Organization
            2.3.1    PFM Header and Width Table
            2.3.2    PFMEXTENSION Data Structure
            2.3.3    EXTTEXTMETRIC Data Structure
            2.3.4    Font Scaling: etmMasterHeight and etmMasterUnits
            2.3.5    KERNPAIR Data Structure
            2.3.6    KERNTRACK Data Structure
     2.4   Printer Cartridge Metrics (PCM) Files
            2.4.1    WIN.INI Additions
            2.4.2    Cartridge Installation
            2.4.3    FINSTALL.DIR Syntax

Chapter 3  The PFM Editor

     3.1   The Main Window
     3.2   The File Menu
     3.3   The Metrics Menu
            3.3.1    The Basic Metrics Dialog Box
            3.3.2    The Extended Metrics Dialog Box
            3.3.3    The Effects Metrics Dialog Box
     3.4   The Tables Menu
            3.4.1    The Width Table Dialog Box
            3.4.2    The Pair Kerning Table Dialog Box
            3.4.3    The Track Kerning Table Dialog Box
     3.5   The Driver Menu
     3.6   Creating .PCM Files
     3.7   The PFM Editor Error Messages

Chapter 4  .PFM Files for PostScript Printers

     4.1   Format of the PostScript .PFM File
     4.2   EXTTEXTMETRIC Data Structure
     4.3   Driver-Specific Data Structure

Chapter 5  .PFM Files for PCL Printers

     5.1   Format of the PCL .PFM File
     5.2   EXTTEXTMETRIC Data Structure
     5.3   Driver-Specific Data Structure
     5.4   Kerning Tables
     5.5   Scalable PCL Fonts


PART II  The PCL Driver
────────────────────────────────────────────────────────────────────────────


Chapter 6  Overview of the PCL Driver


Chapter 7  WIN.INI Flags

     7.1   Summary of Flags
     7.2   Details on Flags
            7.2.1    Cartindexn
            7.2.2    Cartridgen
            7.2.3    Copies
            7.2.4    Duplex
            7.2.5    <Filename>
            7.2.6    FontSummary
            7.2.7    Fsvers
            7.2.8    MaxFontSummary
            7.2.9    Numcart
            7.2.10   Options
            7.2.11   Orient
            7.2.12   Paper
            7.2.13   Prtcaps
            7.2.14   Prtindex
            7.2.15   Prtresfac
            7.2.16   Sfdir
            7.2.17   Sfdlbat
            7.2.18   Sfdlstyle
            7.2.19   SoftFontn
            7.2.20   SoftFonts
            7.2.21   Tray
            7.2.22   White_text

Chapter 8  Permanent Soft Fonts

     8.1   Setting Up Fonts for Download
     8.2   Tracking Permanent Fonts in the WIN.INI File

Chapter 9  FINSTALL.DIR

     9.1   Logical Drive Definition
     9.2   Font Family Definition
     9.3   Installing Without the FINSTALL.DIR File
     9.4   Sample FINSTALL.DIR File

Chapter 10  Developers' Tools

     10.1  Building an FINSTALL.DIR File
     10.2  Adding Fonts

Chapter 11  .PFM Generator

     11.1  Installer PFM Versus Vendor-Supplied PFM
     11.2  File Naming Scheme
     11.3  Regenerating .PFM Files
     11.4  PFM Data From Font Data
            11.4.1    PFM Header
            11.4.2    EXTTEXTMETRIC Data Structure
            11.4.3    Device-Specific Data Structure

Chapter 12  Installer Scenarios

     12.1  Selecting Printer Fonts
     12.2  Selecting Screen Fonts
     12.3  Recovering Soft Fonts From a WIN.INI Change
     12.4  A Quick Method for Moving Fonts
     12.5  Building a Floppy Disk Set of Fonts
     12.6  Setting Up Fonts on a Network
     12.7  Setting Up .PFM Files for Resident and Cartridge Fonts


PART III  The PostScript Driver
────────────────────────────────────────────────────────────────────────────


Chapter 13  Overview of the PostScript Driver


Chapter 14  New Features

     14.1  Color
     14.2  Device-Independent Bitmaps
     14.3  External Printer and Printer Font Metrics Support
     14.4  PostScript Header Support
     14.5  The Error Handler
     14.6  GDI StretchBlt() Support
     14.7  Device Initialization
     14.8  Rotated Text
     14.9  EPS Printing

Chapter 15  Escapes


Chapter 16  WIN.INI Settings

     16.1  Global Initialization Section
     16.2  Per-Port Initialization Section
     16.3  Use of Soft Fonts
            16.3.1    Adobe Soft Font Format (.AGB)
            16.3.2    Non-Adobe Soft Font Format

Chapter 17  External Printer Descriptions Support

     17.1  Tools Provided
     17.2  Building an External Printer Distribution Disk
     17.3  The MKPRN Compiler
     17.4  The .PPD File Format
     17.5  Keywords and Extensions
     17.6  Running the MKPRN Compiler
     17.7  Installing the .WPD File
     17.8  Limitations

Chapter 18  PostScript Printer Communications



Introduction
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) Windows(tm) Printers and Fonts Kit provides documentation
for third-party developers working on printer and screen fonts for use with
Windows applications on the PC. Specific information is provided on how to
ma ke fonts compatible with the Microsoft Windows environment. The Microsoft
Windows Printers and Fonts Kit is intended for use by both hardware and
software engineers and is divided into the following three parts:


  ■   Part 1, "Fonts," which contains information on generating standard
      Windows .PFM and .PCM files plus details on .PFM files for
      PostScript(R) and PCL(R) printers and .PCM files for PCL printers. It
      also discusses screen fonts for Windows.

  ■   Part 2, "The PCL Driver," which explains version 3.3 of the Windows
      PCL/HP(R) LaserJet(R) printer driver.

  ■   Part 3, "The PostScript Driver," which explains version 3.3 of the
      Windows PostScript printer driver.


If you have questions regarding information in this document, please contact
Microsoft Product Support Services. For additional information on
miscellaneous device-specific topics, as well as information that became
available after this document went to press, see the README.TXT file on the
last disk of the Microsoft Wind ows Device Development Kit set of disks.


Background

Laser printer output, which features a rich variety of fonts, has made
today's personal computer users more aware of typography and quality output.
Dot-matrix printer output, once considered acceptable for final copy, is now
regarded as draft quality. Daisywheel printers, which use typewriter-like
fonts, are also less acceptable. And new font offerings, such as those of
the Apple(R) LaserWriter(R) Plus, HP LaserJet III, and the IBM(R) Personal
Pageprinter, promise to continue the trend toward typographic-quality
output.

The Microsoft Windows and OS/2 Presentation Manager operating environments
are becoming the standard graphics environment for PC-compatible computers,
particularly in the areas of WYSIWYG word processing, desktop publishing,
and marketing presentations.

Print devices and device fonts that adhere to the Windows standard will be
automatically supported by Windows application software. The needs of many
applications can be addressed by a single investment in a Windows device
driver and a set of matching WYSIWYG screen fonts.

A WYSIWYG screen representation of the document removes the limitations
inherent in old-style composition packages, making typographic-quality
output possible by the non-typographer. WYSIWYG capabilities were once
available only to users of expensive, dedicated systems. Now, however, they
are becoming possible, and even expected, on most mass-market personal
computers.

The shift from dedicated to mass-market personal computers has created
opportunities for people, other than printer manufacturers, to provide the
market with WYSIWYG screen fonts. The key is the development, acquisition,
or licensing of efficient and reliable font-generation technology. With such
technology, a retail font supplier could generate both printer and screen
fonts in a wide variety of sizes quickly and inexpensively. Third parties
who wish to provide screen fonts to match a particular printer's fonts
should work closely with the printer manufacturer to ensure screen and
printer font fidelity.

Font distributors who can provide both printer and matching screen fonts in
the same retail package will be in an advantageous position in a marketplace
where the majority of font suppliers provide only printer fonts.


Windows Font Requirements

Regardless of how the vendor distributes fonts, the Windows environment must
ultimately receive the following items for each font.

For downloadable fonts:


  ■   An appropriate aspect-ratio, bitmap, screen font file in Windows .FON
      file format usable by Windows GDI

  ■   The printer download file in printer-specific format

  ■   A printer font metrics file in Windows .PFM file format usable by the
      printer's Windows printer driver


For cartridges:


  ■   The font .FON file

  ■   A printer cartridge metrics (.PCM) file, containing .PFM file
      definitions for each font, that can be used by both the PCL/HP
      LaserJet and HP LaserJet III printer drivers.

  ■   A font cartridge


You must update the Windows initialization file, WIN.INI, to make the screen
driver and printer driver aware of these fonts. Ideally, the printer driver
will contain an installer that will read the font vendor's floppy disks and
install these files. In the absence of such a utility, clear directions on
how to copy files to the user's hard disk and how to add entries to WIN.INI
are important. However, we encourage font suppliers to provide their own
user-friendly installer as a way to add value to their offering. (Windows
Control Panel can install screen fonts; only downloadable soft fonts, .PFM
files, and cartridge .PCM files need to be installed by the driver.)


Bitmap Screen Fonts

Printer fonts should be accompanied by bitmap screen fonts in the
apppropriate aspect ratio. Minimally, we recommend you supply line sizes
that match the frequently used graphic arts point sizes (i.e., 8, 9, 10, 12,
14, 18, and 24).

You measure screen fonts in line sizes (dots or lines per inch) rather than
typographic point sizes. Specific line sizes of the fonts may be different
from their nominal point sizes.

For more information on screen fonts, see Chapter 1, "Screen Fonts for
Windows," and Chapter 12, "Installer Scenarios."


Downloadable Fonts

Downloadable fonts are the most cost-effective way to distribute additional
fonts for a printer device. This approach enables third-party vendors to
create and/or distribute downloadable soft fonts for a device.

Downloadable fonts also enable users to access a larger variety of fonts
than could be held in their printer's memory. This is possible because the
driver selectively downloads the fonts only when needed.

Each downloadable font must have a font file in printer-specific format.
This file is in the printer's font command language. For the Windows printer
driver to download the file, it must know where the file resides on the
user's hard disk. Chapter 2, "Printer Font Metrics (PFM) Files," describes
the Windows font management mechanism.


Printer Font Metrics Files

Each downloadable printer font needs a printer font metrics (PFM) file in
the Windows .PFM file format. The Windows printer driver uses the
information in the .PFM file to prepare the width and kerning tables used by
the application during composition.

A printer font metrics file shares a common header with a Windows screen
font file. The differences between the screen font file and the printer font
metrics file occur after the common header. For a description of the
contents of .PFM files, see Chapter 2, "Printer Font Metrics (PFM) Files,"
and, then, Chapter 4, ".PFM Files for PostScript Printers," and Chapter 5,
".PFM Files for PCL Printers," for specific descriptions of those .PFM
files.






PART I  Fonts
────────────────────────────────────────────────────────────────────────────

This first part discusses printer and screen font issues in the Microsoft
Windows environment. It also includes detailed descriptions of .PFM and .PCM
files, the PFM Editor tool, and the specific .PFM file formats for
PostScript and PCL printers.

This information forms the basis for understanding the technical notes
provided in Part 2, "The PCL Driver," and Part 3, "The PostScript Driver."






Chapter 1  Screen Fonts for Windows
────────────────────────────────────────────────────────────────────────────

This chapter presents the factors you should consider when creating screen
fonts. We recommend that you provide at least two (although three would be
better) sets of screen fonts for the important display classes. We also
recommend a range of screen line sizes, taking into account the trade-off
between performance and WYSIWYG quality.

Microsoft Windows applications must compose text for the target output
device and display an approximation of that output on the screen. To have a
WYSIWYG display, the screen fonts must match the printer fonts. The more
accurate the representation, the more WYSIWYG the display.


1.1  The Aspect-Ratio Classes of Display Devices

Actual dots-per-inch resolution is not a factor in determining the class of
the device; only the aspect ratio is used.

Windows recognizes three aspect-ratio classes of display devices:


  ■   2:1

  ■   1.33:1 (4:3)

  ■   1:1


These classes roughly correspond to:


  ■   The IBM Color Graphics Adapter (2:1)

  ■   The IBM Enhanced Graphics Adapter (4:3)

  ■   The IBM PS/2(R) MCGA, VGA, and 8514/a (1:1)


If you pre-digitize the screen fonts, we suggest you distribute three sets
of each font for the three aspect ratios. (Vendors wanting to distribute
only two sets should exclude the 2:1 class, as it clearly represents old
technology.)


1.2  Translating Point Sizes into Line Sizes

Because of the variation in screen resolutions, screen font sizes are
discussed in terms of screen line sizes, not typographic point sizes. Those
familiar with the Macintosh(R) environment have become used to line sizes
and point sizes being the same. This is not true in the PC environment.

Windows defines a logical page size (that is, lines-per-inch) for each
device it supports. When possible, this logical page size will closely match
the physical size and aspect ratio of the device. Common screen
lines-per-inch sizes are as follows:


  ■   For a 2:1 aspect ratio, 96:48 (IBM Color Graphics Adapter)

  ■   For a 1:1 aspect ratio, 96:96 (VGA), 108:108, 120:120 (8514/a), and
      144:144

  ■   For a 4:3 aspect ratio, 96:72 (IBM Enhanced Graphics Adapter)


The equation for relating point size to equivalent screen line size is as
follows:

Truncate the quotient on the right-hand side if the result is a fractional
line size; it is always better to select a smaller size when an exact match
is not possible.


1.3  Choosing the Correct Range of Line Sizes

To represent accurately a printer font on the screen, you must make
available a reasonable range of screen fonts. However, each screen font
consumes valuable memory. Therefore, as a font vendor, you should weigh
carefully performance against large screen-font variety. For each printer
font, you should distribute at least two, and preferably three, .FON files
containing screen fonts for the following:


  ■   1:1 aspect-ratio screens

  ■   4:3 aspect-ratio screens

  ■   2:1 aspect-ratio screens (optional)


The most important factor to consider when creating screen-font files is
memory consumption. Fewer and smaller screen fonts use less memory, but may
degrade the WYSIWYG quality of the display. Other factors to consider
include the following:


  ■   Legibility threshold. There is a certain size at which the fonts are
      difficult, if not impossible, to read. For most screens, the value is
      6 lines. For high-resolution screens, the value is around 9-10 lines.
      Therefore, it does not make sense to provide fonts below these sizes.

  ■   Doubling and tripling. The screen driver may double or triple a
      small-size font to take the place of an unavailable large font. For
      example, it may double an 18-line font to make a 36-line font, or it
      may triple a 24-line font to make a 72-line font. Doubling is ugly,
      but acceptable and difficult to avoid. Tripling is unacceptable and
      can be avoided by providing a well-chosen range of screen line sizes.

  ■   Specific applications. The application can control how the screen
      driver will select a font for such things as text greeking, doubling
      and tripling, vector font substitution, and down-sizing to match
      widths.




1.3.1  Greeking

Some applications stop displaying screen fonts below a certain line size and
may display a gray shaded box or other graphic representation. This is
referred to as "greeked" text. Greeking speeds up the screen display.


1.3.2  Proof Versus Draft (Doubling and Tripling) Quality

In Windows, proof usually means good and draft means poor but quick. The
screen driver will never double- or triple-size a font for proof quality.
However, it will double- or triple-size smaller fonts to get the exact size
it wants for draft quality. If the correct size is available, the screen
driver will always choose it.

Doubling and tripling occur only when the exact size is not available. For
example, assume the only screen sizes are 10 and 19 lines, and the
application wants a 20-line screen font. In proof quality, the screen driver
would choose the 19-line font. In draft quality, the screen driver would
double the 10-line font.


1.3.3  Vector Font Substitution

Vector outline fonts do not look as good as well-made raster screen fonts,
but they look better than doubled or tripled screen fonts. Also, the amount
of memory used by vector fonts is constant while the amount of memory used
by raster fonts increases as the font size increases.


1.3.4  Down-sizing to Match Widths

When the screen fonts do not accurately represent the printer fonts (i.e.,
the height-to-width ratio on the printer font is different from that of the
screen font), an application can ask for a smaller font to get the correct
width. By doing this, the application can display the line more quickly and
prevent the characters from overlapping.

This behavior can most often be observed when the font vendor does not
supply matching screen fonts, or the screen fonts do not contain the same
height-to-width ratio as their corresponding printer fonts.


1.4  Recommended Screen Font Sizes

Nothing produces better WYSIWYG than a wide range of screen font sizes. On
the other hand, nothing degrades system performance faster than a large
number of screen fonts. Therefore, the selection of screen fonts must
balance desired WYSIWYG quality with system performance.

Suppose, for example, you have two machines with different screen font
configurations. Machine A contains the screen font sizes 7, 10, and 16
lines. Machine B contains the sizes 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
and 18 lines. If the user creates a page using all the fonts from Machine B,
the differences in sizes will be visible. However, the machine will load 12
screen fonts to display the page.

On Machine A, with doubling and tripling disabled, the machine displays the
same range of sizes as follows:


  ■   7, 8,  and 9 lines displayed with the 7-line font

  ■   10, 11, 12, 13, 14, and 15 lines displayed with the 10-line font

  ■   16, 17, and 18 lines displayed with the 16-line font


Much of the WYSIWYG would be lost because several sizes are displayed with
the same font. However, the machine had to load only three fonts to display
the page.

Thus, Machine B slowly displayed with high WYSIWYG quality, what Machine A
quickly displayed with poor WYSIWYG quality.

As the font vendor, you need to consider the application the user will run
under Windows. For example, Windows Excel generally uses body-size fonts
(fonts in the size range of 8 to 12 points). Therefore, a wide range of font
sizes is unnecessary. And Aldus(R) PageMaker(R), although it uses a large
range of sizes, switches to vector fonts above 24 lines (i.e., the default
"Vector text above" setting).

Ideally, the user should decide which is more important: WYSIWYG quality or
performance. Many font products are available that allow for exactly that:
the product contains a font generator that requires the user to specify
which point sizes to build. For such programs, we recommend the user be
given the option to select a pre-determined range of sizes:


  ■   "Publishing" size range of 8, 9, 10, 12, 14, 18, and 24 lines

  ■   "Artwork" size range of 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 28,
      and 32 lines

  ■   "General use" or "Performance" range of 8, 10, 12, 18, and 24 lines


If the font-creation program requires the user to indicate exactly which
sizes should be built (that is, there are no pre-determined ranges), then we
recommend that the documentation provide specific instructions on what
numbers to enter, based upon the user's needs or intended use for the
product.

For font packages that give the user no choice in the size range, we
recommend that the vendor supply the "Publishing" size range of 8, 9, 10,
12, 14, 18, and 24 lines.






Chapter 2  Printer Font Metrics (PFM) Files
────────────────────────────────────────────────────────────────────────────

This chapter presents the format for listing printer font metrics (PFM)
files and soft fonts in the WIN.INI file, and the format for .PFM and .PCM
files.

Most drivers have the text metrics for a small number of device-resident
fonts built in as resources. But the majority of the printer font metrics
will be external to the driver in the form of Microsoft Windows printer font
metrics files.

The driver retrieves information about which fonts are available by reading
profile strings from the Windows initialization file, WIN.INI. Drivers
maintain their default settings across invocations of the driver by saving
the information in WIN.INI.


2.1  Listing .PFM Files in WIN.INI

Most of this discussion pertains to .PFM files for soft fonts (i.e., fonts
that must be downloaded to the printer from the computer). However,
cartridge and printer-resident fonts can be handled in the same manner.

There are two forms of soft fonts:


  ■   Permanent soft fonts. These are copied from the computer to the
      printer when the printer is first turned on and remain there until the
      printer is turned off. The Windows printer driver has access to
      permanent soft fonts for all the documents that it prints.

  ■   Temporary soft fonts. These are copied from the computer to the
      printer on an as-needed basis during the print job. They are deleted
      from the printer's memory at the end of a print job.


For the Windows printer driver to correctly locate .PFM files, the driver,
or a utility provided by the font vendor, must perform the following
operations:


  ■   Transfer .PFM, screen font, and downloadable font files (i.e., soft
      fonts) from the font manufacturer's floppy disks to the user's hard
      disk.

  ■   Add the entries in the WIN.INI file using the format described in the
      following sample listing of .PFM files:


  [HPPCL,LPT1]
  SoftFonts=4
  SoftFont1=C:\PCLFONTS\HVPB0140.PFM
  SoftFont2=C:\PCLFONTS\TRPR0120.PFM
  SoftFont3=C:\PCLFONTS\TRPB0120.PFM,C:\PCLFONTS\TR120BPN.USP
  SoftFont4=C:\PCLFONTS\TRPI0120.PFM,C:\PCLFONTS\TR120IPN.USP
  Cartridge100=C:\PCLFONTS\MYCART.PCM

The Windows Printer Font Installer, used in conjunction with the PCL / HP
LaserJet driver, also requires these entries for permanently downloaded
fonts:

  C:\PCLFONTS\HVPB0140.PFM=C:\PCLFONTS\HV140BPN.USP
  C:\PCLFONTS\TRPR0120.PFM=C:\PCLFONTS\TR120BPN.USP

The WIN.INI entries in the preceding examples have these meanings:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
WIN.INI entry                     Definition
────────────────────────────────────────────────────────────────────────────
[HPPCL,LPT1]                      The driver stores all its information in a
                                  special section in the WIN.INI file. The
                                  format for the heading is:

                                  [driver name,port name]

                                  This enables the driver to maintain
                                  different information for each printer
                                  port to which the driver is connected. For
                                  example, the printer on LPT1 may be a
                                  standard LaserJet incapable of handling
                                  soft fonts while the printer on LPT2 may
                                  be a LaserJet Series II.

SoftFonts=                        The number of SoftFontn= entries.
WIN.INI entry                     Definition
────────────────────────────────────────────────────────────────────────────
SoftFonts=                        The number of SoftFontn= entries.

SoftFontn=                        The first two entries list the soft fonts
                                  that the user indicated have been
                                  previously downloaded to the printer (that
                                  is, permanently downloaded fonts). For
                                  these fonts, only a Windows printer font
                                  metrics (.PFM) file is referenced.

                                  These entries could also represent .PFM
                                  files for cartridge fonts. The driver
                                  detects cartridge fonts by the presence of
                                  a printer escape in the .PFM file. This is

                                  described in Part 2, "The PCL Driver."

                                  The last two SoftFontn= fields list the
                                  fonts that the driver is to download
                                  dynamically (i.e., temporary fonts) if
WIN.INI entry                     Definition
────────────────────────────────────────────────────────────────────────────
                                  dynamically (i.e., temporary fonts) if
                                  called for in the document.

Cartridgen=                       The definition of a cartridge. A .PCM file
                                  contains one PFM structure for each font
                                  in the cartridge.

PFM file=                         The Printer Font Installer in the PCL / HP
                                  LaserJet driver uses these entries to
                                  preserve the filenames of the permanently
                                  downloaded fonts (first two SoftFontn=
                                  entries). The Printer Font Installer is
                                  described in Part 2, "The PCL Driver."



The SoftFonts= and SoftFontn= entries in the WIN.INI file may be entered by
the user or, ideally, entered automatically by an installation utility. Some
Windows drivers, such as the PCL / HP LaserJet driver, contain an
installation utility.

If the driver does not contain an installation utility, we recommend that
the font vendor provide a utility that:


  ■   Transfers .PFM, screen font, and printer font files from the font
      vendors' disks to the user's hard disk.

  ■   Writes the necessary changes to the WIN.INI file.


If .PFM files are not supplied, the driver may elect to generate them from
the download files. The PCL / HP LaserJet driver, for example, does this.
However, the PCL driver's PFM generator does not create pair-kern tables or
very accurate extended text metrics structures; only the font's designer can
create these structures accurately. It also cannot expand compressed font
files or decrypt encrypted files. In this case, the font vendor must supply
an installer utility that will convert the font files into regular HP soft
font files.

The current Windows PostScript driver is not equipped with a soft font
installation utility. Even if it were, it would not attempt to generate .PFM
files from downloadable font files due to the complexity of PostScript
fonts. Instead, it would build .PFM files from Adobe(tm) font metrics (.AFM)
files. As a font vendor, you must supply the .PFM files to guarantee an
accurate description of the font metrics. Optionally, you may supply .AFM
files since a future driver may also read them.


2.2  Printer Font Install Directory File

The printer font install directory file, FINSTALL.DIR, is a standard file
format read by font install utilities. The purpose of this file is to link
each downloadable font file to its corresponding .PFM and screen font file.
The utility uses this file to locate the .PFM, screen, and printer font
files on the disks in a distribution package. We recommend that font vendors
use this file format when designing a font package for installation by the
Windows Printer Font Installer.

As of this writing, the printer font install directory file is supported
only by the Printer Font Installer in the Windows PCL / HP LaserJet driver.
The format for the file is documented in Part 2, "The PCL Driver."


2.3  .PFM File Organization

The printer font metrics file consists of the following data structures (in
this order):


  1.  .PFM header structure (PFMHEADER)

  2.  Array of character widths from dfFirstChar through dfLastChar plus one
      WORD

  3.  .PFM extension structure (PFMEXTENSION)

  4.  Driver name pointed to by dfDevice

  5.  Windows font name pointed to by dfFace

  6.  Extended Text Metric structure (EXTTEXTMETRIC) pointed to by
      dfExtMetricsOffset

  7.  Extent table pointed to by dfExtentTable

  8.  Driver-specific structure pointed to by dfDriverInfo

  9.  Pair-kern table pointed to by dfPairKernTable

  10. Track-kern table pointed to by dfTrackKernTable


Of these structures, the .PFM header, .PFM extension, and font name must be
present in every Windows .PFM file. The existence of the remaining
structures depends upon the printer driver and the font vendor's
preferences. The specific requirements for the Windows PostScript and PCL
drivers are described in Chapter 4, ".PFM Files for PostScript Printers,"
and Chapter 5, ".PFM Files for PCL Printers." The rest of this section
describes the data structures in the .PFM file.


2.3.1  PFM Header and Width Table

The header for the .PFM file begins with the same information stored in a
Windows raster font file or vector font file (see the Microsoft Windows
Device Driver Adaptation Guide for descriptions of those fields).

The .PFM file header contains the following fields:

  WORD  dfVersion
  WORD  dfSize
  char  dfCopyright[60]
  WORD  dfType
  WORD  dfPoints
  WORD  dfVertRes
  WORD  dfHorizRes
  WORD  dfAscent
  WORD  dfInternalLeading
  WORD  dfExternalLeading
  BYTE  dfItalic
  BYTE  dfUnderline
  BYTE  dfStrikeOut
  WORD  dfWeight
  BYTE  dfCharSet
  WORD  dfPixWidth
  WORD  dfPixHeight
  BYTE  dfPitchAndFamily
  WORD  dfAvgWidth
  WORD  dfMaxWidth
  BYTE  dfFirstChar
  BYTE  dfLastChar
  BYTE  dfDefaultChar
  BYTE  dfBreakChar
  WORD  dfWidthBytes
  DWORD dfDevice
  DWORD dfFace
  DWORD dfBitsPointer
  DWORD dfBitsOffset

The fields in PFMHEADER are identical to the fields for Windows screen font
files, which are documented in the Microsoft Windows Device Driver
Adaptation Guide.

The width table is an array of dfLastChar - dfFirst + 2 WORDs. (The last
extra entry is 0.) If present, it is placed between the PFMHEADER and
PFMEXTENSION structures. There is a width table for variable-width PCL
fonts, but none for PostScript .PFM files. See Chapters 4 and 5 for
descriptions of driver-specific implementations.

The width table is present only in .PFM files for variable-pitch PCL fonts.
Fixed-pitch PCL fonts do not require width information beyond the width
fields in the header; PostScript fonts use the extent table instead.


2.3.2  PFMEXTENSION Data Structure

The PFMEXTENSION data structure is as follows:

  WORD  dfSizeFields
  DWORD dfExtMetricsOffset
  DWORD dfExtentTable
  DWORD dfOriginTable
  DWORD dfPairKernTable
  DWORD dfTrackKernTable
  DWORD dfDriverInfo
  DWORD dfReserved

The fields are defined as follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Description
────────────────────────────────────────────────────────────────────────────
dfSizeFields                      The size in bytes of this structure.

dfExtMetricsOffset                The byte offset in the file to the
                                  EXTTEXTMETRIC structure for this font.

dfExtentTable                     The byte offset in the file to the extent
                                  table. The size of the table is dfLastChar
                                  - dfFirstChar + 1 WORD. The extent table
                                  contains the unscaled widths (in 1/1000's
                                  of an em) of the characters in the font.
                                  This table must be present in PostScript
                                  .PFM files (see Chapter 4, ".PFM Files for
                                  PostScript Printers").

Field                             Description
────────────────────────────────────────────────────────────────────────────

dfOriginTable                     The byte offset in the file to the table
                                  of character origins. The size of the
                                  table is dfLastChar - dfFirstChar + 1 WORD.
                                  For screen font files, this table gives
                                  the signed amount of left adjustment to
                                  add to the current position before drawing
                                  the characters. Negative values indicate
                                  left movement; positive values indicate
                                  right movement. This should be NULL for
                                  printer font metrics files.

dfPairKernTable                   The byte offset in the file to the
                                  optional pair-kerning table. This should
                                  be NULL if no kerning pairs are defined
                                  for this font. The size of the table is
                                  given by the etmKernPairs member of the
                                  EXTTEXTMETRIC structure.

Field                             Description
────────────────────────────────────────────────────────────────────────────

dfTrackKernTable                  The byte offset in the file to the
                                  optional track-kerning table. This should
                                  be NULL if no kerning tracks are defined
                                  for this font. The size of the table is
                                  given by the etmKernTracks member of the
                                  EXTTEXTMETRIC structure.

dfDriverInfo                      The byte offset in the file to additional
                                  driver-specific information. Each driver
                                  writer is responsible for documenting the
                                  format of the data pointed to by this
                                  member. These formats will be made public
                                  so that third parties that want to create
                                  compatible printer font metrics files may
                                  do so. For the Windows PostScript and PCL
                                  drivers, these structures are described in
                                  Chapters 4 and 5.

Field                             Description
────────────────────────────────────────────────────────────────────────────

dfReserved                        Reserved; must be NULL.




2.3.3  EXTTEXTMETRIC Data Structure

The EXTTEXTMETRIC data structure contains the following fields:

  typedef struc{
   short etmSize;
   short etmPointSize;
   short etmOrientation;
   short etmMasterHeight;
   short etmMinScale;
   short etmMaxScale;
   short etmMasterUnits;
   short etmCapHeight;
   short etmXHeight;
   short etmLowerCaseAscent;
   short etmUpperCaseDescent;
   short etmSlant;
   short etmSuperScript;
   short etmSubScript;
   short etmSuperScriptSize;
   short etmSubScriptSize;
   short etmUnderlineOffset;
   short etmUnderlineWidth;
   short etmDoubleUpperUnderlineOffset;
   short etmDoubleLowerUnderlineOffset;
   short etmDoubleUpperUnderlineWidth;
   short etmDoubleLowerUnderlineWidth;
   short etmStrikeOutOffset;
   short etmStrikeOutWidth;
   WORD  etmKernPairs;
   WORD  etmKernTracks;
   }EXTTEXTMETRIC;

The EXTTEXTMETRIC fields are described in the following table. All the
measurements are given in the specified units, regardless of the current
mapping mode of the display context.

╓┌──────────────────────┌────────────────────────────────────────────────────╖
Field                  Definition
────────────────────────────────────────────────────────────────────────────
etmSize                The size of this structure in bytes. Future changes
                       to this structure will be additions to the existing
                       structure; the position and meaning of existing
                       members will not change.

etmPointSize           The nominal point size of this font in twips
                       (twentieths of a point). This is the intended
                       graphic arts size of the font; the actual size may
                       differ slightly depending on the resolution of the
                       device.

etmOrientation         The font's orientation:

                       0 = Either orientation
                       1 = Portrait
Field                  Definition
────────────────────────────────────────────────────────────────────────────
                       1 = Portrait
                       2 = Landscape

                       This value refers to the ability of this font to be
                       imaged on a page of the given orientation.
                       Landscape pages are those whose width (x-dimension)
                       is greater than their height (y-dimension).

etmMasterHeight        Specifies the font size in device units for which
                       the values in this font's extent table are exact.
                       This is described in detail in Section 2.3.4,"Font
                       Scaling: etmMasterHeight and etmMasterUnits."

etmMinScale            Specified in device units, the minimum valid size
                       for this font. That is:



                       Where:
Field                  Definition
────────────────────────────────────────────────────────────────────────────
                       Where:
                       72 represents the number of points-per-inch.
                       dfVertRes contains the number of dots-per-inch.

etmMaxScale            Specified in device units, the maximum valid size
                       for this font. That is:



                       Where:
                        72 represents the number of points-per-inch.
                       dfVertRes contains the number of dots-per-inch.

etmMasterUnits         The integer number of units-per-em where an em
                       equals etmMasterHeight. In other words,
                       etmMasterHeight expressed in font units rather than
                       device units. This is described in detail in
                       Section 2.3.4, "Font Scaling: etmMasterHeight and
                       etmMasterUnits."
Field                  Definition
────────────────────────────────────────────────────────────────────────────
                       etmMasterUnits."

etmCapHeight           The height in font units of uppercase characters in
                       the font. Typically, the height of the capital H.

etmXHeight             The height in font units of lowercase characters in
                       the font. Typically, the height of the lowercase x.

etmLowerCase-          The distance in font units that the ascender of
Ascent                 lowercase letters extends above the baseline,
                       typically specified for a lowercase d.

etmLowerCase-          The distance in font units that the descender of
Descent                lowercase letters extends below the baseline,
                       typically specified for a lowercase p.

etmSlant               The angle in tenths of degrees clockwise (to the
                       right) from the upright version of the font
                       (assuming this font is slanted or italicized).
Field                  Definition
────────────────────────────────────────────────────────────────────────────
                       (assuming this font is slanted or italicized).

etmSuperScript         The recommended amount in font units  to offset
                       superscript characters from the baseline (see the
                       discussion of font units in Section 2.3.4, "Font
                       Scaling: etmMasterHeight. and etmMasterUnits").
                       This is typically a negative offset.

etmSubScript           The recommended amount in font units  to offset
                       subscript characters from the baseline (see the
                       discussion of font units in Section 2.3.4, "Font
                       Scaling: etmMasterHeight and etmMasterUnits"). This
                       is typically a positive offset.

etmSuperScriptSize     The recommended size in font units of superscript
                       characters for this font.

etmSubScriptSize       The recommended size in font units of subscript
                       characters for this font.
Field                  Definition
────────────────────────────────────────────────────────────────────────────
                       characters for this font.

etmUnderlineOffset     The offset in font units downward from the baseline
                       where the top of a single underline bar should
                       appear.

etmUnderlineWidth      The thickness in font units of the underline bar.

etmDoubleUpper-        The offset in font units downward from the baseline
UnderlineOffset        where the top of the upper double underline bar
                       should appear.

etmDoubleLower-        The offset in font units downward from the baseline
UnderlineOffset        where the top of the lower double underline bar
                       should appear.

etmDoubleUpper-        The thickness in font units of the upper double
UnderlineWidth         underline bar.

Field                  Definition
────────────────────────────────────────────────────────────────────────────

etmDoubleLower-        The thickness in font units of the lower double
UnderlineWidth         underline bar.

etmStrikeOutOffset     The offset in font units upward from the baseline
                       where the top of a strike-out bar should appear.

etmStrikeOutWidth      The thickness in font units of the strike-out bar
                       (see the discussion of font units in Section 2.3.4,
                       "Font Scaling: etmMasterHeight and etmMasterUnits").

etmKernPairs           The number of character kerning pairs defined for
                       this font. You can use this value to calculate the
                       size of the pair-kern table returned by the
                       GETPAIRKERNTABLE escape. It will not be greater
                       than 512 kern pairs.

etmKernTracks          The number of kerning tracks defined for this font.
                       You can use this value to calculate the size of the
Field                  Definition
────────────────────────────────────────────────────────────────────────────
                       You can use this value to calculate the size of the
                       track-kern table returned by the GETTRACKKERNTABLE
                       escape. It will not be greater than 16 kern tracks.




2.3.4  Font Scaling: etmMasterHeight and etmMasterUnits

This section describes how a driver uses the values etmMasterHeight and
etmMasterUnits to scale the character width values in the extent table. It
also describes how the mechanism should work; Chapters 4 and 5 describe how
each driver implements or intends to implement the mechanism.

A driver allows two methods for measuring character widths:


  ■   Device units or "pixels"

  ■   Font units


Device units are the number of dots in the physical device (dots-per-inch);
etmMasterHeight is expressed in device units. It may be converted to points
using the formula:

Where: 72 represents the number of points-per-inch. dfVertRes contains the
number of dots-per-inch in device units.

Font units may differ from device units as a convenience to the font vendor.
If the font is targeted for devices that differ in resolution, there
typically is no benefit from tying the resolution of the font to the
resolution of a particular printer. The vendor uses the units that are most
convenient for designing the font. For example, 1000 units-per-cell or em is
the Adobe standard for PostScript fonts; etmMasterUnits is expressed in font
units-per-em where an em equals etmMasterHeight.

A number may be converted from device units to font units using the formula:


The formula for the inverse operation is:


Determining Character Widths

The values in the extent table are the widths of the characters when the
font height equals etmMasterHeight. When the font height does not equal
etmMasterHeight, the driver must scale the values from the extent table
(always assume linear scaling fonts).

The values in the extent table are in font units. The width of a character
for a particular font height may be computed by using the ratio of character
extent over etmMasterUnits. That is:

By multiplying font height through the equation, we have the formula for
computing character width:

Notice that character width takes on the units of font height. If the font
height is in device units, the resulting width will be in device units. If
the font height is in font units, the resulting width will be in font units.


In its normal mode of operation, the driver simply plugs the font height
into the above equation to compute the character width. Font height is
normally in device units, so the resulting width is normally in device
units.

For example, assume the device resolution is 300 dpi and the font units are
expressed as 1000 units-per-em. Assuming that etmMasterHeight represents a
72-point font, the values would look like this:

dfVertRes = 300

etmMasterHeight = 300

etmMasterUnits = 1000

Furthermore, assume the value in the width table for a capital H is 500 font
units, or half the em height. Assume the height of the font for which you
want the character width is 12 points, or 50 device units. With relative
widths disabled, the character width would be computed using the first width
formula:


Using the ENABLERELATIVEWIDTHS Escape

When the application calls the ENABLERELATIVEWIDTHS escape, the driver
expects the application to request a font height in device units, but will
return the character width in font units. The application may want to obtain
widths in font units to alleviate any error that may result from rounding
widths to device units. It is the responsibility of the driver to correct
for this error when relative widths are disabled, but the application may
choose to enable relative widths and perform its own error correction.

The driver converts the font height (in device units) to font units prior to
computing the character width. The resultant formula is:

This formula was computed by replacing the "font height" from the first
formula for character width with the formula for converting a value from
device units to font units and, then, simplifying the equation.

Using the same assumptions given in the previous subsection, you can now
work through some more examples. You know that the width of the character is
25 device units (i.e., dots or pixels) or half the height of 50 device
units. With relative widths enabled, the character width would be computed
using the second width formula:

The width of the character is 83.333 font units. The driver will round
non-integer results.

To demonstrate that the width in font units is equivalent to the width in
device units, it can be converted to device units using the formula provided
in the previous subsection:

As stated earlier, this section describes how etmMasterUnits and
etmMasterHeight should be used. Chapters 4 and 5 describe restrictions
imposed by the drivers.


2.3.5  KERNPAIR Data Structure

The KERNPAIR data structure contains the following fields:

  typedef struc{
   union {
    BYTE each[2]; /* UNION: 'each' and 'both' share the */
      /*   same memory */
    WORD both;
    } kpPair;
   short   kpKernAmount;
   } KERNPAIR;

The KERNPAIR fields are described in the following table. All the
measurements are given in the font units of the device, regardless of the
current mapping mode of the display context.

╓┌───────────────┌───────────────────────────────────────────────────────────╖
Field           Description
────────────────────────────────────────────────────────────────────────────
kpPair.each[0]  The character code for the first character in the kerning
                pair.

kpPair.each[1]  The character code for the second character in the kerning
                pair.

Field           Description
────────────────────────────────────────────────────────────────────────────

kpPair.both     A WORD type in which the first character of the kerning
                pair is in the low-order byte and the second character is
                in the high-order byte.

kpKern-         The signed amount that this pair will be kerned if they
Amount          appear side by side in the same font and size. This value
                is typically negative since pair-kerning usually results
                in two characters being set more tightly than normal.



The number of kern pairs is stored in the EXTTEXTMETRIC structure's
etmKernPairs field. The array of KERNPAIR structures returned by the
GETPAIRKERNTABLE escape must be sorted in increasing order by the
kpPair.both member (or in order of kpPair.each[1], lpPair.each[0]. However,
an integer sort on kpPair.both is faster). This enables the application to
do a binary search on the kerning table.


2.3.6  KERNTRACK Data Structure

The KERNTRACK data structure contains the following fields:

  typedef struc{
   short ktDegree;
   short ktMinSize;
   short ktMinAmount;
   short ktMaxSize;
   short ktMaxAmount;
   }KERNTRACK;

The KERNTRACK fields are described in the following table. All measurements
are given in font units of the currently selected font, regardless of the
current mapping mode of the display context.

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Definition
────────────────────────────────────────────────────────────────────────────
ktDegree                          A short integer value in which
Field                             Definition
────────────────────────────────────────────────────────────────────────────
ktDegree                          A short integer value in which
                                  increasingly negative values represent
                                  tighter track-kerning and increasingly
                                  positive values represent looser
                                  track-kerning.

ktMinSize                         A short integer specifying in device units
                                  the minimum font size for which linear
                                  track-kerning applies.

ktMinAmount                       A short integer specifying in font units
                                  the amount of track-kerning to apply to
                                  font sizes ktMinSize and below.

ktMaxSize                         A short integer specifying in device units
                                  the maximum font size for which linear
                                  track-kerning applies.

ktMaxAmount                       A short integer specifying in font units
Field                             Definition
────────────────────────────────────────────────────────────────────────────
ktMaxAmount                       A short integer specifying in font units
                                  the amount of track-kerning to apply to
                                  font sizes ktMaxSize and above.



Between the ktMinSize and ktMaxSize font sizes, track-kerning is a linear
function from ktMinAmount to ktMaxAmount.


2.4  Printer Cartridge Metrics (PCM) Files

A .PCM file consists of a global information header followed by a series of
.PFM file structures. The file structure is as follows:

  struct _pcmheader {
   WORD pcmMagic;
   WORD pcmVersion;
   DWORD pcmSize;
   DWORD pcmTitle;
   DWORD pcmPFMList;
   }

The pcmMagic field must contain the magic number 3244 (0x0CAC). The Printer
Font Installer uses it to recognize .PCM files when no FINSTALL.DIR file is
supplied with the .PCM file.

The pcmVersion field contains the version number of the .PCM file. The upper
byte contains the version number and the lower byte the revision number,
both in BCD. The current version number is 3.10, represented as 0x0310.

The pcmSize field contains the size in bytes of the entire .PCM file.

Following this structure is the title string for the cartridge. The file
offset of this string appears in the pcmTitle field of the header. This
string is terminated by zero. This title is used normally in the cartridge
list box in the Printer Setup (device-mode) dialog box. A non-zero offset
and a non-empty name string at that offset is required.

The list of font PFMs is a collection of .PFM files (one for each cartridge
font) that are appended together. Each PFM contains (in a doubleword at
offset 2) the size of the .PFM file, which you can consider the offset of
the next PFM relative to the current one. All file positions in the PFM
itself are offsets from the file position of the beginning of the individual
PFM. The absolute file offset of the first PFM in the file is placed in the
pcmPFMList field. One .PFM file is required for each individual font in the
cartridge.


2.4.1  WIN.INI Additions

You should specify non-driver resident cartridges by adding to the WIN.INI
file in the driver section a switch similar to the following one:

  [HPPCL, port]
  cartridgen=PCM-file

where the given .PCM file defines the cartridge with index n. You may use
this index with the cartindexn switch to select the cartridge. The index of
a cartridge must be at least 50 in version 3.2.

The standard cartridges defined by the cartridgen switch are listed in the
Cartridge list box in the Printer Driver dialog box, and may be easily
selected and unselected.


2.4.2  Cartridge Installation

You install cartridges the same way as soft fonts by clicking the Fonts
button to invoke the Printer Font Installer. All the user-defined cartridges
that appear in the WIN.INI file are listed, along with the soft fonts, in
the Fonts list box. Cartridges are labeled with a "(c)" symbol or, if
running version 3.3 of the PCL driver, a bitmapped representation of a
cartridge.

You can also add new cartridges the same way as fonts by clicking the Add
Fonts... button and selecting a source from which to read. There are two
ways to find cartridges. You can either specify them in the FINSTALL.DIR
file or scan the disk. The syntax for specifying cartridges in FINSTALL.DIR
is given in the next subsection. If no FINSTALL.DIR file is found on the
source disk, the scanning process will search for files in the PCM format
(i.e., containing valid pcmMagic and pcmVersion fields and a valid title)
and place those it finds in the install list box along with any downloadable
fonts it finds.

You manipulate cartridges basically the same way you would manipulate soft
fonts. You can add, delete, copy, and/or move them between ports. However,
the Edit button and the Permanent and Temporary radio buttons are disabled
if any cartridges are selected since these operations do not apply to
cartridges.


2.4.3  FINSTALL.DIR Syntax

A new structure for installing cartridges has been added to the FINSTALL.DIR
syntax. The syntax is as follows:

  CARTRIDGE {
   aspectratio = description, screenfontfile
   .
   .
   .
   "cartridge title" = cartridgefile
   .
   .
   .
   }

This syntax enables you to install matching screen fonts along with a
cartridge. More than one cartridge may appear in a CARTRIDGE block. The
cartridge title field is the name of the cartridge placed in the list box at
installation time. It should, but does not need to, match the title in the
.PCM file. For more information on the FINSTALL.DIR file, see Part 2, "The
PCL Driver."






Chapter 3  The PFM Editor
────────────────────────────────────────────────────────────────────────────

One of the responsibilities of a Microsoft Windows printer driver is to
provide a list of the fonts available on the printer. Because of the large
number of downloadable and cartridge fonts available for HP LaserJet
printers, the driver can only have a few of these fonts built into it.

The driver supports the installation of additional fonts by supplying a
utility called the Printer Font Installer. (See Part 2, "The PCL Driver,"
for a description of this utility.) The Printer Font Installer, in the PCL
driver, requires one .PFM file per-font per-size, with an additional .PFM
file if there is a font variation such as an italic font or a font with a
different weight. Thus, a font cartridge containing Helv and TmsRmn fonts at
8, 10, 12, and 14 points will require eight .PFM files. If the cartridge
also contains boldface and italic versions of the 10 and 12 point fonts, an
additional eight .PFM files are required. These individual cartridge font
.PFM files are then combined into a single .PCM file.

The information Windows requires about each font includes identifying
information such as the face name, family, and point size; size information
such as heights, extents, leading, and widths of individual characters;
information on how to synthesize effects such as underlining and strikeout;
and hardware information such as the amount of printer memory required (for
downloadable fonts) and the printer escape string used to select the font.

The font supplier generally provides .PFM files on the soft font disks or a
.PCM file on a disk with the cartridge. The font supplier may optionally
supply matching WYSIWYG screen fonts, which greatly enhance the usability of
the fonts with Windows applications.

The PFM Editor is a Windows application that the supplier can use to create
and edit .PFM files and create .PCM files for the PCL driver. The PFM Editor
simplifies and accelerates the task of creating .PFM files by not requiring
a great deal of knowledge about either the .PFM file format or Windows
device drivers.

The PFM Editor reads the filename of a .PFM file from the command line if it
is passed one. Thus, defining the .PFM extension in WIN.INI allows the user
to double-click .PFM files to edit them.


3.1  The Main Window

The main window of the PFM Editor contains several fields that give general
identifying information about the font. All of these fields appear in the
PFM header structure, which is identical to a font file header. Details of
the field definitions appear in the Microsoft Windows Device Driver
Adaptation Guide. You should always specify at least the Pitch field before
selecting any of the metrics or tables dialogs described in the following
subsections.

The fields appearing in the main window are as follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Description
────────────────────────────────────────────────────────────────────────────
Face Name                         The face name of the font such as Courier.

Char Set                          The character set that the font represents.
                                  The most common values are 0 for Windows
                                  ANSI and 255 for the OEM character set.

                                  In Part 2, "The PCL Driver," additional
                                  character sets for the PCL driver are
                                  defined in Section 11.4.1, "PFM Header,"
                                  as follows: 180 = Math-8; 181 = PI Font;
Field                             Description
────────────────────────────────────────────────────────────────────────────
                                  as follows: 180 = Math-8; 181 = PI Font;
                                  182 = LineDraw; 183 = PC Line; 184 = Tax
                                  Line, and 185 = US Legal.

Pitch                             Two radio buttons: Fixed and Proportional.

Effects                           Three options indicating the appearance of
                                  the font: Italic, Underline, Strikeout.

Font Family                       Six selections: Don't Care, Roman, Swiss,
                                  Modern, Script, and Decorative. The driver
                                  uses the family to classify fonts for
                                  identification and selection purposes. The
                                  terms are documented in the Microsoft
                                  Windows
                                  Device Driver Adaptation Guide.

Points                            The point size of a font, or its height in
                                  units of 1/72 of an inch.
Field                             Description
────────────────────────────────────────────────────────────────────────────
                                  units of 1/72 of an inch.

Weight                            The weight of the font ─ a number from 0
                                  to 1000. 400 represents a normal, medium
                                  font. Larger numbers represent heavier
                                  (bolder) fonts. A more exact
                                  correspondence appears in Part 2, "The PCL
                                  Driver," under Section 11.4.1, "PFM
                                  Header."

Copyright                         A 60-character string containing the font
                                  supplier's copyright notice.




3.2  The File Menu

The File menu contains all the standard Windows File menu items along with
one extra item: Create PCM File... . The following is a list with
descriptions of those items:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Item                              Description
────────────────────────────────────────────────────────────────────────────
New                               Causes the PFM Editor to re-initialize
                                  itself and display an empty, untitled .PFM
                                  file.

Open...                           Displays a standard Open File Name dialog
                                  box. .PFM is the default file extension.

Save                              Saves the .PFM file with the same name as
                                  previously used in a Load or Save
                                  operation. If the file is untitled, the
                                  Save As... dialog appears.

Save As...                        Allows the user to specify a filename
                                  before saving.

Item                              Description
────────────────────────────────────────────────────────────────────────────

Create PCM File..                 Allows the user to create a cartridge
                                  metrics file for the HPPCL driver. For a
                                  more detailed description, see Section 3.6,
                                  "Creating .PCM Files."

Exit                              Exits the PFM Editor.

About...                          Displays an informational dialog box.



As with all applications, the user is given the opportunity to save or
cancel if New, Open, or Exit is invoked when the current file has been saved
but not changed.


3.3  The Metrics Menu

This menu allows you to activate dialog boxes to specify dimensional
information about the font. The Metrics popup menu contains three
selections: Basics..., Extended..., and Effects... .

Basic metrics includes information about character range heights and such
things as average widths, device resolution, and leading.

Extended metrics is detailed information about the geometry of the font,
including such things as baseline, ascents/descents, orientation, scale,
etc.

Effects metrics is information about how to synthesize effects such as
underlining and strikeout. To get to this menu, though, you must first go
through the Extended Metrics dialog box.


3.3.1  The Basic Metrics Dialog Box

You access this dialog by choosing Basics... from the Metrics menu. It
contains information about font size. The dialog box fields are as follows:


╓┌───────────────────────┌───────────────────────────────────────────────────╖
Field                   Description
────────────────────────────────────────────────────────────────────────────
Characters:

First                   The first character in the character set. This is
                        the numeric character code of the first character
                        for which the font contains a printable character.

Last                    The last character in the character set. This is
                        usually 127 for a 7-bit character set or 255 for
                        an 8-bit character set.

Default                 The code of the character printed if the driver is
                        asked to print a character that falls outside the
                        range First through Last.

Break                   The character that delimits words in word wrapping.
                        If an application or the DrawText() function is
                        asked to word wrap a string in a box, it will
Field                   Description
────────────────────────────────────────────────────────────────────────────
                        asked to word wrap a string in a box, it will
                        break the word into multiple lines only at break
                        character positions. This is generally the space
                        character (32 in both ANSI and ASCII).

Leading:

Internal                The leading that appears within the height
                        specified by the height of the font. Diacritical
                        marks appear in this space.

External                The recommended additional space to insert between
                        lines. This space is not already accounted for in
                        the height of the font.

Resolution:

Horizontal              The number of dots-per-inch at which the font was
and Vertical            digitized. For an HP LaserJet, for example, both
Field                   Description
────────────────────────────────────────────────────────────────────────────
and Vertical            digitized. For an HP LaserJet, for example, both
                        of these numbers should be 300.





Widths:

Average                 For proportional space fonts, the average width of
                        all the characters in the font. This field is
                        relabeled All for fixed- pitch fonts, since all
                        fixed-pitch characters have the same width. It is
                        represented in font units. The PFM Editor does not
                        calculate the average width from the width table;
                        it must be explicitly entered. It is generally the
                        width of the lowercase x.

Maximum                 The width in font units of the widest character in
Field                   Description
────────────────────────────────────────────────────────────────────────────
Maximum                 The width in font units of the widest character in
                        the font. Again, this is not calculated from the
                        user width table. For fixed-pitch fonts, this
                        field is not used and is disabled.

Height                  The height in font units of the character cell,
                        including internal leading.

Ascent                  The ascent in font units of the font. The distance
                        from the top of the character cell to the baseline
                        of the font.



With the exception of the width table for proportional fonts, this dialog
fills in the remainder of the Microsoft-defined font file header. The field
definitions are from the Microsoft Windows Device Driver Adaptation Guide.
If the .PFM file is to be of any use, all of these fields must be specified
accurately.

There are also two pushbuttons: OK, which causes the changes to be committed
into the .PFM file, and Cancel, which rolls the .PFM file back to the state
in which it was when the user invoked the menu selection.


3.3.2  The Extended Metrics Dialog Box

The extended font metrics are a more detailed description of the font's
geometry. The major fields are as follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Description
────────────────────────────────────────────────────────────────────────────
Lower Case:

Ascent                            The distance in font units from the
                                  baseline to the top of lowercase ascenders,
                                  typically measured from the lowercase d.

Descent                           The distance in font units from the
Field                             Description
────────────────────────────────────────────────────────────────────────────
Descent                           The distance in font units from the
                                  baseline to the bottom of descenders,
                                  usually specified for lowercase p.

Point Size                        The intended size of the font in twips
                                  (1/20th of a point, or 1/1440 of an inch).

Cap Height                        The height in font units of the font's
                                  uppercase characters, usually taken for
                                  the character H.

X Height                          The height in font units of lowercase
                                  characters, usually the height of the
                                  lowercase x.

Slant                             The angle in tenths of a degree clockwise
                                  from the
                                  vertical.

Field                             Description
────────────────────────────────────────────────────────────────────────────

Master Height                     The size in device units at which the
                                  values in the extent table are exact.

Master Units                      The Master Height field expressed in font
                                  units. If the two are different, then the
                                  device is a linear scaling de-
                                  vice and the application needs to scale
                                  all values by the ratio of the requested
                                  size to this value. (See Section 2.3.4,
                                  "Font Scaling: etmMasterHeight and
                                  etmMasterUnits," for a detailed
                                  description of these two fields.)

Scale:

Min and Max                       The minimum and maximum sizes to which a
                                  linear scaling device can scale a font.

Field                             Description
────────────────────────────────────────────────────────────────────────────

Orientation:

Portrait and Landscape            Specify the orientation of the font, which
                                  may be either or both.



The Master Height, Master Units, and Min and Max Scale fields are used on
devices that can scale fonts linearly to any size. On devices that do not
scale fonts, these numbers should all be equal to the value in the Height
field from the Basic Metrics dialog box.

All these fields come from the EXTTEXTMETRIC structure, which was defined in
Section 2.3.3, "EXTTEXTMETRIC Data Structure."


3.3.3  The Effects Metrics Dialog Box

This menu item is disabled (gray) until you specify the extended metrics.
The information you can then specify in this dialog box tells the driver how
to synthesize effects such as underlining and superscripting while allowing
for the per-font, per-size customization of these effects. It also forms the
remainder of the EXTTEXTMETRIC structure in the .PFM file.

The effects of interest are superscripting, subscripting, underlining,
double underlining, and strikethroughs. Two numbers are required: the
vertical position of the effect and its size. Offsets are measured downward
from the baseline of the font, which means that strikeouts and superscripts
will generally have negative offsets. The size specifies the thickness of
lines in font units for the line effects, or the height in font units for
super- and subscripts. For double underlines, you may specify the upper and
lower lines independently.


3.4  The Tables Menu

This popup menu contains three selections: Widths..., Kerning Pairs..., and
Kerning Track... . Since these are only appropriate for proportional-width
fonts, they are grayed for fixed-pitch fonts.

The width table contains the exact specification, per-character, of the
widths of characters in proportional fonts. Track- and pair-kerning are used
to fine tune character spacing.


3.4.1  The Width Table Dialog Box

The Width Table dialog box has a scrollable list box containing all the
characters and their widths, represented by decimal numbers in font units.
Notice that, since this table is an absolute requirement for all
proportional fonts, you must set the font pitch to proportional and the
first and last characters in the Basics... dialog box before entering a
width table.

Just above the list box is a label number with an edit control next to it.
Whenever a character is selected from the list box, the label changes to the
character's code, and the edit control is changed to its width. The width
can then be changed.

To commit the width change to the width table in the listbox, you must click
on the Width pushbutton. Since Width is the default button in this dialog
box, you can also just press ENTER after working in the edit control box. If
the character is not the last one in the font, clicking on Width or pressing
ENTER also causes the selection to be advanced to the next character, which
enables you to enter quickly the entire width table.


3.4.2  The Pair Kerning Table Dialog Box

You can fine tune character spacing for proportional fonts by using
pair-kerning. The Pair Kerning Table dialog box consists of a list box
containing character pairs and the amount of space to insert or delete
between them. A negative kern amount (given in font units) specifies tighter
spacing, while a positive amount spreads characters out.

The three edit controls are for the From and To characters and the kerning
amount. If you select a kern pair in the list box, the editor displays for
modification the values in the structure.

There are three buttons for manipulating the Pair Kerning Table:


  ■   Add, which adds to the table the kern pair in the edit controls.

  ■   Delete, which removes from the list box the selected kern pair.

  ■   Change, which replaces the selected kern pair with the contents of the
      edit control.


Notice that the Pair Kerning Table is sorted; adding or replacing a pair
does not give it a particular position in the table.

As in the other dialog boxes, the OK button causes the table to be committed
to the .PFM file, and the Cancel button will end the dialog without saving
the changes to the table.


3.4.3  The Track Kerning Table Dialog Box

You enter values into the Track Kerning Table in the same manner as for the
Pair Kerning Table. There are five fields to consider.

For the kerning degree, negative values specify tighter kerning, and
positive values specify looser kerning. The minimum size specifies the
smallest size in font units for which track-kerning applies, and the maximum
size specifies the largest font.

The minimum amount specifies the amount of track-kerning to apply to fonts
of the minimum size and below. The maximum amount is the track-kerning to
apply to all fonts at least as large as the maximum size.


3.5  The Driver Menu

The PCL printer is currently the only supported printer in the Driver menu.
The PCL Driver dialog box contains information specific to the PCL driver
for HP LaserJet-type printers. The fields are as follows:

╓┌──────────────┌───────────────────────────────┌────────────────────────────►
Field          Description
────────────────────────────────────────────────────────────────────────────
Symbol Set     Specifies the HP-defined
Field          Description
────────────────────────────────────────────────────────────────────────────
Symbol Set     Specifies the HP-defined
               symbol set for a font. (See
               the HP LaserJet Printer
               Technical Reference Manual for
               definitions of these symbol
               sets.)  The following are the
               currently defined symbol sets
               (selectable with individual
               radio buttons):

               User Defined
               Roman 8
               Kana 8
               Math 8
               U.S. ASCII
               Line Draw
               Math Symbols
               U.S. Legal
               Roman Ext.
Field          Description
────────────────────────────────────────────────────────────────────────────
               Roman Ext.
               E.C.M.A. 94
               ISO Den/Nor
               ISO U.K.
               ISO France
               ISO Germany
               ISO Italy
               ISO Sweden/Finland
               ISO Spain
               Generic 8
               Generic 7

Mem Usage      An approximation of the amount
               in the printer of memory that
               the soft font requires. This
               is given in Section 11.4.3,
               "Device-Specific Data
               Structure," of Part 2, "The
               PCL Driver," as the following
Field          Description
────────────────────────────────────────────────────────────────────────────
               PCL Driver," as the following
               formula:

               ((sum of all character widths
               + 7) >> 3) * height + 63

Escape String  This is the escape string you
               send to the printer to select
               the font. It may contain any
               PCL commands. You may use the
               following special sequences to
               enter control characters:

               \e                              - escape (ASCII 27, 0x1b)

               \[                              - escape (ASCII 27, 0x1b)

               \n                              - line feed (ASCII 10, 0xa)

Field          Description
────────────────────────────────────────────────────────────────────────────

               \r                              - carriage return (ASCII 13,
                                               0xd)

               \xnn                            - hexadecimal character code

               \nnn                            - octal character code

               Notice that when the PFM
               Editor displays an escape
               string, it converts all
               non-ASCII printing characters
               to the hexadecimal format \xnn.



As in the other dialog boxes, the OK button causes the items to be committed
to the .PFM file, and the Cancel button ends the dialog without saving
changes.


3.6  Creating .PCM Files

The PCL driver uses printer cartridge metric (PCM) files to define
cartridges other than built-in Hewlett-Packard(R) cartridges. .PCM files are
essentially a collection of .PFM files (one for each font in the cartridge).


To make a .PCM file, first create the individual .PFM files for each of the
cartridge fonts. You can create .PFM files easily with the Printer Font
Installer. Simply add the font, which must be in the HPPCL format. The
Printer Font Installer will scan automatically the PCL font and create the
.PFM file. Use the PFM Editor to edit the file. We recommend that you verify
all the fields and values. Also, notice that the Printer Font Installer does
not enter the font escape string. You must do this in the PFM Editor.

After you have created all the .PFM files and saved them to disk in one
directory, choose the File menu's Create PCM File... option to have a dialog
box appear and prompt you for a .PCM filename. Put this file in the same
directory as its constituent .PFM files.

After you enter a filename and click on the OK button, a second dialog box
will appear with the .PCM filename in a static control at the top. The first
edit control in the dialog box enables you to enter the cartridge title,
which must be a non-empty title (i.e., you must fill in the edit control).
This title is the string placed in the cartridge selection list box in the
driver's Printer Setup (device-mode) dialog box. Verify that the correct
font escape string is defined for each .PFM file.

The PFM Editor places a list of .PFM files, that are in the same directory
as the target .PCM file, in a list box on the left side of the dialog box.
You may select one or more of these files and move them to the right-hand
"selected" list box by clicking the Select button (or double-clicking a
filename). You can remove selected .PFM files or place them back in the
left-hand "available" list box by selecting filenames in the same manner in
the right-hand "selected" list box.

When you click the OK button, the .PFM files that appear in the right-hand
list box are placed in the .PCM file. To create the .PCM file, you must
select at least one .PFM file and have a non-empty title string.

When the editor creates the .PCM file, it also creates a text file in the
same directory with the same name and the extension .INI. On the first line
of this .INI file is the title of the cartridge; the list of .PFM files
follows on subsequent lines, one filename per line. Whenever the PCM dialog
box is chosen, the PFM Editor looks for the .INI file and uses the stored
data to initialize the title string and the list of selected .PFM files.

Notice, however, that editing a .PFM file will not cause the .PCM file to be
updated. The PFM Editor cannot directly edit .PCM files. Therefore, if you
make a change in a .PFM file, you must rebuild the .PCM file.


3.7  The PFM Editor Error Messages

The following error messages can appear when using the PFM Editor. A brief
explanation of why it appears is given after each message.


Break character not in character set

The break character must be between the first and last character in the
character set, inclusive.


Can't find filename, ignored

The .INI file for a .PCM file contained a reference to a .PFM file that is
not in the same directory or that does not have the .PFM extension.


Can't open filename, ignored

The given .PFM file was in the current directory when the list box of
available .PFM files was created. However, when the attempt to write the
.PCM file out was made, the .PFM file could not be opened to read it.


Can't write the PCM file

An error occurred while writing to the .PCM file or to the associated .INI
file.


Changing the character range will invalidate the width table

If you enter a width table and, then, change the first and last characters,
the width table will no longer be valid. This really should not occur if you
have a specific font in mind when you create a .PFM file.


Couldn't save file filename

The file specified could not be saved to disk due to an error opening or
writing the file, or to attempting to write over a Read-Only file, or to
running out of disk space.


Default character not in character set

The default character must be between the first and last character in the
character set, inclusive.


Driver information not specified

You attempted to save a file that does not contain PCL driver information.


Error creating the initialization file for filename

The .INI file corresponding to the given file could not be opened.


Error creating the PCM file filename

The .PCM file could not be opened due to a bad filename (such as a
non-existent directory), to a pre-existing Read-Only file of the same name,
or to being out of disk space.


filename contains the wrong driver information version

This is a warning indicating that while the .PFM file appears to be in the
correct format, the driver specific information contains a version number
that this PFM Editor does not support.


filename contains the wrong header version number

This is a warning indicating that the PFM header has a version number that
this PFM Editor does not recognize.


filename does not contain driver information

The .PFM file does not contain a PCL driver structure.


filename does not contain extended text metrics

This is a warning that the .PFM file being read into the PFM Editor does not
contain extended text metrics.


filename has been modified. Save before continuing?

Enables you to save a file or abort an operation before doing something that
will abandon a modified .PFM file, such as choosing New, Open..., or Exit.


filename is not a valid file name

The filename given is invalid because it contains illegal characters or
syntax errors.


filename is not a valid PFM file

The specified file does not contain a .PFM file, or the .PFM file is either
corrupted or from the wrong version.


Proportional font requires a width table

You attempted to save a .PFM file that specifies a proportional font but
does not contain a width table.


Unrecognized device devicename

The PFM contains a device name that the PFM Editor does not recognize. The
only name recognized currently is "PCL/HP Laserjet."


Width table will need to be reentered

This is another warning that changing your character range invalidates your
width table.


Write over original filename?

A file with the same name as the filename you specified in the Save As...
dialog already exists. Click Yes to write over the old file or No to choose
a new name.






Chapter 4  .PFM Files for PostScript Printers
────────────────────────────────────────────────────────────────────────────

This chapter discusses the format of .PFM files designed specifically for
PostScript printers. We recommend that you read Chapter 2, "Printer Font
Metrics (PFM) Files," first for a description of the general format of .PFM
files.


4.1  Format of the PostScript .PFM File

The PostScript .PFM file does not contain a width table. Because PostScript
fonts are scalable, the widths are contained in the extent table. The
structures in the file are organized as follows:


  1.  PFM header structure (PFMHEADER)

  2.  PFM extension structure (PFMEXTENSION), must contain a non-NULL
      pointer to dfExtMetricsOffset, dfExtentTable, and dfDriverInfo

  3.  Driver name pointed to by dfDevice

  4.  Microsoft Windows font name pointed to by dfFace

  5.  Extended Text Metric structure (EXTTEXTMETRIC) pointed to by
      dfExtMetricsOffset

  6.  Extent table pointed to by dfExtentTable

  7.  PostScript font name pointed to by dfDriverInfo

      The file may also contain:

  8.  Pair-kern table pointed to by dfPairKernTable

  9.  Track-kern table pointed to by dfTrackKernTable


This is the recommended organization of the file. The PFM header must be the
first structure in the file and the PFM extension structure must be the
second one. The remainder of the structures may appear in any order. Their
locations are indicated by the offsets in the PFM header and PFM extension
structures.

The Windows PostScript driver assumes all PostScript fonts are scalable
fonts, so it ignores the dfPoints and dfPixHeight fields in the PFM header.
The fields dfAvgWidth and dfMaxWidth are in units of 1000 units-per-em.

Although the PostScript naming convention includes the attributes of the
font (i.e., bold and italic) in the font name, the attributes should be
stripped from the font name and represented in the dfWeight and dfItalic
fields in the PFM header.

The extent table is an array of WORDs containing the unscaled widths of the
characters and assuming 1000 units-per-em. The range of the table should be
from dfFirstChar to dfLastChar. The size of the table should be dfLastChar -
dfFirstChar + 1 WORD.

Pair-kern values should be in the same 1000 units-per-em measurement as the
extents. As of this writing, we do not know of any application that uses the
track-kern table.


4.2  EXTTEXTMETRIC Data Structure

The definition of etmMasterHeight and etmMasterUnits is provided in detail
in Chapter 2, "Printer Font Metrics (PFM) Files." The PostScript driver
assumes the following values for each font:

dfVertRes = 300

etmMasterHeight = 300

etmMasterUnits = 1000

In other words, the driver assumes all fonts use Adobe's standard 1000
units-per-em method for describing a font. You must build the extent table
based upon 1000 units-per-em to be consistent with this restriction in the
driver.

The driver also assumes that the font may be scaled to any point size the
application requests. We recommend that the true scaling range of the font
be indicated in etmMinScale and etmMaxScale (in device units, at 300 dpi).
Even though the driver currently ignores these fields, it may use them in
the future.

Because the Windows PostScript driver assumes all PostScript fonts are
scalable fonts, it ignores the etmPointSize field. Please notice that
etmSize is not the point size but, rather, the size (i.e., the number of
bytes) of the EXTTEXTMETRIC structure.

As of this writing, we do not know of any application that uses the fields
in the EXTTEXTMETRIC structure except for etmKernPairs. If your font
contains kern pairs, you must fill in the EXTTEXTMETRIC structure to
indicate the number of kern pairs. Do not leave the other fields blank; fill
them in with reasonable values in the event an application does use them.


4.3  Driver-Specific Data Structure

The driver-specific data structure pointed to by dfDriverInfo is a
NULL-terminated string containing the PostScript name for the font. There
are really two names for the font:


  1.  The Windows name for the font, such as "Tms-Rmn,"  which appears in
      the font list in the application's font dialog box.

  2.  The PostScript name for the font, which can vary by printer
      manufacturer and  which the driver sends to the printer to select the
      font.


Both strings must be NULL-terminated. The Windows name for the font is
pointed to by dfFace and the PostScript name for the font is pointed to by
dfDriverInfo.






Chapter 5  .PFM Files for PCL Printers
────────────────────────────────────────────────────────────────────────────

This chapter discusses the format of .PFM files designed specifically for
PCL printers. If you have not already done so, we recommend that you read
Chapter 2, "Printer Font Metrics (PFM) Files," first for a general
description of .PFM files.


5.1  Format of the PCL .PFM File

The structures in the PCL .PFM file are organized as follows:


  1.  PFM header structure (PFMHEADER)

  2.  For variable-width fonts, an array of character widths from
      dfFirstChar to dfLastChar

  3.  PFM extension structure (PFMEXTENSION)

  4.  Driver name pointed to by dfDevice

  5.  Microsoft Windows font name pointed to by dfFace

      The file may also contain:

  6.  Extended Text Metric structure (EXTTEXTMETRIC) pointed to by
      dfExtMetricsOffset

  7.  Driver-specific structure pointed to by dfDriverInfo

  8.  Pair-kern table pointed to by dfPairKernTable

  9.  Track-kern table pointed to by dfTrackKernTable


This is the recommended organization of the file. The PFM header must be the
first structure in the file followed by the width table and the PFM
extension structure. The remainder of the structures may appear in any
order. Their locations are indicated by the offsets in the PFM header and
PFM extension structures.

The width table is present if dfPixWidth is zero, which indicates a
variable-width font. (Otherwise, for fixed-width fonts, the width of all the
characters in the font equals the value in dfPixWidth.) The width table is
an array of WORDs containing the widths in device units of characters in the
range from dfFirstChar to dfLastChar. The width of a character c can be
located using the formula:

  width = WidthTable [c - dfFirstChar]

The size of the table is dfLastChar - dfFirstChar + 2 WORDs. The last WORD
is not used and is set to NULL; it should be present for compatability with
the Windows screen-font file format.


5.2  EXTTEXTMETRIC Data Structure

As of this writing, we do not know of any application that uses the fields
in the EXTTEXTMETRIC structure except for etmKernPairs. If your font
contains kern pairs, you must fill in the EXTTEXTMETRIC structure to
indicate the number of kern pairs. Do not leave the other fields blank; fill
them in with reasonable values in the event an application does use them.

In the future, there will be .PFM files that describe scalable PCL fonts. To
guarantee that your raster fonts are never interpreted as scalable fonts,
make sure that the fields for scaling information in the EXTTEXTMETRIC
structure indicate a non-scaling font:

etmMasterHeight = etmMasterUnits = etmMinScale = etmMaxScale = dfPixHeight

See Section 5.5, "Scalable PCL Fonts," for information on how to write a
.PFM file for scalable PCL fonts.


5.3  Driver-Specific Data Structure

The SYMBOLSET field is defined as follows:

  typedef enum{
   epsymUserDefined,/* Enumerated type SYMBOLSET */
   epsymRoman8,
   epsymKana8,
   epsymMath8,
   epsymUSASCII,
   epsymLineDraw,
   epsymMathSymbols,
   epsymUSLegal,
   epsymRomanExt,
   epsymISO_DenNor,
   epsymISO_UK,
   epsymISO_France,
   epsymISO_German,
   epsymISO_Italy,
   epsymISO_SwedFin,
   epsymISO_Spain,
   epsymGENERIC7,
   epsymGENERIC8,
   epsymECMA94
   }SYMBOLSET;

The TRANSTABLE field is defined as follows:

  typedef struct{
   /* type TRANSTABLE */
   SYMBOLSET symbolSet;  /* kind of translation table */
   DWORD offset;   /* location of user-defined table */
   WORD len;   /* length (in bytes) of table */
   BYTE firstchar,lastchar;  /* table range */
   }TRANSTABLE

The following is the driver-specific data structure pointed to by
dfDriverInfo :

  typedef struct{
   WORD epSize;  /* size of this data structure */
   WORD epVersion;  /* number indicating version of struct */
   DWORD epMemUsage; /* amt of memory font takes up in printer */
   DWORD epEscape;  /* pointer to escape that selects the font */
   TRANSTABLE xtbl;  /* character set translation info */
   }DRIVERINFO;

The fields in the structure are defined as follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Definition
────────────────────────────────────────────────────────────────────────────
epSize                            The size of this structure (number of
                                  bytes)

epVersion                         The version of this structure, currently 1

epMemUsage                        The amount of printer memory, in bytes,
                                  that this font uses

epEscape                          The byte offset from the beginning of the
                                  file to an escape string invoking the font.

xtbl.xtSymbolSet                  Symbol set ID, such as epsymRoman8 or
                                  epsymECMA94

xtbl.xtOffset                     The byte offset from beginning of the file
                                  to a custom translation table

xtbl.xtLen                        The size of the custom translation table
Field                             Definition
────────────────────────────────────────────────────────────────────────────
xtbl.xtLen                        The size of the custom translation table

xtbl.xtFirstChar                  The first character translated in the
                                  table

xtbl.xtLastChar                   The last character translated



The purpose of the translation table is to enable the driver to translate
the font from the character set indicated in the dfCharSet field into the
printer-specific character set. When xtbl.xtSymbolSet equals
epsymUserDefined, the driver would use the custom translation table pointed
to by xtbl.xtOffset. However, the Windows PCL driver currently ignores all
fields in the TRANSTABLE structure except xtbl.xtSymbolSet. In other words,
even if you put in a custom translation table for future support, the
current driver will ignore it.

The Windows PCL driver supports five possible character translations. It
determines which internal translation table to use based upon the value of
xtbl.xtSymbolSet. The tables are as follows:

╓┌───────────────────────────┌───────────────────────────────────────────────╖
Symbol Set                  Translation Table
────────────────────────────────────────────────────────────────────────────
epsymRoman8                 Roman8_Trans
epsymUSASCII                USASCII_Trans
epsymGENERIC7               GENERIC7_Trans
epsymGENERIC8               GENERIC8_Trans
epsymECMA94                 ECMA94_Trans


The translation tables are stored in TRANS.H. For epsymRoman8, epsymUSASCII,
and epsymECMA94, the driver attempts to derive Windows ANSI from the symbol
set. For epsymGENERIC8 and epsymGENERIC7, the driver simply lets an 8- or
7-bit symbol set pass through to the printer unchanged.

The driver assumes the width table in the .PFM file contains the widths of
the characters after translation. If you set epsymRoman8, epsymUSASCII, or
epsymECMA94 for xtbl.xtSymbolSet, you must use the appropriate translation
table in TRANS.H to do an inverse translation when building the width table.


A portion of the translation table for epsymRoman8 looks like this:

  #define HP_DF_CH ((BYTE) 0x7F)

  unsigned  char  <+>Roman8_Trans[] = {
   HP_DF_CH, NULL,   /*  80  */
   HP_DF_CH, NULL,   /*  81  */
   ...
   'Y' ,     0xa8,  /*  dd  */
   0xf0,     NULL,  /*  de  */
   0xde,     NULL,  /*  df  */
   0xc8,     NULL,  /*  e0  */
   ...
   0xef,     NULL  }; /*  ff  */

The table translates characters in the range from 128 to 255. The driver
uses the character it receives from the application to index into the
translation table. It replaces the character with the first entry in the
table. If the second entry is non-NULL, it overstrikes the first character
with the second character.

For example, when the driver detects character hex 0xDD (i.e., the Y-acute
(Y) in the text stream), the driver will output a capital "Y" overstruck by
the acute accent. When the overstrike character is present, the driver
guarantees that the width of the character pair equals the width of the
first character.

If the driver-specific data structure is not present or xtbl.xtSymbolSet
equals a symbol set other than epsymRoman8, epsymUSASCII, epsymECMA94,
epsymGENERIC8, or epsymGENERIC7, the driver will default to epsymGENERIC8
translation if dfLastChar is greater than 127 (an 8-bit font). Otherwise, it
will use the epsymGENERIC7 translation.


5.4  Kerning Tables

The pair-kern table follows the format described in Chapter 2, "Printer Font
Metrics (PFM) Files." The kern amounts are in the same units as the
character widths.

As of this writing, we do not know of any application that uses the
track-kern table.


5.5  Scalable PCL Fonts

Currently, the Windows PCL driver supports only non-scaling PCL fonts. In
the future, however, it may support scalable fonts if PCL printers with
scaling fonts become available. The driver will detect scalable fonts by
examining the etmMinScale and etmMaxScale fields in the EXTTEXTMETRIC
structure. If they are equal, it will assume a non-scaling font. The font
vendor should provide a .PFM file that follows this format:


  1.  PFM header structure (PFMHEADER). The dfPixHeight field must contain
      the height of a default font size (same as 12 points).

  2.  For variable-width fonts, an array of character widths from
      dfFirstChar to dfLastChar for the default point size (dfPixHeight)

  3.  PFM extension structure (PFMEXTENSION)

  4.  Driver name pointed to by dfDevice

  5.  Windows font name pointed to by dfFace

  6.  Extended Text Metric structure (EXTTEXTMETRIC) pointed to by
      dfExtMetricsOffset

  7.  Extent table pointed to by dfExtentTable

  8.  Device-specific data structure pointed to by dfDriverInfo. The
      epEscape field must be non-NULL (that is, a printer escape must be
      provided).


Optionally, pair-kern and track-kern tables may be provided. The default
font size and width table should be provided for consistency with the
existing driver. A future release of the driver will check for the
difference between etmMinScale and etmMaxScale. If they differ and
dfExtMetricsOffset is non-NULL, the driver will assume a scalable font.

An extent table must be supplied for scalable fonts. The extent table is an
array of words containing the unscaled widths of the characters. The range
of the table should be from dfFirstChar to dfLastChar. The size of the table
should be dfLastChar - dfFirstChar + 1 WORD.

The driver will scale the characters using the formulas described in Section
2.3.4, "Font Scaling: etmMasterHeight and etmMasterUnits." The driver will
not support the ENABLERELATIVEWIDTHS escape, as this would be difficult to
support with scaling and non-scaling fonts intermixed (scaling fonts use
font units; non-scaling fonts use device units).

The driver will assume dfVertRes equals 300 dpi. Remember that
etmMasterHeight, etmMinScale, and etmMaxScale must be expressed in device
units.

If the target printer does not force its widths to 300 dpi units (i.e.,
etmMasterUnits does not equal etmMasterHeight), the driver will attempt to
correct for roundoff error between the printer's units and the driver's
imposed 300 dpi units. The driver will correct for the error by maintaining
a running roundoff value during output of a single line of text.

You must provide the driver-specific data structure. As described earlier,
xtbl.xtSymbolSet must be equal to epsymRoman8, epsymUSASCII, epsymECMA94,
epsymGENERIC8, or epsymGENERIC7. Remember to use an inverse translation of
the tables provided in TRANS.H to build the extent table if you select
epsymRoman8, epsymUSASCII, or epsymECMA94.

You must also provide an escape string pointed to by epEscape in the
driver-specific data structure. The driver will send this escape to the
printer to select the font.

If pair or track kerns exist, they should use the same units as the
character widths in the extent table.






PART II  The PCL Driver
────────────────────────────────────────────────────────────────────────────

This part presents technical aspects of the version 3.3 Microsoft Windows
PCL / HP LaserJet printer driver. It should be read by technical support
specialists, font vendors, Windows application developers, and advanced
users. Because most of the issues with PCL printing under Windows involve
fonts, most of this document is dedicated to a discussion of fonts and font
management.

We assume that the audience for this document has knowledge of how to use
the PCL driver's Printer Font Installer (documented in Part 1, "Fonts," and
under Help in the "Printer Font Installer" dialog box), build a Windows .PFM
(Printer Font Metrics) file, and use MS-DOS(R) and a text editor.

Knowledge of the Printer Font Installer is the basic requirement for
understanding Chapters 8 through 12. Knowledge of .PFM files is important
for developers and font vendors reading the sections involving .PFM file
generation. Knowledge of MS-DOS is important for executing the
recommendations outlined in Chapter 12, "Installer Scenarios."






Chapter 6  Overview of the PCL Driver
────────────────────────────────────────────────────────────────────────────

The version 3.3 Microsoft Windows PCL/HP LaserJet printer driver includes
many enhancements over the previous versions, along with a few bug fixes.
The following is a brief list highlighting the most important ones:


  1.  Carried over from version 3.2 was the ability to add additional font
      support for cartridges by using the Soft Font Installer and for
      providing an easy mechanism, with our new PFM Editor, for technicians
      with some font experience to create the information file needed by the
      driver to support the cartridge.

      With the PFMEDIT utility, printer and font vendors will find it easy
      to create .PFM files by simply plugging in the relevant font data.
      They can then define all the fonts in a cartridge in multiple .PFM
      files and consolidate this information into one .PCM file.

      Once the .PCM file is installed, you can "Exit" to the main
      device-mode dialog box and see the cartridge listed at the end of the
      "Cartridges" list box. The cartridge can now be selected in the same
      manner as the other cartridges listed in the box.

  2.  The name of the Soft Font Installer was changed to the Printer Font
      Installer to better describe its versatility. The installer was also
      removed from the driver and made into a separate dynamic-link library
      (DLL) called FINSTALL.DLL.

  3.  All the cartridge font information was removed from the driver and
      placed into individual Printer Cartridge Metrics (PCM) files. Several
      .PCM files are prebuilt into the driver.

  4.  We enhanced the dialog box interface for the main driver and the
      Printer Font Installer for the following reasons:

      ■   To take advantage of new controls supported in Windows 3.0.

      ■   To make the interface more consistent with Presentation Manager
          printer dialogs.


  5.  We fine tuned the driver to use less fixed memory and did other
      performance tuning.

  6.  We provided support for the new driver initialization API, which is
      documented in the Microsoft Windows Software Development Kit.

  7.  We provided support for raster compression on the HP LaserJet IIP.








Chapter 7  WIN.INI Flags
────────────────────────────────────────────────────────────────────────────

This chapter describes the flags that the Microsoft Windows PCL / HP
LaserJet printer driver writes to and reads from the WIN.INI file. Most of
these flags are controlled either directly or indirectly by the user via the
driver-specific device-mode dialog box and the Printer Font Installer.
Normally, the user should have no need to modify these flags manually.

The options and white_text flags are the only flags to which the user does
not have access via a dialog box. The user would have to edit the WIN.INI
file to modify these flags.

The driver places and updates flags in WIN.INI via Windows functions.
However, notice that:


  1.  The driver has no control over the order of entries in the WIN.INI
      file.

  2.  The driver does not currently "delete" entries from the WIN.INI file.


The order of entries in the WIN.INI file is insignificant and has no effect
on the operation of the driver. The driver does not delete an entire entry
line from WIN.INI; it removes only everything to the right of the equal sign
(=). The title text to the left of the equal sign remains there forever, or
until the user manually removes it.


7.1  Summary of Flags

The WIN.INI flags are summarized below. A detailed description of each flag
and its use is provided in the next section.

Flag                              Description
────────────────────────────────────────────────────────────────────────────
cartindexn                        The cartridge(s) selected in the
                                  cartridge listbox

Cartridgen                        The name of a .PCM file

copies                            The number of uncollated copies of each
                                  page

duplex                            The duplex printing option (0=simplex)

<filename>                        Used by Printer Font Installer to track
                                  permanently downloaded font filenames

Flag                              Description
────────────────────────────────────────────────────────────────────────────


FontSummary                       The name of the font information file
                                  built by the driver

fsvers                            The version of the FontSummary file

MaxFontSummary                    The maximum allowable size (in Mb) of
                                  the FontSummary file

numcart                           The number of cartridges the user has
                                  selected

options                           On/off settings for printer rest, force
                                  load of soft font information, and allow
                                  vertical clipping

orient                            Printer orientation

paper                             Paper size selection

prtcaps                           A bit field representing the printer
                                  capabilities

prtindex                          The index to the currently selected
                                  printer (includes memory option)

prtresfac                         The printer resolution factor
                                  (determines resolution in dots-per-inch)

sfdir                             The path to the directory containing
                                  soft fonts

sfdlbat                           The path and filename of the batch file
                                  that downloads permanent fonts to the
                                  printer

sfdlstyle                         The manner in which permanent soft fonts
                                  should be downloaded

SoftFontn                         The soft font entry or entries in the
                                  WIN.INI file

SoftFonts                         The number of soft fonts and cartridges
                                  listed in the WIN.INI file

tray                              The input paper tray

white_text                        Used for setting the driver's
                                  sensitivity to detecting white text


7.2  Details on Flags

This section contains a detailed description of each flag and how to use it.



7.2.1  Cartindexn

This flag provides the cartridge selected in the cartridge list box. The
number of selectable cartridges depends on the printer. The driver is
capable, though, of selecting up to eight cartridges at one time.

The following is the flag for the first cartridge the user selects:

cartindex=n

The flag for the second cartridge that the user selects is as follows:

cartindex1=n

Subsequent flags are cartindex2, cartindex3, cartindex4, cartindex5,
cartindex6, and cartindex7. The number of flags in use (i.e., the number of
cartridges the user has selected) is contained in the numcarts flag.

The cartridge index (n in the above examples) is a number representing the
selected font cartridge. The cartridge index depends on the order in which
the user selects available cartridges or installs new ones.


7.2.2  Cartridgen

This flag is used in conjunction with the cartindexn flag. If another value
is used in the cartindexn flag, the PCL driver looks for a cartridge<number>
= PCMfile entry, which defines an external cartridge selected by the driver.


For example, cartindex=100 causes the driver to select the cartridge defined
by the Cartridge100= line.


7.2.3  Copies

This flag provides the number of uncollated copies of each page that the
driver should request from the printer. It may be a number between 1 and 99.
"Copies" is a printer feature; the driver sends down one image of the page
and requests the printer to repeat it for the requested number of copies.
For example, if the user specifies two copies of a three page document, the
driver will print two copies of page 1, two copies of page 2, and two copies
of page 3 (i.e., the printing order would be pages 1, 1, 2, 2, 3, 3).

Collated copies (printing order 1, 2, 3, 1, 2, 3) is not a function of the
driver. It is a function of the application. The application sends an image
of the page to the printer for each copy requested, which is considerably
slower than printing uncollated copies.

The driver always writes "copies=1" to the WIN.INI file, even if the user
requested more than one copy. The driver remembers that the user requested
more than one copy (via the driver's memory-resident device-mode structure),
but it does not write the actual number of copies requested to the WIN.INI
file. The result is the driver will print the desired number of copies as
long as the user stays in Windows. If the user exits Windows and re-enters,
the driver reverts back to 1 copy.

If the user manually changes the copies= line in the WIN.INI file before
entering Windows, the driver will use that as the default number of copies.
However, the next time the user pulls up the driver-specific dialog, the
driver will overwrite the user's manually entered value with a 1. The next
time the user exits and re-enters Windows, the default number of copies will
revert to 1.


7.2.4  Duplex

This flag contains a value between 0 and 3 that indicates the type of duplex
printing:

╓┌──────────────┌──────────────┌─────────────────────────────────────────────╖
Value ver 3.2  Value ver 3.3  Printing option
────────────────────────────────────────────────────────────────────────────
0              1              Simplex
1              2              Duplex/Vertical binding
2              3              Duplex/Horizontal binding


Duplexing is the ability of the printer to print on both sides of the page.
Vertical (or long-edge) binding means that the printer turns the sheet along
the long edge, horizontal (or short-edge) binding means that the printer
turns the sheet along the short edge. See Figure 7.1 for examples of
vertical and horizontal binding.

(This figure may be found in the printed book).


7.2.5  <Filename>

The <filename> flag is used by the PCL driver's Printer Font Installer to
keep track of the names of permanently downloaded font files. In the
Window's convention for listing soft fonts (described in Section 7.2.19,
"SoftFontn"), a permanently downloaded font file is specified by a soft font
entry without a download file. The installer stores the name under the
<filename> flag. For example, SoftFontn = PFM File and, then, PFM File =
Download File.


7.2.6  FontSummary

This flag is the name of the font information file that the driver builds.
The file contains the internal font data structure used by the driver.
Because it may take a long time to build this data structure, the driver
saves it to file whenever it builds it. The driver constructs the name of
the file from the prefix "FS" combined with the port name. It then truncates
the resultant name to eight characters (maximum MS-DOS filename length) and
concatenates the .PCL file extension to the name. For example, the
FontSummary file for LPT1 is called FSLPT1.PCL.

The driver maintains a different copy of the data structure in the
FontSummary file for every configuration the user has selected from the
driver-specific dialog. For example, if the user changed the printer in the
printer list box, the driver will build a new font data structure and add it
to the FontSummary file. If the user reverts to the originally selected
printer, the driver will revert to the original font data structure (still
in the FontSummary file).

The driver maintains a "most recently used" list of the data structures in
the FontSummary file. It will delete the least recently used structures to
shorten the size of the FontSummary file if necessary. By default, the
driver limits the file to 100K, but the user may change it with the
MaxFontSummary flag.

The driver also maintains a different FontSummary file for every port.
Because the user may have loaded soft fonts or cartridges under certain
ports, the font information may change from port to port.

If the user has loaded soft fonts, it may take the driver a long time to
build its internal font data structure, which is why the structure is saved
to file once it is built. If the user has more than 15 soft fonts loaded
under a given port, the driver will show a "Building font database" message
whenever it has to build its font data structure. When the driver reads the
font data structure from the FontSummary file, it will not show the
"Building font database" message.

The driver places the FontSummary file in the directory that contains the
driver executable file HPPCL.DRV. For example, a typical entry for the PCL /
HP LaserJet on LPT1 would be:

  FontSummary=C:\WINDOWS\FSLPT1.PCL


7.2.7  Fsvers

The FontSummary file version number is a value that starts at 1 and is
incremented every time the driver modifies the FontSummary file. The value
of fsvers resides in both the WIN.INI file and the header of the FontSummary
file. The driver verifies that the two version numbers are the same every
time it attempts to read a font data structure from the FontSummary file. If
the version numbers are different, then the driver discards the FontSummary
file and builds a new one.

This flag exists primarily for the Printer Font Installer. Whenever the user
modifies soft font information via the installer, it increments the value in
fsvers. This causes the driver to rebuild its internal font database instead
of reading an invalid one from the FontSummary file.


7.2.8  MaxFontSummary

The MaxFontSummary flag is the maximum allowable size (in kilobytes) of the
FontSummary file. The driver keeps a "most recently used" list of the
internal font databases it builds and saves to the FontSummary file. It
deletes the least recently used structures to ensure that the file size is
less than MaxFontSummary.

The size of the FontSummary file depends upon the number of soft fonts the
user has loaded. On the average, the file will range from 3 to 10 kilobytes.
By default, the maximum allowable size of the file is 100K.

If MaxFontSummary is 1 or greater, the minimum FontSummary file size is
equal to the size of the most recently used font data structure. In other
words, if there is only one data structure in the file, the driver will not
trim the FontSummary file even if its size exceeds MaxFontSummary.

To force the driver never to build a FontSummary file, the user should add
"MaxFontSummary=0" to the driver-specific section of the WIN.INI file.


7.2.9  Numcart

The numcart flag contains the number of cartridges the user has selected. If
it is zero, no cartridges have been selected (i.e., "none" in the cartridge
list box).

If it is 1, then the flag cartindex contains the index to the selected
cartridge. If it is 2, then cartindex and cartindex1 contain the cartridge
indexes. This pattern repeats up to cartindex7 for the eighth cartridge
selected.

The driver can allow the user to select up to eight cartridges at one time.
However, the number of cartridges the driver does allow the user to select
depends upon the printer selected in the printer list box.

You can deteremine the number of cartridges that a printer supports by
selecting the appropriate printer name from the PCL/HP LaserJet dialog box.
The maximum number of cartridges supported is indicated above the cartridges
list.


7.2.10  Options

The options flag is a bit-field of on/off settings. The bits (in
hexadecimal) and their meaning are as follows:

╓┌───────┌───────────────────────────────────────────────┌───────────────────╖
Value   Meaning                                         Default setting
────────────────────────────────────────────────────────────────────────────
Value   Meaning                                         Default setting
────────────────────────────────────────────────────────────────────────────
0x0002  Reset the printer (ESC + E) between print jobs  ON
0x0004  Force the driver to load soft fonts             OFF
0x0008  Enable vertical text clipping                   OFF
────────────────────────────────────────────────────────────────────────────


The default options value is 0x0003.

To modify the other bits, the user must edit the WIN.INI file. Here are some
examples:


  ■   To disable printer reset between jobs:

      options=2

  ■   To force the driver to load soft fonts on a standard LaserJet, as well
      as options 1 and 2:

      options=7  (4+2+1)

  ■   To enable vertical text clipping, as well as options 1 and 2:

      options=11  (8+2+1)

  ■   To force the loading of soft fonts and to enable vertical text
      clipping, as well as everything else:

      options=15  (8+4+2+1)


By default, the driver always resets the printer between print jobs if bit 1
is set. This clears any macros and temporarily downloaded fonts that resided
in the printer's memory before the job was sent. If the user does not want
to have the printer reset between print jobs, this bit may be set to zero.

────────────────────────────────────────────────────────────────────────────
NOTE

The driver always assumes it has all the printer's memory available to it to
print the job. It also always assumes it must download any temporary soft
fonts in the job.
────────────────────────────────────────────────────────────────────────────

The "force the driver to load soft fonts" bit causes the driver to load soft
font information even for printers that cannot handle soft fonts. Normally,
the driver loads soft font information based upon the printer's ability to
handle them. However, sometimes users list .PFM files for cartridge fonts or
printer-resident fonts that the driver does not know about (for more
information on this topic, see Section 12.7, "Setting Up .PFM Files for
Resident and Cartridge Fonts"). In this situation, the user would want the
driver to load soft font information even on a printer that does not
normally handle soft fonts.

Enabling this bit will cause the driver to assume that the printer can
handle all the soft font information listed in the WIN.INI file. In other
words, if there are normal soft fonts listed in WIN.INI along with the
special .PFM files for cartridge or printer-resident fonts, the driver will
load all the fonts. If the user selects one of the real soft fonts, the
driver will attempt to download it to the printer.

Because PCL does not allow text clipping, the driver must simulate text
clipping for the application. Text clipping is the ability of the driver to
not print text that lies outside of a clip region defined by the
application. The driver always clips text horizontally, but it only clips
text vertically if the "enable vertical text clipping" bit is set.

The driver clips text in an all-or-none fashion. If any part of the letter
is outside of the clip rectangle, the whole letter is not printed. If any
part of the line is on the top or bottom edge of the clip rectangle, the
whole line is not printed (if vertical text clipping is enabled).

In most cases, vertical text clipping is unnecessary. For example, if a user
modifies the height of a row in Microsoft Excel by a small amount, the
driver will (vertically) clip all the text in that row and not print it.
This can be confusing to the user. Therefore, it is best to set the driver
to print the text in this case.

However, Aldus PageMaker's clipping logic assumes that the driver can clip
partial lines. If any part of the line is within the clip rectangle,
PageMaker will send it to the driver. There may be situations (most likely
to occur if the user is printing a tiled publication) in which PageMaker
will send a line to the driver that straddles the top or bottom of the page
image area. If vertical text clipping is disabled, the driver will send the
line to the printer. Since it is beyond the printer's image area, the
printer will randomly print the line somewhere on the page. This problem may
be corrected by enabling vertical text clipping which will simply clip the
line and not print it.


7.2.11  Orient

The orient flag is the orientation in which the document should be printed.
The values are as follows:

╓┌──────────────┌──────────────┌─────────────────────────────────────────────╖
Value ver 3.2  Value ver 3.3  Orientation
────────────────────────────────────────────────────────────────────────────
15             1              Portrait
16             2              Landscape



7.2.12  Paper

The paper variable selects the paper size on which to print. The values are
as follows:

╓┌──────────────┌──────────────┌─────────────────────────────────────────────╖
Value ver 3.2  Value ver 3.3  Paper
────────────────────────────────────────────────────────────────────────────
20             1              Letter
21             9              A4
22             5              Legal
23             13             B5
24             7              Executive
25             8              A3
26             4              Ledger



7.2.13  Prtcaps

This flag is a bit-field of the capabilities of the currently selected
printer. The driver reads its value from an internal data structure; it
never reads this flag from the WIN.INI file. It then writes its value to the
WIN.INI file so other applications may read it.

This flag exists for applications that need to know the capabilities of the
printer that the user has selected. For example, font generation utilities
may need to know if the printer can handle soft fonts, or if the printer can
handle soft fonts above 30 points.

The values of this field changed between the version 3.0 and 3.1 driver. The
fields that represented paper information in the 3.0 driver were removed.
Two new fields (for handling envelope feed) were added where paper
information fields used to exist. The definition of some fields was slightly
modified.

The old list of capabilities bits (in hexadecimal) was as follows:

╓┌───────┌───────┌───────────────────────────────────────────────────────────►
Status  Value   Definition
────────────────────────────────────────────────────────────────────────────
        0x0001  Printer has capabilities of a standard LaserJet
Status  Value   Definition
────────────────────────────────────────────────────────────────────────────
        0x0001  Printer has capabilities of a standard LaserJet

        0x0002  Printer has capabilities of a LaserJet Plus

        0x0004  Printer has capabilities of a LaserJet 500

        0x0008  Lower tray is handled

        0x0010  Printer does not support downloadable fonts

        0x0020  Manual feed is not supported

        0x0040  Printer cannot support internal bit stripping

old     0x0080  Printer can handle B5 paper

old     0x0100  Printer emulates an HP LaserJet

old     0x0200  Printer can handle Exec paper
Status  Value   Definition
────────────────────────────────────────────────────────────────────────────
old     0x0200  Printer can handle Exec paper

old     0x0400  Printer can handle A3 paper

old     0x0800  Printer can handle ledger paper

        0x1000  Printer can print duplex

        0x2000  Printer selects paper bin based on paper size (auto paper
                select)

        0x4000  Printer can print fonts in any orientation (auto font
                rotation)

old     0x8000  Printer uses new paper select strings

────────────────────────────────────────────────────────────────────────────



The new list of capabilities bits (in hexadecimal) is as follows:

╓┌───────┌───────┌───────────────────────────────────────────────────────────►
Status  Value   Definition
────────────────────────────────────────────────────────────────────────────
        0x0001  Printer has capabilities of a standard LaserJet

        0x0002  Printer has capabilities of a LaserJet Plus

        0x0004  Printer has capabilities of a LaserJet 500

        0x0008  Lower tray is handled

        0x0010  Printer does not support downloadable fonts

        0x0020  Manual feed is not supported

        0x0040  Printer cannot support internal bit stripping

new     0x0080  Printer supports manual/envelope feed
Status  Value   Definition
────────────────────────────────────────────────────────────────────────────
new     0x0080  Printer supports manual/envelope feed

new     0x0100  Printer is an HP PCL emulation printer

new     0x0200  Printer supports new (LaserJet IID) envelope feed

new     0x0400  Printer can print duplex like the LaserJet IID

new     0x0800  Printer has white rules and compression like the LaserJet
                IIP

        0x1000  Printer can print duplex

        0x2000  Printer selects paper bin based on paper size (auto paper
                select)

        0x4000  Printer can print fonts in any orientation (auto font
                rotation)

Status  Value   Definition
────────────────────────────────────────────────────────────────────────────

new     0x8000  Printer has the capabilities of a LaserJet Series II

────────────────────────────────────────────────────────────────────────────



The bits for envelope feed are new to the version 3.1 driver. Bit 0x0080 is
set if the printer selects envelopes using the manual/envelope feed escape
defined in the HP LaserJet Technical Reference Manual. Even though most HP
printers and clones support this escape, the bit is set only for printers
that actually have an envelope feed attachment for the printer.

The second envelope feed escape, bit 0x0200, is set for the HP LaserJet IID.
The driver uses the HP-defined escape, which is special for this printer's
envelope feeder.

The second duplex bit is also new to the version 3.1 driver. The first
duplex bit, 0x8000, supports duplex for the LaserJet 2000. The second duplex
bit, 0x0400, supports duplex in the same manner that the LaserJet IID prints
two-sided pages.

As stated earlier, the driver writes only the prtcaps flag to the WIN.INI
file. It reads it from its internal data structure, based upon the currently
selected printer.

If the prtcaps flag is not present, outside applications should assume that
the capabilities of the standard LaserJet are in use.


7.2.14  Prtindex

The prtindex flag is the index to the currently selected printer.

As printers are added, the index values will shuffle. No application outside
of the PCL driver should access these numbers. Applications that want to
determine the capabilities of the selected printer should look at the
prtcaps flag.


7.2.15  Prtresfac

The prtresfac flag is the printer resolution factor. 300 dpi shifted right
by this number yields the printer resolution. Possible values are as
follows:

Value                             Resolution
────────────────────────────────────────────────────────────────────────────
0                                 300 dpi

1                                 150 dpi

2                                 75 dpi


7.2.16  Sfdir

The sfdir flag is the path to the directory containing the soft fonts. This
is typically C:\PCLFONTS, C:\PCLPFM, or C:\FONTS.


7.2.17  Sfdlbat

The sfdlbat flag contains the path and name of the batch file that downloads
permanent soft fonts to the printer. The Printer Font Installer generates
this file whenever the user sets up permanent soft fonts.

A typical entry would look like the following:

  sfdlbat=C:\PCLPFM\SFLPT1.BAT

The name of the file is constructed from the prefix "SF" combined with the
port name. The resultant name is truncated to eight characters (maximum
MS-DOS filename length) and the .BAT file extension is concatenated to the
name.


7.2.18  Sfdlstyle

The sfdlstyle flag is the manner in which soft fonts should be downloaded.
This flag is a bit-field, and the values (in hexadecimal) are as follows:

Value                             Meaning
────────────────────────────────────────────────────────────────────────────
0x10                              Download fonts "now" (when the user
                                  exits the installer)

0x20                              Download fonts when the user turns on
                                  the computer

Potential sfdlstyle values would be as follows:


  ■   Do not download fonts:

      sfdlstyle=0

  ■   Download fonts at startup only:

      sfdlstyle=32

  ■   Download fonts when the user exits the installer and at startup:

      sfdlstyle=48



7.2.19  SoftFontn

This is the soft font entry in the WIN.INI file. The format for listing soft
fonts in the WIN.INI file is a Microsoft Windows standard (i.e., all printer
drivers should list soft fonts in this manner). This format is described in
Part 1, "Fonts." The mechanism is described briefly here. A typical soft
font entry would look like the following example:

  SoftFonts=9
  SoftFont1=C:\PCLFONTS\OPPR0090.PFM
  SoftFont2=C:\PCLFONTS\OPPB0090.PFM
  SoftFont3=C:\PCLFONTS\OPPI0090.PFM
  SoftFont4=C:\PCLFONTS\OPPR0110.PFM
  SoftFont5=C:\PCLFONTS\OPPB0110.PFM,C:\PCLFONTS\OP110BPN.R8P
  SoftFont6=C:\PCLFONTS\OPPI0110.PFM,C:\PCLFONTS\OP110IPN.R8P
  SoftFont7=C:\PCLFONTS\OPPR0240.PFM,C:\PCLFONTS\OP240RPN.R8P
  SoftFont8=C:\PCLFONTS\OPPB0240.PFM,C:\PCLFONTS\OP240BPN.R8P
  SoftFont9=C:\PCLFONTS\OPPI0240.PFM,C:\PCLFONTS\OP240IPN.R8P

In addition to these entries, which are defined as the "standard" format for
listing soft fonts, the PCL driver's Printer Font Installer would add the
following entries:

  C:\PCLFONTS\OPPR0090.PFM=C:\PCLFONTS\OP090RPN.R8P
  C:\PCLFONTS\OPPB0090.PFM=C:\PCLFONTS\OP090BPN.R8P
  C:\PCLFONTS\OPPI0090.PFM=C:\PCLFONTS\OP090IPN.R8P
  C:\PCLFONTS\OPPR0110.PFM=C:\PCLFONTS\OP110RPN.R8P

The SoftFontn entry lists the two files necessary for a soft font to be used
in Windows. The first file is the Windows Printer Font Metrics (PFM) file.
The second file is the downloadable font file. The .PFM file contains the
metrics used by the driver to provide Windows applications with information
about the fonts. Information such as font height, character widths, and
pair-kern tables are contained in the .PFM file. Part 1, "Fonts," contains
descriptions of the contents of .PFM files.

The .PFM portion of the SoftFontn entry must always be listed in the WIN.INI
file. The downloadable font file, if listed, follows the name of the .PFM
file. The two names are separated by a comma. The presence of the
downloadable font filename indicates that the font is set up for temporary
download. This means that the driver should download the font to the printer
the first time it encounters text in the font during a print job. The font
will be deleted at the end of the print job.

The absence of the downloadable font filename indicates to the driver that
the font has been permanently downloaded to the printer and is also used to
indicate that the font is a printer-resident or cartridge font (see Section
12.7, "Setting Up .PFM Files for Resident and Cartridge Fonts"). Permanently
downloaded fonts are sent to the printer when it is turned on and remain in
the printer's memory until it is turned off. The driver uses the font by
sending the Font ID string to the printer. The Font ID must equal the value
of n in the SoftFontn flag.

The PCL driver's Printer Font Installer adds one more convention: for every
font set up for permanent download, it adds an entry to the WIN.INI file in
the form:

    <PFM filename>=<downloadable font filename>

The installer does this because it needs to keep track of the downloadable
font filename. If a font is set up for permanent download, that means that
the downloadable font filename is not present. To keep track of the download
filename, the installer adds the "<PFM filename>=<downloadable font
filename>" entry.

The PCL driver also supports two other aspects of the soft font entries.
These are not considered to be part of the standard for setting up soft
fonts in Windows:


  ■   The driver allows the user to abbreviate the SoftFontn flag.

  ■   The driver does not require the SoftFontn entries to be in order.


The PCL driver looks for a match in the SoftFontn flag up to the length of
the flag in the WIN.INI file. If, for example, the flag in WIN.INI were
"soft1=<etc>," or even "so1=<etc>," the driver would recognize the flag as a
SoftFontn entry. However, this capability exists in the driver only for
historical reasons; it is recommended that users not abbreviate the
SoftFontn flag.

The PCL driver does not require that soft fonts be listed in one contiguous
range. Some drivers, on the other hand, require contiguous ranges. For
example, if "SoftFonts=3," the driver would expect the three soft font
entries to be as follows:

    SoftFont1=<etc>

    SoftFont2=<etc>

    SoftFont3=<etc>

For the PCL driver, though, the entries could just as easily be SoftFont2,
SoftFont8, and SoftFont10, or any other non-contiguous set of flags. It
scans the WIN.INI file for all the soft font entries. It will also load all
the soft fonts regardless of how many soft fonts the SoftFonts flag
indicates are available.


7.2.20  SoftFonts

This gives the number of soft fonts listed in the WIN.INI file.


7.2.21  Tray

The tray flag contains the input paper tray. Possible values are as follows:


╓┌──────────────┌──────────────┌─────────────────────────────────────────────╖
Value ver 3.2  Value ver 3.3  Paper tray
────────────────────────────────────────────────────────────────────────────
30             1              Default paper tray ("top tray")
31             2              Lower paper tray
32             4              Manual feed
33             7              Auto paper feed


The "Lower" paper tray on the LaserJet 2000 is the middle tray. The user
gains access to the paper deck by selecting "Auto paper feed."


7.2.22  White_text

The white_text flag controls the value of "white" text. Because the PCL
driver does not have white text (e.g., for reverse text), the driver
attempts to "synthesize" white text by not sending it to the printer. The
white_text flag gives the user the ability to adjust the driver's
sensitivity to white text.

Please notice that PCL printers are not capable of actually printing white
text. This section describes how the driver behaves when the application
assigns the color "white" to text. The white_text flag is used by the driver
to determine how to detect white text. When the driver detects that the
color of the text is white, it does not send the text to the printer.

The driver detects white text by looking at the RGB value passed to it by
the application. An RGB value consists of three numbers indicating the red,
green, and blue components of the color. Possible values range from 0 to 255
for each color. 0 means full saturation (or black) of the color; 255 means
no color (or white). A value between 0 and 255 means partial saturation of
the color. If the R, G, and B components are 0, the color is black. If all
three numbers are 255, the color is white.

The driver applies the following logic to detect white text:


  ■   If all three values of red, green, and blue are greater than or equal
      to the value of white_text, then the color is white and the text
      should not be printed.

  ■   If at least one of the R, G, or B components is less than white_text,
      then the color is printed.


By default, the driver uses a white_text value of 255. This means that the
text must be truly white for the driver not to print it. The driver regards
any text that has a value close to white, but not exactly white, as black
and prints it.

The user may make the driver regard all text as white text with the value:

white_text=0

And always print all text with the value:

white_text=256

This flag exists in the event an application wants a finer control over
white text printing than the driver's default approach to determining what
constitutes white text.






Chapter 8  Permanent Soft Fonts
────────────────────────────────────────────────────────────────────────────

Permanent soft fonts are downloaded to the printer when the printer is
turned on and remain there until the printer is turned off. Because
permanent fonts are not sent to the printer during the print job, they pose
some interesting problems. This chapter explores some of these problems and
how the Printer Font Installer solves them.

Permanent fonts are downloaded to the printer sometime after power up. The
driver does not have to be active, nor does Microsoft Windows need to be
running for permanent fonts to be downloaded to the printer. In fact,
permanent fonts are typically downloaded to the printer when the user first
turns on the computer.


8.1  Setting Up Fonts for Download

The user tells the Printer Font Installer that a font should be set up for
permanent download by selecting the font in the installer's list box and
clicking on the "Permanent" button at the bottom of the list box. See Help
in the "Printer Font Installer" dialog box for a description of the user
interface to the installer.

The installer enables the user to change the status (i.e., from temporary to
permanent) of one font at a time. The font receiving the status change is
the one whose name appears on the status line at the bottom of the installer
dialog. The installer only enables one font at a time to be modified to
prevent the user from converting a large number of fonts to permanent
download.

The first time a user changes a font from temporary to permanent status, the
installer pops up a warning dialog. This dialog reminds the user that
permanent fonts take up printer memory and, therefore, only the most
frequently used fonts should be permanently downloaded to the printer.

When the user exits the installer, it prompts the user for the download
style. If the user selects "Download now," the installer will send a print
job consisting of the permanent fonts to the printer. If the user selects
"Download at startup," the installer will build a batch file that downloads
the fonts to the printer and edits the AUTOEXEC.BAT file to call the batch
file.

The user may select both, one, or none of these options. As long as the user
has permanent soft fonts, the installer pops up this dialog box every time
the user exits the installer.

As part of downloading permanent fonts, the installer sends a "delete all
fonts" escape to the printer. This forces the printer to delete all
permanently downloaded fonts. After downloading the new fonts, a banner page
(in portrait format) is printed that shows the fonts that have been
downloaded. Portrait fonts are shown in the typeface that was downloaded.

Downloading permanent fonts "now" (i.e., upon exiting the installer) is not
very difficult for the driver. The installer simply opens a Windows print
job and sends down the fonts. Downloading fonts "at startup" (i.e., when the
user turns on the machine) is more complex.

To set up the downloading of permanent fonts at startup, the installer
performs the following tasks:


  1.  Writes an executable program that prompts the user to download fonts.

  2.  Creates a batch that downloads the fonts and writes out the banner
      page.

  3.  Edits the AUTOEXEC.BAT file to call the download batch file.


The executable program presents the user with a yes/no prompt for
downloading permanent soft fonts. The program is stored in the driver's
resources and written to its own file when the installer is setting up fonts
for permanent download. The download batch file calls this executable
program.

The program presents the user with the prompt:

Download PCL fonts to <port name>? [y/n]

If the user responds "no," the program returns 1, and the batch file tests
the MS-DOS ERRORLEVEL and exits without downloading fonts.

If the user responds "yes," the program returns an MS-DOS ERRORLEVEL of 0,
and the batch file proceeds to download fonts. For example, this sample
download batch file downloads one permanent font, "Tms Rmn 12pt," to the
printer:

  rem HPPCL -- Downloading fonts
  echo off
  C:\PCLFONTS\PCLSF0YN.EXE LPT1:
  if ERRORLEVEL 1 goto nodownload
  echo {ESC}E{ESC}*c0F > LPT1:
  echo {ESC}(s3t0b0s12v10h0P{ESC}&a0c0RPermanently downloaded
   font(s):{ESC}&l2D > %tmp%\pcl3.tmp
  echo {ESC}*c1D > %tmp%\pcl1.tmp
  echo {ESC}*c1d5F > %tmp%\pcl2.tmp


  echo {ESC}(1X*Tms Rmn  12pt >> %tmp%\pcl3.tmp
  copy %tmp%\pcl1.tmp+C:\PCLFONTS\TR120RPN.USP/b+%tmp%\pcl2.tmp/a
   LPT1:/b
  echo {FF} >> %tmp%\pcl3.tmp
  copy %tmp%\pcl3.tmp LPT1:
  erase %tmp%\pcl1.tmp
  erase %tmp%\pcl2.tmp
  erase %tmp%\pcl3.tmp
  :nodownload

The download batch file creates the following three temporary files:

File                              Function
────────────────────────────────────────────────────────────────────────────
TMP1                              Sets up the permanent Font ID.

TMP2                              Assigns the Font ID to the downloaded
                                  font.

TMP3                              Downloads the banner.

The sample download batch file shows how these temporary files are used.
Notice that the batch file takes advantage of the MS-DOS batch file string
substitution feature. That is, every reference to a temporary file is
preceded with %tmp%. If the user has an environment variable "tmp," then
MS-DOS will replace the string with the temporary directory path. If the
environment variable does not exist, MS-DOS will replace the string with a
NULL string. The temporary files will be written to the user's root
directory.

The batch file is invoked from the user's AUTOEXEC.BAT file. The installer
edits the AUTOEXEC.BAT file and appends the following strings to the file:

  rem The Windows PCL / HP LaserJet driver added the next line
  command /c C:\PCLFONTS\SFLPT1.BAT

The string that invokes the download batch file uses the MS-DOS "command /c"
option. This enables MS-DOS to suspend execution of the AUTOEXEC.BAT file to
execute the download file, then return to the execution of the AUTOEXEC.BAT
file. Without "command /c," MS-DOS would not return to executing the
AUTOEXEC.BAT file (i.e., any commands after the line in the AUTOEXEC.BAT
file would not be executed).

The installer appends this string to the AUTOEXEC.BAT file by stepping to
the end of the file and then backing up until it hits a character greater
than or equal to a space. This circumvents a problem some users may have if
they use Windows Notepad to edit their AUTOEXEC.BAT file. Windows Notepad
sometimes writes an end-of-file character as the last valid character in the
file. An application that blindly appends text to the AUTOEXEC.BAT will
append it after the end-of-file character. The added text would be ignored
when MS-DOS executed the AUTOEXEC.BAT file.

There are always potential problems when an application "automatically"
edits the user's AUTOEXEC.BAT file. These programs typically will either
append text to the file (like the installer) or place text at the beginning
of the file. Both approaches present some problems:


  ■   Some users have special "menu templates" that are executed from the
      AUTOEXEC.BAT file. These templates are typically set up by dealers for
      the users. From the template, the user executes the applications he or
      she wants to use. The user never exits this template utility to return
      to the execution of the AUTOEXEC.BAT file.

  ■   Other users set up soft fonts to be permanently downloaded to a port
      that is a remote printer on a network. Typically, the network software
      is executed somewhere at the beginning of the AUTOEXEC.BAT file. The
      download commands must appear after the network software runs.


If an application appends text to the AUTOEXEC.BAT file, it runs the risk of
the commands never being executed. If the application inserts the commands
at the beginning of the file, it runs the risk of executing the commands
before certain other vital commands are executed.

If a user sets up fonts for permanent download, but they are not being
downloaded to the printer, the commands in the AUTOEXEC.BAT file are
probably not being executed. The problem may be solved by moving the
commands in the AUTOEXEC.BAT file.

Although the command line the installer writes to the AUTOEXEC.BAT file may
be moved in the file, it should never be modified. This is because the
installer always looks for the line and modifies it appropriately. The
installer searches the AUTOEXEC.BAT file for the line and changes it without
changing the file size. It does not assume it is at the bottom of the file.


For example, if the user sets up some soft fonts for permanent download at
startup, the installer will build the download batch file and add this line
to the AUTOEXEC.BAT file:

  rem The Windows PCL / HP LaserJet driver added the next line
  command /c C:\PCLFONTS\SFLPT1.BAT

If the user then re-enters the installer and changes all the permanent fonts
to temporary, the installer (upon exit) parses the AUTOEXEC.BAT file and
modifes the command line to:

  rem The Windows PCL / HP LaserJet driver added the next line
  rem     C:\PCLFONTS\SFLPT1.BAT

This has the effect of disabling the download command without deleting it.
If the user once again enters the installer and makes some fonts permanent,
the installer (upon exit) will locate the commented line in the AUTOEXEC.BAT
file and uncomment it:

  rem The Windows PCL / HP LaserJet driver added the next line
  command /c C:\PCLFONTS\SFLPT1.BAT


8.2  Tracking Permanent Fonts in the WIN.INI File

The format for listing soft fonts in the WIN.INI file is a Microsoft Windows
standard (i.e., all printer drivers should list soft fonts in this manner).
This format is described in Part 1, "Fonts." The mechanism is briefly
described in Section 7.2.19, "SoftFontn."

With driver version 3.0 or earlier, users added soft fonts using PCLPFM, not
the Printer Font Installer. PCLPFM is the utility that used to be shipped
with the PCL driver (version 1.05a and earlier). This utility generated .PFM
files from downloadable font files and created an APPNDWIN.INI file. After
running PCLPFM, the user would manually edit the WIN.INI file to add the
SoftFontn entries.

By default, PCLPFM set up all the fonts for temporary download. If the user
wanted to set up fonts for permanent download, then he or she was instructed
to remove the name of the downloadable font file from the SoftFontn line in
the WIN.INI file. The user was responsible for setting up the mechanism for
downloading the permanent fonts to the printer.

For example, suppose the following entries were added to WIN.INI by the
Printer Font Installer:

  [HPPCL,LPT1]
  SoftFonts=2
  SoftFont1=C:\PCLFONTS\OPPR0110.PFM
  SoftFont2=C:\PCLFONTS\OPPB0110.PFM,C:\PCLFONTS\OP110BPN.R8P
  C:\PCLFONTS\OPPR0110.PFM=C:\PCLFONTS\OP110RPN.R8P

The same fonts added from PCLPFM (with help from the user) would look like
this:

  [HPPCL,LPT1]
  SoftFont1=C:\PCLPFM\OP110RPP.PFM
  SoftFont2=C:\PCLPFM\OP110BPP.PFM,C:\PCLPFM\OP110BPN.R8P

This mechanism posed a problem for the Printer Font Installer. With the name
of the permanently downloaded font missing, how could the installer locate
the font? Also, since the user may have already set up a mechanism for
downloading those fonts to the printer, how could the installer work around
it?

The best approach to resolving the problem was to inform users that they
should go back into their WIN.INI file and restore the fonts to temporary
status (add back the name of the permanent font file). The users should also
remove any utilities they had that downloaded the fonts

To handle fonts set up for permanent download by PCLPFM, the installer
applies the following logic:


  ■   If the installer has no record of the downloadable font filename, then
      it simply skips the filename when it sets up the permanent download
      batch file.

  ■   If the user attempts to change the font from permanent to temporary
      status, the installer requires the user to provide a name for the
      downloadable font file.


When the installer creates its download batch file, it will not report an
error if it cannot find the name of the downloadable font file. It does this
for two reasons:


  1.  The installer assumes the user removed the filename. The user also
      probably has some utility that automatically downloaded those fonts.
      Those fonts will continue to be downloaded via the old mechanism,
      while any new fonts changed to permanent by the installer will be
      downloaded by the installer.

  2.  There is another mechanism by which the user can provide the driver
      with .PFM files for cartridge or printer-resident fonts unknown to the
      driver. In this mechanism, only the .PFM file is listed. The
      downloadable font file does not exist. The installer will not report
      that it cannot download fonts, which prevents confusion for the user.


When the user attempts to change a font from permanent to temporary status,
the installer prompts the user to provide the name of the downloadable font
file. If the user cannot provide the name, then the user cannot change the
font's status.

The installer attempts to manufacture the name of the downloadable font file
by assuming that it resides in the same directory as the .PFM file and that
the name was automatically assigned by PCLPFM. Since PCLPFM derived the .PFM
filename from the downloadable font filename, the installer simply reverses
the logic to get the downloadable font filename from the .PFM filename. This
manufactured name is presented to the user as part of the prompt for the
filename.

Once the user has provided the correct downloadable font filename (the
installer does verify that the file actually exists before it accepts the
filename), the installer can set up the font for temporary download. If the
user ever reverts the font's status back to permanent, the installer
preserves the name using the "<PFM filename>=<downloadable font filename>"
convention. The installer also assumes that, since the user knowingly
reverted the font back to temporary status, the user removed whatever
utilities existed on the machine to download the permanent fonts.






Chapter 9  FINSTALL.DIR
────────────────────────────────────────────────────────────────────────────

The Microsoft Windows printer font install directory file, FINSTALL.DIR,
provides a standard way for font manufacturers to describe the contents of a
font distribution package to the Printer Font Installer. The basic purpose
of this file is to link each downloadable font file to its corresponding
.PFM and screen font file.

The printer font install directory file should be placed on the first disk
in a package of soft fonts, or its location should be clearly marked on the
disk that contains it.

This chapter describes the format of the file. In this explanation, the
following syntax conventions are used:

Convention                        Definition
────────────────────────────────────────────────────────────────────────────
CAPS                              Indicates a reserved keyword required by
                                  the FINSTALL.DIR file.

[ ]                               Square brackets indicate that the
                                  enclosed item is
                                  optional.

,...                              Means that the description may be
                                  repeated.

Comments, if included in FINSTALL.DIR, have the format:

    /* comment */

The comment must begin with /* and end with */. Comments may not be nested
(i.e., /* within a comment will be ignored, and the first occurrence of */
will end the comment).

The FINSTALL.DIR file consists of two primary items: the logical drive
definition and the font family definition. A description of each of these
items follows.


9.1  Logical Drive Definition

The purpose of this command is to enable the font vendor to describe the
location of files that are not on the current disk. The DRIVE definition
must appear before it is used anywhere in the file. It is highly recommended
that a logical drive be defined for each floppy disk in the distribution
package, and that all files referenced be preceded by a logical drive ID.

The format of the logical drive definition is as follows:

  DRIVE id[:] = label-file [, "label-descriptor" ]

The following are descriptions of the fields in the definition:

Field                             Description
────────────────────────────────────────────────────────────────────────────
id                                The logical drive's identifier. The id
                                  is used as a drive specifier to the
                                  filename. For example:

                                  DRIVE fontlib1: = fontlib1.lbl, "Font
                                  Library disk #1"

                                  sets up a logical drive, fontlib1.

label-file                        The file for which the Printer Font
                                  Installer will look. The label file must
                                  use the .LBL file extension (for an
                                  explanation, see Section 9.3,
                                  "Installing Without the FINSTALL.DIR
                                  File."

                                  When a filename is referenced as
                                  FONTLIB1:
                                  CN010RPN.USP, the Printer Font Installer
                                  will look for the file FONTLIB1.LBL. If
                                  present, the installer will load
                                  CN010RPN.USP. If not present, it will
                                  prompt the user, for example:

                                  Please place Font Library disk #1 into
                                  drive A:

                                  After the user clicks OK on the prompt
                                  (assuming the disks have been switched),
                                  the installer will again look for
                                  FONTLIB1.LBL and, if present, will load
                                  CN010RPN.USP. If not present, the
                                  installer will repeat the prompt until
                                  the user has inserted the correct disk.

"label-descriptor"                A general description of the floppy disk.
                                  This argument is optional. If not
                                  present, the Printer Font
                                  Installer will prompt:

                                  Please place fontlib1 into drive A:

                                  The installer uses the name of the label
                                  file as the descriptor string. Quotes
                                  around the description are required.


9.2  Font Family Definition

The format of the font family definition is as follows:

  FAMILY [ "family-name" ] {
   aspect-ratio = "description", screen-font-file
   "font-description" = orient, [ download-file ] [, PFM-file ]
   }

Where:

The first line is the format for specifying a screen font file. The second
line is the format for specifying a downloadable font file. Both of these
lines can be repeated or eliminated.

The following are descriptions of the fields in the definition:

Field                             Description
────────────────────────────────────────────────────────────────────────────
FAMILY                            The FAMILY keyword groups together a
                                  list of downloadable files and their
                                  .PFM files to their corresponding screen
                                  font files. Each subentry, aspect- ratio
                                  = and font-description=, may appear many
                                  times and in any order within the braces
                                  { }.

"family-name"                     A general description of the font family.
                                  Quotes around the "family-name" field
                                  are required.

aspect-ratio                      The beginning of a screen font
                                  definition. Its form is as follows:

                                  screen-width-in-lines/inch
                                  : screen-depth-in-lines/inch,...

                                  Notice that both the aspect ratio and
                                  the screen resolution are built into the
                                  aspect-ratio field. Examples of valid
                                  fields are as follows:

                                  ■ 72:72, 96:96 (VGA), 108:108, 120:120
                                  (8514/a), and 144:144 for 1:1 screens at
                                  different resolutions

                                  ■ 96:72 for the IBM Enhanced Graphics
                                  Adapter

                                  ■ 96:48 for the IBM Color Graphics
                                  Adapter

                                  Multiple aspect ratios may be listed in
                                  one aspect-ratio field, separated by
                                  commas. For example, 72:72, 96:96 =
                                  would be a valid aspect-ratio
                                  specification.

Field                             Description
────────────────────────────────────────────────────────────────────────────
                                  If the installer installs fonts on a
                                  display device with no matching
                                  resolution, but with matching aspect
                                  ratios, then the installer chooses the
                                  aspect-ratio field whose resolution is
                                  less than or equal to the desired
                                  resolution. (If there is no resolution
                                  less than or equal to the desired
                                  resolution, then it chooses the lowest
                                  resolution.) If there is no screen font
                                  with a matching aspect ratio, then no
                                  screen fonts are loaded.

"description"                     The "descriptive-text" string used to
                                  describe the screen font when it was
                                  compiled as a resource. That is, when
                                  the screen font was made, a special
                                  entry in a Windows .DEF file was made
                                  for the font in the form:

                                  DESCRIPTION FONTRES FontTypeList :
                                  "descriptive-text"

                                  The "descriptive-text" string from the
                                  .DEF file should be repeated for the
                                  "description" field in the FINSTALL.DIR
                                  file. If you are unsure of the string,
                                  then use the Windows Control Panel to
                                  load the screen font. In the WIN.INI
                                  file, examine the section labeled
                                  [FONTS]. Whatever you see to the left of
                                  the equal sign (=) for your screen font
                                  is the string that should appear in the
                                  "description" field.

                                  Examples of "description" fields are as
                                  follows:

                                  ■ "Courier 8,10,12 (Set #3)"

                                  ■ "Roman (Set #1)"

                                  Quotes around the "description" field
                                  are required.

screen-font-file                  The name and location of the screen font
                                  file. If you use a logical drive as part
                                  of the name, then you guarantee that the
                                  installer will be able to find the file
                                  (i.e., it will prompt the user to change
                                  disks if the incorrect disk is in drive
                                  A). Also, the path should be included in
                                  the filename if it is not in the root
                                  directory on the disk.

Field                             Description
────────────────────────────────────────────────────────────────────────────
"font-description"                The name that is listed in the
                                  installer's list box. It should include
                                  the following:

                                  ■ Exact face name

                                  ■ Point size (abbreviating "point" to
                                  "pt" is recommended)

                                  ■ "bold" if the font is a bold face

                                  ■ "italic" if the font is italic face

                                  Examples of "font-description" strings
                                  are as
                                  follows:

                                  ■ "Tms Rmn 10pt"

                                  ■ "Helv 14pt bold"

                                  ■ "Courier 8pt bold italic"

                                  Quotes around the "font-description"
                                  string are
                                  required.

orient                            The font's orientation (portrait or
                                  landscape). Orient is either P (or p)
                                  for portrait orientation or L (or l) for
                                  landscape orientation. PL or LP may be
                                  used to indicate either orientation.

download-file                     The name and location of the
                                  downloadable font file. If you use a
                                  logical drive as part of the name, then
                                  you guarantee that the installer will be
                                  able to find the file (i.e., it will
                                  prompt the user to change disks if the
                                  incorrect disk is in drive A). Also, the
                                  path should be included in the filename
                                  if it is not
                                  in the root directory on the disk. To
                                  omit the downloadable file, use two
                                  commas before the name of the PFM-file:

                                  "font-description" = orient,,PFM-file

                                  If the downloadable filename is omitted,
                                  the PFM-file name must be present.

PFM-file                          The name and location of the printer
                                  font metrics file. If you use a logical
                                  drive as part of the name, then you
                                  guarantee that the installer will be
                                  able to find the file (i.e., it will
                                  prompt the user to change disks if the
                                  incorrect disk is in drive A). Also, the
                                  path should be included in the filename
                                  if it is not in the root directory on
                                  the disk.

Field                             Description
────────────────────────────────────────────────────────────────────────────
                                  If the PFM-file is omitted, then the
                                  Printer Font Installer will attempt to
                                  generate a .PFM file by reading metrics
                                  from the downloadable font file. In
                                  general, this approach is discouraged as
                                  the font manufacturer then relies on the
                                  driver's PFM Generator to correctly
                                  build .PFM files. This is also an
                                  inconvenience to the user who has to sit
                                  through the process of watching the
                                  Printer Font Installer build the .PFM
                                  files. Because we have a PFM Editor, you
                                  should be able to create a .PFM file
                                  very easily.

                                  The font manufacturer can demonstrate
                                  more control over the .PFM files and
                                  provide a convenience to the user by
                                  supplying the .PFM files on the
                                  distribution disks.

CARTRIDGE                         CARTRIDGE {
                                     aspect-ratio = "description", screen
                                  font-file
                                     "cartridge title" = PCM-file
                                     }

                                  This defines an external cartridge for
                                  installation.

                                  Where:

                                  The aspect-ratio, "description", and
                                  screen-font-file are the same as for
                                  soft fonts.

                                  The "cartridge title" is the title of a
                                  cartridge that can be installed. This
                                  title will appear in the installer's
                                  list box.

                                  Both of these lines can be repeated or
                                  eliminated.

                                  The PCM-file is the file containing the
                                  cartridge information (the collection of
                                  PFMs). This file can also include a
                                  label.


9.3  Installing Without the FINSTALL.DIR File

If there is no printer font directory file, the installer performs the
following actions:


  ■   If a file on the disk exists with the .LBL extension, the installer
      assumes the FINSTALL.DIR file is on another disk. It prompts the user
      to switch disks, while allowing the user the option to read the disk
      without the directory file.

  ■   If there is no .LBL file or the user chooses the first option, the
      installer assumes the directory file does not exist. It then scans the
      disk looking for downloadable font files.


When the installer has to scan the disk for soft fonts, it opens each file
on the disk and looks for the header of a downloadable font file. If it
finds the header, it derives the font name and point size, and displays this
to the user in the list box of soft fonts available for installation. When
the font is installed, the installer will generate a .PFM file from the
downloadable font file. Without the FINSTALL.DIR file, it will ignore any
.PFM files already on the disk.


9.4  Sample FINSTALL.DIR File

  /* Acme Corporation's font package.
   *
   * This package consists of two floppy disks, one
   * containing the Tms Rmn soft font set, the other
   * containing the Helv soft font set.
   */

  /* Logical drives
   */
  DRIVE TR1: = TRSET1.LBL, "Tms Rmn set (disk 1 of 2)"
  DRIVE HV1: = HVSET1.LBL, "Helv set (disk 2 of 2)"

  /* Tms Rmn set
   */
  FAMILY "Tms Rmn" {
    /* screen fonts */
    1:1 = "Acme Tms 1:1", TR1:TR11.FON
    4:3 = "Acme Tms 4:3", TR1:TR43.FON
    2:1 = "Acme Tms 2:1", TR1:TR21.FON

  /* printer fonts */
    "Tms Rmn   6pt"        = P,TR1:TR060RPN.USP,TR1:TR060RPP.PFM
    "Tms Rmn   6pt"        = L,TR1:TR060RPN.USL,TR1:TR060RPL.PFM
    "Tms Rmn   6pt bold"   = P,TR1:TR060BPN.USP,TR1:TR060BPP.PFM
    "Tms Rmn   6pt bold"   = L,TR1:TR060BPN.USL,TR1:TR060BPL.PFM
    .
    .
    .
    "Tms Rmn  30pt bold"   = L,TR1:TR300BPN.USL,TR1:TR300BPL.PFM
    "Tms Rmn  30pt italic" = P,TR1:TR300IPN.USP,TR1:TR300IPP.PFM
    "Tms Rmn  30pt italic" = L,TR1:TR300IPN.USL,TR1:TR300IPL.PFM
    }

  /* Helv set
   */
  FAMILY "Helv" {
    /* screen fonts */
    1:1 = "Acme Helv 1:1", HV1:HV11.FON
    4:3 = "Acme Helv 4:3", HV1:HV43.FON
    2:1 = "Acme Helv 2:1", HV1:HV21.FON

  /* printer fonts */
    "Helv   6pt"           = P,HV1:HV060RPN.USP,HV1:HV060RPP.PFM
    "Helv   6pt"           = L,HV1:HV060RPN.USL,HV1:HV060RPL.PFM
    "Helv   6pt bold"      = P,HV1:HV060BPN.USP,HV1:HV060BPP.PFM
    "Helv   6pt bold"      = L,HV1:HV060BPN.USL,HV1:HV060BPL.PFM
    .
    .
    .
    "Helv  30pt bold"      = L,HV1:HV300BPN.USL,HV1:HV300BPL.PFM
    "Helv  30pt italic"    = P,HV1:HV300IPN.USP,HV1:HV300IPP.PFM
    "Helv  30pt italic"    = L,HV1:HV300IPN.USL,HV1:HV300IPL.PFM
    }

  /* Cartridge version
   */
  CARTRIDGE {
    /* screen fonts */
    1:1 = "Acme Helv 1:1", HV1:HV11.FON
    4:3 = "Acme Helv 4:3", HV1:HV43.FON
    2:1 = "Acme Helv 2:1", HV1:HV21.FON
    1:1 = "Acme Tms 1:1", TR1:TR11.FON
    4:3 = "Acme Tms 4:3", TR1:TR43.FON
    2:1 = "Acme Tms 2:1", TR1:TR21.FON

  /* cartridge containing the fonts */
   "Acme Font Ser" = TR1:ACMECART.PCM
   }






Chapter 10  Developers' Tools
────────────────────────────────────────────────────────────────────────────

This chapter presents the features of the Microsoft Windows Printer Font
Installer that are not in Part 1, "Fonts." These features were specifically
put in the installer to help font vendors and technical support specialists.



10.1  Building an FINSTALL.DIR File

The installer will build an FINSTALL.DIR file for the fonts listed in the
left list box of the installer dialog. The developer should hold down the
CTRL and SHIFT keys while clicking the mouse on the "Exit" button. The
installer will prompt the user for the name and path of the FINSTALL.DIR
file. If a file by the same name already exists, the installer will prompt
to replace the file.

This feature has several uses:


  ■   To preserve the soft font and cartridge entries when the user wants to
      reinstall Windows.

  ■   To expedite moving fonts to another machine.

  ■   As a starter file for developers or power users who want to set up a
      distribution disk of fonts.


This feature is primarily intended to be used by technical support
specialists who are directing users to perform certain operations. A user
may be advised to erase part or all of the contents of his or her machine
and start over. This feature is very useful in preventing the loss of soft
font information.

Chapter 12, "Installer Scenarios," provides sample uses of this feature.


10.2  Adding Fonts

Developers can gain access to an advanced "Add fonts..." dialog by holding
down the CTRL and SHIFT keys when clicking the mouse on the "Add fonts..."
button. This dialog gives developers the following options:


  ■   Specify the path from which the installer should read fonts.

  ■   Rename the FINSTALL.DIR file.

  ■   Indicate if an error file should be written and specify its name.


The first item is available to users via the normal "Add fonts..." dialog.
The other two items are intended to be used by font vendors or power users
setting up FINSTALL.DIR files for distribution.

Before parsing the FINSTALL.DIR file, the installer will report the screen
aspect ratio. The installer will classify the screen type as either CGA
(2:1), EGA(4:3), or VGA(1:1). It uses the same algorithm to classify the
screen fonts listed in the FINSTALL.DIR file. The fonts that match the
category in which the screen was classified would be loaded by the
installer.

The formula the installer uses to classify screens is as follows:


  1.  Compute the screen width in lines-per-inch (horizontal resolution
      divided by horizontal size converted from millimeters to inches):

      width = (GetDeviceCaps(HORZ_RES) * 25) / GetDeviceCaps(HORZSIZE)

  2.  Compute the screen height in lines-per-inch (vertical resolution
      divided by vertical size converted from millimeters to inches):

      height = (GetDeviceCaps(VERT_RES) * 25) / GetDeviceCaps(VERTSIZE)

  3.  Take the inverse ratio of width to height:

      ratio = (height * 10000) / width

  4.  Categorize the screen type based upon the ratio:
╓┌──────────────────────────────┌────────────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
0 to 6249                      CGA (2:1)
6250 to 9374                   EGA (4:3)
9375 and above                 VGA (1:1)





It is highly recommended that font vendors use the advanced "Add fonts..."
dialog to verify that there are no syntax errors in the FINSTALL.DIR file.
If the installer finds errors in the FINSTALL.DIR file, it will write error
messages in the FINSTALL.ERR file. The messages will be of the form:

line<line-number>,near character<character position>:<error message>

The installer also displays a dialog indicating that errors were found and
written to the file.






Chapter 11  .PFM Generator
────────────────────────────────────────────────────────────────────────────

This chapter describes the Microsoft Windows Printer Font Installer's .PFM
file generator. When the installer scans a disk for soft fonts and there is
no FINSTALL.DIR file, it assumes it will have to build .PFM files from the
downloadable font files. It reads the header from the font file plus the
widths of each individual character and uses that information to build the
.PFM file.

Please notice that when the installer scans a disk for fonts and there is no
FINSTALL.DIR file, it will ignore any .PFM files already on the disk and
will attempt to generate .PFM files from the font files. It will, however,
recognize cartridge .PCM files.


11.1  Installer PFM Versus Vendor-Supplied PFM

It is highly recommended that font vendors provide the .PFM files. The
installer will supply a generic .PFM file that contains width table
information and a guess at the font name. The .PFM files provided by the
vendor are guaranteed to contain the correct name and may include pair-kern
tables. The .PFM files from the vendor will more accurately represent the
font and give the vendor a competitive advantage over fonts from other
vendors. We have included the PFM Editor as a tool now for generating or
editing .PFM files. See Chapter 3, "The PFM Editor," in Part 1, "Fonts," for
a complete description of this new tool.


11.2  File Naming Scheme

The installer builds the .PFM filename as follows:

Character                         Definition
────────────────────────────────────────────────────────────────────────────
1, 2                              First two characters from the font
                                  filename

3                                 P, L, or X for portrait, landscape, or
                                  both orientations

4                                 B, R, I, or E for bold, roman, italic,
                                  or bold/italic
                                  (enhanced)

5, 6, 7                           Point size in points

8                                 Magic number

The "magic number" is used by the installer to ensure that the filename is
unique. It starts out at 0. If a file already exists by that name, it is
incremented to 1. The installer continues to increment the number to 9, then
A through Z. If it fails to find a unique filename out of the 36
possibilities, then it will fail to build the .PFM file and report a "Cannot
build PFM file" error message.


11.3  Regenerating .PFM Files

This section deals with situations in which the user is re-installing
existing fonts onto themselves without the aid of the FINSTALL.DIR file. The
installer contains a protection mechanism that prevents it from generating
duplicate .PFM files. There are two potential situations:


  1.  The user re-installs fonts with .PFM files that were initially
      generated by the installer.

  2.  The user re-installs fonts that were initially provided by the font
      vendor (i.e., either on the distribution disks or built by a utility
      provided by the font vendor).


To "re-install" fonts, the user pulls up the Printer Font Installer, selects
"Add fonts...," and directs the installer to read font information from the
directory containing already installed fonts. Then the user installs fonts
into the same directory. The installer will prompt the user if fonts should
be replaced. If the user responds "yes," the installer proceeds to replace
every font with itself.

As described in the previous section, the installer contains a mechanism
that guarantees it will find a unique name for each .PFM file. In this
situation, the installer would give a unique name to a .PFM file that was a
duplicate of an existing .PFM file. For example, suppose the first time a
user installed a font, the installer generated a .PFM filename XYZ0.PFM.
When the user re-installed the font, the installer would generate a second
identical .PFM file named XYZ1.PFM.

To prevent duplicate .PFM files on the disk, the installer contains a
protection mechanism. If the "magic number" in the .PFM filename is not 0,
then the installer compares the contents of the .PFM file to the other .PFM
files sharing the same name. If it finds a duplicate, it erases the .PFM
file it just built and uses the already existing .PFM file.

This mechanism prevents the installer from placing duplicate .PFM files on
the disk. However, it does not take care of the problem when .PFM files were
originally supplied by the font vendor.

If the user originally installs fonts provided by a font vendor and then
re-installs without use of an FINSTALL.DIR file, the installer will replace
the vendorsupplied .PFM files with its own generated .PFM files. It does not
remove the .PFM files from disk; rather it adds its own .PFM files and uses
them. Because the installer's PFM generator is not as accurate as the font
vendor's .PFM files, the installer may actually end up renaming the fonts,
which causes confusion for the user.

Therefore, the user should never re-install soft fonts from and to the same
directory without the aid of an FINSTALL.DIR file. Because the installer
contains the ability to generate automatically an FINSTALL.DIR file of the
already loaded fonts, there really is no reason for re-installing fonts
without the use of an FINSTALL.DIR file.

Section 12.3, "Recovering Soft Fonts From a WIN.INI Change," presents how
the user would preserve the installed fonts using an FINSTALL.DIR file.


11.4  PFM Data From Font Data

The installer's PFM generator derives the .PFM file from the data in the
downloadable font file. The structure of the .PFM file is documented in Part
1, "Fonts." The following sections list where the data comes from for each
field in the .PFM file structures.


11.4.1  PFM Header

The installer derives the PFM header from the download file as follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Computation
────────────────────────────────────────────────────────────────────────────
dfVersion                         256

dfSize                            Size of file

dfType                            128

Field                             Computation
────────────────────────────────────────────────────────────────────────────

dfPoints                          Height of the font in points (height from
                                  header * 72 / 1200)

dfVertRes                         300

dfHorizRes                        300

dfAscent                          Baseline position from font header

dfInternalLeading                 (Cell height - height + 2) / 4 from font
                                  header

dfExternalLeading                 (height / 4) - baseline from font header

dfItalic                          Set if the style byte in the header = 1

dfUnderline                       0

Field                             Computation
────────────────────────────────────────────────────────────────────────────

dfStrikeOut                       0

dfWeight                          Derived from stroke weight (see table on
                                  following page)

dfCharSet                         Based upon HP symbol set (see table on
                                  following page)

dfPixWidth                        If variable width

dfPixHeight                       Cell height from the font header

dfPitchAndFamily                  Pitch bit is set if fixed pitch

dfAvgWidth                        Average of all the character widths
                                  (cursor move)

dfMaxWidth                        Maximum of all the character widths
Field                             Computation
────────────────────────────────────────────────────────────────────────────
dfMaxWidth                        Maximum of all the character widths
                                  (cursor move)

dfFirstChar                       First character in the font file

dfLastChar                        Last character in the font file

dfDefaultChar                     127 - first character

dfBreakChar                       32 - first character

dfWidthBytes                      0

dfDevice                          Offset from beginning of file to device
                                  string "PCL / HP LaserJet"

dfFace                            Offset from beginning of file to face name

dfBitsPointer                     0
Field                             Computation
────────────────────────────────────────────────────────────────────────────
dfBitsPointer                     0

dfBitsOffset                      0

dfCharOffset                      If variable pitch

dfSizeFields                      Size of this part of the PFM structure

dfExtMetricsOffset                Offset from beginning of file to
                                  EXTTEXTMETRIC structure

dfExtentTable                     0

dfOriginTable                     0

dfPairKernTable                   0

dfTrackKernTable                  0

Field                             Computation
────────────────────────────────────────────────────────────────────────────

dfDriverInfo                      Offset from beginning of file to
                                  DRIVERINFO (driver-specific) structure

dfReserved                        0



The installer derives the Windows weight value from the weight value in the
font file header as follows:

HP Weight                         Windows Weight
────────────────────────────────────────────────────────────────────────────
-7                                100 (Thin)

-6                                100 (Thin)

-5                                200 (Extra light)

-4                                200 (Extra light)

-3                                300 (Light)

-2                                300 (Light)

-1                                400 (Normal

0                                 400 (Normal)

1                                 500 (Medium)

2                                 600 (Semi-bold)

3                                 700 (Bold)

4                                 700 (Bold)

5                                 800 (Extra bold)

6                                 800 (Extra bold)

7                                 900 (Heavy)

The installer determines the Windows character set (dfCharSet) and the type
of translation (in the driver-specific structure, xtbl.xtSymbolSet) from the
symbol set field in the font file:

╓┌──────────────┌──────────────────────┌─────────────────────────────────────╖
HP symbol set  Windows character set  Translation
────────────────────────────────────────────────────────────────────────────
8U (Roman-8)   0 (ANSI)               Roman-8
0U (USASCII)   0 (ANSI)               USASCII
11Q            0N (ECMA-94)           0 (ANSI)
8M (Math-8)    180 (Math-8)           8-bit pass through
15U (PI Font)  181 (PI Font)          8-bit pass through
0B (LineDraw)  182 (LineDraw)         7-bit pass through
4Q (PC Line)   183 (PC Line)          7-bit pass through
0B (TaxLnDrw)  184 (Tax Line)         7-bit pass through
1U (US Legal)  185 (US Legal)         7-bit pass through
all others     0 (ANSI)               7- or 8-bit pass through
────────────────────────────────────────────────────────────────────────────
HP symbol set  Windows character set  Translation
────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────


For the generic case, the installer checks the font type byte in the font
header. If it is non-zero, the font uses an 8-bit pass through; if zero, the
font uses a 7-bit pass through.


11.4.2  EXTTEXTMETRIC Data Structure

The installer derives extended text metrics from the download header file as
follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Computation
────────────────────────────────────────────────────────────────────────────
etmSize                           Size of EXTTEXTMETRIC
                                  structure

Field                             Computation
────────────────────────────────────────────────────────────────────────────

etmPointSize                      Cell Height *1440 / 300 from font file
                                  header

etmOrientation                    2 if orientation byte set in header; 1 if
                                  not

etmMasterHeight                   Cell height from font file header

etmMinScale                       etmMasterHeight

etmMaxScale                       etmMasterHeight

etmMasterUnits                    etmMasterHeight

etmCapHeight                      Baseline from header - dfInternalLeading

etmXHeight                        Top offset from character record for 'x';
                                  left offset if landscape font
Field                             Computation
────────────────────────────────────────────────────────────────────────────
                                  left offset if landscape font

etmLowerCaseAscent                Top offset from character record for 'd';
                                  left offset if landscape font

etmLowerCaseDescent               Character width - left offset from
                                  character record for 'p'; height - top if
                                  landscape font

etmSlant                          0

etmSuperScript                    etmCapHeight - etmXHeight

etmSubScript                      Cell height from header

etmSuperScriptSize                Cell height from header

etmSubScriptSize                  Cell height from header

Field                             Computation
────────────────────────────────────────────────────────────────────────────

etmUnderlineOffset                Top offset from character record for '_';
                                  left offset if landscape font

etmUnderlineWidth                 Character width from character
                                  record for '_'; character height if
                                  landscape font

etmDoubleUpperUnderlineOffset     etmUnderlineOffset + etmUnderlineWidth * 2

etmDoubleLowerUnderlineOffset     etmUnderlineOffset

etmDoubleUpperUnderlineWidth      etmUnderlineWidth

etmDoubleLowerUnderlineWidth      etmDoubleUpperUnderlineWidth

etmStrikeOutWidth                 Character width from record for '-';
                                  character height if landscape font

Field                             Computation
────────────────────────────────────────────────────────────────────────────

etmStrikeOutOffset                Left offset - etmStrikeOutWidth from
                                  character record for '-'; top
                                  offset - etmStrikeOutWidth if landscape
                                  font

etmKernPairs                      0

etmKernTracks                     0




11.4.3  Device-Specific Data Structure

The format of this structure is presented in Section 12.7, "Setting Up .PFM
Files for Resident and Cartridge Fonts."

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Computation
────────────────────────────────────────────────────────────────────────────
epSize                            Size of DRIVERINFO structure

epVersion                         1

epMemUsage                        ((sum of all character widths + 7) >> 3) *
                                  height + 63, function from the HP
                                  Technical Reference Manual

epEscape                          0

xtbl.xtSymbolSet                  Based upon font symbol set (see HP symbol
                                  set table in Section 11.4.1, "PFM Header")

xtbl.xtOffset                     0

xtbl.xtLen                        0

xtbl.xtFirstChar                  0

Field                             Computation
────────────────────────────────────────────────────────────────────────────

xtbl.xtLastChar                   0










Chapter 12  Installer Scenarios
────────────────────────────────────────────────────────────────────────────

This chapter presents some sample uses of the Microsoft Windows Printer Font
Installer. It starts with recommendations for selecting printer and screen
fonts, then presents some "cookbook" approaches to performing certain tasks
with the Printer Font Installer.

We assume that the reader understands how to use the Printer Font Installer
and has a basic understanding of MS-DOS. Help under the "Printer Font
Installer" dialog describes the user interface to the installer.

We recommend that all technical support specialists also read this chapter.



12.1  Selecting Printer Fonts

Fonts take up disk space and printer memory. Planning which fonts are needed
and installing only those fonts can save disk space. Selecting fonts is a
highly subjective process. It requires making tradeoffs between document
design and computer memory, disk space, printer memory, and printing speed.


The recommendations presented in this section and Section 12.2, "Selecting
Screen Fonts," are based upon experience gained from working with Windows
and soft fonts. The intent of these recommendations is to help you optimize
the amount of disk space and printer memory used by soft fonts. Some of the
recommendations indicate that you should not load certain variations of
fonts; you may want to experiment to determine if the additional expense in
print time and disk space is worth including these fonts.

We recommend loading the typographic range of point sizes and limiting
documents to using these sizes. The typographic range is as follows:

6, 7, 8, 9, 10, 11, 12, 14, 18, 24, 30, 48, 60, 72

Better yet, if you know exactly which sizes you normally use in a document,
load only those sizes. For example, a document may use only the following
point sizes of Helv:

11 point for body text 9 point for running headers, running footers, and
footnotes 14, 24, and 30 point bold for subheads and headlines

By loading only these sizes, you reduce the number of fonts taking up disk
space.

We recommend generating normal and italic for all point sizes, and bold for
point sizes equal to and above 14 points. The PCL driver has the capability
to simulate bold text. It will not look the same as the true bold face, so
you may want to experiment first (e.g., print a document with bold type but
with no bold face loaded and, then, load the bold face and reprint the
document). Normally, however, the driver-simulated bold face is adequate for
the small point sizes.

To save on even more space, we recommend that you load bold only for the
larger sizes (i.e., 24 points and above). The assumption is that you will
only use bold sizes for headlines.

Avoid loading bold italic for a font. Bold italic consumes disk space and
printer memory and, because bold italic is rarely used, it does not warrant
the space it requires. As an alternative, the driver will simulate bold
italic by synthetically bolding the italic face.

Character sets can make a big difference in the amount of disk space and
printer memory used by a font. If the document never uses accented
characters or special symbols like the bullet (i.e., a centered period) and
copyright, we recommend using the USASCII character set. If the document
requires these characters, use the Windows ANSI, ECMA-94, or Roman-8
character sets (listed in order of preference, depending upon which sets you
have access to).

Fonts in the USASCII character set contain a little more than half the
number of characters contained in the Windows ANSI, ECMA-94, and Roman-8
character sets. By selecting USASCII, you effectively half the amount of
disk space and printer memory used by the font. We recommend using, in order
of preference, Windows ANSI, ECMA-94, or Roman-8 for point sizes below 14
points and USASCII for point sizes 14 points and above. Figure 12.1
summarizes these recommendations.

(This figure may be found in the printed book).


12.2  Selecting Screen Fonts

Selecting screen fonts is considerably different from selecting printer
fonts. The selection of screen font sizes should not be based upon the
selected printer font sizes. It does not make sense to build one
corresponding screen font for every printer font for the following reasons:



  ■   Screen fonts in Windows are sized and modified by the screen driver.
      The screen driver can derive normal, bold, italic, and bold italic
      variations from one screen font.

  ■   Screen fonts are selected by way of a generic selection process
      controlled by the application and the screen driver. One cannot assume
      that a screen font specifically targeted for a printer font will be
      used to display that font.

  ■   Some applications allow the user to see the font at different views
      (e.g., "fit in window," 100%, and 200%). A screen font should be
      provided for each view.

  ■   Most important, screen fonts take dynamic memory away from
      applications, thus slowing the overall performance of Windows.


Poorly selected screen fonts can both degrade the performance of the system
and produce highly confusing and ugly screen display.

Regardless of the printer font sizes and variations selected, we recommend
loading a shortened typographic range of screen fonts:

8, 9, 10, 12, 14, 18, 24

Load these fonts in normal face only; the screen driver can simulate bold,
italic, and bold italic. There is no need to double, triple, or quadruple
the memory used by screen fonts to get these special fonts.

Do not load screen fonts for printer fonts that are like Tms Rmn, Helv, or
Courier. Windows already provides those screen fonts. Additional screen
fonts would use up memory without additional visual benefits.

If you generate one printer font, you should generate the whole recommended
range. Applications typically offer more than one view of the page, so the
screen driver will need the different sizes to display the font in each
view.

If you feel you want the typographic quality of pre-built bold and italic
screen fonts, then you should experiment to see if these fonts look better
than fonts synthesized by the screen driver. Display a page of text with
only the normal face loaded, then display it with the normal, bold, and
italic faces loaded.

Never load a bold or italic screen font without a corresponding normal face
font. Without the normal face, the screen driver will always use the bold or
italic face, producing an extremely confusing screen display.

For example, suppose you decide to create a document that uses a 24-point
italic font. You then load one printer and one screen font as 24-point
italic.

Thereafter, every time the screen driver determines it needs a 24-point
screen font that is similar to the font that you installed, it will use the
24-point italic face. Regardless of the variation you want (i.e., normal,
bold, or italic), the font will display in italic.

As you add more fonts to your computer, the situation will become more
confusing. To continue the example, suppose you decide to add the same
printer and screen font as 48-point normal.

When the application displays the 48-point font at 100% view on the screen,
the font will display as 48-point normal (i.e., the correct behavior). At
50% view, the font will display as 24-point italic (because that is the only
font available). When switching views, therefore, the font changes from
normal to italic.

You can avoid this problem simply by not loading anything other than the
normal face of the screen font. Normally, the difference between the
synthesized font and the "true" font is barely noticeable, if noticeable at
all. If you must load the italic or bold variations, then you must also load
the normal variation in the same size.


12.3  Recovering Soft Fonts From a WIN.INI Change

Sometimes you need to remove the contents of your WINDOWS directory and
reinstall Windows. In the process of doing this, you could lose all the soft
font information. To prevent losing data:


  1.  Build an FINSTALL.DIR file.

      From inside Windows, select the Printers icon from Control Panel, and
      then select the PCL / HP LaserJet printer, Configure, and Setup.

      Once inside the driver-specific dialog, click on the "Fonts" button to
      invoke the Printer Font Installer. The fonts you plan to save should
      be listed in the left list box. Hold down the CTRL and SHIFT keys
      while clicking the mouse on the "Exit" button. The installer prompts
      for a filename and path. Click "OK" to accept the name of the
      FINSTALL.DIR file. Then, exit Windows.

  2.  Reinstall Windows.

      Perform whatever steps are necessary to reinstall Windows (i.e.,
      remove everything in the WINDOWS directory and run Windows Setup).

  3.  Install from the directory to itself to get the soft fonts listed.

      Run the Printer Font Installer on the new machine through the Control
      Panel's Printers icon. Select the PCL/HP LaserJet Printer and, then,
      Configure and Setup.

      From the driver-specific dialog, click on the "Fonts" button to invoke
      the installer. If the "Fonts" button is not highlighted, then you need
      to select a printer that supports soft fonts (lower-left list box in
      the driver-specific dialog). Select "Add fonts..." and specify
      \PCLFONTS as the source for copying fonts. If your fonts are stored in
      another directory (such as FONTS or PCLPFM), then specify that
      directory.

      Hold down the CTRL and SHIFT keys while selecting all the fonts in the
      right list box. Select the "Add..." button between the two list boxes.
      The installer prompts for a target directory. This must be equivalent
      to the directory from which you are installing the fonts. If you are
      installing from \PCLFONTS, then click "OK" to accept \PCLFONTS as the
      target directory. Otherwise, change the name to that of the directory
      that contains the soft fonts (such as FONTS or PCLPFM).

      The installer then shuffles the fonts very quickly from the right list
      box to the left list box. It does not copy any fonts; it simply
      updates the WIN.INI file. If this does not happen quickly, then you
      probably did not build an FINSTALL.DIR file as described in Step 1 or
      did not install fonts from and to the same directory.



12.4  A Quick Method for Moving Fonts

The purpose of this section is to describe how to move fonts from one
machine to another. It is not intended for distributing fonts to several
users. That procedure is described in Section 12.5, "Building a Floppy Disk
Set of Fonts." This description is not intended to encourage illegal copying
of fonts. We assume that you are removing fonts from one machine and adding
them to another.

The steps are as follows:


  1.  Build an FINSTALL.DIR file.

      From inside Windows, select the Printers icon from Control Panel, and
      then select the PCL / HP LaserJet printer, Configure, and Setup.

      Once inside the driver-specific dialog, click on the "Fonts" button to
      invoke the Printer Font Installer. The fonts you plan to save should
      be listed in the left list box. Hold down the CTRL and SHIFT keys
      while clicking the mouse on the "Exit" button. The installer prompts
      for a filename and path. Click "OK" to accept the name of the
      FINSTALL.DIR file. Then, exit Windows.

  2.  Use the MS-DOS xcopy command to copy files to a floppy disk, by
      following these instructions:

      To change to the directory containing the soft fonts, type:

      cd \PCLFONTS

      To format as many floppy disks as you think are necessary to hold the
      soft fonts, type:

      format A:

      To make sure that all the files in the directory are not marked for
      archive, type:

      attrib -a *.*

      To copy files to the first disk, type:

      xcopy *.* A: /m

      If MS-DOS reports an "insufficient disk space" error, format another
      floppy disk (if necessary) and repeat the xcopy command. The /m option
      on the xcopy command instructs MS-DOS to mark the files it has copied
      to disk, so when you repeat the command it does not recopy the files
      that are already on disk.

      Repeat the xcopy command until all the files are on the disk(s).

  3.  Copy the files from the floppy disk(s) to the new machine, by
      following these instructions:

      On the new machine, to make a directory for the fonts, type:

      cd \
      mkdir \PCLFONTS
      cd \PCLFONTS

      To copy the fonts from the floppy disk into the new directory, type:

      copy A:*.*

      Repeat this step for every floppy disk.

  4.  Install from the directory to itself to get the soft fonts listed.

      Run the Printer Font Installer on the new machine through the Control
      Panel's Printers icon. Select the PCL / HP LaserJet printer and, then,
      Configure and Setup.

      From the driver-specific dialog, click on the "Fonts" button to invoke
      the installer. Select "Add fonts..." and specify \PCLFONTS as the
      source for copying fonts. The installer should list all the fonts you
      just copied into the \PCLFONTS directory.

      Hold down the CTRL and SHIFT keys while selecting all the fonts in the
      right list box. Select the "Add..." button between the two list boxes.
      The installer will prompt for a target directory. This must be the
      same directory from which you are installing the fonts. If you are
      installing from \PCLFONTS, as these instructions indicate, then click
      "OK" to accept \PCLFONTS as the target directory.

      The installer then shuffles the fonts very quickly from the right list
      box to the left list box. It does not copy any fonts; it simply
      updates the WIN.INI file. If this does not happen quickly, then you
      probably did not build an FINSTALL.DIR file as described in Step 1 or
      did not install fonts from and to the same directory.


The fonts will be moved to the new machine. Notice that this procedure is
probably the fastest and simplest way to move fonts from one machine to the
next. However, we do not recommend it as a general method of distributing
fonts. The installer has a more elegant and less error-prone way of loading
fonts from floppy disks as described in the next section.


12.5  Building a Floppy Disk Set of Fonts

This section describes how to set up a floppy disk set of fonts for
distribution. This procedure is useful, for example, if a company chooses to
use a range of fonts available from a font generation utility. One person
could generate the fonts and create a disk set of fonts for internal
distribution. Then, all the other users could quickly and easily install the
pre-generated fonts without having to learn how to use the font generation
utility.

By providing this procedure, we do not encourage illegal copying of fonts.
We assume that everyone receiving the fonts has either paid some kind of a
licensing fee or has a copy of the font generation utility that was used to
build the fonts.

To use the following procedure, you must know how to use MS-DOS and a text
editor. In addition, you should understand the advanced installer features
described in Chapter 9, "FINSTALL.DIR," and Chapter 10, "Developers' Tools."


The steps are as follows:


  1.  Install and/or generate the soft fonts.

      Load the fonts onto your machine. If you are generating soft fonts,
      follow the recommendations outlined in Section 12.1, "Selecting
      Printer Fonts."

      If you have control over the creation of screen fonts, follow the
      recommendations outlined in Section 12.2, "Selecting Screen Fonts."
      You should build a set of screen fonts for each type of display that
      may be used. Generally, this would be an EGA and/or a VGA.

      When you make changes to the FINSTALL.DIR file (see Step 4), you can
      instruct the installer to load different screen fonts depending upon
      the aspect ratio of the machine receiving the fonts.

  2.  Build an FINSTALL.DIR file.

      From inside Windows, select the Printers icon from Control Panel, and
      then select the PCL/HP LaserJet printer, Configure, and Setup.

      Once inside the driver-specific dialog, click on the "Fonts" button to
      invoke the Printer Font Installer. The fonts you plan to save should
      be listed in the left list box. Hold down the CTRL and SHIFT keys
      while clicking the mouse on the "Exit" button. The installer prompts
      for a filename and path. Click "OK" to accept the name of the
      FINSTALL.DIR file. Then, exit Windows.

  3.  Arrange the font files, .PFM files, .PCM files, screen font files, and
      FINSTALL.DIR file onto disks.

      If all the files fit on one disk, this is an easy task. If they do not
      and the number of fonts is great, this may be a major task. You will
      find recommendations for arranging them after this list.

  4.  Edit the FINSTALL.DIR file to add logical drives.

      If the files require more than one disk, edit the FINSTALL.DIR file
      and add logical drives so the installer will know where all the files
      are. With logical drives properly set up, the installer will prompt
      the user to switch disks when necessary.

      If you loaded screen fonts, add entries in the FINSTALL.DIR file for
      screen fonts as well. Place the screen fonts in the appropriate FAMILY
      block for which the screen fonts were made. The format of the
      FINSTALL.DIR file is described in Chapter 9, "FINSTALL.DIR."

  5.  Test the font installation process thoroughly.

      Make sure that all the fonts are correctly loaded. If you have screen
      fonts for different aspect ratios, test loading fonts on machines with
      different screen displays.

      Use the advanced "Add fonts..." button to check the syntax of your
      FINSTALL.DIR file and verify your screen display type as described in
      Chapter 10, "Developers' Tools."


Arranging font files onto disks can be an extremely tedious task, especially
if you have to set up disks for 360K, 720K (3.5 inch), and 1.2M builds and
need to conserve disk space.

Here are some recommendations:


  ■   Keep the screen font files for one FAMILY together on the same disk
      and make sure the lowest point size font is also on that disk.

  ■   Keep each .PFM file on the same disk as its corresponding printer font
      file.

  ■   Conserve disk space by putting the largest fonts on the disk with the
      smallest fonts.

  ■   If you are building the set for different disk densities, build the
      360K set first, then put the files from two disks onto each 720K disk
      and the files from three disks onto each 1.2M disk.


The easiest way to build the disk set is to place files on the disks in the
exact order in which they appear in the FINSTALL.DIR file. That is, the
FINSTALL.DIR file goes on first, followed by the screen fonts for the first
family listed, followed by the .PFM and font files for that family. Make
sure that all the screen font files for one family go on the same disk, and
that at least one printer font (the first one listed in the FAMILY block)
with its .PFM file also goes on that disk.

Once the disk set is built and working, reorganize the files to optimize for
disk space usage. For a sample FINSTALL.DIR file that shows logical drives
and screen fonts, see Section 9.4, "Sample FINSTALL.DIR File."


12.6  Setting Up Fonts on a Network

This section describes how a network administrator can set up fonts for use
on a network. To use this procedure, you must know how to use MS-DOS and a
text editor. In addition, you must understand the advanced installer
features described in Chapter 8, "Permanent Soft Fonts," Chapter 9,
"FINSTALL.DIR," and Chapter 10, "Developers' Tools."

To set up fonts for use on a network, follow these steps:


  1.  Install and/or generate the soft fonts.

      Load the fonts onto your machine. If you are generating soft fonts,
      follow the recommendations outlined in Section 12.1, "Selecting
      Printer Fonts."

      If you have control over the creation of screen fonts, follow the
      recommendations outlined in Section 12.2, "Selecting Screen Fonts."
      You should build a set of screen fonts for each type of display that
      may be used. Generally, this would be an EGA and/or a VGA.

      When you make changes to the FINSTALL.DIR file (see Step 5), you can
      instruct the installer to load different screen fonts depending upon
      the aspect ratio of the machine receiving the fonts.

  2.  Select permanent fonts.

      To use permanently downloaded soft fonts, enter the Printer Font
      Installer (described in the next step) and select the fonts you want
      permanently downloaded to the printer. When you exit the installer, it
      will prompt you for the download options. Make sure download "at
      startup" (i.e., when your machine is turned on) is checked.

  3.  Build an FINSTALL.DIR file.

      From inside Windows, select the Printers icon from Control Panel, and
      then select the PCL / HP LaserJet printer, Configure, and Setup.

      Once inside the driver-specific dialog, click on the "Fonts" button to
      invoke the Printer Font Installer. The fonts you plan to save should
      be listed in the left list box. Hold down the CTRL and SHIFT keys
      while clicking the mouse on the "Exit" button. The installer prompts
      for a filename and path. Click "OK" to accept the name of the
      FINSTALL.DIR file. Then, exit Windows.

  4.  If you are not working from the file server, copy the fonts to the
      file server.

      If you created and installed fonts from the network server, you can
      skip this step.

      Set up a directory on the file server for the fonts and copy all the
      files to it. Use the MS-DOS commands to do this. If you set up
      permanent fonts, move the files created by the installer from your
      machine to the network machine and edit the AUTOEXEC.BAT file on the
      network to transfer the command line invoking the download batch file.
      Chapter 8, "Permanent Soft Fonts," describes how permanent soft fonts
      are set up.

  5.  Edit FINSTALL.DIR to add screen fonts.

      If you generated screen fonts, edit the FINSTALL.DIR file to add
      references to the fonts. Chapter 9, "FINSTALL.DIR," describes the
      format of the FINSTALL.DIR file. There is also an example in Section
      9.4, "Sample FINSTALL.DIR File."

      You do not need to add logical drives to the FINSTALL.DIR file if all
      the font files and .PFM files reside in one directory.

  6.  Test the font installation process thoroughly.

      Make sure that all the fonts are correctly loaded. If you have screen
      fonts for different aspect ratios, test loading fonts on machines with
      different screen displays.

      Use the advanced "Add fonts..." button to check the syntax of your
      FINSTALL.DIR file and verify your screen display type as described in
      Chapter 10, "Developers' Tools."

  7.  Announce the availabilty of soft fonts to network users.

      Instruct your users that the fonts are available. They can load the
      fonts by running the Printer Font Installer and selecting "Add
      fonts..." They should indicate the network drive and path to the
      directory containing the soft fonts (in response to the "Add fonts..."
      request for a directory). Installation of the fonts this way will be
      much faster than loading from floppy disks.

      If you set up permanent soft fonts, then your instructions must list
      those fonts and their ID numbers for the users. Instruct the users to
      enable the "Edit" button and edit each of the permanent fonts,
      verifying the ID numbers. They must change the ID numbers on any fonts
      that do not match your list. See Help under the "Printer Font
      Installer" dialog for a description of the user  interface.


The only "tricky" part to setting up fonts on a network is making sure that
all the users have assigned the correct IDs to their permanent fonts. This
is not as difficult as it seems. There usually are only a few permanent
fonts, and the installer resolves ID conflicts. If the user attempts to
assign an ID to a font that is used by another font, the installer will ask
the user if the other font should be assigned a new ID. The installer will
select the first available ID number when assigning a new ID.


12.7  Setting Up .PFM Files for Resident and Cartridge Fonts

It is possible to build special .PFM files for printer-resident and
cartridge fonts. These fonts should be set up as permanently downloaded
fonts in the WIN.INI file or collected into a cartridge .PCM file. The
special .PFM files contain the escape sequences that the driver will send to
the printer to use the fonts.

Font or printer vendors will most likely build the .PFM and .PCM files.
Chapter 2, "Printer Font Metrics (PFM) Files," in Part 1, "Fonts," describes
the format of .PFM and .PCM files.

In short, to set up cartridge and printer-resident fonts, the developer
should do the following:


  1.  Build special .PFM files.

  2.  If appropriate, combine PFMs into a .PCM using the PFM Editor.

  3.  Make a special FINSTALL.DIR file for loading .PFM-only fonts or .PCM
      files.


In addition to the structures described for the .PFM files, the driver has a
driver-specific data structure that must be added to the file. The
PFMEXTENSION structure contains a dfDriverInfo variable. This variable is a
file offset to the driver-specific structure. (See Part 1, "Fonts," for more
information on .PFM and .PCM file formats and the new PFM Editor.) For the
PCL driver, the driver-specific structure looks like this:

  typedef enum
     {
     epsymUserDefined,
     epsymRoman8,
     epsymKana8,
     epsymMath8,
     epsymUSASCII,
     epsymLineDraw,
     epsymMathSymbols,
     epsymUSLegal,
     epsymRomanExt,
     epsymISO_DenNor,
     epsymISO_UK,
     epsymISO_France,
     epsymISO_German,
     epsymISO_Italy,
     epsymISO_SwedFin,
     epsymISO_Spain,
     epsymGENERIC7,
     epsymGENERIC8,
     epsymECMA94
     } SYMBOLSET;

  typedef struct
     {
     SYMBOLSET symbolSet;         /* kind of translation table */
     DWORD offset;                /* location of user-defined table */
     WORD len;                    /* length (in bytes) of table */
     BYTE firstchar, lastchar;    /* table ranges from firstchar to
             /*   lastchar */
     } TRANSTABLE;

  typedef struct
     {
     WORD epSize;                 /* size of this data structure */
     WORD epVersion;              /* number indicates ver of struct */
     DWORD epMemUsage;            /* amt of memory font takes up in
                                  /*   printer */
     DWORD epEscape;              /* pointer to the escape that
                                  /*   selects the font */
     TRANSTABLE xtbl;             /* character set translation info */
     } DRIVERINFO;

The values of the fields in the DRIVERINFO structure should be filled in as
follows:

╓┌─────────────────────────────────┌─────────────────────────────────────────►
Field                             Value
────────────────────────────────────────────────────────────────────────────
epSize                            size of (DRIVERINFO)

epVersion                         1

epMemUsage                        An approximation of the printer memory
                                  used by the font

epEscape                          An offset from the top of the file to the
                                  escape string that the driver should send
                                  to the printer to invoke the font

xtbl.xtSymbolSet                  epsymGENERIC7 for 7-bit fonts and
                                  epsymGENERIC8 for 8-bit fonts

xtbl.xtOffset                     (long)0

xtbl.xtLen                        0
Field                             Value
────────────────────────────────────────────────────────────────────────────
xtbl.xtLen                        0

xtbl.xtFirstChar                  (BYTE)0

xtbl.xtLastChar                   (BYTE)0



In addition, the escape string for invoking the fonts must be written to the
.PFM file. The driver will use the escape string pointed to by epEscape to
select the font. Once the .PFM and .PCM files are built, you must make an
FINSTALL.DIR file. See Section 9.4, "Sample FINSTALL.DIR File," for an
example.

Sometimes, a user might need to install .PFM files for fonts that do not
exist. Take, for example, the case in which a user needs to compose a file
for a typesetting service and does not have the necessary fonts. If the
typesetter could set up a special FINSTALL.DIR and the necessary .PFM files,
they could give just this information to their customers and not force them
to purchase the fonts.

In .PFM files, the absence of the downloadable font file is indicated by two
commas in the font string, as in the following example:

  "Tms Rmn 12pt"=PL,  ,  CPY_TMS.PFM

The installer loads these fonts as permanently downloadable soft fonts. This
has one side effect. When the user exits the installer, it will prompt for
download options. Because the installer thinks the fonts are permanent soft
fonts, it will try to download them to the printer. However, it will not
find the permanent font files because they do not exist. Therefore, the
installer will simply ignore the files and not make a download batch file or
open a print job. However, if these fonts are mixed in with other "real"
permanent soft fonts, then the installer will correctly download those
fonts.

If the target printer is a standard LaserJet, the driver will not load soft
font .PFM files. The driver will not load the .PFM files when the target
printer cannot handle soft fonts. However, the user may instruct the driver
to load cartridge font (PCM) information to gain access to the cartridge
font information. To override the soft font restrictions, you can place the
following flag in the driver-specific section of the WIN.INI file:

options=7

This flag, described in Chapter 7, "WIN.INI Flags," instructs the driver to
load soft font information regardless of the printer's abilities. However,
this is not recommended.






PART III  The PostScript Driver
────────────────────────────────────────────────────────────────────────────

This part presents technical aspects of the version 3.3 Microsoft Windows
PostScript printer driver. It should be read by technical support
specialists, Windows application developers, and advanced users.

We assume that the audience for this document has knowledge of how to build
a Windows .PFM (Printer Font Metrics) file, which is documented in Part 1,
"Fonts," and how to use MS-DOS and a text editor.

These chapters outline the new features and their impact on applications.
Some of the topics discussed are new escapes that are important for
performance and new features support, the WIN.INI settings, the use of soft
fonts, and external printer and header support. (See the Microsoft Windows
Software Development Kit and the Microsoft Windows Device Development Kit
documentation for a complete list of escapes.)






Chapter 13  Overview of the PostScript Driver
────────────────────────────────────────────────────────────────────────────

The Microsoft Windows PostScript driver version 3.3 uses many of the new
Windows 3.0 features and improves on past versions of the driver in the
following areas:


  ■   Speed

  ■   Memory utilization

  ■   Functionality


Versions 3.3 and higher produce output faster with optimized output
functions. Printing speeds are increased by producing tighter, more
efficient PostScript code. This is necessary because the size of the output
produced is critical when output must travel over serial communication
lines.

The driver has been segment optimized to enable printing in very low memory
situations.

Full RGB color is supported in output primitives, including text and
bitmaps. On black and white printers, the PostScript color machinery
converts RGB colors to gray levels.

Windows 3.0 device-independent bitmaps (DIBs) are supported allowing
multiple bit-per-pixel images to be rendered on both black and white and
color devices. Bitmap output has been vastly improved by the inclusion of
the StretchBlt() function in the GDI/Driver interface. PostScript's ability
to scale bitmaps is now used along with some compression techniques to
reduce the size and increase the speed of bitmap output.

The following are limitations placed on the driver by PostScript:


  ■   PostScript does not support most raster operations (Rops). However, it
      does support BLACKNESS, WHITENESS, and SRCCOPY.

  ■   PostScript has a 750-point polygon limit. This number is reduced by
      two when filling with a hatch or pattern. This is because a clipping
      path must be built as well as the path to fill and stroke. In cases
      where this limit is reached, the driver will request that GDI simulate
      the polygon. This is very slow. Applications should, therefore, avoid
      generating large polygons.







Chapter 14  New Features
────────────────────────────────────────────────────────────────────────────

The following sections in this chapter include brief descriptions of the
major new features incorporated into the version 3.3 Microsoft Windows
PostScript driver. References are also made to other documents and chapters
for further detailed information.


14.1  Color

The PostScript driver is a one bit-per-pixel device. However, this does not
mean it can represent only black and white. Bitmaps in a one bit-per-pixel
format can use any color for the foreground and background.

On black and white devices, colors are converted to gray levels by the
PostScript color machinery. For example, when a bitmap is transferred to the
printer, the foreground and background colors are examined to determine the
two colors to use for the transfer.

Windows uses brushes to fill objects. Patterned brushes are defined by an
8x8 bitmap that is used to tile a region that is to be filled. However,
since the PostScript driver is a one bit-per-pixel device, there is no color
information stored in its brushes. When a brush is used to fill an object,
the current text and background colors are used.


14.2  Device-Independent Bitmaps

Device-independent bitmaps (DIBs) are used to deal with more than one
bit-per-pixel bitmaps. The implementation in the PostScript driver uses the
PostScript image operator on black and white devices and the colorimage
operator on color devices to render multiple bit-per-pixel images. (Notice,
however, that this makes the output printer-dependent.)

Applications that want to print multiple bit-per-pixel images should use the
SetDIBitsToDevice() or StretchDIBitsToDevice() function to render these
images. GDI will simulate these if the driver does not support them.

For an example of how this is used, examine the source of the sample
application SHOWDIB, provided on the SDK disks.


14.3  External Printer and Printer Font Metrics Support

External printer descriptions are supported by the PostScript driver. When
supplied with the proper files, the PostScript driver can support printers
that are not listed in the default printer list of the printer Setup dialog.
These are discussed in detail in Chapter 16, "WIN.INI Settings." For more
information on how Microsoft supports external printer descriptions, see
Chapter 17, "External Printer Descriptions Support."

For printers that have hard disks or resident fonts from some other source,
external .PFM files can be added to WIN.INI to make the driver aware of
these fonts. This is similar to the way softfonts are installed and is
discussed in detail in Chapter 16, "WIN.INI Settings."


14.4  PostScript Header Support

The size of the PostScript header has been reduced to less than 8K. Most
header functions have been rewritten with efficiency and compactness in mind
and all the unnecessary white space removed. This reduces the overhead of
print jobs that include the header to only a few seconds.

Problems with the header downloading mechanism have been fixed. For users
that want to reduce printing times as much as possible, they should download
the header to their printer using the Print Options dialog to make all the
functions used be resident in the printer. With the header in place,
printing times are reduced by about 10 seconds. However, for sending files
to service bureaus, the header must be included in the print job and not
downloaded previously.


14.5  The Error Handler

There is an error handler built into the driver that may be downloaded to
the printer. With the error handler resident in the printer, any time an
error occurs it will print the contents of the page and, then, print a sheet
that indicates what error occurred and what was on the PostScript stack.

This can be useful for diagnosing printing problems. Sophisticated
PostScript users may want to send their own PostScript to the printer (as
done by some applications such as Corel Draw and Adobe Illustrator(tm)). For
them, this is a good debugging tool.

To access the error handler, press ALT+E in the Print Options dialog (notice
that there is no button, since this is an invisible control). From there,
the error handler can be sent to a file or to the printer.


14.6  GDI StretchBlt() Support

In Windows 3.0, GDI enables drivers to support the StretchBlt() function
directly. In the past, GDI would do the stretching itself and build a
temporary bitmap at the device resolution. This was very slow and consumed a
lot of memory. PostScript, though, supports arbitrary scaling of bitmap
images so this was also unnecessary.

With StretchBlt() implemented at the device-driver level in the PostScript
driver, the source bitmap is transferred directly to the printer and
stretched using the PostScript imagemask operator. An RLE compression scheme
has also been implemented to reduce the amount of data that needs to be
transferred to the printer. For most images, this means much less data is
produced and rendering is much faster.


14.7  Device Initialization

The PostScript driver supports the Windows 3.0 device initialization
functions. This means that applications can maintain private,
device-independent initialization data that is separate from the default
configurations set using Control Panel.

For more information, see the documentation on the ExtDeviceMode() and
DeviceCapabilities() functions in the Microsoft Windows Software Development
Kit.


14.8  Rotated Text

The version 3.3 Windows PostScript driver can support printing text at any
angle. Applications may create fonts using any Escapement value (i.e., by
specifying the angle of the baseline). The only limitation is that the
Orientation (i.e., the angle of individual characters) is ignored.


14.9  EPS Printing

Users can produce an Encapsulated PostScript (EPS) file that can be imported
into applications such as Aldus PageMaker with any Windows application that
prints using the PostScript driver. This is done by selecting "Print to EPS
file" on the PostScript Options dialog box and, then, printing. The output
of the print job is redirected into the PostScript-only EPS file specified
in the Options dialog box. No alternate representation of the image (e.g.,
metafile or TIFF image) is produced by the driver.

By default, the bounding rectangle is the whole page (i.e., the imageable
area of the page). If the printing application issues a SETBOUNDS escape,
that rectangle will be used instead of the whole page. Therefore, before
printing a page, every application that might possibly have its output sent
to an EPS file should issue a SETBOUNDS escape with the bounding rectangle
of all the output.






Chapter 15  Escapes
────────────────────────────────────────────────────────────────────────────

This chapter discusses briefly only three of the main PostScript-related
printer escapes. Detailed descriptions of most of them are available in the
Microsoft Windows Device Driver Adaptation Guide (which has driver-oriented
descriptions) and/or in the Microsoft Windows Software Development Kit
(which has application-oriented descriptions).

The EPSPRINTING escape is intended for applications that produce their own
PostScript. It suppresses the Windows PostScript header. With this option
on, no GDI output functions will work.

The POSTSCRIPT_DATA escape is just like the PASSTHROUGH (also known as
DEVICE_DATA) escape except that it is recognized only by PostScript devices.
This escape is intended for applications that produce two representations of
the output: one intended for PostScript devices and the other for
non-PostScript devices. It should be used in conjunction with
POSTSCRIPT_IGNORE to make the PostScript driver ignore the GDI
representation.

The POSTSCRIPT_IGNORE escape is used to make the PostScript driver ignore or
accept all the output. lpInData points to a BOOL that indicates whether the
GDI functions should be ignored (TRUE) or not (FALSE, the default).






Chapter 16  WIN.INI Settings
────────────────────────────────────────────────────────────────────────────

This chapter discusses several PostScript-related WIN.INI settings and how
to enter soft fonts in the Microsoft Windows WIN.INI file.


16.1  Global Initialization Section

The following is an example of the global initialization section, which
contains data that is not associated with a particular port. As of now, this
includes the presence of external printers (i.e., printers added through the
"Add Printer..." button on the Setup dialog) that are defined in .WPD files.


  [PSCRIPT]
  External Printers=2
  printer1=abc_ps
  printer2=xyz_ps

Where:

"External Printers" indicates how many external printers there are.
"printern" indicates the base filename of a given external printer.


16.2  Per-Port Initialization Section

The following is an example of the per-port initialization section, which
contains data that is specific to each port connection. Notice that Windows
saves the state of printer connections on a per-port basis.

  [PostScript,COM1]
  device=4
  feed2=1
  feed15=5
  softfonts=4
  softfont1=filea.pfm, c:\fonts\filea.agb
  softfont2=fontb.pfm, c:\fonts\fontb.agb
  softfont3=fontc.pfm
  softfont4=fontd.pfm

Soft fonts may also reference the internal font metrics built into the
driver. To do this, add a softfontn entry that references the base name of
the built-in .PFM file, as in the example "softfont5=CB" for "Courier-Bold."
For a complete list of the available .AFM filenames, see the README.TXT file
on the last disk of the DDK set of disks.


16.3  Use of Soft Fonts

The softfontn entries in WIN.INI can be used for several different purposes.
Basically, they inform the driver that a given printer has extra fonts
available and, if necessary, indicate a file that needs to be downloaded to
make that font available. If there is a second file listed in a softfontn
entry, it is assumed that it needs to be downloaded to activate the given
font. Thus, soft fonts can be used to support resident printer fonts that
have been downloaded previously, that reside on a printer's hard disk, or
that are available in some other form.

The softfonts entry indicates how many soft fonts are installed and listed.
The maximum number of soft fonts allowed now is 255. The limit was 99 in
version 3.2 and earlier ones.

Each softfontn entry references the .PFM file associated with a soft font
and, optionally, the soft font that will be downloaded to the printer at
print time. Each filename may be a complete pathname. The two forms of soft
fonts supported are described in the following subsections.


16.3.1  Adobe Soft Font Format (.AGB)

Adobe soft fonts are recognized by the string "%!PS-AdobeFont" being found
at offset 6 in the file. The first 6 bytes are defined by the following data
structure:

  typedef struct{
   unsigned char flag;
   char type; /* 1 means data is ASCII, 2 means binary */
     /*    (convert to ascii) */
   long length; /* length of the data that follows */
   } HDR;

The fields indicate the length of the soft font as well as the type (ASCII
or binary). Binary forms are converted to hex ASCII by the driver; ASCII
fonts are copied directly.


16.3.2  Non-Adobe Soft Font Format

Fonts that do not have the above-mentioned signature are copied to the
output stream. Therefore, the whole file must be in PostScript code that
describes the font.






Chapter 17  External Printer Descriptions Support
────────────────────────────────────────────────────────────────────────────

Version 3.3 of the Microsoft Windows PostScript printer driver supports the
ability to add external printer descriptions. Users can install a new
printer definition by simply choosing the "Add Printer..." button on the
printer Setup dialog box.

For the user to be able to do this, the printer manufacturer must supply a
disk with information about the device. Printer manufacturers need to
produce Windows Printer Description (.WPD) files by compiling Adobe standard
.PPD files with the MKPRN.EXE utility. This chapter describes how printer
manufacturers can build a distribution disk and a .WPD file that will enable
users to add a printer to the Microsoft Windows PostScript printer driver.

The PostScript Printer Description (.PPD) file format was defined by Adobe
and extended by the Microsoft Windows PostScript printer driver to provide a
basis for external printer descriptions. This file is then compiled into a
Windows Printer Description (.WPD) file with a tool provided in this kit.
For a particular PostScript printer to be supported in the Windows
PostScript printer driver, it must have a .WPD file describing the following
attributes:


  ■   What fonts are resident

  ■   How many paper sizes and input trays are supported

  ■   How sizes and trays are activated

  ■   What is the imageable area of each of the supported page sizes (i.e.,
      the area on which the printer can actually mark)


A few extensions have also been made to the WPD definition to enable Windows
to take advantage of paper-handling capabilities.

For further information on PostScript Printer Description files, you need to
obtain from Adobe their document PostScript PRINTER DESCRIPTION FILES
Specification Version 3.0.


17.1  Tools Provided

The following files are provided with the DDK to support adding external
printer descriptions:

File                              Description
────────────────────────────────────────────────────────────────────────────
MKPRN.EXE                         The MKPRN compiler. An MS-DOS
                                  application that reads .PPD and .PFM
                                  files to produce the Windows Printer
                                  Description (.WPD) file.

*.PFM                             The 63 .AFM files (Font Metric files)
                                  that are needed to build the font
                                  directories for each printer. (See the
                                  README.TXT file on the last DDK disk for
                                  a complete list of the files.) These
                                  files correspond to the font metrics
                                  built into the driver. Printers with
                                  fonts that are not found here need to be
                                  installed as "soft fonts" as described
                                  in Chapter 16, "WIN.INI Settings."

*.PPD                             The .PPD sample files.

If you need to define a font that is not available currently in the
PostScript printer driver, you will need to modify the driver sources to add
additional .AFM files. Please refer to the PostScript driver's MAKE file
that is included on the DDK disks for more information on how the driver
builds .AFM and .PFM files.


17.2  Building an External Printer Distribution Disk

This section includes step-by-step procedures for building an external
printer distribution disk.

First, to generate the required files, do the following:


  1.  Build a .PPD file that fully describes your printer.

  2.  Use MKPRN.EXE to build the .WPD file.

  3.  Make a PRINTERS.INI file that lists the printers available for
      installation.


Second, to build a distribution disk, do the following:


  1.  Copy the .WPD file to the distribution disk.

  2.  Copy the PRINTERS.INI file to the distribution disk.


Finally, to test your printer, do the following:


  1.  Use the distribution disk you just built to install your printer.
      Choose the "Add Printer..." button on the PostScript printer Setup
      dialog and add the appropriate printer.

  2.  Select the newly installed printer from the "Printers list" in the
      main dialog box.

  3.  Test the features of your printer. You will probably want to have the
      error handler downloaded to the printer. You can download the error
      handler by pressing ALT+E in the printer Options dialog. Be sure to
      test the following features:

      ■   Paper sizes. Make sure that all the paper sizes are available and
          that the imageable areas are correct.

      ■   Paper sources. Test that all the paper sources can be selected
          properly.

      ■   Normalized transfer function. Use an application (e.g.,
          Micrografx(tm) Designer 2.0) that can generate gradiated fills to
          make sure that gray levels are represented in a linear fashion.



If you find any problems, make the appropriate changes to the .PPD file,
rebuild the .WPD file, and install the new WPD over the existing one.

────────────────────────────────────────────────────────────────────────────
NOTE

The description string in PRINTERS.INI needs to match the "*NIckName"
keyword from the .PPD file.
────────────────────────────────────────────────────────────────────────────


17.3  The MKPRN Compiler

Adobe standard PostScript Printer Description (PPD) files contain the
information needed for the Microsoft Windows PostScript printer driver to
support a particular printer. The PPD keywords and extensions are described
in Section 17.5, "Keywords and Extensions."

The MKPRN compiler takes as input the .PPD file that you generate and all
the .PFM files referenced in that .PPD file. It then produces the .WPD file
needed for a printer to be supported by the Windows PostScript printer
driver.

────────────────────────────────────────────────────────────────────────────
NOTE

.PPD files must be standard ASCII files with CR/LF pairs terminating each
line.
────────────────────────────────────────────────────────────────────────────


17.4  The .PPD File Format

A .PPD file is an ASCII file with keywords at the start of every line. The
keywords that the current MKPRN compiler expects are listed in the following
section. In the future, more keywords may be recognized. For example, the
"*FileSystem" keyword may be used to determine if a printer supports fonts
loaded on a hard disk.

Therefore, the .PPD file for your printer should be as complete as possible.
Refer to the Adobe document PostScript PRINTER DESCRIPTION FILES
Specification Version 3.0 and examine the sample .PPD files included in the
DDK for more information on .PPD files.


17.5  Keywords and Extensions

The following list provides descriptions of the PPD keywords:

Keyword                           Description
────────────────────────────────────────────────────────────────────────────
*NickName                         The name that appears in the printer
                                  dialog box. It should be a unique
                                  description of the printer. This is also
                                  the name used for automatic printer
                                  recognition.

*ColorDevice                      Indicates whether or not the printer
                                  supports color.

*FileSystem                       Currently unused but may be used in the
                                  future.

*DefaultResolution                The default resolution of the printer.

*Transfer Normalized              The normalized transfer function used to
                                  generate linear gray levels. This must
                                  be present. If none is
                                  required, include the NULL function "{
                                  }."

*PaperDimension                   The size of all the used paper types. A
                                  Paper Dimension entry must be included
                                  for every size of paper supported.
                                  Notice that the sizes of the standard
                                  page types should be used. Only standard
                                  page types are recognized (see the
                                  following list).

*PageSize                         The PostScript code used to invoke the
                                  different page sizes that are supported
                                  (when not in manual-feed mode).

*PageRegion                       The PostScript code that is necessary to
                                  invoke different page sizes when using
                                  manual feed.

*ImageableArea                    The actual area that can be marked on
                                  for every paper size.

*ManualFeed True                  The PostScript code that is necessary to
                                  invoke the manual feed operation. If
                                  present, it is assumed that manual feed
                                  is supported (and, therefore, PageRegion
                                  entries must be included).

*ManualFeed False                 The PostScript code that is necessary to
                                  turn off manual feed. If present, it is
                                  assumed that manual feed is supported.

Keyword                           Description
────────────────────────────────────────────────────────────────────────────
*DefaultFont                      The name of the default font (i.e., the
                                  font used if none is selected). This
                                  entry must appear before any "*Font"
                                  entries.

*Font                             The fonts resident in the printer.

*DefaultInputSlot                 The default input slot.

*InputSlot                        The PostScript code that is necessary to
                                  invoke each input slot.

Currently, there is only one keyword extension.

Extension                         Description
────────────────────────────────────────────────────────────────────────────
*EndOfFile                        Indicates whether or not ^D is required
                                  to indicate EOF. This is true by default
                                  and only needs to be
                                  included if this is false (i.e.,
                                  "*EndOfFile False").

The following are the paper keywords used to show the paper sizes supported:


Keyword                           Description
────────────────────────────────────────────────────────────────────────────
Letter                            8 1/2 x 11 inches physical size. Refers
                                  to the standard paper type.

LetterSmall                       8 1/2 x 11 inches physical size but with
                                  a reduced-size imageable region that is
                                  centered on the page. Supports the Adobe
                                  PostScript paper definitions.

Tabloid                           11 x 17 inches physical size, oriented
                                  in "portrait" or "tabloid" mode (i.e.,
                                  the y-axis is on the longer edge of the
                                  paper).

Ledger                            17 x 11 inches physical size, oriented
                                  in "landscape" mode (i.e., the y-axis is
                                  on the shorter edge of the paper).

Legal                             8 1/2 x 14 inches physical size,
                                  oriented in
                                  "portrait" mode.

Statement                         5 1/2 x 8 1/2 inches physical size,
                                  oriented in
                                  "portrait" mode.

A3                                297 x 420 millimeters physical size,
                                  oriented in
                                  "portrait" mode. Refers to the
                                  International Standards Organization
                                  (ISO)/(JIS) A3 paper size.

A4                                210 x 297 millimeters physical size,
                                  oriented in
                                  "portrait" mode.

Keyword                           Description
────────────────────────────────────────────────────────────────────────────
A4Small                           210 x 297 millimeters physical size but
                                  with a reduced-size imageable area of
                                  7.47 x 10.85 inches that is centered on
                                  an A4 page. Supports the Adobe
                                  PostScript paper definitions.

A5                                148 x 210 millimeters physical size,
                                  oriented in
                                  "portrait" mode.

B4                                250 x 354 millimeters physical size,
                                  oriented in "portrait" mode. Refers to
                                  the Japanese Industrial Standard (JIS)
                                  B4 paper size.

B5                                182 x 257 millimeters physical size,
                                  oriented in
                                  "portrait" mode.

Folio                             8 1/2 x 13 inches physical size but with
                                  a reduced-size imageable region,
                                  oriented in "portrait" mode and centered
                                  on the "folio" sheet. Supports the Adobe
                                  PostScript paper definitions.

Quarto                            215 x 275 millimeters physical size but
                                  with a reduced-size imageable region,
                                  oriented in "portrait" mode and centered
                                  on the "quarto" sheet.

10x14                             10 x 14 inches physical size, oriented
                                  in "portrait" mode.

11x17                             11 x 17 inches physical size, oriented
                                  in "portrait" mode. Can be used
                                  interchangeably with the keyword Tabloid.

Note                              8 1/2 x 11 inches physical size but with
                                  a reduced-size imageable region. This is
                                  used to reduce the size of the page
                                  buffer to give print jobs more memory.

LetterExtra                       9 1/2 x 12 inches physical size.

LegalExtra                        9 1/2 x 15 inches physical size.

TabloidExtra                      11.69 x 18 inches physical size.

A4Extra                           9.27 x 12.69 inches physical size.

For paper extensions, 5 standard envelope sizes are recognized. The two
groups of numbers following the word Envelope indicate the size of the
envelope in points (where each point equals 1/72 of an inch).

Extension                         Description
────────────────────────────────────────────────────────────────────────────
Envelope.279.639                  #9 Envelope (3 7/8 x 8 7/8 Inches)

Envelope.297.684                  #10 Envelope (4 1/8 x 9 1/2 Inches)

Envelope.324.747                  #11 Envelope (4 1/2 x 10 3/8 Inches)

Envelope.342.792                  #12 Envelope (4 3/4 x 11 Inches)

Envelope.360.828                  #14 Envelope (5 x 11 1/2 Inches)

The following are the paper tray and bin keywords used to show and invoke
the input slots supported:

Keyword                           Description
────────────────────────────────────────────────────────────────────────────
Upper                             If there is more than one tray, this one
                                  is on top.

OnlyOne                           There is only one tray.

Lower                             If there is more than one tray, this one
                                  is on the
                                  bottom.

Middle                            This one is in the middle.

LargeCapacity                     This one can hold more than a standard
                                  amount of paper.

The following list describes the paper tray extensions:

Extension                         Description
────────────────────────────────────────────────────────────────────────────
AutoSelect                        Printer can select automatically which
                                  feeder to use. This is followed by the
                                  code (or a NULL command if no code is
                                  required) that is used to invoke the
                                  autofeed mechanism.

EnvelopeManual                    There is a manual envelope feeder.

Envelope                          There is an envelope feeder.

None                              There are no input feeders. This is
                                  treated as being the same as OnlyOne.


17.6  Running the MKPRN Compiler

MKPRN.EXE is an MS-DOS application that compiles .PPD files into .WPD files
that are read by the Microsoft Windows PostScript printer driver. The
command line usage is as follows:

MKPRN [/v] [/s] file

Parameter                         Description
────────────────────────────────────────────────────────────────────────────
/v                                An optional verbose switch. This causes
                                  MKPRN to print messages as it processes
                                  various elements in the .PPD file. This
                                  may be useful for debugging .PPD files.

/s                                Suppresses combining the .PSS, .CAP, and
                                  .DIR files into one .WPD file. This is
                                  used only when building the driver
                                  sources and is not intended for use by
                                  external printers.

file                              This is the base filename (with no
                                  extension) of the .PPD file to be
                                  processed. The .WPD file shares this
                                  base filename.

Error messages are printed for fonts that are not found and for identifiers
that are not recognized. If fonts are not found, they are not built into the
.WPD file and have to be added as soft fonts as described in Chapter 16,
"WIN.INI Settings."


17.7  Installing the .WPD File

PostScript printer manufacturers can use the MKPRN.EXE utility to generate a
Windows Printer Description (WPD). They also need to create the PRINTERS.INI
file. These files can then be distributed to enable users to install
external printers on their machine.

Once the .WPD file is available, an end user can install additional
PostScript printer support through the "Add Printer..." button in the
PostScript printer Setup dialog. This dialog can be activated from the
Control Panel's Printer icon or from any application that supports printer
Setup.

When the user chooses this button, they are prompted to insert a disk or
type in a path to a directory that contains the .WPD file. If the
PRINTERS.INI file is found, the list of printers from which the user can
choose is displayed. The appropriate files are copied to the user's Windows
directory and the appropriate lines are added to the user's WIN.INI file.

The PRINTERS.INI file should reside on the disk distributed with the .WPD
file. This file follows the standard format used in the Windows WIN.INI
file. The [PSCRIPT] section lists the PostScript printer names for each set
of .WPD files included on the disk. The string that follows is the full name
of the printer that will appear in the "Add Fonts..." Installation dialog
box.

The format of the PRINTERS.INI file is shown in the following example:

  [PSCRIPT]

  abc_ps = ABC PostScript Printer
  xyz_ps = XYZ PostScript Printer ver 43.1

If the user tries to install a printer that is already installed
(externally), the printer driver will ask whether or not the previous
description should be updated.

Manufacturers that are already supported internally in the driver should not
provide external printer descriptions with names that conflict with those
used internally. If an update is required, add the PostScript version number
to the printer name (in both the PRINTERS.INI file and the "*NickName"
section of the .PPD file).


17.8  Limitations

Although there are over 60 font descriptions built into the PostScript
driver, printers with resident fonts that are not supported in the current
version of the driver will need to define those files as soft fonts.

However, a soft font installer is not available yet for the PostScript
printer driver. Therefore, it is up to the printer manufacturer to install
additional fonts as soft fonts by adding the appropriate WIN.INI entries.
The format of soft font entries is described in Chapter 16, "WIN.INI
Settings."








Chapter 18  PostScript Printer Communications
────────────────────────────────────────────────────────────────────────────

Most PostScript printers support both serial and parallel ports. The fastest
and most efficient way to connect your printer to you PC is usually with a
parallel port (LPTx). If your printer has both a parallel and a serial port,
the parallel port should be used.

If you are using serial communications and have a newer PostScript printer,
you may be able to increase the transmission rate from the standard 9600
baud. Many printers support communications of 19200 baud.

The following is a PostScript program that can be sent to the printer to set
it up for 19200-baud communications. Save the following in a file called
19200.PS and, then, use the MS-DOS Copy command (COPY 19200.PS COM1:) to
send it to the printer.

  % set laserwriter for 19200 baud
  %   set up hardware handshaking
  %   see page 121-122 of apple manual for details
  %   use ETX/ACK (cts/rts)
  serverdict begin 0 exitserver
  statusdict begin 25 19200 7 setsccbatch end
  % a ^D should be appended to this file in most cases

────────────────────────────────────────────────────────────────────────────
NOTE

This will set the speed permanently (even after a power cycle). Use the
following PostScript program to reset the communications channel to the
default 9600 baud.
────────────────────────────────────────────────────────────────────────────

  % set laserwriter for 9600 baud
  %   set up hardware handshaking
  %   see page 121-122 of apple manual for details
  %   use ETX/ACK (cts/rts)
  serverdict begin 0 exitserver
  statusdict begin 25 9600 0 setsccbatch end
  % a ^D should be appended to this file in most cases

You will also have to set the port on the PC to this speed by issuing the
following command, which should go in your AUTOEXEC.BAT file:

  MODE COM1:,19200,n,8,1
```

{% endraw %}
