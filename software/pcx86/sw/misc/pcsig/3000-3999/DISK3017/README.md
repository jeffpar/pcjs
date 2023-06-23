---
layout: page
title: "PC-SIG Diskette Library (Disk #3017)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3017/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3017"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE3017.TXT

{% raw %}
```
Disk No: 3017                                                           
Disk Title: SFWare Font Utilities #3 of 4                               
PC-SIG Version: S1.1A                                                   
                                                                        
Program Title: Sfware Font Utilities                                    
Author Version: 1.0                                                     
Author Registration: $60.00                                             
Special Requirements: A hard drive & one HPLaserJet softfont file. HP la
                                                                        
SFWARE FONT UTILITIES gives you the tools to download, rotate, compress,
expand, view, and perform special effects on the PCL softfonts used with
your Hewlett-Packard laser printer.  SFWARE is not a collection of      
fonts, but a set of font manipulation utilities.  It can even be set up 
to access the utilities from an integrated menu system.                 
                                                                        
If you don't already know, softfonts are fonts stored in files on your  
computer and sent to the memory of your laser printer each time you turn
it on.  Downloading softfonts to a laser printer is something lots of   
programs do, but SFWARE does a lot more.  It lets you take any existing 
font and use SFWARE's special effects to create some new, eye-catching  
fonts.                                                                  
                                                                        
The special effects available through SFWARE include bold, fill, convert
to fixed spacing, halftone, hollow, invert, mirror, outline, convert to 
proportional spacing, resize, reverse, shade, shadow, slant, stripe,    
3-D, hollow-3-D, and filled-3-D effects.  The effects can be tailored   
and combined in countless ways.  For example, you could take an existing
18-point Times font and make it hollow, slant it, and put a 3-D shadow  
behind it.  Before you actually use these fonts you can view them       
on-screen, or print reference sheets.                                   
                                                                        
Another added feature is the ability to use fonts on older HP laser     
printers.  Older printers don't normally support compressed fonts, but  
SFWARE can expand them for easy use.  In addition, for older HP printers
that won't do this automatically, SFWARE can change a portrait font to  
landscape.  This is a quick, easy way to create a big font collection   
from a small set of fonts.                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  PC-SIG Disk #3017  SFWARE FONT UTILITIES  >>>>          ║
║                  Disk 3 of 4 (also #3001, #3016, #3018)                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║  Insert disk 2 (#3016) into drive A.                                    ║
║  Create a subdirectory on your hard drive.  From the subdirectory on    ║
║  the hard drive type:                                                   ║
║          COPY A:PKUNZIP.EXE  (press Enter)                              ║
║          PKUNZIP A:SFW11AP2  (press Enter)                              ║
║  Then insert disk 1 (#3001) into drive A and type:                      ║
║          PKUNZIP A:SFW11AP1  (press Enter)                              ║
║  Then insert disk 3 (#3017) into drive A and type:                      ║
║          PKUNZIP A:SFW11AD1  (press Enter)                              ║
║  Then insert disk 4 (#3018) into drive A and type:                      ║
║          PKUNZIP A:SFW11AD2  (press Enter)                              ║
║          PKUNZIP A:SFW11AEX  (press Enter)                              ║
║  To print program instructions, type:  COPY READ.ME PRN  (press Enter)  ║
║  To print printing instructions, type:  COPY PRINTDOC PRN  (Enter)      ║
║  To print registration form, type:  COPY ORDER.FRM  (press Enter)       ║
║                                           Copyright 1992, PC-SIG Inc.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SFSHELL.TXT

{% raw %}
```


















                                  Sfware

                A Manual for the Shell and Other Utilities










           Copyright 1990-92 by Norman Walsh All Rights Reserved





                                Version 1.1



Notice:

This document is written and maintained by Small Planet Software. All
rights reserved. No part of this publication may be reproduced,
photocopied, stored in a retrieval system, or transmitted, in any form or
by any means except those provided for by the shareware license agreement
of the accompanying software.

Copyright 1991-92 by Small Planet Software

All Rights Reserved

Although every reasonable precaution has been taken in the preparation of
this document, no warranty of any kind is made with regard to the use of
this material, including, but not limited to, the implied warranties of
merchantability or fitness for a particular purpose. No patent or copyright
liability is assumed with respect to the use of the information contained
herein or the use of the accompanying software.

Acknowledgments:

I would like to thank Tom Bruhns and Philippe Weil for their invaluable
assistance. They were my primary gunea pigs as the product went through
alpha and early beta testing. Without their patience and helpful comments,
neither this software nor this manual would be what they are today.

All trademarks used within this document are the trademarks of their
respective owners.




                                NO WARRANTY

        THESE PROGRAMS ARE DISTRIBUTED FREELY. THESE PROGRAMS IS
        PROVIDED ``AS IS'' WITHOUT WARRANTY OF ANY KIND, EITHER
        EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO, THE
        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
        PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY
        AND PERFORMANCE OF THE PROGRAMS IS WITH YOU.  SHOULD THE
        PROGRAMS PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL
        NECESSARY SERVICING, REPAIR OR CORRECTION.

        IN NO EVENT WILL ANY COPYRIGHT HOLDER BE LIABLE TO YOU
        FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL
        OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR
        INABILITY TO USE THE PROGRAMS (INCLUDING BUT NOT LIMITED
        TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR
        LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF
        THE PROGRAMS TO OPERATE WITH ANY OTHER PROGRAMS), EVEN
        IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES.



Every reasonable effort has been made to assure the quality and completeness
of these programs. If you have any questions, comments or suggestions, or if
you believe that you have found a bug, please contact the author at the
address given at the end of this document.




                             Table of Contents


         1. Introduction
         2. Conventions Used in This Manual
         3. Configuring Sfware
         4. Running SfWare
         5. Downloading Fonts
         6. Special Effects
         7. Compressing Fonts
         8. Rotating Fonts
         9. Showing Fonts
        10. Viewing Fonts
        11. Softfont Information
        12. The Bold Effect
        13. The Fixed Spacing Effect
        14. The Fill Effect
        15. The Halftone Effect
        16. The Horizontal Fade/Mist Effect
        17. The Hollow Effect
        18. The Invert Effect
        19. The Mirror Effect
        20. The Mist Effect
        21. The Outline Effect
        22. The Proportional Spacing Effect
        23. The Resize Effect
        24. The Reverse Effect
        25. The Shadow Effect
        26. The Shade Effect
        27. The Slant Effect
        28. The Stripe Effect
        29. The Three-D Drop Shadow Effect
        30. The Tilt Effect
        31. The Hollow Three-D Drop Shadow Effect
        32. The Filled Three-D Drop Shadow Effect
        33. The Vertical Fade/Mist Effect
        34. Patterns
        35. Softfont Directory Listings
        36. Sfware Registration
        37. Contacting the Author
        38. Glossary
1. Introduction

The Sfware softfont utilities from Small Planet Software are MS-DOS
programs distributed under a shareware license agreement. These utilities
provide extensive font manipulation capabilities for HP LaserJet softfonts.

The Sfware utilities allow you to download, rotate, compress, expand, view,
and perform special effects on softfonts. The effects provided include
bold, fill, convert to fixed spacing, halftone, hollow, invert, mirror,
outline, convert to proportional spacing, resize, reverse, shade, shadow,
slant, stripe, three-d, hollow-three-d, and filled-three-d. The effects can
be tailored and customized for any font with various parameters and shading
patterns. All of these features are available from an integrated,
easy-to-use menu interface. For situations when you would like to run these
programs without human intervention (to download a selected group of fonts
every morning, for example) every feature is available from a stand-alone
utility.  The standalone utilities are described in another manual---this
manual documents the menu interface.

1.1. Getting Started

Sfware is ``shareware,'' and the author encourages archive maintainers to
post Sfware for downloading; you may have received your copy from almost
anywhere and almost anyone. Please make sure that you have a complete
distribution before you try to install Sfware.

1.1.1. Hardware Requirements

In order to use Sfware, you will need a PC, PS/2, or close compatible with
150KB or so of free memory. A hard disk is recommended, but not required. A
LaserJet+ or compatible printer is not actually required, but Sfware is
probably a little pointless without one! Note:  the original LaserJet
printer does not have the ability to use softfonts; the Sfware utilities
cannot help you use fonts with the original LaserJet printer.

If you want to use the SfShell program, you will need 300-400KB of free
memory and either a hard disk, a ram disk, or sufficient expanded memory
for swapping. You cannot use a removable (floppy) drive for swapping. The
shell is not required for any of the features available in Sfware, but it
does provide a user-interface for the Sfware utilities that is less
intimidating than the command line.

If you are running a version of DOS prior to 3.30, read the configuration
section carefully since you may have to do a little more work to get Sfware
installed.

1.1.2. Software Requirements

In addition to Sfware, you must have at least one HP LaserJet softfont
file.

1.1.3. Packing List

Sfware is distributed in four archive files. The archives are named
SFWverP1, SFWverP2, SFWverD1, and SFWverD2. In each file, the ver is
replaced by the Sfware version number. Every archive contains a file called
PACKING.xx that lists the files that should be present in the
archive.Please make sure that you have complete archives before you proceed
to install Sfware.

The ``P'' archives contain the Sfware programs and both are required in
order to install Sfware. The ``D'' archives contain documentation. The
``D1'' archive documents the SfShell interface, the ``D2'' archive
documents the individual utilities. Please refer to the file PRINTDOC in
SFWverP1 for instructions describing how to print the documentation.

1.2. Installation

1.2.1. Making Backups

Like any software package, it is always advisable to make backup copies of
the distribution diskettes or distribution archives. This is especially
important if you use an ``on the fly'' compression program to compress
executable files (e.g. PkLite). Sfware cannot be registered after it has
been compressed---you will need the original programs in order to register
Sfware. There is no compelling reason not to compress the programs after
you have registered them.

1.2.2. Hard Drive Installation

Create a subdirectory on your hard drive for the Sfware utilities; it does
not matter what drive you install onto or what you name the directory.For
the purpose of this manual, the directory D:\SF is assumed.  Copy all of
the files from the distribution diskette (or from the distribution archive)
into the Sfware directory.

1.2.3. Floppy Disk Installation

Copy all of the files from the distribution diskette (or from the
distribution archive) onto a floppy disk. This manual assumes that Sfware
has been installed in the directory D:\SF but it is not necessary to
install Sfware onto a hard disk.

Due to space limitations on floppy disks, it may not be possible to place
all of the files on a single diskette. If is the case, it is recommended
that you put SFSHELL.EXE and SFSHELL.HLP, on one floppy and all of the
other utilities on a second floppy. If you do not plan to use the shell,
you will not need the SfShell files on a diskette.

If you use a floppy-only system, you will only be able to use the SfShell
program if you have sufficient expanded memory (EMS) for SfShell to use a
swapping space when it runs the other utility programs.SfShell requires
either sufficient EMS or a non-removable disk for swapping.

Splitting the Sfware utilities across two floppies does not present any
real technical difficulties (aside from the location of swapping space) but
you should read the Configuration chapter carefully to make sure that you
have set things up properly. In particular, you will need to tell SfShell
where the utility programs are located.

1.3. Initial Configuration

