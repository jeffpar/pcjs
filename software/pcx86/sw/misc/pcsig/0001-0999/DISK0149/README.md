---
layout: page
title: "PC-SIG Diskette Library (Disk #149)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0149/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0149"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "C UTILITIES NO 1"

    The files on the disk contain many useful routines including LUMP which
    is used to join files together for BBS file transfer. Inversely the
    UNLUMP routine separates the files.  This disk also contains a UNIX-
    type GREP string search function.
    
    System Requirements:  Optional C compiler
    
    How to Start: To read the files with the DOC extension enter
    TYPE filename.DOC <ENTER>.  To run files with EXE extention,
    type: filename <ENTER>.  To run the programs with the C
    extension, refer to your C manual for compilation and linkage.
    
    File Descriptions:
    
    LUMP     DOC  Documentation for LUMP
    UNLUMP   EXE  Program to split files apart
    LUMP     EXE  Program to lump files together
    UNLUMP   C    Source code for UNLUMP
    LUMP     C    Source code for LUMP
    GREP     EXE  Unix like grep command to find strings in files
    GREP     DOC  Documentation for GREP
    CC       C    Source code for CC
    CC       OBJ  Object file for CC
    CC       EXE  c program checker
    CC       DOC  Documentation for CC
    XC       EXE  Xreference utility for c programs
    XC       C    Source code for LUMP
    XC       DOC  Documentation for XC
    GREP     C    Source code for LUMP
    README        Notes about the files on this disk
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CC.DOC

{% raw %}
```
                       CC (C Checker)

            C Source Paren, bracket and comment Checker

                T. Jennings  -- Sometime in 1983

Very crude but very effective C source debugger. Counts the numbers of
matching braces, parenthesis and comments, and displays them at the left edge
of the screen. The best way to see what it does is to do it; try

        CC file

Properly handles parens and brackets inside comments; they are ignored.


```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #149, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  LUMP    .DOC         CRC = 4A 2A

--> FILE:  LUMP    .C           CRC = E3 67

--> FILE:  UNLUMP  .C           CRC = E6 72

--> FILE:  LUMP    .EXE         CRC = DD D3

--> FILE:  UNLUMP  .EXE         CRC = 5B 7A

--> FILE:  GREP    .DOC         CRC = E9 C8

--> FILE:  GREP    .EXE         CRC = 1C 36

--> FILE:  GREP    .C           CRC = E1 D9

--> FILE:  XC      .DOC         CRC = CE EE

--> FILE:  XC      .C           CRC = 90 7A

--> FILE:  XC      .EXE         CRC = 0E 84

--> FILE:  CC      .DOC         CRC = 5B 7E

--> FILE:  CC      .EXE         CRC = F5 E8

--> FILE:  CC      .OBJ         CRC = E0 9E

--> FILE:  CC      .C           CRC = 4D E7

--> FILE:  README  .            CRC = F6 67

--> FILE:  CRC     .TXT         CRC = 55 C3

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = 2C 4A

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## GREP.DOC

{% raw %}
```
                        GREP
                        ====

GREP searches a file for a given pattern.  Execute by:

   grep [flags] regular_expression file_list

Flags are single characters preceeded by '-':
   -c      Only a count of matching lines is printed
   -f      Print file name for matching lines switch, see below
   -n      Each line is preceeded by its line number
   -v      Only print non-matching lines
The file_list is a list of files.

The file name is normally printed if there is a file given.
The -f flag reverses this action (print name no file, not if more).

The regular_expression defines the pattern to search for.  Upper- and
lower-case are always ignored.  Blank lines never match.  The expression
should be quoted to prevent file-name translation.

x      An ordinary character (not mentioned below) matches that character.
'\'    The backslash quotes any character.  "\$" matches a dollar-sign.
'^'    A circumflex at the beginning of an expression matches the
       beginning of a line.
'$'    A dollar-sign at the end of an expression matches the end of a line.
'.'    A period matches any character except "new-line".
':a'   A colon matches a class of characters described by the following
':d'     character.  ":a" matches any alphabetic, ":d" matches digits,
':n'     ":n" matches alphanumerics, ": " matches spaces, tabs, and
': '     other control characters, such as new-line.
'*'    An expression followed by an asterisk matches zero or more
       occurrances of that expression: "fo*" matches "f", "fo"
       "foo", etc.
'+'    An expression followed by a plus sign matches one or more
       occurrances of that expression: "fo+" matches "fo", etc.
'-'    An expression followed by a minus sign optionally matches
       the expression.
'[]'   A string enclosed in square brackets matches any character in
       that string, but no others.  If the first character in the
       string is a circumflex, the expression matches any character
       except "new-line" and the characters in the string.  For
       example, "[xyz]" matches "xx" and "zyx", while "[^xyz]"
       matches "abc" but not "axb".  A range of characters may be
       specified by two characters separated by "-".  Note that,
       [a-z] matches alphabetics, while [z-a] never matches.
The concatenation of regular expressions is a regular expression.

History:

Obtained from the CP/M SIG on CompuServe in 1983.  The program
program contained this notice:

   The  information  in  this  document  is  subject  to  change
   without  notice  and  should not be construed as a commitment
   by Digital Equipment Corporation or by DECUS.

   Neither Digital Equipment Corporation, DECUS, nor the authors
   assume any responsibility for the use or reliability of  this
   document or the described software.

        Copyright (C) 1980, DECUS

   General permission to copy or modify, but not for profit,  is
   hereby  granted,  provided that the above copyright notice is
   included and reference made to  the  fact  that  reproduction
   privileges were granted by DECUS.

   Runs on the Decus compiler or on vms.
   Converted for BDS compiler (under CP/M-80), 20-Jan-83, by Chris Kern.

Converted to IBM PC with CI-C86 C Compiler June 1983 by David N. Smith.
(CompuServe 73145,153. Address: 44 Ole Musket Lane, Danbury, CT 06810)
Compiled using DeSmet in November 1983.


```
{% endraw %}

