---
layout: page
title: "Lemmings (1991)"
permalink: /software/pcx86/game/other/1991/lemmings/
redirect_from: /disks/pcx86/games/other/1991/lemmings/
machines:
  - id: deskpro386
    type: pcx86
    config: /configs/pcx86/xml/machine/compaq/deskpro386/vga/2048kb/debugger/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/harddisks/pcx86/sys/dos/compaq/3.31/COMPAQ331-LEMMINGS.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

{% include machine.html id="deskpro386" %}