Before you can use Sfware, you must run SfConfig to establish an initial
configuration.Please follow the `quick start' instructions in the READ.ME
file or read the Configuration chapter before trying to run Sfware.
2. Conventions Used in This Manual

2.1. Typographic convensions

2.1.1. typewriter

Typewriter type is used within this manual to denote explicit words or
commands or filenames that you type exactly the way they appear in this
manual. In this manual, FRUIT means you type ``F'' ``R'' ``U'' ``I'' ``T''
, whereas a fruit (italics are described below) might mean apple, or pear,
or any specific fruit.

2.1.2. italics

Italics are used to name a general ``class'' of things. If a command in
this manual contains a word in italics, you should replace that word with a
concrete example of ``one of those things'' when you type the command. For
example, a fontname in this manual means any valid, existing softfont; you
should type the name of an existing font file.

Occasionally, italics are used for emphasis (as they are in general
typography) but it will be clear from the context when that is the case.

2.1.3. boldface

Boldface is used to highlight words that appear in selection lists. It is
roughly analogous to the way typewriter text is used to indicate things you
should type; boldface indicates things you should select off of a list of
choices.

2.1.4. [[ brackets ]]

The stylized square brackets denote optional parameters. You should only
type what appears within the brackets when you want to use the associated
optional feature.

2.2. Sections

2.2.1. Captured Screens

Many of the chapters contain ``captured screens'' to provide a context for
the discussion of the choices available. These captured screens are taken
directly from version 1.1 of SfShell.

2.2.2. Technically Speaking

Many chapters end with a ``technically speaking'' section. This section
describes, more technically, what Sfware does. You don't have to read it
unless you want to. If you find the material in the technically speaking
sections intimidating, just ignore it. On the other hand, if you find that
something is not performing exactly the way that you thought it was
supposed to, this section may help you figure out why Sfware is doing
something other than what you expected.
3. Configuring Sfware

In order to make Sfware easier to use, all of the programs read a
configuration file each time they are executed. This configuration file
gives you the flexibility to assign default values to many of the options
and parameters of each program.

3.1. Name of the configuration file

All of the utilities can share the same configuration file. However, rather
than hardcoding the name of the configuration file, Sfware relies on the
existance of a DOS environment variable to determine the name of the
configuration file. Each Sfware utility expects the DOS environment
variable SFCFG to name the complete drive, path, and filename of a suitable
configuration file. For example, if you make a configuration file called
SF.CFG and you put it in the D:\SF directory, the DOS command SET
SFCFG=D:\SF\SF.CFG would be appropriate.

If the DOS environment variable SFCFG is undefined, each of the utilities
looks for a configuration file with the same name as its executable file
and the extension .CFG. For example, SFFX.EXE looks for SFFX.CFG.

3.1.1. Special note for DOS 2.xx users

In versions of DOS prior to version 3.xx, it was not possible for a program
to find out the name or directory of its executable file.  If SFCFG is
undefined, the utilities will look in the current directory for
configuration files. It is especially important to define SFCFG if you are
not using DOS 3.xx or later.

3.2. Using SfConfig

Frequently, the most difficult part of installing new software is the task
of configuring it to work correctly in your system. This may be true of
Sfware as well. In an effort to make the initial configuration as painless
as possible, Sfware comes with the SfConfig program.  SfConfig should be
run after the SFCFG environment variable, discussed above, has been set.

SfConfig will create a configuration file initialized with appropriate
defaults and allow you to select, interactively, the laser printer that you
use, the print device that you use, and name of your softfont
directory.These are the most site-specific configuration options.
SfConfig can be run again to change any one of these values; it
will not change anything else in the configuration file that you have
changed manually since the first time that you used SfConfig.

The following three settings can be made from within SfConfig:

3.2.1. Laser Printer

The Laser printer selection helps Sfware decide if font compression should
be enabled. Later versions of Sfware may make more use of this option.

3.2.2. Printer Output

The most common selection for printer output is LPT1. However, you can
select LPT1-4, PRN, or any valid file or device for printer output.

3.2.3. Font Directory

Most users keep all of their softfonts in one directory. If this is the
case, you can tell Sfware always to look for fonts in that directory
regardless of what directory you are currently in. This becomes the default
font directory. However, even if you do select a default font directory,
you can still override it and use any directory you want by selecting a new
directory with ``F4'' in SfShell or by specifying a fontdir on the command
line.

3.3. Format of the configuration file

The configuration file is a plain ASCII text file, and it should be edited
with a program that will not insert extra formatting characters when the
file is saved (I recommend Multi-Edit by American Cybernetics).

Each line of the configuration file is divided into three parts as follows:

programid parameter=value

The programid is seperated from the parameter by one or more spaces and the
parameter is separated from the value by an equal sign (=).  The programid
is optional but the parameter and the value are required (actually, the
value can technically be empty or blank but that is exactly the same as not
defining it at all).

Individual Sfware programs use the combination of programid and parameter
as a key to lookup the default value of each parameter. Any configuration
line that does not contain a programid automatically matches all
programid's for that parameter. Case is insignificant in the programid and
parameter.

A simple example should make everything clearer. Given the following
configuration file:

        PROG APPLE=1
        PROG ORANGE=2
        APPLE=3
        OTHER ORANGE=4

The value of PROG APPLE is 1, PROG ORANGE is 2, ANYTHING-ELSE APPLE is 3,
OTHER ORANGE is 4, and ANYTHING-ELSE ORANGE is undefined (blank, or
non-existant).

Each possible configuration parameter is described in the sections that
follow.The section header lists only the parameter if the programid is the
name of the utility program that uses it. For configuration parameters that
make special use of the programid, both parts are listed.  The parameters
are listed in alphabetical order by parameter.

3.4. ActionListSize

Usage: program ACTIONLISTSIZE=number
Used by: SfShell

Controls the amount of memory reserved for the font action list.  Each time
you choose to do something to a font (download it, compress it, perform a
special effect, etc.) that choice gets added to an action list. The actions
in the action list get performed when you press ``F10'' in SfShell. The
ACTIONLISTSIZE can be large, but it is advantageous to keep it relatively
small unless you have a lot of expanded memory (EMS). If it is too large,
it will be written to disk which may have a considerable impact on program
performance (especially on response time).

3.5. CommandFile

Usage: program COMMANDFILE=filename
Used by: SfShell

Specifies the name of the SfShell command file. The command file is used to
communicate between SfShell and the utility programs. The command file can
also be saved for later use to automatically re-run the selected actions.

3.6. Compress

Usage: program COMPRESS=YES or NO
Used by: SfFx, SfRotate

The Sfware utilities that write new softfont files use this flag to
determine if the softfonts should be written in PCL4/5 compressed format or
in the older, non-compressed format. Compression can produce very dramatic
decreases in the amount of disk space required for a softfont.However, the
compressed fonts are only recognized by LaserJet printers that are PCL4
compatible. The LaserJet Series II is not PCL4 compatible.Note, however,
that the Sfware utilities provide for decompression ``on the fly'' in most
cases. Please consult the section about downloading fonts for more
information.

3.7. Device

Usage: program DEVICE=filename
Used by: SfLoad, SfShow

Names the output device for Sfware utilities that interact directly with
the printer. The most common value is LPT1, but any DOS file or device name
may be used.

3.8. Esc

Usage: program ESC=YES or NO
Used by: SfDir

Controls how SfDir displays font information. If ESC is YES, escape
sequences are displayed by default. Otherwise a readable, text description
is displayed by default.

3.9. ExecOutput

Usage: program EXECOUTPUT=WINDOW or FULLSCREEN
Used by: SfShell

The individual Sfware utilities are run as ``child tasks'' from within
SfShell to perform the actions. The EXECOUTPUT option controls how output
is redirected from each utility. If WINDOW is used, the utilities are run
within a window on the screen, if FULLSCREEN is used, the utilities run on
a full DOS screen. The WINDOW selection looks better but it is an option so
that the feature can be disabled if it causes problems with your version of
DOS. If SfShell hangs your machine whenever you try to execute an action
list, the first thing you should try is setting EXECOUTPUT=FULLSCREEN.

3.10. FontDir

Usage: program FONTDIR=directory
Used by: SfShell, SfCmpr, SfFx, SfLoad, SfRotate, SfShow

Names the DOS subdirectory where HP LaserJet softfonts are located. This is
the default input and output directory for Sfware utilities that read or
write softfont files.

3.11. FontExtn

Usage: program FONTEXTN=ext
Used by: SfShell, SfCmpr, SfFx, SfLoad, SfRotate, SfShow

Names the default filename extension for softfont files. If you specify
either an input softfont name or an output softfont name that does not
include an extension, the Sfware utilities will append this extension to
the filename. Note: it is possible to specify that a file should not have
any extension by ending the filename with a period.

3.12. FontListSize

Usage: program FONTLISTSIZE=number
Used by: SfShell

The size of the font list determines how many softfonts SfShell can place
in the scrolling font window. Like the action list, this parameter can be
very large but performance will be degraded if it is so large that it is
written to disk.

3.13. GraphBack

Usage: program GRAPHBACK=number
Used by: SfShell, SfView

Controls the background color in graphics mode. The following colors can be
used (they must be selected by number): 0=black, 1=blue, 2=green, 3=cyan,
4=red, 5=magenta, 6=brown, 7=light gray, 8=dark gray, 9=light blue,
10=light green, 11=light cyan, 12=light red, 13=light magenta, 14=yellow,
and 15=white.

3.14. GraphCard

Usage: program GRAPHCARD=cardname
Used by: SfShell, SfView

Tells SfShell what kind of graphics card you are using. By default, SfShell
tries to determine what kind of graphics card you have and adjust
accordingly.However, if it makes the wrong choice, you can force SfShell to
select one of the following: CGA, MCGA, VGA, EGA, EGA64, EGAMONO, IBM8514,
ATT, HERC, and PC3270.

A complete list of available graphics resolutions for each card/mode is
available under the section on ``GraphMode''.

3.15. GraphForg

Usage: program GRAPHFORG=number
Used by: SfShell, SfView

Controls the foreground color in graphics mode.

3.16. GraphGrid

Usage: program GRAPHGRID=number
Used by: SfShell, SfView

Controls the color of the gridlines in the graphics display.

3.17. GraphMode

Usage: program GRAPHMODE=number
Used by: SfShell, SfView

Controls the graphics mode number for the selected graphics card. It is
impossible for SfShell to know if you have selected a reasonable graphics
mode. The results of using an incorrect or invalid graphics mode are
undefined (and unpredictable!).

The following table lists all of the graphics cards and the modes
associated with them. In general, it is not necessary to specify a graphics
mode since the highest resolution mode is selected by default:

    Card    |  Mode   | Resolution          | Palette
  --------------------------------------------------------------------
    CGA     |  0      | 320x200             | 0
    CGA     |  1      | 320x200             | 1
    CGA     |  2      | 320x200             | 2
    CGA     |  3      | 640x200             | 3
    CGA     |  4      | 640x200 (default)   | 2 color
    MCGA    |  0      | 320x200             | 0
    MCGA    |  1      | 320x200             | 1
    MCGA    |  2      | 320x200             | 2
    MCGA    |  3      | 320x200             | 3
    MCGA    |  4      | 320x200             | 2 color
    MCGA    |  5      | 640x480 (default)   | 2 color
    EGA     |  0      | 640x200             | 16 color
    EGA     |  1      | 640x350 (default)   | 16 color
    EGA64   |  0      | 640x200             | 16 color
    EGA64   |  1      | 640x350 (default)   | 4 color
    EGAMONO |  3      | 640x350 (default)   | 2 color
    HERC    |  0      | 720x348 (default)   | 2 color
    ATT     |  0      | 320x200             | 0
    ATT     |  1      | 320x200             | 1
    ATT     |  2      | 320x200             | 2
    ATT     |  3      | 320x200             | 3
    ATT     |  4      | 640x200             | 2 color
    ATT     |  5      | 640x400 (default)   | 2 color
    VGA     |  0      | 640x200             | 16 color
    VGA     |  1      | 640x350             | 16 color
    VGA     |  2      | 640x480 (default)   | 16 color
    PC3270  |  0      | 720x350 (default)   | 2 color
    IBM8514 |  0      | 640x480             | 256 color
    IBM8514 |  1      | 1024x768 (default)  | 256 color
  --------------------------------------------------------------------

3.18. MsgFile

Usage: program MSGFILE=filename
Used by: SfShell

SfShell forces all of the Sfware utilities to write error and completion
messages to the message file that you specify. When you leave SfShell, this
file will be displayed to give you a summary of the things that you did.

3.19. Numbers

Usage: program NUMBERS=base
Used by: SfShow

The numbers parameter is used by SfShow to select the numeric base of the
numbers printed around the reference grid. Valid options are hex, oct, dec,
and none for hexadecimal (base 16), octal (base 8), decimal (base 10) and
no reference numbers respectively. The default value is hex.

3.20. Pattern name

Usage: PATTERN name=pattern-string
Used by: SfShell, SfFx

The pattern programid introduces named patterns. Any pattern that you plan
to use more than once or that is very complex should probably be saved in
the configuration file. There is a whole chapter devoted to patterns and
pattern strings. Please consult that chapter for more information about
patterns.

The pattern created in the pattern chapter could be saved in the
configuration file with the name zig-zag by placing the following line in
the configuration file:

PATTERN ZIG-ZAG=0;34;85;136

3.21. Quiet

Usage: program QUIET=YES or NO
Used by: SfDir

Controls the degree of verboseness of messages from SfDir. In the future,
other utilities may use this flag for the same purpose.

3.22. RefSet

Usage: program REFSET=symbol-set
Used by: SfShow

If the reference set is defined, the reference character for each position
in the font will be printed in the upper right hand corner of each cell on
SfShow's grid. For example, setting sfshow refset=8u would make SfShow
print the reference characters with the 8U symbol set.You must select a
symbol set that is available in your laser printer's line-printer font. If
you don't want reference characters to be printed, use sfshow refset=none.

3.23. Replace

Usage: program REPLACE=YES or NO
Used by: SfCmpr, SfFx, SfLoad, SfRotate, SfShow

Each of the Sfware programs that can create new files use this flag to
determine if existing files should be destroyed without warning. If you set
this flag to YES, you can shoot yourself in the foot; if you leave it NO,
the Sfware utilities will always make sure the safety is on!

3.24. Sentence

Usage: program SENTENCE=string
Used by: SfShell, SfView, SfShow

Identifies the sentence to be displayed on graphical font preview screens
and printed on the reference page. The default sentence is: The quick red
fox jumped over the lazy brown dog. I said (very loudly), "THE QUICK RED
FOX JUMPED OVER THE LAZY BROWN DOG!" How many times?0, 1, 2, or 3456789
times.

3.25. SwitchChar

Usage: program SWITCHCHAR=char
Used by: SfShell, SfCmpr, SfFx, SfLoad, SfRotate, SfShow, SfView, SfInfo

Identifies the switch character. It must be set to either ``/'' or
``-''.Under MS-DOS, ``/'' is recommended. The switch character setting can
be ignored by SfShell users. SfShell makes sure that the correct switch
character is used when the utilities are invoked. For more information
about the uses of the switch character, consult the ``technically
speaking'' note at the end of the Conventions for Describing the Standalone
Utilities chapter.

3.26. Style name

Usage: STYLE name=number
Used by: SfShell, SfShow, SfFx

The ``style'' of a softfont is one of the font parameters that is used to
distinguish between two otherwise identical softfonts. The values defined
by HP are ``upright,'' ``italic'' and ``oblique.'' Using SfFx to create
variations on a font can potentially create two fonts that are
indistinguishable from each other. For example, ``hollowing'' a softfont
does not change any of its font characteristics. The STYLE parameter tells
the SfFx what style value to use in the font header for each effect. In
this way, the printer will always be able to tell the old and new fonts
apart. The name of the style must be one of the following: Bold, Fix, Fill,
Fill3d, HalfTone, Hollow, Hollow3d, Invert, Mirror, OutLine, Prop, Resize,
Reverse, Shade, Shadow, Stripe, Threed, and Tilt. The style value can be
any number between 0 and 255.If the effect changes some other
characteristic of the font, it is not necessary to change the style; this
is indicated with a style value of 0.

3.27. SfCmpr,
      SfFx,
      SfLoad,
      SfRotate,
      SfShow

Usage: program name=filename
Used by: SfShell

If the executable files for the Sfware utilities are kept in a different
directory or drive than the SfShell executable (for example, if you are
using the two-floppy disk setup described in the getting started chapter),
these parameters should name the respective executable files.The filename
given should be a complete filename with drive, path and extension. For
example, if SfShell is in your utilities directory but you keep the other
Sfware utilities in the directory D:\SF, then SFSHELL SFCMPR in the
configuration file should be defined like this:

 SFSHELL SFCMPR=D:\SF\SFCMPR.EXE

And analogously for all the other utilities.

3.28. SwapFile

Usage: program SWAPFILE=filename
Used by: SfShell

The swapfile parameter names the file that SfShell should use for a
swapfile if it cannot swap to EMS. The swapfile filename should be a
complete filename with drive and path. The swapfile must be on a
non-removable medium.If you specify a swapfile on a removable medium,
SfShell will not be able to swap and you will not be able to use the shell
very effectively.

3.29. Typefaces

Usage: program TYPEFACES=filename
Used by: SfShell, SfInfo, SfShow, SfDir

The typefaces parameter names the file that lists typeface names. Every
softfont has a typeface number. A name is associated with each typeface
number; this is the name displayed by SfShell in the typeface column, and
by SfInfo, SfShow and SfDir. Because the number of typefaces is growing and
is subject to change, you can supply an additional typeface list that
identifies any and all typeface numbers. Sfware is distributed with the
file TYPEFACES.LST that contains all of the Hewlett Packard typeface names
defined as of PCL5. If you have an old or non-standard softfont, this name
may not accurately reflect the style of the characters contained in the
font.

The typefaces file is a plain text file. Each line should begin with a
typeface number (typeface numbers 0 through 511 are valid as of PCL5;
earlier printers only recognize typefaces numbered 0 through 255).  The
rest of the line is the typeface name. Lines that begin with a semicolon
are ignored. The typeface numbers must be entered, one per line, in
ascending order.

3.30. Sample File

This is a sample configuration file. This sample does not contain all of
the possible configuration variables because many require defaults that are
system-specific (graphics cards, program filenames, etc.) and many
repetitious lines have been deleted.

-------------------------------------------------------------------------
Device      = LPT1
FontDir     = .
FontExtn    = SFP
Replace     = No
Compress    = No
;
SfShow Sentence=The quick red fox jumped over the lazy brown dog.
;
SfShell CommandFile=SFSHELL.CMD
SfShell SwapFile=SFSHELL.\$\$\$
SfShell MsgFile=SFSHELL.MSG
SfShell ExecOutput=Window
;
SfShell FontListSize = 35
SfShell ActionListSize = 35
;
; The Pattern and Style lines are for SfFx
;
Pattern DarkSaw         = 255/127/62/28/8/128/193/227/247
Pattern LightSaw        = 128/65/34/20/8/0/0/0
Pattern NarrowBackslash = 136/68/34/17
Pattern TightSaw        = \$6B/\$DD/\$B6/\$6B/\$DD/\$B6
Pattern DecoSlash       = \$D2/\$69/\$B4/\$5A/\$2D/\$96/\$4B/\$A5
Pattern Cross           = \$11/\$BB/\$EE/\$BB
;
; Styles defined by HP:
;
; 0 = Upright
; 1 = Italic
; 2 = Oblique
;
Style Fill      =  5
Style Halftone  = 15
Style Hollow    =  3
Style Invert    = 14
Style Mirror    = 13
-------------------------------------------------------------------------

3.31. Command Files

The standalone utilities, whether they are run from the command line
directly or invoked automatically by SfShell, accept all of their input on
the command line. Since this imposes a severe limit on the amount of input
that can be provided, the utilities also accept input from a command file.

SfShell creates a command file automatically to communicate with the
standalone utilities and you can use them outside of SfShell, but
understanding what they are and how they work is not important to using
Sfware.Feel free to skip this section.

The standalone utilities accept the name of the command file on the
/@:filename option.

If a command file is used, the utility will read commands from the file as
if they were typed as parameters. The format of the command file is simple:
each line should begin with an asterisk followed by the name of the utility
followed by a space. The rest of each line is interpreted exactly as if it
were typed on the command line.  Because each line identifies which utility
it is for, the same command file can be passed to several utilites. Each
utility will only use the lines that are intended for it.

For example, the command file below downloads several fonts:

*sfload tr* /expand *sfload tr* /expand /landscape *sfload logo.sfp /expand

If this command file is saved as AUTOLOAD.CMD, I would tell SfLoad to
execute it by entering:

        SFLOAD /@:AUTOLOAD.CMD

In general, this ability is of little use beyond downloading fonts (every
morning, for example). However, the SfShell program makes extensive use of
this feature to pass parameters to child processes when it executes the
individual utilities to perform actions for the user.
4. Running SfWare

There are two ways to use the Sfware package. First, the SfShell program
provides an easy to use menu interface to all the utilities.  This is the
easiest way to become familiar with the Sfware utilities.However, if you
have limited memory available, or if you want to run the Sfware utilities
automatically (from a batch file, for example) you can run each utility
separately. If you run the utilities individually, you must supply the
parameters as command line options. If you use Sfware from within the
shell, you will be prompted for each parameter.

The rest of this document assumes that you are using the shell.  If you do
not plan to use the shell, you should still skim this manual for a brief
overview of Sfware's features. The reference to the individual Sfware
utilities is in the files SFUTILSO.PCL and SFUTILSE.PCL.

To start the shell, go to (To ``go to'' the Sfware subdirectory, move to
the drive that contains Sfware and use the CHDIR command to make the Sfware
subdirectory the current directory (e.g. D:  ``Enter'' CHDIR \SF ``Enter''
).) the Sfware subdirectory (or the Sfware floppy) and enter:

 SFSHELL [[fontdir]] [[/MONO]] [[/NOEMS]]

When the shell is run, it will attempt to detect what kind of video adapter
you have and adjust itself accordingly. If you find that SfShell makes the
wrong decision, or you are using a computer with an LCD monitor and would
prefer a simple black-and-white display, use the /MONO switch. If you do
not want SfShell to use EMS memory for swapping, use the /NOEMS switch. The
/NOEMS switch forces SfShell to swap to disk. The optional parameter
fontdir selects what drive/directory and mask SfShell should use to scan
for softfonts. The default fontdir is set in the configuration file.

4.1. Up and running

When run, SfShell will display a brief startup message. The startup message
displays memory usage and indicates where various buffers are allocated.

-------------------------------------------------------------------------------
D:\SF>sfshell
┌─┬───────────────────────────────────────────────────────────────────┬─┐
│■│ SfShell vers 1.1:  Copyright (c) 1990-92 by Small Planet Software │■│
└─┴───────────────────────────────────────────────────────────────────┴─┘
198kb of RAM, 2688kb of EMS, and 3478kb of disk space available.
Temporary files will be written to D:\TMP\
Font list allocated, 35 elements in EMS, 2656 kb remain.
Action list allocated, 35 elements in EMS, 2592 kb remain.















-------------------------------------------------------------------------------
                     Figure 4.1. Initialization message

Performance may suffer noticably if SfShell is forced to place one or more
buffers on disk. It is probably better to make the buffers small enough to
fit in main memory (or EMS, if it is available). Consult the configuration
chapter for more information about buffers and memory usage.

After the startup message, SfShell will display its main title screen.

--------------------------------------------------------------------------------

░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░┌─┬──────────────────────────────────────────────────────────────────┬─┐░░░░░
░░░│■│ SFSHELL vers 1.1: Copyright (c) 1990-92 by Small Planet Software │■│░░░░░
░░░└─┴──────────────────────────────────────────────────────────────────┴─┘░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░Reading░Directory░...░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░* Please register this program *░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 13/13 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 4.2. Main title screen

The numbers at the bottom left of the title screen will change as SfShell
reads the font directory. The first number is the number of fonts that
SfShell has found so far, and the second is the number of files that match
the fontdir mask.

4.2. Main menu

After reading the font directory, SfShell will display the main menu.  The
main menu is the starting point for all further font actions.  If there are
no softfonts in the font directory, SfShell will present the ``changing
directories'' prompt discussed below. If the number of fonts in the
directory exceeds the size of the font list buffer, SfShell will print a
message indicating that the main menu font list is incomplete.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────┬──────┬─────┬───┬──────┬────────┬─────────┬──────────────┐░
░│  Typeface        │ Sty  │ Set │ O │ Bold │ Height │ Pitch   │ Filename     │░
░│──────────────────┼──────┼─────┼───┼──────┼────────┼─────────┼──────────────│░
░│  Courier         │ Upri │ 10J │ P │ Med  │  9.9pt │ 12.0cpi │ ar010aaa.esp ░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  9.9pt │ n/a     │ cmr10.sfp    ░░
░│  Spartan         │ Upri │  0U │ P │ Med  │  9.9pt │ n/a     │ nb010aaa.usp ░░
░│  Times Roman     │ Upri │  0Q │ L │ Bold │ 12.0pt │ n/a     │ trb1ctxc.sfl ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  6.0pt │ n/a     │ trr0ousc.sfp ▓░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  8.0pt │ n/a     │ trr0wusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 10.0pt │ n/a     │ trr14txc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 12.0pt │ n/a     │ trr1ctxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1ktxc.sfp ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │ 14.0pt │ n/a     │ trr1kusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1kxxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 18.0pt │ n/a     │ trr20txc.sfp ░░
░│  Univers         │ Upri │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unb1ctxc.sfp ░░
░│  Univers         │ Ital │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unj1ctxc.sfp ░
░│──────────────────┴──────┴─────┴───┴──────┴────────┴─────────┴──────────────│░
░│                                                                            │░
░└─────────────────────────────────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░Enter=Select░Font░░░F1=Help░░░F3=Exit░░░F4=Directory░░░F10=Process░
░183░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                           Figure 4.3. Main menu

The column headings across the top of the main menu describe the primary
characteristics of each font.

 Heading   Font characteristic displayed
 --------- -----------------------------------------------------------
 Typeface  Typeface name of the font
 Fontname  The fontname in the softfont file
 Sty       Style of the font
 Set       Font symbol set
 O         Font Orientation, Portrait or Landscape
 Bold      Degree of ``boldness'' of the font
 Height    Font size in points
 Pitch     Font pitch (characters-per-inch) for fixed pitch fonts
 Filename  Name of the softfont file

SfShell attempts to display informative names for each characteristic.
However, if the value of a characteristic falls outside the bounds expected
by SfShell, the numerical value of the characteristic will be printed in
square brackets.

Either the typeface or the fontname can be displayed in the first
column.The ``Tab'' key alternates between them. The fontname is assigned by
the font designer and stored in the softfont header. Some fonts may not
have a readable fontname.

For proportionally spaced fonts, the pitch is listed as n/a because the
font has no fixed pitch. For scalable fonts, the height is listed as n/a
for the same reason. The great majority of actions that can be selected for
softfonts apply to bitmapped (non-scalable) fonts only.  For example,
SfShell cannot perform any special effects on scalable fonts.SfShell can
download scalable fonts and show (print font summaries of) scalable fonts.

4.3. Selecting fonts

[[ Note: in this text version of the manual, you cannot see the highlight ]]
[[ bar in the screen-capture shots.  You can see the highlight bar in     ]]
[[ the printed version of the manual                                      ]]

The highlight bar is used to select a font. You can only select one font at
a time. The arrow keys move the highlight bar.

If you want to perform the same action on several fonts, you must select
each font in turn and apply the action. If you want to perform more than
one action on a single font, simply reselect the font.

4.4. Changing Directories

The initial font directory, fontdir, is either the default font directory
specified in the configuration file or is selected with a command line
option when running SfShell. You can change the current font directory by
pressing ``F4'' while the main menu is displayed.

--------------------------------------------------------------------------------
                                SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░┌────────────── Enter new softfont drive/directory ───────────────┐░░░░░░░
░░░░░░│                                                                 │░░░░░░░
░░░░░░│ New softfont mask: D:\FONTS\*.*                                 │░░░░░░░
░░░░░░│                                                                 │░░░░░░░
░░░░░░│                F1=Help   Esc=Exit   Enter=Accept                │░░░░░░░
░░░░░░└─────────────────────────────────────────────────────────────────┘░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░183░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                   Figure 4.4. Changing font directories

The directory that you select must contain at least one font file. If no
fonts match the fontdir mask that you enter, you will be returned to the
directory prompt.

4.5. Font actions (in brief)

After selecting a font with the highlight bar, press ``Enter'' (or
``Return'' , as appropriate). SfShell will respond by ``popping up'' the
action menu.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ Download  Effect  Compress  Rotate  Show  View  Info │tch   │ Filename     │░
░└──────────────────────────────────────────────────────┘──────┼──────────────│░
░│  Courier         │ Upri │ 10J │ P │ Med  │  9.9pt │ 12.0cpi │ ar010aaa.esp ░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  9.9pt │ n/a     │ cmr10.sfp    ░░
░│  Spartan         │ Upri │  0U │ P │ Med  │  9.9pt │ n/a     │ nb010aaa.usp ░░
░│  Times Roman     │ Upri │  0Q │ L │ Bold │ 12.0pt │ n/a     │ trb1ctxc.sfl ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  6.0pt │ n/a     │ trr0ousc.sfp ▓░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  8.0pt │ n/a     │ trr0wusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 10.0pt │ n/a     │ trr14txc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 12.0pt │ n/a     │ trr1ctxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1ktxc.sfp ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │ 14.0pt │ n/a     │ trr1kusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1kxxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 18.0pt │ n/a     │ trr20txc.sfp ░░
░│  Univers         │ Upri │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unb1ctxc.sfp ░░
░│  Univers         │ Ital │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unj1ctxc.sfp ░
░│──────────────────┴──────┴─────┴───┴──────┴────────┴─────────┴──────────────│░
░│                                                                            │░
░└─────────────────────────────────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░182░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
         Figure 4.5. Action menu (overlaying the main menu screen)

The action menu has seven choices. These seven choices correspond to seven
of the utility programs that come with Sfware (actually, the View and Info
choices are built-in, but corresponding utilities are provided).The action
choices are described in detail in future chapters.You select an action by
moving the highlight bar with the arrow keys and pressing ``Enter'' when
the highlight bar is on the selection you wish to make. You can select more
than one action per font.

4.6. Pulling the Trigger

After you have selected an action (as described above) for a softfont,
pressing ``F10'' will cause SfShell to perform the action.You can select
more than one effect for more than one font before you press ``F10'' . If
you do not press ``F10'' before you leave SfShell, no actions will be
performed. Later chapters describe exactly what happens when press ``F10''
but you do not need to know how your actions are performed if you are
always going to use the shell.
5. Downloading Fonts

Downloading fonts ``teaches'' the LaserJet printer how to print a
particular font.The actual downloading is performed by the SfLoad utility.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│┌Download─────┐ct  Compress  Rotate  Show  View  Info │tch   │ Filename     │░
░└├─────────────┤───────────────────────────────────────┘──────┼──────────────│░
░││ ■Image      │   │ Upri │ 10J │ P │ Med  │  9.9pt │ 12.0cpi │ ar010aaa.esp ░
░││  Expand     │   │ Upri │  0U │ P │ Med  │  9.9pt │ n/a     │ cmr10.sfp    ░░
░││  Compress   │   │ Upri │  0U │ P │ Med  │  9.9pt │ n/a     │ nb010aaa.usp ░░
░││  Portrait   │   │ Upri │  0Q │ L │ Bold │ 12.0pt │ n/a     │ trb1ctxc.sfl ░░
░││  Landscape  │   │ Upri │  0U │ P │ Med  │  6.0pt │ n/a     │ trr0ousc.sfp ▓░
░│└─────────────┘   │ Upri │  0U │ P │ Med  │  8.0pt │ n/a     │ trr0wusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 10.0pt │ n/a     │ trr14txc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 12.0pt │ n/a     │ trr1ctxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1ktxc.sfp ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │ 14.0pt │ n/a     │ trr1kusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1kxxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 18.0pt │ n/a     │ trr20txc.sfp ░░
░│  Univers         │ Upri │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unb1ctxc.sfp ░░
░│  Univers         │ Ital │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unj1ctxc.sfp ░
░│──────────────────┴──────┴─────┴───┴──────┴────────┴─────────┴──────────────│░
░│                                                                            │░
░└─────────────────────────────────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░177░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 5.1. Download options

5.1. Options

As you can see, there are five additional options that can be selected for
the download action. These options are described below. The option(s) that
are selected are marked with a small square. The options that do not have a
square are not selected. Use the ``Spacebar'' to toggle an option between
selected and unselected.

Some combinations of options are not allowed (for example, you cannot
select both Compress and Expand at the same time). When you select an
option, other options that cannot be selected in combination with it will
be unselected automatically.

5.1.1. Image

Downloading a softfont as an image has two advantages: first, it is the
fastest method and second, it should work for softfont formats that the
Sfware utilities are not otherwise equipped to handle. For example, if a
new laserjet printer, the Series IV perhaps, is developed with a new kind
of softfont, downloading will continue to work with that new printer as
long as you select the image option. The image option is the default.

If the image option is so great, why would I use anything else?  Good
question.There are two possible reasons. First, softfonts, especially large
softfonts, take up a lot of disk space. The LaserJet IIP, III, and IIIP
printers all support softfont compression (which provides substantial disk
space savings for large softfonts). However, the LaserJet Series II printer
does not support compression. If you have a LaserJet Series II printer and
you always use Sfware to download your softfonts, you can still take
advantage of the substantial space savings of softfont compression:
compress all of your softfonts on disk and expand them when they are
downloaded. You can't use the image option if you want to expand them when
they are downloaded.

In a similar manner, softfonts can be rotated as they are downloaded if
your laser printer does not support auto-rotation of fonts.

5.1.2. Expand

When the Expand option is used, softfonts that are in PCL4 compressed
format are expanded as they are being downloaded to the printer. This
allows you to keep compressed softfonts on disk even if your printer does
not support softfont compression.

5.1.3. Compress

When the Compress option is used, softfonts are compressed using the PCL4
compression format as they are being downloaded to the printer.  I can't
think of a single good reason to use this option. It is provided only to
satisfy the author's compulsive desire to provide the greatest possible
flexibility.

5.1.4. Portrait

The Portrait option rotates the softfont to portrait orientation before
downloading it.This option has no effect if the font is already portrait.

5.1.5. Landscape

The Landscape option rotates the softfont to landscape orientation before
downloading it. This option has no effect if the font is already landscape.

Note:downloading both orientations does not imply that you will be able to
use both orientations on the same page. The LaserJet Series II printer, for
example, cannot print both portrait and landscape fonts on the same page.
6. Special Effects

Because they are many and varied, each special effect is described in its
own chapter (later in this document). All of the effects are produced by
the SfFx program. The effects are available from the following menu (and
the appropriate submenus from this menu):

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ Download  Effect  Compress  Rotate  Show  View  Info │tch   │ Filename     │░
░└───────────┬─────────────┬────────────────────────────┘──────┼──────────────│░
░│  Courier  │ Bold        │ 10J │ P │ Med  │  9.9pt │ 12.0cpi │ ar010aaa.esp ░
░│  Times Rom│ Fade/Mist  │  0U │ P │ Med  │  9.9pt │ n/a     │ cmr10.sfp    ░░
░│  Spartan  │ Fill        │  0U │ P │ Med  │  9.9pt │ n/a     │ nb010aaa.usp ░░
░│  Times Rom│ Halftone    │  0Q │ L │ Bold │ 12.0pt │ n/a     │ trb1ctxc.sfl ░░
░│  Times Rom│ Hollow      │  0U │ P │ Med  │  6.0pt │ n/a     │ trr0ousc.sfp ▓░
░│  Times Rom│ Invert      │  0U │ P │ Med  │  8.0pt │ n/a     │ trr0wusc.sfp ░░
░│  Times Rom│ Mirror      │  0Q │ P │ Med  │ 10.0pt │ n/a     │ trr14txc.sfp ░░
░│  Times Rom│ Outline     │  0Q │ P │ Med  │ 12.0pt │ n/a     │ trr1ctxc.sfp ░░
░│  Times Rom│ Resize      │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1ktxc.sfp ░░
░│  Times Rom│ Reverse     │  0U │ P │ Med  │ 14.0pt │ n/a     │ trr1kusc.sfp ░░
░│  Times Rom│ Shade       │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1kxxc.sfp ░░
░│  Times Rom│ Shadow      │  0Q │ P │ Med  │ 18.0pt │ n/a     │ trr20txc.sfp ░░
░│  Univers  │ Slant/Tilt │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unb1ctxc.sfp ░░
░│  Univers  │ Spacing    │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unj1ctxc.sfp ░
░│───────────│ Stripe      │─────┴───┴──────┴────────┴─────────┴──────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░177░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                         Figure 6.1. Effect options

Although you can select more than one effect for a given font, this does
not apply the effects in sequence. In order to perform two effects in
sequence, you must perform the first effect by selecting it and pressing
``F10'' , then perform the second effect on the font produced as output by
the first effect.

In the following chapters, where each effect is discussed, there are no
examples of the effects because it was necessary to limit the number of
fonts used in this document. This reflects a limitation in some LaserJet
printers that prohibits printing more than sixteen different fonts on a
given page.

A second document called EXAMPLES.PCL is included in the Sfware
distribution.This file contains examples of some of the effects that are
possible.The corresponding document EXAMPL16.PCL is provided for those
printers that cannot print more than sixteen fonts per page.

Technically, every character within a softfont is defined within a
rectangle.The rectangle is subdivided into squares like a sheet of graph
paper.Inside the rectangle, some of the squares are black and some are
white. Because the squares are very small, the effect of printing them on a
sheet of paper is that they form the lines and curves that make up each
charcter. In the descriptions of effects that follow, it is sometimes
necessary to describe the way that ``squares'' within the rectangle are
manipulated. The region of the grid that defines the character (the black
dots on the ``graph paper'') is referred to as either the black area or the
foreground, and the other ``squares'' are referred to as the white area or
the background.

6.1. Ranges

Because the range option is available on almost every effect, it is
described once here rather than repeating it for every effect.

The range option is available on all of the effects except proportional and
fixed spacing. Specifying a range limits an effect to certain, specific
characters. For example, you could limit the range of an effect to all of
the uppercase letters.

Pressing ``F2'' on any of the special effect panels that support the range
option will present a list like the following:

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│ ┌────────── Select Range Start ──────────┐                  │────────────│░
░│ │ │ ^@   sp    @    `    Ç    á    └    α  │─┐                │r010aaa.esp ░
░│ │ │ ^A    !    A    a    ü    í    ┴    ß  │┌┴┐░░░░░░░        │mr10.sfp    ░░
░│ │ │ ^B    "    B    b    é    ó    ┬    Γ  ││░│░    ░░░░      │b010aaa.usp ░░
░│ │ │ ^C    #    C    c    â    ú    ├    π  │└─┘░      ░░      │rb1ctxc.sfl ░░
░│ │ │ ^D    $    D    d    ä    ñ    ─    Σ  │░░░░    ░░░░      │rr0ousc.sfp ▓░
░│ │ │ ^E    %    E    e    à    Ñ    ┼    σ  │░░░░░░░░░░        │rr0wusc.sfp ░░
░│ │ │ ^F    &    F    f    å    ª    ╞    µ  │░░░░    ░░░░      │rr14txc.sfp ░░
░│ │ │ ^G    '    G    g    ç    º    ╟    τ  │░░░░      ░░░░    │rr1ctxc.sfp ░░
░│ │ │ ^H    (    H    h    ê    ¿    ╚    Φ  │░░░░      ░░░░    │rr1ktxc.sfp ░░
░│ │ │ ^I    )    I    i    ë    ⌐    ╔    Θ  │░░░░    ░░░░      │rr1kusc.sfp ░░
░│ │ │ ^J    *    J    j    è    ¬    ╩    Ω  │░░░░░░░░░░        │rr1kxxc.sfp ░░
░│ │ │ ^K    +    K    k    ï    ½    ╦    δ  │                  │rr20txc.sfp ░░
░│ │ │ ^L    ,    L    l    î    ¼    ╠    ∞  │                  │nb1ctxc.sfp ░░
░│ │ │ ^M    -    M    m    ì    ¡    ═    φ  │t/Preview Pattern │nj1ctxc.sfp ░
░│─└─│ ^N    .    N    n    Ä    «    ╬    ε  │──────────────────┘────────────│░
░│   │ ^O    /    O    o    Å    »    ╧    ∩  │                               │░
░└───└» More   «────────────────── (  0-255) ┘────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                    Figure 6.2. The Range selection menu

