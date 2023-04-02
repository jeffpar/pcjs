---
layout: page
title: "PC-SIG Library Disk #30"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0030/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0030"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "PASCAL I/O"

    The Pascal programs on this disk show how to do disk I/O with Pascal.
    PASCAL I/O is logical well written and documented code.  At the heart
    of PASCAL I/O is INTRPT.OBJ which in conjunction with IOSTUFF.OBJ and
    IOSTUFF.INC demonstrate IBM I/O routines in Pascal.  Also included is
    DISKREAD which displays the disk contents using IBM BIOS.
    
    System Requirements:  An IBM PASCAL compiler.
    
    How to Start:  To read documentation enter: TYPE IOSTUFF.DOC.  To run a
    .PAS program, load Pascal, compile and run.
    
    File Descriptions:
    
    INTRPT   ASM  Source for INTRPT.OBJ
    IOSTUFF  DOC  Describes files below
    DISKREAD OBJ  Object for DISKREAD.EXE
    DISKREAD EXE  Displays disk contents by sector
    INTRPT   OBJ  Object to be linked to your Pascal program object
    DISKREAD PAS  Source for DISKREAD.OBJ
    IOSTUFF  OBJ  Object to be linked to your Pascal program object
    IOSTUFF  INC  Source to be INCLUDED with your Pascal program source
    IOSTUFF  PAS  Source for IOSTUFF object
    PRIME    PAS  Source for DEMO
    SAMPLE   PAS  Source for DEMO

### Directory of PC-SIG Library Disk 0030

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1075  11-09-84   8:51a
    CRCK4    COM      1536  10-21-82   7:54p
    DISKREAD EXE     37632   2-24-83   9:31a
    DISKREAD OBJ      7154   2-24-83   9:31a
    DISKREAD PAS      7507   2-24-83   9:28a
    INTRPT   ASM      1685  11-25-82   8:45p
    INTRPT   OBJ       234  11-25-82   8:45p
    IOSTUFF  DOC      5203   2-24-83   5:41p
    IOSTUFF  INC      5142   2-24-83   9:56a
    IOSTUFF  OBJ      7105   2-24-83   9:59a
    IOSTUFF  PAS      7340   2-24-83   9:56a
    PRIME    PAS       723   1-22-83   2:37p
    SAMPLE   PAS      4822  11-20-82   9:12a
           13 file(s)      87158 bytes
                           69632 bytes free
