---
layout: page
title: IBM PC XT Machine Array with Color Displays
permalink: /machines/pcx86/ibm/5160/cga/array/
redirect_from: /devices/pcx86/machine/5160/cga/256kb/array/
machines:
  - id: ibm5160-1
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/array/machine.xml
  - id: ibm5160-2
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/array/machine.xml
---

The simulations below are identical PC XT configurations, each with a clock speed of 4.77Mhz, 256Kb of RAM,
and a CGA display, using the original IBM PC Model 5160 ROM BIOS and CGA font ROM.  Each also includes an
empty/unformatted 10Mb hard disk. Use FDISK and then FORMAT to turn it into a usable C: drive.

{% include machine.html id="ibm5160-1" %}

{% include machine.html id="ibm5160-2" %}
