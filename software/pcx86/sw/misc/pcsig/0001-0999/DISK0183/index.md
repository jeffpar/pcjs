---
layout: page
title: "PC-SIG Library Disk #183"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0183/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0183"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "DOS UTILITIES NO 8"

    An assortment of the old and the new reside on this disk.  For those
    with older PC's, MEM640 patches to allow you to get 640k in your
    machine, RESCMD lets you have a memory-resident command processor.  Of
    more general appeal, MOVE combines the functionality of both COPY and
    DELETE into one easy package.  VTYPE is an improved TYPE command.  And
    COMSPEC4 lets you run COMMAND.COM from subdirectories.  Many more
    programs of interest are also included.
    
    System Requirements:  Some programs require BASIC
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    MEM640   DOC  Documentation
    MY-DATE  BAT  Part of COPYROM.EXE utility
    MEM640   ZAP  DOS patch lets older BIOS PC's use 544KB-640KB memory
    ROMREAD  BAS  Reads & displays ROM BIOS dates, type IBM PC  (Tom Allen)
    RESCMD   DOC  Documentation
    RESCMD   BAS  DOS 1.1 patch to make COMMAND.COM memory resident
    OLD-NEW  BAT  Part of COMPROM.EXE utility
    ROMREAD  DOC  Documentation
    VTYPE    EXE  Improved TYPE command  (Vincent Bly)
    VTYPE    DOC  Documentation
    MOVE     DOC  Documentation for MOVE.COM
    MOVE     COM  Utility - COPY command which prompts at each file
    BOARD    TST  Check for famous QUADRAM parity error design defect
    CHECKOUT BAS  Diagnostics on all ports
    CMD99    COM  Command processor
    COMSPEC4 ASM  Assembler source
    COMPROM  EXE  Compares two ROM programs from diskettes
    COMSPEC4 DOC  Documentation
    COMSPEC4 COM  DOS patch to activate COMMAND.COM in subdirectories
    COPYROM  EXE  Copies ROM programs onto diskette for later use
    CONFIG   EXE  Displays your PC's configuration
    CRS      COM  Compiled version
    CRS      BAS  Change cursor shape & size  (John Herzfeld)
    CRL      COM  Compiled version
    CRL      BAS  Change cursor shape & size  (John Herzfeld)
    INFO1    BAT  Documentation for COPYROM.EXE & COMPROM.EXE

### Directory of PC-SIG Library Disk 0183

     Volume in drive A has no label
     Directory of A:\

    BOARD    TST       640  11-27-83   5:41p
    CHECKOUT BAS      6272  12-12-82
    CMD99    COM      2367   2-09-82   5:37p
    COMPROM  EXE     27008  11-01-82   1:10p
    COMSPEC4 ASM      5504   1-01-84  12:08a
    COMSPEC4 COM       512   1-01-84   4:44a
    COMSPEC4 DOC      2944   1-01-84  12:16a
    CONFIG   EXE     24576   5-29-83  11:42a
    COPYROM  EXE     27392  11-01-82   1:10p
    CRL      BAS      3132   3-13-84  12:28a
    CRL      COM       102   3-13-84  12:33a
    CRS      BAS      1460   3-13-84  12:27a
    CRS      COM        10   3-13-84  12:31a
    INFO1    BAT      1408  11-01-82   1:10p
    MEM640   DOC      7040  12-11-83   4:28a
    MEM640   ZAP       896  12-11-83   4:26a
    MY-DATE  BAT       128  11-01-82   1:10p
    OLD-NEW  BAT       128
    RESCMD   BAS      3072  12-10-83   2:31a
    RESCMD   DOC      5120  12-10-83   2:28a
    ROMREAD  BAS       856   1-01-80  12:15a
    ROMREAD  DOC       512   4-30-84   9:00p
    VTYPE    DOC      2688   1-02-84   4:04a
    VTYPE    EXE     11776   1-04-84   2:14a
    XXX               1423   6-12-84   7:47p
    MOVE     DOC      1664   5-21-84   1:35a
    MOVE     COM      2138   5-03-84   1:17a
    CRC      TXT      1828  11-15-84   7:34a
    CRCK4    COM      1536  10-21-82   7:54p
           29 file(s)     144132 bytes
                           10240 bytes free
