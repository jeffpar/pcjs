---
layout: page
title: "PC-SIG Diskette Library (Disk #3600)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3600/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3600"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #3600 BANDOR I  >>>>                  ║
║                     Disk 3 of 3 (also #3598, #3599)                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install the game to your hard disk, type:                           ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD BANDOR1  (press Enter)                                           ║
║     CD BANDOR1  (press Enter)                                           ║
║                                                                         ║
║  To extract the files from drive A, insert disk 3 (#3600) and type:     ║
║     A:PKUNZIP -D A:BANDOR1  (press Enter)                               ║
║     (use B: in place of A: if installing from drive B)                  ║
║                                                                         ║
║  To read documentation, type:  README  (press Enter)                    ║
║  To configure the game, type:  CONFIG  (press Enter)                    ║
║  To start the game, type:  BANDOR  (press Enter)                        ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3600

     Volume in drive A has no label
     Directory of A:\

    BANDOR1  ZIP    311073   4-21-93  11:41a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1617   4-21-93   3:01p
            4 file(s)     342099 bytes
                           18432 bytes free
