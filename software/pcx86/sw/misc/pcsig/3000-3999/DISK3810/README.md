---
layout: page
title: "PC-SIG Diskette Library (Disk #3810)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3810/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3810"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #3810 SOUNDWAV  >>>>                  ║
║                        Disk 1 of 2 (also #3449)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║  First, check to see if VBRUN100.DLL is in your WINDOWS or              ║
║  WINDOWS\SYSTEM subdirectory.  If not, copy VBRUN100.DLL from disk 2    ║
║  (#3449) into either subdirectory.                                      ║
║                                                                         ║
║  To install this program to your hard disk, type:                       ║
║     [hard drive letter]:  (press Enter)                                 ║
║     MD SOUNDWAV  (press Enter)                                          ║
║     CD SOUNDWAV  (press Enter)                                          ║
║     A:SOUNDWAV  (press Enter)  (use B: if installing from drive B)      ║
║                                                                         ║
║  Then to start, type:  WIN SOUNDWAV  (press Enter)                      ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3810

     Volume in drive A has no label
     Directory of A:\

    SOUNDWAV EXE    357588   6-21-93   1:29p
    GO       TXT      1463   6-21-93   2:07p
    GO       BAT        31   6-04-92   2:25a
            3 file(s)     359082 bytes
                            1024 bytes free
