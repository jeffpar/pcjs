---
layout: page
title: "PC-SIG Library Disk #314"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0314/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0314"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "C UTILITIES NO 4"

    This disk has an excellent Unix-type Grep function (string find)
    regardless of what C compiler you use.  Also here is XENIX which
    is a very nice set of disk I/O routines that support all the DOS
    features, and UNLUMP to help build larger C programs.
    
    System Requirements: C compiler and Assembler are optional.
    
    How to Start: To read DOC files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE program, just type its name and
    press <ENTER>.  For instructions on ASM or C listings, refer to
    your Assembler or C language manuals.
    
    File Descriptions:
    
    CC       C    C program that does the same thing as C86SAMPL.BAT !
    CASYNC   ASM  C interface to serial port. Includes XON/XOFF, buffered
    C86SAMPL BAT  Batch file to run C86 compiler
    C86MOD   DOC  How to make C86 programs return status to DOS 2.0
    GETSEG-C ASM  Gets vaule for all the segment registors
    CSYSINT  ASM  Interface between Lattice C and the 8088 interrupts
    CRC      C    Does CRC error checking on blocks of data
    CPRGRMS2 DOC  Short descption of the files on this disk
    CPRGRMS1 DOC  Short descption of the files on this disk
    CPRGRMS1 BAT  Copies all the files on this diskette to another disk
    CLS      C    C program to clear screen
    CC       EXE  CC.C ready to run
    LOCATE   C    C routine to position cursor on screen
    LEJ_LIB  C    Routines to count words etc, ASCII HEX conversion etc.
    KERMITPC HLP  lets pc emmulate a TTY termial. Documentation on KERMIT
    KERMITPC C    Reliable file transfer over unreliable I/O channels
    IOS1-20  ASM  DOS disk I/O functions for Lattice C
    GREP     DOC  GREP manual
    GREP     C86  GREP for C86
    GREP     C    GREP for Lattice C
    LUMP     C    Lump a group of files together
    MEMCLEAN C    Zeros memory to avoid parity checks
    MEMCLEAN DOC  Documentation on MEMCLEAN
    MOVMEML  ASM  C callable function to move memory
    RANDOM   ASM  Random number generator for C
    NAMES    C    Shows how to Access disk from C
    SETPRTR  C    Setup the parameters for EPSON printers
    RANDOM   C    Test for RANDOM.ASM
    XENIX    OBJ  XENIX ready to link. Lattice C
    XENIX    ASM  Source code for OPEN READ WRITE Supports full path names
    XC       EXE  XC ready to run
    XC       DOC  Documtation for XC
    XC       C    Cross reference utility for C programs
    USQ      C86  Unsqueeze a text file
    SQ       C86  Squeeze a text file into less space
    SWITCH1  C    Change display mode
    SWITCH   C86  Change display type
    UNLUMP   C    Seperate lumped files
    TYPESQ   C86  Type a squeezed file
    TPRINT   DOC  Documentation for TPRINT
    TPRINT   C    Prints files with page numbers headers ect.

### Directory of PC-SIG Library Disk 0314

     Volume in drive A has no label
     Directory of A:\

    C86MOD   DOC      2904   7-29-84   4:00p
    CSYSINT  ASM      3728   7-29-84   4:07p
    C86SAMPL BAT       825   7-28-83   8:13p
    MEMCLEAN C        4662   7-29-84   4:08p
    CASYNC   ASM     10544   7-29-84   4:00p
    CC       C        6305  12-27-84   7:13a
    MEMCLEAN DOC      3712   7-29-84   4:08p
    CC       EXE     11904   3-08-84   7:28a
    CLS      C        1857  12-18-83  12:19a
    CPRGRMS1 BAT       486   4-20-84  11:23p
    CPRGRMS1 DOC      1279   4-20-84  11:24p
    NAMES    C        5120   7-29-84   4:08p
    CPRGRMS2 DOC      1255   4-20-84  11:23p
    CRC      C        5089   7-29-84   4:00p
    RANDOM   ASM      2392   7-29-84   4:08p
    LEJ_LIB  C        6009   7-29-84   4:14p
    GETSEG-C ASM      2047  12-29-83   4:16p
    GREP     C       14695   7-29-84   4:00p
    GREP     C86     14737   7-29-84   4:00p
    SETPRTR  C        5374   7-29-84   4:08p
    SQ       C86     21534   7-29-84   4:09p
    GREP     DOC      3071  12-18-83  12:04a
    TPRINT   C        3584   7-29-84   4:09p
    IOS1-20  ASM      7161   7-29-84   4:00p
    KERMITPC C       31290   7-29-84   4:01p
    TYPESQ   C86      5803   7-29-84   4:09p
    KERMITPC HLP      4864   9-13-83   6:09p
    XC       C       21836   7-29-84   4:14p
    LOCATE   C        2178   7-29-84   4:01p
    USQ      C86      6172   7-29-84   4:09p
    LUMP     C        1099  12-30-83   1:33p
    MOVMEML  ASM      1618  12-14-83   9:29p
    RANDOM   C         296  12-14-83   9:29p
    SWITCH   C86       988  12-18-83  12:21a
    SWITCH1  C        2874  12-29-83   4:06p
    TPRINT   DOC      1664  12-20-83  12:22p
    UNLUMP   C        1437  12-30-83   1:25p
    XC       DOC      1531   8-08-83   9:13p
    XC       EXE     19072   1-01-84  12:13p
    XENIX    OBJ       640  12-20-83  12:07p
    XENIX    ASM      7296   7-29-84   4:09p
    FILES314 TXT      2688   5-23-85   1:14p
           42 file(s)     253620 bytes
                           49152 bytes free
