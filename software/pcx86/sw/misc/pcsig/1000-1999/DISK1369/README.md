---
layout: page
title: "PC-SIG Diskette Library (Disk #1369)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1369/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1369"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FXMASTER"

    FXMASTER uses one menu to let you select all 160+ Epson FX-series fonts
    from your keyboard or batch files.  WSASCII converts WordStar files to
    ASCII and vice versa.  MMSTAT computes statistics for field lengths in a
    mail merge file.
    
    FXMASTER uses one menu, or command line parameters, to let you select
    all Epson FX-series fonts from your keyboard or batch files.  It can
    issue a reset, line feed, or form feed, and can variably set margins,
    line spacing and form length, international character sets, and skip
    over perforation.  It also allows you to toggle on/off your printer's
    sheet-feeder, paper-out sensor, typewriter and quiet (half-speed) modes.
    
    WSACII converts WordStar files to ASCII and vice versa.  Several special
    options allow you to customize the conversion: strip dot commands,
    expand taps, strip leading spaces, and compress spaces.
    
    MMSTAT computes summary statistics, average/maximum/minimum lengths, and
    number of empty or zero-length fields, for each field in a mail merge
    file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1369.TXT

{% raw %}
```
Disk No: 1369
Program Title:  FXMASTER, WSASCII, and MMSTAT
PC-SIG version: 1

FXMASTER uses one menu to let you select all 160+ Epson FX-series fonts
from your keyboard or batch files.  WSASCII converts WordStar files to
ASCII and vice versa.  MMSTAT computes statistics for field lengths in a
mail merge file.

FXMASTER uses one menu, or command line parameters, to let you select
all 160+ Epson FX-series fonts from your keyboard or batch files.  It
can issue a reset, line feed, or form feed, and can variably set
margins, line spacing and form length, international character sets, and
skip over perforation.  It also allows you to toggle on/off your
printer's sheet-feeder, paper-out sensor, typewriter and quiet
(half-speed) modes.

WSACII converts WordStar files to ASCII and vice versa.  Several special
options allow you to customize the conversion: strip dot commands,
expand taps, strip leading spaces, and compress spaces.

MMSTAT computes summary statistics, average/maximum/minimum lengths, and
number of empty or zero-length fields, for each field in a mail merge
file.

Synopsis:  Select 160 Epson fonts, convert WordStar files, and compute
summary statistics for fields in a mail merge file.

Usage:  Printer Utility/ Word Processor Utility/Database Management.

Special Requirements:  FXMASTER needs an Epson printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 for FXMASTER, $10.00 for WSASCII, $10.00
for MMSTAT.

File Descriptions:

FXMASTER COM  Main program.
FXMASTER DOC  Documentation.
WSASCII  COM  Main program.
WSASCII  DOC  Documentation.
MMSTAT   COM  Main program.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FXMASTER.DOC

{% raw %}
```
Abstract
========

FXMASTER 3.31E uses one menu (or command line parameters) to let you select 
ALL 160+ Epson FX-series fonts from your keyboard or batch files. FXMASTER can 
issue a reset, linefeed, or form-feed, and can variably set margins, skip-
over-perf, line spacing and form length, and intl. char. sets. FXMASTER also 
toggles on/off: sheet-feeder, paper-out sensor, typewriter mode, and quiet 
(half-speed) mode.  Self-documenting. Also supports "Dots Perfect" upgrade 
from Dresselhaus Industries. User-supported: $15 gets you a hardcopy "tip 
sheet" plus the latest version on disk. 
 
Please post FXMASTER.ARC on your favorite BBS ... or add it to your user 
group's software library. And if you use it regularly, please register! 

Short description for BBS's:  MENU-SELECT 160+ EPSON FX FONTS/FEATURES

Enjoy!

Brian Raub
14 Rolling Road
Overbrook Hills, PA 19151

