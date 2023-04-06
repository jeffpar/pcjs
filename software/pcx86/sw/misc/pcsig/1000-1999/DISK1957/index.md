---
layout: page
title: "PC-SIG Diskette Library (Disk #1957)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1957/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1957"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VMS40"

    This is a device driver that turns either a hard disk or a floppy disk
    into LIM4 expanded memory.  It is a software emulation of the 28
    function standard set forth in the Lotus/Intel/Microsoft Expanded Memory
    Standard (LIM/EMS) version 4.0.  All of the EMS 4.0 functions that can
    be implemented through software are provided by VMS40, with the
    exception of the DMA functions included in the Alternate Map Register
    Set function (function 28).
    
    The program is backwards compatible with software written for the
    earlier LIM 3.2 standard (courtesy of Lotus, Intel & Microsoft).  It
    lets you specify which drive to use for expanded memory, and how much
    disk to reserve.
    
    The trial version VMS40.240 restricts you to reserving no more than 240K
    for LIM memory, while the registered version VMS40.SYS allows you to
    reserve up to 32 megabytes.
    
    Naturally, using a disk to simulate LIM memory is somewhat slower than
    having the appropriate hardware implementation, but it is also a lot
    cheaper!  If you need to run big spreadsheets, or use Borland's
    standalone debugger to debug a really large program, and you cannot
    afford 2 megabytes of LIM memory, then VMS40 is your answer.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1957

     Volume in drive A has no label
     Directory of A:\

    EMS      EXE     15498   9-06-89   8:37a
    EMS      PAS     16211   9-06-89   8:37a
    FILE1957 TXT      2745   8-11-90  11:00p
    FILEINFO WF        581  10-30-89   9:48a
    REGIST   TXT      1094  10-23-89  11:44p
    VMS40    240      4670   7-03-90  10:02p
    VMS40    DOC      5332  10-30-89   9:57a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   6:35a
            9 file(s)      46709 bytes
                          110080 bytes free
