---
layout: page
title: "PC-SIG Diskette Library (Disk #2925)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2925/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2925"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #2925  VMIX 386  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To read the initial instructions, type:  TYPE READ.ME  (press Enter)    ║
║                                                                         ║
║ To extract the files, type:  VMIX278 [drive:\path]  (press Enter)       ║
║                                                                         ║
║ After extracting the files, change to the drive\directory where VMIX    ║
║ is now located and print the documentation by typing:                   ║
║                                       COPY VMIX.DOC PRN  (press Enter)  ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2925

     Volume in drive A has no label
     Directory of A:\

    READ     ME       4723   8-25-92   8:27a
    VMIX278  EXE    186287   8-25-92   8:27a
    GO       TXT      1001   9-15-92  10:45a
    GO       BAT        38   1-31-91  12:58a
            4 file(s)     192049 bytes
                          129024 bytes free
