---
layout: page
title: "PC-SIG Diskette Library (Disk #3817)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3817/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3817"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║      <<<<  PC-SIG Disk #3817 SOUNDTOOL & SND TO WAV CONVERTER  >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install SOUNDTOOL to your hard disk, type:                          ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD SNDTOOL  (press Enter) (this creates a subdirectory              ║
║     CD SNDTOOL  (press Enter)  called SNDTOOL)                          ║
║     A:SNDTOOL  (press Enter)  (use B: if installing from drive B)       ║
║                                                                         ║
║  To start, type:  WIN SNDTOOL  (press Enter)                            ║
║                                                                         ║
║  To install SND TO WAV CONVERTER, follow the above steps except         ║
║  replace SNDTOOL with SNDTOWAV.                                         ║
║                                                                         ║
║  Then to start, type:  WIN SNDTOWAV  (press Enter)                      ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3817

     Volume in drive A has no label
     Directory of A:\

    SNDTOOL  EXE    323098   6-21-93  12:49p
    SNDTOWAV EXE     19362   6-21-93  12:58p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1540   6-21-93   2:44p
            4 file(s)     344031 bytes
                           16384 bytes free
