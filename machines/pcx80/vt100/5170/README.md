---
layout: page
title: VT100 Terminal connected to IBM PC AT
permalink: /machines/pcx80/vt100/5170/
redirect_from: /devices/pcx86/machine/5170/ega/2048kb/rev3/vt100/
machines:
  - id: ibm5170
    type: pcx86
    connection: com2->vt100.serialPort
    config: /configs/pcx86/xml/machine/5170/ega/2048kb/rev3/machine.xml
  - id: vt100
    type: pcx80
    connection: serialPort->ibm5170.com2
    config: /configs/pcx80/xml/machine/vt100/machine.xml
---

Demonstration of a VT100 Terminal connected to an IBM PC AT via COM2.

A [Dual Debugger Configuration](debugger/) is also available.

{% include machine.html id="vt100" %}

{% include machine.html id="ibm5170" %}
