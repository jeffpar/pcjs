---
layout: page
title: "King's Quest (1987)"
permalink: /software/pcx86/game/other/1987/kings_quest1/
machines:
  - id: ibm-5170-kq1
    type: pcx86
    resume: 1
    config: /configs/pcx86/machine/ibm/5170/ega/1024kb/rev3/machine.xml
    autoMount:
      A:
        name: "PC DOS 3.30 (Disk 1)"
      B:
        name: "King's Quest (1987-05-05 #1)"
    autoType: \r\rb:\rinstallh c:\r
---

According to [Nerdly Pleasures](http://nerdlypleasures.blogspot.com/2017/04/the-evolution-of-kings-quest.html), the 1987 releases of
King's Quest were incremental improvements on November 1986 release, which added EGA and hard disk support.

The PCjs disk images preserve the [Copy-Protection](#copy-protection) that the game used, and PCx86 successfully passes the game's
copy-protection test.  The IBM PC AT below has diskette `King's Quest (1987-05-05 #1)` loaded in drive B:, ready to be installed on drive C:.

{% include machine.html id="ibm-5170-kq1" %}

### Online References

![King's Quest Artwork]({{ site.software.gamedisks.server }}/pcx86/game/other/1987/kings_quest1/KINGS_QUEST1.jpg)
