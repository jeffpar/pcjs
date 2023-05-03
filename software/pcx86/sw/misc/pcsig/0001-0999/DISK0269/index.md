---
layout: page
title: "PC-SIG Diskette Library (Disk #269)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0269/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0269"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC DEVELOPMENT"

    A completely functional version of BetaTool's BASIC Development
    System for programs of less than 6500 bytes.  BetaTool's system works
    with the BASIC interpreter to add easy file editing, instant
    cross-reference lists, selective line renumbering, variable dump and
    program expand/compress.  If you program in BASIC you should try this
    package.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BDS.DOC

{% raw %}
```
            BetaTool's BASIC Development System (BDS)
 
This document provides a brief description of the demo version of BDS.
The demo version is identical to the full package except this version
will only work on BASIC programs with a size less than 6500 bytes.
 
To install BDS, select the file that matches the version of BASIC you
are using, then copy that file to your working disk and rename it to
BDS.COM.  For example, if you are using IBM BASIC 3.30, type the command:

           COPY  B:IBMPC.3XX  A:BDS.COM


To start BDS, type the command:

	   BDS	MX  BASICA

where "BASICA" may be replaced by whatever you would normally type to
start BASIC on your system.  For example, the command:
 
	   BDS	MX  BASICA  SAMPLE

will start BDS with Advanced BASIC and run the program SAMPLE.BAS


The following summary of BDS commands is extracted from the BDS manual:




          Appendix G.  BDS Quick Reference Card


COMMAND ABBREVIATIONS            SINGLE-LETTER COMMANDS

A           AUTO                 E<Enter>   EDITs Current Line
C           CLS                  S<Enter>   SAVE Assist
D           DELETE               U<Enter>   Un-NEW
E           EDIT
L           LIST
L"          LOAD"                TRACE LIST COMMANDS
M           MERGE
P           LLIST                T<Enter>   Displays Trace List
S"          SAVE"                T,<Enter>  Prints Trace List


SCROLLING KEYS

<.>            Lists current program line
<->            Lists previous program line
<+>            Lists next program line
<<>            Lists first program line
<>>            Lists last program line
<PgUp>         Lists previous page of program lines
<PgDn>         Lists next page of program lines
<Ctrl><PgUp>   Lists first page of program lines
<Ctrl><PgDn>   Lists last page of program lines
<,>            Lists current page of program lines
</>            Lists current page of program lines from top
<Home>         Places the cursor at the lower left
               corner of the screen


                      SUPER RENUM

R [newline][,[increment][,[startline][,endline]]]
           Renumbers and/or relocates a block of program lines

RI [newline][,[increment][,[startline][,endline]]]
           Duplicates a block of program lines

RU         Scans the program for undefined lines

Cxx,yy     Copies source line xx to destination line yy

Mxx,yy     Moves source line xx to destination line yy





          Appendix G.  BDS Quick Reference Card


VARIABLE NAME/LINE NUMBER/NUMERIC CONSTANT CROSS-REFERENCE

X.[ppppp]  Lists references to the screen in ascending
           sequence, starting with ppppp

X,[ppppp]  Lists references to the printer in ascending
           sequence, starting with ppppp

Xppppp     Lists references to the item ppppp to the screen

X;         Displays all program lines that contain the last
           single item referenced

X,;        Same as X; but output is sent to the printer

X;ppppp    Combines the Xppppp and X; formats above

X,;ppppp   Combines the Xppppp and X,; formats above

<;>        Displays the next program line that contains
           the last single item referenced


                       VARIABLE DUMP

V.[vn]           Lists variables to the screen in ascending
                 sequence, starting with the specified
                 variable name.  To list all variables, omit
                 the optional vn parameter, e.g. V.

V,[vn]           Lists variables to the printer in ascending
                 sequence, starting with the specified
                 variable name.  To list all variables, omit
                 the optional vn parameter, e.g. V,

Vvn[,vn]...      Lists the specified variable(s) to
                 the screen

V,vn,vn[,vn]...  Lists the specified variables to
                 the printer

V                Repeats the previous V command





          Appendix G.  BDS Quick Reference Card


               STRING/KEYWORD CROSS-REFERENCE

F. REM     Lists program lines containing REM to the screen

F, REM     Lists program lines containing REM to the printer

F.["kw]    Lists keyword references to the screen in
           ascending sequence, starting with kw

F,["kw]    Lists keyword references to the printer in
           ascending sequence, starting with kw

F."ss"     Lists string references to the screen in
           ascending sequence, starting with ss

F,"ss"     Lists string references to the printer in
           ascending sequence, starting with ss

F"kw       Lists references to the keyword kw to the screen

F"ss"      Lists string references that CONTAIN ss
           to the screen

F"kw1+kw2  Lists references in which kw1 and kw2 appear
           in the same program line to the screen

F"kw1,kw2  Lists references to kw1 to the screen and
           REPLACES each occurrence of kw1 with kw2

F;         Displays all program lines that contain the last
           single item referenced

F,;        Same as F; but output is sent to the printer

F;"kw      Combines the F"kw and F; formats above

F,;"kw     Combines the F"kw and F,; formats above

F;"ss"     Combines the F"ss" and F; formats above

F,;"ss"    Combines the F"ss" and F,; formats above

<;>        Displays the next program line that contains
           the last single item referenced




          Appendix G.  BDS Quick Reference Card


COMPRESS                            UNCOMPRESS

H [LR,LB,LQ,LT,NC,RL,RV,SD,SP]      I [D E I L O Q T]

Where:                              Where:
  LR   Leave Remarks                  D   DATA item separation
  LB   Leave Blanks                   E   Expanded option
  LQ   Leave Quotes                   I   Indent loop suppress
  LT   Leave Typing characters        L   Line indentation
  NC   No Combination                 O   Output option
  RL   Remove Lines                   Q   Output option 2
  RV   Remove Variables               T   Type char suppress
  SD   Shorten and Display
  SP   Shorten and Print


                    SINGLE STEP TRACE COMMANDS

SYSTEM TROFF

SYSTEM TRON [STEP] [LINE] [LPRINT] [lineno] [CSRLIN xx [TO yy]]


           ADVANCED SINGLE STEP TRACE SPECIAL KEYSTROKES

<Ctrl><M>      alternates between the line number display and
               full program line display modes

top row <1>    sends the Trace List to the screen

top row <2>    sends the Trace List to the printer

gray minus <-> executes the next line, then repeats the last
               direct mode Variable Dump command

gray plus <+>  executes the next line, then scans the line and
               performs a Variable Dump for the variable names
               found on that line

<Ctrl><Enter>  initiates the Single Step Trace continuous
               execution mode





The full BDS package normally costs $125, but if you mention that you
got this demo disk from PC-SIG they will sell it to you for $99.
Indicate whether you want the IBM PC or PC Compatible package.

               BetaTool Systems
               8962 E Hampden Ave, Suite 179P
               Denver, CO  80231
               (303) 793-0145
```
{% endraw %}

