---
layout: page
title: "The Dungeons of Moria (1992)"
permalink: /software/pcx86/game/other/1992/moria/
redirect_from: /apps/pcx86/1992/moria/
machines:
  - id: ibm5160-moria55
    type: pcx86
    config: /configs/pcx86/machine/ibm/5160/cga/640kb/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: Moria (1992)
    autoType: $date\r$time\rB:\rMORIA88\r
    resume: 1
---

{% include machine.html id="ibm5160-moria55" %}
