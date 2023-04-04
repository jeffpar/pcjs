---
layout: page
title: "PC-SIG Library Disk #2245"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2245/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2245"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SWAPDOS"

    With SWAPDOS, one DOS application may run another, even if both would
    normally not fit in memory at the same time.  By copying base memory,
    used by the currently running application, to expanded memory/extended
    memory, or to a disk file, base memory needed by the application is
    freed up.  The desired program is run before restoring the original
    environment.
    
    Swap out single programs, multiple programs, resident programs, etc.
    The amount of extra memory gained by using SWAPDOS depends on the
    application(s) being swapped out.  In general, all of the memory used
    by your program is available for use, minus about 3000 bytes.
    
    If you use one or two main programs and wish to switch among them, or
    to switch to other programs, SWAPDOS is essential.  If you only have
    640K with no expanded or extended memory, it's indispensable!
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2245

     Volume in drive A has no label
     Directory of A:\

    !                  396   2-01-90
    IDCBRAND COM      2744   2-01-90
    ORDER    DOC      8046   2-01-90
    READ     ME       1910   2-01-90
    SWAPDOS  COM     10768   2-01-90
    SWAPDOS  DOC     66685   2-01-90
    VENDOR   DOC      2427   2-01-90
    GO       BAT        37   6-21-90  10:39a
    GO       TXT      1079   6-22-90  11:32a
            9 file(s)      94092 bytes
                           63488 bytes free
