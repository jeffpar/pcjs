---
layout: page
title: "PC-SIG Library Disk #202"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0202/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0202"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MIT / ISI COMM GROUP"

    This is a serial I/O package originally developed by John Romkey and
    Jerry Saltzer of MIT. It is fully interrupt-driven on transmit,
    receive, and error detection.  It will run at 9600 baud, and even
    faster if you don't plan on doing anything else.  Both the complexity
    and flexibility of this package come from its ability to support
    multiple operating systems, languages, and address sizes.
    
    System Requirements: Two disk drives, an assembler and a C
    compiler.
    
    How to Start: From DOS, enter TYPE README for the disk's menu.  Enter
    TYPE COMMMSGS.DOC for details about the MIT/ISI communications package.
    
    File Descriptions:
    
    -------- ---  MIT/ISI COMM GROUP
    COMMREAD ME   Release letter for MIT/ISI communications package
    BMAC     MAC  Assembly language macros which encapsulate the sub-
    DOS      MAC  This file comes from the Lattice c distribution.  It
    TITLE    MAC  These macros provide functional replacements for
    TSTCOM2  C    A second test program for the COM package.  It
    TSTCOM   C    A test program for the COM package.  Allows the IBM PC
    TSTEXMEM C    This program tests the routines in EXMEM.  For complete
    TSTINT   C    A test program for INT_PKG
    TSTLPT   C    A test program for LPT_PKG
    BMACTST  ASM  This program tests the BMAC macros
    COM_PKG1 ASM  Provides a library of serial port routines
    COM_PKG  ASM  The interrupt-driven COM package
    EXIO     ASM  These routines provide additional machine I/O functions
    EXMEM    ASM  These routines provide additional physical memory
    INT_PKG  ASM  These routines save and restore interrupt vectors.
    LPT_PKG  ASM  An interrupt driver and interface package for the
    COMMMSGS DOC  Details about IBM ASYNC port & BIOS and MIT/ISI
    TRUTH    H    Contains type definitions for the boolean data type
    EXMEM    H    This file defines the P_ADDR  (Physical address)
    GLASSTTY PAS  Simple dumb terminal for IBM PC. (Microsoft Pascal)
    BEAUTY   H    A set of macros and type definitions which enhance c
    README        Description of included files
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0202

     Volume in drive A has no label
     Directory of A:\

    BEAUTY   H        6542   1-01-84   4:04p
    BMAC     MAC      8084   1-01-84   4:06p
    BMACTST  ASM      1506   1-01-84   4:11p
    COMMMSGS DOC     11374   1-16-84   8:51p
    COMMREAD ME       1887   1-10-84  11:14p
    COM_PKG  ASM     28415   1-01-84   4:17p
    COM_PKG1 ASM     12045   1-01-84   4:20p
    CRC      TXT      1616   2-05-85   9:55a
    CRCK4    COM      1536  10-21-82   5:50p
    DOS      MAC      2056   1-01-84   4:06p
    EXIO     ASM      8003   1-01-84   4:22p
    EXMEM    ASM      7054   1-01-84   4:23p
    EXMEM    H         338   1-01-84   4:04p
    GLASSTTY PAS      2079   1-01-84   4:02p
    INT_PKG  ASM     12893   1-01-84   4:26p
    LPT_PKG  ASM     15875   1-01-84   4:29p
    README            4076   2-04-85   8:27p
    TITLE    MAC       699   1-01-84   4:07p
    TRUTH    H         305   1-01-84   4:04p
    TSTCOM   C        3519   1-01-84   4:07p
    TSTCOM2  C        3731   1-01-84   4:09p
    TSTEXMEM C        1361   1-01-84   4:09p
    TSTINT   C        2426   1-01-84   4:10p
    TSTLPT   C        2185   1-01-84   4:11p
           24 file(s)     139605 bytes
                           14848 bytes free
