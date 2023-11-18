---
layout: page
title: "Microsoft Windows SDK 3.00 (Enhanced Mode)"
permalink: /software/pcx86/sdk/windows/3.00/enhanced/
preview: https://diskettes.pcjs.org/pcx86/sdk/windows/3.00/WIN30SDK-1200K-DEVTOOLS.jpg
machines:
  - id: deskpro386
    type: pcx86
    config: /machines/pcx86/compaq/deskpro386/vga/2048kb/machine.xml
    debugger: available
    drives: '[{name:"30Mb Hard Disk",type:3,path:"/harddisks/pcx86/30mb/MSDOS500-WIN300-VGA.json"}]'
    autoMount:
      A: None
      B: "Windows SDK 3.00 (1200K Disk 1)"
---

{% include machine.html id="deskpro386" %}