## LUMP.DOC

{% raw %}
```
                  Lump together a group of files
                  ==============================

Usage:  lump outfile infile1 ...

   Lump all input files into the output file,
   each being preceeded with a line identifying itself:

      *FILE: filename.ext

   Input files must contain only printable ASCII characters.
   If the output file exists, the program aborts.
   If no parameters are given the program tells about itself.

Use UNLUMP to break apart the file.

```
{% endraw %}

## XC.DOC

{% raw %}
```
          XC  -  A 'C' Concordance (XREF) Utility
          =======================================

'XC' is a cross-reference utility for 'C' programs.  Its has the
ability to handle nested include files to a depth of 8 levels and
properly processes nested comments.  Option flags support the
following features:

- Routing of list output to disk
- Cross-referencing of reserved words
- Processing of nested include files
- Generation of listing only
- Output page width

Usage: xc <filename> ...  <flag(s)>

All files listed are crossreferenced together.  The veriable listing
will show every occurance, for example, of 'var' in every file.

Flags: -i            = Enable file inclusion
       -l            = Generate listing only
       -r            = Cross-ref reserved words
       -o <filename> = Write output to named file
       -w width      = Width of output page; default=78

       Flags must follow all filenames

Examples:

       xc my.c

       xc main.c sub1.c sub2.c sub3.c -o xref.lst -w 120

History:

Version 1.0   January, 1982
Copyright (c) 1982 by Philip N. Hisley
        Philip N. Hisley
        548H Jamestown Court
        Edgewood, Maryland 21040
        (301) 679-4606
Released for non-commercial distribution only

Converted to IBM/PC CI/C86 by David N. Smith, May/June 1983
with enhancements and Lattice compiler support in December 1983.
        David N. Smith
        44 Ole Musket Lane
        Danbury, CT 06810
        (203) 748-5934
        CompuServe: 73145,153
Changes Copyright (c) 1983 by David N. Smith
Permission granted to copy for non-commercial purporses.

PC Enhancements include:
     1)  Nested #INCLUDE statements
     2)  Single spaced cross-reference list
     3)  Removal of tabbing on output device
         (Since many printers don't support it)
     4)  #INCLUDE statements with both "--" and <-->
         syntax and with a full fileid in the quotes.
         (Paths are not supported.)
     5)  Multiple input filenames on command line.

The current PC version only supports Lattice.  Conversion to others
should be relatively easy but see the compile time variable "Lattice"
for compiler specific sections.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0149

     Volume in drive A has no label
     Directory of A:\

    CC       C        3294   4-15-84   3:15p
    CC       DOC       466   4-15-84   3:19p
    CC       EXE     12160   4-15-84   3:17p
    CC       OBJ       990   4-15-84   3:16p
    CRC      TXT      1405  11-14-84   8:53a
    CRCK4    COM      1536  10-21-82   7:54p
    GREP     C       16726  11-29-83  11:14a
    GREP     DOC      3467   2-05-84  11:55a
    GREP     EXE     18432  12-05-83   6:08p
    LUMP     C        1099  12-30-83   1:33p
    LUMP     DOC       489   2-05-84  11:59a
    LUMP     EXE     11904  12-30-83   1:34p
    README            1274   4-15-84   3:41p
    UNLUMP   C        1437  12-30-83   1:25p
    UNLUMP   EXE     14336  12-30-83   1:41p
    XC       C       24797   2-04-84   2:47p
    XC       DOC      2237   2-05-84  11:48a
    XC       EXE     19072   1-01-84  12:13p
           18 file(s)     135121 bytes
                           22016 bytes free
