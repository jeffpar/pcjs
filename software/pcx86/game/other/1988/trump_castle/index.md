---
layout: page
title: "Trump Castle (1988)"
permalink: /software/pcx86/game/other/1988/trump_castle/
redirect_from: /disks/pcx86/games/other/1988/trump_castle/
machines:
  - id: ibm5170-trump120
    type: pcx86
    config: /configs/pcx86/xml/machine/5170/ega/640kb/rev1/enhanced/machine.xml
    autoMount:
      A:
        name: PC DOS 3.30 (Disk 1)
      B:
        name: None
    resume: 1
    autoScript: startMouse
machineScripts:
  startMouse: |
    wait Keyboard DOS;
    type Keyboard "\r\r";
    wait Keyboard;
    sleep 1000;
    select FDC listDrives "A:";
    select FDC listDisks "MS Mouse 6.14 (SETUP)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "MOUSE\r";
    sleep 2000;
    select FDC listDrives "A:";
    select FDC listDisks "Trump Castle 1.20 (1988)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "TRUMP\r";
---

{% include machine.html id="ibm5170-trump120" %}