7/17/88
                          FXMASTER REGISTRATION FORM


    
          Send me your hardcopy "FXMASTER Tip Sheet" plus the latest 
         version of FXMASTER on 5-1/4", 360K DOS-compatible diskette! 


       I'm Registering ___ copy(ies) of FXMASTER @ $15.00 each: $_______
    

        Check or MO must accompany all orders, payable to "Brian Raub".


                                   Ship to:
                                   ========

         Name:_______________________________________________________

         Address:____________________________________________________

         City:___________________________State:______Zip:____________


                   Send order WITH check or money order to: 
                   ======================================== 

                                  Brian Raub
                                14 Rolling Road
                           Overbrook Hills, PA 19151


7/17/88 Release 3.31E


```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1369 FXMASTER  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type FXMASTER (press enter)                       ║
║                                                                         ║
║ To view the documentation on your screen, type VIEW (press enter)       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## WSASCII.DOC

{% raw %}
```

                WSASCII -- WordStar <-> ASCII Converter
                 Portions Copyright 1985 by Brian Raub

WSASCII converts WordStar files to ASCII, and vice versa. Several
special options allow (and help) you to customize the conversion.

OPTION                ACTION
===================== ==================================================

Strip Dot Commands    Removes all lines which start with a period, such
(WS->ASCII Only)      as .PA or comment lines starting with ..

Expand Tabs           Expands tabs to 5 spaces.
(WS->ASCII Only)

Strip leading spaces  Removes specified number of leading spaces. Useful
(ASCII->WS Only)      for converting a user's manual (with a standard #
                      of leading spaces on each line) to WS format.

Compress spaces       Compresses multiple spaces between words to single
(ASCII->WS Only)      space. Used to 'unjustify' text, but can cause
                      trouble if used on tabular material (see ..HARDEN)

There are two features on the menu to help review a file before you
convert it.

<D>irectory lists the files on the default drive, or at another location
you specify. You may use wildcards.

<V>iew lets you review the contents of an ASCII file, so that you can,
for example, decide how many leading spaces to delete. You may use the
<V>iew command on WS files, but the visual display will be garbled and
incomplete. The <V>iew command displays 23 lines of text at a time, or
fewer if the lines are longer than 80 characters each. <V>iew includes
an 'indent character counter' at the bottom of each screen of text.

While your file is processed, WSASCII displays a running count of lines
and characters processed -- from both source and destination files. The
unequal counts reflect the effects of your chosen options.

..HARDEN -- if placed in a ASCII file before conversion, will force hard
carriage returns until ..SOFTEN is encountered. These two commands will
help you to maintain hard line endings for tables, or other places you
need to maintain the hard carriage return format.

In every file that is converted from ASCII->WS, there will be several
added lines at the top which explain how to reform the file.

Here's how WSASCII works:

ASCII->WordStar Conversion:
===========================

  A. Strips all nulls (Hex value: 00)
  B. Replaces hard carriage returns with soft ones, except when:
     1. the first character of the following line is a space or tab or
        another <CR>, or if the next line starts with a period.
     2. the first character of the current line is a period or <CR>.
     3. The ..HARDEN flag has been turned on, and ..SOFTEN not yet
        received.
  C. Optionally compresses multiple spaces between words to one.
  D. Optionally strips leading spaces before step A or B.

WordStar->ASCII Conversion
==========================

   A. Removes all high bits.
   B. Throws away control characters, except CR, TAB, and LF.
   C. Optionally expands tabs to 5 spaces.
   D. Optionally strips lines that start with a period.


IF YOU LIKE WSASCII...
======================

WSASCII is user-supported software. If you like it, please send $10
(each user) to the author:

     Brian Raub
     14 Rolling Road
     Overbrook Hills, PA 19151

Source code (TURBO PASCAL) is available for $25, on a DOS 2.1 diskette,
shipping included.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1369

     Volume in drive A has no label
     Directory of A:\

    FILE1369 TXT      1774   5-01-89  10:59a
    FXMASTER COM     24839   7-17-88  12:46a
    FXMASTER DOC      1904   7-17-88  12:53a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-01-89   2:14p
    MANUAL   BAT       154   5-01-89   2:15p
    MMSTAT   COM     18108   3-04-86   1:53p
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        44   5-01-89   2:14p
    WSASCII  COM     21823   8-24-85   9:49p
    WSASCII  DOC      3436   4-21-85   1:47a
           11 file(s)      73139 bytes
                           83968 bytes free
