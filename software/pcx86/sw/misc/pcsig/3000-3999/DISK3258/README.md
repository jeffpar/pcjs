---
layout: page
title: "PC-SIG Diskette Library (Disk #3258)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3258/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3258"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  PC-SIG Disk #3258 GAKUSEI  >>>>                 ║
║                         Disk 1 of 2 (also #3259)                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install the program, first create a subdirectory on your hard       ║
║  drive by typing:  MD GAKUSEI  (press Enter)                            ║
║                                                                         ║
║  Change to the subdirectory by typing:  CD GAKUSEI  (press Enter)       ║
║                                                                         ║
║  To extract the files, insert disk 1 (#3258) and type:                  ║
║         GAKUSEI1 [hard drive:\subdirectory]  (press Enter)              ║
║                                                                         ║
║  Then insert disk 2 (#3259) and type:                                   ║
║         GAKUSEI2 [hard drive:\subdirectory]  (press Enter)              ║
║                                                                         ║
║  To print the documentation, type:  COPY GAKUSEI.DOC PRN (press Enter)  ║
║                                                                         ║
║  To start the program, type:  GAKUSEI  (press Enter)                    ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3258

     Volume in drive A has no label
     Directory of A:\

    GAKUSEI1 EXE    185535  12-21-92   4:28a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1694  12-21-92   5:12a
            3 file(s)     187267 bytes
                          133120 bytes free
