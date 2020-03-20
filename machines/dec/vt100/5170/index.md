---
layout: page
title: DEC VT100 Terminal connected to IBM PC AT
permalink: /machines/dec/vt100/5170/
redirect_from: /devices/pcx86/machine/5170/ega/2048kb/rev3/vt100/
machines:
  - id: ibm5170
    type: pcx86
    connection: com2->vt100.serialPort
    config: /configs/pcx86/xml/machine/5170/ega/2048kb/rev3/machine.xml
  - id: vt100
    type: pcx80
    connection: serialPort->ibm5170.com2
    config: /configs/pcx80/machine/vt100/machine.xml
---

Demonstration of a DEC VT100 Terminal connected to an IBM PC AT via COM2.  Also available with [Debuggers](debugger/).

Use the DOS command `CTTY COM2` to use the VT100 for console operations.  `CTTY CON` will return control to the PC.

{% include machine.html id="vt100" %}

{% include machine.html id="ibm5170" %}
