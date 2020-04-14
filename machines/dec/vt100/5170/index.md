---
layout: page
title: DEC VT100 Terminal connected to IBM PC AT
permalink: /machines/dec/vt100/5170/
redirect_from: /devices/pcx86/machine/5170/ega/2048kb/rev3/vt100/
machines:
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /configs/vt100/vt100.json
    layout: /_includes/vt100/vt100.html
    connection: serialPort->ibm5170.com2
  - id: ibm5170
    type: pcx86
    connection: com2->vt100.serialPort
    config: /configs/pcx86/machine/ibm/5170/ega/2048kb/rev3/machine.xml
    autoType: \r\rCTTY COM2\r
---

Demonstration of a DEC VT100 Terminal connected to an IBM PC AT via COM2.  Also available with [Debuggers](debugger/).

The DOS command `CTTY COM2` uses the VT100 for console operations.  `CTTY CON` will return control to the PC.

{% include machine.html id="vt100" %}

{% include machine.html id="ibm5170" %}
