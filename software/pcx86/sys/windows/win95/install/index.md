---
layout: page
title: Microsoft Windows 95 Installation Machine
permalink: /software/pcx86/sys/windows/win95/install/
machines:
  - id: deskpro386
    type: pcx86
    debugger: available
    config: /machines/pcx86/compaq/deskpro386/vga/4096kb/machine.xml
    drives: '[{name:"68Mb Hard Disk",type:4}]'
    autoMount:
      A: "MS-DOS 5.00 (720K Disk 1)"
      B: "None"
---

{% include machine.html id="deskpro386" %}
