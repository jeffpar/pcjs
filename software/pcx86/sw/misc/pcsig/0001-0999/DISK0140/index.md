---
layout: page
title: "PC-SIG Library Disk #140"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0140/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0140"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "DOS UTILITIES NO 7"

    This disk has several file maintanence programs.  LU, GDEL, GCOPY,
    SQ-USQ, and EJLUTIL's all concern themselves with mass file storage
    and handling.  FREE works like CPM's STAT, by locating free room on
    the disk.  The 8087 files are routines to easily incorporate the Intel
    8087 math chip into high level languages.
    
    How to Start: From DOS prompt enter TYPE EJLUTIL.DOC for information
    about EJLUTIL. then enter LU EJLUTIL to unsqueeze EJLUTIL.  GDEL,
    GCOPY, LU, and SQ-USQ all have .DOC files to explain them.  Enter TYPE
    GDEL.DOC for example.
    
    File Descriptions:
    
    READ     ME   Listing of included files
    EJLUTIL  LBR  A library of useful utilities.  Unpack with LU.EXE
    EJLUTIL  DOC  Documentation for the utility library
    FLCHART  WKS  1-2-3 worksheet macros for drawing flowcharts
    FREE     COM  Reports free space on hard or floppy disk
    GCOPY    EXE  Choose multiple files to copy from full-screen menu
    GDEL     EXE  Choose multiple files to delete from full-screen menu
    GCOPY    DOC  Documentation for GCOPY.EXE
    GDEL     DOC  Documentation for GDEL.EXE
    INTOOLS  PAS  Set of interactive keyboard I/O procedures and functions
    LU       DOC  Documentation for LU.EXE
    LU       EXE  The latest and best library maintainer
    M8087    MAC  Macros for issuing 8087 instructions
    P87_INT       Pascal interface to PAS87.ASM routines
    PAS87    ASM  Assembler subroutines for using 8087 from Pascal
    USQLC10  COM  The latest file unsqueeze utility
    SQPC161  EXE  The latest file squeeze utility
    X2COLOR  COM  Copies the monochrome screen to the color display
    SQ-USQ   DOC  Documentation for SQPC161.EXE and USQLC10.COM

### Directory of PC-SIG Library Disk 0140

     Volume in drive A has no label
     Directory of A:\

    FLCHART  WKS      8192   3-25-84   2:17a
    X2COLOR  COM       128   3-25-84   2:15a
    P87_INT           5760   3-25-84   2:13a
    PAS87    ASM      5120   3-25-84   2:11a
    M8087    MAC      7296   3-25-84   2:10a
    FREE     COM      1024   3-25-84   2:08a
    GDEL     DOC      1024   3-25-84   1:59a
    LU       DOC      6144   3-25-84   1:50a
    LU       EXE     22528   3-25-84   1:48a
    SQ-USQ   DOC      5504   3-25-84   1:43a
    SQPC161  EXE     21376   3-25-84   1:42a
    GDEL     EXE     13312   3-25-84   1:35a
    EJLUTIL  DOC      7040   3-25-84   1:08a
    EJLUTIL  LBR      5504   3-25-84   1:06a
    GCOPY    DOC      1024   3-25-84   1:05a
    GCOPY    EXE     14336   3-25-84   1:00a
    INTOOLS  PAS      3968   3-25-84  12:57a
    USQLC10  COM     12288   2-05-84   1:12a
    READ     ME       1169   4-02-84   5:31p
    CRC      TXT      1452  11-13-84   2:32p
    CRCK4    COM      1536  10-21-82   7:54p
           21 file(s)     145725 bytes
                           12288 bytes free
