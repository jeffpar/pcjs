---
layout: page
title: DEC VT100 Terminal connected to IBM PC AT with Debuggers
permalink: /machines/dec/vt100/5170/debugger/
redirect_from: /devices/pcx86/machine/5170/ega/2048kb/rev3/debugger/vt100/
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    autoStart: true
    connection: com2->vt100.serialPort
    config: /machines/pcx86/machine/ibm/5170/ega/2048kb/rev3/debugger/vt100/machine.xml
  - id: vt100
    type: pcx80
    debugger: true
    autoStart: true
    connection: serialPort->ibm5170.com2
    config: /machines/pcx80/machine/vt100/debugger/machine.xml
---

Demonstration of a [DEC VT100 Terminal connected to IBM PC AT](../) connected via COM2, with Debuggers attached.

Use the DOS command `CTTY COM2` to use the VT100 for console operations.  `CTTY CON` will return control to the PC.

{% include machine.html id="vt100" %}

{% include machine.html id="ibm5170" %}
