---
layout: page
title: "PC-SIG Diskette Library (Disk #3390)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3390/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3390"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #3390  KILOBLASTER  >>>>                ║
║                        Disk 2 of 2 (also #3385)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  A subdirectory KILO should have been made for you when you installed   ║
║  Disk #3385 by typing GO and following the instructions.                ║
║                                                                         ║
║  Add this file to the KILO subdirectory by typing:                      ║
║                                   PKUNZIP KILO2 [drive:\KILO]  (Enter)  ║
║                                                                         ║
║  To print the program documentation and instructions, type:             ║
║                                       COPY KILO.DOC PRN  (press Enter)  ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3390

     Volume in drive A has no label
     Directory of A:\

    KILO2    ZIP    320148   1-29-93   7:28a
    GO       TXT      1309   1-27-93   3:32p
    GO       BAT        38   1-31-91  12:58a
    PKUNZIP  EXE     23528   3-15-90   1:10a
            4 file(s)     345023 bytes
                           15360 bytes free
