---
layout: page
title: "PC-SIG Library Disk #2444"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2444/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2444"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SYSTEM GUARDIAN PACKAGE"

    SYSTEM GUARDIAN PACKAGE consists of SYSGUARD, ATTRIB, and EXECHECK,
    three programs which help keep your files safe from disaster.
    
    Activate SYSGUARD and these potentially destructive
    commands cannot be performed: 1) disk format (including
    diskcopy); 2) disk write which bypasses DOS; 3) removal of a files
    read-only attribute; and 4) write to a read-only file.  If any of these
    actions are attempted, a message is displayed and the operation is
    prevented from taking place.  A simple command deactivates SYSGUARD and
    you again have access to any of the above actions.  SYSGUARD is an
    efficient terminate-stay-resident program using only 1K of RAM and can
    be used alongside other TSR programs.
    
    ATTRIB allows you to change the attribute of your files to read only,
    hidden, system, or archive.  ATTRIB is similar to the DOS ATTRIB command
    but includes the capability to change attributes to hidden or system.
    Use ATTRIB to make your program files read only, so SYSGUARD can keep
    them safe from sabotage.
    
    EXECHECK, available only to registered users, searches for .EXE programs
    that may have been patched or contaminated with a virus.  If discovered,
    EXECHECK can attempt removal of the virus.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2444

     Volume in drive A has no label
     Directory of A:\

    READ     ME       4864   3-14-90   1:17a
    SYSGUARD DOC      7296   3-14-90   1:32a
    ATTRIB   DOC      2688   3-14-90   1:21a
    SYSGUARD COM      1337   3-14-90   1:23a
    ATTRIB   COM      2670   3-14-90   1:23a
    FILE2444 TXT      2813  10-23-90   5:20p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       925   1-01-80   9:47a
            8 file(s)      22633 bytes
                          135168 bytes free
