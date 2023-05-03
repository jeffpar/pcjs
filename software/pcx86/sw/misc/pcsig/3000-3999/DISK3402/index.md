---
layout: page
title: "PC-SIG Diskette Library (Disk #3402)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3402/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3402"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║ <<<  PC-SIG Disk #3402  THE PALACE OF DECEIT - THE DRAGON'S PLIGHT  >>> ║
║                        Disk 2 of 2 (also #3401)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To uncompress the file on this disk to the hard drive/subdirectory     ║
║  where THE PALACE OF DECEIT is located, follow the set of directions    ║
║  below which apply to you:                                              ║
║                                                                         ║
║  ==For a dual 5-1/4" floppy disk drive system, type:                    ║
║                  LHA E P2_1 [hard drive]:\[game subdirectory]\  (Enter) ║
║                                                                         ║
║  ==If you only have one floppy drive, copy Disk 1's LHA.EXE to the      ║
║    game's subdirectory on the hard drive. Then put Disk 2 back in the   ║
║    A: floppy drive and extract P2_1.LZH by typing:                      ║
║             [hard drive]:\[game subdirectory]\LHA E P2_1                ║
║                             [hard drive]:\[game subdirectory]\  (Enter) ║
║                                                                         ║
║  To start the game from the hard drive, type:                           ║
║                               WIN \[game's subdirectory]\P2_1  (Enter)  ║
║                                                                         ║
║  To free up space, you can delete LHA.EXE from your hard drive by       ║
║  typing:  DEL [hard drive]:\[subdirectory]\LHA.EXE  (press Enter)       ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3402

     Volume in drive A has no label
     Directory of A:\

    P2_1     LZH    354611   1-29-93   4:10p
    GO       TXT      1925   2-01-93  11:32a
    GO       BAT        38   1-31-91  12:58a
            3 file(s)     356574 bytes
                            4096 bytes free
