---
layout: page
title: "PC-SIG Diskette Library (Disk #3401)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3401/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3401"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║ <<<  PC-SIG Disk #3401  THE PALACE OF DECEIT - THE DRAGON'S PLIGHT  >>> ║
║                        Disk 1 of 2 (also #3402)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║  The files on this disk are compressed under PALACE.LZH. To uncompress  ║
║  them to a new subdirectory on your hard drive, type:                   ║
║                                                                         ║
║      LHA E PALACE [hard drive:\[subdirectory name]\  (press Enter)      ║
║                                                                         ║
║  Answer "Y" at the prompt to accept the new subdirectory. The files     ║
║  will uncompress to the new subdirectory.                               ║
║                                                                         ║
║  Add the file from Disk 2 as per Disk 2's "GO" directions.              ║
║                                                                         ║
║  To start the game from the hard drive, type:                           ║
║                               WIN \[game's subdirectory]\P2_1  (Enter)  ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3401

     Volume in drive A has no label
     Directory of A:\

    PALACE   LZH    199108   2-01-93   7:52a
    LHA      EXE     34283   7-20-91   2:13a
    GO       TXT      1463   2-01-93  11:21a
    GO       BAT        38   1-31-91  12:58a
            4 file(s)     234892 bytes
                           84992 bytes free
