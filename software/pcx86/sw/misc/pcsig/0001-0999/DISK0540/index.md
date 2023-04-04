---
layout: page
title: "PC-SIG Library Disk #540"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0540/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0540"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TINY PASCAL COMPILER"

    This disk will let you design and implement a small subset Pascal
    compiler, using the Turbo Pascal compiler.  It will let you translate
    the program into 8086 symbolic assembly language which you can compile.
    Not only can you build a small compiler, you learn how to create your
    own language tanslators and compilers.
    
    System Requirements:  64K, one disk drive and monochrome display, and a
    TURBO PASCAL compiler.
    
    How to Start:  To read TXT files, enter TYPE filename.ext and press
    <ENTER>.  To run a COM program, just type its name and press <ENTER>.
    For instructions on PAS listings, refer to your Pascal manual.
    
    File Descriptions:
    
    TUUTILS  PAS  Skeleton source file
    TUSYMS   PAS  Skeleton source file
    TUSKEL   PAS  Main "skeleton" file used by QPARSER to create
    PMACS    TXT  Macro forms file for use with QPARSER program generator
    CHASM    CFG  Configuration file for use with CHASM assembler
    TUSEMS   PAS  Skeleton source file
    TURUN    TXT  Sample program for compiler
    TURUN    LST  Chasm assembler list file
    TURUN    COM  Assembled (executable) sample program
    TURUN    ASM  Compiler output (8086 assembly code)
    TURPT    TXT  QPARSER report file (from compiler creation)
    TUPROG   PAS  Tiny Pascal compiler program
    TUPROG   COM  Executable compiler
    TUFILES  PAS  Skeleton source file
    TUDECLS  PAS  Skeleton source file
    TUDBUG   PAS  Skeleton source file
    TU       TBL  Table file created by QPARSER table generator
    TU       GRM  Tiny Turbo Pascal grammar
    TU       DOC  Tutorial on creating a Tiny Pascal compiler
    STDIO    HDR  Standard assembly IO routines needed for Tiny Pascal
    STDIO    HDR  Standard assembly IO routines needed for Tiny Pascal
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0540

     Volume in drive A has no label
     Directory of A:\

    CHASM    CFG        15   2-17-86  10:07a
    FILES540 TXT      1816   6-03-86  11:37a
    GO       BAT       832   6-03-86  11:36a
    NOTES540 TXT      1802   6-03-86  11:52a
    PMACS    TXT      2966   1-10-86  10:03a
    STDIO    HDR      2845   2-19-86  12:35p
    TU       DOC     99978   6-03-86  11:46a
    TU       GRM      1125   2-17-86   2:35p
    TU       TBL      1770   2-17-86   2:36p
    TUDBUG   PAS      5427   2-17-86   2:59p
    TUDECLS  PAS      3347   2-17-86   2:57p
    TUFILES  PAS       511   2-17-86   2:46p
    TUPROG   COM     36049   2-24-86   2:06p
    TUPROG   PAS     29221   2-17-86   3:00p
    TURPT    TXT      2429   2-17-86   2:36p
    TURUN    ASM      9836   2-24-86   2:07p
    TURUN    COM      2609   2-24-86   2:10p
    TURUN    LST     20171   2-24-86   2:10p
    TURUN    TXT      1345   2-19-86  12:55p
    TUSEMS   PAS     23367   2-24-86   2:05p
    TUSKEL   PAS     24654   2-17-86   3:01p
    TUSYMS   PAS      4015   2-17-86   2:58p
    TUUTILS  PAS      1877   2-17-86   2:52p
           23 file(s)     278007 bytes
                           33792 bytes free
