---
layout: page
title: "PC-SIG Diskette Library (Disk #3812)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3812/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3812"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3812 FONTSHOW  >>>>                 ║
║                    Disk 2 of 3 (#3811 and #3450 also)                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║  If you do not have the file VBRUN200.DLL in your \WINDOWS or           ║
║  \WINDOWS\SYSTEM subdirectory, copy that file from disk #3450 into      ║
║  either subdirectory.                                                   ║
║                                                                         ║
║  To install this game to your hard disk, type:                          ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD TEMPDIR  (press Enter)                                           ║
║     CD TEMPDIR  (press Enter)                                           ║
║                                                                         ║
║  To extract the files from drive A, insert disk 2 (#3812) and type:     ║
║     A:PKUNZIP A:FONTSHOW  (press Enter)                                 ║
║     (if installing from drive B use B: in place of A:)                  ║
║                                                                         ║
║  To install in Windows, type:  WIN SETUP  (press Enter)                 ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3812

     Volume in drive A has no label
     Directory of A:\

    FONTSHOW ZIP    327147   6-18-93   6:26a
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1771   6-18-93   7:33a
            4 file(s)     358327 bytes
                            2048 bytes free
