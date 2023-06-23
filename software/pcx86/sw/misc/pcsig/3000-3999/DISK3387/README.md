---
layout: page
title: "PC-SIG Diskette Library (Disk #3387)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3387/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3387"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #3387 MAJOR STRYKER  >>>>               ║
║                          Disk 2 of 2 (also #2829)                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install to your hard drive, type:                                   ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD MAJOR  (press Enter)                                             ║
║     CD MAJOR  (press Enter)                                             ║
║  Insert disk 2 (#3387) in drive A and type:                             ║
║     COPY A:ARJ.EXE  (press Enter)  (or type B:ARJ.EXE if from drive B)  ║
║  Insert disk 1 (#2829) in drive A and type:                             ║
║     ARJ E -V A:#1MAJOR.A01  (press Enter)                               ║
║     When prompted, insert disk 2 (#3387) in drive A.                    ║
║  To install the program files, type:  INSTALL  (press Enter)            ║
║  To start the game, type:  MAJOR  (press Enter)                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3387

     Volume in drive A has no label
     Directory of A:\

    #1MAJOR  A02    195558   2-17-93   5:17p
    ARJ      EXE    104614   1-19-92  11:51p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1463   2-18-93   1:22a
            4 file(s)     301673 bytes
                           18432 bytes free