## FILES269.TXT

{% raw %}
```
Disk No  269
Program Title: BetaTool's BASIC DEVELOPMENT SYSTEM (Demo version)
PC-SIG version 1.4

This disk has completely functional versions of BetaTool's BASIC
Development System except that they are limited to programs of less than
6500 bytes. BetaTool's system works with the BASIC interpreter to add
easy file editing, instant cross-reference lists, selective line renumber
variable dump, program expand and compress. If you program in BASIC you
should try this package.

Usage:  BASIC Utilities.

System Requirements:  A version of BASIC.

How to Start:  Type MANUAL (press enter).

Suggested Registration:  $125.00

File Descriptions:

BDS      DOC  Documentation text file
SAMPLE   BAS  Sample BASIC program
BCONFIG  COM  Configures the BDS.COM program file for selected options
IBMPC    2XX  Copy to BDS.COM if you are using IBM PC BASIC Version 2.xx
IBMPC    3XX  Copy to BDS.COM if you are using IBM PC BASIC Version 3.xx/4.xx
COMPAQ   211  Copy to BDS.COM if you are using COMPAQ BASIC Version 2.11
COMPAQ   300  Copy to BDS.COM if you are using COMPAQ BASIC Version 3.00
COMPAQ   310  Copy to BDS.COM if you are using COMPAQ BASIC Version 3.10
COMPAQ   311  Copy to BDS.COM if you are using COMPAQ BASIC Version 3.11
COMPAQ   320  Copy to BDS.COM if you are using COMPAQ BASIC Version 3.20
COMPAQ   331  Copy to BDS.COM if you are using COMPAQ BASIC Version 3.31
COMPAQ_B 311  Copy to BDS.COM if you are using COMPAQ BASIC Version 3.31B
GWBASIC  320  Copy to BDS.COM if you are using Microsoft GW-BASIC Version 3.20
GWBASIC  322  Copy to BDS.COM if you are using Microsoft GW-BASIC Version 3.22
ZENITH   322  Copy to BDS.COM if you are using Zenith GW-BASIC Version 3.22
TNDY1000 321  Copy to BDS.COM if you are using Tandy 1000 BASIC Version 3.20.01
TNDY1000 322  Copy to BDS.COM if you are using Tandy 1000 BASIC Version 3.20.21
TNDY1400 321  Copy to BDS.COM if you are using Tandy 1000 BASIC Version 3.20.01
TNDY3000 320  Copy to BDS.COM if you are using Tandy 3000 BASIC Version 3.20
TNDY4000 321  Copy to BDS.COM if you are using Tandy 4000 BASIC Version 3.20.01
HYUNDAI  320  Copy to BDS.COM if you are using Hyundai GW-BASIC Version 3.20
EPSON    320  Copy to BDS.COM if you are using Epson GW-BASIC Version 3.20

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║  << Disk No 269  BetaTool's BASIC Development System (Demo version) >>  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To read the documentation on this disk enter:                         ║
║                                                                         ║
║                       MANUAL (press enter)                              ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SAMPLE.BAS

{% raw %}
```bas
10 'This is a REMark
20 DEFINT H,I
30 DBL.PRECISION# = 4.#
40 HEX.VALUE = &HFFFF
50 B.STRING$ = "This is a string"
60 SNG.PRECISION = 5
70 IF DBL.PRECISION# > SNG.PRECISION THEN GOTO 150
80 DIM ARRAY(4)
90 FOR INDEX% = 1 TO 4
100 ARRAY(INDEX%) = INDEX%^2
110 NEXT INDEX%
120 GOTO 150
130 A.STRING$ = "This is a string" + ", too!"
140 YEAR = 1982
150 PRINT "End"
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0269

     Volume in drive A has no label
     Directory of A:\

    BCONFIG  COM      3025  10-09-86  12:59a
    BDS      DOC      7305   8-30-88   1:17p
    COMPAQ   211     17280   8-30-88   2:23p
    COMPAQ   300     17280   8-30-88   2:23p
    COMPAQ   310     17280   8-30-88   2:23p
    COMPAQ   311     17280   8-30-88   2:23p
    COMPAQ   320     17280   8-30-88   2:23p
    COMPAQ   331     17280   8-30-88   2:23p
    COMPAQ_B 331     17280   8-30-88   2:23p
    EPSON    320     17280   8-30-88   2:23p
    FILES269 TXT      2387   9-07-88   3:37p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   9-07-88  11:00a
    GWBASIC  320     17280   8-30-88   2:23p
    GWBASIC  322     17280   8-30-88   2:23p
    HYUNDAI  320     17280   8-30-88   2:23p
    IBMPC    2XX     17280   8-30-88   2:22p
    IBMPC    3XX     17280   8-30-88   2:22p
    MANUAL   BAT       147   9-07-88  11:00a
    SAMPLE   BAS       384   1-02-83  12:04a
    TNDY1000 321     17280   8-30-88   2:23p
    TNDY1000 322     17280   8-30-88   2:23p
    TNDY1400 321     17280   8-30-88   2:23p
    TNDY3000 320     17280   8-30-88   2:23p
    TNDY4000 321     17280   8-30-88   2:23p
    ZENITH   322     17280   8-30-88   2:23p
           26 file(s)     342300 bytes
                           13312 bytes free
