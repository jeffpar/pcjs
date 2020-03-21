---
layout: page
title: "Microsoft Windows 95: First Retail Release"
permalink: /software/pcx86/sys/windows/win95/4.00.950/
redirect_from:
  - /disks/pcx86/windows/win95/4.00.950/
  - /disks/pc/windows/win95/4.00.950/
preview: images/screenshot.png
machines:
  - id: deskpro386
    type: pcx86
    state: state.json
    config: /configs/pcx86/xml/machine/compaq/deskpro386/vga/4096kb/machine.xml
    drives: '[{name:"68Mb Hard Disk",type:4,path:"/harddisks/pcx86/sys/windows/win95/WIN95.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

Windows 95 was the successor to Windows 3.1 and included a number of important new features:

 * Support for 32-bit Windows applications
 * Long mixed-case filenames (up to 255 characters)
 * GUI improvements (e.g., Explorer, **Start** button, Taskbar, shortcuts) 

It was also first version of Windows that *required* an 80386 CPU (preferably a D-stepping or later).

Windows 95 was released to manufacturing on July 14, 1995 and went on sale at midnight on August 24, 1995.

It is shown running below, following a "Compact Installation" on a 68Mb hard disk.  Before the machine can
start, it must download the disk image, which may take a minute or two, depending on the speed of your
internet connection.

More information about this Windows 95 demo is available in the [PCjs Blog](/blog/2015/09/21/).

{% include machine.html id="deskpro386" %}
