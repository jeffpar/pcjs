---
layout: page
title: "PC-SIG Diskette Library (Disk #3264)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3264/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3264"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  PC-SIG Disk #3264 CASTLE OF THE WINDS   >>>>           ║
║                        Disk 1 of 2 (also #3265)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To unzip the files to a pre-created subdirectory on your hard drive,   ║
║  insert disk 1 (#3264) and type:                                        ║
║                                                                         ║
║         PKUNZIP CASTLE [hard drive:\subdirectory]  (press Enter)        ║
║                                                                         ║
║  Then insert disk 2 (#3265) and copy all the files to the hard disk     ║
║  by typing:  COPY *.* [hard drive:\subdirectory]  (press Enter)         ║
║                                                                         ║
║  To start the game, switch to the hard drive and the subdirectory and   ║
║  type:  WIN CASTLE  (press Enter)                                       ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3264

     Volume in drive A has no label
     Directory of A:\

    CASTLE   ZIP    287539  11-30-92   1:00p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1386  11-30-92   3:04p
            4 file(s)     312491 bytes
                            8192 bytes free
