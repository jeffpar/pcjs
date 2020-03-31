---
layout: page
title: "Microsoft Windows 95: First Retail Release (with Debugger)"
permalink: /software/pcx86/sys/windows/win95/4.00.950/debugger/
redirect_from: /disks/pcx86/windows/win95/4.00.950/debugger/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    state: /software/pcx86/sys/windows/win95/4.00.950/state.json
    config: /configs/pcx86/xml/machine/compaq/deskpro386/vga/4096kb/debugger/machine.xml
    drives: '[{name:"68Mb Hard Disk",type:4,path:"/harddisks/pcx86/68mb/WIN95.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

Windows 95 is shown running below, following a "Compact Installation" on a 68Mb hard disk.  Before the machine can
start, it must download the disk image, which may take a minute or two, depending on the speed of your
internet connection.  You can also run [Windows 95](../) without the PCjs Debugger.

More information about this Windows 95 demo is available in the [PCjs Blog](/blog/2015/09/21/).

{% include machine.html id="deskpro386" %}
