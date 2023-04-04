---
layout: page
title: "PC-SIG Library Disk #1617"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1617/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1617"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISAM"

    DISAN is a GW-BASIC programmer's answer to random access.  No block
    numbers to translate.  No hashing formulas.  Just pass the character key
    of the record and let DISAM do the work.  A resident file handler, DISAM
    handles variable length records up to 255 bytes.  Easy as:
    Open,filename; Get,Jim Jones; Close;.
    
    You can open up to five DISAM files at one time.  Assembler programs
    with record lengths in excess of 8K can also use DISAM.  With loads of
    documentation, DISAM includes test files and a test program with
    structured BASIC source code.  DISAM accesses records by assigned
    character key and will read records sequentially in ascending key order.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1617

     Volume in drive A has no label
     Directory of A:\

    ADDRBOOK EXE     47546  11-25-89   6:33p
    ADDRBOOK LST     13516  11-25-89   6:33p
    ADDRBOOK SBA      8567  11-25-89   3:28p
    DFH3     COM      3821   4-20-90   3:50a
    DFH3     Z01      2555   4-20-90   3:50a
    DFH3     Z03      2925   4-20-90   3:50a
    DISAM    COM     10517   4-20-90   3:50a
    DISAM    DOC     26440   4-20-90   3:50a
    DISAMACC SUB      4806   9-06-88   6:52p
    DISAMTST EXE     39530   6-02-90   6:14p
    DISAMTST LST      6061   6-02-90   2:29p
    DISAMTST SBA      3726   6-02-90   1:26p
    DSMLOGIC DOC     35299   4-20-90   3:50a
    READ     ME       1213  11-25-89   7:07p
    TESTFILE DAT     88376  11-25-89   9:14a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       729   7-10-90  12:32a
    FILE1617 TXT      1925   7-10-90   2:23p
           18 file(s)     297590 bytes
                           16384 bytes free
