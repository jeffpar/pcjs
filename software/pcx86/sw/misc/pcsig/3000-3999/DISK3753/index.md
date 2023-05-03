---
layout: page
title: "PC-SIG Diskette Library (Disk #3753)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3753/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3753"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3753 LETTERHUNT  >>>>               ║
║                     Disk 3 of 3 (#3751 and #3752 also)                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Install this game to your hard disk, type:                          ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD TEMPDIR  (press Enter)                                           ║
║     CD TEMPDIR  (press Enter)                                           ║
║                                                                         ║
║  To Extract the files from drive A, insert disk 3 (#3753) and type:     ║
║     A:PKUNZIP A:LTRHUNT  (press Enter)                                  ║
║     (if installing from drive B use B: in place of A:)                  ║
║                                                                         ║
║  To Install, type:  INSTALL  (press Enter)                              ║
║                                                                         ║
║  You may then delete the files in the TEMPDIR subdirectory.             ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3753

     Volume in drive A has no label
     Directory of A:\

    LTRHUNT  ZIP    241878   6-01-93   7:50a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1617   6-04-93   1:13p
            4 file(s)     272904 bytes
                           47104 bytes free
