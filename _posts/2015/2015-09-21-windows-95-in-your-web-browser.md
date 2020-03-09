---
layout: post
title: Windows 95 In Your Web Browser
date: 2015-09-21 11:00:00
category: Windows 95
permalink: /blog/2015/09/21/
machines:
  - id: deskpro386
    type: pcx86
    state: /disks/pcx86/windows/win95/4.00.950/state.json
    config: /devices/pcx86/machine/compaq/deskpro386/vga/4096kb/machine.xml
    drives: '[{name:"68Mb Hard Disk",type:4,path:"/disks-demo/pcx86/drives/68mb/WIN95.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

Today, the last serious bug preventing a successful boot of Windows 95 was fixed.  I won't bore you with
the details.

OK, I will: three arithmetic instructions (specifically, **AND**, **OR** and **XOR**) include a variation that
converts an immediate signed byte into a signed word.  Those variations were failing to truncate the result when
a 16-bit operand size was in effect, and if the destination was a register, the upper 16 bits of that register
could become corrupted.

The [Windows 95 Test Machine](/disks/pcx86/windows/win95/4.00.950/) hard disk has been updated
with a complete set of Windows 95 files from a "Compact" installation, and first boot has finished, so instead
of the initial "Getting ready to run Windows 95 for the first time..." splash screen, you'll see the normal
Windows 95 startup screen.

The machine is still a bit finicky.  It easily gets confused about the state of its shift keys if you switch away
from the browser and then back again.  And Explorer windows don't open in the correct view; for example, both
**My Computer** and **Recycle Bin** open the same (incorrect) view.  In short, there are still some serious bugs
to be resolved, but booting has been achieved.

The adventure continues.

{% include machine.html id="deskpro386" %}

*[@jeffpar](https://jeffpar.com)*  
*September 21, 2015*
