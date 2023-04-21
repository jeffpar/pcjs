---
layout: page
title: "PC-SIG Diskette Library (Disk #606)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0606/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0606"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POLYMATH"

    POLYMATH is a programming language much like Forth in structure, and
    developed to bridge the gap between programmable calculators and
    personal computer languages.  Anyone in the scientific or technical
    fields will find this program extremely useful for its number-handling
    abilities and ease of use.
    
    This language works much like the Hewlett Packard programmable
    calculator and can be used as a calculator.  Those familiar with the HP
    Reverse Polish Notation (RPN) know how simply complex formulas can be
    entered into the calculator.  POLYMATH uses this same scheme, but with
    defined words or functions.  Most words are defined with very simple
    tasks and then used and integrated with other words to build more
    powerful functions.  An entire programming dictionary of function words
    can then be developed.
    
    POLYMATH has a wide variety of applications and special uses.  It has
    strong on-line documentation which takes the first-time user through a
    menu-driven tutorial.  It also has files that explain the syntax
    and use of any word currently in its main dictionary.
    
    Included are a few dictionaries and application programs.  A review of
    these programs will be very helpful when learning the language.  It
    also features full graphics to round out the package.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES606.TXT

{% raw %}
```
Disk No:  606
Program Title: POLYMATH version 4.0
PC-SIG version: 2.2

POLYMATH is a language developed for number processing.  Much like
Forth, POLYMATH is highly modulated and based upon function words.

Most words are defined with very simple tasks.  These simple words are
then used and integrated with other words to build more powerful words
functions.  An entire programming dictionary of function words can then
be developed which is actually custom created by the author.
Specifically Polymath has a wide variety of applications and special
uses.  It has a strong on-line documentation application which takes the
first time user through a menu driven tutorial.  It also has explain
files that will explain the syntax and usage of any word currently in
its main dictionary.

POLYMATH as a function processor works much like the Hewlett Packard
programmable calculators.  Although a language, POLYMATH can be used
just as a calculator.  Those familiar with the HP Reverse Polish
Notation (RPN) know how simply complex formulas can be entered into the
calculator.  POLYMATH uses this same scheme, but with defined words or
functions.  Specifically Polymath has a number stack and an alpha stack
which revolves numbers through it as new computations are created and
old values are stored.  Included on this diskette are a few dictionaries
and application programs.  It is best to view these application programs
with a text editor, they all end in ".pm" and will be very informative
when learning the language.  POLYMATH also has full graphic features to
well round this language package.

The actual package has a few more features including more DOS features
and a 128k dictionary of predefined words and functions.  The full
featured version also has more variable power.  POLYMATH is rather
large, so it will require at least 192k and a color monitor is
recommended.  In short POLYMATH is a powerful, easy to use language much
like Forth in structure.  Polymath was developed to bridge the gap
between programmable calculators and personal computer languages.
Anyone in the scientific or technical fields will find this program
extremely useful for its number handling abilities and ease of use.

Usage:  Programming.

Special Requirements:  CGA graphics card.

How to Start:  Type GO (press enter).

Suggested Registration:  $40.00

File Descriptions:

!README  1ST  Notes on starting up.
CGA      BGI  CGA screen graphics driver.
COLORS   PM   Screen color configuration file.
EGAVGA   BGI  EGA/VGA screen graphics driver.
GOTH     CHR  Font file (Gothic).
GUIDE    HLP  On-screen tutorial (documentation file).
GUIDE    PKG  On-screen tutorial (dictionary file).
HERC     BGI  Hercules screen graphics driver.
LITT     CHR  Font file (small font).
PLOTS    BLK  Plotting demo (source file accessible from the editor).
PLOTS    HLP  Plotting demo (documentation screen).
PLOTS    PKG  Plotting demo (dictionary file).
PM       EXE  The Polymath executable.
PM       HLP  Polymath word documentation.
PM       PKG  Polymath main dictionary.
REGISTER DOC  How to and what you get by registering.
SANS     CHR  Font file (sans-serif).
SCRATCH  BLK  Data file.
TRIP     CHR  Font file (triplex).

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```


Polymath is distributed under a marketing approach call Shareware.  The disk
may be freely copied and shared to allow others to try it out before deciding
on a purchase.  If you use Polymath, you are expected to register.  If you do
not register, then you are not supporting the concept that brought you
Polymath in the first place and should not continue to use it.

Registration for $40 brings you in addition to this disk:

        - Latest version
        - Additional manual on disk, formatted for printing
        - General math pack with source includes:
             Matrix Calculator       Complex Numbers
             Polynomial Regression   Function Solver & Integrator
        - Postscript printer driver available for an additional $20
        - Free technical support
        - One week satisfaction guarantee

You may use the following form to order:




                          POLYMATH REGISTRATION FORM

Date _______________


Mail to:     Lobster Software
             5534 W. Alder Ave.
             Littleton, Colorado  80123

             Phone:  (303) 973-1028


Name    ________________________________________________________________

Address ________________________________________________________________

        ________________________________________________________________

City    ________________________________________________________________


+-----------------------------------------------------------------------+
| Product                        Quantity   Unit Price   Total Price    |
+-----------------------------------------------------------------------+
| Polymath (Evaluation disk)     ________      $10       ___________    |
|                                                                       |
| Polymath (Registered disk)     ________      $40       ___________    |
|                                                                       |
| Colorado residents add 4.6% sales tax:                 ___________    |
|                                                                       |
| Please pay  total amount  --->                         ____________   |
+-----------------------------------------------------------------------+

Please make checks payable to:  Lobster Software

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0606

     Volume in drive A has no label
     Directory of A:\

    !README  1ST       649   2-05-89   6:34p
    CGA      BGI      6253   8-29-88   5:00a
    COLORS   PM       1435   1-23-89   8:30p
    EGAVGA   BGI      5363   8-29-88   5:00a
    GOTH     CHR      8560   1-23-89   8:30p
    GUIDE    HLP     43868   2-04-89   2:49a
    GUIDE    PKG     11392   2-01-89   9:33p
    HERC     BGI      6125   8-29-88   5:00a
    LITT     CHR      2138   1-23-89   8:30p
    PLOTS    BLK     12288   2-04-89  12:22a
    PLOTS    HLP       256   2-04-89   1:01a
    PLOTS    PKG     11904   2-04-89  12:52a
    PM       EXE    137217   2-06-89  12:59a
    PM       HLP     52552   2-01-89   9:28p
    PM       PKG     10240   2-01-89   9:28p
    REGISTER DOC      2310   2-01-89  11:17p
    SANS     CHR      5438   1-23-89   8:30p
    SCRATCH  BLK      1024   2-11-89   1:09a
    TRIP     CHR      7241   1-23-89   8:30p
    FILES606 TXT      3385   3-03-89   3:22p
    GO       BAT        14   1-01-00  12:56a
    GO       TXT       694   3-01-89   3:56p
           22 file(s)     330346 bytes
                           19456 bytes free