Use the arrow keys (and ``PgUp'' and ``PgDn'' ) to move the highlight bar
to the desired character then press ``Enter'' . The first time that you
press ``Enter'' , you will be selecting the first character of the range
and the second time you will be selecting the last character of the range.

The range effect is limited to a specific, contiguous subset of the ASCII
character set. That is, you can specify any single range but you cannot
specify an ``exception range'' (e.g. do all the characters except the
lowercase letters) or two or more discontiguous ranges (e.g.  do all the
upper case letters and all the lower case letters).

6.2. Technically Speaking

Most fonts do not contain a real blank space character. The LaserJet
printer moves over by the default HMI everytime it encounters a character
that does not exist in the current font; most fonts rely on the fact that
the default HMI is exactly one space wide. This can create an unpleasant,
choppy appearance if a special effect (e.g.  halftoning) is applied that
modifies the white background of each character.

In several places, SfShell inserts a physical space for you to circumvent
this problem. There is no way to control this action from within SfShell,
but if you run SfFx directly you can have complete control.
7. Compressing Fonts

Compression, available in the LaserJet IIP and subsequent printers, allows
you to keep softfonts in a compressed format on disk. For fonts with large
point sizes, this can achieve a very significant space savings.  The actual
compression is performed by the SfCmpr utility.

