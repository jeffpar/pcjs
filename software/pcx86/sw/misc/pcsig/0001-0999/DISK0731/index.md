---
layout: page
title: "PC-SIG Diskette Library (Disk #731)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0731/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0731"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOCATE"

    LOCATE can help you quickly and conveniently locate files by searching
    for key words.  It has two programs: INDEX and LOCATE. INDEX scans all
    the files on a specified disk and builds an index, while LOCATE uses
    that index to make a list of files with the specified keywords.
    
    The program has some limitations -- it won't recognize less than three
    characters or more than seven.  It makes no distinction between words
    whose first seven characters are identical.  For example,
    ``complication'' and ``complicity'' would both be regarded as
    ``complic.'' To solve this problem, more than one word can be specified
    for the search criteria.
    File Descriptions:
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES731.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  731  LOCATE                                                 v1
---------------------------------------------------------------------------
LOCATE is a system for finding out which files contain which words. It
consists of two programs INDEX and LOCATE. INDEX scans all of the files on
a specified disk and builds an index. In the case of a hard disk INDEX will
scan all directories and sub-directories automatically and LOCATE will
return full path designations to find the files. LOCATE uses that index to
make a list of files containing the specified keywords. The program does
have some limitations. Length of words which it will recognize must be more
3 characters but not more than 7 (in words which are more than 7 characters
long the extra characters are ignored ie; COMPLICATION and COMPLICITY would
be regarded as the same word). To avoid this problem LOCATE allows more
than one word to be specified for the search criteria. To match a file must
have both words.
 
COMMON         Documentation
DISCLAIM       Documentation
LICENSE        Documentation
WORDS          Documentation
NAMES          Documentation
FILES          Documentation
LOCATEOP       Documentation
LOCATREF       Documentation
DIRECTOR       Documentation
CAFR           Documentation
TESTDRIV       Documentation
INSTALL        Documentation
COPYRIGH       Documentation
INDEXREF       Documentation
TITLE          Documentation
LIMITS         Documentation
LOCATE   HLP   One screen help file
INDEX    HLP   One screen help file
EXTENSIO HLP   One screen help file
WORDS    HLP   One screen help file
PATH     HLP   One screen help file
INDEXOP        Documentation
INDEX    COM   Main index program
KEY      INX   Index created by index.com
EXTENSIO INX   Index created by index.com
WORDS    INX   Index created by index.com
MAP      INX   Index created by index.com
ENTRY    INX   Index created by index.com
LOCATE   COM   Main locate program
FALSEHIT       Documentation
README         Documentation
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NOTES731.TXT

{% raw %}
```
Program name:  LOCATE
 
Author name:  James E. Tarvid
              Logical support
              Route 2 Box 73
              Independence, VA  24348
Telephone:    (703)-773-3419
 
Suggested donation:  $20.00 registration + $20.00 per year for support
 
Program description:
 
    LOCATE is a system for finding out which files contain which words.  It
consists of two programs INDEX and LOCATE.  INDEX scans all of the files on a
specified disk and builds an index.  In the case of a hard disk INDEX will
scan all directories and sub-directories automatically and LOCATE will return
full path designations to find the files.  LOCATE uses that index to make a
list of files containing the specified keywords.  The program does have some
limitations.  Length of words which it will recognize must be more 3
characters but not more than 7 (in words which are more than 7 characters long
the extra characters are ignored ie; COMPLICATION and COMPLICITY would be
regarded as the same word).  To avoid this problem LOCATE allows more than one
word to be specified for the search criteria.  To match a file must have both
words.
    There is no manual but The diskette contains numerous text files on
various aspects of the programs.  These files contain plenty of specific
technical information about how the program operates.  An overview of the
technology is contained in "CAFR" and enough instructions to run the program
are contained in "INSTALL", "INDEXOP", and "LOCATEOP".
    These programs will run on any IBM-PC or compatible with at least 128 K of
memory and two disk drives.  The documentation may be somewhat confusing for
the novice user, but program operation is very simple once you find the
instructions you need (hint: try printing the file TESTDRIV, it contains the
best step-by-step instructions)
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0731

     Volume in drive A has no label
     Directory of A:\

    CAFR             11342   2-09-87   3:52p
    COMMON            1161   3-31-85  12:45a
    COPYRIGH           637   1-11-86   2:32p
    DIRECTOR           996   1-11-86   2:33p
    DISCLAIM           427   1-11-86   2:34p
    ENTRY    INX     16372   2-18-87  11:40a
    EXTENSIO HLP       770   4-19-85   9:13a
    EXTENSIO INX       104   4-19-85   9:46a
    FALSEHIT          1313   1-11-86   2:35p
    FILES              793   3-31-85  12:46a
    FILES731 TXT      2215   4-08-87  10:48a
    INDEX    COM     22245   2-18-87  11:34a
    INDEX    HLP       965   4-19-85   7:31a
    INDEXOP           2335   4-23-85   6:50a
    INDEXREF          6266   2-09-87   3:01p
    INSTALL           2121   2-09-87   3:54p
    KEY      INX      4096   2-18-87  11:40a
    LICENSE           2440   2-09-87   2:46p
    LIMITS            1024   4-23-85   6:55a
    LOCATE   COM     12680   2-18-87  11:34a
    LOCATE   HLP       746   4-19-85   9:06a
    LOCATEOP           763   3-31-85  12:48a
    LOCATREF           856   3-31-85  12:48a
    MAP      INX       360   2-18-87  11:40a
    NAMES             1145   3-31-85  12:46a
    NOTES731 TXT      1850   4-08-87  10:45a
    PATH     HLP      1006   4-19-85   9:40a
    README            1319   2-09-87   4:32p
    TESTDRIV          1914   3-31-85  12:49a
    TITLE              464   2-09-87   3:08p
    WORDS             1283   3-31-85  12:46a
    WORDS    HLP       692   4-19-85   7:47a
    WORDS    INX       487   4-15-85   7:27a
           33 file(s)     103187 bytes
                           50176 bytes free
