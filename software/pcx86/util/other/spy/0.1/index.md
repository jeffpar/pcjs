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

The machine below boots "COMPAQ MS-DOS 3.31" from drive A and then runs "[SPY](https://github.com/jeffpar/spy)"
from drive B.

Use '?' to get a list of SPY commands and 'g' to continue execution.  The first thing SPY will execute is an INT 19h
instruction, which will trigger a reboot from drive A.  Load another disk into drive A before typing 'g' if you want to
boot with a different disk while SPY is loaded.

The [SPY repository](https://github.com/jeffpar/spy) has more information about its history, compiling, and use.

{% include machine.html id="deskpro386" %}
