---
layout: page
title: "IBM TopView 1.01 (With Debugger)"
permalink: /software/pcx86/env/ibm/topview/1.01/debugger/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/640kb/mouse/debugger/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: IBM TopView 1.01 (Program)
    autoScript: startMouse
machineScripts:
  startKbd: |
    wait Keyboard DOS;
    type Keyboard "$date\r$time\rB:\rTV\r";
  startMouse: |
    wait Keyboard DOS;
    type Keyboard "$date\r$time\r";
    wait Keyboard;
    sleep 1000;
    select FDC listDrives "A:";
    select FDC listDisks "MS Mouse 5.00 (SYSTEM)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "MOUSE\r";
    sleep 10000;
    type Keyboard "B:\rSETUP\r$70.3\r$30n\r$30y\r$30\r$30\r$30\r";
---

{% include machine.html id="ibm5160" %}
