---
layout: page
title: Microsoft Windows 1.01 with CGA Display
permalink: /software/pcx86/sys/windows/1.01/cga/
redirect_from: /disks/pcx86/windows/1.01/cga/
preview: screenshot.png
machines:
  - id: ibm5160-cga-win101
    type: pcx86
    resume: 1
    state: /harddisks/pcx86/sys/windows/1.01/PCDOS200-WIN101-CGA-STATE.json
    config: /configs/pcx86/xml/machine/5160/cga/256kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/sys/windows/1.01/PCDOS200-WIN101-CGA-DISK.json"}]'
---

[Microsoft Windows 1.01](/software/pcx86/sys/windows/1.01/), the first public version of Windows, was released on
November 20, 1985.  It is shown here running on an IBM PC XT (Model 5160) with a CGA Display.  You can also run
Windows 1.01 with a [Debugger](debugger/) or [EGA Display](/software/pcx86/sys/windows/1.01/).

{% include machine.html id="ibm5160-cga-win101" %}

The above simulation is configured for a clock speed of 4.77Mhz, with 256Kb of RAM and a CGA Display,
using the original IBM PC Model 5160 ROM BIOS and CGA font ROM.  Even though the CGA was a "Color Graphics Adapter,"
the only CGA mode that Windows supported was the 640x200 2-color mode, hence its black-and-white appearance.

This PC XT configuration also includes a 10Mb hard disk with Windows 1.01 pre-installed.
This particular configuration will NOT save any changes when your browser exits, since it has
been pre-configured to always start Windows 1.01 in the same state.

NOTE: The Windows 1.01 mouse pointer can be controlled with your mouse, but only when your mouse is
within the "CGA Display" window. This is a restriction imposed by your web browser, not PCjs.

For more control over this machine, try the [Control Panel](debugger/) configuration, which features the built-in
PCjs Debugger, with save/restore enabled.
