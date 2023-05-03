---
layout: page
title: "PC-SIG Diskette Library (Disk #3743)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3743/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3743"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #3743 SVTIMECLOCK  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Install to your hard disk, type:                                    ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD TEMP  (press Enter)                                              ║
║     CD TEMP  (press Enter)                                              ║
║                                                                         ║
║  To Extract files from drive A, type:                                   ║
║     A:SVTCLOCK  (press Enter)  (use B: if installing from B drive)      ║
║                                                                         ║
║  To Install the program, type:  WIN SVINSTAL  (press Enter)             ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3743

     Volume in drive A has no label
     Directory of A:\

    SVTCLOCK EXE    310621   5-26-93   1:00p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1386   6-04-93   1:07p
            3 file(s)     312038 bytes
                            8192 bytes free
