---
layout: page
title: "PC-SIG Library Disk #874"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0874/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0874"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

## Information about "ZZAP AND OTHER UTILITIES FOR PROGRAMMERS"

    ZZAP is a disk editor that can read, modify and write any sector on the
    disk, as well as any file by filename upon the disk -- along the same
    lines as Norton's Utilities.
    
    A 4,096-byte buffer is used to hold the information to be written to or
    read from the disk.  Editing can be done on a byte-by-byte basis by
    entering the data in hex, decimal, octal or ASCII format.  You can also
    add, copy, or exchange the data of the current buffer.
    
    Programmers -- VECTOR inspects the interrupt vector table of your
    system and displays the vectors in human-readable form with some brief
    comments describing each interrupt.  This is useful because some
    interrupts are not standardized and are difficult to interpret.
    
    Attention, programmers -- 400 inspects the BIOS communications area and
    the DOS communications area and displays them in human-readable form.
    It also displays some brief comments describing each byte of the
    communications areas.
    
    RPN is a Reverse Polish Notation calculator based on a fully-visible
    stack, especially useful to busy programmers and computer specialists.

### Directory of PC-SIG Library Disk 0874

     Volume in drive A has no label
     Directory of A:\

    ZZAPDEMO EXE     60385   8-15-87   2:11p
    README   DOC       746   8-01-87   6:46p
    VERSION  DOC       222   7-30-87  11:52a
    TESTFILE ZAP       256   7-31-87   8:32p
    ORDER    DOC      1716   8-15-87   6:39p
    DEMO     DOC       749   8-15-87   3:25p
    QCMD     DOC      3378   8-01-87  11:14a
    FILES    DOC       860   8-25-87   8:50a
    MANUAL           37931   8-04-87   8:01p
    ZZAP3    EXE     21681  12-31-85   1:17a
    MANUAL3           4811   8-26-87   2:44p
    -------- ---         5  11-25-87   4:12p
    VECTOR   COM     25240   5-09-87   8:33p
    400      COM     30696   5-09-87   8:33p
    RPN      COM     36694   5-09-87   7:58p
    FILES874 TXT      2226  12-01-87   2:44p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1079  11-30-87  10:20a
           18 file(s)     228713 bytes
                           83968 bytes free
