---
layout: page
title: "PC-SIG Diskette Library (Disk #3291)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3291/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3291"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3291 WINBACK  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To extract the files to your hard disk, first create a subdirectory    ║
║  on you hard disk by typing:  MD WINBACK  (press Enter)                 ║
║                                                                         ║
║  Change to the subdirectory by typing:  CD WINBACK  (press Enter)       ║
║                                                                         ║
║  Then to extract the files from drive A type:  A:WINBACK (press Enter)  ║
║                                                                         ║
║  After extracting the files, to print out the installation              ║
║  instructions type:  COPY _README.1ST PRN  (press Enter)                ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3291

     Volume in drive A has no label
     Directory of A:\

    WINBACK  EXE    333258  11-30-92   6:21p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1232  12-22-92   5:41a
            3 file(s)     334528 bytes
                           25600 bytes free
