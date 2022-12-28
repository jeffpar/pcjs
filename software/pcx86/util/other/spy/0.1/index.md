---
layout: page
title: SPY 386 Monitor v0.1
permalink: /software/pcx86/util/other/spy/0.1/
machines:
  - id: deskpro386
    type: pcx86
    config: /machines/pcx86/compaq/deskpro386/vga/2048kb/machine.xml
    autoMount:
      A:
        name: COMPAQ MS-DOS 3.31 (Disk 2)
      B:
        name: SPY 386 Monitor 0.1
    autoType: \r\rB:\rDIR\r\SPY\r
---

{% include machine.html id="deskpro386" %}
