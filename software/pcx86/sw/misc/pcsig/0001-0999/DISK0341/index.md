---
layout: page
title: "PC-SIG Library Disk #341"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0341/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0341"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "C UTILITIES NO 6"

    This disk contains a collection of programs and subroutines in 'C',
    which can serve as time savers for those who don't wish to have to
    write everything themselves.  Ii is also useful as a learning tool for
    the novice, since you can inspect the source code and see how others
    do it.  Many of the routines/programs perform elemental functions
    similar to those found on many "seasoned" UNIX or XENIX systems.
    
    System Requirements: `C' compiler.
    
    How to Start:   To read TXT files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.
    
    File Descriptions:
    
    CC       ASM  C shell for Lattice C and DOS 2.00
    ADDLF    C    Program to add linefeeds to text if found absent
    CRC      C    Cyclic Redundancy Check functions
    CONIO    C    Source for console I/O routines
    DOS_ERR  TXT  Documentation on DOS 2.00 redirection of I/O bug
    FRAME    C    Function to draw a frame on the screen
    DUMP2    C    Program to print parts of large files in dump format
    IOS1_20  ASM  Level 1 I/O routines for DOS 2.00 and Lattice C
    INKEY    C    Input from keyboard function
    GETSEG_C ASM  Function returning current register values
    FUNKEY   C    Program to build function key reassignment files
    _MAIN    C    New version of "_main" for DOS 2.00 and Lattice C
    XC       C    C concordance utility
    TYPECONV C    Demo of type conversions in C
    TOWERS   C    "Towers of Hanoi" game written in C
    TINKEY   C    Program to test "inkey" function
    TIMEMARK TXT  Timestamping functions and benchmarks tests
    SYSINT   ASM  General interrupt call function
    STRING   C    Source for standard string functions (a la K&R book)
    SNAP     OBJ  Object code for the above
    SNAP     C    Dump memory area in hex/character format
    RENAME   C    Functional equivalent of a DOS "rename" in C
    PRINT    C    Program to print ASCII file with heading on each page
    MEMCLEAN DOC  Documentation for the above
    MEMCLEAN C    Program to "clean" memory above 640K
    M8087    MAC  Assembler macros for 8087 coprocessor support
    LIFE     C    "Game of Life" written in C
    LEJ_LIB  C    Example functions from Kernighan & Ritchie book on C
    ISCHECK  C    Program to verify Microsoft's "isxxxxxx" routines

### Directory of PC-SIG Library Disk 0341

     Volume in drive A has no label
     Directory of A:\

    ADDLF    C         640  10-27-83   8:47p
    CC       ASM      3584  10-30-83  11:13p
    CONIO    C        4096  10-30-83  11:07p
    CRC      C        6144  10-29-83  11:33a
    DOS_ERR  TXT      3456  10-30-83  11:10p
    DUMP2    C        5248  10-27-83   8:50p
    FILES    TXT      1736   4-29-85   1:50p
    FILES341 TXT      2048   5-23-85   2:06p
    FRAME    C        1920  10-27-83   8:51p
    FUNKEY   C        3712  10-27-83   8:47p
    GETSEG_C ASM      2944  11-22-83  11:07p
    INKEY    C        2560   9-25-83  12:28a
    IOS1_20  ASM      7680  10-27-83   8:35p
    ISCHECK  C        1536  10-27-83   8:48p
    LEJ_LIB  C        7808  10-27-83   8:53p
    LIFE     C        5504  10-27-83   8:54p
    M8087    MAC     29056  11-23-83  10:01p
    MEMCLEAN C        5632  10-30-83  11:06p
    MEMCLEAN DOC      3591   9-11-84   9:43p
    PRINT    C        3072  10-30-83  11:04p
    RENAME   C         512  10-27-83   8:59p
    SNAP     C        2432  12-19-83   3:26p
    SNAP     OBJ      1667  12-21-83   8:25a
    STRING   C        1792  10-27-83   9:00p
    SYSINT   ASM      2560   9-25-83  12:24a
    TIMEMARK TXT      8704   9-18-83  11:45p
    TINKEY   C        1024   9-25-83  12:29a
    TOWERS   C        3456  10-27-83   9:01p
    TYPECONV C        1536  10-27-83   9:02p
    XC       C       26496  10-27-83   8:46p
    _MAIN    C        1536  10-29-83  11:34a
           31 file(s)     153682 bytes
                            2560 bytes free
