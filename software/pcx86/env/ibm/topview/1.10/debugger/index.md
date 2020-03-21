---
layout: page
title: "IBM TopView 1.10 (With Debugger)"
permalink: /software/pcx86/env/ibm/topview/1.10/debugger/
redirect_from: /disks/pcx86/apps/ibm/topview/1.10/debugger/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/640kb/mouse/debugger/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: IBM TopView 1.10
    autoType: $date\r$time\rB:\rSETUP\r$70y \r$20.1\r
---

{% include machine.html id="ibm5160" %}