--------------------------------------------------------------------------------
                                SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ Download  Effect ┌Compress──────────────────────────────────────────────┐  │░
░└──────────────────├──────────────────────────────────────────────────────┤──│░
░│  Courier         │ TRR14TXC.SFP is compressed.  It will be expanded.    │p ░
░│  Times Roman     │ Expanded file: D:\FONTS\TRR14TXC.SFP                 │  ░░
░│  Spartan         └──────────────────────────────────────────────────────┘p ░░
░│  Times Roman     │ Upri │  0Q │ L │ Bold │ 12.0pt │ n/a     │ trb1ctxc.sfl ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  6.0pt │ n/a     │ trr0ousc.sfp ▓░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  8.0pt │ n/a     │ trr0wusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 10.0pt │ n/a     │ trr14txc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 12.0pt │ n/a     │ trr1ctxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1ktxc.sfp ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │ 14.0pt │ n/a     │ trr1kusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1kxxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 18.0pt │ n/a     │ trr20txc.sfp ░░
░│  Univers         │ Upri │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unb1ctxc.sfp ░░
░│  Univers         │ Ital │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unj1ctxc.sfp ░
░│──────────────────┴──────┴─────┴───┴──────┴────────┴─────────┴──────────────│░
░│                                                                            │░
░└─────────────────────────────────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░177░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 7.1. The Compress panel

The panel indicates the name of the current font and whether it will be
compressed or expanded. You must enter the name of the font file which will
be created to hold the new font. The default filename is the same as the
original filename. In this case, the original file will be replaced by the
compressed or expanded font.
8. Rotating Fonts

Softfonts come in two orientations: portrait and landscape. Newer LaserJet
printers are capable of ``automagic'' internal font rotation but older
LaserJets and some compatibles do not have this ability. Sfware provides
the ability to convert from one orientation to the other. The actual
rotation is performed by the SfRotate utility.

--------------------------------------------------------------------------------
                                SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ Download  Effect  Compress ┌Rotate──────────────────────────────────────┐  │░
░└────────────────────────────├────────────────────────────────────────────┤──│░
░│  Courier         │ Upri │ 1│ TRR14TXC.SFP is a portrait font.           │p ░
░│  Times Roman     │ Upri │  │ Landscape file: TRR14TXC.SFL               │  ░░
░│  Spartan         │ Upri │  └────────────────────────────────────────────┘p ░░
░│  Times Roman     │ Upri │  0Q │ L │ Bold │ 12.0pt │ n/a     │ trb1ctxc.sfl ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  6.0pt │ n/a     │ trr0ousc.sfp ▓░
░│  Times Roman     │ Upri │  0U │ P │ Med  │  8.0pt │ n/a     │ trr0wusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 10.0pt │ n/a     │ trr14txc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 12.0pt │ n/a     │ trr1ctxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1ktxc.sfp ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │ 14.0pt │ n/a     │ trr1kusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1kxxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 18.0pt │ n/a     │ trr20txc.sfp ░░
░│  Univers         │ Upri │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unb1ctxc.sfp ░░
░│  Univers         │ Ital │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unj1ctxc.sfp ░
░│──────────────────┴──────┴─────┴───┴──────┴────────┴─────────┴──────────────│░
░│                                                                            │░
░└─────────────────────────────────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░177░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 8.1. The Rotate Panel

The panel indicates the name of the current font and its orientation.  You
must enter the name of the font file which will contain the rotated font.

The default filename is the same as the original filename with the
extension SFL if the resulting font will be landscape and SFP if the
resulting font will be portrait.
9. Showing Fonts

Showing a font creates a reference page that displays every character in
the font. The reference page includes all of the font characteristics, the
font selection sequence and a chart of all of the characters in the font.
This function is performed by the SfShow utility.

9.0.1. What's to Show?

Every softfont can contain up to 256 different characters numbered from 0
to 255. Most fonts don't define all 256 different characters. The character
chart is a grid that has ``spaces'' for each of the possible characters.If
there are some character positions in the font that are not used, the
spaces for those characters will be blank in the chart.

For small fonts, the character chart is a 16x16 grid on a single page.If
the font is larger than about 36pt (or has some very tall or very wide
characters), the characters may be too large to fit into the spaces in a
16x16 grid. In this case, multiple reference pages may be printed for the
font. When multiple reference pages are required, SfShell attempts to use
the minimum number of pages.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ Download  Effect  Compress  Rotate ┌Show─────────┐fo │tch   │ Filename     │░
░└────────────────────────────────────├─────────────┤───┘──────┼──────────────│░
░│  Courier         │ Upri │ 10J │ P ││ ■Image      ││ 12.0cpi │ ar010aaa.esp ░
░│  Times Roman     │ Upri │  0U │ P ││  Expand     ││ n/a     │ cmr10.sfp    ░░
░│  Spartan         │ Upri │  0U │ P ││  Compress   ││ n/a     │ nb010aaa.usp ░░
░│  Times Roman     │ Upri │  0Q │ L ││  Portrait   ││ n/a     │ trb1ctxc.sfl ░░
░│  Times Roman     │ Upri │  0U │ P ││  Landscape  ││ n/a     │ trr0ousc.sfp ▓░
░│  Times Roman     │ Upri │  0U │ P ││  No grid    ││ n/a     │ trr0wusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P ││  No refset  ││ n/a     │ trr14txc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │└─────────────┘│ n/a     │ trr1ctxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1ktxc.sfp ░░
░│  Times Roman     │ Upri │  0U │ P │ Med  │ 14.0pt │ n/a     │ trr1kusc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 14.0pt │ n/a     │ trr1kxxc.sfp ░░
░│  Times Roman     │ Upri │  0Q │ P │ Med  │ 18.0pt │ n/a     │ trr20txc.sfp ░░
░│  Univers         │ Upri │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unb1ctxc.sfp ░░
░│  Univers         │ Ital │  0Q │ P │ Bold │ 12.0pt │ n/a     │ unj1ctxc.sfp ░
░│──────────────────┴──────┴─────┴───┴──────┴────────┴─────────┴──────────────│░
░│                                                                            │░
░└─────────────────────────────────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░177░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                          Figure 9.1. Show options

9.1. Options

As you can see, there are five additional options that can be selected for
the download action. These options are described below. The option(s) that
are selected are marked with a small square. The options that do not have a
square are not selected. Use the ``Spacebar'' to toggle an option between
selected and unselected.

Some combinations of options are not allowed (for example, you cannot
select both Compress and Expand at the same time). When you select an
option, other options that cannot be selected in combination with it will
be unselected automatically.

9.1.1. Downloading Options

In order to create a reference page, SfShow must first download the
softfont.The following options control how each font is downloaded---they
have precisely the same meaning as the SfLoad options with the same
names:Image, Compress, Expand, Portrait, and Landscape.

9.1.2. No grid

The No grid option supresses grid lines on the reference page.

9.1.3. No Refset

For decorative or special purpose fonts, it may be helpful to have an
additional reference character printed (in plain ASCII) next to each symbol
in the chart. If reference marks are used, the reference character for each
position in the font will be printed in the upper right hand corner of each
cell on the grid. The No Refset option turns off the reference characters
for this font.

You must specify the reference set in the configuration file.

9.2. Technically Speaking

