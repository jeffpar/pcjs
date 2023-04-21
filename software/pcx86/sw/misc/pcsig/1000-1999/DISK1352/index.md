---
layout: page
title: "PC-SIG Diskette Library (Disk #1352)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1352/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1352"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC/370 CROSS ASSEMBLER 3 OF 3 (402, 859)"

    PC/370 is a cross assembler that lets you compile and run IBM 370
    Assembly language programs on a PC, XT or AT.
    
    These programs are well-documented with a good demonstration program.
    This is one of the most complete emulations of the VM370 assembler
    around.  A generous debugging and erase facility is also included to
    help you complete development cycles without the big blue box.
    
    Features included:
    
    ~ PC/370 assembler subroutines can be called from Micro Focus COBAL/2
    programs running either in extended memory-protected mode or normal MS-
    DOS real mode.  Standard linkage conventions are supported.
    
    ~ PC/370 run-time emulator can be made resident to eliminate loading it
    for each program or subroutine execution.  As part of making the
    emulator reusable, debug supports restoring traces
    
    ~ Hardware assist is available for the CVB and CVD 370 instructions
    using the math co-processor to speed up the instructions by a factor of
    four
    
    ~ Two new supervisor calls are included: SVC 36 will load into a
    predefined area of memory (useful for overlays); SVC 37 defines user
    SVC exits for modifying native SVC support without requiring an
    emulated interrupt driven shell
    
    ~ The cross assembler supports the copy statement to include source
    code files
    
    ~ The linkage editor supports option U to allow external unresolved
    references.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1352.TXT

{% raw %}
```
Disk No: 1352
Program Title: CROSS ASSEMBLER for the IBM 370 version 4.2 (Disk 3 of 3)
PC-SIG version: 3.3

PC/370 VIRTUAL MACHINE is a cross assembler that runs on the IBM-PC, AT,
or XT and lets you compile and run IBM 370 assembly language programs.
Please note that this is the second disk of a three disk set.  The other
two disks are #402 and 1352.

Usage:  For beginning through advanced S/370 assembly language
programmers.

Special Requirements:  None.

How to Start:  Type GO and press (press enter).

Suggested Registration:  $45.00

File Descriptions:

CBL     <DIR> Contains CBL Micro Focus VS COBOL demo program source
              code along with demo PC/370 assembler subroutine
              source code.
UTIL    <DIR> Contains utility program ALC source code.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1352

     Volume in drive A has no label
     Directory of A:\

    FILE1352 TXT       914   2-28-89   9:40a
    GO       BAT        38  11-04-87   1:33p
    GO       TXT       463   2-24-89   1:30p
    CALL370  CBL      1116  11-19-87   5:31a
    CALL370  IDY      3584   1-01-88   8:52a
    CALL370  INT      2304   1-01-88   8:52a
    CALLCIO  CBL       982  11-20-87   5:38a
    CALLCIO  IDY      3584   1-01-88   8:54a
    CALLCIO  INT      2304   1-01-88   8:54a
    CALLSQA  CBL      1111  11-20-87  10:30a
    CALLSQA  IDY      3584   1-01-88   8:53a
    CALLSQA  INT      2304   1-01-88   8:53a
    COBOL    DIR        32   8-29-87   2:41p
    TEST370  ALC      2052  11-20-87  10:46a
    TEST370  BIN       896   1-03-88  11:22a
    TESTCIO  ALC      8220  11-20-87  10:48a
    TESTCIO  BIN      3072   1-03-88  11:23a
    TESTCOM  ALC       103  11-20-87  12:14p
    TESTSQA  ALC      1799  11-20-87   8:52a
    TESTSQA  BIN       640   1-03-88  11:24a
    DEMOSEE1 KSF      2048   7-05-86   8:33a
    DEMOSEE2 KSF      1280   7-13-86   7:24a
    ONEBLANK ALC         3   5-03-87   8:33a
    PRINTDOC ALC      6444   1-03-88   7:55a
    SEE      ALC    101040   1-03-88   7:40a
    T370     ALC     28499   1-03-88   8:27a
           26 file(s)     178416 bytes
                          129024 bytes free
