---
layout: post
title: "Super Bowl Winner: PCjs"
date: 2016-02-08 14:00:00
permalink: /blog/2016/02/08/
---

The new release of PCjs (v1.20.8) is a fairly minor update, but it's an important one for **FOOTBALL** fans, resolving
two annoying problems with the [OS/2 FOOTBALL Boot Disk](/software/pcx86/sys/os2/misc/87058/): mysterious hard-error popups
and blank screens.

A hard-error popup would occur when FOOTBALL tried to initialize a non-existent PRN device.  To resolve that, PCjs
now provides basic parallel port emulation, in the form of a [ParallelPort](/docs/pcx86/parallel/) component that you
include in a machine XML file with the &lt;parallel&gt; element, in much the same way you include the
[SerialPort](/docs/pcx86/serial/) component with the &lt;serial&gt; element.  This [Compaq DeskPro 386]
(/devices/pcx86/machine/compaq/deskpro386/ega/4096kb/debugger/) machine used to run FOOTBALL has now been updated to
include one parallel port.

The other problem was that switching between sessions with the **SysReq** key would often result in a blank screen;
the new session was active, but you couldn't see it.  This was a side-effect of how FOOTBALL reprograms the video
controller when switching screens *and* the linear page mappings it creates to access video memory, which in turn
exposed a PCjs memory-management bug.  The upshot is that whenever the Video component moves the address of the video
buffer (which is *physical* memory), it must tell the CPU to flush any linear-to-physical mappings that may still refer
to the old physical memory.

With these changes, the [OS/2 FOOTBALL Boot Disk](/software/pcx86/sys/os2/misc/87058/) appears to be quite usable now.
Feel free to give it a few kicks!

---

I've also tidied up a few things in the [Devices](/devices/) folder.  ROM images used to be stored under
`/devices/pcx86/basic/` and `/devices/pcx86/bios/`, but BASIC and BIOS ROM images aren't actually devices; they are the
*contents* of ROM devices.  So, with that in mind, I've made the following rearrangements:

* `/devices/pcx86/bios/5150/*` => `/devices/pcx86/rom/5150/*`
* `/devices/pcx86/bios/5160/*` => `/devices/pcx86/rom/5160/*`
* `/devices/pcx86/bios/5170/*` => `/devices/pcx86/rom/5170/*`
* `/devices/pcx86/bios/compaq/*` => `/devices/pcx86/rom/compaq/*`
* `/devices/pcx86/basic/ibm-basic-1.00.json` => `/devices/pcx86/rom/5150/basic/BASIC100.json`
* `/devices/pcx86/basic/ibm-basic-1.10.json` => `/devices/pcx86/rom/5160/basic/BASIC110.json`

This structure mirrors what was done with Machine and Video devices, where the devices are organized
first by manufacturer (IBM or COMPAQ) and then by type (MDA, CGA, EGA, etc).

Here, the first ROM subdivision is either a manufacturer or a machine model.  A model implies a manufacturer;
for example, models 5150 through 5170 refer to IBM PC models.

---

The project currently includes only two BASIC ROM versions, C1.00 and C1.10, which were initially released with the
first model 5150 and 5160 machines, respectively.  For more details, see [IBM PC ROMs](/devices/pcx86/rom/).

I believe there was also a BASIC ROM version 1.20 released for IBM PCjr, but since PCjs does not yet emulate the PCjr,
it has not been added to the project.