When multiple reference pages are required, SfShell attempts to use the
minimum number of pages, however, there are a few ``hidden'' constraints on
how it selects the first character for each page. In particular, it will
not skip characters on any single page (i.e. if the font defines ABCEFG but
not D, SfShell will not print ABCEFG on a reference page without an
intervening blank space where the D would be if it was defined. It wouldn't
be difficult to provide this option but it would make numbering the grid
much more difficult (read ``impossible'').

The reference numbers (printed around the chart) can be printed in
hexadecimal, decimal or octal or they can be turned off. The numbers option
(discussed in the configuration chapter) is provided to control this
feature.At present, this option cannot be changed from within SfShell.
10. Viewing Fonts

Viewing a font is the on-line equivalent of printing a reference
page.Viewing displays every character in the font on a grid similar to the
printed output created by showing a font. It can also display a sentence in
the font. A graphics adapter is required to view fonts.  The following
adapters are supported at this time: CGA, MCGA, VGA, EGA, EGA (Mono),
PC3270, IBM 8514, AT&T, and Hercules.

Selecting View switches to graphics mode and displays something like the
following:

--------------------------------------------------------------------------------
  The View Display Picture Cannot be Shown in this Version of the Manual
                          It is a Graphics Image
--------------------------------------------------------------------------------
                       Figure 10.1. The view display

10.1. Running View

The keys described below allow you to change the range of characters
displayed, the quality of the display, and the format of the display.

10.1.1. ``Esc''

You can leave at any time by pressing ``Esc'' .

10.1.2. ``PgUp'' / ``PgDn''

Pressing ``PgDn'' moves the range of characters displayed forward by one
``screenfull.'' If ASCII 255 is currently in the display, pressing ``PgDn''
has no effect. Pressing ``PgUp'' moves the range of characters displayed
backward by one screenfull. If ASCII 0 is currently in the display,
pressing ``PgUp'' has no effect.

10.1.3. ``Alt'' + ``A''

If you are displaying the font in a graphics mode that has the same number
of pixels-per-inch both horizontally and vertically across the display, the
``Alt'' + ``A'' key combination is not available.

If the number of pixels-per-inch horizontally and vertically is not the
same, (i.e.the display has a non-square aspect ratio) it is impossible to
display the characters without some distortion because the softfont is
defined with the same number of pixels-per-inch both horizontally and
vertically.

There are two kinds of distortion: stretch-distortion and ``reduced
resolution'' distortion.If every pixel of each character is displayed, the
letters will be stretch-distorted by the fact that the pixels are ``closer
together'' on the screen in one direction than the other.  Alternatively,
some rows or columns of pixels can be removed to avoid stretch distortion;
characters drawn this way suffer from distortion because they are printed
at a reduced resolution.

The ``Alt'' + ``A'' key-combination alternates between these two types of
distortion.

10.1.4. ``Alt'' + ``S''

Sometimes it is more useful to look at a font in the context of a sentence
than it is to look at each individual character. This allows you to see how
the characters interact with each other on the ``printed page.''The ``Alt''
+ ``S'' key-combination alternates between the grid display and the
sentence display. The sentence display looks like this:

--------------------------------------------------------------------------------
  The View Sentence Picture Cannot be Shown in this Version of the Manual
                          It is a Graphics Image
--------------------------------------------------------------------------------
                   Figure 10.2. The view sentence display

10.1.5. ``Other''

Pressing any other key changes the range of characters displayed to begin
with the key you pressed.
11. Softfont Information

If you have difficulty printing a particular font, SfInfo can help pinpoint
the source of the problem. SfInfo displays the contents of the softfont
header and the header of each character in the font. In addition, SfInfo
examines the font looking for possible printer incompatibilities.New
printers have a much more relaxed opinion about what constitutes a valid
font. A font that works on a LaserJet III may not work on a Series II;
SfInfo will be able to tell you why.

11.1. Running Info

Selecting Info displays a panel something like the following:

--------------------------------------------------------------------------------
                                SfShell vers 1.1
┌───────────────────────────« Softfont Information »───────────────────────────┐
│                                                                              │
│ Font name: CG Times              Font filename: D:\FONTS\TRR14TXC.SFP        │
│                                                                              │
│ Orientation  : Portrait        [  0]        All distances are in PCL dots    │
│ Symbol Set   :  0Q, Name unknown            ┌─────┐ ┬ ┬                      │
│ Spacing      : Proportional    [  1]        │     │ │ │ Baseline=30          │
│ Pitch        :  25.00cpi       [ 48,  0]    │     │ │ │ _                    │
│ Height       :  10.00pt        [166,171]    │  x  │ │ │ │ Xheight=19.00      │
│ Style        : Upright         [  0]        ├─────┤ │ ┴ ┴ ┐                  │
│ Stroke weight: Medium          [  0]        │-----│ │     ┘ Uline=8          │
│ Typeface     : Times Roman     [  5]        └─────┘ ┴ Cell height=40         │
│ PCL5 Typeface: Times Roman     [4101]       ├──┬──┤                          │
│                                                └ Cell width=43               │
│                                                                              │
│ Font selection : <ESC>(0Q<ESC>(s1p25h1v0s0b5T                                │
│ PCL5 selection : <ESC>(0Q<ESC>(s1p25h1v0s0b4101T                             │
│                                                                              │
│                                                                              │
│                                                                              │
│       F1=Help  F4=Char Info  F5=Addnl Desc  F6=Warnings  Esc=Exit            │
└──────────────────────────────────────────────────────────────────────────────┘
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░182░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 11.1. Info Main Panel

11.1.1. ``F1''

Pressing ``F1'' provides context-sensitive help for the Info panels.

11.1.2. ``Esc''

You can leave at any time by pressing ``Esc'' .

11.1.3. ``F4''

Pressing ``F4'' displays character information for the font. The dimensions
of the largest character in the font are summarized and a scrolling list of
the characters in the font is displayed.

The additional info panel looks like this:

--------------------------------------------------------------------------------
                               SfShell vers 1.1
┌──────────────────────────« Character Information »───────────────────────────┐
│                                                                              │
│  Widest bounding box on any character:   39 ("W")                            │
│ Tallest bounding box on any character:   38 ("j")                            │
│     Tallest ascender on any character:   30 (Ctrl-D)                         │
│    Deepest descender on any character:   10 ("<")                            │
│                 Largest combined cell: 39x40 (max width X max height)        │
│                                                                              │
│     ┌───────────┬────┬────┬──────┬──────┬──────┬──────┬──────┬───────┐       │
│     │ Character │ Cl │ Or │ Left │ Top  │ Wd   │ Ht   │ dX   │ Data  │       │
│     │───────────┼────┼────┼──────┼──────┼──────┼──────┼──────┼───────│       │
│     │ Ctrl-@    │  2 │  P │    2 │   28 │   21 │   29 │  100 │    40        │
│     │ Ctrl-A    │  1 │  P │    1 │   28 │   26 │   29 │  112 │   116 ▓       │
│     │ Ctrl-B    │  1 │  P │    2 │   29 │   26 │   31 │  120 │   124 ░       │
│     │ Ctrl-C    │  1 │  P │    0 │   28 │   27 │   29 │  112 │   116 ░       │
│     │ Ctrl-D    │  2 │  P │    1 │   30 │   25 │   34 │  112 │   124        │
│     │ Ctrl-E    │  2 │  P │    1 │   28 │   28 │   29 │  120 │    26 │       │
│     │───────────┴────┴────┴──────┴──────┴──────┴──────┴──────┴───────│       │
│     └─────────────────────────────────────────────────»   for More «┘       │
│                                                                              │
│                     F1=Help  Arrows=Move  Esc=Exit                           │
└──────────────────────────────────────────────────────────────────────────────┘
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░182░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
            Figure 11.2. Additional Character Information Panel

The scrolling list of characters displays the class, orientation,
leftoffset, top-offset, width, height, delta-X, and data sizes of every
character in the font. These are technical measurements in the softfont and
can be ignored by most users.

The left-offset, top-offset, width, and height fields are PCL coordinate
system dots.The delta-X field is in 1/4 dot units. The data size is in
bytes.For compressed fonts (class 2 characters), this is the data size of
the compressed character, not the expanded character.

11.1.4. ``F5''

Pressing ``F5'' displays any additional information present in the font
header. The most common use of this area is font copyright information.The
special effects program in Sfware uses this area to describe what effects
have been performed on the font.

Not all fonts have additional information in the header.

11.1.5. ``F6''

When the font is scanned, it is frequently possible to recognize that it is
not valid for some printers. The LaserJet III printer (and, presumably,
printers that follow it) have a very relaxed set of guidelines as to what
constitutes a valid font. Older printers, the LaserJet Series II in
particular, have very stringent requirements. Info recognizes these
incompatabilities and will display a warning message for each problem that
it finds. If the problem can easily be corrected, the appropriate action is
described.
12. The Bold Effect

Emboldening a font makes it appear darker on the page. Adding a large
amount of boldness to a font will cause it to blur and become difficult to
read. In professional typography, the characters in a bold version of a
font have different shapes and proportions. This is beyond the ability of
Sfware. A normal font made bolder with Sfware will not look the same (and
probably will not look as good) as a real bold version of the original
font.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Amount of boldness: 0                   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄      │r010aaa.esp ░
░│ │                                         ██████████████▄▄    │mr10.sfp    ░░
░│ │ The Bold effect emboldens each          ▀▀█████    █████    │b010aaa.usp ░░
░│ │ character by adding dots to the           █████      ███    │rb1ctxc.sfl ░░
░│ │ perimeter.  The amount specified          █████    █████    │rr0ousc.sfp ▓░
░│ │ above is the number of dots that          ███████████       │rr0wusc.sfp ░░
░│ │ will be added.                            █████    █████▄   │rr14txc.sfp ░░
░│ │                                           █████      ████   │rr1ctxc.sfp ░░
░│ │                                           █████      ████   │rr1ktxc.sfp ░░
░│ │                                         ▄▄█████    ██████   │rr1kusc.sfp ░░
░│ │                                         ████████████████▀   │rr1kxxc.sfp ░░
░│ │                                         ▀▀▀▀▀▀▀▀▀▀▀▀▀       │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                Enter=Done  F1=Help  F2=Range                │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░174░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 12.1. The Bold panel

12.1. Options

12.1.1. Amount of boldness

The amount of boldness controls how much darker the characters are made to
appear. The larger the number, the darker the characters will be.For best
results, the amount of boldness should be small with respect to the size of
the font. It's difficult to define ``small'' in this context; one-tenth of
the point size of the font (or less) is probably a good estimate.
Experiment and see what looks most pleasing to the eye.

12.2. Technically Speaking

The bold effect locates ``edge'' pixels (that is, pixels that are on a
border of the character) by scanning horizontally across each row of
pixels. Every time a pixel position is found that is currently off and
adjacent to, but not surrounded by, pixels that are on, the pixel is turned
on. This has the effect of adding pixels to the border of the character.
The appropriate font and character parameters are updated so that the
original character shape (now surrounded by a border) prints in the same
position as the original. In other words, the left offset is incremented by
one, the baseline is incremented by one, and the character bounding box is
expanded. If an amount of boldness greater than one is specified, the above
algorithm is iterated to produce the correct amount of boldness.
13. The Fixed Spacing Effect

Fixed spacing uses the same width for each character in the font.  This is
the opposite of proportional spacing in which each character is given a
width appropriate to its appearance. In a fixed spaced font, all characters
have the same width. The fixed spacing effect creates a fixed spaced font
from a proportionally spaced font. This can be useful if you need to line
up columns of characters, for example, although it's generally better to
use a font specifically designed for fixed spacing.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ The Fix effect creates a fixed           ████████████       │r010aaa.esp ░
░│ │ spaced font from a proportionally          ████    ████     │mr10.sfp    ░░
░│ │ spaced font.  Each character will          ████      ██     │b010aaa.usp ░░
░│ │ be centered in a character box             ████    ████     │rb1ctxc.sfl ░░
░│ │ as wide as the widest character in         ██████████       │rr0ousc.sfp ▓░
░│ │ the font.                                  ████    ████     │rr0wusc.sfp ░░
░│ │                                            ████      ████   │rr14txc.sfp ░░
░│ │                                            ████      ████   │rr1ctxc.sfp ░░
░│ │                                            ████    ████     │rr1ktxc.sfp ░░
░│ │                                          ████████████       │rr1kusc.sfp ░░
░│ │                                                             │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                     Enter=Done  F1=Help                     │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │ Proportional │                                   │░
░└───────────└─────────────└──────────────┘────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░174░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                    Figure 13.1. The Fixed Spacing panel

13.1. Options

There are no options for this effect.

13.2. Technically Speaking

In the fixed spaced version of the font, all characters have the maximum
cell width. Bitmaps that are narrower than the maximum cell width are
adjusted to print as if they were centered in a box as wide as the maximum
cell width.
14. The Fill Effect

Filling a font creates outlined characters filled with a user-specified
pattern.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Pattern:                      »───────┐ ┌────────────┐      │r010aaa.esp ░
░│ │                                       │ │░░░░░░░░░░░░└─┐    │mr10.sfp    ░░
░│ │ The Fill effect is essentially        │ └─┐┌─┐░┌──┐░░░░│    │b010aaa.usp ░░
░│ │ the combination of two effects.       └───┼┤░│░│  ├─░░░│    │rb1ctxc.sfl ░░
░│ │ Filled characters are hollowed            │└─┘░└──┘░░░░│    │rr0ousc.sfp ▓░
░│ │ characters with their centers             │░░░░░░░░░░░─┤    │rr0wusc.sfp ░░
░│ │ shaded with the specified pattern.        │░░░░┌──┐░░░░└─┐  │rr14txc.sfp ░░
░│ │                                           │░░░░│  └─┐░░░░│  │rr1ctxc.sfp ░░
░│ │                                           │░░░░│  ┌─┘░░░░│  │rr1ktxc.sfp ░░
░│ │                                         ┌─┘░░░░└──┘░░░░┌─┘  │rr1kusc.sfp ░░
░│ │                                         │░░░░░░░░░░░░┌─┘    │rr1kxxc.sfp ░░
░│ │                                         └────────────┘      │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │ Enter=Done  F1=Help  F2=Range  F4/F5=Select/Preview Pattern │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 14.1. The Fill panel

14.1. Options

14.1.1. Pattern

Patterns can be specified directly or by using names defined in the
configuration file.The Patterns chapter describes how to create patterns;
the Configuration chapter describes how to save and name patterns.

14.2. Technically Speaking

Patterns are described in more technical detail in the Patterns chapter.
15. The Halftone Effect

Halftoning a font can produce a wide variety of results. It is one of the
most general effects in SfFx's repertoire. In brief, it allows you to
specify the fill patterns for both the foreground and the background of two
different regions of each character. This can create, for example,
half-inverted characters.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Black top    :                      »─────░░░░░░░░░░░░      │r010aaa.esp ░
░│ │ White top    :                      »──┐    ░░░░    ░░░░    │mr10.sfp    ░░
░│ │                                        └──* ░░░░      ░░    │b010aaa.usp ░░
░│ │ Invert start :   0.00 (% from top)          ░░░░    ░░░░    │rb1ctxc.sfl ░░
░│ │ Invert stop  :   0.00 (% from top)       ███░░░░░░░░░░█████ │rr0ousc.sfp ▓░
░│ │                                          ███░░░░████░░░░███ │rr0wusc.sfp ░░
░│ │ Black bottom :                      »────────░░░██████░░░░█ │rr14txc.sfp ░░
░│ │ White bottom :                      »────███░░░░██████░░░░█ │rr1ctxc.sfp ░░
░│ │                                          ███░░░░████░░░░███ │rr1ktxc.sfp ░░
░│ │ The Halftone effect allows you to create █░░░░░░░░░░░░█████ │rr1kusc.sfp ░░
░│ │ partially Inverted characters.           ██████████████████ │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │ Enter=Done  F1=Help  F2=Range  F4/F5=Select/Preview Pattern │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░171░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                      Figure 15.1. The Halftone panel

15.1. Options

Every character is divided into two areas, a selected area and a
non-selected area.These areas are referred to as as the ``top'' area and
the ``bottom'' area because that is the way they are drawn in the reference
panel. Within each area, two shading patterns are applied-- one to the
currently black portion of the character cell (the character itself) and
one to the white portion of the character cell (everything else).The
reference panel displays a font that is being halftoned with the following
parameters: the black top is using a pattern of 170;85, the white top is
using a pattern of 0, the invert start is 50%, the invert stop is 100%, the
black bottom is using a pattern of 0, and the white bottom is using a
pattern of 170;85.

Please refer to the Patterns chapter elsewhere in this manual for more
information about patterns.

15.1.1. Black top

The black top pattern replaces the black areas of the non-selected region.

15.1.2. White top

The white top pattern replaces the white area (everything in the cell that
isn't black) of the non-selected region.

15.1.3. Invert start

The invert start specifies where the selected area begins. This value
should be expressed as a percentage from the top of the tallest character
in the font. For example, specifing 25 begins the selected area 1/4 of the
way down from the top of the character, similarly, 50 selects a position
halfway down the character and 67 selects a position 67% of the way down
from the top of the character.

The panel refers to these areas as ``top'' and ``bottom;'' however, there
is no reason why you cannot specify a selected region that forms a band
across the middle of the character (e.g. from 33% to 66%).

15.1.4. Invert stop

By analogy with invert start, this option specifies where the select region
ends.The invert stop value should be larger than the starting value.The
area between the start position and the stop position is the ``selected
region'' of the character.

15.1.5. Black bottom

The black bottom pattern replaces the foreground (black) area of the
selected region.

15.1.6. White bottom

The white bottom pattern replaces the background (white) area of the
selected region.

15.2. Technically Speaking

This effect forms the heart of several effects in SfFx. For example, the
``shade'' effect is nothing more than the halftone effect applied to a
selected region from 0% to 100% of the character! If you understand the
concept of a pattern (discussed in the Patterns chapter), it shouldn't be
too difficult to understand the halftone effect.

Note: in any effect that changes the background pattern, it may be
necessary to turn off ``kerning'' within the word processor or other
program that you use to print the font. Normally, causing two characters to
overlap by a small amount (for example a capital ``T'' followed by a
lowercase ``o'') is not noticable because they only overlap in the
``white'' background. However, after you have changed the background to a
pattern other than plain white, the effect of overlapping two characters by
even a small amount may be undesirable.
16. The Horizontal Fade/Mist Effect

Fading a font with this effect ``smudges'' out the leading or trailing edge
of each character.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Fade percent :   0.00                     ··•░░░•░░░▓░      │r010aaa.esp ░
░│ │                                             ·••░    ░▓▓█    │mr10.sfp    ░░
░│ │ Fade backward: N                            •░░•      ▓█    │b010aaa.usp ░░
░│ │                                             ·••░    ░▓▓█    │rb1ctxc.sfl ░░
░│ │ The fade effect fades a character from      ·•░•░░░░▓░      │rr0ousc.sfp ▓░
░│ │ left to right or (if backward is Y) from    ·░•░    ░▓▓█    │rr0wusc.sfp ░░
░│ │ right to left.  The fade percent determines ·░░•      ▓███  │rr14txc.sfp ░░
░│ │ where the fade reaches 100% black.  If      ·░•░      ▓███  │rr1ctxc.sfp ░░
░│ │ it is greater than 100%, the fade will      ·•░•    ▓░▓█    │rr1ktxc.sfp ░░
░│ │ reach 100% before the right edge of the   ··•░·░•░░░░▓      │rr1kusc.sfp ░░
░│ │ character.  If it is less, the fade will                    │rr1kxxc.sfp ░░
░│ │ never reach 100%.                                           │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │               Enter=Done  F1=Help  F2=Range                 │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                   Figure 16.1. The Horizontal Fade panel

16.1. Options

16.1.1. Fade Percent

The fade percent determines what percentage of the character is faded out.A
fade factor of 100% applies the fade all the way across each character so
that a 100% black saturation is achieved in the last column of pixels. Fade
factors below 100% apply the fade more rapidly so that a 100% black
saturation is achieved before the edge of the character.Conversly, fade
factors above 100% draw the fade out so that it never reaches saturation.

16.1.2. Fade Backward

By default, a horizontal fade begins with 0% black on the left edge of the
character and proceeds towards 100% on the right edge (at a rate determined
by ``fade percent.'' See above). If backwards fading is selected, the fade
proceeds from right to left instead of left to right.

16.2. Technically Speaking

The fade effect examines each pixel in the bitmap and decides randomly if
the pixel should be turned off. In any given column,
100*ColumnNumber*(FadePercent/100)/CharacterWidth percent of the pixels are
turned off.
17. The Hollow Effect

Hollowing a font produces an unfilled outline of each character.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ The Hollow effect removes all interior    ─┬────────┐       │r010aaa.esp ░
░│ │ 'black' space from each character.         │  ┌───┐ └─┐     │mr10.sfp    ░░
░│ │ The result is similar to outlining.        │  │   ├─  │     │b010aaa.usp ░░
░│ │ However, hollowed characters are exactly   │  └───┘ ┌─┘     │rb1ctxc.sfl ░░
░│ │ the same size as the originals, whereas    │  ┌───┐ └─┐     │rr0ousc.sfp ▓░
░│ │ outlined characters are one row of         │  │   └─┐ └─┐   │rr0wusc.sfp ░░
░│ │ dots larger in each direction.  In         │  │   ┌─┘ ┌─┘   │rr14txc.sfp ░░
░│ │ short, outlining traces around each        │  └───┘ ┌─┘     │rr1ctxc.sfp ░░
░│ │ character and hollowing carves out        ─┴────────┘       │rr1ktxc.sfp ░░
░│ │ the middle out of each character.                           │rr1kusc.sfp ░░
░│ │                                                             │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                 Enter=Done  F1=Help  F2=Range               │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 17.1. The Hollow panel

17.1. Options

The hollow effect has no options.

17.2. Technically Speaking

The hollow effect and the outline effect are very closely related. The only
difference is the placement of the outline. In the hollow effect, the
existing perimeter of each character is left in place and the interior is
``scooped out''. For the outline effect, the entire character is erased and
a new perimeter is added just around the character.In effect, an outlined
character is a hollowed bold character (see the technically speaking
section of the bold effect for more details).

It should also be noted that the hollow and fill effects are closely
related.A hollowed character is a filled character with a pattern of 0.
18. The Invert Effect

Inverting a character creates a ``reverse video'' effect. However, the
choice of patterns in this effect can dramatically change the result.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Black pattern:                      »────┐ ██████████████   │r010aaa.esp ░
░│ │                                        █           ██████   │mr10.sfp    ░░
░│ │ White pattern:                      »──██    ████    ████   │b010aaa.usp ░░
░│ │                                        ██    ██████  ████   │rb1ctxc.sfl ░░
░│ │ The Invert effect replaces the         ██    ████    ████   │rr0ousc.sfp ▓░
░│ │ `black' and `white' regions of         ██          ██████   │rr0wusc.sfp ░░
░│ │ each character with the specified      ██    ████    ████   │rr14txc.sfp ░░
░│ │ patterns.                              ██    ██████    ██   │rr1ctxc.sfp ░░
░│ │                                        ██    ██████    ██   │rr1ktxc.sfp ░░
░│ │                                        ██    ████    ████   │rr1kusc.sfp ░░
░│ │                                        █           ██████   │rr1kxxc.sfp ░░
░│ │                                        ██████████████████   │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │ Enter=Done  F1=Help  F2=Range  F4/F5=Select/Preview Pattern │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░172░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 18.1. The Invert panel

18.1. Options

Both of the options for this effect are patterns. See the Patterns chapter
elsewhere in this manual for more information.

18.1.1. Black pattern

This pattern replaces all of the black areas of the character.

18.1.2. White pattern

This pattern replaces all of the white areas of the character.

18.2. Technically Speaking

Since the black and white patterns default to black and white,
respectively, in practice, if neither the black nor the white pattern is
specified, inverting has no effect.

See the technically speaking section of the halftone effect for more
information.
19. The Mirror Effect

Mirroring a font creates characters that are upside down.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Mirror baseline adjustment: 0           ████████████        │r010aaa.esp ░
░│ │                                           ████    ████      │mr10.sfp    ░░
░│ │ The Mirror effect turns each character    ████      ████    │b010aaa.usp ░░
░│ │ upside down.  The Mirror baseline         ████      ████    │rb1ctxc.sfl ░░
░│ │ adjustment changes the placement of       ████    ████      │rr0ousc.sfp ▓░
░│ │ the 'mirror.'  Positive values move       ██████████        │rr0wusc.sfp ░░
░│ │ it above the baseline, negative values    ████    ████      │rr14txc.sfp ░░
░│ │ below.                                    ████      ██      │rr1ctxc.sfp ░░
░│ │                                           ████    ████      │rr1ktxc.sfp ░░
░│ │                                         ████████████        │rr1kusc.sfp ░░
░│ │                                                             │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                Enter=Done  F1=Help  F2=Range                │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 19.1. The Mirror panel

19.1. Options

19.1.1. Mirror baseline adjustment

The mirror baseline adjustment changes the relative position of the
(virtual) mirror across which each character is rotated. A value of zero
specifies that the mirror is on the baseline, values larger than zero move
the mirror above the baseline, smaller values move it below.

19.2. Technically Speaking

If you plan to use a font and its mirror to create a special display effect
(by placing one above the other), you may find that the descenders on the
original font overlap the ``descenders'' (now ascenders!)on the mirrored
font. This is where it is helpful to change the mirror baseline adjustment.
By making the adjustment roughly equal to the number of pixels in the
descenders of the original font, you can move the mirrored font ``down'' a
little so that the mirrored descenders don't overlap the descenders on the
original font.
20. The Mist Effect

Misting a font ``smudges'' each character.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Mist percent :   0.00                     ░░▒░░▓░░░▒░░      │r010aaa.esp ░
░│ │                                             ░▒░░    ░▒▓▒    │mr10.sfp    ░░
░│ │ The mist effect is very much like the       ▒▓▒░      ▒▒    │b010aaa.usp ░░
░│ │ shade effect.  However, there is no         ░▒▒░    ▒░░░    │rb1ctxc.sfl ░░
░│ │ pattern; instead, each character is         ░░░░░░░░░▒      │rr0ousc.sfp ▓░
░│ │ uniformly faded by the specified percent.   ░░░░    ░▒▒▒    │rr0wusc.sfp ░░
░│ │ The fade is randomly distributed over the   ░▒▒░      ▒▓▓▒  │rr14txc.sfp ░░
░│ │ character which produces a random, misty    ░░▒░      ░▒▒░  │rr1ctxc.sfp ░░
░│ │ appearance.                                 ░░░░    ░░░░    │rr1ktxc.sfp ░░
░│ │                                           ░░▒▒░░░░░▒▒░      │rr1kusc.sfp ░░
░│ │                                                             │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │               Enter=Done  F1=Help  F2=Range                 │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 20.1. The Mist panel

20.1. Options

20.1.1. Mist Percent

The mist percent determines what percentage of the character is misted
(faded) out.Larger mist percentages remove more pixels than smaller ones.
A 100% (or larger) mist percent removes all trace of the character.

20.2. Technically Speaking

This effect is identical to the horizontal and vertical fade effects with
the exception that the fade percentage is calculated once and does not vary
for each row or column in the bitmap.
21. The Outline Effect

Outlining a font produces an unfilled outline of each character.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ The Outline effect creates              ┌────────────┐      │r010aaa.esp ░
░│ │ characters that are outlined.           │            └─┐    │mr10.sfp    ░░
░│ │ Each character is replaced by a         └─┐    ┌──┐    │    │b010aaa.usp ░░
░│ │ tracing of its perimeter.                 │    │  ├─   │    │rb1ctxc.sfl ░░
░│ │                                           │    └──┘    │    │rr0ousc.sfp ▓░
░│ │ Outlining is similar to hollowing.        │           ─┤    │rr0wusc.sfp ░░
░│ │ For a more complete discussion of         │    ┌──┐    └─┐  │rr14txc.sfp ░░
░│ │ the differences, please read the          │    │  └─┐    │  │rr1ctxc.sfp ░░
░│ │ description of the Hollow effect.         │    │  ┌─┘    │  │rr1ktxc.sfp ░░
░│ │                                         ┌─┘    └──┘    ┌─┘  │rr1kusc.sfp ░░
░│ │                                         │            ┌─┘    │rr1kxxc.sfp ░░
░│ │                                         └────────────┘      │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                Enter=Done  F1=Help  F2=Range                │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 21.1. The Outline panel

21.1. Options

The outline effect has no options.

21.2. Technically Speaking

See the technical discussion of the hollow effect for more information.
22. The Proportional Spacing Effect

Proportional spacing is the opposite of fixed spacing. In a proportionally
spaced font, each character is only as wide as its printed image, plus a
small border. The proportional spacing effect creates a proportionally
spaced version of a fixed spaced font.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ The Prop effect creates a                                   │r010aaa.esp ░
░│ │ proportionally spaced font from          ████████████       │mr10.sfp    ░░
░│ │ a fixed spaced font.  Each character       ████    ████     │b010aaa.usp ░░
░│ │ will be as wide as its image with          ████      ██     │rb1ctxc.sfl ░░
░│ │ two additional columns of dots on          ████    ████     │rr0ousc.sfp ▓░
░│ │ each side for padding.  The default        ██████████       │rr0wusc.sfp ░░
░│ │ HMI for the font will be the width         ████    ████     │rr14txc.sfp ░░
░│ │ of the lowercase letter 'i'.               ████      ████   │rr1ctxc.sfp ░░
░│ │                                            ████      ████   │rr1ktxc.sfp ░░
░│ │                                            ████    ████     │rr1kusc.sfp ░░
░│ │                                          ████████████       │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                     Enter=Done  F1=Help                     │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │ Proportional │                                   │░
░└───────────└─────────────└──────────────┘────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                Figure 22.1. The Proportional Spacing panel

22.1. Options

There are no options for this effect.

22.2. Technically Speaking

In the proportionally spaced version of the font, all characters are four
dots wider than the natural width of the bitmaps required to print each
character (two dots on each side). Note: in many fonts, conversion from
proportional spacing to fixed and back to proportional will yield a
proportionally spaced font that is not as attractive as the original font
since conversion to fixed spacing effectively destroys any special spacing
information. For example, in many fonts the tail of a lower case letters
like ``j'' and ``g'' are allowed to ``hang back'' below the character that
precedes them. When a font is converted from fixed spacing to proportional
spacing, there is no way to insert this kind of aesthetic hint
automatically.
23. The Resize Effect

Resizing a font creates characters that are larger or smaller than the same
characters in the original font. The characters can be scaled uniformly
(creating more or less accurate renditions of the original characters with
the same proportions) or non-uniformly (creating elongated or widened
characters).

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ New width :   0.00  (% of orig. width)                      │r010aaa.esp ░
░│ │                                              ▀██▀▀▀█▄       │mr10.sfp    ░░
░│ │ New height:   0.00  (% of orig. height)       ██   ▄█       │b010aaa.usp ░░
░│ │                                               ██▀▀▀█▄       │rb1ctxc.sfl ░░
░│ │ The Resize effect allows you to change        ██    ██      │rr0ousc.sfp ▓░
░│ │ the height and width of the characters       ▄██▄▄▄█▀       │rr0wusc.sfp ░░
░│ │ in the font.                                                │rr14txc.sfp ░░
░│ │                                                             │rr1ctxc.sfp ░░
░│ │                                                             │rr1ktxc.sfp ░░
░│ │                                                             │rr1kusc.sfp ░░
░│ │                                                             │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                Enter=Done  F1=Help  F2=Range                │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░174░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 23.1. The Resize panel

23.1. Options

23.1.1. New Width

The new width specifies the width of each resized character as a percentage
of its original size. Values less than 100 make the characters narrower,
while values larger than 100 make them wider.

23.1.2. New Height

Like the width, the new height specifies the height of each resized
character as a percentage of its original height.

23.2. Technically Speaking

In practice, this effect has few uses. Unlike more modern font scaling
technology (which relies on mathematical descriptions of each character)
SfFx has only the bitmap description of each character to work with.As a
result, gross changes in the size of a character create ``jagged'' edges
and very poor quality letters. Making fonts larger generally works better
than making them smaller. As a rule of thumb, you probably won't like the
results if you try to resize a font by more than a factor of two. If you
hold one dimension constant (100%), it may be possible to stretch or
compress the other dimension by a larger factor without significant loss of
detail.
24. The Reverse Effect

Reversing a font creates backwards characters.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ The Reverse effect makes each                               │r010aaa.esp ░
░│ │ character in the font backwards.            ████████████    │mr10.sfp    ░░
░│ │                                           ████    ████      │b010aaa.usp ░░
░│ │                                           ██      ████      │rb1ctxc.sfl ░░
░│ │                                           ████    ████      │rr0ousc.sfp ▓░
░│ │                                             ██████████      │rr0wusc.sfp ░░
░│ │                                           ████    ████      │rr14txc.sfp ░░
░│ │                                         ████      ████      │rr1ctxc.sfp ░░
░│ │                                         ████      ████      │rr1ktxc.sfp ░░
░│ │                                           ████    ████      │rr1kusc.sfp ░░
░│ │                                            ████████████     │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                Enter=Done  F1=Help  F2=Range                │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░174░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 24.1. The Reverse panel

24.1. Options

There are no options for the reverse effect.

24.2. Technically Speaking

The reverse effect simply rotates each bitmap through its center. The left
offset and delta-x values of each character are adjusted to keep the
correct amount of space ``in front of'' and ``behind'' each character.
25. The Shadow Effect

Shadowing attempts to produce the effect that you would get if all you
could see on the page were the shadows from an embossed image of the
original character. It's a bit difficult to describe, but it is one of my
favorite effects.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Shadow width : 0    dots »───────────────┐                  │r010aaa.esp ░
░│ │                                         ┌┴─┐    ████        │mr10.sfp    ░░
░│ │ Shadow height: 0    dots »───────────┐  ████      ████      │b010aaa.usp ░░
░│ │                                      │  ████        ██      │rb1ctxc.sfl ░░
░│ │ The Shadow effect removes each       │  ████      ████      │rr0ousc.sfp ▓░
░│ │ character and leaves behind only     │          ████        │rr0wusc.sfp ░░
░│ │ the shadow that might be present     │  ████      ████      │rr14txc.sfp ░░
░│ │ if they were embossed letters        │  ████        ████    │rr1ctxc.sfp ░░
░│ │ illuminated obliquely.               │  ████        ████    │rr1ktxc.sfp ░░
░│ │                                      │  ████  ┌   ████      │rr1kusc.sfp ░░
░│ │                                      └────────┤ ████        │rr1kxxc.sfp ░░
░│ │                                               └             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │               Enter=Done  F1=Help  F2=Range                 │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 25.1. The Shadow panel

25.1. Options

25.1.1. Shadow Width

The shadow width controls the width (in dots) of the shadow to the right or
left of the original character. Positive values create a shadow on the
right hand side of the character, while negative values create a shadow on
the left. This value should be small relative to the total width of the
character.

25.1.2. Shadow Height

By analogy with the shadow width, the shadow height controls the height of
the shadow above or below the character. Positive values create shadows
below the character, negative values above. This value should be small
relative to the total height of the character.

25.2. Technically Speaking

The effect is produced by moving a copy of the character over and down by
the specified amounts and then removing all dots that fall within the
original character (including all of the original character).  For small
offsets, this works fine; however when the offsets become larger than the
widths of the strokes that make up the chacter, the effect falls apart.
26. The Shade Effect

Shading a font replaces all off the ``black'' areas of a font with the
specified shading pattern. This effect changes dramatically depending on
the pattern that you select.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Pattern:                      »────────────┐                │r010aaa.esp ░
░│ │                                         ░░┌┴┐░░░░░░░        │mr10.sfp    ░░
░│ │ The shade effect replaces all of          │░│░    ░░░░      │b010aaa.usp ░░
░│ │ the 'black' areas of each character       └─┘░      ░░      │rb1ctxc.sfl ░░
░│ │ in the font with the specified            ░░░░    ░░░░      │rr0ousc.sfp ▓░
░│ │ pattern.                                  ░░░░░░░░░░        │rr0wusc.sfp ░░
░│ │                                           ░░░░    ░░░░      │rr14txc.sfp ░░
░│ │                                           ░░░░      ░░░░    │rr1ctxc.sfp ░░
░│ │                                           ░░░░      ░░░░    │rr1ktxc.sfp ░░
░│ │                                           ░░░░    ░░░░      │rr1kusc.sfp ░░
░│ │                                         ░░░░░░░░░░░░        │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │ Enter=Done  F1=Help  F2=Range  F4/F5=Select/Preview Pattern │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 26.1. The Shade panel

26.1. Options

26.1.1. Pattern

All of the black areas of each character are replaced by the specified
pattern.Please refer to the chapter on patterns elsewhere in this manual
for more information about patterns.

26.2. Technically Speaking

Patterns are described in more technical detail in the pattern chapter.
27. The Slant Effect

Slanting is a poor-man's version of italics. In practice, italic fonts are
not just slanted versions of the upright characters. But slanting will
suffice in a pinch and it does allow you to produce oblique characters
(slanted backwards), which are occasionally useful.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Slant:   0.00°                          ████████████        │r010aaa.esp ░
░│ │                                          ████    ████       │mr10.sfp    ░░
░│ │ The Slant effect creates italic-         ████      ██       │b010aaa.usp ░░
░│ │ like characters.  Each character        ████    ████        │rb1ctxc.sfl ░░
░│ │ can be slanted forward or obliquely     ██████████          │rr0ousc.sfp ▓░
░│ │ by as much as 60°.                     ████    ████         │rr0wusc.sfp ░░
░│ │                                        ████      ████       │rr14txc.sfp ░░
░│ │                                       ████      ████        │rr1ctxc.sfp ░░
░│ │                                       ████    ████          │rr1ktxc.sfp ░░
░│ │                                     ████████████            │rr1kusc.sfp ░░
░│ │                                                             │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                F1=Help  Enter=Done  F3=Exit                 │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    └────────────────────────┘                         │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 27.1. The Slant panel

27.1. Options

27.1.1. Slant

The slant specifies the amount of slant in degrees. A positive value causes
the characters to slant toward the right. A negative value causes the
characters to slant toward the left.

27.2. Technically Speaking

This effect is produced by calculating how far over each row of pixels must
be moved in order to produce a slant of the requested angle.Using a little
bit of trigonometry, it is easy to calculate how far over the top row must
be moved. Each row below the top must be moved over some fraction of the
total height of the character.Rows below the baseline must be moved in the
opposite direction.

Considering that this algorithm does nothing more than slide rows of dots
back and forth, it should be easy to see that large slant values may
produce jagged, non-contiguous characters.
28. The Stripe Effect

Striping places alternating white and black horizontal lines across each
character in the font.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Black stripe width: 0    dots                               │r010aaa.esp ░
░│ │                                         ▀▀▀▀▀▀▀▀▀▀▀▀        │mr10.sfp    ░░
░│ │ White stripe width: 0    dots             ▀▀▀▀    ▀▀▀▀      │b010aaa.usp ░░
░│ │                                           ▀▀▀▀      ▀▀      │rb1ctxc.sfl ░░
░│ │ The Stripe effect creates letters         ▀▀▀▀    ▀▀▀▀      │rr0ousc.sfp ▓░
░│ │ formed from alternating black and         ▀▀▀▀▀▀▀▀▀▀        │rr0wusc.sfp ░░
░│ │ white stripes.  The stripes in            ▀▀▀▀    ▀▀▀▀      │rr14txc.sfp ░░
░│ │ different characters of the same          ▀▀▀▀      ▀▀▀▀    │rr1ctxc.sfp ░░
░│ │ font will line up.                        ▀▀▀▀      ▀▀▀▀    │rr1ktxc.sfp ░░
░│ │                                           ▀▀▀▀    ▀▀▀▀      │rr1kusc.sfp ░░
░│ │                                         ▀▀▀▀▀▀▀▀▀▀▀▀        │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                Enter=Done  F1=Help  F2=Range                │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                       Figure 28.1. The Stripe panel

28.1. Options

28.1.1. Black stripe width

Selects the width (in dots) of the black stripes.

28.1.2. White stripe width

Selects the width (in dots) of the white stripes.

28.2. Technically Speaking

In each character, the stripes are adjusted so that a black stripe begins
at the baseline. This assures that the stripes will line up when characters
are placed next to each other. Note: a similar effect with vertical stripes
can be created with the shade effect using an appropriate pattern.
29. The Three-D Drop Shadow Effect

Three-D drop shadows create a patterned shadow-image of each character that
appears to be below the original. It is possible to change the apparent
``distance'' of the shadow by changing the offsets used to create it.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ X-Offset: 0    dots »──────────────────────────────┬──┐     │r010aaa.esp ░
░│ │                                        ┌░░░░░░░░░░░░        │mr10.sfp    ░░
░│ │ Y-Offset: 0    dots »──────────────────┴─ ░████████████     │b010aaa.usp ░░
░│ │                                           ┌─┐████   ░████   │rb1ctxc.sfl ░░
░│ │ Pattern :                      »──────────┤░│████ ░░░░ ██   │rr0ousc.sfp ▓░
░│ │                                           └─┘████░░░ ████   │rr0wusc.sfp ░░
░│ │ Three-D characters are created with a     ░░░██████████     │rr14txc.sfp ░░
░│ │ patterned shadow beneath them.  The       ░░░████   ░████   │rr1ctxc.sfp ░░
░│ │ shadow is created down/right X/Y-Offset   ░░░████   ░░░████ │rr1ktxc.sfp ░░
░│ │ dots using the pattern specified.         ░░░████ ░░░░ ████ │rr1kusc.sfp ░░
░│ │                                         ░░░░░████░░░ ████   │rr1kxxc.sfp ░░
░│ │                                            ████████████     │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │ Enter=Done  F1=Help  F2=Range  F4/F5=Select/Preview Pattern │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    ┌─────────────┐                                    │░
░└───────────└─────────────│ Drop shadow │─────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░│ Hollow/Drop │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░│ Filled/Drop │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░172░kb░░░░░░░░░░░░░░░░░░░░└─────────────┘░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                 Figure 29.1. The Three-D Drop Shadow panel

29.1. Options

29.1.1. X-Offset

The x-offset controls the distance (in dots) of the shadow to the right or
left of the original character. Positive values create a shadow on the
right hand side of the character, negative values create a shadow on the
left.

29.1.2. Y-Offset

By analogy with the x-offset, the y-offset controls the distance of the
shadow above or below the character. Positive values create shadows below
the character, negative values above.

29.1.3. Pattern

The pattern specified is applied to the areas used in the shadow.

29.2. Technically Speaking

The original character is moved left or right and up or down by the
distances specified. If necessary the character cell is enlarged to
accommodate the new character. The character is then shaded with the
specified pattern and the original character is painted back into the
character cell at its original position.
30. The Tilt Effect

Tilting creates characters that have a ``tilted'' baseline. Each character
in the font can be rotated by an arbitrary angle. You cannot rotate a
character by more than 90 degrees. The tilt effect in combination with
rotating, mirroring, and reversing can produce a font that is effectively
tilted by any angle.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                             ▄██▄            │────────────│░
░│ │ Tilt:   0.00°                              ██  ██           │r010aaa.esp ░
░│ │                                           ██    ██          │mr10.sfp    ░░
░│ │ The Tilt effect creates rotated          ██    ████         │b010aaa.usp ░░
░│ │ characters.  Each character can         ████    ██          │rb1ctxc.sfl ░░
░│ │ be rotated clockwise or counter-       █████  ██████▄▄      │rr0ousc.sfp ▓░
░│ │ clockwise by as much as 90°.             ██████     ███     │rr0wusc.sfp ░░
░│ │                                           ████       ███    │rr14txc.sfp ░░
░│ │ Rounding errors may produce a              ████     ███     │rr1ctxc.sfp ░░
░│ │ slightly irregular baseline and             ████    ██      │rr1ktxc.sfp ░░
░│ │ the inter-character spacing may              ████  ██       │rr1kusc.sfp ░░
░│ │ be imperfect in this version.                 ██████        │rr1kxxc.sfp ░░
░│ │                                                ████         │rr20txc.sfp ░░
░│ │                                                 ██          │nb1ctxc.sfp ░░
░│ │                F1=Help  Enter=Done  F3=Exit                 │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    └────────────────────────┘                         │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                        Figure 30.1. The Tilt panel

30.1. Options

30.1.1. Tilt

The tilt specifies the amount of tilt in degrees. A positive tilt value
creates a font with a baseline that runs down and to the right.A negative
value creates a font that runs up and to the right.

30.2. Technically Speaking

This effect is one of the most time consuming to run (on a 12pt font it may
require evaluating three trigonometric functions, a square root, and
several floating point and integer operations more than one and a half
million times---and it's worse for bigger fonts). It creates a new
character box large enough to hold the ``tilted'' original box and performs
a trigonometric translation of every pixel into the new box. Although the
effect makes some small changes to the top offset and left offset values
for each character (in an attempt to correct for translation errors
inherent in translating from one square grid system to another), the
character dimensions are basically unchanged.

This effect creates a rotated font, but you still need a sufficiently
flexible typesetting program to set the rotated text. Simply creating a
rotated font will not, for example, cause your run-of-the-mill word
processor to print it on an angle!

The horizontal spacing in a tilted font is sometimes imperfect. It is
unclear why this is the case. Hopefully, a future version of Sfware will
correct this problem.
31. The Hollow Three-D Drop Shadow Effect

Hollow Three-D drop shadows are simply a combination of the three-d drop
shadow effect and the hollow effect. It is a limitation of the algorithms
used to create the three-d drop shadow effect that it is not possible to
hollow a three-d character. This effect is provided to circumvent that
limitation.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ X-Offset: 0    dots »──────────────────────────────┬──┐     │r010aaa.esp ░
░│ │                                        ┌████████████        │mr10.sfp    ░░
░│ │ Y-Offset: 0    dots »──────────────────┴─ █──┬──────────┐   │b010aaa.usp ░░
░│ │                                           ███│  ┌─────┐ │   │rb1ctxc.sfl ░░
░│ │ The Hollow-3D effect combines the         ███│  │ ████│ │   │rr0ousc.sfp ▓░
░│ │ hollow and three-d effects.  A            ███│  │███┌─┘ │   │rr0wusc.sfp ░░
░│ │ `hollow'ed character is given a           ███│  ├───┴┐  └┐  │rr14txc.sfp ░░
░│ │ solid `three-d' shadow.                   ███│  │   █└─┐ └┐ │rr1ctxc.sfp ░░
░│ │                                           ███│  │   ███│  │ │rr1ktxc.sfp ░░
░│ │                                           ███│  │ ████┌┘ ┌┘ │rr1kusc.sfp ░░
░│ │                                         █████│  └─────┘  │  │rr1kxxc.sfp ░░
░│ │                                            ──┴───────────┘  │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │                Enter=Done  F1=Help  F2=Range                │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    ┌─────────────┐                                    │░
░└───────────└─────────────│ Drop shadow │─────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░│ Hollow/Drop │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░│ Filled/Drop │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░└─────────────┘░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
             Figure 31.1. The Hollow Three-D Drop Shadow panel

31.1. Options

31.1.1. X-Offset

The x-offset controls the distance (in dots) of the shadow to the right or
left of the original character. Positive values create a shadow on the
right hand side of the character, negative values create a shadow on the
left.

31.1.2. Y-Offset

By analogy with the x-offset, the y-offset controls the distance of the
shadow above or below the character. Positive values create shadows below
the character, negative values above.

31.2. Technically Speaking

This option is exactly the same as the three-d drop shadow effect except
that the shadow is always solid black and instead of painting the original
character back into the cell, a hollowed version of the original character
is painted back in.
32. The Filled Three-D Drop Shadow Effect

Filled Three-D drop shadows are simply a combination of the three-d drop
shadow effect and the fill effect. It is a limitation of the algorithms
used to create the three-d drop shadow effect that it is not possible to
create a filled three-d character. This effect is provided to circumvent
that limitation.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌─┌─────────────────────────────────────────────────────────────┐────────────┐░
░│ │                                                             │ilename     │░
░└─│ X-Offset: 0    dots »───────────────────────────────┬──┐    │────────────│░
░│ │                                        ┌████████████        │r010aaa.esp ░
░│ │ Y-Offset: 0    dots »──────────────────┴─ █░░░░░░░░░░░░     │mr10.sfp    ░░
░│ │                                           ███┌─┐░   █░░░░   │b010aaa.usp ░░
░│ │ Pattern :                      »─────────────┤░│░ ████ ░░   │rb1ctxc.sfl ░░
░│ │                                           ███└─┘░███ ░░░░   │rr0ousc.sfp ▓░
░│ │ The Fill-3D effect combines the fill      ███░░░░███ ░░     │rr0wusc.sfp ░░
░│ │ and three-d effects.  A 'fill'ed letter   ███░░░░   █░░░░   │rr14txc.sfp ░░
░│ │ is given a solid 'three-d' shadow.        ███░░░░   ███░░░░ │rr1ctxc.sfp ░░
░│ │                                           ███░░░░ ████ ░░░░ │rr1ktxc.sfp ░░
░│ │ Note: the fill outline isn't shown      █████░░░░███ ░░░░   │rr1kusc.sfp ░░
░│ │ in this representation.                    ░░░░░░░░░░░░     │rr1kxxc.sfp ░░
░│ │                                                             │rr20txc.sfp ░░
░│ │ Enter=Done  F1=Help  F2=Range  F4/F5=Select/Preview pattern │nb1ctxc.sfp ░░
░│ └─────────────────────────────────────────────────────────────┘nj1ctxc.sfp ░
░│───────────│ Stripe      │─────┴───┴──────┴────────┴─────────┴──────────────│░
░│           │ Three-D    ┌─────────────┐                                    │░
░└───────────└─────────────│ Drop shadow │─────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░│ Hollow/Drop │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░│ Filled/Drop │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░172░kb░░░░░░░░░░░░░░░░░░░░└─────────────┘░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
             Figure 32.1. The Filled Three-D Drop Shadow panel

32.1. Options

32.1.1. X-Offset

The x-offset controls the distance (in dots) of the shadow to the right or
left of the original character. Positive values create a shadow on the
right hand side of the character, negative values create a shadow on the
left.

32.1.2. Y-Offset

By analogy with the x-offset, the y-offset controls the distance of the
shadow above or below the character. Positive values create shadows below
the character, negative values above.

32.1.3. Pattern

The pattern specified is applied to the original character.

32.2. Technically Speaking

This option is exactly the same as the three-d drop shadow effect except
that the shadow is always solid black and instead of painting the original
character back into the cell, a pattern-filled version of the original
character is painted back in.
33. The Vertical Fade/Mist Effect

Fading a font with this effect ``smudges'' out the top or bottom edge of
each character.

--------------------------------------------------------------------------------
                               SfShell vers 1.1
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░┌──────────────────────────────────────────────────────┐──────┬──────────────┐░
░│ ┌─────────────────────────────────────────────────────────────┐ilename     │░
░└─│                                                             │────────────│░
░│ │ Fade percent :   0.00                     •·•·•·•·•·•·      │r010aaa.esp ░
░│ │                                             •░•░    ░•░•    │mr10.sfp    ░░
░│ │ Fade backward: N                            ░■░■      ■░    │b010aaa.usp ░░
░│ │                                             ░░░░    ░░░░    │rb1ctxc.sfl ░░
░│ │ The fade effect fades a character from      ░▒░▒░▒░▒░▒      │rr0ousc.sfp ▓░
░│ │ top to bottom or (if backward is Y) from    ▒▒▒▒    ▒▒▒▒    │rr0wusc.sfp ░░
░│ │ bottom to top.  The fade percent determines ▒▓▓▒      ▒▓▓▒  │rr14txc.sfp ░░
░│ │ where the fade reaches 100% black.  If      ▓▓▓▓      ▓▓▓▓  │rr1ctxc.sfp ░░
░│ │ it is greater than 100%, the fade will      ▓▓▓▓    ▓▓▓▓    │rr1ktxc.sfp ░░
░│ │ reach 100% before the bottom of the       ████████████      │rr1kusc.sfp ░░
░│ │ character.  If it is less, the fade will                    │rr1kxxc.sfp ░░
░│ │ never reach 100%.                                           │rr20txc.sfp ░░
░│ │                                                             │nb1ctxc.sfp ░░
░│ │               Enter=Done  F1=Help  F2=Range                 │nj1ctxc.sfp ░
░│─└─────────────────────────────────────────────────────────────┘────────────│░
░│           │ Three-D    │                                                  │░
░└───────────└─────────────┘───────────────────────────────────»   for More «┘░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░173░kb░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
--------------------------------------------------------------------------------
                    Figure 33.1. The Vertical Fade panel

33.1. Options

33.1.1. Fade Percent

The fade percent determines what percentage of the character is faded out.A
fade factor of 100% applies the fade all the way down each character so
that 100% black saturation is achieved in the last row of pixels.Fade
factors below 100% apply the fade more rapidly so that a 100% black
saturation is achieved before the bottom of the character.Conversely, fade
factors above 100% draw the fade out so that it never reaches saturation.

33.1.2. Fade Backward

By default, a vertical fade begins with 0% black on the top row of the
character and proceeds towards 100% on the bottom row (at a rate determined
by ``fade percent.'' See above). If backwards fading is selected, the fade
begins with 0% black on the bottom row of the character and proceeds
towards 100% on the top row.

33.2. Technically Speaking

See the technically speaking section for the Horizontal Fade/Mist
effect.The vertical fade algorithm is a natural analog of the horizontal
fade algorithm.
34. Patterns

34.1. What are patterns?

Patterns change the appearance of many effects. A pattern is a rectangular
region of on-and-off dots that is repeated across and down to cover the
region being filled. The pattern is specified as a series of numbers
separated by commas and semicolons. The binary representation of the
numbers separated by commas indicates the dots that are on and off in each
row and semicolons separate rows.

34.2. How do I create one?

Creating a new pattern is not difficult. The best way to begin is with a
piece of graph paper and a pencil. Experiment until you have something that
you like and then follow the directions below.

For example, suppose that you wish to create a zig-zag pattern. Here is one
possibility:

      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      |   |   |   |   |   |   |   |   |   |   |   |   |   |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      |   |   |   | * |   |   |   | * |   |   |   | * |   |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      | * |   | * |   | * |   | * |   | * |   | * |   | * |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      |   | * |   |   |   | * |   |   |   | * |   |   |   |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      |   |   |   |   |   |   |   |   |   |   |   |   |   |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      |   |   |   | * |   |   |   | * |   |   |   | * |   |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      | * |   | * |   | * |   | * |   | * |   | * |   | * |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+
      |   | * |   |   |   | * |   |   |   | * |   |   |   |
      +---+---+---+---+---+---+---+---+---+---+---+---+---+

34.2.1. Isolate a ``generating region''

Isolate the smallest region that can be used to generate the pattern.  This
region, when repeated to the right and down, should create the entire
pattern.In this case, the smallest acceptable region is this:

      +---+---+---+---+
      |   |   |   |   |
      +---+---+---+---+
      |   |   | * |   |
      +---+---+---+---+
      |   | * |   | * |
      +---+---+---+---+
      | * |   |   |   |
      +---+---+---+---+

Note:there is frequently more than one smallest region that will produce
the pattern. I have intentionally chosen this region because it is
not the upper-left hand corner. Usually the upper-left hand corner
contains a generating region, but not always.

34.2.2. Round to 8-dots

The region used to generate the pattern must be an even multiple of eight
dots wide. Repeat the smallest region to the right until it is a multiple
of eight dots wide. You must repeat the entire pattern (for example, if the
region is 6 dots wide, you will have to repeat it until it is 24 dots
wide). In this case the smallest region a multiple of eight dots wide is
this:

      +---+---+---+---+---+---+---+---+
      |   |   |   |   |   |   |   |   |
      +---+---+---+---+---+---+---+---+
      |   |   | * |   |   |   | * |   |
      +---+---+---+---+---+---+---+---+
      |   | * |   | * |   | * |   | * |
      +---+---+---+---+---+---+---+---+
      | * |   |   |   | * |   |   |   |
      +---+---+---+---+---+---+---+---+

34.2.3. Use zeros and ones

Redraw the pattern using zeros for ``off'' dots and ones for ``on'' dots.If
the pattern is more than eight dots wide, write the zeros and ones of each
row in groups of eight as you copy the pattern.  In our example, the result
is this:

      +---+---+---+---+---+---+---+---+
      |   |   |   |   |   |   |   |   | = 00000000
      +---+---+---+---+---+---+---+---+
      |   |   | * |   |   |   | * |   | = 00100010
      +---+---+---+---+---+---+---+---+
      |   | * |   | * |   | * |   | * | = 01010101
      +---+---+---+---+---+---+---+---+
      | * |   |   |   | * |   |   |   | = 10001000
      +---+---+---+---+---+---+---+---+

34.2.4. Convert to number

Treat each group of eight digits in each row like a binary number.  Using a
calculator or a conversion chart (there is a conversion chart in the online
help facility for SfShell), change each eight digit binary number into a
decimal number. If the rows have more than one group of eight digits,
separate the resulting decimal numbers with commas.Our example becomes:

      00000000 = 0
      00100010 = 34
      01010101 = 85
      10001000 = 136

34.2.5. Rewrite

Use the decimal numbers to create the pattern command. Optionally, you may
wish to add the pattern to the configuration file (as described below).The
decimal numbers for each row are separated by commas and the rows are
separated by semicolons. The pattern we set out to create can be specified
as follows:

      0;34;85;136

Remember that you can use preview to look at the pattern before creating a
font with it. This is a good way to check that you did the conversion
correctly.

34.3. Saving the pattern

Alternatively, the patterns may be saved in the configuration file and
selected by name. Read the Configuration chapter for more information.

34.4. Previewing Patterns

It is possible to preview any pattern by pressing ``F5'' when you are on a
pattern field or when the list of patterns is displayed.The list of
patterns will be displayed if you press ``F4'' when you are on a pattern
field.

34.5. Technically Speaking

The fact that patterns are used for so many effects makes it apparent that
Sfware really needs a pattern editor and a better mechanism for storing
patterns. These are planned additions but Sfware is already beginning to
suffer from ``creeping featurism'' (in the author's opinion, at least) and
it has been decided that these changes will just have to wait until the
next release.

However, in view of the fact that creating patterns by the above method is
very tedious, a simple program (PATTERN.EXE) has been added to Sfware that
eliminates most of the ``hard parts.'' Please consult the file PATTERN.DOC
for more information.
35. Softfont Directory Listings

The softfont directory program, SfDir, is not integrated into SfShell.
This chapter describes the standalone SfDir program. The SfShell main menu
contains most of the features of the standalone program.

The SfDir program provides a useful alternative to the standard DOS DIR
command for softfonts. SfDir prints the font characteristics of each
softfont that matches the fontmask.

35.1. Example

    Directory of D:\FONTS\*.*

    AR010AAA ESP  Port 10J Fix 12.00cpi  9.96pt Up Medium  Courier
    CMR10    SFP  Port  0U Pro           9.96pt Up Medium  Times Roman
    NB010AAA USP  Port  0U Pro           9.96pt Up Medium  Spartan
    TRB1CTXC SFL  Land  0Q Pro          12.00pt Up Bold    Times Roman
    TRR0OUSC SFP  Port  0U Pro           6.00pt Up Medium  Times Roman
    TRR0WUSC SFP  Port  0U Pro           8.00pt Up Medium  Times Roman
    TRR14TXC SFP  Port  0Q Pro          10.00pt Up Medium  Times Roman
    TRR1CTXC SFP  Port  0Q Pro          12.00pt Up Medium  Times Roman
    TRR1KTXC SFP  Port  0Q Pro          14.00pt Up Medium  Times Roman
    TRR1KUSC SFP  Port  0U Pro          14.00pt Up Medium  Times Roman
    TRR1KXXC SFP  Port  0Q Pro          14.00pt Up Medium  Times Roman
    TRR20TXC SFP  Port  0Q Pro          18.00pt Up Medium  Times Roman
    UNB1CTXC SFP  Port  0Q Pro          12.00pt Up Bold    Univers
    UNJ1CTXC SFP  Port  0Q Pro          12.00pt It Bold    Univers
    UNR0OUSC SFP  Port  0U Pro           6.00pt Up Medium  Univers
    UNR0WUSC SFP  Port  0U Pro           8.00pt Up Medium  Univers
    UNR14USC SFP  Port  0U Pro          10.00pt Up Medium  Univers
    UNR1CTXC SFP  Port  0Q Pro          12.00pt Up Medium  Univers
    UNR1KUSC SFP  Port  0U Pro          14.00pt Up Medium  Univers
    VGA20    SFP  Port 10U Fix 20.00cpi  1.68pt Up Medium  Courier
    VGA20SH  SFP  Port 10U Fix 20.00cpi  1.68pt 14 Medium  Courier
          21 Font(s)     288505 bytes

35.2. Usage

SFDIR fontmask [[options]]

35.3. Options

35.3.1. /esc

If SfDir is run with the /esc option, it prints the LaserJet escape
sequence required to select each font instead of a textual description of
the font characteristics. In the escape sequence, a raised dot is used to
represent the ESC character (ASCII 27d).

35.3.2. /noesc

With the /noesc option, SfDir prints a textual description of the font
characteristics for each font that matches the fontmask. This is generally
the default.

35.3.3. /verbose

All of the Sfware utilities print regular progress messages. The /verbose
option causes many utilities to print more detailed progress messages.

35.3.4. /quiet

The /quiet option suppresses some informative messages. For example, the
/quiet option will suppress the %-complete messages in SfLoad.

35.3.5. /$

The /$ option displays registration information for the Sfware utilities.
If you are using an unregistered program, this information will be
displayed automatically.Please register your shareware!
36. Sfware Registration

The software registration program, SPS-Reg, is not integrated into
SfShell.This chapter describes the standalone SPS-Reg program. Registering
shareware is an investment. Your registration will provide the support and
encouragement required to continue the development of Sfware. The Sfware
utilities represent an investment of more than two years of my time and
effort.You get the results of this toil for a fraction of what a commercial
package would cost. Plus, you get the benefits of a trybefore-you-buy
license agreement. If you continue to use the Sfware utilities, you are
required to register them.

Return the enclosed order form with your check or money order today!

36.1. Usage

The SPS-Reg registration program requires key information that will be
mailed to you when you register the Sfware utilities. You cannot make any
use of the program until you mail in your registration.

Sfware is provided under a lifetime registration policy. Your registration
contributes directly to the future growth of Sfware. Every registration is
good for all future versions of Sfware. Register once. Register now!
37. Contacting the Author

37.1. By Mail

You can reach the author by mail at the following address:

        Norman Walsh 
        #42I Southwood Apts 
        Brittany Manor Dr 
        Amherst, MA 01002

37.2. Electronically

If you have access to electronic mail, the fastest way to reach the author
is to send electronic mail to walsh@cs.umass.edu. In this case, electronic
mail implies access to Internet domains (through BITNET or UUCP, for
example). This is possible from CompuServe and from several of the large
national BBS systems as well as many colleges and universities.
38. Glossary

ASCII

ASCII stands for the American Standard Code for Information Interchange.
Text files are usually referred to as being ``plain ASCII'' if they contain
no additional formatting information. The CONFIG.SYS and AUTOEXEC.BAT files
on your boot disk are examples of a plain ASCII files. The spreadsheets,
database files, or word processing documents produced by large application
programs are generally not plain ASCII.

baseline

The baseline is an imaginary line upon which each character rests.
Characters that appear next to each other are (usually) lined up so that
their baselines are on the same level. Some characters extend below the
baseline (``g'' and ``j'', for example) but most rest on it.

bitmap

A bitmap is an array of dots. If you imagine a sheet of graph paper with
some squares colored in, a bitmap is a compact way of representing to the
computer which squares are colored and which are not.

In the context of softfonts, the dots are always black and white. In a
bitmapped softfont, every character is represented as a pattern of dots in
a bitmap. The dots are so small (300 dots-per-inch, usually) that they are
indistinguishable on the printed page.

bounding box

Every character in a bitmapped softfont is represented as a pattern of dots
in a rectangular grid. The bounding box is an imaginary box just large
enough to hold the character. The box is as wide as the widest row of dots
and as tall as the tallest column of dots.

character

A character is an individual symbol in a font. The letter ``A'' is a
character.So is a period. All of the printed symbols that can appear in a
font are characters. They can also be called glyphs.

child process

When one program directly runs another program (as when SfShell runs SfFx
to perform a requested special effect), the program that is run (SfFx in
this case) is called the child and the program that did the running
(SfShell) is called the parent.

command line

When you type a command at the DOS prompt, you are entering information on 
``the command line.'' Command line parameters and command line options are 
things that you type after the name of the command. For example, if you 
type ``edit letter.txt'', ``edit'' is the command and ``letter.txt'' is a 
command line parameter.

decimal

Decimal refers to the number base composed of ten symbols (0-9).  Normal,
ordinary math is performed in decimal (which can also be referred to as
base 10).

device

A device is a special piece of hardware that exists (either physically or
logically) and can send and/or receive data. Your printer is a device.So is
your modem. Your computer also includes several logical devices (for
example, the NUL device which is an infinite sink and a empty source--that
means you can always write to it (it never fills up) and you can never read
from it (you always get ``end-offile'')).

download

Downloading is the process of transferring information from one device to
another.This transferral is called downloading when the transfer flows from
a device of (relatively) more power to one of (relatively) less
power.Sending new fonts to your printer so that it ``learns'' how to print
characters in that font is called downloading.

EMS

EMS memory (also called LIM EMS) is expanded memory in your computer.  EMS
exists outside of normal DOS main memory. You must have a device driver to
provide support for EMS. If it is available, Sfware uses EMS memory to
store font and action lists as well as for swapping when SfShell runs the
other utilities.

file

A file is a collection of information stored on your disk. All the data
that you ever save to disk is saved in a file. You can write to files and
read from files.

filemask

A filemask is a DOS filename which may include the ``wildcard'' characters
* and ?. The wildcard characters in a filemask allow you to select a group
of files. Please consult your DOS reference for more information about
wildcard characters.

font

A font is a collection of symbols that have similar characteristics.  The 
symbols in a font have a fixed typeface, size, weight, style and symbol 
set. For example, upright, bold Times Roman at 10pt is a font.Contrast with 
typeface.

fontdir

In the context of this manual, a fontdir is the filemask ( optionally
including a path) that identifies LaserJet softfont files. For example, if
you keep all of your softfonts in the directory d:\fonts then
d:\fonts\A*.SFP is one example of a valid fontdir. The canonical font
directory would be d:\fonts\*.*.

glyph

A glyph is a more general term for a symbol that can appear in a
font.Usually we refer to individual symbols in a font as characters
(because they are things like ``A'' and ``&''). However, since any
arbitrary smear of ink can occur in a font, a more general term is
sometimes used.

hexadecimal

Hexadecimal refers to the number base composed of sixteen symbols (
09,A-F). Hexadecimal is frequently used in computing because 256 different
values can be represented in only two digits. Hexadecimal is sometimes
called base 16.

HMI

HMI is an abbreviation for horizontal motion index. This is the width of
the space that the LaserJet printer leaves when an undefined character is
printed. Many font designers take advantage of this behavior by defining
the HMI to be exactly the width of a space and not defining a space
character in the font.

kerning

Kerning refers to slight changes in the spacing between characters. Some
letter combinations (``AV'' and ``To'', for example) appear farther apart
than others because of the shapes of the individual letters. Many
sophisticated word processors move these letter combinations closer
together automatically (compare ``AV'' with ``AV'', for example).

laserjet

Laserjet is a trademarked name for laser printers made by Hewlett
Packard.In this document, it simply means an HP LaserJet printer or a
compatible laser printer from some other manufacturer.

mask

See filemask.

memory, expanded

See EMS.

memory, extended

Extended memory is memory above the 1 megabyte boundry in your
computer.Sfware cannot directly use extended memory. Many programs exist
which map extended memory as expanded memory. For more information about
expanded memory, see EMS.

memory, main

Main memory is the DOS memory below 640K in your computer. This is the area
where normal DOS programs run. The DOS chkdsk program, for example, reports
the amount of main memory that is free.

octal

Octal refers to the number base composed of eight symbols (0-7). Octal is
sometimes called base 8.

pathname

A pathname is a filename (please consult your DOS reference for more
information about what constitutes a valid DOS filename) with its
associated drive and path. For example, if tr100.sfp is the name of a file
in the directory \fonts on drive d:, then

    d:\fonts\tr100.sfp

is the pathname of tr100.sfp.

scalable font

A scalable font, unlike a bitmapped font, is defined mathematically and can
be rendered at any requested size (within reason). Sfware can download and
show scalable fonts but other manipulations (including on-screen
previewing) are not possible (at this time).

selection sequence

Your laser printer can print many different fonts. Some of the fonts are
built in, some may come from a cartridge and many can be downloaded.In
order to tell the laser printer which font you want text to be printed in,
you must send it a selection sequence. The selection sequence describes, in
a well defined, precise manner, the typeface, symbol set, height, width,
style, and degree of boldness that you want.

softfont

A softfont is a bitmapped or scalable description of a typeface or 
font.They can be downloaded to your printer and used just like any other 
printer font. Unlike built-in and cartridge fonts, softfonts use memory 
inside your printer. Downloading a lot of softfonts may reduce the printers 
ability to construct complex pages.

symbol set

The symbol set of a font describes the relative positions of individual
characters within the font. Since there can only be 256 characters in any
font, and there are well over 256 different characters used in professional
document preparation, there needs to be some way to map characters into
positions within the font. The symbol set serves this purpose.It identifies
the ``map'' used to position characters within the font.

typeface

A typeface is generic term for a collection of symbols with a similar
style.Times Roman and Helvetica are typefaces. Contrast with font.

                               SfWare Order Form


Name: ______________________________________    Phone: (____) ____-___________

Company: ___________________________________    Email: _______________________

Mailing Address: _____________________________________________________________

                 _____________________________________________________________

                 City: ____________________________ State: ____ Zip: _________


Please pay by check or money order, do not send cash through the mail.  Make
all checks payable to Norman Walsh.


  Individual utilities:                             Quantity   Price  Total
                                                               Each

  _____ SfFx (softfont special effects)              _____  @  $25    _____

  _____ SfCmpr (softfont compression)                _____  @  $10    _____

  _____ SfLoad (download softfonts)                  _____  @  $10    _____

  _____ SfRotate (landscape/portrait conversion)     _____  @  $10    _____

  _____ SfShow (print summary page)                  _____  @  $10    _____

  _____ SfView (preview font on screen)              _____  @  $10    _____

  _____ SfDir (directory replacement for fonts)      _____  @  $ 5    _____

  _____ SfInfo (complete font information)           _____  @  $ 5    _____

  Software bundles:

  _____ SfShell (menu interface shell) and           _____  @  $60    _____
        ALL utilities

  _____ All of the utilities (excluding SfShell)     _____  @  $40    _____

  _____ Any three utilities (excluding SfFx)         _____  @  $20    _____
        Please select individual utilities above.


                                                          Subtotal:   _____

         Massachusetts residents, please add appropriate sales tax:   _____

                                                             Total:   _____


            Complete this form and return it with your payment to:

                                 Norman Walsh
                              #42I Southwood Apts
                               Amherst, MA 01002
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3017

     Volume in drive A has no label
     Directory of A:\

    SFW11AD1 ZIP    286720   4-30-92   3:23p
    FILE3017 TXT      3183   5-01-92   3:32p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1617   1-01-80   2:19a
            4 file(s)     291558 bytes
                           28672 bytes free
