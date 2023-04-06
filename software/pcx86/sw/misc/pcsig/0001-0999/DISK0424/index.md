---
layout: page
title: "PC-SIG Diskette Library (Disk #424)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0424/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0424"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL COMPILER"

    This is a p-code compiler for an extended subset of Pascal.  It is
    written in Turbo Pascal for the IBM PC.  This compiler will be of
    interest especially to two groups of users: (1) students learning the
    Pascal language, before making a commitment to a commercial compiler;
    (2) compiler tinkerers who desire source code for modification or
    extension.  The compiler adheres closely to the standard Pascal of
    Jensen and Wirth, but does not implement file I/O.
    
    System Requirements:  Pascal Language.
    
    How to Start:  Type FACILIS (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    FACILIS  COM  Pascal compiler.
    FACILIS  000  A required overlay file.
    FACILIS  UM   Users Manual for this Pascal compiler.
    FACILIS  DOC  A 1-page description of the diskette contents.
    ZELLER   PAS  Short demo program.
    FACILIS  IM   Implementation Manual for this Pascal compiler.
    TEST     PAS  Overall confidence test for the compiler.
    STEST    PAS  Exercises the string facility of the compiler.
    FACILIS  PAS  Main program in Turbo to compute day of the week.
    BLOCK    PAS  A required include file. Contains most of compiler.
    INTERPRT PAS  A required include file. Contains run-time interpreter.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0424

     Volume in drive A has no label
     Directory of A:\

    BLOCK    PAS     43008   3-05-85   2:10a
    FACILIS  000     38912   3-05-85   2:25a
    FACILIS  COM     50688   3-05-85   2:18a
    FACILIS  DOC      1792   8-20-85  10:29p
    FACILIS  IM      17152   3-05-85   1:53a
    FACILIS  PAS     23424   3-05-85   1:57a
    FACILIS  UM      11392   3-05-85   1:50a
    FILES424 TXT      1389  11-05-85   2:49p
    INTERPRT PAS     31744   3-05-85   2:03a
    STEST    PAS      5760   3-05-85   2:29a
    TEST     PAS     13568   3-05-85   2:27a
    ZELLER   PAS       768   8-20-85  10:29p
           12 file(s)     239597 bytes
                           78848 bytes free
