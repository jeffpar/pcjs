---
layout: page
title: "The Oregon Trail (1990)"
permalink: /software/pcx86/game/other/1990/oregon_trail/
redirect_from: /disks/pcx86/games/other/1990/oregon_trail/
machines:
  - id: ibm5170-oregon21
    type: pcx86
    config: /configs/pcx86/xml/machine/5170/vga/2048kb/machine.xml
    autoMount:
      A:
        name: PC DOS 3.30 (Disk 1)
      B:
        name: Oregon Trail 2.1 (1990)
    autoStart: true
    autoType: \r\rB:\rOREGON\r
---

{% include machine.html id="ibm5170-oregon21" %}
