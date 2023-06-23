---
layout: page
title: IBM PC XT Machine Array with Enhanced Color Displays
permalink: /software/pcx86/sys/windows/1.01/ega/array/
redirect_from:
  - /devices/pcx86/machine/5160/ega/640kb/array/
  - /software/pcx86/sys/windows/1.01/array/
preview: ../images/screenshot.png
machines:
  - id: ibm5160-ega-win101-1
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/640kb/array/machine.xml
    state: /software/pcx86/sys/windows/1.01/ega/state.json
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-WIN101-EGA.json"}]'
  - id: ibm5160-ega-win101-2
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/640kb/array/machine.xml
    state: /software/pcx86/sys/windows/1.01/ega/state.json
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-WIN101-EGA.json"}]'
  - id: ibm5160-ega-win101-3
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/640kb/array/machine.xml
    state: /software/pcx86/sys/windows/1.01/ega/state.json
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-WIN101-EGA.json"}]'
  - id: ibm5160-ega-win101-4
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/640kb/array/machine.xml
    state: /software/pcx86/sys/windows/1.01/ega/state.json
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-WIN101-EGA.json"}]'
---

The simulations below are identical PC XT configurations, each with a clock speed of 4.77Mhz, 640Kb of RAM,
and a 128Kb EGA connected to an Enhanced Color Display, using the original IBM EGA BIOS.

{% include machine.html id="ibm5160-ega-win101-1" %}

{% include machine.html id="ibm5160-ega-win101-2" %}

{% include machine.html id="ibm5160-ega-win101-3" %}

{% include machine.html id="ibm5160-ega-win101-4" %}
