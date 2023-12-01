---
layout: page
title: Microsoft Windows SDK 3.10 (Enhanced Mode)
permalink: /software/pcx86/sdk/windows/3.10/enhanced/
preview: https://diskettes.pcjs.org/pcx86/sdk/windows/3.10/WIN31SDK-DISK01.jpg
machines:
  - id: deskpro386
    type: pcx86
    config: /machines/pcx86/compaq/deskpro386/vga/4096kb/machine.xml
    debugger: available
    commands: m fault off
    drives: '[{name:"30Mb Hard Disk",type:3,path:"/harddisks/pcx86/30mb/MSDOS500-WIN310-VGA.json"}]'
    autoMount:
      A: None
      B: Windows SDK 3.10 (Disk 01)
    autoType: MODE COM2:9600,N,8,1\rWDEB386 /C:2 /F:C:\\WINDEV\\ENHANCED.WRF C:\\WINDOWS\\WIN.COM\r
---

{% include machine.html id="deskpro386" %}
